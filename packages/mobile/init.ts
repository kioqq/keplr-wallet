import {init} from '@keplr-wallet/background';
import {RNRouter} from './src/router';
import {MemoryKVStore} from '@keplr-wallet/common';

// TODO: Implement the env producer for the react native
const router = new RNRouter(undefined as any);

// TODO: Implement the KVStore for the react-native async storage.
init(
  router,
  (key: string) => new MemoryKVStore(key),
  undefined as any,
  [],
  [],
  undefined as any,
);