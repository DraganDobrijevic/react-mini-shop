import Slider from '../../components/slider/slider.component';
import FeaturedCategory from '../../components/featured-category/featured-category.component';
import Header from '../../components/header/header.component';
import Footer from '../../components/footer/footer.component';

const Homepage = () => {
  return (
    <div>
      <Header />
      <Slider />
      <FeaturedCategory />
      <Footer />
    </div>
  );
};

export default Homepage;
