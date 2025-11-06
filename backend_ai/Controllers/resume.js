const ResumeModel = require('../Models/resume');
const pdfParse = require('pdf-parse');
const { CohereClient } = require("cohere-ai");
// const path = require("path"); // No longer needed
// const fs = require("fs"); // No longer needed

const cohere = new CohereClient({
    token: "pMwTtoOWqStt5efjemYVE2q57c8fl90cfMq44GzI",
});

exports.addResume = async (req, res) => {
    try {
        const { job_desc, user } = req.body;

        // 1. Check if file exists (from multer memoryStorage)
        if (!req.file || !req.file.buffer) {
            return res.status(400).json({ error: 'No file uploaded.' });
        }
        
        // 2. Parse the buffer directly from memory
        const pdfData = await pdfParse(req.file.buffer);

        // 3. Set up the prompt for the new Chat API
        const systemPrompt = `You are a resume screening assistant. 
Compare the following resume text with the provided Job Description(JD) and give a match score(0-100) and feedback.`;
    
        const userMessage = `Resume:
${pdfData.text}

Job Description:
${job_desc}`;

        // 4. Call cohere.chat() instead of cohere.generate()
        const response = await cohere.chat({
            model: "command",
            preamble: systemPrompt,
            message: userMessage,
            max_tokens: 500, // Increased tokens for better feedback
            temperature: 0.7,
        });

        // 5. Get the result from response.text
        let result = response.text;
        console.log(result);

        // Don't forget to send a response back to Postman/client
        res.status(200).json({
            message: "Resume processed successfully.",
            analysis: result 
        });

    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Server error', message: err.message });
    }
}