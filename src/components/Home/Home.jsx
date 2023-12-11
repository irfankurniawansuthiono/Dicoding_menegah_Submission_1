import { getActiveNotes } from "../../utils/local-data";
import NotesList from "../NotesList/NotesList";
import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import { RiAddLine } from "react-icons/ri";

export default function Home() {
  const navigate = useNavigate();
  const activeNotes = getActiveNotes();
  return (
    <section className="homepage">
      <NotesList
        kelas={"archives-page"}
        judul={"Catatan Aktif"}
        item={activeNotes}
      />
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
