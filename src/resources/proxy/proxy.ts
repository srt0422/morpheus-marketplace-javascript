// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as SessionsAPI from './sessions';

export class Proxy extends APIResource {
  sessions: SessionsAPI.Sessions = new SessionsAPI.Sessions(this._client);
}

export namespace Proxy {
  export import Sessions = SessionsAPI.Sessions;
  export import SessionProviderClaimResponse = SessionsAPI.SessionProviderClaimResponse;
  export import SessionProviderClaimableBalanceResponse = SessionsAPI.SessionProviderClaimableBalanceResponse;
  export import SessionInitiateParams = SessionsAPI.SessionInitiateParams;
  export import SessionProviderClaimParams = SessionsAPI.SessionProviderClaimParams;
}
