import Date from "./Date"
import DropDown from "./DropDown"
import FAQWrapper from "./FAQWrapper"
import SearchBar from "./SearchBar"
import SidebarCardOne from "./SidebarCardOne"
import SidebarCardTwo from "./SidebarCardTwo"

const SectionThree = () => {
  return (
    <section className='px-32 py-16 flex items-center justify-between flex-wrap gap-6'>
      <div className='w-4/6'>
        <div className='flex items-center justify-between mb-8'>
          <Date />

          <DropDown />
        </div>

        <SearchBar />
        <FAQWrapper />
      </div>
      <div className='w-3/12 flex flex-col gap-6'>
        <SidebarCardOne />
        <SidebarCardTwo />
      </div>
    </section>
  )
}

export default SectionThree
