import React, { useState, useContext } from 'react'
import UserContext from '../Context/UserContext'

export default function Login() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const { setUser } = useContext(UserContext)

  const handleSubmit = (e) => {
    e.preventDefault()
    setUser({ username, password })
    setUsername("")
    setPassword("")
  }

  return (
    <div>
      <h2>Login</h2>
      <div>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder='username'
        />
      </div>

      <div>
        <input
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder='password'
        />
      </div>

      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}