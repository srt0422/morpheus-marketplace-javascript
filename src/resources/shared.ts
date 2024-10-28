// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

export interface Bid {
  /**
   * Unique identifier of the bid
   */
  id: string;

  /**
   * ID of the model the bid is for
   */
  modelID: string;

  /**
   * Bid price per second
   */
  pricePerSecond: string;
}

export interface Budget {
  /**
   * Current session budget
   */
  budget: string;
}

export interface Session {
  /**
   * Unique identifier of the session
   */
  id: string;

  /**
   * Duration of the session in seconds
   */
  sessionDuration: string;

  /**
   * Status of the session
   */
  status: string;
}

export interface SessionList {
  /**
   * List of sessions
   */
  sessions: Array<Session>;
}
