import React from 'react'
import styles from './Admin.module.css'
import Skeleton from '@mui/material/Skeleton'
import WithAuthHOC from '../../utils/HOC/withAuthHOC'
const Admin = () => {
  return (
    <div className={styles.Admin}>
      <div className={styles.AdminBlock}>
        <Skeleton 
        variant="rectangular"
        width={266} 
        height={200}
        sx={{borderRadius: "20px"}}/>
                
        <div className={styles.AdminCard}>
          <h2>CodingHunger</h2>
          <p style={{color:"blue"}}>saumya@gmail.com</p>
          <h3>Score: 50%</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus nobis aperiam ea ab iusto autem velit eum libero sunt natus placeat in tempora labore animi nisi, debitis dolores illum asperiores. Vitae expedita libero sunt ipsam dolor, labore mollitia similique inventore.</p>
        </div>

        <div className={styles.AdminCard}>
          <h2>CodingHunger</h2>
          <p style={{color:"blue"}}>saumya@gmail.com</p>
          <h3>Score: 50%</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus nobis aperiam ea ab iusto autem velit eum libero sunt natus placeat in tempora labore animi nisi, debitis dolores illum asperiores. Vitae expedita libero sunt ipsam dolor, labore mollitia similique inventore.</p>
        </div>

        <div className={styles.AdminCard}>
          <h2>CodingHunger</h2>
          <p style={{color:"blue"}}>saumya@gmail.com</p>
          <h3>Score: 50%</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus nobis aperiam ea ab iusto autem velit eum libero sunt natus placeat in tempora labore animi nisi, debitis dolores illum asperiores. Vitae expedita libero sunt ipsam dolor, labore mollitia similique inventore.</p>
        </div>

        <div className={styles.AdminCard}>
          <h2>CodingHunger</h2>
          <p style={{color:"blue"}}>saumya@gmail.com</p>
          <h3>Score: 50%</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus nobis aperiam ea ab iusto autem velit eum libero sunt natus placeat in tempora labore animi nisi, debitis dolores illum asperiores. Vitae expedita libero sunt ipsam dolor, labore mollitia similique inventore.</p>
        </div>

        <div className={styles.AdminCard}>
          <h2>CodingHunger</h2>
          <p style={{color:"blue"}}>saumya@gmail.com</p>
          <h3>Score: 50%</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus nobis aperiam ea ab iusto autem velit eum libero sunt natus placeat in tempora labore animi nisi, debitis dolores illum asperiores. Vitae expedita libero sunt ipsam dolor, labore mollitia similique inventore.</p>
        </div>

      </div>
    </div>
  )
}

export default WithAuthHOC(Admin);
