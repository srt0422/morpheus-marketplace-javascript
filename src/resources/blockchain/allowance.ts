// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as AllowanceAPI from './allowance';

export class AllowanceResource extends APIResource {
  /**
   * Fetches the MOR token allowance allocated for a specific spender.
   */
  retrieve(query: AllowanceRetrieveParams, options?: Core.RequestOptions): Core.APIPromise<Allowance> {
    return this._client.get('/blockchain/allowance', { query, ...options });
  }

  /**
   * Approves a specified MOR token allowance for a designated spender.
   */
  approve(
    params: AllowanceApproveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AllowanceApproveResponse> {
    const { amount, spender } = params;
    return this._client.post('/blockchain/allowance', { query: { amount, spender }, ...options });
  }
}

export interface Allowance {
  /**
   * MOR token allowance.
   */
  allowance?: string;
}

export interface AllowanceApproveResponse {
  /**
   * Transaction hash.
   */
  tx?: string;
}

export interface AllowanceRetrieveParams {
  /**
   * Ethereum address of the spender.
   */
  spender: string;
}

export interface AllowanceApproveParams {
  /**
   * Amount to be approved or transferred.
   */
  amount: string;

  /**
   * Ethereum address of the spender.
   */
  spender: string;
}

export namespace AllowanceResource {
  export import Allowance = AllowanceAPI.Allowance;
  export import AllowanceApproveResponse = AllowanceAPI.AllowanceApproveResponse;
  export import AllowanceRetrieveParams = AllowanceAPI.AllowanceRetrieveParams;
  export import AllowanceApproveParams = AllowanceAPI.AllowanceApproveParams;
}
