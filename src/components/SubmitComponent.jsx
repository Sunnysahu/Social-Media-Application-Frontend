function SubmitComponent({onClick}) {
  return (
    <button type="submit" onClick={onClick} className='cursor-pointer bg-gray-100 hover:bg-gray-200 px-[2vw] py-[1vh] rounded-xl'>Post</button>
  )
}

export default SubmitComponent
