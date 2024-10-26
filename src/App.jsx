import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';
import Header from './Header';
import Home from './Home';
import Sidebar from './Sidebar';

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* Header with navigation links */}
        <Header />
        <nav className="bg-blue-500 p-4 text-white">
          <Link to="/" className="px-2">Home</Link>
          <Link to="/about" className="px-2">About</Link>
          <Link to="/contact" className="px-2">Contact</Link>
        </nav>

        {/* Main content area with Sidebar and Routing */}
        <div className="flex flex-1">
          <Sidebar />
          <main className="flex-1 p-4">
            {/* Define Routes for different components */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}
