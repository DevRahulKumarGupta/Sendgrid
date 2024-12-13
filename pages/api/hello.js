
// import main from "../../controller/sendMail";
import { templateEmail } from "../../controller/templates";
// const sgMail = require("@sendgrid/mail");
import main from "../../controller/sendMail";
export default async function products(req, res) {
    const {
        body,
        method,
    } = req;
    const { name, email } = body;
    switch (method) {
        case 'POST':
        try {
          let data = await main(name, email, process.env.SENDGRID_API_KEY)
          console.log(data)
          res.status(200).json(data);
        } catch (error) {
            console.error(error);
            res.status(500).send({ success: false, message: "Failed to send email" });
        }

        default:
            res.setHeader('Allow', ['POST']);
            return res.status(405).end(`Method ${method} Not Allowed`);
    }
}
