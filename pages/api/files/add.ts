import connectDB from "@db/mongodb";
import { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";
import Files from "@model/files";
import { middleware } from "@utils/middleware";
const handler = async (req: NextApiRequest, res: NextApiResponse) => {

    if (req.method === "POST") {
        const cryptedToken = (req.headers.authorization as string)?.split(" ")[1];
        const decoded: any = jwt.verify(cryptedToken, (process.env.JWT_SCREET_KEY as string));
        if (!!decoded && !!decoded.admin) {
            const newFile = new Files({
                url: req.body.url,
                userId: decoded.id,
            })
            await newFile.save();
            res.status(201).json({
                message: "File created",
                status: 201,
                data: newFile,
                color: 'success',
            })
        } else {
            res.status(401).json({
                message: "Unauthorized",
                status: 401,
                data: null,
                color: 'danger',
            })
        }
    } else {
        res.status(422).json({
            message: "Method not supported",
            status: 422,
            data: null,
            color: 'danger',
        })
    }
}

export default middleware(connectDB(handler));