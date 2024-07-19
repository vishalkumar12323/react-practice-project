import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { postData } from "../app/services/functions";

const CreatePost = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [info, setInfo] = useState({
    title: "",
    body: "",
    userId: 0,
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

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postData(info));
    setInfo({
      title: "",
      body: "",
      userId: 0,
    });
    navigate("/");
  };
  return (
    <>
      <div className="container w-50 mx-auto mt-4 p-5 bg-dark-subtle rounded-2 border border-2">
        <form onSubmit={handleSubmit}>
          <div className="mb-3 ">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="enter title..."
              name="title"
              value={info.title}
              onChange={handleOnChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Body
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="body..."
              name="body"
              value={info.body}
              onChange={handleOnChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              UserId
            </label>
            <input
              type="number"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="user-id"
              name="userId"
              value={info.userId}
              onChange={handleOnChange}
            />
          </div>

          {/* <div className="d-flex gap-3 mb-3">
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="status"
                id="flexRadioDefault1"
                value={info.gender}
                onChange={handleOnChange}
                defaultChecked
              />
              <label className="form-check-label" htmlFor="flexRadioDefault1">
                Completed
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="status"
                id="flexRadioDefault2"
                value={info.completed}
                onChange={handleOnChange}
              />
              <label className="form-check-label" htmlFor="flexRadioDefault2">
                Uncompleted
              </label>
            </div>
          </div> */}

          <div>
            <button className="btn btn-info">Submit</button>
          </div>
        </form>
      </div>
    </>
  );
};

export { CreatePost };
