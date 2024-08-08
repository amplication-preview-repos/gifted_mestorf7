/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsString,
  MaxLength,
  IsOptional,
  ValidateNested,
} from "class-validator";
import { ProjectsWhereUniqueInput } from "../../projects/base/ProjectsWhereUniqueInput";
import { Type } from "class-transformer";
import { QrCodesUpdateManyWithoutLinksItemsInput } from "./QrCodesUpdateManyWithoutLinksItemsInput";

@InputType()
class LinksUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  originalUrl?: string | null;

  @ApiProperty({
    required: false,
    type: () => ProjectsWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ProjectsWhereUniqueInput)
  @IsOptional()
  @Field(() => ProjectsWhereUniqueInput, {
    nullable: true,
  })
  project?: ProjectsWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => QrCodesUpdateManyWithoutLinksItemsInput,
  })
  @ValidateNested()
  @Type(() => QrCodesUpdateManyWithoutLinksItemsInput)
  @IsOptional()
  @Field(() => QrCodesUpdateManyWithoutLinksItemsInput, {
    nullable: true,
  })
  qrCodesItems?: QrCodesUpdateManyWithoutLinksItemsInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  shortenedUrl?: string | null;
}

export { LinksUpdateInput as LinksUpdateInput };