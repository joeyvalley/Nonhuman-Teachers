const mailchimp = require("@mailchimp/mailchimp_marketing");

mailchimp.setConfig({
  apiKey: "44ff24c95a644cc1984389326df6c2ef-us21",
  server: "us21",
});

async function run() {
  const response = await mailchimp.ping.get();
  console.log(response);
}

run();