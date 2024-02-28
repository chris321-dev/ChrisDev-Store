import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { Shop } from "./pages/shop/shop";
import { Home } from "./pages/home/home";
import { Contact } from "./pages/contact";
import { Cart } from "./pages/cart/cart";
import { ShopContextProvider } from "./context/shop-context";

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
<<<<<<< HEAD
            <Route path="/ChrisDev-Store" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
=======
            <Route path="/ChrisDev-Store" element={<Shop />} />
>>>>>>> 74faa43965f12d8b4b53ba4e8479fdcbf63785af
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
