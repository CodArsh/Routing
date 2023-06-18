import "./App.css";
import AddUser from "./components/AddUser";
import AllUsers from "./components/AllUsers";
import Navbar from "./components/Navbar";
import Tag from "./components/Tag";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Tag />} />
        <Route path="/all-users" element={<AllUsers />} />
        <Route path="/add-user" element={<AddUser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
