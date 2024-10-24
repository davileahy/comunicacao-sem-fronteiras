import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import MorePage from "./pages/MorePage";
import AllCoursesPage from "./pages/AllCoursesPage";
import LibraryPage from "./pages/LibraryPage";
import { Analytics } from "@vercel/analytics/react"
import ScrollToTop from "./hooks/useScrollToTop";

function App() {
  return (
    <>
      <Router>
        <ScrollToTop /> {/* Faz com que todas as páginas comecem no topo */}
        <Routes>
          <Route path="/" element={<MainPage />} index/>
          <Route path="/inicio" element={<MainPage />} />
          <Route path="/saiba_mais" element={<MorePage />} />
          <Route path="/cursos" element={<AllCoursesPage />} />
          <Route path="/biblioteca" element={<LibraryPage />} />
          {/* Adicionar outras rotas para diferentes páginas */}
        </Routes>
      </Router>
      <Analytics />
    </>
  );
}

export default App;
