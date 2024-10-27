/**
 * Disclaimer: modules in _shims aren't intended to be imported by SDK users.
 */
import * as shims from './registry.mjs';
import * as auto from 'morpheus-marketplace/_shims/auto/runtime';
if (!shims.kind) shims.setShims(auto.getRuntime(), { auto: true });
export * from './registry.mjs';
