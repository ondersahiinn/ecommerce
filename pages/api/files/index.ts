import connectDB from "@db/mongodb"
import Files from "@model/files";
import Users from "@model/user";
import { middleware } from "@utils/middleware";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === "GET") {
        const files = await Files.find({}).populate({ path: "userId", model: Users, select: "name email" }).sort({ createdAt: -1 });
        res.status(200).json({
            message: "Files fetched",
            status: 200,
            data: files,
            color: 'success',
        })
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