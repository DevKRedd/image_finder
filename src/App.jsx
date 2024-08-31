import './App.css';
import NavBar from './components/navbar/NavBar';
import Search from './components/search/Search';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
    return (
        <Router>
            <NavBar />
            <Routes>
                <Route path="/" element={<Search />} />
                {/* Add more routes as needed */}
            </Routes>
        </Router>
    );
}

export default App;
