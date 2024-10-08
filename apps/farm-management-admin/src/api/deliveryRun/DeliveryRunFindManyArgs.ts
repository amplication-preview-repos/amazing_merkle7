import { DeliveryRunWhereInput } from "./DeliveryRunWhereInput";
import { DeliveryRunOrderByInput } from "./DeliveryRunOrderByInput";

export type DeliveryRunFindManyArgs = {
  where?: DeliveryRunWhereInput;
  orderBy?: Array<DeliveryRunOrderByInput>;
  skip?: number;
  take?: number;
};
