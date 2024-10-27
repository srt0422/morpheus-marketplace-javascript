// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import MorpheusMarketplace from 'morpheus-marketplace';
import { Response } from 'node-fetch';

const client = new MorpheusMarketplace({
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource models', () => {
  test('create: only required params', async () => {
    const responsePromise = client.blockchain.models.create({
      fee: 'fee',
      ipfsID: 'ipfsID',
      modelID: 'modelID',
      name: 'name',
      stake: 'stake',
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
      fee: 'fee',
      ipfsID: 'ipfsID',
      modelID: 'modelID',
      name: 'name',
      stake: 'stake',
      tags: ['string', 'string', 'string'],
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

  test('exists', async () => {
    const responsePromise = client.blockchain.models.exists('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('exists: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.blockchain.models.exists('id', { path: '/_stainless_unknown_path' })).rejects.toThrow(
      MorpheusMarketplace.NotFoundError,
    );
  });

  test('resetstats', async () => {
    const responsePromise = client.blockchain.models.resetstats('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('resetstats: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.blockchain.models.resetstats('id', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(MorpheusMarketplace.NotFoundError);
  });

  test('session: only required params', async () => {
    const responsePromise = client.blockchain.models.session('id', { sessionDuration: 'sessionDuration' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('session: required and optional params', async () => {
    const response = await client.blockchain.models.session('id', { sessionDuration: 'sessionDuration' });
  });
});
