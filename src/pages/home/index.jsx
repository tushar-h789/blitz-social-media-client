import { Helmet } from "react-helmet-async";
import PostHome from "../../components/HomeComponents/PostHome";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <PostHome />

      
    </>
  );
};

export default Home;
