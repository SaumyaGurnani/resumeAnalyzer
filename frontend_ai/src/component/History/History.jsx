import React from 'react'
import styles from './History.module.css'
import Skeleton from '@mui/material/Skeleton'
import WithAuthHOC from '../../utils/HOC/withAuthHOC'

const History = () => {
  return (
    <div className={styles.History}>
      <div className={styles.HistoryCardBlock}>
        <Skeleton 
        variant="rectangular"
        width={266} 
        height={200}
        sx={{borderRadius: "20px"}}/>
                
        
        <div className={styles.HistoryCard}>
          <div className={styles.cardPercentage}>
            80%
          </div>
          <h2>Frontend Developer</h2>
          <p>Resume Name : Resume.pdf</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem aut praesentium eum, nulla corrupti recusandae quam veritatis eaque placeat, officiis assumenda libero excepturi illo ipsa rerum ad hic autem quos odit beatae eos corporis atque nostrum odio. Ratione doloribus impedit, earum iste corporis autem officia labore, dolorem, tempora architecto illum.</p>
          <p>Dated : 2025-11-18</p>
        </div>
        <div className={styles.HistoryCard}>
          <div className={styles.cardPercentage}>
            80%
          </div>
          <h2>Frontend Developer</h2>
          <p>Resume Name : Resume.pdf</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem aut praesentium eum, nulla corrupti recusandae quam veritatis eaque placeat, officiis assumenda libero excepturi illo ipsa rerum ad hic autem quos odit beatae eos corporis atque nostrum odio. Ratione doloribus impedit, earum iste corporis autem officia labore, dolorem, tempora architecto illum.</p>
          <p>Dated : 2025-11-18</p>
        </div>
        <div className={styles.HistoryCard}>
          <div className={styles.cardPercentage}>
            80%
          </div>
          <h2>Frontend Developer</h2>
          <p>Resume Name : Resume.pdf</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem aut praesentium eum, nulla corrupti recusandae quam veritatis eaque placeat, officiis assumenda libero excepturi illo ipsa rerum ad hic autem quos odit beatae eos corporis atque nostrum odio. Ratione doloribus impedit, earum iste corporis autem officia labore, dolorem, tempora architecto illum.</p>
          <p>Dated : 2025-11-18</p>
        </div>
        <div className={styles.HistoryCard}>
          <div className={styles.cardPercentage}>
            80%
          </div>
          <h2>Frontend Developer</h2>
          <p>Resume Name : Resume.pdf</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem aut praesentium eum, nulla corrupti recusandae quam veritatis eaque placeat, officiis assumenda libero excepturi illo ipsa rerum ad hic autem quos odit beatae eos corporis atque nostrum odio. Ratione doloribus impedit, earum iste corporis autem officia labore, dolorem, tempora architecto illum.</p>
          <p>Dated : 2025-11-18</p>
        </div>
        <div className={styles.HistoryCard}>
          <div className={styles.cardPercentage}>
            80%
          </div>
          <h2>Frontend Developer</h2>
          <p>Resume Name : Resume.pdf</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem aut praesentium eum, nulla corrupti recusandae quam veritatis eaque placeat, officiis assumenda libero excepturi illo ipsa rerum ad hic autem quos odit beatae eos corporis atque nostrum odio. Ratione doloribus impedit, earum iste corporis autem officia labore, dolorem, tempora architecto illum.</p>
          <p>Dated : 2025-11-18</p>
        </div>



      </div>
   
    </div>
  )
}

export default WithAuthHOC(History)
