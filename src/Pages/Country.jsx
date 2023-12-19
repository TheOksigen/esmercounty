import { nanoid } from 'nanoid'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function Country() {
  const [country, setcountry] = useState([])
  const { zirt } = useParams()
  const navigatee = useNavigate()

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/alpha/${zirt}`)
      .then(res => res.json())
      .then(data => setcountry(data))
  }, [zirt])
  console.log(country[0]?.borders);
  return (
    <div>
      {country[0]?.borders?.map(item => {
        return (
          <>
            <button onClick={() => navigatee(`/olke/${item}`)} key={nanoid()}>{item}</button><br />
          </>
        )
      })}
    </div>
  )
}

export default Country