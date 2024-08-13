import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Navigation from "./components/navigation.jsx";
import Account from "./pages/account.jsx";
import Cart from "./pages/cart.jsx";
import Products from "./pages/products.jsx";

const App = () => {
  return (
      <Router>
        <Navigation/>
        <Routes>
          {/* Home route here */}
          <Route exact path="/account" element={<Account/>} />
          <Route exact path="/cart" element={<Cart/>} />
          <Route exact path="/products" element={<Products/>} />
        </Routes>
        {/* Footer here */}
      </Router>
  )
}

export default App