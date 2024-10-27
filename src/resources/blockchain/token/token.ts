// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as SupplyAPI from './supply';

export class Token extends APIResource {
  supply: SupplyAPI.Supply = new SupplyAPI.Supply(this._client);
}

export namespace Token {
  export import Supply = SupplyAPI.Supply;
  export import TokenSupply = SupplyAPI.TokenSupply;
}
