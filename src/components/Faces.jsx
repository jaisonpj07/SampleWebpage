import Face from "./Face"

const Faces = () => {
  return (
    <div className='flex items-center justify-between pb-16'>
      <div className='flex items-center'>
        <div className=''>
          <Face
            rotate={"45"}
            image={
              "https://mir-s3-cdn-cf.behance.net/project_modules/hd/d95c1f148207527.62d1246c25004.jpg"
            }
          />
        </div>

        <div className='relative -ml-8 -mt-24'>
          <Face
            rotate={"45"}
            image={
              "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?size=338&ext=jpg&ga=GA1.1.2082370165.1716508800&semt=ais_user"
            }
          />

          <div className='bg-green-800 text-white text-xs px-4 py-1 absolute top-10 -right-8 rounded-tl-full rounded-r-full'>
            How?
          </div>
        </div>
      </div>

      <div className='flex items-center'>
        <div className='-mt-24'>
          <Face
            rotate={"45"}
            image={
              "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436180.jpg"
            }
          />
        </div>

        <div className='relative ml-4 mt-24'>
          <Face
            rotate={"45"}
            image={
              "https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671122.jpg"
            }
          />

          <div className='bg-sky-500 text-white text-xs px-4 py-1 absolute bottom-7 -left-12 rounded-br-full rounded-l-full'>
            That's it! Sir.?
          </div>
        </div>
      </div>

      <div className='flex items-center'>
        <div className='-mt-24'>
          <Face
            rotate={"45"}
            image={
              "https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671134.jpg"
            }
          />
        </div>

        <div className='relative -ml-8 -mb-24'>
          <Face
            rotate={"45"}
            image={
              "https://img.freepik.com/free-psd/3d-illustration-person-with-pink-hair_23-2149436186.jpg?size=338&ext=jpg&ga=GA1.1.44546679.1716940800&semt=ais_user"
            }
          />

          <div className='bg-violet-700 text-white text-xs px-4 py-1 absolute top-5 -right-8 rounded-tl-full rounded-r-full'>
            Hey Thanks
          </div>
        </div>
      </div>

      <div className='flex items-center'>
        <div className='-mt-36'>
          <Face
            rotate={"45"}
            image={
              "https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/2c0788101650903.5f2369be0091d.jpg"
            }
          />
        </div>

        <div className='relative ml-8 mt-24'>
          <Face
            rotate={"45"}
            image={
              "https://getillustrations.b-cdn.net//photos/pack/3d-avatar-male_lg.png"
            }
          />

          <div className='bg-orange-500 text-white text-xs px-4 py-1 absolute bottom-7 -left-12 rounded-br-full rounded-l-full'>
            That's Awesome!
          </div>
        </div>
      </div>
    </div>
  )
}

export default Faces
