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
//   await context.linkRichMenu('RICHMENU_ID');
// };
