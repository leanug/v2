import { StaticImageData } from 'next/image'
import React from 'react'
import Link from 'next/link'

interface CardProps {
  title: string,
  text: string,
  badge: string[],
  image: string | StaticImageData; // Permitir tanto URL de imágenes como objetos StaticImageData
  imgAlt: string,
  url: string,
  link: string,
}

export const Card: React.FC<CardProps> = ({ title, text, badge, image, imgAlt, url, link }) => {
  const CardElement = link === '' ? 'a' : Link
  console.log('CardElement', CardElement);
  
  return (
      <CardElement href={link || url} className="card card-bordered w-96 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{text}</p>
          <div className="card-actions justify-end">
            {badge && badge.map((item, index) => (
              <div key={index} className="badge badge-outline">{item}</div> 
            ))}
          </div>
        </div>
        <figure>
          <img src={typeof image === 'string' ? image : image.src} alt={imgAlt} width={500} height={500} />
        </figure>
      </CardElement>
    
  )
}