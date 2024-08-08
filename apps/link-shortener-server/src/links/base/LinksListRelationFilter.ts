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
import { LinksWhereInput } from "./LinksWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class LinksListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => LinksWhereInput,
  })
  @ValidateNested()
  @Type(() => LinksWhereInput)
  @IsOptional()
  @Field(() => LinksWhereInput, {
    nullable: true,
  })
  every?: LinksWhereInput;

  @ApiProperty({
    required: false,
    type: () => LinksWhereInput,
  })
  @ValidateNested()
  @Type(() => LinksWhereInput)
  @IsOptional()
  @Field(() => LinksWhereInput, {
    nullable: true,
  })
  some?: LinksWhereInput;

  @ApiProperty({
    required: false,
    type: () => LinksWhereInput,
  })
  @ValidateNested()
  @Type(() => LinksWhereInput)
  @IsOptional()
  @Field(() => LinksWhereInput, {
    nullable: true,
  })
  none?: LinksWhereInput;
}
export { LinksListRelationFilter as LinksListRelationFilter };