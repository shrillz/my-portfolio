import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout'; // Assuming Layout is in a separate file

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />} />
      {}
    </Routes>
  );
}

export default App;