/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { QrCodesWhereUniqueInput } from "./QrCodesWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { QrCodesUpdateInput } from "./QrCodesUpdateInput";

@ArgsType()
class UpdateQrCodesArgs {
  @ApiProperty({
    required: true,
    type: () => QrCodesWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => QrCodesWhereUniqueInput)
  @Field(() => QrCodesWhereUniqueInput, { nullable: false })
  where!: QrCodesWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => QrCodesUpdateInput,
  })
  @ValidateNested()
  @Type(() => QrCodesUpdateInput)
  @Field(() => QrCodesUpdateInput, { nullable: false })
  data!: QrCodesUpdateInput;
}

export { UpdateQrCodesArgs as UpdateQrCodesArgs };
