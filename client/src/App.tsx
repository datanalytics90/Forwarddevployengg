import { useEffect, useState } from "react";
import api from "./services/api";

function App() {
  const [message, setMessage] = useState("Connecting to API...");
  const [error, setError] = useState("");

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

  return (
    <main>
      <h1>FDEProject</h1>

      {error ? (
        <p>{error}</p>
      ) : (
        <p>API Status: {message}</p>
      )}
    </main>
  );
}

export default App;