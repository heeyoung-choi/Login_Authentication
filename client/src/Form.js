import React from 'react'

function LoginForm(props) {
  return (
    <form className="Form" onSubmit={props.onSubmit}>
        <div>
            <h1>Login</h1>
        </div>
        <label htmlFor="email" className="lb">
          Email 
        </label>
        <input type="email" id="email"  required/>
        <label className="lb" htmlFor="password">
          Password
        </label>
        <input type={props.isSee ? "text" : "password"} className="password" required/>
        <label htmlFor="">
        
        <input type="checkbox" onClick={props.onChange} />
        Show password
        </label>
        
        <input className='btn btn-submit' type="submit" />
    </form>
  )
}

export default LoginForm