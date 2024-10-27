// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as SessionsAPI from './sessions';
import * as Shared from '../shared';

export class Sessions extends APIResource {
  /**
   * Initializes a new session with the provider for usage.
   */
  initiate(body: SessionInitiateParams, options?: Core.RequestOptions): Core.APIPromise<Shared.Session> {
    return this._client.post('/proxy/sessions/initiate', { body, ...options });
  }

  /**
   * Allows a provider to claim their balance for a specific session.
   */
  providerClaim(
    id: string,
    body: SessionProviderClaimParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SessionProviderClaimResponse> {
    return this._client.post(`/proxy/sessions/${id}/providerClaim`, { body, ...options });
  }

  /**
   * Retrieves the claimable balance for a provider from a session.
   */
  providerClaimableBalance(
    id: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SessionProviderClaimableBalanceResponse> {
    return this._client.get(`/proxy/sessions/${id}/providerClaimableBalance`, options);
  }
}

export interface SessionProviderClaimResponse {
  /**
   * Transaction hash.
   */
  tx?: string;
}

export interface SessionProviderClaimableBalanceResponse {
  /**
   * Claimable balance for the provider.
   */
  claimableBalance?: string;
}

export interface SessionInitiateParams {
  /**
   * Model ID for the session.
   */
  modelId: string;

  /**
   * Duration for which the session will remain active.
   */
  sessionDuration: string;
}

export interface SessionProviderClaimParams {
  /**
   * Amount to claim.
   */
  claim: string;
}

export namespace Sessions {
  export import SessionProviderClaimResponse = SessionsAPI.SessionProviderClaimResponse;
  export import SessionProviderClaimableBalanceResponse = SessionsAPI.SessionProviderClaimableBalanceResponse;
  export import SessionInitiateParams = SessionsAPI.SessionInitiateParams;
  export import SessionProviderClaimParams = SessionsAPI.SessionProviderClaimParams;
}
