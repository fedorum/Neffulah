import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header"
import Navigation from "./components/Navigation";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Admin from "./pages/Admin";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <Navigation></Navigation>
      <Routes>
        <Route path="/" element={<Products></Products>}></Route>
        <Route path="/cart" element={<Cart></Cart>}></Route>
        <Route path="/admin" element={<Admin></Admin>}></Route>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
