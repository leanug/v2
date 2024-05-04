import Image from 'next/image';

import ponyflyHomeImage from '@/assets/images/projects/ponyfly-home-min.png';

const Ponyfly = () => {
  return (
    <section className="flex flex-col items-center justify-center mt-24">
    <h1 className="text-4xl font-bold mb-8">Ponyfly Project</h1>
    <p className="text-lg text-center mb-12 max-w-3xl leading-8">
      "Ponyfly" is a WordPress-based platform designed to facilitate seamless connections 
      between travelers and customers. Through Ponyfly, travelers can offer products 
      purchased abroad directly to interested buyers, creating a unique marketplace experience. 
      Customers benefit from access to a curated selection of global products, while travelers 
      can monetize their journeys by facilitating product deliveries.
    </p>
    <div className="flex flex-wrap justify-center gap-4">
      <Image 
        src={ponyflyHomeImage} // Add the src attribute with the imported image
        alt="Leandro's Profile Picture" // Add the alt attribute for accessibility
        width={1024} // Set the width of the image
        className="rounded-xl"
      />
    </div>
  </section>
  )
}

export default Ponyfly
