import { getActiveNotes } from "../../utils/local-data";
import NotesList from "../NotesList/NotesList";
import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import { RiAddLine } from "react-icons/ri";
import { useSearchParams } from "react-router-dom";
export default function Home() {
  const [searchParams] = useSearchParams();
  const keyword = searchParams.get("keyword");
  const navigate = useNavigate();
  const activeNotes = getActiveNotes();
  return (
    <section className="homepage">
      {keyword ? (
        <>
          <NotesList
            kelas={"home-page"}
            judul={"Hasil Pencarian"}
            item={activeNotes.filter((note) => {
              return note.title.toLowerCase().includes(keyword.toLowerCase());
            })}
          />
        </>
      ) : (
        <>
          <NotesList
            kelas={"home-page"}
            judul={"Catatan Aktif"}
            item={activeNotes}
          />
        </>
      )}
      <section className={"homepage__action"}>
        <Button
          title={"Tambah"}
          icon={<RiAddLine />}
          action={() => {
            navigate("/notes/new");
          }}
          kelas={"action"}
        />
      </section>
    </section>
  );
}
