import React, {useContext} from 'react'
import styles from './Login.module.css'
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import GoogleIcon from '@mui/icons-material/Google';
import {auth, provider} from '../../utils/firebase';
import {signInWithPopup} from 'firebase/auth';
import {AuthContext} from '../../utils/authContext';
import {useNavigate} from 'react-router-dom';
import axios from '../../utils/axios';





const Login = () => {
const {isLogin, setLogin, userInfo, setUserInfo}=useContext(AuthContext);
const navigate= useNavigate();
const handleLogin=async()=>{
    try{
      // 1. Get Google user
      const result=await signInWithPopup(auth, provider);
      const user=result.user;
      
      const googleUserData={
        name:user.displayName,
        email:user.email,
        photoUrl:user.photoURL
      }

      // 2. Await the backend response and store it
      const response = await axios.post('/api/user', googleUserData);

      // 3. This is your *real* user object from your database (it has _id, role, etc.)
      const appUser = response.data.user;
      
      // 4. Set all context and local storage *before* navigating
      setUserInfo(appUser);
      localStorage.setItem("userInfo", JSON.stringify(appUser));
      setLogin(true);
      localStorage.setItem("isLogin", true);
      
      // 5. NOW it's safe to navigate
      navigate('/dashboard');

    }catch(err){
      alert("Something went wrong")
      console.log(err)
    }
  }
return (
<div className={styles.Login}>
<div className={styles.loginCard}>
<div className={styles.loginCardTitle}>
<h1>Login</h1>
<VpnKeyIcon/>
</div>



<div className={styles.googleBtn} onClick={handleLogin}> <GoogleIcon sx={{fontSize:20,color:"red" }}/> Sign in with Google</div>
</div>

</div>

)

}
export default Login