import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import Note from './pages/Note.jsx';
import View from './pages/View.jsx';
import Title from './pages/Title.jsx';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Title />} />
        <Route path='/note' element={<Note />} />
        <Route path='/view' element={<View />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router;