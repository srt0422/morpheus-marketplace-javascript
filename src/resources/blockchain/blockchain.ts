// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as AllowanceAPI from './allowance';
import * as BalanceAPI from './balance';
import * as BidsAPI from './bids';
import * as LatestBlockAPI from './latest-block';
import * as SendAPI from './send';
import * as TransactionsAPI from './transactions';
import * as ModelsAPI from './models/models';
import * as ProvidersAPI from './providers/providers';
import * as SessionsAPI from './sessions/sessions';
import * as TokenAPI from './token/token';

export class Blockchain extends APIResource {
  models: ModelsAPI.Models = new ModelsAPI.Models(this._client);
  bids: BidsAPI.Bids = new BidsAPI.Bids(this._client);
  sessions: SessionsAPI.Sessions = new SessionsAPI.Sessions(this._client);
  providers: ProvidersAPI.Providers = new ProvidersAPI.Providers(this._client);
  balance: BalanceAPI.BalanceResource = new BalanceAPI.BalanceResource(this._client);
  allowance: AllowanceAPI.AllowanceResource = new AllowanceAPI.AllowanceResource(this._client);
  send: SendAPI.Send = new SendAPI.Send(this._client);
  latestBlock: LatestBlockAPI.LatestBlockResource = new LatestBlockAPI.LatestBlockResource(this._client);
  token: TokenAPI.Token = new TokenAPI.Token(this._client);
  transactions: TransactionsAPI.Transactions = new TransactionsAPI.Transactions(this._client);
}

export namespace Blockchain {
  export import Models = ModelsAPI.Models;
  export import Model = ModelsAPI.Model;
  export import ModelListResponse = ModelsAPI.ModelListResponse;
  export import ModelDeleteResponse = ModelsAPI.ModelDeleteResponse;
  export import ModelExistsResponse = ModelsAPI.ModelExistsResponse;
  export import ModelResetstatsResponse = ModelsAPI.ModelResetstatsResponse;
  export import ModelCreateParams = ModelsAPI.ModelCreateParams;
  export import ModelSessionParams = ModelsAPI.ModelSessionParams;
  export import Bids = BidsAPI.Bids;
  export import BidCreateResponse = BidsAPI.BidCreateResponse;
  export import BidRetrieveResponse = BidsAPI.BidRetrieveResponse;
  export import BidDeleteResponse = BidsAPI.BidDeleteResponse;
  export import BidCreateParams = BidsAPI.BidCreateParams;
  export import BidSessionParams = BidsAPI.BidSessionParams;
  export import Sessions = SessionsAPI.Sessions;
  export import SessionRetrieveResponse = SessionsAPI.SessionRetrieveResponse;
  export import SessionCloseResponse = SessionsAPI.SessionCloseResponse;
  export import SessionCreateParams = SessionsAPI.SessionCreateParams;
  export import Providers = ProvidersAPI.Providers;
  export import Provider = ProvidersAPI.Provider;
  export import ProviderListResponse = ProvidersAPI.ProviderListResponse;
  export import ProviderDeleteResponse = ProvidersAPI.ProviderDeleteResponse;
  export import ProviderCreateParams = ProvidersAPI.ProviderCreateParams;
  export import BalanceResource = BalanceAPI.BalanceResource;
  export import Balance = BalanceAPI.Balance;
  export import AllowanceResource = AllowanceAPI.AllowanceResource;
  export import Allowance = AllowanceAPI.Allowance;
  export import AllowanceApproveResponse = AllowanceAPI.AllowanceApproveResponse;
  export import AllowanceRetrieveParams = AllowanceAPI.AllowanceRetrieveParams;
  export import AllowanceApproveParams = AllowanceAPI.AllowanceApproveParams;
  export import Send = SendAPI.Send;
  export import SendEthResponse = SendAPI.SendEthResponse;
  export import SendMorResponse = SendAPI.SendMorResponse;
  export import SendEthParams = SendAPI.SendEthParams;
  export import SendMorParams = SendAPI.SendMorParams;
  export import LatestBlockResource = LatestBlockAPI.LatestBlockResource;
  export import LatestBlock = LatestBlockAPI.LatestBlock;
  export import Token = TokenAPI.Token;
  export import Transactions = TransactionsAPI.Transactions;
  export import TransactionList = TransactionsAPI.TransactionList;
  export import TransactionListParams = TransactionsAPI.TransactionListParams;
}
