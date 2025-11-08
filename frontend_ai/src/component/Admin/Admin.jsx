
import styles from './Admin.module.css'
import Skeleton from '@mui/material/Skeleton'
import WithAuthHOC from '../../utils/HOC/withAuthHOC'
import React, {useState, useEffect} from 'react'
import axios from '../../utils/axios';
import ReactMarkdown from 'react-markdown';
const Admin = () => {
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(()=>{
      const fetchAllData= async()=>{
        try{
          const results=await axios.get('/api/resume/get');
          console.log(results.data.resumes);
          setData(results.data.resumes)

        }catch(err){
          console.log(err)
          alert("Something went wrong")
        }finally{
          setLoader(false)
        }
      }
      fetchAllData()
  }, [])


  return (
    <div className={styles.Admin}>
      <div className={styles.AdminBlock}>
        {loader && <>
        <Skeleton 
        variant="rectangular"
        width={266} 
        height={200}
        sx={{borderRadius: "20px"}}/>

        <Skeleton 
        variant="rectangular"
        width={266} 
        height={200}
        sx={{borderRadius: "20px"}}/>

        <Skeleton 
        variant="rectangular"
        width={266} 
        height={200}
        sx={{borderRadius: "20px"}}/>
        </>}
                
      {
        data.map((item, index)=>{
          return(
              <div className={styles.AdminCard}>
          <h2>{item?.user?.name}</h2>
          <p style={{color:"blue"}}>{item?.user?.email}</p>
          <h3>Score: {item.score}</h3>
          <ReactMarkdown>{item.feedback}</ReactMarkdown>
        </div>

          )
        })
      }
        

        

      
       
      </div>
    </div>
  )
}

export default WithAuthHOC(Admin);
