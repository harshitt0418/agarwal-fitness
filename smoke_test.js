import('./server/src/server.js').then(async () => {
  // Wait 2.2 seconds for server to start listening
  await new Promise(r => setTimeout(r, 2200));

  const endpoints = [
    '/api/health',
    '/api/company',
    '/api/categories',
    '/api/products',
    '/api/products/fit-001',
    '/api/services',
    '/api/services/gym-setups',
    '/',
    '/products',
    '/services',
    '/gym-planner',
    '/dealership',
    '/about',
    '/contact'
  ];

  console.log('Testing all endpoints...');
  let allPass = true;
  for (const ep of endpoints) {
    try {
      const res = await fetch('http://localhost:5050' + ep);
      if (res.status >= 200 && res.status < 400) {
        console.log('PASS [' + res.status + '] ' + ep);
      } else {
        console.log('FAIL [' + res.status + '] ' + ep);
        allPass = false;
      }
    } catch (e) {
      console.log('ERR ' + ep + ': ' + e.message);
      allPass = false;
    }
  }

  // Test POST enquiry
  try {
    const postRes = await fetch('http://localhost:5050/api/enquiry', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: 'Smoke Test User',
        phone: '+91 8878790000',
        city: 'Bhilai',
        enquiryType: 'general',
        message: 'Smoke testing full stack setup'
      })
    });
    const postData = await postRes.json();
    console.log('POST /api/enquiry: status ' + postRes.status + ', success: ' + postData.success);
    if (!postData.success) allPass = false;
  } catch (e) {
    console.log('POST /api/enquiry ERR: ' + e.message);
    allPass = false;
  }

  console.log('\n=== SMOKE TEST RESULT ===');
  console.log('ALL PASSED:', allPass);
  process.exit(allPass ? 0 : 1);
});
