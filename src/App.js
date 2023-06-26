import { Routes, Route, BrowserRouter } from "react-router-dom";
import LandingPage from "./component/landing-page";
import AnnouncementPage from "./component/announcement-page";
import LecturerPage from "./component/lecturer-page";
import ContentsPage from "./component/contents-page";
import QuizPage from "./component/quiz-page";
import AssignmentPage from "./component/assignment-page";
import GradePage from "./component/grade-page";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/announcement" element={<AnnouncementPage />} />
        <Route path="/lecturer" element={<LecturerPage />} />
        <Route path="/contents" element={<ContentsPage />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/assignment" element={<AssignmentPage />} />
        <Route path="/grade" element={<GradePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
