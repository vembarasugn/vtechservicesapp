import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  message: string;
};

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const email = req.body.mail;
  const url = `https://api.sendgrid.com/v3/marketing/contacts`;

  const data = {
    contacts: [{ email: email }],
    list_ids: [process.env.VTECH_SENDGRID_MAILING_ID],
  };
  const headers = {
    Authorization: `Bearer ${process.env.VTECH_SENDGRID_API_KEY}`,
    "Content-Type": "application/json",
  };

  const options = {
    method: "PUT",
    headers: headers,
    body: JSON.stringify(data),
  };
  const response = await fetch(url, options);
  const json = await response.json();
  if (json.errors) {
    res.status(500).json({
      message:
        "Something went wrong, please try again later.",
    });
  } else {
    res.status(200).json({
      message:
        "Success!Your email has been added to our mailing list.",
    });
  }
}

export default handler;