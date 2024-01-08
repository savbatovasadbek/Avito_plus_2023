import { Header } from "./Header";
import Main from "./Main/Main";
import Service from "./Service/Service";
import { ShortView } from "./ShortView";
import { Works } from "./Works";

const Home = () => {
  return (
    <div
      style={{
        margin: "0 auto",
        width: "1280px",
        backgroundColor: "lightblue",
      }}
    >
      <Header />
      <Main />
      <ShortView />
      <Service />
      <Works />
    </div>
  );
};

export default Home;
