import { useState } from 'react'
import './App.css'
import UserContextProvider from "./context/UseContextProvider";
import Login from './component/Login';
import Profile from './component/Profile';
function App() {
  const [count, setCount] = useState(0)

  return (

    <UserContextProvider>
      <h1>hello Akhilesh </h1>
      <Login />
      <Profile />
    </UserContextProvider>

  )
}

export default App
