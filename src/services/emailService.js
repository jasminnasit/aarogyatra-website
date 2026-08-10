/**
 * Form Submission Service helper for sending form entries to:
 * 1. Google Sheets (VITE_GOOGLE_SHEET_URL)
 * 2. Email Services - Web3Forms or Formspree (VITE_WEB3FORMS_ACCESS_KEY / VITE_FORMSPREE_ENDPOINT)
 */

export async function sendEmailNotification(payload) {
  const googleSheetUrl = import.meta.env.VITE_GOOGLE_SHEET_URL;
  const formspreeEndpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT;
  const web3formsAccessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

  let sheetSuccess = false;
  let emailSuccess = false;

  // 1. Submit to Google Sheets if configured
  if (googleSheetUrl) {
    try {
      const formData = new URLSearchParams();
      Object.keys(payload).forEach((key) => {
        formData.append(key, typeof payload[key] === 'object' ? JSON.stringify(payload[key]) : payload[key]);
      });
      formData.append('timestamp', new Date().toISOString());

      await fetch(googleSheetUrl, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: formData.toString()
      });
      sheetSuccess = true;
    } catch (err) {
      console.error('Google Sheet submission error:', err);
    }
  }

  // 2. Submit to Formspree if configured
  if (formspreeEndpoint) {
    try {
      const response = await fetch(formspreeEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      if (response.ok) {
        emailSuccess = true;
      } else {
        const data = await response.json().catch(() => ({}));
        throw new Error(data.error || 'Failed to submit form via Formspree.');
      }
    } catch (err) {
      console.error('Formspree submission error:', err);
      if (!sheetSuccess) throw err;
    }
  }

  // 3. Submit to Web3Forms if configured
  if (web3formsAccessKey) {
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: web3formsAccessKey,
          to_email: 'connect@aarogyatraglobalcare.com',
          from_name: payload.name || payload.fullName || 'Aarogyatra Website Inquiry',
          subject: payload.subject || 'New Website Inquiry - Aarogyatra Global Care',
          ...payload
        })
      });

      const data = await response.json();
      if (data.success) {
        emailSuccess = true;
      } else {
        throw new Error(data.message || 'Failed to submit form via Web3Forms.');
      }
    } catch (err) {
      console.error('Web3Forms submission error:', err);
      if (!sheetSuccess) throw err;
    }
  }

  // If at least one endpoint succeeded
  if (sheetSuccess || emailSuccess) {
    return {
      success: true,
      message: 'Form submitted successfully!'
    };
  }

  // 4. Fallback / Demo Mode when no endpoints are configured yet
  console.log('[Form Submission Service] Payload (configure VITE_GOOGLE_SHEET_URL, VITE_WEB3FORMS_ACCESS_KEY, or VITE_FORMSPREE_ENDPOINT in .env):', payload);

  await new Promise((resolve) => setTimeout(resolve, 800));

  return {
    success: true,
    isDemoMode: true,
    message: 'Form submitted successfully.'
  };
}
