// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import { isRequestOptions } from '../../../../core';
import * as Core from '../../../../core';
import * as BidsAPI from './bids';
import * as Shared from '../../../shared';
import * as ActiveAPI from './active';

export class Bids extends APIResource {
  active: ActiveAPI.Active = new ActiveAPI.Active(this._client);

  /**
   * Retrieves bids placed by a specific provider.
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
    return this._client.get(`/blockchain/providers/${id}/bids`, { query, ...options });
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
  export import Active = ActiveAPI.Active;
}
