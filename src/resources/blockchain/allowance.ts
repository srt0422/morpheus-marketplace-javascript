// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as AllowanceAPI from './allowance';

export class Allowance extends APIResource {
  /**
   * Retrieve allowance
   */
  retrieve(
    query: AllowanceRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AllowanceRetrieveResponse> {
    return this._client.get('/blockchain/allowance', { query, ...options });
  }
}

export interface AllowanceRetrieveResponse {
  /**
   * Current allowance amount
   */
  allowance: string;
}

export interface AllowanceRetrieveParams {
  /**
   * Spender Ethereum address
   */
  spender: string;
}

export namespace Allowance {
  export import AllowanceRetrieveResponse = AllowanceAPI.AllowanceRetrieveResponse;
  export import AllowanceRetrieveParams = AllowanceAPI.AllowanceRetrieveParams;
}
