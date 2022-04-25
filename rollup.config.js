import path from 'path';
import ts from 'rollup-plugin-typescript2'
import { nodeResolve } from '@rollup/plugin-node-resolve'
export default {
  input: 'src/index.ts',
  output: {
    file: path.resolve(__dirname, 'dist/bundle.js'),
    format: 'iife',
    sourcemap: true, // 开启源码映射
  },
  plugins: [
    ts(),
    nodeResolve(),
  ]
}