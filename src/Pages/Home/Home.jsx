import Banner from "../../components/Banner/Banner";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import WhyChoose from "../../components/WhyChoose/WhyChoose";

const Home = () => {
    return (
        <div className="">
            <NavBar></NavBar>
            <Banner></Banner>
            <WhyChoose></WhyChoose>
            <Footer></Footer>
        </div>
    );
};

export default Home;