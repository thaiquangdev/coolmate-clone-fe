import {
  HomeBanner,
  HomeBannerBlock,
  HomeProducts,
} from "../components/common";

const Home = () => {
  return (
    <section className="pt-[82px]">
      <HomeBanner />
      <HomeProducts type="product-news" />
      <HomeBannerBlock />
      <HomeProducts type="product-news" />
      <HomeBannerBlock />
      <HomeProducts type="product-news" />
    </section>
  );
};

export default Home;
