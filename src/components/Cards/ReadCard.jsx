import { useState } from "react"
import { MdClose } from "react-icons/md"
const ReadCard = ({noteData, type, onClose , getAllNotes}) => {
    const [title , setTitle] = useState(noteData?.title)
    const [content , setContent] = useState(noteData?.content)
    const [tags , setTags] = useState(noteData?.tags)
  return (
    <>
      <div className="relative">
      <MdClose
        size={20}
        onClick={onClose}
        className="text-red-500 rounded-sm flex items-center justify-center absolute -top-3 -right-3 drop-shadow-xl"
      />
      <div className="flex flex-col gap-2">
        <label className="input-label">TITLE</label>
        <label className="text-xl text-slate-950 outline-none bg-slate-50 p-1 rounded">{title}</label>
      </div>
      <div className="flex flex-col gap-2 mt-4">
        <label className="input-label">CONTENT</label>
        <label className="text-sm text-slate-950 outline-none bg-slate-50 p-2 rounded overflow-hidden">{content}</label>
      </div>
      <div className="mt-3 ">
        <label className="input-label">TAGS</label>
        <label className="text-xs leading-3 text-slate-500">{tags.map((item) => `#${item}`)}</label>
      </div>
      </div>
    </>
  )
}

export default ReadCard
