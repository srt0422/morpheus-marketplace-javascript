// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as SupplyAPI from './supply';

export class Supply extends APIResource {
  /**
   * Fetches the total supply of MOR tokens.
   */
  retrieve(options?: Core.RequestOptions): Core.APIPromise<TokenSupply> {
    return this._client.get('/blockchain/token/supply', options);
  }
}

export interface TokenSupply {
  /**
   * Total supply of MOR tokens.
   */
  supply?: string;
}

export namespace Supply {
  export import TokenSupply = SupplyAPI.TokenSupply;
}
