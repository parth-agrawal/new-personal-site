import { MainFace } from "./MainFace";
import { Navbar } from "./Navbar";

export const Home = () => {
  return (
    // move navbar to a layout component
    <>
      <div className="bg-[#B1AFFF]">
        <MainFace content="Hi, I'm Parth. I build, write, and create." />
      </div>
    </>
  );
};

// MainFace
// SubFace
