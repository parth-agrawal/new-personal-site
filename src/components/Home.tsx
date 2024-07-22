import { MainFace } from "./MainFace";
import { Navbar } from "./Navbar";

export const Home = () => {
  return (
    // move navbar to a layout component
    <>
      <Navbar />
      <MainFace content="Hi, I'm Parth. I build, write, and create." />
    </>
  );
};

// MainFace
// SubFace
