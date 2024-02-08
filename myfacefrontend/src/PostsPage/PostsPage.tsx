import React from "react";  // import React (to provide access to TSX)
import { useState, useEffect } from 'react';
import { PostModel } from "../Models/postModel";
import './PostsCSS.scss'

export default function PostsPage() {
    const [myData, setMyData] = useState<PostModel[]>([]);
    // const [likedBy, setLikedBy] = useState<PostModel[]>([]);
    const [count, setCount] = useState(0);

    useEffect(() => {
        fetch("http://localhost:3001/posts")
            .then(response => response.json())
            .then(data => setMyData(data.results))
            .then(() => console.log(myData));
    }, []);

    if (myData.length === 0) {
    return <div>Waiting for data!</div>
    }

    function likePost ()
    {
        return setLikedBy((likedBy) => likedBy.push(data.postedBy.username))
    }

    return (
    <body className="body rows">
    <div >
        {myData.map((data) => 
        <div className="post-container">
            <img className="postcontainerimg" src={data.imageUrl} />
            <div className="text-container">
                <div className="columns">ID: {data.id}</div>
                <div className="columns">Post: {data.message}</div>
                <div className="columns">Posted By: {data.postedBy.username}</div>  
                <div className="likeButton">Liked By: {data.likedBy.length}
                
                    <form method="post" onSubmit={handleSubmit} action={likePost()} ><button type="submit">Like</button></form>
                </div>
                <div className="dislikeButton">Dislike By: {data.dislikedBy.length}</div>    
            </div>
        </div> 
        )}
    </div>
    </body>
    );

        }     


// data.createdAt.format('YYYY-MM-DD HH:mm:ss')
// id: number;
// message: string;
// imageUrl: string;
// createdAt: moment.Moment;
// postedBy: PostUserModel;
// likedBy: PostUserModel[];
// dislikedBy: PostUserModel[];

//<button onClick={() => setLikedBy((likedBy) => likedBy.push())}>Liked by: {likedBy}></button>