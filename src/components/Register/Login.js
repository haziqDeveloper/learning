import React,{useState} from 'react'
import './Register.css'
import { Link, useNavigate } from 'react-router-dom'
import { postLogin } from '../../store/services/auth'
import toast from 'react-hot-toast';

const Login = () => {
    const navigate = useNavigate();
    const [login, setLogin] = useState('');

    const handleChange = (e) =>
    {
        setLogin({...login,[e.target.name]:e.target.value});
    }

    const handleSubmit = (e) =>
    {
        e.preventDefault();
        let params = 
        {
            email: login.email,
            password: login.password
        }
        console.log("Params", params);
        const token = 'your_generated_token'; // Replace with the actual token received from the server
        localStorage.setItem('token', token);
            postLogin(params)
            .then((r) => {
                console.log("R",r)
                toast.success("Login Is Created!");
                navigate('/mainLayout');
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
                        <label htmlFor="exampleInputEmail1" className="form-label text-muted text-uppercase"><small>Email</small></label>
                        <input type="email" name="email" onChange={handleChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='name@email.com' />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label text-muted text-uppercase"><small>Password</small></label>
                        <input type="password" name="password" onChange={handleChange} className="form-control" id="exampleInputPassword1" placeholder='Password' />
                    </div>
                    <br/>
                    <button type="submit" className="btn btn-dark w-100 mb-4">submit</button>
                    <div className='text-center'>
                    <Link to={"/register"} className='text-dark'>Back</Link>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Login