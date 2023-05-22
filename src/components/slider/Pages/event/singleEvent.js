import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { FaCross } from "react-icons/fa"

function SingleEvent() {
    const { id } = useParams();
    const [singleEvent, setsingleEvent] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const getTemplate = async () => {
            setLoading(true);
            let response = await fetch(`https://my-json-server.typicode.com/Code-Pop/Touring-Vue-Router/events/${id}`);
            response = await response.json();
            //  console.log(response.acf)
            setsingleEvent(response);
            setLoading(false);
        }
        getTemplate();
    }, [id])

    console.log("singlenlog", singleEvent)
    const Loading = () => {
        return (
            <>
                <div className="loading"></div>
            </>
        )
    }


    return (
        <div className='singleEvent'>
            <div className='pagesBackground'>
                <div className='container'>
                    <div className=''>
                        <div className='subtitle'><Link to="/" className='subtitle'>Home</Link> </div>
                        <div className='title'>{singleEvent.title}</div>
                    </div>
                    <div className='bgDesign'>
                        <div className='leaf'>
                            <FaCross className='icon' />
                        </div>
                    </div>
                </div>
            </div>
            <div className='wrapper' style={{ background: "#dfdfdf" }}>
                <div className='container' >
                    <div className='content'>
                        <div className='text'>Title: <span>{singleEvent?.title}</span></div>
                        <div className='text'>Category: <span>{singleEvent?.category}</span></div>
                    </div>

                    <div className='content'>
                        <div className='text'>Location: <span>{singleEvent?.location}</span></div>
                        <div className='text'>organizer: <span>{singleEvent?.organizer}</span></div>
                    </div>

                    <div className='content'>
                        <div className='text'>date: <span>{singleEvent?.date}</span></div>

                    </div>

                    <div className='content'>
                        <div className='text'>Description: <span>{singleEvent?.description}</span></div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleEvent