import React from 'react'

interface CardProps {
  title: string,
  text: string,
}

export const Card: React.FC<CardProps> = ({ title, text }) => {
  return (
    <div className="card w-96 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{text}</p>
        <div className="card-actions justify-end">
      <div className="badge badge-outline">Fashion</div> 
      <div className="badge badge-outline">Products</div>
    </div>
      </div>
      <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
    </div>
  )
}