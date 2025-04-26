import { Routes, Route } from 'react-router-dom';
import DigitalMenu from './components/DigitalMenu';
import Menu from './components/pages/Menu';

function App() {
  return (
    <Routes>
      <Route path="/" element={<DigitalMenu />} />
      <Route path="/menu" element={<Menu />} /> {/* <-- fixed here */}
    </Routes>
  );
}

export default App;
