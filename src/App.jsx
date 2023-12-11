import React from "react";
import Home from "./components/Home/Home";
import Header from "./components/Header";
import Archives from "./components/archives/Archives";
import NotesDetails from "./components/NotesDetails/NotesDetails";
import NotesAdd from "./components/AddNotes/AddNotes";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="app-container">
      <Router>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/archives" element={<Archives />} />
            <Route path="/notes/new" element={<NotesAdd />} />
            <Route path="/notes/:id" element={<NotesDetails />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
