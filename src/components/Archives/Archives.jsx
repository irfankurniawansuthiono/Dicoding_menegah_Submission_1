import { getArchivedNotes } from "../../utils/local-data";
import NotesList from "../NotesList/NotesList";
export default function Archives() {
  const archivedNotes = getArchivedNotes();
  return (
    <section className="archives-page">
      <NotesList
        kelas={"archives-page"}
        judul={"Catatan Arsip"}
        item={archivedNotes}
      />
    </section>
  );
}
