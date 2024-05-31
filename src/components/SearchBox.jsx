const SearchBox = () => {
  return (
    <div className='flex items-center justify-center mb-8'>
      <div className='min-w-[400px] rounded-l-full rounded-r-full border border-black pl-6 pr-3 py-1.5 flex items-center justify-between'>
        <input
          type='text'
          className='w-5/6 placeholder:text-black placeholder:capitalize focus:outline-none'
          placeholder='Search Topics'
        />
        <button type='button' className='p-2 bg-black text-white rounded-full'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='size-6'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z'
            />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default SearchBox
