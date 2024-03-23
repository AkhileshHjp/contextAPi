import React, { useState, useContext } from 'react'
import UserContext from '../context/UserContext'

function Login() {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const { setUser } = useContext(UserContext)
  const handleSubmit = (e) => {
    e.preventDefault()
    setUser({ username, password })
  }

  const inlineStyles = {
    color: 'red',
    backgroundColor: 'blue',
    fontSize: '20px',
    padding: '10px',
    borderRadius: '5px',
  };

  return (
    <div>
      <center>

        <div style={inlineStyles}>Login</div>
        <input type='text'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder='Username' ></input>
        <br />
        <input type='text'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder='Password' ></input>
        <br />
        <br />
        <button onClick={handleSubmit} style={inlineStyles}>Submit</button>
      </center>
    </div>

  )
}

export default Login