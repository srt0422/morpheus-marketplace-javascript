// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as ModelsAPI from './models';
import * as Shared from '../../shared';
import * as BidsAPI from './bids';
import * as MinstakeAPI from './minstake';
import * as StatsAPI from './stats';

export class Models extends APIResource {
  bids: BidsAPI.Bids = new BidsAPI.Bids(this._client);
  minstake: MinstakeAPI.Minstake = new MinstakeAPI.Minstake(this._client);
  stats: StatsAPI.Stats = new StatsAPI.Stats(this._client);

  /**
   * Registers a new model on the blockchain.
   */
  create(body: ModelCreateParams, options?: Core.RequestOptions): Core.APIPromise<Model> {
    return this._client.post('/blockchain/models', { body, ...options });
  }

  /**
   * Fetches a list of all models available on the blockchain.
   */
  list(options?: Core.RequestOptions): Core.APIPromise<ModelListResponse> {
    return this._client.get('/blockchain/models', options);
  }

  /**
   * Removes a model from the blockchain by its ID.
   */
  delete(id: string, options?: Core.RequestOptions): Core.APIPromise<ModelDeleteResponse> {
    return this._client.delete(`/blockchain/models/${id}`, options);
  }

  /**
   * Checks if a model exists on the blockchain.
   */
  exists(id: string, options?: Core.RequestOptions): Core.APIPromise<ModelExistsResponse> {
    return this._client.get(`/blockchain/models/${id}/exists`, options);
  }

  /**
   * Resets the statistics of a model.
   */
  resetstats(id: string, options?: Core.RequestOptions): Core.APIPromise<ModelResetstatsResponse> {
    return this._client.post(`/blockchain/models/${id}/resetstats`, options);
  }

  /**
   * Opens a session with a specific model, associating it with a provider on the
   * blockchain.
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
  details?: Model.Details;

  /**
   * Unique identifier for the model.
   */
  modelID?: string;
}

export namespace Model {
  export interface Details {
    fee?: string;

    ipfsID?: string;

    modelID?: string;

    name?: string;

    stake?: string;

    tags?: Array<string>;
  }
}

export type ModelListResponse = Array<ModelListResponse.ModelListResponseItem>;

export namespace ModelListResponse {
  export interface ModelListResponseItem {
    fee?: string;

    ipfsID?: string;

    modelID?: string;

    name?: string;

    stake?: string;

    tags?: Array<string>;
  }
}

export interface ModelDeleteResponse {
  /**
   * Transaction hash.
   */
  tx?: string;
}

export interface ModelExistsResponse {
  /**
   * Indicates whether the model exists.
   */
  exists?: boolean;
}

export interface ModelResetstatsResponse {
  /**
   * Success message.
   */
  message?: string;
}

export interface ModelCreateParams {
  /**
   * Fee amount required for model usage.
   */
  fee: string;

  /**
   * IPFS hash storing the model’s data.
   */
  ipfsID: string;

  /**
   * Unique identifier for the model.
   */
  modelID: string;

  /**
   * Name of the model.
   */
  name: string;

  /**
   * Stake amount for the model.
   */
  stake: string;

  /**
   * Descriptive tags for categorizing the model.
   */
  tags?: Array<string>;
}

export interface ModelSessionParams {
  /**
   * The duration of the session in seconds.
   */
  sessionDuration: string;
}

export namespace Models {
  export import Model = ModelsAPI.Model;
  export import ModelListResponse = ModelsAPI.ModelListResponse;
  export import ModelDeleteResponse = ModelsAPI.ModelDeleteResponse;
  export import ModelExistsResponse = ModelsAPI.ModelExistsResponse;
  export import ModelResetstatsResponse = ModelsAPI.ModelResetstatsResponse;
  export import ModelCreateParams = ModelsAPI.ModelCreateParams;
  export import ModelSessionParams = ModelsAPI.ModelSessionParams;
  export import Bids = BidsAPI.Bids;
  export import BidListParams = BidsAPI.BidListParams;
  export import Minstake = MinstakeAPI.Minstake;
  export import MinStake = MinstakeAPI.MinStake;
  export import MinstakeSetResponse = MinstakeAPI.MinstakeSetResponse;
  export import MinstakeSetParams = MinstakeAPI.MinstakeSetParams;
  export import Stats = StatsAPI.Stats;
  export import ModelStats = StatsAPI.ModelStats;
}
