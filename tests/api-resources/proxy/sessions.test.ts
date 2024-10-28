// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import MorpheusMarketplace from 'morpheus-marketplace';
import { Response } from 'node-fetch';

const client = new MorpheusMarketplace({
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource sessions', () => {
  test('initiate: only required params', async () => {
    const responsePromise = client.proxy.sessions.initiate({
      modelId: 'model_12345',
      sessionDuration: '3600',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('initiate: required and optional params', async () => {
    const response = await client.proxy.sessions.initiate({
      modelId: 'model_12345',
      sessionDuration: '3600',
    });
  });

  test('providerClaim: only required params', async () => {
    const responsePromise = client.proxy.sessions.providerClaim('id', { claim: 'claim_abc123' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('providerClaim: required and optional params', async () => {
    const response = await client.proxy.sessions.providerClaim('id', { claim: 'claim_abc123' });
  });

  test('providerClaimableBalance', async () => {
    const responsePromise = client.proxy.sessions.providerClaimableBalance('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('providerClaimableBalance: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.proxy.sessions.providerClaimableBalance('id', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(MorpheusMarketplace.NotFoundError);
  });
});
