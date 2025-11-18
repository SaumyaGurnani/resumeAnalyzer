import React from 'react'
import styles from './Dashboard.module.css'
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import Skeleton from '@mui/material/Skeleton'
import WithAuthHOC from '../../utils/HOC/withAuthHOC';
import {useState} from 'react';
import axios from '../../utils/axios';
import {useContext} from 'react';
import {AuthContext} from '../../utils/authContext';
import ReactMarkdown from 'react-markdown'; // <-- Make sure this is imported

const Dashboard = () => {
  const [uploadFiletext, setUploadFileText]=useState("Upload Your Resume");
  const [loading, setLoading]=useState(false);
  const [resumeFile, setResumeFile]=useState(null);
  const [jobDesc, setJobDesc]=useState("");
  const [result, setResult]=useState(null);
  const {userInfo}=useContext(AuthContext)
  
  const handleOnChangeFile=(e)=>{
    setResumeFile(e.target.files[0]);
    setUploadFileText(e.target.files[0].name)

  }
  
  const handleUpload=async()=>{
    setResult(null);
   
    if(!jobDesc || !resumeFile){
      alert("Please fill Job Description & Upload Resume");
      return;
    }
    const formData=new FormData();
    formData.append("resume", resumeFile);
    formData.append("job_desc", jobDesc);
    formData.append("user", userInfo._id);
    setLoading(true);
    try{
      const result=await axios.post('/api/resume/addResume', formData);
      setResult(result.data.data);
    }catch(err){
      console.log(err)
    }finally{
      setLoading(false);
    }
  }
  
  return (
    <div className={styles.Dashboard}>
    
      {/* --- 1. ADD THE NEW MAIN COLUMN WRAPPER --- */}
      <div className={styles.DashboardMainColumn}>

        {/* This is your original DashboardLeft block */}
        <div className={styles.DashboardLeft}>
          <div className={styles.DashboardHeader}>
            <div className={styles.DashboardHeaderTitle}>Smart Resume Screening</div>
            <div className={styles.DashboardHeaderLargeTitle}>Resume ATS Score</div>
          </div>
          <div className={styles.alertInfo}>
            <div>Important Instructions:</div>
            <div className={styles.dashboardInstruction}>
              <div>• Please paste the complete job description in the "Job Description" field before submitting.</div>
              <div>• Only pdf format (.pdf) resumes are accepted.</div>
            </div>
          </div>
          <div className={styles.DashboardUploadResume}>
            <div className={styles.DashboardResumeBlock}>
              {uploadFiletext}
            </div>
            <div className={styles.DashboardInputField}>
              <label htmlFor='inputField' className={styles.analyzeAIBtn}>Upload Resume</label>
              <input type='file' accept=".pdf" id='inputField' onChange={handleOnChangeFile}/>
            </div>
          </div>

          <div className={styles.jobDesc}>
            <textarea value={jobDesc} onChange={(e)=>{setJobDesc(e.target.value)}} className={styles.textArea} placeholder='Paste Your Job Description' rows={10} cols={50}/>
            <div className={styles.AnalyzeBtn} onClick={handleUpload}>Analyze</div>
          </div>
        </div>

        {/* --- 2. MOVED THE RESULT/SKELETON BLOCKS HERE --- */}
        {/* They are now children of the new column, but *after* the DashboardLeft block */}
        {
          loading && (
            <Skeleton 
              variant="rectangular" 
              sx={{borderRadius: "20px"}} 
              width={"100%"} // Fills the new column
              height={280}
            />
          )
        }
        {
          result && (
            <div 
              className={styles.DashboardRightTopCard}
              // Style it to fill the width and align text left
              style={{width: '100%', boxSizing: 'border-box', alignItems: 'flex-start'}}
            >
              <div>Result</div>
              
              {/* Display Score and Skill Match Percentage */}
              <div style={{ marginTop: '10px', marginBottom: '15px' }}>
                {/* Score */}
                <div style={{display:"flex", alignItems:"center", gap: 10, marginBottom: '5px'}}>
                  <h2 style={{margin: 0}}>Score: {result?.score}/100</h2>
                  <QueryStatsIcon sx={{fontSize: 22}}/>
                </div>
                {/* Skill Match Percentage - ADDED THIS BLOCK */}
                <div style={{ fontSize: '1.2em', fontWeight: 'bold', color: '#007bff' }}>
                  Skill Match Percentage: {result?.skill_match}%
                </div>
              </div>
              
              <div className={styles.feedback}>
                <h3>Feedback</h3>
                {/* Use ReactMarkdown to render the feedback */}
                <ReactMarkdown>{result?.feedback}</ReactMarkdown>
              </div>
            </div>
          )
        }

      </div>
      {/* --- END OF NEW MAIN COLUMN --- */}


      {/* The DashboardRight now *only* contains the profile card */}
      <div className={styles.DashboardRight}>
        <div className={styles.DashboardRightTopCard}>
          <div>Analyze with AI</div>
          <img className={styles.profileImg} src={userInfo?.photoUrl}/>
          <h2>{userInfo?.name}</h2>
        </div>
      </div>

    </div>
  )
}

export default WithAuthHOC(Dashboard);