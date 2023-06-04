const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');
const postCssPlugin = require('esbuild-style-plugin');

require('esbuild').build({
  entryPoints: ['src/development/Preview.tsx', 'src/development/style.css'],
  bundle: true,
  minify: true,
  format: 'esm',
  target: ['es6'],
  outdir: 'docs',
  splitting: true,
  plugins: [
    postCssPlugin({
      postcss: {
        plugins: [tailwindcss, autoprefixer],
      },
    }),
  ],
});
