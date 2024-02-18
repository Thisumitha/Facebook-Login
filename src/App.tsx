import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './App.css'
import Header from './commponent/Header'
import Login from './commponent/Login';

function App() {
  

  return (
    <>
    <div className="container">
      <div className='row'>
        <div className="col-lg-6 col-m-12 col-sm-12">
           <Header/>
        </div>
        <div className='col-lg-6 col-m-12 col-sm-12'>
          <Login/>
        </div>
      </div>
    </div>
    
    </>
  )
}

export default App
