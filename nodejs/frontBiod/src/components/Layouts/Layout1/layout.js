import React from 'react'
import './layout.css'

// Image Import
import CoverPhoto from '../../../assets/img/banner-background-image.jpg'
import ProfileImage from '../../../assets/img/profile-img.jpg'
import PortfolioImage from '../../../assets/img/portfolio-img.jpg'
import PrintsImage from '../../../assets/img/prints-img.jpg'
import { Link } from 'react-router-dom'
// FontOwesome Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTiktok, faYoutube, faTwitter, faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faArrowRight, faComment } from '@fortawesome/free-solid-svg-icons';

const layout = () => {

    return (
        <>
            <div class="bio-layout1">
                {/* Banner Start*/}
                <section id='banner' className='curved'>
                    <div className='container'>
                        <div className='banner'>
                            <div className="banner_photo_wrapper">
                                <div className="banner_photo_blurred_wrapper">
                                    <img class="banner_photo_blurred" src={CoverPhoto} alt="Profile Image blurred" />
                                </div>
                                <div className="banner_photo_content">
                                    <img className="banner_photo" src={CoverPhoto} alt="Profile Image" />
                                </div>
                            </div>
                            <div className='profile'>
                                <div className='profile_image'>
                                    <img src={ProfileImage} alt='Profile Image' />
                                </div>
                            </div>
                        </div>
                    </div>
                </section >
                {/* Banner End*/}

                {/* Profile Info Start */}
                <section>
                    <div className='container'>
                        <div className='profile_info'>
                            <h1>Glitter Girl</h1>
                            <h2>Blogger</h2>
                            <div className='social_links'>
                                <FontAwesomeIcon icon={faTiktok} />
                                <FontAwesomeIcon icon={faYoutube} />
                                <FontAwesomeIcon icon={faTwitter} />
                                <FontAwesomeIcon icon={faFacebookF} />
                                <FontAwesomeIcon icon={faInstagram} />
                            </div>
                        </div>
                    </div>
                </section>
                {/* Profile Info End */}

                {/* Links Start */}
                <section>
                    <div className='container'>
                        <div className='links'>
                            <div>
                                <a>
                                    <img src={PortfolioImage} alt='Portfolio Link Image' />
                                    <p>My Portfolio</p>
                                </a>
                            </div>
                            <div className='links_center'>
                                <a>
                                    <p>Sign My Petition</p>
                                </a>
                            </div>
                            <div className='links_center'>
                                <a>
                                    <p>Hire Me for a Photoshot</p>
                                </a>
                            </div>
                            <div>
                                <a>
                                    <img src={PrintsImage} alt='Portfolio Link Image' />
                                    <p>Prints for Sale</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Links End */}
                {/* Footer Start */}
                <footer className='footer'>
                    <Link to="/templatelayout">
                        <FontAwesomeIcon icon={faComment} />
                        <p>
                            Create a free Bio Site
                        </p>
                        <FontAwesomeIcon icon={faArrowRight} />
                    </Link>
                </footer>
                {/* Footer End */}
            </div >
        </>
    )
}

export default layout;