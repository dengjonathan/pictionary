import SendBird from 'sendbird';

const sb = new SendBird({
  appId: process.env.SENDBIRD_ID
});

sb.connect('JON Deng', (user, error) => {
  console.log(user);
})