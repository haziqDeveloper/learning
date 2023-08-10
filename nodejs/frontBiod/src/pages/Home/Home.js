import React from 'react'
import {Row, Col} from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <h1>HI USER</h1>
    <Row>
      <Col lg={6} md={6}>
         <div className="">
            <div className="">
              <h1>Profile</h1> 
              <label class="filelabel">
    <i class="fa fa-paperclip">
    </i>
    <span class="title">
        Add File
    </span>
    <input class="FileUpload1" id="FileInput" name="booking_attachment" type="file"/>
</label>  
            </div> 
         </div>   
      </Col>
      <Col lg={6} md={6}>
         
      </Col>
    </Row>
    </div>
  )
}

export default Home