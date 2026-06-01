const requiredFields = ['name', 'email', 'company', 'message'];

export function validateLead(body) {
  const missing = requiredFields.filter((field) => !String(body[field] || '').trim());
  if (missing.length) {
    return `Missing required fields: ${missing.join(', ')}`;
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email)) {
    return 'Please provide a valid email address.';
  }

  return null;
}
