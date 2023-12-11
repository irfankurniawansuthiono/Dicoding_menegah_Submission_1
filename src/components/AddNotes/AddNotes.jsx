import Button from "../Button/Button";
import { RiCheckLine } from "react-icons/ri";
import { addNote } from "../../utils/local-data";
import { useNavigate } from "react-router-dom";
export default function AddNotes() {
  const navigate = useNavigate();
  return (
    <section className="add-new-page">
      <div className="add-new-page__input">
        <input
          type="text"
          className="add-new-page__input__title"
          placeholder="Catatan Rahasia"
        />
        <div
          className="add-new-page__input__body"
          contentEditable={true}
          data-placeholder="Sebenarnya saya adalah..."
        ></div>
      </div>
      <div className="add-new-page__action">
        <Button
          kelas={"action"}
          title={"Simpan"}
          icon={<RiCheckLine />}
          action={() => {
            const title = document.querySelector(
              ".add-new-page__input__title"
            ).value;
            const body = document.querySelector(
              ".add-new-page__input__body"
            ).innerHTML;
            addNote({ title, body });
            navigate("/");
          }}
        />
      </div>
    </section>
  );
}
