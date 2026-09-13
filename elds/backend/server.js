require('dotenv').config(); // Loads your token from .env
const express = require('express');
const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');
const cors = require('cors');

const app = express();
app.use(cors());

require('dotenv').config();
console.log("Key loaded:", process.env.OPENAI_API_KEY ? process.env.OPENAI_API_KEY.substring(0, 7) + "..." : "NOT FOUND");

// Path to your folder
const companyFolder = path.resolve(__dirname, '..', '..', 'Company', 'EldsMockData');

app.get('/api/analyze', (req, res) => {
    console.log("Attempting to read:", companyFolder);

    try {
        if (!fs.existsSync(companyFolder)) {
            // This will tell us if it's a typing error
            return res.status(404).json({
                error: "Folder not found",
                checkedPath: companyFolder
            });
        }

        const files = fs.readdirSync(companyFolder);
        console.log("Files found:", files); // Should show your .md files

        const mdFiles = files.filter(file => file.endsWith('.md'));

        if (mdFiles.length === 0) {
            return res.status(404).json({ error: "No .md files found in the folder." });
        }

        const filePath = path.join(companyFolder, mdFiles[0]);
        const fileContent = fs.readFileSync(filePath, 'utf8');
        const { data, content } = matter(fileContent);

        res.json({
            name: data.name || "Company Name Missing in MD",
            sector: data.sector || "Sector Missing in MD",
            description: content.slice(0, 500) + "...",
            questions: {
                ai: `How can AI optimize ${data.name || 'your company'}?`,
                human: `What should remain human-centric?`
            }
        });

    } catch (err) {
        res.status(500).json({ error: "Read Error", details: err.message });
    }
});

app.listen(3000, () => console.log("Server running on port 3000"));