const Title = (props) => {
  return (
    <div className=' text-center py-6 mb-4'>
      <p className='uppercase font-medium pb-4'>{props.pre}</p>
      <h2 className='font-semibold text-4xl'>
        {props.title}<i>{props.italic}</i>
      </h2>
    </div>
  )
}
 
export default Title;