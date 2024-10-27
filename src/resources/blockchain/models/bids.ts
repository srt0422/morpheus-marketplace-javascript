// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import * as Core from '../../../core';
import * as BidsAPI from './bids';
import * as Shared from '../../shared';

export class Bids extends APIResource {
  /**
   * Retrieves a list of bids associated with a specific model.
   */
  list(id: string, query?: BidListParams, options?: Core.RequestOptions): Core.APIPromise<Shared.Bid>;
  list(id: string, options?: Core.RequestOptions): Core.APIPromise<Shared.Bid>;
  list(
    id: string,
    query: BidListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.Bid> {
    if (isRequestOptions(query)) {
      return this.list(id, {}, query);
    }
    return this._client.get(`/blockchain/models/${id}/bids`, { query, ...options });
  }

  /**
   * Fetches active bids associated with a specific model.
   */
  active(id: string, options?: Core.RequestOptions): Core.APIPromise<Shared.Bid> {
    return this._client.get(`/blockchain/models/${id}/bids/active`, options);
  }

  /**
   * Retrieves rated bids for a specified model.
   */
  rated(id: string, options?: Core.RequestOptions): Core.APIPromise<Shared.Bid> {
    return this._client.get(`/blockchain/models/${id}/bids/rated`, options);
  }
}

export interface BidListParams {
  /**
   * Limit for pagination.
   */
  limit?: number;

  /**
   * Offset for pagination.
   */
  offset?: string;
}

export namespace Bids {
  export import BidListParams = BidsAPI.BidListParams;
}
