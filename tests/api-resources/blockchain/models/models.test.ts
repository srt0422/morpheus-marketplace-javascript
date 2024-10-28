// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import MorpheusMarketplace from 'morpheus-marketplace';
import { Response } from 'node-fetch';

const client = new MorpheusMarketplace({
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource models', () => {
  test('create: only required params', async () => {
    const responsePromise = client.blockchain.models.create({
      fee: '0.01',
      ipfsID: 'QmX...',
      modelID: 'mod-67890',
      name: 'Image Recognition Model',
      stake: '1000',
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
    const response = await client.blockchain.models.create({
      fee: '0.01',
      ipfsID: 'QmX...',
      modelID: 'mod-67890',
      name: 'Image Recognition Model',
      stake: '1000',
      tags: ['machine learning', 'image recognition'],
    });
  });

  test('list', async () => {
    const responsePromise = client.blockchain.models.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.blockchain.models.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      MorpheusMarketplace.NotFoundError,
    );
  });

  test('delete', async () => {
    const responsePromise = client.blockchain.models.delete('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.blockchain.models.delete('id', { path: '/_stainless_unknown_path' })).rejects.toThrow(
      MorpheusMarketplace.NotFoundError,
    );
  });

  test('session: only required params', async () => {
    const responsePromise = client.blockchain.models.session('id', { sessionDuration: '3600' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('session: required and optional params', async () => {
    const response = await client.blockchain.models.session('id', { sessionDuration: '3600' });
  });
});
