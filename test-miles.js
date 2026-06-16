fetch('https://countapi.mileshilliard.com/api/v1/hit/money-tracker-ronaj/visitors')
  .then(res => {
    console.log('Status:', res.status);
    for (let [key, value] of res.headers.entries()) {
      console.log(`${key}: ${value}`);
    }
    return res.text();
  })
  .then(text => {
    console.log('Response text:', text);
  })
  .catch(err => {
    console.error('Error:', err);
  });
