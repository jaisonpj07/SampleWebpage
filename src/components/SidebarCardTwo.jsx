const SidebarCardTwo = () => {
  return (
    <div className='bg-gradient-to-tr from-[#b92b27] to-[#1565C0] rounded-md w-full'>
      <div className='flex flex-col items-center justify-center gap-6 p-6'>
        <div className='flex items-center justify-center'>
          <div className='h-56 w-24 rounded-[100%] bg-pink-500 bg-cover bg-center bg-no-repeat -rotate-[30deg] -mr-24'></div>
          <div
            className='h-56 w-24 rounded-[100%] bg-black z-10 bg-cover bg-center bg-no-repeat'
            style={{ backgroundImage: "url('https://shorturl.at/19TzD')" }}
          ></div>

          <div className='h-56 w-24 rounded-[100%] bg-white bg-cover bg-center bg-no-repeat rotate-45 -ml-24'></div>
        </div>
      </div>

      <div className='p-6 flex flex-col items-center justify-center'>
        <p className='text-white mb-3 uppercase text-sm text-center'>E-Book</p>
        <p className='text-center text-white text-lg font-medium mb-6'>
          Charting Paths: Program Through a<br />
          <i>Student's</i> Eye
        </p>

        <button className='text-white rounded-full px-6 py-4 bg-transparent border border-2 border-white'>
          <p className='text-center flex items-center justify-center gap-4'>
            <span>Get the Guide</span>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='currentColor'
              className='size-4'
            >
              <path
                fillRule='evenodd'
                d='M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z'
                clipRule='evenodd'
              />
            </svg>
          </p>
        </button>
      </div>
    </div>
  )
}

export default SidebarCardTwo
