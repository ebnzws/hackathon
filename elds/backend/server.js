require('dotenv').config(); // Loads your token from .env
const express = require('express');
const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');
const cors = require('cors');
const { OpenAI } = require('openai'); // Import OpenAI

const app = express();
app.use(cors());

// Initialize the AI Agent
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

require('dotenv').config();
console.log("Key loaded:", process.env.OPENAI_API_KEY ? process.env.OPENAI_API_KEY.substring(0, 7) + "..." : "NOT FOUND");

// Path to your folder
const companyFolder = path.resolve(__dirname, '..', '..', 'Company', 'EldsMockData');

app.get('/api/analyze', async (req, res) => {
    try {
        // 1. Read the local MD file (same logic as before)
        const files = fs.readdirSync(companyFolder);
        const mdFiles = files.filter(f => f.endsWith('.md'));
        const filePath = path.join(companyFolder, mdFiles[0]);
        const fileContent = fs.readFileSync(filePath, 'utf8');
        const { data, content } = matter(fileContent);

        // 2. CALL THE AI AGENT
        // We send the MD content to the AI and ask for two specific questions
        const completion = await openai.chat.completions.create({
            model: "gpt-3.5-turbo", // or "gpt-4"
            messages: [
                {
                    role: "system",
                    content: "You are a business consultant helping companies with AI transformation. Based on the company description provided, generate two short, insightful questions for the CEO."
                },
                {
                    role: "user",
                    content: `Company: ${data.name}. Sector: ${data.sector}. Description: ${content}. 
                    Please provide:
                    1. One question about how AI can improve their specific business.
                    2. One question about what should remain human-led.
                    Format the response as a JSON with keys "ai" and "human".`
                }
            ],
            response_format: { type: "json_object" }
        });

        // 3. Parse the AI's response
        const aiQuestions = JSON.parse(completion.choices[0].message.content);

        // 4. Send everything back to your website
        res.json({
            name: data.name,
            sector: data.sector,
            description: content.substring(0, 500) + "...",
            questions: aiQuestions // These are now real AI questions!
        });

    } catch (error) {
        console.error("AI Error:", error);
        res.status(500).json({ error: "AI Agent failed", details: error.message });
    }
});

app.listen(3000, () => console.log("AI Agent Backend running on port 3000"));
