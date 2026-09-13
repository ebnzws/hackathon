# 🤖 AI Company Analysis Agent

This project is a single-page analysis tool that reads company information from local Markdown files, processes it using an OpenAI Agent, and generates dynamic AI transformation questions.

## 📂 Folder Structure

```text
/elds
├── /backend
│   ├── server.js          # Node.js API & AI Logic
│   ├── .env               # Private API Key
│   └── package.json       # Dependencies
├── /frontend
│   └── index.html         # Analysis Dashboard (UI)
└── /unternehmen
    └── /elds
        └── info.md        # Company Data (Markdown)
```

# Setup Instructions
1. Install Dependencies
   Navigate to your backend folder in the terminal and run:
   code
   Bash
   npm install express openai dotenv gray-matter cors
2. Configure Environment
   Create a .env file inside the backend folder:
   code
   Bash
   OPENAI_API_KEY=sk-proj-YOUR_KEY_HERE
   Make sure your OpenAI account has a positive credit balance.
3. Folder Path Check
   Ensure your data is located at:
   ../unternehmen/elds/
   (The path logic in server.js is case-sensitive on Mac).

## How to Run
1. Start the Backend
   In the backend folder, run:
   code
   Bash
   node server.js
   The terminal should say: "AI Agent Backend running on port 3000".

2. Run the Frontend
   Open the frontend/index.html file in your browser.
   📝 Important Elements
   Auto-Progress Bar: The UI shows a real-time progress line as the agent reads the file and calls the AI.
   Dynamic Questions: Questions are not hardcoded; the OpenAI Agent generates them based specifically on the text found in your .md file.
   Success Fold: Once analysis is complete, the results "reload" into the page with a clean success card.
   ⚠️ Troubleshooting
   401 Error: Your API key is incorrect or your OpenAI balance is $0.
   ENOENT Error: The server cannot find the /unternehmen/elds folder. Double-check capitalization.
   Restarting: Always press Ctrl + C and restart the server after changing the .env file.