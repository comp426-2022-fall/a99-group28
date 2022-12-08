import './login.css'


export default function Login() {



  return (
    <div className='login'>
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">Nomenconnect</h3>
                    <sapn className="loginDesc">
                        See who you're compatible with on Nomenconnect.
                    </sapn>
                </div>
                <div className="loginRight">
                    <div className="loginBox">
                        <input placeholder="Username" className="loginInput" />
                        <input placeholder="Password" className="loginInput" />
                        
                        <button className="loginButton">Log In</button>
                        
                        <span className="loginForgot">Forgot password?</span>
                        <button className="loginRegisterButton">Create A new Account</button>
                    </div>
                
                </div>
            </div>
    </div>
  )
}
