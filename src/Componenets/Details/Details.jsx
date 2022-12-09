import React from 'react'
import { useState } from 'react';
import { GoLocation } from 'react-icons/go';
import Boxs from '../boxs/boxs';
import './Details.css'
const Details = (props) => {
    const { totalTimes } = props;
    const [boxData, setBoxData] = useState(0);
    const [addActivityData, setAddActivityData] = useState(0);
    const boxs = [
        10,
        20,
        30,
        40,
        50,
        60
    ]
    const findMyState = () => {
        const status = document.querySelector('.status');
        const success = (position) => {
            console.log(position);
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            const geoApiUrl = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
            fetch(geoApiUrl)
                .then(res => res.json())
                .then(data =>
                    status.textContent =data.locality + ',' + ' '+ data.countryName
                )
        }
        const error = () => {
            status.textContent = 'Unable to retrieve your location';
        }
        navigator.geolocation.getCurrentPosition(success, error);
    }
    findMyState()
    const addToBreak = (box) => {
        setBoxData(box);
    }
    const addActivity = (totalTimes, boxData) => {
        setAddActivityData(parseInt(totalTimes) - parseInt(boxData));
    }

    return (
        <>
            <div className='d-flex p-3'>
                <img src="image/mens.png" alt="" style={{ width: 50, height: 50, borderRadius: 100 }}></img>
                <div className=''>
                    <h5>Zahid Hossain</h5>
                    <p className='ms-3'><GoLocation/><span className='status ms-2' onClick={findMyState}></span></p>
                </div>
            </div>
            <div className='d-flex justify-content-around box-part pt-3 rounded'>
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
            <h5 className='py-3 heading'>Add A Break</h5>
            <div className='d-flex justify-content-around box-part py-3 rounded box-2'>
                {
                    boxs.map(box => <Boxs box={box} addToBreak={addToBreak} />)
                }
            </div>
            <h5 className='pt-5 heading'>Exercise Details</h5>
            <div className='box-part d-flex justify-content-between p-3 rounded mt-3'>
                <h6>Exercise time</h6>
                <p className='fw-bold' id="exercise">
                    {totalTimes}s
                </p>
            </div>
            <br />
            <div className='box-part d-flex justify-content-between p-3 rounded'>
                <h6>Break time</h6>
                <p className='fw-bold' id="break">{boxData}s</p>
            </div>
            <div className='bg-danger p-2 rounded text-white mt-5' onClick={() => addActivity(totalTimes, boxData)}>
                <h6>Activity Completed</h6>
            </div>
            <div className='box-part p-4 rounded my-3' id="show-total">
                <h6>{addActivityData}s</h6>
            </div>
        </>
    )
}


export default Details
