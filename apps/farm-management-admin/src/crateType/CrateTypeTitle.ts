import { CrateType as TCrateType } from "../api/crateType/CrateType";

export const CRATETYPE_TITLE_FIELD = "id";

export const CrateTypeTitle = (record: TCrateType): string => {
  return record.id?.toString() || String(record.id);
};
