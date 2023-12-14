




'use client';

import { useEffect, useState } from 'react';
import client from '../../../../sanity/client';
import { PortableText } from '@portabletext/react';
import { urlFor } from '../../../../sanity/client';
import Image from 'next/image';

const ServicePost = ({ params }) => {
  const [serviceData, setServiceData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await client.fetch(`*[_type == "services" && slug.current=="${params.id}"]{content,mainImage,title}`);
        setServiceData(res[0]);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [params.id]);

  if (!serviceData) {
    return <div className="text-center mt-8">Loading...</div>;
  }

  const mainImageUrl = urlFor(serviceData.mainImage).url();

  return (
    <div className="max-w-2xl mx-auto mt-8 p-4 rounded-md shadow-md">
      <h1 className="text-3xl font-bold mb-4">{serviceData.title}</h1>

      <Image
        alt="team"
        className="rounded-lg mb-4"
        src={mainImageUrl}
        width={300}
        height={200}
      />

      <PortableText value={serviceData.content} className="prose" />
    </div>
  );
};

export default ServicePost;
