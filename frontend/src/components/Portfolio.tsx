import { useEffect, useState } from "react";
import { FolderLayout } from "./FullFolder";

type Project = {
  id: string,
  title: string,
  description: string,
  image: string,
  url: string,
  github: string,
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
      <div className="flex flex-wrap w-full justify-around gap-20">
        {projects && projects.map((project, index) => (
          <div className="w-84 p-2" key={index}>
            <PortfolioEntry project={project} />
          </div>
        ))}
      </div>


    </>
  )
}

const PortfolioEntry = ({ project }: { project: Project }) => {
  const { title, description, image, url, github } = project;
  return (
    <div className="flex gap-2 flex-col bg-[#FFAFD5] p-12 items-center justify-center">
      <div className="flex  w-full h-auto justify-center">
        <img className="border flex min-w-24 max-h-48" src={image} />
      </div>
      <div className="pt-2 text-2xl font-BadScript">

        {title}
      </div>
      <div className="text-lg font-BadScript">
        {description}
      </div>
      <div className="flex flex-col">
        <a href={url} className="underline hover:text-[#B1AFFF]">Visit</a>
        <a href={github} className="underline hover:text-[#B1AFFF]">Github</a>
      </div>


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
