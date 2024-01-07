import { Header } from "./Header";
import Main from "./Main/Main";
import { ShortView } from "./ShortView";
import { Works } from "./Works";

const Home = () => {
  return (
    <div style={{ margin: "0 auto", width: "1280px" }}>
      <Header />
      <Main />
      <ShortView />
      <Works />
    </div>
  );
};

export default Home;
