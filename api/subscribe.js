const axios = require('axios');

module.exports = async (req, res) => {

  if (req.method === 'POST') {

    const { email } = req.body;
    const apiKey = process.env.REACT_APP_API_KEY;
    const listId = process.env.REACT_APP_LIST_ID; // Replace with your mailing list ID
    const server = process.env.REACT_APP_SERVER_ID; // Extract the server number from your API key (e.g., "us1" or "us20")


    try {
      const response = await axios({
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

      res.status(response.status).send(response.data);
    } catch (error) {
      if (error.response) {
        res.status(error.response.status).send(error.response.data);
      } else {
        console.error('Axios error:', error);
        res.status(500).send({ message: 'Internal Server Error' });
      }
    }
  }

};
