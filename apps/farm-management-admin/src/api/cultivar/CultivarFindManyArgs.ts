import { CultivarWhereInput } from "./CultivarWhereInput";
import { CultivarOrderByInput } from "./CultivarOrderByInput";

export type CultivarFindManyArgs = {
  where?: CultivarWhereInput;
  orderBy?: Array<CultivarOrderByInput>;
  skip?: number;
  take?: number;
};
