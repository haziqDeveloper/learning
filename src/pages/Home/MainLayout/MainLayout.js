import React, { useEffect, useState } from 'react';
import '../../../App.css';
import Slider from "react-slick";
import { getImage } from '../../../store/services/layout';
import { useNavigate } from 'react-router-dom';

function MainLayout() {
  const navigate = useNavigate();
  const [slide, setSlide] = useState([]);
  const [loading, setLoading] = useState(true);

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
        const data = r.data;
        setSlide(data);
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

  return (
    <>
      <div className="container">
        <Slider {...settings}>
          {slide.map((item) => {
            console.log("ITEM1", item.imagePath);
            return (
              <div key={item._id}>
                <h3 onClick={(e) => { handleMove(e, item._id) }}>HI USER</h3>
                <img src={`localhost:8000/uploads/${item.imagePath}`} alt="" />
              </div>
            )
          })}
        </Slider>
      </div>
    </>
  )
}

export default MainLayout;
