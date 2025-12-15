import Header from "./components/Header"
import Navigation from "./components/Navigation";
import Products from "./pages/Products";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <Navigation></Navigation>
      <Routes>
        <Route path="/" element={<Products></Products>}></Route>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
