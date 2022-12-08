import React, { useEffect } from 'react'
import { useState } from 'react'
import Service from '../Service/Service';


import './Home.css'
import Details from '../Details/Details';
const Home = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('Data.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return (
        <>
            <div className='row'>
                <div className="col-lg-8">
                    <div className='heading'>
                        <h3><img className='me-2' src="https://img.icons8.com/external-flaticons-flat-flat-icons/64/null/external-exercise-working-stress-flaticons-flat-flat-icons-2.png" />UTRA-ACTIVE-CLUB</h3>
                        <p className='fs-5'>Select today’s exercise</p>
                    </div>
                    <div className="row py-2">
                        {
                            services.map(items =>
                                <Service
                                    key={items.id}
                                    items={items} />)
                        }
                    </div>
                </div>
                <div className="col-lg-4 bg-white rounded">
                    <Details />
                </div>
            </div>
        </>
    )
}

export default Home