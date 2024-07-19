import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPost } from "./app/services/functions";

function App() {
  const dispatch = useDispatch();
  const { post, loading } = useSelector((state) => state.app);

  useEffect(() => {
    dispatch(fetchPost());
  }, [dispatch]);

  if (loading) {
    return <div>loading...</div>;
  }
  return (
    <>
      <div className="container mt-3">
        {post &&
          post[2].map((p) => {
            return (
              <div key={p.id} className="border border-2 p-3">
                <span>{p.id}</span>
                <h1>{p.title}</h1>
                <p>{p.body}</p>
              </div>
            );
          })}
      </div>
    </>
  );
}

export default App;
