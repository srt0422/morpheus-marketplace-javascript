// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as TransactionsAPI from './transactions';

export class Transactions extends APIResource {
  /**
   * List transactions
   */
  list(options?: Core.RequestOptions): Core.APIPromise<TransactionList> {
    return this._client.get('/blockchain/transactions', options);
  }
}

export interface TransactionList {
  /**
   * List of transactions
   */
  transactions: Array<TransactionList.Transaction>;
}

export namespace TransactionList {
  export interface Transaction {
    /**
     * Transaction ID
     */
    id: string;

    /**
     * Amount involved in the transaction
     */
    amount: string;

    /**
     * Type of transaction
     */
    type: string;
  }
}

export namespace Transactions {
  export import TransactionList = TransactionsAPI.TransactionList;
}
