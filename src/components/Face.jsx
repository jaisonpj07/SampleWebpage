const Face = (props) => {
  const rotation = `rotate-${props.rotate}`

  return (
    <div
      className={`w-220 h-220 flex items-center justify-center rounded-full outline outline-8 outline-white rotate-[${rotation}]`}
    >
      <img
        src={props.image}
        height={180}
        width={180}
        className='rounded-full'
      />
    </div>
  )
}

export default Face
