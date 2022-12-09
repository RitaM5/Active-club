import React, { useEffect } from 'react'
import { useState } from 'react'
import Service from '../Service/Service';
import './Home.css'
import Details from '../Details/Details';
const Home = () => {
    const [services, setServices] = useState([]);
    const [totalTimes, setTotalTimes] = useState(0);
    useEffect(() => {
        fetch('Data.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    const addToList = (time) => {
        //console.log(time);
        setTotalTimes(parseInt(totalTimes) + parseInt(time));
    }

    return (
        <>
            <div className='row'>
                <div className="col-lg-8 col-md-8 col-12">
                    <div className='heading'>
                        <h3><img className='me-2' src="https://img.icons8.com/external-flaticons-flat-flat-icons/64/null/external-exercise-working-stress-flaticons-flat-flat-icons-2.png" /><span className='header-title fw-bold'>UTRA-ACTIVE-CLUB</span></h3>
                        <p className='fs-5'>Select today’s exercise</p>
                    </div>
                    <div className="row py-2">
                        {
                            services.map(items =>
                                <Service
                                    key={items.id}
                                    items={items} addToList={addToList} />)
                        }
                    </div>
                </div>
                <div className="col-lg-4 col-md-4 col-12 bg-white rounded">
                    <Details totalTimes={totalTimes} />
                </div>
            </div>
        </>
    )
}

export default Home