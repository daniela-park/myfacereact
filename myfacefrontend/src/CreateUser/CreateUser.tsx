import React from "react";  // import React (to provide access to TSX)
import { useState, useEffect, FormEventHandler, ChangeEventHandler} from 'react';
import './CreateUserCSS.scss'
import { CreateUserRequest } from "../Models/createUserRequest";

// const [firstElement, secondElement] = aList; // Array Destructuring
// const {name, lastname} = aObject; // Object Destructuring

export default function CreateUser() { // A function to create a new user (name, username, email, coverImage, profileImage)
    const [inputs, setInputs] = useState<CreateUserRequest>({
        name: "",
        username: "",
        email: "",
        coverImageUrl: "",
        profileImageUrl: "",
    });
    
    const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
        //   const name = event.target.name;
        //   const value = event.target.value;
        const {name, value} = event.target;
        setInputs(values => ({...values, [name]: value}))
        }

    const handleSubmit:FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
        fetch("http://localhost:3001/users/create", {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
            body: JSON.stringify(inputs),
            })
            .then((response) => {
                if (response.status !== 200) {
                throw new Error(response.statusText);
                }
                return response.json();
            })
            .then(() => {
                console.log("We'll be in touch soon.");
            })
            .catch((err) => {
                console.log(err.toString());
            });
        };
    
    return (
        <form onSubmit={handleSubmit}>
            <label>Enter your name:
            <input 
                type="text" 
                name="name" 
                value={inputs.name || ""} 
                onChange={handleChange}
            />
            </label>
            <label>Enter your username:
            <input 
                type="text" 
                name="username" 
                value={inputs.username || ""} 
                onChange={handleChange}
            />
            </label>
            <label>Enter your email:
            <input 
                type="text" 
                name="email" 
                value={inputs.email || ""} 
                onChange={handleChange}
            />
            </label>
            <label>Enter the cover image URL:
            <input 
                type="text" 
                name="coverImageUrl" 
                value={inputs.coverImageUrl || ""} 
                onChange={handleChange}
            />
            </label>
            <label>Enter the profile image Url:
            <input 
                type="text" 
                name="pofileImageUrl" 
                value={inputs.profileImageUrl || ""} 
                onChange={handleChange}
            />
            </label>
            <button type="submit" />
        </form>
        )
};
