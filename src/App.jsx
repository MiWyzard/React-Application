import { Outlet } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="content">
      <Outlet />
    </div>
  );
}

export default App;
