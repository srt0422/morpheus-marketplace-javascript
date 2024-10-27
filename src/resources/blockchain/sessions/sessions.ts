// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as SessionsAPI from './sessions';
import * as Shared from '../../shared';
import * as BudgetAPI from './budget';
import * as ProviderAPI from './provider';
import * as UserAPI from './user';

export class Sessions extends APIResource {
  user: UserAPI.User = new UserAPI.User(this._client);
  provider: ProviderAPI.Provider = new ProviderAPI.Provider(this._client);
  budget: BudgetAPI.Budget = new BudgetAPI.Budget(this._client);

  /**
   * Opens a session with a provider, including staking requirements.
   */
  create(body: SessionCreateParams, options?: Core.RequestOptions): Core.APIPromise<Shared.Session> {
    return this._client.post('/blockchain/sessions', { body, ...options });
  }

  /**
   * Fetches details of a specific session by its ID.
   */
  retrieve(id: string, options?: Core.RequestOptions): Core.APIPromise<SessionRetrieveResponse> {
    return this._client.get(`/blockchain/sessions/${id}`, options);
  }

  /**
   * Closes an active session using its unique session ID.
   */
  close(id: string, options?: Core.RequestOptions): Core.APIPromise<SessionCloseResponse> {
    return this._client.post(`/blockchain/sessions/${id}/close`, options);
  }
}

export interface SessionRetrieveResponse {
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

export interface SessionCloseResponse {
  /**
   * Transaction hash confirming the closure.
   */
  tx?: string;
}

export interface SessionCreateParams {
  /**
   * Approval data for session initiation.
   */
  approval: string;

  /**
   * Digital signature associated with the approval.
   */
  approvalSig: string;

  /**
   * Amount of tokens staked for the session.
   */
  stake: string;
}

export namespace Sessions {
  export import SessionRetrieveResponse = SessionsAPI.SessionRetrieveResponse;
  export import SessionCloseResponse = SessionsAPI.SessionCloseResponse;
  export import SessionCreateParams = SessionsAPI.SessionCreateParams;
  export import User = UserAPI.User;
  export import UserListResponse = UserAPI.UserListResponse;
  export import UserListParams = UserAPI.UserListParams;
  export import Provider = ProviderAPI.Provider;
  export import ProviderListResponse = ProviderAPI.ProviderListResponse;
  export import ProviderListParams = ProviderAPI.ProviderListParams;
  export import Budget = BudgetAPI.Budget;
  export import BudgetListResponse = BudgetAPI.BudgetListResponse;
}
