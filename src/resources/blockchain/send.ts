// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as SendAPI from './send';

export class Send extends APIResource {
  /**
   * Transfers ETH to a specified address.
   */
  eth(body: SendEthParams, options?: Core.RequestOptions): Core.APIPromise<SendEthResponse> {
    return this._client.post('/blockchain/send/eth', { body, ...options });
  }

  /**
   * Transfers MOR tokens to a specified address.
   */
  mor(body: SendMorParams, options?: Core.RequestOptions): Core.APIPromise<SendMorResponse> {
    return this._client.post('/blockchain/send/mor', { body, ...options });
  }
}

export interface SendEthResponse {
  /**
   * Transaction hash.
   */
  tx?: string;
}

export interface SendMorResponse {
  /**
   * Transaction hash.
   */
  tx?: string;
}

export interface SendEthParams {
  /**
   * Amount of ETH to be transferred.
   */
  amount: string;

  /**
   * Recipient ETH address.
   */
  to: string;
}

export interface SendMorParams {
  /**
   * Amount of MOR tokens to be transferred.
   */
  amount: string;

  /**
   * Recipient ETH address.
   */
  to: string;
}

export namespace Send {
  export import SendEthResponse = SendAPI.SendEthResponse;
  export import SendMorResponse = SendAPI.SendMorResponse;
  export import SendEthParams = SendAPI.SendEthParams;
  export import SendMorParams = SendAPI.SendMorParams;
}
