// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as ModelsAPI from './models';
import * as Shared from '../../shared';
import * as BidsAPI from './bids';
import * as StatsAPI from './stats';

export class Models extends APIResource {
  bids: BidsAPI.Bids = new BidsAPI.Bids(this._client);
  stats: StatsAPI.Stats = new StatsAPI.Stats(this._client);

  /**
   * Create a new model
   */
  create(body: ModelCreateParams, options?: Core.RequestOptions): Core.APIPromise<Model> {
    return this._client.post('/blockchain/models', { body, ...options });
  }

  /**
   * List all available models
   */
  list(options?: Core.RequestOptions): Core.APIPromise<ModelListResponse> {
    return this._client.get('/blockchain/models', options);
  }

  /**
   * Delete a model
   */
  delete(id: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.delete(`/blockchain/models/${id}`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Start a session for a model
   */
  session(
    id: string,
    body: ModelSessionParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.Session> {
    return this._client.post(`/blockchain/models/${id}/session`, { body, ...options });
  }
}

export interface Model {
  /**
   * Unique identifier of the model
   */
  id: string;

  /**
   * Fee for using the model
   */
  fee: string;

  /**
   * IPFS ID where the model is stored
   */
  ipfsID: string;

  /**
   * Model ID provided by the user
   */
  modelID: string;

  /**
   * Name of the model
   */
  name: string;

  /**
   * Amount staked for the model
   */
  stake: string;

  /**
   * Tags associated with the model
   */
  tags?: Array<string>;
}

export type ModelListResponse = Array<Model>;

export interface ModelCreateParams {
  /**
   * Fee for using the model
   */
  fee: string;

  /**
   * IPFS ID where the model is stored
   */
  ipfsID: string;

  /**
   * Model ID provided by the user
   */
  modelID: string;

  /**
   * Name of the model
   */
  name: string;

  /**
   * Amount to stake for the model
   */
  stake: string;

  /**
   * Tags associated with the model
   */
  tags?: Array<string>;
}

export interface ModelSessionParams {
  /**
   * Duration of the session
   */
  sessionDuration: string;
}

export namespace Models {
  export import Model = ModelsAPI.Model;
  export import ModelListResponse = ModelsAPI.ModelListResponse;
  export import ModelCreateParams = ModelsAPI.ModelCreateParams;
  export import ModelSessionParams = ModelsAPI.ModelSessionParams;
  export import Bids = BidsAPI.Bids;
  export import BidListResponse = BidsAPI.BidListResponse;
  export import BidActiveResponse = BidsAPI.BidActiveResponse;
  export import BidRatedResponse = BidsAPI.BidRatedResponse;
  export import BidListParams = BidsAPI.BidListParams;
  export import Stats = StatsAPI.Stats;
  export import ModelStats = StatsAPI.ModelStats;
}
