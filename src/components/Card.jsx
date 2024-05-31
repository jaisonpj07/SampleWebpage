const Card = (props) => {
  return (
    <div className='w-96 bg-black text-white rounded-xl px-10 py-16 transition duration-300 ease-in-out hover:bg-gradient-to-tr hover:from-blue-700 hover:to-violet-800'>
      <p className='text-center font-semibold text-2xl'>{props.text}</p>
    </div>
  )
}
 
export default Card;