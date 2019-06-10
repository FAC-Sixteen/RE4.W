import { config } from "dotenv";
config();
const key = process.env.AIRTABLE_KEY;

const https = require("https");

const request = url => {
  return new Promise((resolve, reject) => {
    https
      .get(url, response => {
        let allTheData = "";
        response.on("data", chunk => {
          allTheData += chunk;
        });
        response.on("end", () => {
          try {
            resolve(JSON.parse(allTheData));
          } catch (e) {
            reject(`There was an error with the JSON`);
          }
        });
      })
      .on("error", err => reject(`There was an error: ${err}`));
  });
};

export async function handler(event, context) {
  console.log("test");
  try {
    const data = await request(
      `https://api.airtable.com/v0/appkLPDVgr4TwR3lM/Imported%20table?maxRecords=3&view=Grid%20view&api_key=${key}`
    ).then(res => {
      if (!res.ok) {
        const error = new Error("HTTP error");
        error.status = res.status;
        throw error;
      }
      return res.json();
    });
    return {
      statusCode: 200,
      body: JSON.stringify(data)
    };
  } catch (error) {
    return {
      statusCode: error.status || 500,
      body: error.message
    };
  }
}
