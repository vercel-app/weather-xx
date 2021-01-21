const axios = require('axios')

async function current({ latitude, longitude }) {
  const { data } = await axios.get('/air/now', {
    baseURL: 'https://devapi.qweather.com/v7',
    params: {
      location: `${longitude},${latitude}`,
      key: process.env.QWEATHER_API_KEY
    }
  })

  const { pm2p5: pm25, pubTime, ...airData } = data.now || {}
  return pm25 ? { pm25, ...airData } : {}
}

module.exports = { current }
