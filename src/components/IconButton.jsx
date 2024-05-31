import ChatIcon from "./ChatIcon"
import IdeaIcon from "./IdeaIcon"

const IconButton = (props) => {
  return (
    <button className='flex items-center justify-center gap-1'>
      <div
        className={`bg-${props.color}-100 text-${props.color}-600 py-2 px-5 rounded-full`}
      >
        {props.icon === "chat" && <ChatIcon />}
        {props.icon === "idea" && <IdeaIcon />}
      </div>
      <span className='uppercase text-sm font-medium tracking-wider'>
        {props.text}
      </span>
    </button>
  )
}

export default IconButton
