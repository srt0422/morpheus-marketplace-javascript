// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

export type Bid = Array<Bid.BidItem>;

export namespace Bid {
  export interface BidItem {
    bidID?: string;

    modelID?: string;

    pricePerSecond?: string;

    providerID?: string;

    status?: string;
  }
}

export interface Session {
  /**
   * Additional session details.
   */
  details?: unknown;

  /**
   * Unique identifier for the session.
   */
  sessionID?: string;
}
