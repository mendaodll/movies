import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'

function App() {

  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
        <Navbar />
        <Outlet />
      </div>
  );
}

export default App
