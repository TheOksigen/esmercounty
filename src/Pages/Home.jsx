import React, { useContext } from 'react'
import Card from '../Components/Card'
import { Olkeler } from '../Contex/DataContex'
import { nanoid } from 'nanoid'


function Home() {
  const data = useContext(Olkeler);
  return (
    <div className='flex flex-wrap gap-2 justify-center p-3 bg-slate-600'>
      {data.map((item) => {
        return (
          <Card item={item} key={nanoid()} />
        )
      })}
    </div>
  )
}

export default Home