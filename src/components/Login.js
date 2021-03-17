import React, { SyntheticEvent, useState } from 'react'
import { Redirect } from 'react-router-dom'
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState('');
    const submit = async (e: SyntheticEvent) => {
        e.preventDefault();
        const res = await fetch(' https://umbrage-interview-api.herokuapp.com/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username: email,
                password: password
            })
        })
            .then(response => {
                return response.json();

            }).then(function (data) {
                if (data.access_token) {
                    localStorage.setItem("access_token", JSON.stringify(data.access_token));
                }
                setRedirect(true);
                // `data` is the parsed version of the JSON returned from the above endpoint.
                console.log(data);  // { "userId": 1, "id": 1, "title": "...", "body": "..." }
            });

    }
    if (redirect) {
        return <Redirect to="/" />
    }
    return (
        <div>
            <form onSubmit={submit}>
                <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
                <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required
                    onChange={e => setEmail(e.target.value)} />
                <input type="password" id="inputPassword" className="form-control" placeholder="Password" required
                    onChange={e => setPassword(e.target.value)} />
                <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
            </form>
        </div>
    )
}

export default Login
