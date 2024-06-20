import style from "./searchbar.module.css";

export default function SearchBar({ query, setQuery, getFoodData }) {
  return (
    <div className={style.searchbar}>
     <form onSubmit={(event) =>{ event.preventDefault(); getFoodData(query)}} className={style.searchbar}>
     <input
        type="text"
        placeholder="Give a recipe name"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type="submit">Search </button>
     </form>
    </div>
  );
}
