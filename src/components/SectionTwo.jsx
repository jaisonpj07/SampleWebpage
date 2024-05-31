import ChatIcon from "./ChatIcon";
import Grid from "./Grid";
import Title from "./Title";

const SectionTwo = () => {
  return (
    <section className='px-8 py-16 bg-yellow-100'>
      <Title pre='Topics' title='Most Searched ' italic='Ones' />

      <Grid />

      <div className='flex items-center justify-center'>
        <p className='flex items-center justify-center gap-4'>
          <span>Don&#39;t find your topic?</span>
          <button className='flex items-center justify-center gap-1'>
            <div className={`bg-red-100 text-red-600 py-2 px-5 rounded-full`}>
              <ChatIcon />
            </div>
            <span className='text-sm font-medium tracking-wider italic capitalize'>
              Start Discussing
            </span>
          </button>
        </p>
      </div>
    </section>
  )
}
 
export default SectionTwo;