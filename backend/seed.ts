


import type { Project } from "@prisma/client"
import prisma from "./prisma/prisma.client"

const portfolioData: Project[] = [
    {
        id: 1,
        title: "Project 1",
        description: "This is a description of project 1",
        link: "https://www.google.com",
        image: "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        id: 2,
        title: "Project 2",
        description: "This is a description of project 2",
        link: "https://www.google.com",
        image: "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",
        createdAt: new Date(),
        updatedAt: new Date(),
    },

]

const projects = await prisma.project.createMany({
    data: portfolioData
})
console.log(projects)