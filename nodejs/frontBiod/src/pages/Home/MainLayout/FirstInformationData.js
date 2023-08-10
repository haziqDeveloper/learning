import React, { useState, useEffect } from 'react';
import Files from '../../../assets/img/eggdog.jpg'

function FirstInformationData({ dataSubmitFile, dataSubmitInformation, goNextPage }) {
  const [file, setFile] = useState(Files);
  const [information, setInformation] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChangeImage = (e) => {
    const newFile = URL.createObjectURL(e.target.files[0]);
    setFile(newFile);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInformation((prevInformation) => ({
      ...prevInformation,
      [name]: value,
    }));
  };

  useEffect(() => {
    // Call dataSubmitFile whenever 'file' state changes
    dataSubmitFile(file);
  }, [file]);

  useEffect(() => {
    // Call dataSubmitInformation whenever 'information' state changes
    dataSubmitInformation(information);
  }, [information]);

  const handleSubmit = (e) => {
    console.log("Params");
    e.preventDefault();
    setFormSubmitted(true); // Set the formSubmitted to true when the form is submitted

    // Validation logic
    if (!information.name || !file) {
      alert('Please fill in all required fields.');
      return;
    }

    let params = {
      name: information.name,
    };
    params.image = file;
    // dataSubmit(params);
    goNextPage();
  };

  return (
    <div className="bio-main-section">
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-lg-4"></div>
            <div className="col-lg-4">
              <h1>First layout Data</h1>
              <div className="group-form" style={{ marginTop: '50px' }}>
                <input
                  type="file"
                  name="image"
                  className="form-control"
                  onChange={handleChangeImage}
                />
                <img
                  src={file}
                  style={{
                    width: '140px',
                    height: '140px',
                    marginTop: '24px',
                    marginBottom: '20px',
                  }}
                />
              </div>
              <div className="group-form">
                <label style={{"float": "left"}}>Name: </label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  onChange={handleChange}
                />
                {formSubmitted && !information.name && (
                    <span className="error">Name is required</span>
                )}
              </div>
              {/* <div className="group-form">
                <button type="submit" className="form-control">
                  Submit
                </button>
              </div> */}
            </div>
            <div className="col-lg-4"></div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FirstInformationData;
