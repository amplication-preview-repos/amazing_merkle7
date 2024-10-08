import { CommodityWhereInput } from "./CommodityWhereInput";
import { CommodityOrderByInput } from "./CommodityOrderByInput";

export type CommodityFindManyArgs = {
  where?: CommodityWhereInput;
  orderBy?: Array<CommodityOrderByInput>;
  skip?: number;
  take?: number;
};
