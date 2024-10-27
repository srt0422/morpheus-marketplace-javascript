// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as BidsAPI from './bids';
import * as Shared from '../shared';

export class Bids extends APIResource {
  /**
   * Places a bid for a model on the blockchain.
   */
  create(body: BidCreateParams, options?: Core.RequestOptions): Core.APIPromise<BidCreateResponse> {
    return this._client.post('/blockchain/bids', { body, ...options });
  }

  /**
   * Retrieves bid details by its ID.
   */
  retrieve(id: string, options?: Core.RequestOptions): Core.APIPromise<BidRetrieveResponse> {
    return this._client.get(`/blockchain/bids/${id}`, options);
  }

  /**
   * Removes a bid from the blockchain by its ID.
   */
  delete(id: string, options?: Core.RequestOptions): Core.APIPromise<BidDeleteResponse> {
    return this._client.delete(`/blockchain/bids/${id}`, options);
  }

  /**
   * Opens a session based on a specific bid ID, linking the provider and model via a
   * bid.
   */
  session(
    id: string,
    body: BidSessionParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.Session> {
    return this._client.post(`/blockchain/bids/${id}/session`, { body, ...options });
  }
}

export interface BidCreateResponse {
  /**
   * Unique identifier for the bid.
   */
  bidID?: string;

  details?: BidCreateResponse.Details;
}

export namespace BidCreateResponse {
  export interface Details {
    bidID?: string;

    modelID?: string;

    pricePerSecond?: string;

    providerID?: string;

    status?: string;
  }
}

export interface BidRetrieveResponse {
  /**
   * Unique identifier for the bid.
   */
  bidID?: string;

  details?: BidRetrieveResponse.Details;
}

export namespace BidRetrieveResponse {
  export interface Details {
    bidID?: string;

    modelID?: string;

    pricePerSecond?: string;

    providerID?: string;

    status?: string;
  }
}

export interface BidDeleteResponse {
  /**
   * Transaction hash.
   */
  tx?: string;
}

export interface BidCreateParams {
  /**
   * ID of the model the bid is associated with.
   */
  modelID: string;

  /**
   * Price per second of model usage.
   */
  pricePerSecond: string;
}

export interface BidSessionParams {
  /**
   * The duration of the session in seconds.
   */
  sessionDuration: string;
}

export namespace Bids {
  export import BidCreateResponse = BidsAPI.BidCreateResponse;
  export import BidRetrieveResponse = BidsAPI.BidRetrieveResponse;
  export import BidDeleteResponse = BidsAPI.BidDeleteResponse;
  export import BidCreateParams = BidsAPI.BidCreateParams;
  export import BidSessionParams = BidsAPI.BidSessionParams;
}
