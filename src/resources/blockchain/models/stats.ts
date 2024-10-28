// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as StatsAPI from './stats';

export class Stats extends APIResource {
  /**
   * Retrieve statistics for a model
   */
  list(id: string, options?: Core.RequestOptions): Core.APIPromise<ModelStats> {
    return this._client.get(`/blockchain/models/${id}/stats`, options);
  }
}

export interface ModelStats {
  /**
   * ID of the model
   */
  modelID: string;

  /**
   * Statistics related to the model
   */
  stats: Record<string, unknown>;
}

export namespace Stats {
  export import ModelStats = StatsAPI.ModelStats;
}
