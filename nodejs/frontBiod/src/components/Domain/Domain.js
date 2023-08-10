import React, { useState, useEffect } from 'react';
import './Domain.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Domain = () => {
  const [inputArr, setInputArr] = useState([]);
  const [inputData, setInputData] = useState({
    domain: "",
  });
  const [isDomainRegistered, setIsDomainRegistered] = useState(true); // Set to true by default

  useEffect(() => {
    setIsDomainRegistered(false); // Reset the state on each input change

    const domain = inputData.domain;

    if (domain !== '') {
      axios
        .post("http://localhost:8000/api/v1/auth/checkDomain", { domain })
        .then((response) => {
          if (response.status === 200) {
            console.log("domain already register");
            setIsDomainRegistered(true); // Set the state to true if domain is registered
          } else {
            setIsDomainRegistered(false); // Set the state to false if domain is not registered
          }
          console.log(response.data);
        })
    } else {
      setIsDomainRegistered(true); // Set the state to true if domain input is empty
      localStorage.clear();
    }
  }, [inputData.domain]);

  const inputChange = (e) => {
    const { name, value } = e.target;
    setInputData({ ...inputData, [name]: value });
    localStorage.setItem("domain", value); // Store the latest value in localStorage
    const domain = value;
    axios
      .post("http://localhost:8000/api/v1/auth/checkDomain", { domain })
      .then((response) => {
        if (response.status === 200) {
          console.log("domain already register");
          setIsDomainRegistered(true); // Set the state to true if domain is registered
        }
        console.log(response.data);
      })
    if (value === '') {
      setIsDomainRegistered(true); // Set the state to true if domain input is empty
      localStorage.clear();
    }
  };

  let { domain } = inputData;
  const navigate = useNavigate();

  const isLinkEnabled = !isDomainRegistered; // Determine if the link should be enabled or disabled

  const submitData = (e) => {
    if (isLinkEnabled) {
      setInputArr([...inputArr, { domain }]);
      setInputData({ domain: "" });
      navigate('/register');
      e.preventDefault();
    }
  };

  return (
    <>
      <div className="d-wrapper">
        <h6 className='text-white text-uppercase'>
          get a free bio site
        </h6>
        <h1 className='text-white'>Claim your free username</h1>
        <div className="input-wrapper mt-2">
          <span className='text-white'>
            bio.site/
          </span>
          <input
            type="text"
            className='form-control ps-0'
            placeholder='username'
            name="domain" // Added 'name' attribute
            onChange={inputChange}
            value={domain} // Bind the input value to the state value
          />
          <Link
            onClick={submitData}
            className={isLinkEnabled ? '' : 'disabled'} // Remove 'disabled' class if link is enabled
            disabled={!isLinkEnabled} // Use 'disabled' attribute to disable the link visually
          >
            <i className="fa-solid fa-arrow-right"></i>
          </Link>
        </div>
        {isDomainRegistered && (
          <p className='text-danger mt-4'>domain already exist. choose a different domain</p>
        )}
      </div>
    </>
  );
};

export default Domain;
