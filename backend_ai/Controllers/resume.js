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
Compare the following resume text with the provided Job Description(JD).
You must respond *only* in the following format, with no other text:
Score: [ATS score from 0-100] Feedback: [your detailed feedback]`;
    
        const userMessage = `Resume:
${pdfData.text}

Job Description:
${job_desc}`;

        // 4. Call cohere.chat() instead of cohere.generate()
        const response = await cohere.chat({
            model: "command-a-03-2025",
            preamble: systemPrompt,
            message: userMessage,
            max_tokens: 500, // Increased tokens for better feedback
            temperature: 0.2,
        });

        // 5. Get the result from response.text
        let result = response.text;
        //console.log(result);
        const match=result.match(/Score:\s*(\d+)/);
        const score=match? parseInt(match[1], 10):null;
        const feedbackMatch=result.match(/Feedback:\s*([\s\S]*)/);
        const Feedback=feedbackMatch? feedbackMatch[1].trim():null;
       // console.log(score);
       // console.log(Feedback);
       const newResume=new ResumeModel({
            user,
            resume_name: req.file.originalname,
            job_desc,
            score: score,
            feedback: Feedback
       });
       await newResume.save();
  
        // Don't forget to send a response back to Postman/client
        res.status(200).json({
            message: "Your analysis is complete",
            data: newResume
        });

    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Server error', message: err.message });
    }
}

exports.getAllResumesForUser=async(req,res)=>{
    try{
        const {user}=req.params;
        let resumes=await ResumeModel.find({user:user}).sort({createdAt:-1});
        return res.status(200).json({message: "Your Previous History", resumes: resumes});
    }catch(err){
        console.error(err);
        return res.status(500).json({error: 'Server error', message: err.message});
    }
}

exports.getResumeForAdmin= async(req, res)=>{
    try{
        let resumes=await ResumeModel.find({}).sort({createdAt:-1});
        return res.status(200).json({message: "Fetched All History", resumes: resumes});
    }catch(err){
        console.error(err);
        return res.status(500).json({error: 'Server error', message: err.message});
    }
}