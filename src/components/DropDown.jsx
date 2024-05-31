import ChevronDownIcon from "./ChevronDownIcon"
import IdeaIcon from "./IdeaIcon"

const DropDown = () => {
  return (
    <button className='bg-blue-100 text-blue-600 p-2 flex items-center justify-center gap-2 rounded-full'>
      <IdeaIcon />
      <span className='uppercase text-xs font-medium tracking-wider text-black'>
        All Topics
      </span>
      <ChevronDownIcon />
    </button>
  )
}

export default DropDown
