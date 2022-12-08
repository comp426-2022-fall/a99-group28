import './register.css'

export default function Register() {
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
                        <input placeholder="Email" className="loginInput" />
                        <input placeholder="Password" className="loginInput" />
                        <input placeholder="Repeat Password" className="loginInput" />
                        <button className="loginButton">Sign Up In</button>
                       
                        <button className="loginRegisterButton">Log into Account</button>
                    </div>
                
                </div>
            </div>
    </div>
  )
}
