import { FolderLayout } from "./FullFolder";

const PortfolioSubpage = () => {
  return (
    <>

    </>
  )
}

const PortfolioEntry = () => {
  return (
    <div>
      <img src="me-cropped.jpeg" h-10 w-10 />
    </div>
  )
}

export const Portfolio = () => {
  return (
    <div className="bg-[#B1AFFF]">
      <FolderLayout>
        Portfolio
        <PortfolioSubpage />
      </FolderLayout>
    </div>
  );
};
