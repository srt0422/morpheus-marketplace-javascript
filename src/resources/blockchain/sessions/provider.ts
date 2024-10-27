// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as ProviderAPI from './provider';

export class Provider extends APIResource {
  /**
   * Retrieves a list of sessions for a specified provider.
   */
  list(query: ProviderListParams, options?: Core.RequestOptions): Core.APIPromise<ProviderListResponse> {
    return this._client.get('/blockchain/sessions/provider', { query, ...options });
  }
}

export type ProviderListResponse = Array<ProviderListResponse.ProviderListResponseItem>;

export namespace ProviderListResponse {
  export interface ProviderListResponseItem {
    /**
     * Closure timestamp.
     */
    closedAt?: string;

    /**
     * Creation timestamp.
     */
    createdAt?: string;

    /**
     * Model associated with the session.
     */
    modelID?: string;

    /**
     * Provider associated with the session.
     */
    providerID?: string;

    /**
     * Unique identifier for the session.
     */
    sessionID?: string;

    /**
     * Status of the session (active, closed, etc.).
     */
    status?: string;
  }
}

export interface ProviderListParams {
  /**
   * Ethereum address of the provider.
   */
  provider: string;

  /**
   * Limit for pagination.
   */
  limit?: number;

  /**
   * Offset for pagination.
   */
  offset?: string;
}

export namespace Provider {
  export import ProviderListResponse = ProviderAPI.ProviderListResponse;
  export import ProviderListParams = ProviderAPI.ProviderListParams;
}
