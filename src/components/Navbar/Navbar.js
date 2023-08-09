import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {

    const navigate = useNavigate();
    const token = localStorage.getItem('token');

    console.log("TOKEN",token);

    const removeOut = () =>
    { 
        localStorage.removeItem('token');
        navigate('/login');
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark"  data-bs-theme="dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to={"/"}>Navbar</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item me-3">
                                {
                                    !token ? 
                                    <Link className="btn btn-primary c-btn" aria-current="page" to={"/login"}>Login</Link>
                                    :
                                    <a className="btn btn-primary c-btn" onClick={removeOut} aria-current="page" href="#">Sign out</a>
                                }
                            </li>
                            { !token ?                             <li className="nav-item">
                            <Link className="btn btn-primary c-btn" aria-current="page" to={"/register"}>Sign up for free</Link>
                            </li>
                        : ''    
                        }
                            
                        </ul>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Navbar