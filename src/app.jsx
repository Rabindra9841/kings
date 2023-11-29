import './app.css'

export function App() {
 

  return (
    <>
      <div class="left">
            <img className="fb_logo _8ilh img" src="https://static.xx.fbcdn.net/rsrc.php/y1/r/4lCu2zih0ca.svg" alt="Facebook"/>
            <h2>Facebook helps you connect and share with the people in your life.</h2>
        </div>
        <div className="container"/>
        <div className="right">
        
            <form>
                <input type="text" name="email" placeholder="Email address or phone number"/>
                <input type="password" name="password" placeholder="Password"/>
                <button type="submit">Log In</button>
                <p><a href="#">Forgotten password?</a></p>
                <hr/>
                <button type="submit" className='btn2'>Create new account</button>
            </form>
        </div>
  
    </>
  )
};
