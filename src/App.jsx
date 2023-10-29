import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout  from "./components/Layout";
import Login  from "./components/Login";
import Home  from "./components/Home";
import Main  from "./components/Main";
import Default  from "./components/Default";
import Dashboard  from "./components/Dashboard";
function App() {
  return (
    <div>
      <h1>Routes</h1>
      <Routes>
        <Route path="/" element={<Layout />}>
           <Route path="login" element={<Login />} />
           <Route path="/" element={<Home />} />
           <Route path="dashboard" element={<Dashboard />} />
           <Route path="main" element={<Main />} />
           <Route path="*" element={<Default />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
