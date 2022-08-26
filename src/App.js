import logo from './logo.svg';
import './App.css';
import LoginPage from './pages/login/LoginPage';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from './pages/home/HomePage';
import DashboardPage from './pages/dashboard/DashboardPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<LoginPage />} />
        <Route exact path='/dashboard' element={<DashboardPage />} />
      </Routes>
    </Router>
  );
}

export default App;
