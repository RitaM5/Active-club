import React, { useEffect } from 'react'
import { useState } from 'react'
import Service from '../Service/Service';
import { GoLocation } from 'react-icons/go';

import './Home.css'
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
                    <div className='d-flex p-3'>
                        <img src="image/mens.png" alt="" style={{ width: 50, height: 50, borderRadius: 100 }}></img>
                        <div className='ms-2'>
                            <h5>Zahid Hossain</h5>
                            <p className=''><GoLocation /> aaaaaaaaaaaa</p>
                        </div>
                    </div>
                    <div className='d-flex justify-content-around box-1 pt-3 rounded'>
                        <div className=''>
                            <h5>75<span style={{ fontSize: 10 }}>kg</span></h5>
                            <p>Weight</p>
                        </div>
                        <div>
                            <h5>6.5</h5>
                            <p>Height</p>
                        </div>
                        <div>
                            <h5>25<span style={{ fontSize: 10 }}>yrs</span></h5>
                            <p>Age</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home