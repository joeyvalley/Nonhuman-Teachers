const axios = require('axios');

module.exports = async (req, res) => {
  if (req.method === 'POST') {
    const { email } = req.body;
    const apiKey = '44ff24c95a644cc1984389326df6c2ef-us21'; // Replace with your MailChimp API key
    const listId = 'e3b39a30fb'; // Replace with your mailing list ID
    const server = apiKey.slice(-3); // Extract the server number from your API key (e.g., "us1" or "us20")

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
      res.status(error.response.status).send(error.response.data);
    }
  } else {
    res.status(405).send({ message: 'Method not allowed' });
  }
};
