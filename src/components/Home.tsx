import { FolderLayout } from "./FullFolder";



const pageContent = {
  mainFaceContent: "Hi, I'm Parth. I build, write, and create.",
  subFaceContent: "I'm a sub folder",
}

const Subpage = () => {
  return <div className="flex flex-row gap-10">
    <div className="w-1/2">
      <img src="me-cropped.jpeg" className="" />
    </div>
    <div className="w-1/2 text-sm">
      I'm currently a student at Fractal NYC's full-time software engineering immersive. I've founded nonprofits and tech startups, and I've been a product manager at early-stage companies.
    </div>
  </div>
}

export const Home = () => {
  return (
    // move navbar to a layout component
    <>
      <div className="bg-[#B1AFFF]">
        <FolderLayout>
          "Hi, I'm Parth. I build, write, and create."
          <Subpage />
        </FolderLayout>
      </div>
    </>
  );
};

// MainFace
// SubFace
