import Navbar from "../components/layout/Navbar";
import MainContent from "../components/layout/MainContent";
import Footer from "../components/layout/Footer";

const Home: React.FC = () => {
  return (
    <main style={{ height: "100vh" }}>
      <Navbar />
      <MainContent />
      <Footer />
    </main>
  );
};

export default Home;