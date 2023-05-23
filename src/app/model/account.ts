import {Transaction} from "./transaction";

export class Account {
  id: number;
  accountNumber: string;
  balance: bigint;
  transactions: Transaction[];
}
