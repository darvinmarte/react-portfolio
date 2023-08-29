import { Outlet } from 'react-router-dom';
import Nav from './components/NavTab';
import Footer from './components/FooterTab';

function App() {
  return (
    <>
    <Nav />
    <main>
    <Outlet />
    </main>
    <Footer />
    </>
  )
}

export default App
