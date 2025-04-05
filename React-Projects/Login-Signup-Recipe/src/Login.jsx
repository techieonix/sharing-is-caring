import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useUserContext } from './Contexts/UserContext';

function Login() {
    const navigate = useNavigate()
    const { users } = useUserContext();
    const [data, setData] = useState({
        email: '',
        password: ''
    });


    const loginData = (e) => {
        const { name, value } = e.target;
        setData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const loginbtn = (e) => {
        e.preventDefault();
        let invalid = false
        if (users.current === undefined || users.current.length === 0) invalid = true
        for (let i = 0; i < users.current.length; i++) {
            if (users.current[i].email === data.email && users.current[i].password === data.password) {
                window.localStorage.setItem('isLoggedIn', true)
                invalid = false
                navigate('/recipes')
                break
            } else {
                invalid = true
            }
        }
        if (invalid) alert('Invalid email or password')
    }

    return (
        <div className='flex flex-col items-center justify-center h-screen mx-auto'>
            <div className='border border-black rounded-xl w-fit h-fit p-5 shadow-xl'>
                <h2 className='font-bold text-xl text-blue-700'>Login</h2>
                <form onSubmit={loginbtn} className='flex flex-col' action="">
                    <input className='border rounded border-gray-600 shadow-gray-800 pl-2 py-1 m-2' type="text" name="email" value={data.email} onChange={loginData} id="" placeholder='Enter your Email' required />
                    <input className='border rounded border-gray-600 shadow-gray-800 pl-2 py-1 m-2' type="password" name="password" value={data.password} onChange={loginData} id="" placeholder='Enter your Password' required />
                    <button type='submit' className='bg-blue-700 text-white p-1 border rounded-full my-2'>Login</button>
                </form>
                <div>Don't have an account? <Link className='text-blue-700' to="/Signup">Signup now!</Link></div>
            </div>
        </div>
    )
}

export default Login