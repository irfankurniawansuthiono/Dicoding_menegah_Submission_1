import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Header from "./components/Header";
import Archives from "./components/archives/Archives";
import NotesDetails from "./components/NotesDetails/NotesDetails";
import NotesAdd from "./components/AddNotes/AddNotes";
import Page404 from "./components/Page404/Page404";
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
            <Route path="*" element={<Page404 />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
