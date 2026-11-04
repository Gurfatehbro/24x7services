module.exports = async (req, res) => {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method === 'GET') {
    return res.status(200).json({ status: 'active', message: 'Enquiry API endpoint operational' });
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const data = req.body || {};
    const name = (data.fname || data.name || '').trim();
    const contact = (data.contact || data.phone || '').trim();
    const brand = (data.brand || data.company || 'Multi-Brand').trim();
    const service = (data.services || data.service || 'General Appliance Service').trim();
    const age = (data.productold || data.age || 'Not Specified').trim();
    const address = (data.address || 'Delhi NCR').trim();

    // Basic validation
    if (!contact) {
      return res.status(400).json({
        success: false,
        message: 'Contact number is required'
      });
    }

    const isAjax = req.headers['x-requested-with'] === 'XMLHttpRequest' ||
                  (req.headers.accept && req.headers.accept.includes('application/json')) ||
                  (req.headers['content-type'] && req.headers['content-type'].includes('application/json'));

    if (isAjax) {
      return res.status(200).json({
        success: true,
        message: 'Your service enquiry has been registered successfully. Our technician will contact you shortly.',
        lead: {
          brand,
          name: name || 'Customer',
          contact,
          service,
          address,
          timestamp: new Date().toISOString()
        }
      });
    }

    // Direct browser form POST fallback: Redirect to on-domain success page
    res.writeHead(303, { Location: '/enquiry-success.html' });
    return res.end();
  } catch (err) {
    console.error('Enquiry API Error:', err);
    return res.status(500).json({
      success: false,
      message: 'Failed to process enquiry. Please call our helpline directly at 18002706013.'
    });
  }
};
