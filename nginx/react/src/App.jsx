import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./LoginPage";
import ListPage from "./ListPage";
import DeletedPage from "./DeletedPage";
import AlreadyPage from "./AlreadyPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/list" element={<ListPage />} />
        <Route path="/deleted" element={<DeletedPage />} />
        <Route path="/already-exists" element={<AlreadyPage />} />
      </Routes>
    </Router>
  );
}

export default App;
