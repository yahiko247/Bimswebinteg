import '../components/css/Stylelogin.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';  // Assuming you're using React Router
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import { Toolbar } from '@mui/material';
function Login() {
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  

  const handleSubmit = (event) => {
    event.preventDefault();
    // Your login logic here
    console.log('Form submitted with data:', formData);
  };

  const handleInput = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
    <div className='row w-100'>
      <div className='col-md-6'>
        <div className='login-container d-flex justify-content-center align-items-center vh-100'>
          <div className=' text-white text-center '>
            <h2>B I M S</h2>
            <form onSubmit={handleSubmit}>
              <div className='mb-3'>
                <input
                  type="email"
                  placeholder='Username'
                  name="email"
                  value={formData.email}
                  onChange={handleInput}
                  className='form-control rounded-50'
                />
                {errors.email && <span className='text-danger'>{errors.email}</span>}
              </div>
              <div className='mb-3'>
                <input
                  type="password"
                  placeholder='Password'
                  name="password"
                  value={formData.password}
                  onChange={handleInput}
                  className='form-control rounded-50'
                />
                {errors.password && <span className='text-danger'>{errors.password}</span>}
              </div>
              <div className='d-flex justify-content-between align-items-center'>
                <p style={{fontSize:'12px'}}>Remember me?</p>
                <button type='submit' className='btn btn-success w-50'>Login</button>
              </div>
              <hr className="divider" />
                <p style={{ fontSize: '12px', margin: '0 10px' }}>or create with <Link to="/register">Sign Up</Link></p>
              
               <div className='d-flex align-items-center'  style={{color: 'rgba(16, 170, 142, 1)', margin:'20px'}}>
                <FacebookIcon style={{marginRight: '90px', marginLeft:'10px'}}/>
                  <GoogleIcon/>
               </div>
               
            </form>
          </div>
        </div>
      </div>
      <div className='col-md-5 d-flex justify-content-center align-items-center'>
        <div>
          <h3>Welcome to</h3>
          <p>Brangay Information Management System.
          BIMS can track residents record such as personal to family information,
          complaints to amicable settlement information (Barangay Justice System) and can create daily reports for the Barangay.
          </p>
          
        </div>
      </div>
    </div>
  );
}

export default Login;
