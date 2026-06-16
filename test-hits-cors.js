fetch('https://hitscounter.dev/api/hit?url=https%3A%2F%2Fmoney-tracker-android-web.vercel.app%2F&label=Total+Visitors&icon=eye&color=%233d8bfd&message=&style=flat&tz=Asia%2FKathmandu')
  .then(res => {
    console.log('Status:', res.status);
    for (let [key, value] of res.headers.entries()) {
      console.log(`${key}: ${value}`);
    }
    return res.text();
  })
  .then(text => {
    console.log('Response length:', text.length);
  })
  .catch(err => {
    console.error('Error:', err);
  });
