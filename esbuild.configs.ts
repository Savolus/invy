import type { BuildOptions } from 'esbuild';

import * as packageJson from './package.json';

export default {
  entryPoints: ['./src/main.ts'],
  bundle: true,
  minify: true,
  platform: 'node',
  outfile: 'dist/main.js',
  target: 'node20',
  external: Object.keys(packageJson.dependencies),
} satisfies BuildOptions;
