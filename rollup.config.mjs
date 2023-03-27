import ts from 'rollup-plugin-typescript2';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import serve from 'rollup-plugin-serve';
import { fileURLToPath } from 'url';

export default {
  input: "./src/index.ts",
  output: {
    file: "/dist/bundle.js", // 入口
    format: "iife", // 打包出来的结果是一个自执行函数
    sourcemap: true, // 生成sourcemap文件
  },
  plugins: [
    nodeResolve({
      extensions: [".js", ".ts"], // 解析文件的格式
    }),
    ts({
      // import.meta.url 指的是当前运行的命令的路径
      // fileURLToPath 文件 + 运行命令路径 = 绝对路径
      tsconfig: fileURLToPath(new URL('tsconfig.json', import.meta.url))
      // tsconfig: 'tsconfig.json' // 导入本地ts配置 配置文件不能用__dirname mjs中没有__dirname
    }),
    serve({
      open: true,
      openPage: "/public/index.html",
      port: 4444,
    }),
  ],
};