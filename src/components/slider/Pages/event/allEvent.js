import React, { useState, useEffect } from 'react'
import "./event.css";
import { useQuery } from 'react-query';
import { BiTime } from "react-icons/bi"
import { MdLocationOn } from "react-icons/md"
import { NavLink } from 'react-router-dom';
import ReactPaginate from "react-paginate";


function AllEvent() {
    // paginate
    const [pageNumber, setPageNumber] = useState(0);

    const newsPerPage = 3
    const newsVisited = pageNumber * newsPerPage


    const getEvents = async () => {
        const res = await fetch('https://my-json-server.typicode.com/Code-Pop/Touring-Vue-Router/events/');
        return res.json();
    };

    const { data, error, isLoading } = useQuery('randomFacts', getEvents);
    console.log("REsult", data)

    const pageCount = Math.ceil(data?.length / newsPerPage);

    const changePage = ({ selected }) => {
        setPageNumber(selected)
        // this is to scroll up when 
        // window.scrollTo(0, 0)
    }

    const [search, setsearch] = useState("")

    const [filteredData, setFilteredData] = useState(data)


    const handleChange = (e) => {
        console.log("Values", typeof e.target.value)
        if (e.target.value === "true") {
            let filteredData = data?.filter((item) => {
                return item?.petsAllowed === true
            })
            setFilteredData(filteredData)
            return
        }
        else if (e.target.value === "false") {
            let filteredData = data?.filter((item) => {
                return item?.petsAllowed === false
            })
            setFilteredData(filteredData)
            return
        }


        else {

            setFilteredData(data)
        }

    }
    useEffect(() => {
        setFilteredData(data)
    }, [data])

    if (error) return <div>Request Failed</div>;
    if (isLoading) return <div>Loading...</div>;



    return (
        <div className='AllEvents'>
            <div className='container'>
                <div className='heading' style={{ textAlign: "center" }}>
                    <div className='subheading'>Our events</div>
                    <div className='title'>Schedule Plan</div>
                </div>

                <div className='row'>
                    <div className='col-lg-9 col-md-9 col-sm-12'>
                        <div className='apiContainer'>
                            {filteredData?.slice(newsVisited, newsVisited + newsPerPage)?.map((event, i) => {
                                return (
                                    <div className='eventContainer' key={i}>
                                        <div className='eventSection'>
                                            <div className='first'>{event.title} <span>category: {event.category}</span></div>
                                            <div className="second">
                                                <div><BiTime className="icon" /> <span>{event.date}</span></div>
                                                <div><MdLocationOn className="icon" /> <span>{event.location}</span></div>
                                            </div>
                                            <NavLink to={`/event/${event?.id}`} className="nav-button btn">
                                                View More
                                            </NavLink>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div className='col-lg-3 col-md-3 col-sm-12'>
                        <div className=''>
                            <label>Filter by PetAllow</label>
                            <select class="form-select" aria-label="Default select example" onChange={handleChange}>
                                <option value="All">All</option>
                                <option value="true" >True</option>
                                <option value="false">False</option>
                            </select>
                        </div>
                    </div>
                </div>


                <ReactPaginate
                    previousLabel={"Prev"}
                    nextLAbel={"Next"}
                    pageCount={pageCount}
                    onPageChange={changePage}
                    containerClassName={"paginationBttns"}
                    previousLinkClassName={"previousBttn"}
                    nextLinkClassName={"nextBttn"}
                    disabledClassName={"paginationDisabled"}
                    activeClassName={"paginationActive"}
                    marginPagesDisplayed={0}
                />
            </div>
        </div >
    )
}

export default AllEvent