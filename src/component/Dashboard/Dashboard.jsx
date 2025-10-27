import React from 'react'
import styles from './Dashboard.module.css'
import QueryStatsIcon from '@mui/icons-material/QueryStats';
const Dashboard = () => {
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
            Upload Your Resume
          </div>
          <div className={styles.DashboardInputField}>
            <label htmlFor='inputField' className={styles.analyzeAIBtn}>Upload Resume</label>
            <input type='file' accept=".pdf" id='inputField' />
          </div>
        </div>

        <div className={styles.jobDesc}>
          <textarea className={styles.textArea} placeholder='Paste Your Job Description' rows={10} cols={50}/>
          <div className={styles.AnalyzeBtn}>Analyze</div>
        </div>

      </div>

      <div className={styles.DashboardRight}>
        <div className={styles.DashboardRightTopCard}>
          <div>Analyze with AI</div>
          <img className={styles.profileImg} src={'https://plus.unsplash.com/premium_photo-1760058600121-c152ef2a6db9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5fHx8ZW58MHx8fHx8&auto=format&fit=crop&q=60&w=900'}/>
          <h2>Coding Hunger</h2>
        </div>

        <div className={styles.DashboardRightTopCard}>
          <div>Result</div>
          <div style={{display:"flex", justifyContent:"center", alignItems:"center", gap: 20}}>
            <h1>75%</h1>
            <QueryStatsIcon/>
          </div>
          <h2>Coding Hunger</h2>
        </div>
        
        

      </div>
    </div>
  )
}

export default Dashboard
