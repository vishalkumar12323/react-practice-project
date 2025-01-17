import { useState, useEffect } from "react";
import "../styles/search-bar.css";

// const data = [
//   {
//     name: "john",
//     email: "john@john23.com",
//     phone: 8797656788,
//     country: "India",
//   },
//   {
//     name: "liam",
//     email: "liam@liam34.com",
//     phone: 8765434644,
//     country: "Germany",
//   },
//   {
//     name: "casey",
//     email: "casey@casey4.com",
//     phone: 9987345233,
//     country: "Canada",
//   },
//   {
//     name: "jack",
//     email: "jack@jack.com",
//     phone: 2287545233,
//     country: "England",
//   },
//   { name: "bob", email: "bob@bob476.com", phone: 8290845231, country: "India" },
//   {
//     name: "Emary",
//     email: "emary@emary555.com",
//     phone: 7897843534,
//     country: "France",
//   },
//   {
//     name: "smith",
//     email: "smith@smith585.com",
//     phone: 9874538943,
//     country: "Australia",
//   },
//   {
//     name: "adam",
//     email: "adam@adam.com",
//     phone: 8765469878,
//     country: "Merlin",
//   },
//   {
//     name: "druv",
//     email: "druv@druv33.com",
//     phone: 9876676754,
//     country: "India",
//   },
//   {
//     name: "harry",
//     email: "harry@harry45.com",
//     phone: 46765468645,
//     country: "India",
//   },
//   {
//     name: "ritik",
//     email: "ritik@ritik89.com",
//     phone: 3454584729,
//     country: "dubai",
//   },
// ];
export const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);
  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setData((preData) => {
      return preData.filter(
        (d) => d.name.toLowerCase() === query.toLowerCase()
      );
    });
  };

  useEffect(() => {
    (async function () {
      const resposne = await fetch(
        "https://jsonplaceholder.typicode.com/users",
        { method: "GET" }
      );

      const data = await resposne.json();
      setData(data);
    })();
  }, []);
  return (
    <div className="search_container">
      <form onSubmit={handleFormSubmit}>
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
        {data &&
          data.length > 0 &&
          data.map((d) => (
            <div className="card" key={d.email}>
              <p>
                <strong>name:</strong> {d.name}
              </p>
              <p>
                <strong>email:</strong> {d.email}
              </p>
              <p>
                <strong>phone no.</strong> {d.phone}
              </p>
              <p>
                <strong>website:</strong> {d.website}
              </p>
            </div>
          ))}
      </div>
    </div>
  );
};