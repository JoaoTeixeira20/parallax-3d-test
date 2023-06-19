const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');
const postCssPlugin = require('esbuild-style-plugin');
const fs = require('fs');

function copyFolderSync(source, destination) {
  if (!fs.existsSync(destination)) {
    fs.mkdirSync(destination);
  }

  const files = fs.readdirSync(source);
  files.forEach((file) => {
    const sourcePath = `${source}/${file}`;
    const destinationPath = `${destination}/${file}`;

    if (fs.lstatSync(sourcePath).isDirectory()) {
      copyFolderSync(sourcePath, destinationPath);
    } else {
      fs.copyFileSync(sourcePath, destinationPath);
    }
  });
}

copyFolderSync('./public/assets','./docs/assets');

require('esbuild').build({
  entryPoints: ['src/development/Final.tsx', 'src/development/style.css'],
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
