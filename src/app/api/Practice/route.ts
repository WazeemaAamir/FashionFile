// import { NextRequest, NextResponse } from "next/server";

// export async function POST(req: NextRequest) {
//     try {
//         const body = await req.json();
//         const redirectUrl = body.email === "user@example.com" ? "/dashboard" : "/home";
//         return NextResponse.json({ redirectUrl });
//     } catch (err: any) {
//         return NextResponse.json({ message: err.message }, { status: 500 });
//     }
// };

import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Only POST allowed' });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: 'Missing fields' });
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'yourgmail@gmail.com',
      pass: 'your-app-password', // ❗Use Gmail App Password here
    },
  });

  try {
    await transporter.sendMail({
      from: email,
      to: 'yourgmail@gmail.com',
      subject: `New Contact Message from ${name}`,
      text: message,
    });

    res.status(200).json({ message: 'Message sent' });
  } catch (err) {
    console.error('Email error:', err);
    res.status(500).json({ message: 'Server error' });
  }
}
