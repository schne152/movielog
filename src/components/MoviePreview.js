import React from 'react'

export default function MoviePreview(props) {
    const title = props.movie.title
    const image = props.movie.image;

  return (
    <a href='/login' >
        <div href="/" className='flex flex-row items-center'>
            <img className="w-28" src={image} alt="" />
            <p className="pl-4 text-primary">{title}</p>
        </div>
    </a>
  )
}
