// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import * as Core from '../../../../core';
import * as ActiveAPI from './active';
import * as Shared from '../../../shared';

export class Active extends APIResource {
  /**
   * List active bids for a provider
   */
  list(id: string, options?: Core.RequestOptions): Core.APIPromise<ActiveListResponse> {
    return this._client.get(`/blockchain/providers/${id}/bids/active`, options);
  }
}

export interface ActiveListResponse {
  /**
   * List of bids
   */
  bids: Array<Shared.Bid>;
}

export namespace Active {
  export import ActiveListResponse = ActiveAPI.ActiveListResponse;
}
