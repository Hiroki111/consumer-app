import next from 'next';
import nextConfig from '../next.config';
import { runtimeConfig } from './runtime-config';

function createNextApp() {
  return next({
    dev: runtimeConfig.isDevMode,
    dir: './src',
    conf: nextConfig,
  });
}

export { createNextApp };
