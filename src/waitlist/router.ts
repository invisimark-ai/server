import express, { Request, Response } from "express";

const router = express();

interface WaitlistPostRequest {
    email: string;
}

interface WaitlistPostResponse {
    message: string;
}

router.post("/", (req: Request<{}, WaitlistPostResponse, WaitlistPostRequest>, res: Response<WaitlistPostResponse>) => {
    const { email } = req.body;

    const db: { email?: string } = {};
    db.email = email;
    
    const body = { message: "Email added to waitlist" };
    res.json(body);
});

router.delete("/", (req: Request<{}, WaitlistPostResponse, WaitlistPostRequest>, res: Response<WaitlistPostResponse>) => {
    const { email } = req.body;

    const db: { email?: string } = {};
    db.email = email;
    
    const body = { message: "Email added to waitlist" };
    res.json(body);
});

export { router };