import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { UserProvider } from './context/UserContext';
import Layout from './components/Layout';
import Home from './pages/Home';
import Categories from './pages/Categories';
import Learn from './pages/Learn';
import Quiz from './pages/Quiz';
import QuizCategories from './pages/QuizCategories';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Terms from './pages/Terms';
import About from './pages/About';
import Guide from './pages/Guide';
import Pronunciation from './pages/guide/Pronunciation';
import Grammar from './pages/guide/Grammar';
import Mistakes from './pages/guide/Mistakes';
import Bookmarks from './pages/Bookmarks';
import Search from './pages/Search';
import './App.css';

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="categories" element={<Categories />} />
            <Route path="bookmarks" element={<Bookmarks />} />
            <Route path="search" element={<Search />} />
            <Route path="learn/:categoryId" element={<Learn />} />
            <Route path="quiz" element={<QuizCategories />} />
            <Route path="quiz/:categoryId" element={<Quiz />} />
            <Route path="guide" element={<Guide />} />
            <Route path="guide/pronunciation" element={<Pronunciation />} />
            <Route path="guide/grammar" element={<Grammar />} />
            <Route path="guide/mistakes" element={<Mistakes />} />
            <Route path="privacy" element={<PrivacyPolicy />} />
            <Route path="terms" element={<Terms />} />
            <Route path="about" element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
