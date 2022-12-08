import React from 'react'
import Button from 'react-bootstrap/Button';
import './Service.css'
const Service = (props) => {
    const {addToList, items} = props;
    const { name, picture, details, age, time,} = props.items;
    return (
        <div className='col-lg-4 col-md-6 col-12'>
            <div className="bg-white rounded Larger shadow">
                <img className="card-img p-2" src={picture} alt="" style={{ height: 150, borderRadius: 20 }} />
                <div className='card-part ps-2'>
                    <h4>{name}</h4>
                    <p>{details}</p>
                    <p className='fw-bold'>For Age : {age}</p>
                    <p className='fw-bold'>Time required : {time}</p>
                    <p className='pb-2' onClick={()=>addToList(time)}><Button variant="info">Add to List</Button>{' '}</p>
                </div>
            </div>
        </div>
    )
}

export default Service