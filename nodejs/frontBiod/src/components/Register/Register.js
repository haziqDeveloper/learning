import React,{useState} from 'react'
import './Register.css';
import { Link, useNavigate } from 'react-router-dom'
import { postRegister } from '../../store/services/auth';
import toast from 'react-hot-toast';

const Register = () => {

    const navigate = useNavigate();
    const [register, setRegister] = useState('');

    const handleChange = (e) =>
    {
        setRegister({...register,[e.target.name]:e.target.value});
    }

    const handleSubmit = (e) =>
    {
        e.preventDefault();
        let params = 
        {
            fname: register.fname,
            lname: register.lname,
            email: register.email,
            password: register.password
        }
        console.log("Params", params);
    
            postRegister(params)
            .then((r) => {
                console.log("R",r)
                toast.success("Sign Up Is Successfully!");
                navigate('/login');
            })
            .catch((error) => {
                console.log("Error",error);
               toast.error(error.response.data.error);
            })
    }
    
    return (
        <>
            <div className="form-wrapper d-flex flex-column justify-content-center align-items-center">
                <h1 className='mb-5'>Create Your Account</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputfname" className="form-label text-muted text-uppercase"><small>First Name:</small></label>
                        <input type="text" name="fname" onChange={handleChange} className="form-control" id="exampleInputfname" placeholder='First Name' />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputlname" className="form-label text-muted text-uppercase"><small>Last Name:</small></label>
                        <input type="text" name="lname" onChange={handleChange} className="form-control" id="exampleInputlname" placeholder='Last Name' />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label text-muted text-uppercase"><small>Email</small></label>
                        <input type="email" name="email" onChange={handleChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='name@email.com' />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label text-muted text-uppercase"><small>Password</small></label>
                        <input type="password" name="password" onChange={handleChange} className="form-control" id="exampleInputPassword1" placeholder='Password' />
                    </div>
                    <div className='mb-3 text-center'>
                        <small className='text-muted'>By creating an account, you agree to our Terms of Service<br/> and have read and understood the Privacy Policy</small>
                    </div>
                    <button type="submit" className="btn btn-dark w-100 mb-4">Continue</button>
                    <div className='text-center'>
                    <Link to={"/"} className='text-dark'>Back</Link>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Register