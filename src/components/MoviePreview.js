import React from 'react'

export default function MoviePreview() {
  return (
    <a href='/login'>
        <div href="/" className='flex flex-row items-center'>
            <img className="w-20" src="https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_Ratio0.6800_AL_.jpg" alt="" />
            <p className="pl-4 text-primary">Inception (2010)</p>
        </div>
    </a>
  )
}
