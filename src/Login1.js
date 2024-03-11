import React, { useState } from 'react';

export default function Login1() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [access, setAccess] = useState({ message: '', className: '' });

    const handleSubmit = () => {
        if (username === 'john' && password === 'pass1234') {
            setAccess({ message: 'Access granted', className: 'success' });
        } else {
            setAccess({ message: 'Access denied', className: 'fail' });
        }
    };

    return (
        <>
           <div className='div'>
                <h1>Login Form</h1>
                <input
                    type='text'
                    placeholder='Username'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <br />
                <br />
                <input
                    type='password'
                    placeholder='Password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <br />
                <br />
                <button onClick={handleSubmit}>Submit</button>
            
            </div>
            <div className={`message ${access.className}`}>{access.message}</div>
           
        </>
    );
}

