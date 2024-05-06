import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function ServiceConfirmation() {

    const [name, setName] = useState('');
    const [location, setLocation] = useState('');
    const [services, setServices] = useState('');
    const [timing, setTiming] = useState('');
    const [salon, setSalon] = useState('')
const navigate=useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/customers',
            { name: name, location: location, services: services, timing: timing, salon: salon})
            .then(res => { console.log(res) })
            .catch(err => { console.log(err) })
            navigate('/Admin')
    }

    return (
        <div className='service-bg'>
            <div className='services'>
                <h3 className='ser'><i>Service Details</i></h3><br></br>
                <form onSubmit={handleSubmit}>
                    <label>Name: </label><br></br>
                    <input type='text' value={name} onChange={(e) => setName(e.target.value)} required/> <br></br>
                    <label>Location: </label><br></br>
                    <input type='text' value={location} onChange={(e) => setLocation(e.target.value)} required/><br></br>
                    <label>Services Description:</label><br></br>
                    <textarea value={services} onChange={(e) => setServices(e.target.value)}></textarea><br></br>
                    <label>Salon: </label>
                    <select className='salon' value={salon} onChange={(e) => setSalon(e.target.value)}>
                        <option value='greenTrends'>GreenTrends</option>
                        <option value='naturals'>Naturals</option>
                        <option value='studio11'>Studio11</option>
                        <option value='lakme'>Lakme</option>
                    </select>

                    <br></br>
                    <label>Timing:</label>

                    <select className='timing' value={timing} onChange={(e) => setTiming(e.target.value)}>
                        <option value='9am-6pm'>9am-6pm</option>
                        <option value='6pm-8pm'>6pm-8pm</option>
                    </select>
                    <br></br>
                    <button className='butt' type='button' onClick={handleSubmit}>SUBMIT</button>
                </form>
            </div>
        </div>
    );
}

