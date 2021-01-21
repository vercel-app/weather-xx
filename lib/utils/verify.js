module.exports = ({ token, location }) => {
  if (!token) { return false }
  if (!location) { return false }

  return token === process.env.API_KEY
}
