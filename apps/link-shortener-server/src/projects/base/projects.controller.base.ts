/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { ProjectsService } from "../projects.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { ProjectsCreateInput } from "./ProjectsCreateInput";
import { Projects } from "./Projects";
import { ProjectsFindManyArgs } from "./ProjectsFindManyArgs";
import { ProjectsWhereUniqueInput } from "./ProjectsWhereUniqueInput";
import { ProjectsUpdateInput } from "./ProjectsUpdateInput";
import { LinksFindManyArgs } from "../../links/base/LinksFindManyArgs";
import { Links } from "../../links/base/Links";
import { LinksWhereUniqueInput } from "../../links/base/LinksWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class ProjectsControllerBase {
  constructor(
    protected readonly service: ProjectsService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Projects })
  @nestAccessControl.UseRoles({
    resource: "Projects",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createProjects(
    @common.Body() data: ProjectsCreateInput
  ): Promise<Projects> {
    return await this.service.createProjects({
      data: {
        ...data,

        user: data.user
          ? {
              connect: data.user,
            }
          : undefined,
      },
      select: {
        createdAt: true,
        id: true,
        projectName: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Projects] })
  @ApiNestedQuery(ProjectsFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Projects",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async projectsItems(@common.Req() request: Request): Promise<Projects[]> {
    const args = plainToClass(ProjectsFindManyArgs, request.query);
    return this.service.projectsItems({
      ...args,
      select: {
        createdAt: true,
        id: true,
        projectName: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Projects })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Projects",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async projects(
    @common.Param() params: ProjectsWhereUniqueInput
  ): Promise<Projects | null> {
    const result = await this.service.projects({
      where: params,
      select: {
        createdAt: true,
        id: true,
        projectName: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Projects })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Projects",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateProjects(
    @common.Param() params: ProjectsWhereUniqueInput,
    @common.Body() data: ProjectsUpdateInput
  ): Promise<Projects | null> {
    try {
      return await this.service.updateProjects({
        where: params,
        data: {
          ...data,

          user: data.user
            ? {
                connect: data.user,
              }
            : undefined,
        },
        select: {
          createdAt: true,
          id: true,
          projectName: true,
          updatedAt: true,

          user: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Projects })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Projects",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteProjects(
    @common.Param() params: ProjectsWhereUniqueInput
  ): Promise<Projects | null> {
    try {
      return await this.service.deleteProjects({
        where: params,
        select: {
          createdAt: true,
          id: true,
          projectName: true,
          updatedAt: true,

          user: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/linksItems")
  @ApiNestedQuery(LinksFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Links",
    action: "read",
    possession: "any",
  })
  async findLinksItems(
    @common.Req() request: Request,
    @common.Param() params: ProjectsWhereUniqueInput
  ): Promise<Links[]> {
    const query = plainToClass(LinksFindManyArgs, request.query);
    const results = await this.service.findLinksItems(params.id, {
      ...query,
      select: {
        createdAt: true,
        id: true,
        originalUrl: true,

        project: {
          select: {
            id: true,
          },
        },

        shortenedUrl: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/linksItems")
  @nestAccessControl.UseRoles({
    resource: "Projects",
    action: "update",
    possession: "any",
  })
  async connectLinksItems(
    @common.Param() params: ProjectsWhereUniqueInput,
    @common.Body() body: LinksWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      linksItems: {
        connect: body,
      },
    };
    await this.service.updateProjects({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/linksItems")
  @nestAccessControl.UseRoles({
    resource: "Projects",
    action: "update",
    possession: "any",
  })
  async updateLinksItems(
    @common.Param() params: ProjectsWhereUniqueInput,
    @common.Body() body: LinksWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      linksItems: {
        set: body,
      },
    };
    await this.service.updateProjects({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/linksItems")
  @nestAccessControl.UseRoles({
    resource: "Projects",
    action: "update",
    possession: "any",
  })
  async disconnectLinksItems(
    @common.Param() params: ProjectsWhereUniqueInput,
    @common.Body() body: LinksWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      linksItems: {
        disconnect: body,
      },
    };
    await this.service.updateProjects({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Post("/projects")
  @swagger.ApiOkResponse({
    type: Projects,
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException,
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async CreateProject(
    @common.Body()
    body: ProjectsCreateInput
  ): Promise<Projects> {
    return this.service.CreateProject(body);
  }
}