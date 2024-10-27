// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as BalanceAPI from './balance';

export class BalanceResource extends APIResource {
  /**
   * Retrieves the ETH and MOR token balances of the user.
   */
  retrieve(options?: Core.RequestOptions): Core.APIPromise<Balance> {
    return this._client.get('/blockchain/balance', options);
  }
}

export interface Balance {
  /**
   * ETH balance.
   */
  ETH?: string;

  /**
   * MOR token balance.
   */
  MOR?: string;
}

export namespace BalanceResource {
  export import Balance = BalanceAPI.Balance;
}
