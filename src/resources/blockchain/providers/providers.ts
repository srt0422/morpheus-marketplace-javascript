// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as ProvidersAPI from './providers';
import * as BidsAPI from './bids/bids';

export class Providers extends APIResource {
  bids: BidsAPI.Bids = new BidsAPI.Bids(this._client);

  /**
   * Create a new provider
   */
  create(body: ProviderCreateParams, options?: Core.RequestOptions): Core.APIPromise<Provider> {
    return this._client.post('/blockchain/providers', { body, ...options });
  }

  /**
   * List providers
   */
  list(options?: Core.RequestOptions): Core.APIPromise<ProviderListResponse> {
    return this._client.get('/blockchain/providers', options);
  }

  /**
   * Delete a provider
   */
  delete(id: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.delete(`/blockchain/providers/${id}`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export interface Provider {
  /**
   * Unique identifier of the provider
   */
  id: string;

  /**
   * Endpoint URL of the provider
   */
  endpoint: string;

  /**
   * Amount staked by the provider
   */
  stake: string;
}

export type ProviderListResponse = Array<Provider>;

export interface ProviderCreateParams {
  /**
   * Endpoint URL of the provider
   */
  endpoint: string;

  /**
   * Amount to stake for the provider
   */
  stake: string;
}

export namespace Providers {
  export import Provider = ProvidersAPI.Provider;
  export import ProviderListResponse = ProvidersAPI.ProviderListResponse;
  export import ProviderCreateParams = ProvidersAPI.ProviderCreateParams;
  export import Bids = BidsAPI.Bids;
  export import BidListResponse = BidsAPI.BidListResponse;
  export import BidListParams = BidsAPI.BidListParams;
}
