



import React from 'react'
import client from '../../../../sanity/client'
import Card2 from '@/utils/card2';


const BlogSection = async () => {
  const res = await client.fetch(`*[_type == "post"]`);
  
  return (
   <section className="text-gray-300 body-font">
      <div className="container px-5 py-24 mx-auto">
        
<div className="flex flex-col text-center w-full mb-20">
<h1 className="text-2xl font-medium title-font mb-4 text-white">Blogs</h1>
<p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Welcome to our virtual forum of code and creativity, where our blog
            transforms binary into narratives, and algorithms into compelling stories.
</p>
</div>
    <div className="flex flex-wrap -m-4 p-10 gap-20 align-center px-20">
    {res.map((val) => {
           
      return (
        
        <Card2
              key={val._id} // Ensure each item in the list has a unique key
              image={val.mainImage}
              title={val.title}
              description={val.description}
              slug={ 'blog/' + val.slug.current}
            />
      )
    })}
     
    </div>
  </div>
</section>

  )
}

export default BlogSection




