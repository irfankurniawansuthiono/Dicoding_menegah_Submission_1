import { getArchivedNotes } from "../../utils/local-data";
import { useSearchParams } from "react-router-dom";
import NotesList from "../NotesList/NotesList";
export default function Archives() {
  const [searchParams] = useSearchParams();
  const keyword = searchParams.get("keyword");
  const archivedNotes = getArchivedNotes();
  return (
    <section className="archives-page">
      {keyword ? (
        <>
          <NotesList
            kelas={"home-page"}
            judul={"Hasil Pencarian"}
            item={archivedNotes.filter((note) => {
              return note.title.toLowerCase().includes(keyword.toLowerCase());
            })}
          />
        </>
      ) : (
        <>
          <NotesList
            kelas={"home-page"}
            judul={"Catatan Arsip"}
            item={archivedNotes}
          />
        </>
      )}
    </section>
  );
}
