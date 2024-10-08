import { DeliveryRun as TDeliveryRun } from "../api/deliveryRun/DeliveryRun";

export const DELIVERYRUN_TITLE_FIELD = "id";

export const DeliveryRunTitle = (record: TDeliveryRun): string => {
  return record.id?.toString() || String(record.id);
};
