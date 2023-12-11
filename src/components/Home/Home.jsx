import { getActiveNotes } from "../../utils/local-data";
export default function Home() {
  const activeNotes = getActiveNotes();
  return (
    <NotesList
      kelas={"archives-page"}
      judul={"Catatan Aktif"}
      item={activeNotes}
    />
  );
}
