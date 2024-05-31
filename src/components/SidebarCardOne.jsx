const SidebarCardOne = () => {
  return (
    <div className='bg-yellow-100 rounded-md w-full'>
      <div className='flex flex-col items-center justify-center gap-6 border-b border-gray-300 p-6'>
        <h2 className='font-semibold text-xl text-center'>
          Top Contributor
          <br />
          <i>this week</i>
        </h2>

        <div className='relative'>
          <img
            src='https://c.pxhere.com/photos/08/7a/male_portrait_profile_social_media_cv_young_elegant_suit-459413.jpg!d'
            height={180}
            width={180}
            className='rounded-full'
          />

          <div className='py-1 px-2 bg-red-800 text-white flex items-center justify-center gap-4 rounded-full absolute top-6 -left-16'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='size-3'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155'
              />
            </svg>

            <span className='text-white text-[8px] uppercase font-semibold'>
              100+ Responses
            </span>
          </div>

          <div className='py-1 px-2 bg-green-800 text-yellow-400 flex items-center justify-center gap-4 rounded-full absolute top-16 -right-20'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='currentColor'
              className='size-3'
            >
              <path
                fillRule='evenodd'
                d='M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z'
                clipRule='evenodd'
              />
            </svg>

            <span className='text-white text-[8px] uppercase font-semibold'>
              4.2 Positive Rating
            </span>
          </div>
        </div>

        <p className='text-lg'>Jishnu Ambadi</p>
      </div>

      <div className='p-6'>
        <p className='text-center mb-6'>
          You can be the next one! Be part of USA's 1st CPT program directory.
        </p>

        <button className='text-white rounded-full px-2 py-4 w-full transition duration-300 ease-in-out bg-gradient-to-tr from-[#b92b27] to-[#1565C0]'>
          <p className='text-center flex items-start justify-center gap-4'>
            <span>Join Community & Ask</span>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='currentColor'
              className='size-6 text-yellow-400'
            >
              <path
                fillRule='evenodd'
                d='M9 4.5a.75.75 0 0 1 .721.544l.813 2.846a3.75 3.75 0 0 0 2.576 2.576l2.846.813a.75.75 0 0 1 0 1.442l-2.846.813a3.75 3.75 0 0 0-2.576 2.576l-.813 2.846a.75.75 0 0 1-1.442 0l-.813-2.846a3.75 3.75 0 0 0-2.576-2.576l-2.846-.813a.75.75 0 0 1 0-1.442l2.846-.813A3.75 3.75 0 0 0 7.466 7.89l.813-2.846A.75.75 0 0 1 9 4.5ZM18 1.5a.75.75 0 0 1 .728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 0 1 0 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 0 1-1.456 0l-.258-1.036a2.625 2.625 0 0 0-1.91-1.91l-1.036-.258a.75.75 0 0 1 0-1.456l1.036-.258a2.625 2.625 0 0 0 1.91-1.91l.258-1.036A.75.75 0 0 1 18 1.5ZM16.5 15a.75.75 0 0 1 .712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 0 1 0 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 0 1-1.422 0l-.395-1.183a1.5 1.5 0 0 0-.948-.948l-1.183-.395a.75.75 0 0 1 0-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0 1 16.5 15Z'
                clipRule='evenodd'
              />
            </svg>
          </p>
        </button>
      </div>
    </div>
  )
}

export default SidebarCardOne
