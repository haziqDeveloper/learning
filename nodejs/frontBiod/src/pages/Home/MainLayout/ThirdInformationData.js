import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'
import toast from 'react-hot-toast'
import S1 from '../../../assets/img/s1.png'
import S2 from '../../../assets/img/s2.png'
import S3 from '../../../assets/img/s3.png'
import S4 from '../../../assets/img/s4.png'

function ThirdInformationData()
{
  const [smallFile, setSmallFile] = useState(null);
  const handleChangeFile = (e) =>
  {
    const newFile = URL.createObjectURL(e.target.files[0]);
    setSmallFile(newFile);
  }

  const handleChange = () =>
  {
    console.log("HI");
  }

   return(
    <>
    <div className="bio-main-section">
      <Row>
        <Col lg={6} md={6} style={{"background":"#F5F5F5"}}>
          <div className="">
              <h1>Profile</h1>
              <div className="">
                <label>Images</label>
                <input type="file" hidden onChange={handleChangeFile} />
              </div>
              <div className="">
                <h2>About</h2>
                <input type="text" onChange={handleChange} className="form-control"/>
                <textarea onChange={handleChange} className="form-control"></textarea>
              </div>
          </div>

          <div className="">
              <h2>Select Color</h2>
              <Row>
                <Col lg={3} md={6}>
                  <div className="ch-color">
                     <img src={S1} alt="color-img"/>
                  </div>
                </Col>
                <Col lg={3} md={6}>
                <div className="ch-color">
                     <img src={S2} alt="color-img"/>
                </div>
                </Col>
                <Col lg={3} md={6}>
                <div className="ch-color">
                      <img src={S3} alt="color-img"/>
                </div>
                </Col>
                <Col lg={3} md={6}>
                <div className="ch-color">
                    <img src={S4} alt="color-img"/>
                </div>
                </Col>
              </Row>
          </div>
        </Col>
        <Col lg={6} md={6}>
          
        </Col>
      </Row>
    </div>
    </>
   )
}
export default ThirdInformationData