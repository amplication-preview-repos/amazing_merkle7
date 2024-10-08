import { Cultivar as TCultivar } from "../api/cultivar/Cultivar";

export const CULTIVAR_TITLE_FIELD = "id";

export const CultivarTitle = (record: TCultivar): string => {
  return record.id?.toString() || String(record.id);
};
