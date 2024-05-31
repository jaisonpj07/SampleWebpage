import ArrowDown from "./ArrowDown";
import Breadcrumbs from "./Breadcrumbs";
import IconButton from "./IconButton";
import SearchBox from "./SearchBox";
import Seperator from "./Seperator";
import SubTitle from "./SubTitle";
import Title from "./Title";
import Faces from "./Faces"

const Hero = () => {
  return (
    <section className='px-8 py-2'>
      <Breadcrumbs />

      <Title pre='Forum' title='Discuss & ' italic='Evolve' />

      <SubTitle />

      <SearchBox />

      <div className='flex items-center justify-center gap-6 mb-8'>
        <IconButton color={"red"} icon={"chat"} text={"Start Discussing"} />

        <Seperator/>

        <IconButton color={"blue"} icon={"idea"} text={"View Topics"} />
      </div>

      <ArrowDown />

      <Faces/>
    </section>
  )
}
 
export default Hero;