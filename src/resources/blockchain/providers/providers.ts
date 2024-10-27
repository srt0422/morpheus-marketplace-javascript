// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as ProvidersAPI from './providers';
import * as BidsAPI from './bids/bids';

export class Providers extends APIResource {
  bids: BidsAPI.Bids = new BidsAPI.Bids(this._client);

  /**
   * Registers or updates a provider.
   */
  create(body: ProviderCreateParams, options?: Core.RequestOptions): Core.APIPromise<Provider> {
    return this._client.post('/blockchain/providers', { body, ...options });
  }

  /**
   * Retrieves a list of all registered providers.
   */
  list(options?: Core.RequestOptions): Core.APIPromise<ProviderListResponse> {
    return this._client.get('/blockchain/providers', options);
  }

  /**
   * Removes a provider’s registration from the blockchain.
   */
  delete(id: string, options?: Core.RequestOptions): Core.APIPromise<ProviderDeleteResponse> {
    return this._client.delete(`/blockchain/providers/${id}`, options);
  }
}

export interface Provider {
  details?: Provider.Details;

  /**
   * Unique identifier for the provider.
   */
  providerID?: string;
}

export namespace Provider {
  export interface Details {
    endpoint?: string;

    providerID?: string;

    stake?: string;
  }
}

export type ProviderListResponse = Array<ProviderListResponse.ProviderListResponseItem>;

export namespace ProviderListResponse {
  export interface ProviderListResponseItem {
    endpoint?: string;

    providerID?: string;

    stake?: string;
  }
}

export interface ProviderDeleteResponse {
  /**
   * Transaction hash.
   */
  tx?: string;
}

export interface ProviderCreateParams {
  /**
   * Endpoint URL of the provider.
   */
  endpoint: string;

  /**
   * Amount of tokens staked by the provider.
   */
  stake: string;
}

export namespace Providers {
  export import Provider = ProvidersAPI.Provider;
  export import ProviderListResponse = ProvidersAPI.ProviderListResponse;
  export import ProviderDeleteResponse = ProvidersAPI.ProviderDeleteResponse;
  export import ProviderCreateParams = ProvidersAPI.ProviderCreateParams;
  export import Bids = BidsAPI.Bids;
  export import BidListParams = BidsAPI.BidListParams;
}
