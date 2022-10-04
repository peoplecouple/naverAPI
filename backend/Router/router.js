const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/test', async (req, res) => {
  const url = 'https://openapi.naver.com/v1/search/encyc.json';
  const response = await axios.get(url, {
    headers: {
      "X-Naver-Client-Id": '0sEUPK6MdtXt1rcSIOeA',
      "X-Naver-Client-Secret": 'RIR6yIMCNQ',
    },
    params: {
      query: '호랑나비'
    }
  });
  for (data in response) {
    if (data === 'data') {
      res.send(response[data]);
    }

  }
})

module.exports = router;