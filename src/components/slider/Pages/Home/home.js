import React from 'react';
import "./home.css"
import AllEvent from '../event/allEvent';
import Bgslider from '../../bgSlider';

function Home() {
    return (
        <div className=''>
            <Bgslider />
            <div className="homePage">
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-5 col-md-5 col-sm-12'>
                            <h1>
                                About Frontend Developer
                            </h1>
                        </div>

                        <div className='col-lg-7 col-md-7 col-sm-12'>
                            <div className='content'>
                                <div className='text'>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, vel omnis repellendus mollitia, explicabo, maiores quisquam numquam quia reiciendis sit, accusantium atque ex animi perspiciatis ab odit earum assumenda aliquid.
                                </div>

                                <div className='text'>
                                    Dolor sit amet, consectetur adipisicing elit. Commodi, vel omnis repellendus mollitia, explicabo, maiores quisquam numquam quia reiciendis sit, accusantium atque ex animi perspiciatis ab odit earum assumenda aliquid.
                                </div>
                            </div>
                        </div>
                    </div>

                </div>


            </div>
            <AllEvent />
        </div>
    )
}

export default Home