import React from 'react'

function FooterComponent() {
  return (
    <div className="bg-green-100 w-full flex items-center px-[5vw] lg:hidden ">
      <div className='flex w-full justify-between'>
        <div><button type="button">Home</button></div>
        <div><button type="button">Search</button></div>
        <div><button type="button">Feed</button></div>
        <div><button type="button">Logout</button></div>
      </div>
    </div>
  )
}

export default FooterComponent
