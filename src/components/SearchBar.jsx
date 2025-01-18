import { useState, useEffect } from "react";
import "../styles/search-bar.css";

export const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [originalData, setOriginalData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);

    const timeId = setTimeout(() => {
      const filtered = originalData.filter((d) =>
        d.name.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredData([]);

      setTimeout(() => setFilteredData(filtered), 300);
    }, 300);
    return () => clearTimeout(timeId);
  };

  useEffect(() => {
    (async function () {
      const resposne = await fetch(
        "https://jsonplaceholder.typicode.com/users",
        { method: "GET" }
      );

      const data = await resposne.json();
      setOriginalData(data);
      setFilteredData(data);
    })();
  }, []);
  return (
    <div className="search_container">
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="input_box">
          <input
            type="text"
            id="input"
            name="query"
            value={query}
            onChange={handleInputChange}
            placeholder="search user..."
          />

          <button id="button" type="submit">
            Search
          </button>
        </div>
      </form>

      <div className="query_result">
        {filteredData &&
          filteredData.length > 0 &&
          filteredData.map((d) => (
            <div key={d.email} className="card">
              <p>
                <strong>name:</strong> {d.name}
              </p>
              <p>
                <strong>email:</strong> {d.email}
              </p>
              <p>
                <strong>website</strong> {d.website}
              </p>
            </div>
          ))}
      </div>
    </div>
  );
};
