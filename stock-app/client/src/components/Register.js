import React, { useContext } from 'react'
import { GeneralContext } from '../context/GeneralContext';

const Register = ({setIsLoginBox}) => {
  const {setUsername, setEmail, setPassword, setUsertype, register} = useContext(GeneralContext);

  const handleRegister = async (e) => {
    e.preventDefault();
    await register()
  }

  return (
    <form className="authForm">
      <h2>Create Account</h2>
      <div className="authFormInputs">
        <input 
          type="text" 
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)} 
        />
      </div>
      <div className="authFormInputs">
        <input 
          type="email" 
          placeholder="Email address"
          onChange={(e) => setEmail(e.target.value)} 
        />
      </div>
      <div className="authFormInputs">
        <input 
          type="password" 
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)} 
        />
      </div>
      <select 
        className="authFormInputs"
        onChange={(e) => setUsertype(e.target.value)}
      >
        <option value="customer">Customer</option>
      </select>
      <button onClick={handleRegister}>Create Account</button>
      <p className='endline'>Already have an account? <span onClick={() => setIsLoginBox(true)}>Sign in</span></p>
    </form>
  )
}

export default Register;