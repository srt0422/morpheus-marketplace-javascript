// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as MinstakeAPI from './minstake';

export class Minstake extends APIResource {
  /**
   * Retrieves the current minimum stake required for models.
   */
  retrieve(options?: Core.RequestOptions): Core.APIPromise<MinStake> {
    return this._client.get('/blockchain/models/minstake', options);
  }

  /**
   * Sets the minimum stake required for models.
   */
  set(body: MinstakeSetParams, options?: Core.RequestOptions): Core.APIPromise<MinstakeSetResponse> {
    return this._client.post('/blockchain/models/minstake', { body, ...options });
  }
}

export interface MinStake {
  /**
   * Current minimum stake required for models.
   */
  minStake?: string;
}

export interface MinstakeSetResponse {
  /**
   * Success message.
   */
  message?: string;
}

export interface MinstakeSetParams {
  /**
   * Minimum stake amount.
   */
  minStake: string;
}

export namespace Minstake {
  export import MinStake = MinstakeAPI.MinStake;
  export import MinstakeSetResponse = MinstakeAPI.MinstakeSetResponse;
  export import MinstakeSetParams = MinstakeAPI.MinstakeSetParams;
}
