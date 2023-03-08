import "./App.css";
import AddPost from "./pages/Add";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/addpost" element={<AddPost />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
