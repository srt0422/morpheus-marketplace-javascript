// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as BlockchainSessionsAPI from './blockchain-sessions';
import * as Shared from './shared';

export class BlockchainSessions extends APIResource {
  /**
   * Create a new session
   */
  create(
    body: BlockchainSessionCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.Session> {
    return this._client.post('/blockchain/sessions', { body, ...options });
  }

  /**
   * Retrieve a session
   */
  retrieve(id: string, options?: Core.RequestOptions): Core.APIPromise<Shared.Session> {
    return this._client.get(`/blockchain/sessions/${id}`, options);
  }

  /**
   * Get session budget
   */
  budget(options?: Core.RequestOptions): Core.APIPromise<Shared.Budget> {
    return this._client.get('/blockchain/sessions/budget', options);
  }

  /**
   * Close a session
   */
  close(id: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post(`/blockchain/sessions/${id}/close`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * List provider sessions
   */
  provider(
    query: BlockchainSessionProviderParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.SessionList> {
    return this._client.get('/blockchain/sessions/provider', { query, ...options });
  }

  /**
   * List user sessions
   */
  user(
    query: BlockchainSessionUserParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.SessionList> {
    return this._client.get('/blockchain/sessions/user', { query, ...options });
  }
}

export interface BlockchainSessionCreateParams {
  /**
   * Approval identifier
   */
  approval: string;

  /**
   * Signature for the approval
   */
  approvalSig: string;

  /**
   * Stake amount for the session
   */
  stake: string;
}

export interface BlockchainSessionProviderParams {
  /**
   * Provider identifier
   */
  provider: string;

  /**
   * Maximum number of results to return
   */
  limit?: number;

  /**
   * Number of results to skip
   */
  offset?: number;
}

export interface BlockchainSessionUserParams {
  /**
   * User identifier
   */
  user: string;

  /**
   * Maximum number of results to return
   */
  limit?: number;

  /**
   * Number of results to skip
   */
  offset?: number;
}

export namespace BlockchainSessions {
  export import BlockchainSessionCreateParams = BlockchainSessionsAPI.BlockchainSessionCreateParams;
  export import BlockchainSessionProviderParams = BlockchainSessionsAPI.BlockchainSessionProviderParams;
  export import BlockchainSessionUserParams = BlockchainSessionsAPI.BlockchainSessionUserParams;
}
