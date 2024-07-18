import { useState } from "react";

const CreatePost = () => {
  const [info, setInfo] = useState({
    name: "",
    age: "",
    email: "",
    gender: "",
    marriedStatus: false,
    description: "",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInfo((i) => {
      return {
        ...i,
        [name]: value,
      };
    });
  };
  return (
    <>
      <div className="container w-50 mx-auto mt-4 p-5 bg-dark-subtle rounded-2 border border-2">
        <div className="mb-3 ">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="enter name..."
            name="name"
            value={info.name}
            onChange={handleOnChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Age
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="enter age..."
            name="age"
            value={info.age}
            onChange={handleOnChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
            name="email"
            value={info.email}
            onChange={handleOnChange}
          />
        </div>

        <div className="d-flex gap-3 mb-3">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="gender"
              id="flexRadioDefault1"
              value={info.gender}
              onChange={handleOnChange}
              defaultChecked
            />
            <label className="form-check-label" htmlFor="flexRadioDefault1">
              Male
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="gender"
              id="flexRadioDefault2"
              value={info.gender}
              onChange={handleOnChange}
            />
            <label className="form-check-label" htmlFor="flexRadioDefault2">
              Female
            </label>
          </div>
        </div>
        <div className="d-flex gap-3 mb-3">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="marriedStatus"
              id="flexRadioDefault3"
              value={info.marriedStatus}
              defaultChecked
            />
            <label className="form-check-label" htmlFor="flexRadioDefault3">
              Married
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="marriedStatus"
              value={info.marriedStatus}
              onChange={handleOnChange}
              id="flexRadioDefault4"
            />
            <label className="form-check-label" htmlFor="flexRadioDefault4">
              Unmarried
            </label>
          </div>
        </div>

        <div className="mb-2">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Example textarea
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            name="description"
            value={info.description}
            onChange={handleOnChange}
          ></textarea>
        </div>

        <div>
          <button className="btn btn-info">Submit</button>
        </div>
      </div>
    </>
  );
};

export { CreatePost };
