import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductDescriptionPage from "./pages/ProductDescriptionPage";
import AddProductPage from "./pages/AddProductPage";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/login" element={<LoginPage />} /> */}
        <Route path="/product/:id" element={<ProductDescriptionPage />} />
        <Route path="/create" element={<AddProductPage />} />
      </Routes>
    </Router>
  )
}

export default App;
