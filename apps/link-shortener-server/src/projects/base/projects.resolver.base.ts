/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { Projects } from "./Projects";
import { ProjectsCountArgs } from "./ProjectsCountArgs";
import { ProjectsFindManyArgs } from "./ProjectsFindManyArgs";
import { ProjectsFindUniqueArgs } from "./ProjectsFindUniqueArgs";
import { CreateProjectsArgs } from "./CreateProjectsArgs";
import { UpdateProjectsArgs } from "./UpdateProjectsArgs";
import { DeleteProjectsArgs } from "./DeleteProjectsArgs";
import { LinksFindManyArgs } from "../../links/base/LinksFindManyArgs";
import { Links } from "../../links/base/Links";
import { User } from "../../user/base/User";
import { ProjectsCreateInput } from "./ProjectsCreateInput";
import { ProjectsService } from "../projects.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Projects)
export class ProjectsResolverBase {
  constructor(
    protected readonly service: ProjectsService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Projects",
    action: "read",
    possession: "any",
  })
  async _projectsItemsMeta(
    @graphql.Args() args: ProjectsCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Projects])
  @nestAccessControl.UseRoles({
    resource: "Projects",
    action: "read",
    possession: "any",
  })
  async projectsItems(
    @graphql.Args() args: ProjectsFindManyArgs
  ): Promise<Projects[]> {
    return this.service.projectsItems(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Projects, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Projects",
    action: "read",
    possession: "own",
  })
  async projects(
    @graphql.Args() args: ProjectsFindUniqueArgs
  ): Promise<Projects | null> {
    const result = await this.service.projects(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Projects)
  @nestAccessControl.UseRoles({
    resource: "Projects",
    action: "create",
    possession: "any",
  })
  async createProjects(
    @graphql.Args() args: CreateProjectsArgs
  ): Promise<Projects> {
    return await this.service.createProjects({
      ...args,
      data: {
        ...args.data,

        user: args.data.user
          ? {
              connect: args.data.user,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Projects)
  @nestAccessControl.UseRoles({
    resource: "Projects",
    action: "update",
    possession: "any",
  })
  async updateProjects(
    @graphql.Args() args: UpdateProjectsArgs
  ): Promise<Projects | null> {
    try {
      return await this.service.updateProjects({
        ...args,
        data: {
          ...args.data,

          user: args.data.user
            ? {
                connect: args.data.user,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Projects)
  @nestAccessControl.UseRoles({
    resource: "Projects",
    action: "delete",
    possession: "any",
  })
  async deleteProjects(
    @graphql.Args() args: DeleteProjectsArgs
  ): Promise<Projects | null> {
    try {
      return await this.service.deleteProjects(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Links], { name: "linksItems" })
  @nestAccessControl.UseRoles({
    resource: "Links",
    action: "read",
    possession: "any",
  })
  async findLinksItems(
    @graphql.Parent() parent: Projects,
    @graphql.Args() args: LinksFindManyArgs
  ): Promise<Links[]> {
    const results = await this.service.findLinksItems(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => User, {
    nullable: true,
    name: "user",
  })
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "read",
    possession: "any",
  })
  async getUser(@graphql.Parent() parent: Projects): Promise<User | null> {
    const result = await this.service.getUser(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Projects)
  async CreateProject(
    @graphql.Args()
    args: ProjectsCreateInput
  ): Promise<Projects> {
    return this.service.CreateProject(args);
  }
}