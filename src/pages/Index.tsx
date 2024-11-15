import Dishes from "./second-page/Dishes";
import Home from "./first-page/Home";
import Chef from "./third-page/Chef";
import Testimonial from "./testimonial-page/testimonial";
import Footer from "./footer-page/footer";

function Index() {
    return (
        <>
            <Home />
            <Dishes />
            <Chef />
            <Testimonial />
            <Footer />
        </>
    )
}

export default Index