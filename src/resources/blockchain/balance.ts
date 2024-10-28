// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as BlockchainAPI from './blockchain';

export class Balance extends APIResource {
  /**
   * Retrieve balance
   */
  retrieve(options?: Core.RequestOptions): Core.APIPromise<BlockchainAPI.Balance> {
    return this._client.get('/blockchain/balance', options);
  }
}
