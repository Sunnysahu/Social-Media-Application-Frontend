import {useState} from 'react'

import PostComponent from './PostComponent'
function MainComponent() {
  return (
    <div>
      <PostComponent images={"../../public/square.jpeg"}/>
      <PostComponent images={"../../public/frontend.png"}/>
      <PostComponent images={"../../public/vite.svg"}/>
      <PostComponent images={"../../public/square.jpeg"}/>
    </div>
  )
}

export default MainComponent
