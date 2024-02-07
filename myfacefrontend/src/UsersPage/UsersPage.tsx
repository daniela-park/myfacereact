import React from "react";  // import React (to provide access to TSX)
import { useState, useEffect } from 'react';
import {UserModel } from "../Models/userModel";
import './UsersCSS.scss'

export default function UsersPage() {
    const [myData, setMyData] = useState<PostModel[]>([]);
    
    useEffect(() => {
        fetch("http://localhost:3001/users")
            .then(response => response.json())
            .then(data => setMyData(data.results))
            .then(() => console.log(myData));
    }, []);
    
    if (myData.length === 0) {
        return <div>Waiting for data!</div>
        }
    
        return (
        <div>
            {myData.map((data) => 
            <div>
                <img src={data.coverImageUrl} />
                <img src={data.profileImageUrl} />
                <div>{data.id}</div>
                <div>{data.name}</div>
                <div>{data.username}</div>
                <div>{data.email}</div>
                <div>{data.posts.length}</div>
                <div>{data.likes.length}</div>
                <div>{data.dislikes.length}</div>
            </div> 
            )}
        </div>
        );

}
