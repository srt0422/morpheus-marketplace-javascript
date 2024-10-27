// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as UserAPI from './user';

export class User extends APIResource {
  /**
   * Retrieves a list of all active and closed sessions associated with a specific
   * user.
   */
  list(query: UserListParams, options?: Core.RequestOptions): Core.APIPromise<UserListResponse> {
    return this._client.get('/blockchain/sessions/user', { query, ...options });
  }
}

export type UserListResponse = Array<UserListResponse.UserListResponseItem>;

export namespace UserListResponse {
  export interface UserListResponseItem {
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

export interface UserListParams {
  /**
   * Ethereum address of the user.
   */
  user: string;

  /**
   * Limit for pagination.
   */
  limit?: number;

  /**
   * Offset for pagination.
   */
  offset?: string;
}

export namespace User {
  export import UserListResponse = UserAPI.UserListResponse;
  export import UserListParams = UserAPI.UserListParams;
}
