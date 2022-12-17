export interface IUser {
    username: string,
    email: string,
    password: string,
    since: Date,
    _id: string,
    admin: boolean,
}

export interface ISession {
    isLoggedIn: boolean;
    token: string;
    username: string,
    email: string,
    password: string,
    since: Date,
    _id: string,
    admin: boolean,

}