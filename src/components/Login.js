import React, { useContext } from 'react'
import { GeneralContext } from '../context/GeneralContext';

const Login = ({setIsLoginBox}) => {
  const {setEmail, setPassword, login} = useContext(GeneralContext);

  const handleLogin = async (e) => {
    e.preventDefault();
    await login();
  }

  return (
    <form className="authForm">
      <h2>Welcome Back</h2>
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
      <button type="submit" onClick={handleLogin}>Sign In</button>
      <p className='endline'>New to Growth Equity? <span onClick={() => setIsLoginBox(false)}>Create an account</span></p>
    </form>
  )
}

export default Login