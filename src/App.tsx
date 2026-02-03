import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { UserProvider } from './context/UserContext';
import Layout from './components/Layout';
import Home from './pages/Home';
import Categories from './pages/Categories';
import Learn from './pages/Learn';
import Quiz from './pages/Quiz';
import QuizCategories from './pages/QuizCategories';
import './App.css';

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="categories" element={<Categories />} />
            <Route path="learn/:categoryId" element={<Learn />} />
            <Route path="quiz" element={<QuizCategories />} />
            <Route path="quiz/:categoryId" element={<Quiz />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
