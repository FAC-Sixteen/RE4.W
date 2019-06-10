/* eslint-disable */
const fetch = require("node-fetch");
const { config } = require("dotenv");
config();

const key = process.env.AIRTABLE_KEY;
exports.handler = async function(event, context) {
  try {
    const response = await fetch(
      `https://api.airtable.com/v0/appkLPDVgr4TwR3lM/Imported%20table?maxRecords=3&view=Grid%20view&api_key=${key}`,
      {
        headers: { Accept: "application/json" }
      }
    );
    if (!response.ok) {
      // NOT res.status >= 200 && res.status < 300
      return { statusCode: response.status, body: response.statusText };
    }
    const data = await response.json();

    return {
      statusCode: 200,
      body: JSON.stringify(data)
    };
  } catch (err) {
    console.log(err); // output to netlify function log
    return {
      statusCode: 500,
      body: JSON.stringify(err.message) // Could be a custom message or object i.e. JSON.stringify(err)
    };
  }
};
