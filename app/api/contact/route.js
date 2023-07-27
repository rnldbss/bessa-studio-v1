import { NextRequest, NextResponse } from "next/server";
import FormData from "form-data";
import Mailgun from "mailgun.js";

const API_KEY = process.env.MAILGUN_API_KEY;

export async function POST(request) {
  const res = await request.json();

  const mailgun = new Mailgun(FormData);
  const mg = mailgun.client({
    username: "api",
    key: API_KEY || "",
  });

  mg.messages
    .create("sandbox2e799fc875c04593bab992176d47ccea.mailgun.org", {
      from: "bessa.dev Form <contact@sandbox2e799fc875c04593bab992176d47ccea.mailgun.org>",
      to: "bessa.creative.dev@gmail.com",
      subject: "New Message For You!",
      text: `${JSON.stringify(res)}`,
    })
    .then((msg) => console.log(msg)) // logs response data
    .catch((err) => console.log(err)); // logs any error

  return NextResponse.json({ res });
}
