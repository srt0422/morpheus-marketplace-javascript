// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as BudgetAPI from './budget';

export class Budget extends APIResource {
  /**
   * Fetches the total budget for sessions on the current day.
   */
  list(options?: Core.RequestOptions): Core.APIPromise<BudgetListResponse> {
    return this._client.get('/blockchain/sessions/budget', options);
  }
}

export interface BudgetListResponse {
  /**
   * Total budget for sessions on the current day.
   */
  budget?: string;
}

export namespace Budget {
  export import BudgetListResponse = BudgetAPI.BudgetListResponse;
}
