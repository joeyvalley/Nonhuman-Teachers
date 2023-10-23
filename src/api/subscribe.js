import axios from "axios";

export default async function signUp(email) {
  const apiKey = process.env.REACT_APP_API_KEY
  const listId = process.env.REACT_APP_LIST_ID; // Replace with your mailing list ID
  const server = process.env.REACT_APP_SERVER_ID; // Extract the server number from your API key (e.g., "us1" or "us20")

  try {
    const res = await axios({
      method: 'post',
      url: `https://${server}.api.mailchimp.com/3.0/lists/${listId}/members`,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `apikey ${apiKey}`,
      },
      data: {
        email_address: email,
        status: 'subscribed',
      },
    });
    if (res.status === "subscribed") {
      return "subscribed"
    }
    else if (res.status === 400 && res.title === "Member Exists") {
      return "exists"
    }
    else return "error";
  }
  catch (error) {
    console.log(error);
    return "error"
  }
};
