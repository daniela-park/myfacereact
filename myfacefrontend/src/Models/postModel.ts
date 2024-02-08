import moment from "moment";

interface PostUserModel { // User details who posted
    id: number;
    name: string;
    username: string;
    email: string;
}

export interface PostModel { // Post details
    id: number;
    message: string;
    imageUrl: string;
    createdAt: moment.Moment;
    postedBy: PostUserModel;
    likedBy: PostUserModel[];
    dislikedBy: PostUserModel[];
}