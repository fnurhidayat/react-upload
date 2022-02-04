import { useState, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { upload, selectProfile } from "./stores/profileSlice";
import "./App.css";

function isLoading(status) {
  return status === "loading";
}

function App() {
  const [image, setImage] = useState(null);
  const dispatch = useDispatch();
  const { value, status } = useSelector(selectProfile);

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(upload(image));
  }

  return (
    <div className="App">
      <header className="App-header">
        {isLoading(status) ? (
          <p>Loading...</p>
        ) : (
          <Fragment>
            {!!value && <img src={value.url} alt="Just ordinary Image" />}
            <form onSubmit={handleSubmit}>
              <input
                type="file"
                onChange={(e) => setImage(e.target.files[0])}
              />
              <input type="submit" value="UPLOAD" />
            </form>
          </Fragment>
        )}
      </header>
    </div>
  );
}

export default App;
