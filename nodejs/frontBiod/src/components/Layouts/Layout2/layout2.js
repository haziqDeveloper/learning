import React from 'react'
import './layout2.css'

// Image Import
import CoverPhoto from '../../../assets/img/cover.jpg'
import wolf from '../../../assets/img/wolf.jpg'
import PortfolioImage from '../../../assets/img/portfolio-img.jpg'
import PrintsImage from '../../../assets/img/prints-img.jpg'

// FontOwesome Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTiktok, faYoutube, faTwitter, faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faArrowRight, faComment, faArrowRightLong } from '@fortawesome/free-solid-svg-icons';

const Layout2 = () => {

    return (
        <>
            <div class="bio-layout2">
                {/* banner2 Start*/}
                <section id='banner2' className='banner_mobile2'>
                    <div className='container'>
                        <div className='banner2'>
                            <div className="banner2_photo_wrapper">
                                <div className="banner2_photo_blurred_wrapper">
                                    <img className="banner2_photo_blurred" src={CoverPhoto} alt="Profile Image blurred" />
                                </div>
                                <div className="banner2_photo_content">
                                    <img className="banner2_photo" src={CoverPhoto} alt="Profile Image" />
                                </div>
                            </div>
                            <div className='profile2'>
                                <div className='profile2_image'>
                                    <img src={wolf} alt='Profile Image' />
                                </div>
                            </div>
                        </div>
                    </div>
                </section >
                {/* banner2 End*/}

                {/* Profile Info Start */}
                <section>
                    <div className='container'>
                        <div className='profile2_info'>
                            <h1>Wolfy</h1>
                            <h2>Wilde Life</h2>
                            <div className='social_links2'>
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
                        <div className='links2'>
                            <div className='links_div'>
                                <a>
                                    <div>
                                        <p>Get More Details</p>
                                    </div>
                                    <FontAwesomeIcon icon={faArrowRightLong} />
                                </a>
                            </div>
                            <div className='links_div'>
                                <a>
                                    <div className='links_innerdiv'>
                                        <img src={PortfolioImage} alt='Portfolio Link Image' />
                                        <p>New Collection</p>
                                    </div>
                                    <FontAwesomeIcon icon={faArrowRightLong} />
                                </a>
                            </div>
                            <div className='links_div'>
                                <a>
                                    <div>
                                        <p>Contact Us</p>
                                    </div>
                                    <FontAwesomeIcon icon={faArrowRightLong} />
                                </a>
                            </div>
                            <div className='links_div'>
                                <a>
                                    <div>
                                        <p>Find Our Latest Collection</p>
                                    </div>
                                    <FontAwesomeIcon icon={faArrowRightLong} />
                                </a>
                            </div>
                            <div className='links_div'>
                                <a>
                                    <div className='links_innerdiv'>
                                        <p>Find More Species</p>
                                    </div>
                                    <FontAwesomeIcon icon={faArrowRightLong} />
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Links End */}
                {/* Footer Start */}
                <footer className='footer2'>
                    <a>
                        <FontAwesomeIcon icon={faComment} />
                        <p>
                            Create a free Bio Site
                        </p>
                        <FontAwesomeIcon icon={faArrowRight} />
                     </a>
                </footer>
                {/* Footer End */}
            </div >
        </>
    )
}

export default Layout2;