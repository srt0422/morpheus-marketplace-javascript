// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import MorpheusMarketplace from 'morpheus-marketplace';
import { Response } from 'node-fetch';

const client = new MorpheusMarketplace({
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource blockchain', () => {
  test('approve: only required params', async () => {
    const responsePromise = client.blockchain.approve({ amount: '500', spender: 'spender' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('approve: required and optional params', async () => {
    const response = await client.blockchain.approve({ amount: '500', spender: 'spender' });
  });

  test('ethSend: only required params', async () => {
    const responsePromise = client.blockchain.ethSend({
      amount: '1.5',
      to: '0x1234567890abcdef1234567890abcdef12345678',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('ethSend: required and optional params', async () => {
    const response = await client.blockchain.ethSend({
      amount: '1.5',
      to: '0x1234567890abcdef1234567890abcdef12345678',
    });
  });

  test('morSend: only required params', async () => {
    const responsePromise = client.blockchain.morSend({ amount: '250', to: 'to' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('morSend: required and optional params', async () => {
    const response = await client.blockchain.morSend({ amount: '250', to: 'to' });
  });
});
