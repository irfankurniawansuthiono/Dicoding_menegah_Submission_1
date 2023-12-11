import { useParams, useNavigate } from "react-router-dom";
import { getNote } from "../../utils/local-data";
import { showFormattedDate } from "../../utils";
import { deleteNote } from "../../utils/local-data";
import { unarchiveNote } from "../../utils/local-data";
import { archiveNote } from "../../utils/local-data";
import {
  RiInboxUnarchiveLine,
  RiDeleteBinLine,
  RiInboxArchiveLine,
} from "react-icons/ri";
import Button from "../Button/Button";
export default function NotesDetails() {
  const navigate = useNavigate();
  const { id } = useParams();
  const foundNote = getNote(id);
  return (
    <>
      {foundNote ? (
        <section className="detail-page">
          <h2 className="detail-page__title">{foundNote.title}</h2>
          <p className="detail-page__createdAt">
            {showFormattedDate(foundNote.createdAt)}
          </p>
          <p className="detail-page__body">{foundNote.body}</p>
          <div className="detail-page__action">
            {foundNote.archived ? (
              <Button
                kelas={"action"}
                title={"Aktifkan"}
                icon={<RiInboxUnarchiveLine />}
                action={() => {
                  unarchiveNote(foundNote.id);
                  navigate("/");
                }}
              />
            ) : (
              <Button
                kelas={"action"}
                title={"Arsipkan"}
                icon={<RiInboxArchiveLine />}
                action={() => {
                  archiveNote(foundNote.id);
                  navigate("/");
                }}
              />
            )}
            <Button
              kelas={"action"}
              title={"Hapus"}
              icon={<RiDeleteBinLine />}
              action={() => {
                deleteNote(foundNote.id);
                navigate("/");
              }}
            />
          </div>
        </section>
      ) : (
        <section className="notes-list-empty">
          <p className="notes-list__empty">id catatan tidak ditemukan</p>
        </section>
      )}
    </>
  );
}
