import { Routes, Route } from 'react-router-dom';
import loadable from '@loadable/component';
import MainLayout from './layouts/front/MainLayout';

const MainPage = loadable(() => import('./main/pages/MainPage'));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<MainPage />} />
      </Route>
    </Routes>
  )
};

export default App;