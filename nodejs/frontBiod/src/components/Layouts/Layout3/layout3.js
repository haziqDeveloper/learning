import React from 'react'
import './layout3.css'

// Image Import
import CoverPhoto from '../../../assets/img/make-up-cover.jpg'
import MakeupProfile from '../../../assets/img/make-up-profile.jpg'
import MakeupLink from '../../../assets/img/make-up-link.jpg'
import PrintsImage from '../../../assets/img/make-up-img.jpg'

// FontOwesome Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTiktok, faYoutube, faTwitter, faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faArrowRight, faComment, faArrowRightLong } from '@fortawesome/free-solid-svg-icons';

const Layout3 = () => {

    return (
        <>
            <div class="bio-layout3">
                {/* Banner Start*/}
                <section id='banner_make_up'>
                    <div className='container'>
                        <div className='banner_make_up'>
                            <div className="banner_photo_wrapper_make_up">
                                <div className="banner_photo_blurred_wrapper_make_up">
                                    <img class="banner_photo_blurred_make_up" src={CoverPhoto} alt="Profile Image blurred" />
                                </div>
                                <div className="banner_photo_content_make_up">
                                    <h1>Glamorous</h1>
                                    <img className="banner_photo_make_up" src={CoverPhoto} alt="Profile Image" />
                                </div>
                            </div>
                            <div className='profile_make_up'>
                                <div className='profile_make_up_image'>
                                    <img src={MakeupProfile} alt='Profile Image' />
                                </div>
                            </div>
                        </div>
                    </div>
                </section >
                {/* Banner End*/}

                {/* Profile Info Start */}
                <section>
                    <div className='container'>
                        <div className='profile_info_make_up'>
                            <div className='social_links_make_up'>
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
                        <div className='links2_make_up'>
                            <div className='links_div_make_up'>
                                <a>
                                    <div>
                                        <p>Watch my latest Beauty Blog</p>
                                    </div>
                                    <p>01</p>
                                </a>
                            </div>
                            <div className='links_div_make_up'>
                                <a>
                                    <div className='links_innerdiv_make_up'>
                                        <img src={MakeupLink} alt='Portfolio Link Image' />
                                        <p>Get Enrolled in Online Course</p>
                                    </div>
                                    <p>02</p>
                                </a>
                            </div>
                            <div className='links_div_make_up'>
                                <a>
                                    <div className='links_innerdiv_make_up'>
                                        <img src={PrintsImage} alt='Portfolio Link Image' />
                                        <p>Catch me on Snapchat</p>
                                    </div>
                                    <p>03</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Links End */}
                {/* Footer Start */}
                <footer className='footer_make_up'>
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

export default Layout3;