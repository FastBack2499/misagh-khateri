import Navbar from "./components/Navbar";
import HomePart from "./components/HomePart";
import Services from "./components/Services";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <Toaster toastOptions={{
          style: {
              backgroundColor: 'rgb(23 23 23 / 0.95)',
              color: "white",
          }
        }}
        position="top-center"
        reverseOrder={false}
      />
      <Navbar/>
      <HomePart/>
      <Services/>
      <About/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </div>
  );
}
