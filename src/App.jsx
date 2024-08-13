import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Navigation from "./components/navigation.jsx";
import Homepage from "./components/homepage.jsx";
import Account from "./pages/account.jsx";
import Cart from "./pages/cart.jsx";
import Products from "./pages/products.jsx";
import Footer from "./components/footer.jsx";

const App = () => {
  return (
      <Router>
        <Navigation/>
        <Routes>
          <Route exact path="/homepage" element={<Homepage/>} />
          <Route exact path="/account" element={<Account/>} />
          <Route exact path="/cart" element={<Cart/>} />
          <Route exact path="/products" element={<Products/>} />
        </Routes>
        <Footer/>
      </Router>
  )
}

export default App