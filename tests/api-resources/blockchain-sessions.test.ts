// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import MorpheusMarketplace from 'morpheus-marketplace';
import { Response } from 'node-fetch';

const client = new MorpheusMarketplace({
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource blockchainSessions', () => {
  test('create: only required params', async () => {
    const responsePromise = client.blockchainSessions.create({
      approval: 'approval_abc123',
      approvalSig: 'signature_xyz789',
      stake: '500',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.blockchainSessions.create({
      approval: 'approval_abc123',
      approvalSig: 'signature_xyz789',
      stake: '500',
    });
  });

  test('retrieve', async () => {
    const responsePromise = client.blockchainSessions.retrieve('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieve: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.blockchainSessions.retrieve('id', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(MorpheusMarketplace.NotFoundError);
  });

  test('budget', async () => {
    const responsePromise = client.blockchainSessions.budget();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('budget: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.blockchainSessions.budget({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      MorpheusMarketplace.NotFoundError,
    );
  });

  test('close', async () => {
    const responsePromise = client.blockchainSessions.close('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('close: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.blockchainSessions.close('id', { path: '/_stainless_unknown_path' })).rejects.toThrow(
      MorpheusMarketplace.NotFoundError,
    );
  });

  test('provider: only required params', async () => {
    const responsePromise = client.blockchainSessions.provider({ provider: 'provider_xyz789' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('provider: required and optional params', async () => {
    const response = await client.blockchainSessions.provider({
      provider: 'provider_xyz789',
      limit: 10,
      offset: 0,
    });
  });

  test('user: only required params', async () => {
    const responsePromise = client.blockchainSessions.user({ user: 'user_abc123' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('user: required and optional params', async () => {
    const response = await client.blockchainSessions.user({ user: 'user_abc123', limit: 10, offset: 0 });
  });
});
