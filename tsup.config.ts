import { defineConfig } from 'tsup';
import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'],
  dts: true,
  minify: true,
  clean: true,
  external: ['react', 'react-dom'],
  sourcemap: true,
  // We disable native injectStyle to manually handle Tailwind 4 compilation
  injectStyle: false, 
  async onSuccess() {
    console.log('Compiling Tailwind 4 with CLI...');
    try {
      // 1. Define paths
      const cssInput = './src/styles/global.css';
      const cssOutput = './dist/style.css';
      const jsBundle = './dist/index.js';
      const cjsBundle = './dist/index.cjs';

      // 2. Run Tailwind CLI 
      // We use --content to ensure all classes in your components are detected
      execSync(`npx @tailwindcss/cli -i ${cssInput} -o ${cssOutput} --content "./src/**/*.{ts,tsx}" --minify`);

      // 3. Read the compiled CSS
      const cssContent = fs.readFileSync(cssOutput, 'utf8');

      // 4. Create the injection script
      // Using an ID to prevent duplicate injection and appending to head for priority
      const injectionCode = `
if (typeof document !== 'undefined' && !document.getElementById('vtspecian-ui-styles')) {
  const style = document.createElement('style');
  style.id = 'vtspecian-ui-styles';
  style.textContent = ${JSON.stringify(cssContent)};
  document.head.appendChild(style);
}`;

      // 5. Append the injection code to both ESM and CJS bundles
      if (fs.existsSync(jsBundle)) {
        fs.appendFileSync(jsBundle, injectionCode);
      }
      if (fs.existsSync(cjsBundle)) {
        fs.appendFileSync(cjsBundle, injectionCode);
      }

      console.log('Tailwind CSS successfully injected into JS bundles!');
    } catch (error) {
      console.error('Error during Tailwind compilation:', error);
    }
  },
});