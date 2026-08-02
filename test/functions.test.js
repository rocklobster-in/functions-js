import assert from 'node:assert/strict';
import { flatten } from '../index.js';

assert.deepEqual( flatten( [ 'a', [ 1, [ 'B' ] ] ] ), [ 'a', 1, 'B' ] );
