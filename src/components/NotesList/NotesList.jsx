import SearchBar from "../SearchBar/SearchBar";
import Notes from "../Notes/Notes";
import NotesListEmpty from "../NotesListEmpty/NotesListEmpty";
import PropTypes from "prop-types";
export default function NotesList({ kelas, judul, item }) {
  return (
    <section className={kelas}>
      <h2>{judul}</h2>
      <SearchBar />
      {item.length > 0 ? (
        <section className="notes-list">
          {item.map((note) => (
            <Notes key={note.id} {...note} />
          ))}
        </section>
      ) : (
        <NotesListEmpty />
      )}
    </section>
  );
}

NotesList.propTypes = {
  kelas: PropTypes.string.isRequired,
  judul: PropTypes.string.isRequired,
  item: PropTypes.array.isRequired,
};
