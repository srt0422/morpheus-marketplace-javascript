// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import * as Core from '../../../core';
import * as BidsAPI from './bids';
import * as Shared from '../../shared';

export class Bids extends APIResource {
  /**
   * List bids for a model
   */
  list(id: string, query?: BidListParams, options?: Core.RequestOptions): Core.APIPromise<BidListResponse>;
  list(id: string, options?: Core.RequestOptions): Core.APIPromise<BidListResponse>;
  list(
    id: string,
    query: BidListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<BidListResponse> {
    if (isRequestOptions(query)) {
      return this.list(id, {}, query);
    }
    return this._client.get(`/blockchain/models/${id}/bids`, { query, ...options });
  }

  /**
   * List active bids for a model
   */
  active(id: string, options?: Core.RequestOptions): Core.APIPromise<BidActiveResponse> {
    return this._client.get(`/blockchain/models/${id}/bids/active`, options);
  }

  /**
   * List rated bids for a model
   */
  rated(id: string, options?: Core.RequestOptions): Core.APIPromise<BidRatedResponse> {
    return this._client.get(`/blockchain/models/${id}/bids/rated`, options);
  }
}

export interface BidListResponse {
  /**
   * List of bids
   */
  bids: Array<Shared.Bid>;
}

export interface BidActiveResponse {
  /**
   * List of bids
   */
  bids: Array<Shared.Bid>;
}

export interface BidRatedResponse {
  /**
   * List of bids
   */
  bids: Array<Shared.Bid>;
}

export interface BidListParams {
  /**
   * Maximum number of results to return
   */
  limit?: number;

  /**
   * Number of results to skip
   */
  offset?: number;
}

export namespace Bids {
  export import BidListResponse = BidsAPI.BidListResponse;
  export import BidActiveResponse = BidsAPI.BidActiveResponse;
  export import BidRatedResponse = BidsAPI.BidRatedResponse;
  export import BidListParams = BidsAPI.BidListParams;
}
