import BuyerSupplier from "./components/buyerSupplier/BuyerSupplier";
import ChoosePlace from "./components/chooePlace/ChoosePlace";
import Footer from "./components/footer/Footer";
import HeroForm from "./components/heroForm/HeroForm";
import Navbar from "./components/navbar/Navbar";
import Verify from "./components/verify/Verify";
import Works from "./components/works/Works";

function App() {
  return (
    <>
      <Navbar />
      <HeroForm />
      <ChoosePlace />
      <BuyerSupplier />
      <Verify />
      <Works />
      <Footer />
    </>
  );
}

export default App;
