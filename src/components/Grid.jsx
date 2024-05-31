import Card from "./Card"

const Grid = () => {
  return (
    <div className='flex items-center justify-center mb-8'>
      <div className='grid grid-cols-3 gap-8 p-4 w-max'>
        <div className='w-96 text-white rounded-xl px-10 py-16 transition duration-300 ease-in-out bg-gradient-to-tr from-[#b92b27] to-[#1565C0]'>
          <p className='text-center font-semibold text-2xl'>Eligibility</p>
        </div>

        <Card text='F1 Visa Students' />
        <Card text='Universities' />
        <Card text='Admission' />
        <Card text='Companies' />
        <Card text='Jobs' />
      </div>
    </div>
  )
}

export default Grid
