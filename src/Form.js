import { useState } from 'react';

export default function Form({ onQuery }) {
    const emailRef = useRef();
    const passwordRef = useRef();
    const nameRef = useRef();
    const handleSubmit = (e) => {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const name = nameRef.current.value;
        onQuery([name, email]);
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name</label>
                <input id="name" type="text" ref={nameRef} />
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input id="email" type="text" ref={emailRef} />
            </div>
            <div>
                <label htmlFor="email">Password</label>
                <input id="password" type="password" ref={passwordRef} />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};