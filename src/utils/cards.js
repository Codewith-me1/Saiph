

import Image from 'next/image'
import React from 'react'
import { urlFor } from '../../sanity/client'

const Cards = ({title, description , image}) => {
  return (
    <div className="p-4 lg:w-1/4 md:w-1/4 ">
      
    <div className="h-full  flex flex-col items-center text-center">
    <Image alt="team"
    className="flex-shrink-0 rounded-lg  object-cover object-center mb-4"
    src={urlFor(image).width().height().url()}
    width={200}
    height={200}></Image>
      <div className="w-full ">
          <h2 className="title-font font-medium text-lg text-white">{ title}</h2>
       
        <p className="mb-4 px-[50px] ">{description}</p>
      
      </div>
    </div>
  </div>
  )
}

export default Cards


