import React from "react";
import { Divider } from "./Divider";
import { Navbar } from "./Navbar";

type FolderLayoutProps = {
  children: [string, React.ReactNode]
};

type PageContent = {
  mainFaceContent: string;
  subFaceContent: string;
}


export const FolderLayout = ({ children }: FolderLayoutProps) => {
  const mainContent = children[0];
  const subcontent = children[1];
  return (
    <>
      <div className="flex flex-col py-48 px-12 font-mono">
        <Navbar />
        <div className="flex justify-center items-center h-[500px] bg-[#FFF7AF]">
          <div className="text-4xl w-[75%] font-bold text-center">
            {mainContent}
          </div>
        </div>

        <Divider />
        <div className="flex justify-center items-center min-h-[500px] bg-[#FFF7AF] px-10 py-20">
          {subcontent}
        </div>
      </div>
    </>
  );
};


