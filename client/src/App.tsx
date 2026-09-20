import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import api from "./services/api";
import { setStatus } from "./store/slices/appSlice";

type AppState = {
  app: {
    status: string;
  };
};

function App() {
  const [message, setMessage] = useState("Connecting to API...");
  const [error, setError] = useState("");

  const reduxStatus = useSelector((state: AppState) => state.app.status);
  const dispatch = useDispatch();

  useEffect(() => {
    const checkApi = async () => {
      try {
        const response = await api.get("/health");
        setMessage(response.data.message);
      } catch {
        setError("Unable to connect to the API.");
      }
    };

    checkApi();
  }, []);

  const updateReduxStatus = () => {
    dispatch(setStatus("Redux state updated successfully"));
  };

  return (
    <main>
      <h1>FDEProject</h1>

      {error ? (
        <p>{error}</p>
      ) : (
        <p>API Status: {message}</p>
      )}

      <hr />

      <h2>Redux Test</h2>
      <p>Redux Status: {reduxStatus}</p>

      <button onClick={updateReduxStatus}>
        Update Redux State
      </button>
    </main>
  );
}

export default App;