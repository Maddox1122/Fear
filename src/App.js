import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import NoPage from "./Pages/NoPage";
import Producten from "./Pages/Producten";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Reviews from "./Pages/Reviews";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="producten" element={<Producten />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="reviews" element={<Reviews />} />
        <Route path="contact" element={<Contact />} />
        <Route path="terms" element={<Term />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
