// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as BlockchainBidsAPI from './blockchain-bids';
import * as Shared from './shared';

export class BlockchainBids extends APIResource {
  /**
   * Create a new bid
   */
  create(body: BlockchainBidCreateParams, options?: Core.RequestOptions): Core.APIPromise<Shared.Bid> {
    return this._client.post('/blockchain/bids', { body, ...options });
  }

  /**
   * Retrieve a bid
   */
  retrieve(id: string, options?: Core.RequestOptions): Core.APIPromise<Shared.Bid> {
    return this._client.get(`/blockchain/bids/${id}`, options);
  }

  /**
   * Delete a bid
   */
  delete(id: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.delete(`/blockchain/bids/${id}`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Start a session for a bid
   */
  session(
    id: string,
    body: BlockchainBidSessionParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.Session> {
    return this._client.post(`/blockchain/bids/${id}/session`, { body, ...options });
  }
}

export interface BlockchainBidCreateParams {
  /**
   * ID of the model to bid on
   */
  modelID: string;

  /**
   * Bid price per second
   */
  pricePerSecond: string;
}

export interface BlockchainBidSessionParams {
  /**
   * Duration of the session
   */
  sessionDuration: string;
}

export namespace BlockchainBids {
  export import BlockchainBidCreateParams = BlockchainBidsAPI.BlockchainBidCreateParams;
  export import BlockchainBidSessionParams = BlockchainBidsAPI.BlockchainBidSessionParams;
}
