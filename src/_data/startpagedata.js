// require('dotenv').config();

// const Airtable = require('airtable');

// let base = new Airtable({ apiKey: process.env.API_KEY }).base(process.env.BASE_ID);

// module.exports = () => {
//     return new Promise((resolve, reject) => {
//       let startpageData = [];
//         base('startpage') 
//           .select({ 
//               view: 'Grid view' 
//           })
//           .eachPage(
//             function page(records, fetchNextPage) {
//               records.forEach((record) => {
//                 startpageData.push({
//                   text1: record.get('text-1'),
//                   text2: record.get('text-2'),
//                   imageDesktop: record.get('image'),
//                   imageMobile: record.get('image-mobile'),
//                   caption: record.get('caption'),
//                   isActive: record.get('active'),
//                   internalLinkMusic: record.get('internal-link-music'),
//                   internalLinkMusicId: record.get('id (from internal-link-music)'),
//                   internalLinkManual: record.get('internal-link-manual'),
//                 });
//               });
//               fetchNextPage();
//             },
//             function done(err) {
//               if (err) {
//                 reject(err)
//               } else {
//                 resolve(startpageData);
//                 console.log(startpageData);
//               }
//             }
//           );
//         });
//       };



