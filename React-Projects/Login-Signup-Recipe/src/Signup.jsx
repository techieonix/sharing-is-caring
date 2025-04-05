import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useUserContext } from './Contexts/UserContext';

const Signup = () => {
    const { users } = useUserContext();
    const [id, setId] = useState(1)
    const [data, setData] = useState({
        name: '',
        email: '',
        contact: '',
        password: '',
        confirmPassword: '',
        terms: false
    });

    const navigate = useNavigate()

    const dataChange = (e) => {
        const { name, value, checked, type } = e.target;
        setData(prevData => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const formSubmit = (e) => {
        e.preventDefault()
        if (users.current[data.email]) {
            alert('This email already exists. Please use a different email.');
        }
        else if (data.password !== data.confirmPassword) {
            alert('Password didn\'t match')
        } else {
            users.current.push({ ...data, id })
            setId(id + 1)
            navigate('/login')
        }
    }

    return (
        <div className='flex flex-col items-center justify-center h-screen mx-auto'>
            <div className='border border-black rounded-xl w-fit h-fit p-5 shadow-xl'>
                <h2 className='font-bold text-xl text-blue-700'>Signup</h2>
                <form onSubmit={formSubmit} className='flex flex-col' action="">
                    <input className='border rounded border-gray-600 shadow-gray-800 pl-2 py-1 my-2' type="text" name="name" value={data.name} onChange={dataChange} id="" placeholder='Enter your Name' required />
                    <input className='border rounded border-gray-600 shadow-gray-800 pl-2 py-1 my-2' type="email" name="email" value={data.email} onChange={dataChange} id="" placeholder='Enter your Email' required />
                    <input className='border rounded border-gray-600 shadow-gray-800 pl-2 py-1 my-2' type="text" name="contact" value={data.contact} onChange={dataChange} id="" placeholder='Enter your Contact Number' required />
                    <input className='border rounded border-gray-600 shadow-gray-800 pl-2 py-1 my-2' type="password" name="password" value={data.password} onChange={dataChange} id="" placeholder='Enter your Password' required />
                    <input className='border rounded border-gray-600 shadow-gray-800 pl-2 py-1 my-2' type="password" name="confirmPassword" value={data.confirmPassword} onChange={dataChange} id="" placeholder='Confirm Password' required />
                    <div>
                        <input className='pl-2 py-1 m-2' type="checkbox" name="terms" checked={data.terms} onChange={dataChange} id="" required />
                        <label htmlFor="terms">I accept all <a className='text-blue-700' href=""> Terms and Conditions </a> and <a className='text-blue-700' href=""> Privacy Policy.</a></label>
                    </div>
                    <button type='submit' className='bg-blue-700 text-white p-1 border rounded-full my-2'>Signup</button>
                </form>
                <div>Already have an account? <Link className='text-blue-700' to="/login">Login now!</Link></div>
            </div>
        </div>
    )
}

export default Signup