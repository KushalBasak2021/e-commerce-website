import { Route } from "react-router-dom";
import "./App.css";
import CartPage from "./components/CartPage";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import { AppProvider } from "./context/AppContext";
import { BrowserRouter as Router, Routes } from "react-router-dom";

function App() {
  return (
    <AppProvider>
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
        </div>
      </Router>
    </AppProvider>
  );
}

export default App;
