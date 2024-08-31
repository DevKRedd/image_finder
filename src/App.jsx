import './App.css';
import NavBar from './components/navbar/NavBar';
import Search from './components/search/Search';
import FavoriteImages from './components/favorite-images/FavoriteImages';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
    return (
        <Provider store={store}>
            <Router>
                <NavBar />
                <Routes>
                    <Route path="/" element={<Search />} />
                    <Route path="/favorites" element={<FavoriteImages />} />
                    {/* Add more routes as needed */}
                </Routes>
            </Router>
        </Provider>
    );
}

export default App;
