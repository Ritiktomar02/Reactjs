import React, { useState } from 'react'
import validator from "validator"

const App = () => {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleChange = (e) => {
    const value = e.target.value
    setPassword(value)

    const isStrong = validator.isStrongPassword(value, {
      minLength: 8,
      minLowercase: 1,
      minUppercase: 1,
      minNumbers: 1,
      minSymbols: 1,
    })

    if (isStrong) {
      setError("Strong password ✅")
    } else {
      setError("Password must be at least 8 chars and include upper, lower, number & symbol ❌")
    }
  }

  return (
    <div>
      <h2>Checking Password Strength in ReactJS</h2>
      <span>Enter Password: </span>
      <input
        type="text"
        placeholder="Enter password"
        onChange={handleChange}
      />
      <p>{error}</p>
    </div>
  )
}

export default App
