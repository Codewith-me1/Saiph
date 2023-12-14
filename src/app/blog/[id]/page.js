






import React from 'react';
import client from '../../../../sanity/client';
import { PortableText } from '@portabletext/react';
import { urlFor } from '../../../../sanity/client';
import Image from 'next/image';

const BlogPost = async (content) => {
  const id = content.params.id;
  const res = await client.fetch(`*[_type == "post" && slug.current=="${id}"]{content,mainImage,title}`);

  // Check if the response has data
  if (!res || res.length === 0) {
    return <div>No data found</div>;
  }

  const mainImageUrl = urlFor(res[0].mainImage).width(200).height(200).url();

  return (
    <div className="max-w-2xl mx-auto mt-8 p-4 rounded-md shadow-md">
      <h1 className="text-3xl font-bold mb-4">{res[0].title}</h1>

      <Image
        alt="team"
        className="rounded-lg object-cover object-center mb-4  sm:w-96 sm:h-64 lg:w-500 lg:h-200"
        src={mainImageUrl}
        width={500}
        height={200}
      />

      <div className="prose">
        <PortableText value={res[0].content} />
      </div>
    </div>
  );
};

export default BlogPost;
