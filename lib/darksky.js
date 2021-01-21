const axios = require('axios')

async function forecast({ latitude, longitude }) {
  const key = process.env.DARKSKY_API_KEY
  const { data } = await axios.get(`/${key}/${latitude},${longitude}`, {
    baseURL: 'https://api.darksky.net/forecast',
    params: {
      units: 'si',
      lang: 'zh'
    }
  })

  return data
}

module.exports = { forecast }
