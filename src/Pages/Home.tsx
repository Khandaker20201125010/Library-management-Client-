import Banner from "@/Shared/Banner";
import BookSlider from "@/Shared/BookSlider";


const Home = () => {
    return (
        <div className="w-full mx-auto w-full">
            <Banner title="Welcome to BookLynk"></Banner>
            <BookSlider></BookSlider>
        </div>
    );
};

export default Home;
