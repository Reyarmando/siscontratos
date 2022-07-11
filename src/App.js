import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './componets/Home';
import BandejaEntrada from './componets/BandejaEntrada'
import Login from './componets/Login';
import { AuthProvider } from './contexts/authContext';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/BandejaEntrada" element={<BandejaEntrada/>} />
            <Route path="/" element={<Login />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
