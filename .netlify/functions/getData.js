/* eslint-disable */
const fetch = require("node-fetch");
const { config } = require("dotenv");
config();
const Airtable = require('airtable');

Airtable.configure({
  endpointUrl: 'https://api.airtable.com',
  apiKey: process.env.AIRTABLE_KEY
})

const base = Airtable.base('appkLPDVgr4TwR3lM');

exports.handler = function(event, context, callback) {

    const allRecords = []
    base('Imported table')
      .select({
        view: "Grid view"
      })
      .eachPage(
        function page(records, fetchNextPage) {
          records.forEach(function(record) {
            allRecords.push(record)
          })
          fetchNextPage()
        },
        function done(err) {
          if (err) {
            callback(err)
          } else {
            const body = JSON.stringify({ records: allRecords })
            const response = {
              statusCode: 200,
              body: body,
              headers: {
                'content-type': 'application/json',
                'cache-control': 'Cache-Control: max-age=300, public'
              }
            }
            callback(null, response)
          }
        }
      )
  }























//   base('Imported table').select({
//       // Selecting records in Grid view:
//       view: "all"
//   }).eachPage(function page(records, fetchNextPage) {
//       // This function (`page`) will get called for each page of records.
  
//       records.forEach(function(record) {
//           arr.push(record.get('ID'));
//       });

//       // To fetch the next page of records, call `fetchNextPage`.
//       // If there are more records, `page` will get called again.
//       // If there are no more records, `done` will get called.
//       fetchNextPage();

//   }, function done(err) {
//       if (err) { console.error(err); return; }
//       else {
//         const body = JSON.stringify({ 'data': arr });
//         const response = {
//           statusCode: 200,
//           body,
//           headers: {
//             'Content-Type':'application/json'
//           }
//         }
//       callback(null, response);
//       }
//   } 
//   );
// }












  // try {
  //   const response = await fetch(
  //     `https://api.airtable.com/v0/appkLPDVgr4TwR3lM/Imported%20table?maxRecords=3&view=Grid%20view&api_key=${key}`,
  //     {
  //       headers: { Accept: "application/json" }
  //     }
  //   );
  //   if (!response.ok) {
  //     // NOT res.status >= 200 && res.status < 300
  //     return { statusCode: response.status, body: response.statusText };
  //   }
  //   const data = await response.json();

  //   return {
  //     statusCode: 200,
  //     body: JSON.stringify(data)
  //   };
  // } catch (err) {
  //   console.log(err); // output to netlify function log
  //   return {
  //     statusCode: 500,
  //     body: JSON.stringify(err.message) // Could be a custom message or object i.e. JSON.stringify(err)
  //   };
  // }
