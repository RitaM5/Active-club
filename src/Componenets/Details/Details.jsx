import React from 'react'
import { useState } from 'react';
import { GoLocation } from 'react-icons/go';
import Boxs from '../boxs/boxs';
import './Details.css'
const Details = (props) => {
    const [boxData, setBoxData] = useState(0);
    const boxs = [
        10,
        20,
        30,
        40,
        50,
        60
    ]
    const addToBreak = (box) => {
        console.log(box);
        // boxData=box;
        setBoxData(box);
    }
    return (
        <>
            <div className='d-flex p-3'>
                <img src="image/mens.png" alt="" style={{ width: 50, height: 50, borderRadius: 100 }}></img>
                <div className='ms-2'>
                    <h5>Zahid Hossain</h5>
                    <p className=''><GoLocation /> aaaaaaaaaaaa</p>
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
                <p className='fw-bold' id="exercise">{props.totalTimes}s</p>
            </div>
            <br />
            <div className='box-part d-flex justify-content-between p-3 rounded'>
                <h6>Break time</h6>
                <p className='fw-bold' id="break">{boxData}</p>
            </div>
            <div className='bg-danger p-2 rounded text-white mt-5'>
                <h6>Activity Completed</h6>
            </div>
            <div className='box-part p-4 rounded my-3' id="show-total">
                <h6></h6>
            </div>
        </>
    )
}

export default Details
