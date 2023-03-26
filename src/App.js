import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/auth";
import Router from "./utils/router";

function App() {
  return (
        <AuthProvider>
          <Router />
        </AuthProvider>
  );
}

export default App;
