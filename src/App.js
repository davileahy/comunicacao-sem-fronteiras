import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import MorePage from "./pages/MorePage";
import AllCoursesPage from "./pages/AllCoursesPage";
import LibraryPage from "./pages/LibraryPage";
import { Analytics } from "@vercel/analytics/react";
import ScrollToTop from "./hooks/useScrollToTop";
import PoliticaDePrivacidade from "./pages/PoliticaDePrivacidade";
import TermosDeUso from "./pages/TermosDeUso";
import ChatPage from "./pages/ChatPage";
import PracticePage from "./pages/PracticePage";
import LanguageSelectionPage from "./pages/LanguageSelectionPage";
import TipsToStudy from "./pages/posts/TipsToStudy";
import NotFoundPage from "./pages/NotFoundPage";
import PostsPage from "./pages/posts/PostsPage";
import PomodoroGuidePage from "./pages/posts/PomodoroPost";
import StudyRoutinePage from "./pages/posts/StudyRoutinePost";

function App() {
  return (
    <>
      <Router>
        <ScrollToTop /> {/* Faz com que todas as páginas comecem no topo */}
        <Routes>
          <Route path="/" element={<MainPage />} index />
          <Route path="/chat" element={<ChatPage />} />
          <Route path="/inicio" element={<MainPage />} />
          <Route path="/saiba_mais" element={<MorePage />} />
          <Route path="/cursos" element={<AllCoursesPage />} />
          <Route path="/biblioteca" element={<LibraryPage />} />
          <Route path="/pratica_enem" element={<LanguageSelectionPage />} />
          <Route path="/pratica_enem/:language" element={<PracticePage />} />
          <Route
            path="/politica_de_privacidade"
            element={<PoliticaDePrivacidade />}
          />
          <Route path="/termos_de_uso" element={<TermosDeUso />} />
          {/* Posts */}
          <Route path="/posts" element={<PostsPage />} />
          <Route path="/posts/dicas-de-estudo" element={<TipsToStudy />} />
          <Route path="/posts/pomodoro" element={<PomodoroGuidePage />} />
          <Route path="/posts/rotina-estudos" element={<StudyRoutinePage />} />

          {/* Fallback Route */}
          <Route path="*" element={<NotFoundPage />} />

          {/* Adicionar outras rotas para diferentes páginas */}
        </Routes>
      </Router>
      <Analytics />
    </>
  );
}

export default App;
