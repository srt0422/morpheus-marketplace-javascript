// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as SessionsAPI from './sessions';
import * as Shared from '../shared';

export class Sessions extends APIResource {
  /**
   * Initiate a proxy session
   */
  initiate(body: SessionInitiateParams, options?: Core.RequestOptions): Core.APIPromise<Shared.Session> {
    return this._client.post('/proxy/sessions/initiate', { body, ...options });
  }

  /**
   * Claim provider balance
   */
  providerClaim(
    id: string,
    body: SessionProviderClaimParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ClaimableBalance> {
    return this._client.post(`/proxy/sessions/${id}/providerClaim`, { body, ...options });
  }

  /**
   * Get provider claimable balance
   */
  providerClaimableBalance(id: string, options?: Core.RequestOptions): Core.APIPromise<ClaimableBalance> {
    return this._client.get(`/proxy/sessions/${id}/providerClaimableBalance`, options);
  }
}

export interface ClaimableBalance {
  /**
   * Amount claimable by the provider
   */
  balance: string;
}

export interface SessionInitiateParams {
  /**
   * Model ID to initiate session with
   */
  modelId: string;

  /**
   * Duration of the session
   */
  sessionDuration: string;
}

export interface SessionProviderClaimParams {
  /**
   * Claim identifier
   */
  claim: string;
}

export namespace Sessions {
  export import ClaimableBalance = SessionsAPI.ClaimableBalance;
  export import SessionInitiateParams = SessionsAPI.SessionInitiateParams;
  export import SessionProviderClaimParams = SessionsAPI.SessionProviderClaimParams;
}
