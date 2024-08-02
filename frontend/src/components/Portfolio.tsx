import { useEffect, useState } from "react";
import { FolderLayout } from "./FullFolder";

type Project = {
  id: string,
  title: string,
  description: string,
  image: string,
  url: string,
  github: string,
  twitter_thread: string,
}


const getPortfolioEntries = async (): Promise<Project[]> => {
  const response = await import('../data/projects.json');
  const data = await response.default;
  return data
}
// const getPortfolioEntries = async () => {
//   const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
//   const targetUrl = `${BACKEND_URL}/api/project/all`
//   const response = await fetch(targetUrl)
//   return response;

// }

const PortfolioSubpage = () => {

  const [projects, setProjects] = useState<Project[] | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      const data = await getPortfolioEntries();
      setProjects(data);
    };
    fetchProjects();
  }, []);


  console.log(projects)

  return (
    <>
      <div className="flex flex-wrap w-full justify-around gap-5">
        {projects && projects.map((project, index) => (
          <div className="p-2" key={index}>
            <PortfolioEntry project={project} />
          </div>
        ))}
      </div>


    </>
  )
}

const PortfolioEntry = ({ project }: { project: Project }) => {
  const { title, description, image, url, github, twitter_thread } = project;
  return (
    <div className="flex gap-2 flex-col bg-[#FFAFD5] border-[20px] border-[#FFF7AF]/[0.5] px-2 py-6 items-center justify-center w-100 h-">

      <div className="flex w-full h-auto justify-center">
        <img className="border flex min-w-8 max-w-[10em] max-h-48" src={image} />
      </div>
      <div className="pt-2 text-xl font-BadScript">

        {title}
      </div>
      <div className="text-md font-BadScript">
        {description}
      </div>
      {twitter_thread &&
        <div className="flex flex-row gap-1">
          <div>(</div>
          <a href={url} className="underline hover:text-[#B1AFFF]">link</a>
          <div>|</div>
          <a href={github} className="underline hover:text-[#B1AFFF]">github</a>
          <div>|</div>
          <a href={twitter_thread} className="underline hover:text-[#B1AFFF]">devlog</a>
          <div>)</div>
        </div>}

      {!twitter_thread &&
        <div className="flex flex-row gap-1">
          <div>(</div>
          <a href={url} className="underline hover:text-[#B1AFFF]">link</a>
          <div>|</div>
          <a href={github} className="underline hover:text-[#B1AFFF]">github</a>
          <div>)</div>
        </div>
      }
    </div>


  )
}

export const Portfolio = () => {
  return (
    <div className="flex bg-[#B1AFFF] justify-center">
      <FolderLayout>
        Portfolio
        <PortfolioSubpage />
      </FolderLayout>
    </div>
  );
};
