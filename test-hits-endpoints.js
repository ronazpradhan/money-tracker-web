async function testUrl(url) {
  try {
    const res = await fetch(url);
    console.log('URL:', url);
    console.log('Status:', res.status);
    const text = await res.text();
    console.log('SVG text preview:', text.substring(0, 400));
    // Check if it contains a slash / in the text tag (like >2/2< or >2/1<)
    const matches = text.match(/>(\d+\/\d+|\d+)</g);
    console.log('Matches:', matches);
    console.log('----------------------------');
  } catch (err) {
    console.error('Error:', err);
  }
}

async function run() {
  const targetUrl = 'https://money-tracker-android-web.vercel.app/';
  // Test common parameters
  await testUrl(`https://hitscounter.dev/api/hit?url=${encodeURIComponent(targetUrl)}&view=total`);
  await testUrl(`https://hitscounter.dev/api/hit?url=${encodeURIComponent(targetUrl)}&count=total`);
  await testUrl(`https://hitscounter.dev/api/hit?url=${encodeURIComponent(targetUrl)}&type=total`);
  await testUrl(`https://hitscounter.dev/api/hit?url=${encodeURIComponent(targetUrl)}&show=total`);
  await testUrl(`https://hitscounter.dev/api/hit?url=${encodeURIComponent(targetUrl)}&view=today`);
}

run();
