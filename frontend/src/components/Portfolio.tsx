import { useEffect, useState } from "react";
import { FolderLayout } from "./FullFolder";

type Project = {
  id: string,
  title: string,
  description: string,
  image: string,
  url: string,
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

      {projects && projects.map((project, index) => (
        <PortfolioEntry key={index} project={project} />
      ))}

    </>
  )
}

const PortfolioEntry = ({ project }: { project: Project }) => {
  const { title, image, url } = project;
  return (
    <div>
      <div>
        {title}
        <img src={image} h-10 w-10 />
        <a href={url}>{url}</a>

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
