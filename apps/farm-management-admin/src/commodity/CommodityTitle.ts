import { Commodity as TCommodity } from "../api/commodity/Commodity";

export const COMMODITY_TITLE_FIELD = "id";

export const CommodityTitle = (record: TCommodity): string => {
  return record.id?.toString() || String(record.id);
};
