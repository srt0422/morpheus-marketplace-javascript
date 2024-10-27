// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import * as Core from '../../../../core';
import * as Shared from '../../../shared';

export class Active extends APIResource {
  /**
   * Retrieves active bids associated with a specific provider.
   */
  list(id: string, options?: Core.RequestOptions): Core.APIPromise<Shared.Bid> {
    return this._client.get(`/blockchain/providers/${id}/bids/active`, options);
  }
}
