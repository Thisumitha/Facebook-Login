import './Login.css'
function Login() {

    return (
      <>
       <div className="login-form margin">
    <form >
             
        <div className="form-group">
            <input type="text" className="form-control mt-3" placeholder="Username" />
        </div>
        <div className="form-group">
            <input type="password" className="form-control mt-3 " placeholder="Password" />
        </div>
        <div className="text-center d-flex flex-column">
            <button type="submit" className="btn btn-primary  mt-3  btn-lg ">Log in</button>
        </div>
        <div className="text-center">
            <div className='justify-content-center mt-2'>
            <a href="#" className="text-center">Forgot Password?</a>
            </div>
        </div>
        <hr />
        <div className="text-center d-flex flex-column">
            <button type="submit" className="btn btn-success  mt-3  btn-lg ">Create Account</button>
        </div>

    </form>
    <p className="text-center"><a href="#">Create a Page for a celebrity, brand or business.</a></p>
</div>
      </>
    );
  }
  
  export default Login;
  