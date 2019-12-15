//不成功
module.exports = async function App(context) {
  await context.sendFlex({
    type: 'bubble',
    body: {
      type: 'box',
      layout: 'horizontal',
      contents: [
        {
          type: 'text',
          text: 'Hello,',
        },
        {
          type: 'text',
          text: 'World!',
        },
      ],
    },
  });
};

//不成功

// module.exports = async function App(context) {
//   await context.linkRichMenu('richmenu-1d59f1c2028b05126b723c7eb2aa5576');
// };
