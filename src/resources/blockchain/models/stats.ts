// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as StatsAPI from './stats';

export class Stats extends APIResource {
  /**
   * Retrieves the statistics of a model.
   */
  retrieve(id: string, options?: Core.RequestOptions): Core.APIPromise<ModelStats> {
    return this._client.get(`/blockchain/models/${id}/stats`, options);
  }
}

export interface ModelStats {
  /**
   * Statistics of the model.
   */
  stats?: unknown;
}

export namespace Stats {
  export import ModelStats = StatsAPI.ModelStats;
}
