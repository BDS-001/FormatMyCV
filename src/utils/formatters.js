export function formatPhone(phone) {
  if (!phone) return ''
  const digits = String(phone).replace(/\D/g, '')
  if (digits.length === 10) {
    return `${digits.slice(0, 3)}-${digits.slice(3, 6)}-${digits.slice(6)}`
  }
  // If not 10 digits, return as-is to avoid unintended changes
  return String(phone)
}

export function stripProtocol(url) {
  if (!url) return ''
  return String(url).replace(/^https?:\/\//, '')
}
