import moment from "moment";

interface PostUserModel {
    id: number;
    name: string;
    username: string;
    email: string;
}

export interface PostModel {
    id: number;
    message: string;
    imageUrl: string;
    createdAt: moment.Moment;
    postedBy: PostUserModel;
    likedBy: PostUserModel[];
    dislikedBy: PostUserModel[];
}