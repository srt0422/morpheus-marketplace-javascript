// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as TransactionsAPI from './transactions';

export class Transactions extends APIResource {
  /**
   * Retrieves ETH and MOR token transactions for the user.
   */
  list(query?: TransactionListParams, options?: Core.RequestOptions): Core.APIPromise<TransactionList>;
  list(options?: Core.RequestOptions): Core.APIPromise<TransactionList>;
  list(
    query: TransactionListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<TransactionList> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/blockchain/transactions', { query, ...options });
  }
}

export type TransactionList = Array<TransactionList.TransactionListItem>;

export namespace TransactionList {
  export interface TransactionListItem {
    amount?: string;

    from?: string;

    timestamp?: string;

    to?: string;

    txHash?: string;
  }
}

export interface TransactionListParams {
  /**
   * Limit for pagination.
   */
  limit?: number;

  /**
   * Page number for pagination.
   */
  page?: number;
}

export namespace Transactions {
  export import TransactionList = TransactionsAPI.TransactionList;
  export import TransactionListParams = TransactionsAPI.TransactionListParams;
}
