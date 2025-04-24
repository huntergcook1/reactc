import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
    const [username, setUsername] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        localStorage.setItem('username', username); // save username
        navigate('/tracker');
    };


    return (
        <div className="AppWrapper">
    
            <video autoPlay muted loop className="bg-video">
                <source src="/wave.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <div className="App">
                <h2>Login</h2>
                <form onSubmit={handleLogin}>
                    <div>
                        <label>Username</label><br />
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="Enter your name"
                            required
                        />
                    </div>
                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
    );
};

export default Login;
