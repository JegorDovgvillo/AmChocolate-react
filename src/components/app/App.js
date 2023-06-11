import Footer from "../footer/Footer";
import Header from "../header/Header";
import Catalog from "../catalog/Catalog";
import Delivery from "../delivery/delivery";
import CatalogMain from "../catalogMain/CatalogMain";
import Breadcrumbs from "../breadcrumbs/Breadcrumbs";
import Basket from "../basket/Basket";
import Ordering from "../ordering/Ordering";
import Home from "../home/Home";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './app.css'

function App() {
  return (
    <Router>
      <>
        <Header />

        <Routes>
          <Route path='' element={<Home />}></Route>
          <Route path="/main/catalog/chocolate" element={<Catalog data='шоколад' />}></Route>
          <Route path="/main/catalog/tartlets" element={<Catalog data='тарталетки' />}></Route>
          <Route path="/main//catalog/caramel" element={<Catalog data='карамель' />}></Route>
          <Route path="/main//catalog/cookie" element={<Catalog data='печенье' />}></Route>
          <Route path="/main//catalog/eclairs" element={<Catalog data='эклеры' />}></Route>
          <Route path="/main//catalog/lolipop" element={<Catalog data='лолипоп' />}></Route>
          <Route path="/main//catalog/mendiant" element={<Catalog data='мендиант' />}></Route>
          <Route path="/main//catalog/truffle" element={<Catalog data='трюфель' />}></Route>
          <Route path="/main//catalog/spoon" element={<Catalog data='шоколад на ложке' />}></Route>
          <Route path="/main//catalog/nuts" element={<Catalog data='орехи' />}></Route>
          <Route path="/main/catalog" element={<CatalogMain />}></Route>
          <Route path="main/delivery" element={<Delivery />}></Route>
          <Route path="/main/basket" element={<Basket />}></Route>
          <Route path="/main/basket/ordering" element={<Ordering />}></Route>
        </Routes>
      </>
      <Footer />
    </Router>
  );
}

export default App;
