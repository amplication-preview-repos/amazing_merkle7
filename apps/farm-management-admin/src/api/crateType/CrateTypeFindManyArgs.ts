import { CrateTypeWhereInput } from "./CrateTypeWhereInput";
import { CrateTypeOrderByInput } from "./CrateTypeOrderByInput";

export type CrateTypeFindManyArgs = {
  where?: CrateTypeWhereInput;
  orderBy?: Array<CrateTypeOrderByInput>;
  skip?: number;
  take?: number;
};
