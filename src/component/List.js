import { useEffect, useState } from 'react';
// 참고: https://redballs.tistory.com/entry/React-기초-목록-만들기-04-ListView-만들기 [즐거운인생:티스토리]


import axios from 'axios';
// import React, { useEffect, useState } from 'react'


const Dictionary = () => {
  const [data, setData] = useState();
  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get('/test')
          .then((res) => (setData(res.data.items)));
      } catch (error) {
        console.error(error);
      }
    }

    getData();
  }, [])



  return (
    <div>
      {console.log(data)}
    </div>
  )
}

export default Dictionary