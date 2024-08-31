import './App.css';
import FavoriteImages from './components/favorite-images/FavoriteImages';
import NavBar from './components/navbar/NavBar';
import Search from './components/search/Search';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
    return (
        <Router>
            <NavBar />
            <Routes>
                <Route path="/" element={<Search />} />
                <Route path="/favorites" element={<FavoriteImages/>} />
                {/* Add more routes as needed */}
            </Routes>
        </Router>
    );
}

export default App;
