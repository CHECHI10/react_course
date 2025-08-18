import React, { useState } from 'react'
import { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom';

function Github() {
  const data = useLoaderData();

  /* const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://api.github.com/users/CHECHI10')
    .then(response => response.json())
    .then(data => {
      console.log(data);
      setData(data);
    })
  }, []) */
  
  if (!data) {
    return (
      <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
        Loading...
      </div>
    );
  }

  return (
    <div className="mx-auto text-center m-4 bg-gray-600 text-white rounded-md flex items-center justify-around p-4 w-1/2">

      <div className='w-32 h-32 overflow-hidden rounded-full border-4 border-white'>
        <img 
          src={data.avatar_url} 
          alt="git-picture" 
          className='w-full h-full object-cover' 
        />
      </div>

      <div className='text-3xl'>
        Github followers: {data.followers}
      </div>
    </div>

  )
}

export default Github

export const githubInfoLoader = async ()=> {
  const response = await fetch('https://api.github.com/users/CHECHI10')

  return response.json();
}