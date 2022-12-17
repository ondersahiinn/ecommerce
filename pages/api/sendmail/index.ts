import { NextApiRequest, NextApiResponse } from 'next';
import connectDB from '../../../db/mongodb';
import User from '../../../model/user';
var nodemailer = require('nodemailer');

interface IBodyType {
    message: string;
    from: string;
    subject: string;
    phone?: string;
}


const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'POST') {
        const { message, subject, from }: IBodyType = req.body;
        if (message && from && subject) {
            try {
                var transporter = nodemailer.createTransport({
                    pool: true,
                    host: "mail.ondersahin.com.tr",
                    port: 465,
                    secure: true,
                    //requireTLS: true,
                    auth: {
                        user: 'info@ondersahin.com.tr',
                        pass: '	Onder358.'
                    },
                    tls: {
                        // do not fail on invalid certs
                        rejectUnauthorized: false,
                      },
                });
                transporter.verify(function (error: any, success : any) {
                    if (error) {
                        return res.status(403).json({ "verfy": error });
                    } else {
                        return res.status(200).json({ "verfy": success });
                    }
                });

                var mailOptions = {
                    from: "info@ondersahin.com.tr",
                    to: from,
                    subject: subject,
                    text: message
                };

                transporter.sendMail(mailOptions, function (error: any, info: any) {
                    if (error) {
                        return res.status(403).json(error);

                    } else {
                        return res.status(403).json('Email sent: ' + info.response);
                    }
                });
            } catch (error) {
                return res.status(500).json(error);
            }
        } else {
            res.status(422).send('data_incomplete');
        }
    } else {
        res.status(422).send('req_method_not_supported');
    }
};

export default connectDB(handler);