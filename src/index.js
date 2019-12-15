//成功

// const { router, text } = require('bottender/router');
// async function SayHi(context) {
//   await context.sendText('Hi!');
// }
// async function SayHello(context) {
//   await context.sendText('Hello!');
// }
// module.exports = async function App() {
//   return router([
//     text('hi', SayHi), // return SayHi when receiving hi text message
//     text('hello', SayHello), // return SayHello when receiving hello text message
//   ]);
// };

// module.exports = async function App(context) {
//   await context.pushImage({
//     originalContentUrl:
//       'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
//     previewImageUrl:
//       'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
//   });
// };

// module.exports = async function App(context) {
//   await context.replyImageCarouselTemplate(
//     'this is an image carousel template',
//     [
//       {
//         imageUrl: 'https://example.com/bot/images/item1.jpg',
//         action: {
//           type: 'postback',
//           label: 'Buy',
//           data: 'action=buy&itemid=111',
//         },
//       },
//       {
//         imageUrl: 'https://example.com/bot/images/item2.jpg',
//         action: {
//           type: 'message',
//           label: 'Yes',
//           text: 'yes',
//         },
//       },
//       {
//         imageUrl: 'https://example.com/bot/images/item3.jpg',
//         action: {
//           type: 'uri',
//           label: 'View detail',
//           uri: 'http://example.com/page/222',
//         },
//       },
//     ]
//   );
// };

// module.exports = async function App(context) {
//   await context.replyCarouselTemplate('this is a carousel template', [
//     {
//       thumbnailImageUrl: 'https://example.com/bot/images/item1.jpg',
//       title: 'this is menu',
//       text: 'description',
//       actions: [
//         {
//           type: 'postback',
//           label: 'Buy',
//           data: 'action=buy&itemid=111',
//         },
//         {
//           type: 'postback',
//           label: 'Add to cart',
//           data: 'action=add&itemid=111',
//         },
//         {
//           type: 'uri',
//           label: 'View detail',
//           uri: 'http://example.com/page/111',
//         },
//       ],
//     },
//     {
//       thumbnailImageUrl: 'https://example.com/bot/images/item2.jpg',
//       title: 'this is menu',
//       text: 'description',
//       actions: [
//         {
//           type: 'postback',
//           label: 'Buy',
//           data: 'action=buy&itemid=222',
//         },
//         {
//           type: 'postback',
//           label: 'Add to cart',
//           data: 'action=add&itemid=222',
//         },
//         {
//           type: 'uri',
//           label: 'View detail',
//           uri: 'http://example.com/page/222',
//         },
//       ],
//     },
//   ]);
// };

// module.exports = async function App(context) {
//   await context.replyConfirmTemplate('this is a confirm template', {
//     text: 'Are you sure?',
//     actions: [
//       {
//         type: 'message',
//         label: 'Yes',
//         text: 'yes',
//       },
//       {
//         type: 'message',
//         label: 'No',
//         text: 'no',
//       },
//     ],
//   });
// };

//不成功
// module.exports = async function App(context) {
//   await context.sendFlex({
//     type: 'bubble',
//     body: {
//       type: 'box',
//       layout: 'horizontal',
//       contents: [
//         {
//           type: 'text',
//           text: 'Hello,',
//         },
//         {
//           type: 'text',
//           text: 'World!',
//         },
//       ],
//     },
//   });
// };

//不成功

// module.exports = async function App(context) {
//   await context.linkRichMenu('richmenu-1d59f1c2028b05126b723c7eb2aa5576');
// };
