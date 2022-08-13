const ObjectID = require("mongodb").ObjectID;
type ObjectID= typeof import("mongodb").ObjectID;

export interface IUser {
    name: string,
    email: string,
    password: string,
    since: Date,
    _id: ObjectID,
}