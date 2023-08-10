import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'

function SecondInformationData({dataGeneralInformation, goNextPage})
{
    const [sData, setSDATA] = useState({
        name:'',
        email:'',
        phone:'',
        address:''
    });

    const handleChange = (e) =>
    {
       const { name, value } = e.target;
       setSDATA((prevInformation) => ({
         ...prevInformation,
         [name]: value,
       }));
    }

    useEffect(() => {
      // Call dataSubmitInformation whenever 'information' state changes
      dataGeneralInformation(sData);
    }, [sData]);

    const handleSubmit = (e) =>
    {
        e.preventDefault();
        let params = {
            name    : sData.name,
            email   : sData.email,
            phone   : sData.phone,
            address : sData.address,
        }
        console.log("HI USER",params);
        goNextPage();
        // const paramsJSON = JSON.stringify(params);
        // localStorage.setItem('params', paramsJSON);
      
        // toast.success("Data Submit Successfully");
        // setTimeout(() => {
        //   navigate('/home');
        // }, 3000);
    }

   return(
    <>
    <div className="bio-main-section">
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-lg-4"></div>
            <div className="col-lg-4">
              <h1>Second layout Data</h1>
              <div className="group-form" style={{ marginTop: '50px',marginBottom:'25px' }}>
                <label style={{ float: 'left',marginBottom:'8px'}}>Name: </label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  onChange={handleChange}
                />
              </div>
              <div className="group-form" style={{ marginBottom:'25px' }}>
                <label style={{ float: 'left',marginBottom:'8px'}}>Email: </label>
                <input
                  type="text"
                  name="email"
                  className="form-control"
                  onChange={handleChange}
                />
              </div>
              <div className="group-form" style={{ marginBottom:'25px' }}>
              <label style={{ float: 'left',marginBottom:'8px'}}>Phone: </label>
                <input
                  type="text"
                  name="phone"
                  className="form-control"
                  onChange={handleChange}
                />
              </div>
              <div className="group-form" style={{ marginBottom:'25px' }}>
              <label style={{ float: 'left',marginBottom:'8px'}}>Address: </label>
                <input
                  type="text"
                  name="address"
                  className="form-control"
                  onChange={handleChange}
                />
              </div>
              {/* <div className="group-form">
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div> */}
            </div>
            <div className="col-lg-4"></div>
          </div>
        </form>
      </div>
    </div>
    </>
   )
}
export default SecondInformationData