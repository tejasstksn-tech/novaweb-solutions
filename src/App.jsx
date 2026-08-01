import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import WebsiteDetails from "./pages/WebsiteDetails";
import Login from "./pages/Login";
import Inquiry from "./pages/Inquiry";
import ProtectedRoute from "./components/ProtectedRoute";
import Admin from "./pages/Admin";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route
        path="/website/:type"
        element={<WebsiteDetails />}
      />

      <Route
  path="/admin"
  element={
    <ProtectedRoute>
      <Admin />
    </ProtectedRoute>
  }
/>

<Route
  path="/login"
  element={<Login />}
/>
 </Routes>
  );
}

export default App;
