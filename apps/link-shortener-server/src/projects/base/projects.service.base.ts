/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  Projects as PrismaProjects,
  Links as PrismaLinks,
  User as PrismaUser,
} from "@prisma/client";

import { ProjectsCreateInput } from "./ProjectsCreateInput";
import { Projects } from "./Projects";

export class ProjectsServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.ProjectsCountArgs, "select">): Promise<number> {
    return this.prisma.projects.count(args);
  }

  async projectsItems(
    args: Prisma.ProjectsFindManyArgs
  ): Promise<PrismaProjects[]> {
    return this.prisma.projects.findMany(args);
  }
  async projects(
    args: Prisma.ProjectsFindUniqueArgs
  ): Promise<PrismaProjects | null> {
    return this.prisma.projects.findUnique(args);
  }
  async createProjects(
    args: Prisma.ProjectsCreateArgs
  ): Promise<PrismaProjects> {
    return this.prisma.projects.create(args);
  }
  async updateProjects(
    args: Prisma.ProjectsUpdateArgs
  ): Promise<PrismaProjects> {
    return this.prisma.projects.update(args);
  }
  async deleteProjects(
    args: Prisma.ProjectsDeleteArgs
  ): Promise<PrismaProjects> {
    return this.prisma.projects.delete(args);
  }

  async findLinksItems(
    parentId: string,
    args: Prisma.LinksFindManyArgs
  ): Promise<PrismaLinks[]> {
    return this.prisma.projects
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .linksItems(args);
  }

  async getUser(parentId: string): Promise<PrismaUser | null> {
    return this.prisma.projects
      .findUnique({
        where: { id: parentId },
      })
      .user();
  }
  async CreateProject(args: ProjectsCreateInput): Promise<Projects> {
    throw new Error("Not implemented");
  }
}
