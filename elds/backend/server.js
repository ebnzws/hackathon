require('dotenv').config();
const express = require('express');
const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');
const cors = require('cors');
const ElevenLabs = require('elevenlabs-node');

const app = express();
app.use(cors());
app.use(express.static('public')); // Needed to serve the generated audio files

// Initialize ElevenLabs
const voice = new ElevenLabs({
    apiKey: process.env.ELEVENLABS_API_KEY
});

// UPDATED PATH: Goes up two levels from /backend/ and then into /Company/EldsMockData
const companyFolder = path.resolve(__dirname, '..', '..', 'Company', 'EldsMockData');

app.get('/api/analyze', async (req, res) => {
    console.log("Searching for MD files in:", companyFolder);

    try {
        // 1. Read the Folder
        if (!fs.existsSync(companyFolder)) {
            return res.status(404).json({ error: `Folder not found at ${companyFolder}` });
        }

        const files = fs.readdirSync(companyFolder);
        const mdFiles = files.filter(f => f.endsWith('.md'));

        if (mdFiles.length === 0) {
            return res.status(404).json({ error: "No Markdown files found in the directory." });
        }

        // 2. Read and Parse the first file
        const filePath = path.join(companyFolder, mdFiles[0]);
        const fileContent = fs.readFileSync(filePath, 'utf8');
        const { data, content } = matter(fileContent);

        const companyName = data.name || "Elds Company";
        const textToSpeak = `Hello. I have analyzed the repository for ${companyName}. The data scanning is complete and I am ready for the AI transformation process.`;

        // 3. Setup Audio Storage
        const publicPath = path.join(__dirname, 'public');
        if (!fs.existsSync(publicPath)) fs.mkdirSync(publicPath);

        const audioFileName = `speech-${Date.now()}.mp3`;
        const fullAudioPath = path.join(publicPath, audioFileName);

        // 4. ElevenLabs Voice Generation
        await voice.textToSpeech({
            voiceId: "XcXEQzuLXRU9RcfWzEJt",
            fileName: fullAudioPath,
            textInput: textToSpeak,
            stability: 0.5,
            similarityBoost: 0.75,
            modelId: "eleven_multilingual_v2",
            style: 0.0,
            speakerBoost: true
        });

        // 5. Success Response
        res.json({
            name: companyName,
            description: content,
            audioUrl: `http://localhost:3000/${audioFileName}`,
            questions: {
                ai: `How can AI optimize the workflow for ${companyName}?`,
                human: "Which strategic decisions in this company must remain human-led?"
            }
        });

    } catch (error) {
        console.error("Agent Error:", error);
        res.status(500).json({ error: "Analysis or Voice failed", details: error.message });
    }
});

app.listen(3000, () => {
    console.log("Backend server running at http://localhost:3000");
    console.log("Company Data Path:", companyFolder);
});