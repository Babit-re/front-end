import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Community from './pages/Community';
import Diet from './pages/Diet';
import Home from './pages/Home';
import Join from './pages/Join';
import Login from './pages/Login';
import Mypage from './pages/Mypage';
import Ranking from './pages/Ranking';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/diet" element={<Diet />} />
        <Route path="/community" element={<Community />} />
        <Route path="/ranking" element={<Ranking />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/join" element={<Join />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
