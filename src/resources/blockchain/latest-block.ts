// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as LatestBlockAPI from './latest-block';

export class LatestBlockResource extends APIResource {
  /**
   * Get latest block number
   */
  retrieve(options?: Core.RequestOptions): Core.APIPromise<LatestBlock> {
    return this._client.get('/blockchain/latestBlock', options);
  }
}

export interface LatestBlock {
  /**
   * Latest block number on the blockchain
   */
  blockNumber: string;
}

export namespace LatestBlockResource {
  export import LatestBlock = LatestBlockAPI.LatestBlock;
}
