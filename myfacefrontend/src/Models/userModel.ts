import moment from "moment";

interface UserPostModel {
    id: number;
    message: string;
    imageUrl: string;
    createdAt: moment.Moment;
}

export interface UserModel {
    id: number;
    name: string;
    username: string;
    profileImageUrl: string;
    coverImageUrl: string;
    email: string;
    posts: UserPostModel[];
    likes: UserPostModel[];
    dislikes: UserPostModel[];
}