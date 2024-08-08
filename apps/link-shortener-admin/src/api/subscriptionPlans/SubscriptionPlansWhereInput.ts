import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type SubscriptionPlansWhereInput = {
  id?: StringFilter;
  linksLimit?: IntNullableFilter;
  name?: StringNullableFilter;
  price?: FloatNullableFilter;
  projectsLimit?: IntNullableFilter;
};
