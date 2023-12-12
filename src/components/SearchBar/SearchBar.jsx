import { useSearchParams } from "react-router-dom";
export default function SearchBar() {
  const [searchParams, setSearchParams] = useSearchParams();
  function changeParams(e) {
    const value = e.target.value;
    if (!value) {
      searchParams.delete("keyword");
    } else {
      searchParams.set("keyword", value);
    }
    setSearchParams(searchParams);
  }
  return (
    <section className="search-bar">
      <input
        type="text"
        onChange={changeParams}
        placeholder="Cari berdasarkan judul..."
      />
    </section>
  );
}
