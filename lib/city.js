const axios = require('axios')

async function lookup(location) {
  const { data } = await axios.get('/city/lookup', {
    baseURL: 'https://geoapi.qweather.com/v2',
    params: {
      location,
      key: process.env.QWEATHER_API_KEY
    }
  })

  const divisions = data.location || []
  return divisions.map(({
    name,
    lat: latitude,
    lon: longitude,
    adm1: province,
    adm2: prefecture
  }) => {
    return {
      name,
      latitude,
      longitude,
      province,
      prefecture
    }
  })
}

module.exports = { lookup }
