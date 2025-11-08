import React from 'react'
import styles from './Dashboard.module.css'
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import Skeleton from '@mui/material/Skeleton'
import WithAuthHOC from '../../utils/HOC/withAuthHOC';
import {useState} from 'react';
import axios from '../../utils/axios';
import {useContext} from 'react';
import {AuthContext} from '../../utils/authContext';
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
    try{
      const result=await axios.post('/api/resume/addResume', formData);
      console.log(result)
    }catch(err){
      console.log(err)
    }
  }
  return (
    <div className={styles.Dashboard}>
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

      <div className={styles.DashboardRight}>
        <div className={styles.DashboardRightTopCard}>
          <div>Analyze with AI</div>
          <img className={styles.profileImg} src={'https://plus.unsplash.com/premium_photo-1760058600121-c152ef2a6db9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5fHx8ZW58MHx8fHx8&auto=format&fit=crop&q=60&w=900'}/>
          <h2>Coding Hunger</h2>
        </div>

      {/*  <div className={styles.DashboardRightTopCard}>
          <div>Result</div>
          <div style={{display:"flex", justifyContent:"center", alignItems:"center", gap: 20}}>
            <h1>75%</h1>
            <QueryStatsIcon/>
          </div>
          <div className={styles.feedback}>
            <h3>Feedback</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae vero tenetur eos odio illo, sapiente eius voluptatem quo cum harum accusamus, animi inventore expedita repudiandae quisquam nulla, sed assumenda ab! Quae explicabo temporibus tempora?</p>
            </div>
        </div> */}

<Skeleton variant="rectangular" sx={{borderRadius: "20px"}} width={280} height={280}/>
                
        

      </div>
    </div>
  )
}

export default WithAuthHOC(Dashboard);
