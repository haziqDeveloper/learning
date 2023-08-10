import React, { useEffect, useState } from 'react';
import '../../../App.css';
import Slider from "react-slick";
import { getImage } from '../../../store/services/layout';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function MainLayout() {
  const navigate = useNavigate();
  const [slide, setSlide] = useState([]);
  const [loading, setLoading] = useState(true);

  const [selectedFile, setSelectedFile] = useState(null);
  const [imageUrl, setImageUrl] = useState('');

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append('image', selectedFile);

    try {
      const response = await axios.post('http://localhost:8000/image', formData);
      console.log("Res",response);
      setImageUrl(response.data.image);
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };


  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '60px',
  };

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    getImage()
      .then((r) => {
        console.log("r", r);
        setSlide(r.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log("Error", error);
        setLoading(false);
      });
  }

  console.log("SLIDER", slide);

  const handleMove = (e, id) => {
    console.log("ID", id);
    navigate(`/templatelayout/${id}`);
  }

  if (loading) {
    return <div>Loading...</div>;
  }


  console.log("image",imageUrl);

  return (
    <>
      <div className="container">
      <input type="file" accept="image/*" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
      {imageUrl && <img src={`http://localhost:8000/image/uploads/${imageUrl}`} alt="Uploaded" />}
        <Slider {...settings}>
          {slide.map((item,index) => {
            console.log("ITEM1", item);
            return (
              <div key={item._id}>
                <h3 onClick={(e) => { handleMove(e, item._id) }}>Select A Template</h3>
                <img key={index} src={`http://localhost:8000/image/uploads/${item.image}`} alt={`Image ${index}`}/>
              </div>
            )
          })}
        </Slider>
      </div>
    </>
  )
}

export default MainLayout;