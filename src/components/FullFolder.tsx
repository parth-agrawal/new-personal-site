import { Divider } from "./Divider";
import { Navbar } from "./Navbar";

interface MainFaceProps {
  content: string;
}

export const FullFolder = ({ content }: MainFaceProps) => {
  return (
    <>
      <div className="flex flex-col py-48 px-12 font-mono">
        <Navbar />
        <div className="flex justify-center items-center h-[500px] bg-[#FFF7AF]">
          <div className="text-4xl w-[75%] font-bold text-center">
            {content}
          </div>
        </div>
        <Divider />
      </div>
    </>
  );
};
