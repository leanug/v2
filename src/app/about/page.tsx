import React from 'react';

const About: React.FC = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <section className="max-w-2xl text-lg">
        <p>👋 Hi there! I'm Leandro, a passionate front-end developer and no-code enthusiast based in beautiful Uruguay.</p>
          <p>
          With a diverse skill set ranging from TypeScript and MongoDB to Strapi and Next.js, 
        I specialize in crafting elegant and responsive web experiences that bring ideas to life.
          </p>
        <p>
          As a freelancer, I thrive on the creative challenge of translating concepts into engaging digital products. 
          Whether it's building dynamic websites with TypeScript and MongoDB or leveraging the power of Webflow for rapid 
          prototyping and design iterations, I'm dedicated to delivering solutions that exceed expectations.
        </p>
        <p>
          With a keen eye for detail and a knack for problem-solving, I'm committed to staying at the forefront of 
          technology trends and continuously honing my craft. When I'm not coding, you can find me exploring the vibrant 
          culture and breathtaking landscapes of Uruguay or collaborating with clients worldwide to turn their visions into reality.
          Let's connect and turn your ideas into digital masterpieces! 💻✨
        </p>
      </section>
    </div>
  )
}

export default About
