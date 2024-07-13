import moment from "moment";
import { MdOutlinePushPin, MdCreate, MdDelete } from "react-icons/md";
const NoteCard = ({
  title,
  date,
  content,
  tags,
  isPinned,
  onEdit,
  onDelete,
  onPinNote,
}) => {
  return (
    <div className="border rounded p-4  bg-white hover:shadow-xl transition-all ease-in-out cursor-pointer">
      <div className="flex items-center justify-between">
        <div>
          <h6 className="text-base font-medium" onClick={onEdit}>{title}</h6>
          <span className="text-xs text-slate-500">
            {moment(date).format("D MMMM YY")}
          </span>
        </div>
        <div className="flex flex-row gap-2 items-center justify-center my-auto">
          <MdOutlinePushPin
            size={22}
            className={`icons-btn ${
              isPinned ? "text-primary" : "text-slate-300"
            } my-auto hover:text-primary`}
            onClick={onPinNote}
          />
          <div className="flex flex-row gap-2">
            <MdCreate
              size={22}
              className="icon-btn hover:text-green-600"
              onClick={onEdit}
            />
            <MdDelete
              size={22}
              className="icon-btn hover:text-red-600"
              onClick={onDelete}
            />
          </div>
        </div>
      </div>
      <p className="text-sm text-slate-600 mt-2" onClick={onEdit}>{content?.slice(0, 20)}</p>
      <div className="flex items-center justify-normal mt-2" onClick={onEdit}>
        <div className="text-xs leading-3 text-slate-500" onClick={onEdit}>
          {tags.map((item) => `#${item}`)}
        </div>
      </div>
    </div>
  );
};

export default NoteCard;
