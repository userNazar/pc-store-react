import { Route, Routes } from "react-router-dom";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import Home from "./pages/Home";
import AllProducts from "./pages/AllProducts";
import { useAppDispatch } from "./store/hooks";
import { useEffect } from "react";
import { fetchGoods } from "./store/slicers/asyncGoodsSlicer";


function App() {

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchGoods())
    // eslint-disable-next-line
  }, [])

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all" element={<AllProducts />} />
      </Routes>
      <Footer />
    </>

  );
}

export default App;
