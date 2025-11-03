import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SideBar from './component/Sidebar/SideBar.jsx'
import {Routes, Route} from 'react-router-dom'
import Dashboard from './component/Dashboard/Dashboard'
import History from './component/History/History'
import Admin from './component/Admin/Admin'
import Login from './component/Login/Login'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <SideBar/>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/dashboard' element={<Dashboard/>}></Route>
        <Route path='/history' element={<History/>}></Route>
        <Route path='/admin' element={<Admin/>}></Route>
      </Routes>

    </div>
    
  )
}

export default App
