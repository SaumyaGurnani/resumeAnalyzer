
import styles from './History.module.css';
import Skeleton from '@mui/material/Skeleton';
import WithAuthHOC from '../../utils/HOC/withAuthHOC';
import { useState, useEffect, useContext } from 'react';
import axios from '../../utils/axios';
import { AuthContext } from '../../utils/authContext';
import ReactMarkdown from 'react-markdown';
const History = () => {
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(false);
  const { userInfo } = useContext(AuthContext);

  useEffect(() => {
    const fetchUserData = async () => {
      setLoader(true);
      try {
        const results = await axios.get(`/api/resume/get/${userInfo?._id}`);
        console.log(results.data.resumes);
        setData(results.data.resumes);
      }
      catch (err) {
        console.log(err)
        alert("Something went wrong")
      } finally {
       setLoader(false);
      }
    }
    fetchUserData()
  }, [])

  return (
    <div className={styles.History}>
      <div className={styles.HistoryCardBlock}>
        {
          loader && <>
           <Skeleton
            variant="rectangular"
            width={266}
            height={200}
            sx={{ borderRadius: "20px" }} />

             <Skeleton
            variant="rectangular"
            width={266}
            height={200}
            sx={{ borderRadius: "20px" }} />

             <Skeleton
            variant="rectangular"
            width={266}
            height={200}
            sx={{ borderRadius: "20px" }} />

             
          </>

        }

        {
          data.map((item, index) => {
            return (
              <div key={item._id} className={styles.HistoryCard}>
                <div className={styles.cardPercentage}>
                  Score: {item.score}
                </div>
                {/* <h2>Frontend Developer</h2> */}
                <p>Resume Name : {item.resume_name}</p>
                <ReactMarkdown>{item.feedback}</ReactMarkdown>
                <p>Dated : {item.createdAt ? new Date(item.createdAt).toLocaleDateString() : 'Date not available'}</p>
              </div>

            )
          })
        }


      </div>

    </div>
  )
}

export default WithAuthHOC(History)
