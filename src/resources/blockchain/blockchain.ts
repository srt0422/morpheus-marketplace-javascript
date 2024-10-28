// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import { Balance } from './balance';
import * as BlockchainAPI from './blockchain';
import * as AllowanceAPI from './allowance';
import * as BalanceAPI from './balance';
import * as BidsAPI from './bids';
import * as LatestBlockAPI from './latest-block';
import * as SessionsAPI from './sessions';
import * as TransactionsAPI from './transactions';
import * as ModelsAPI from './models/models';
import * as ProvidersAPI from './providers/providers';
import * as TokenAPI from './token/token';

export class Blockchain extends APIResource {
  models: ModelsAPI.Models = new ModelsAPI.Models(this._client);
  providers: ProvidersAPI.Providers = new ProvidersAPI.Providers(this._client);
  balance: BalanceAPI.Balance = new BalanceAPI.Balance(this._client);
  allowance: AllowanceAPI.Allowance = new AllowanceAPI.Allowance(this._client);
  latestBlock: LatestBlockAPI.LatestBlockResource = new LatestBlockAPI.LatestBlockResource(this._client);
  token: TokenAPI.Token = new TokenAPI.Token(this._client);
  transactions: TransactionsAPI.Transactions = new TransactionsAPI.Transactions(this._client);
  bids: BidsAPI.Bids = new BidsAPI.Bids(this._client);
  sessions: SessionsAPI.Sessions = new SessionsAPI.Sessions(this._client);

  /**
   * Approve allowance
   */
  approve(body: BlockchainApproveParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post('/blockchain/approve', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Send ETH to a specified address
   */
  ethSend(body: BlockchainEthSendParams, options?: Core.RequestOptions): Core.APIPromise<Balance> {
    return this._client.post('/blockchain/send/eth', { body, ...options });
  }

  /**
   * Send MOR to a specified address
   */
  morSend(body: BlockchainMorSendParams, options?: Core.RequestOptions): Core.APIPromise<Balance> {
    return this._client.post('/blockchain/send/mor', { body, ...options });
  }
}

export interface Balance {
  /**
   * Current balance after the transaction
   */
  balance: string;
}

export interface BlockchainApproveParams {
  /**
   * Amount to approve
   */
  amount: string;

  /**
   * Spender Ethereum address
   */
  spender: string;
}

export interface BlockchainEthSendParams {
  /**
   * Amount of ETH to send
   */
  amount: string;

  /**
   * Ethereum address to send ETH to
   */
  to: string;
}

export interface BlockchainMorSendParams {
  /**
   * Amount of MOR to send
   */
  amount: string;

  /**
   * Ethereum address to send MOR to
   */
  to: string;
}

export namespace Blockchain {
  export import Balance = BlockchainAPI.Balance;
  export import BlockchainApproveParams = BlockchainAPI.BlockchainApproveParams;
  export import BlockchainEthSendParams = BlockchainAPI.BlockchainEthSendParams;
  export import BlockchainMorSendParams = BlockchainAPI.BlockchainMorSendParams;
  export import Models = ModelsAPI.Models;
  export import Model = ModelsAPI.Model;
  export import ModelListResponse = ModelsAPI.ModelListResponse;
  export import ModelCreateParams = ModelsAPI.ModelCreateParams;
  export import ModelSessionParams = ModelsAPI.ModelSessionParams;
  export import Providers = ProvidersAPI.Providers;
  export import Provider = ProvidersAPI.Provider;
  export import ProviderListResponse = ProvidersAPI.ProviderListResponse;
  export import ProviderCreateParams = ProvidersAPI.ProviderCreateParams;
  export import Allowance = AllowanceAPI.Allowance;
  export import AllowanceRetrieveResponse = AllowanceAPI.AllowanceRetrieveResponse;
  export import AllowanceRetrieveParams = AllowanceAPI.AllowanceRetrieveParams;
  export import LatestBlockResource = LatestBlockAPI.LatestBlockResource;
  export import LatestBlock = LatestBlockAPI.LatestBlock;
  export import Token = TokenAPI.Token;
  export import Transactions = TransactionsAPI.Transactions;
  export import TransactionList = TransactionsAPI.TransactionList;
  export import Bids = BidsAPI.Bids;
  export import Sessions = SessionsAPI.Sessions;
}
