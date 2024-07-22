interface MainFaceProps {
  content: string;
}

export const MainFace = ({ content }: MainFaceProps) => {
  return (
    <div className="flex flex-col py-48 px-12">
      <div className="flex justify-center items-center h-[500px] bg-[#FFF7AF]">
        <div className="text-4xl w-[50%] text-center">{content}</div>
      </div>
    </div>
  );
};
