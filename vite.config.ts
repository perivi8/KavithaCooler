import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  
  return {
    base: "/",
    publicDir: 'public',
    plugins: [react()],
    resolve: {
      alias: [
        { find: '@', replacement: path.resolve(__dirname, 'src') },
        { find: /^~/, replacement: '' } // Handle imports with ~ prefix
      ],
      extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
    },
    optimizeDeps: {
      esbuildOptions: {
        // Enable esbuild's automatic JSX runtime
        jsx: 'automatic',
      },
    },
    build: {
      outDir: "dist",
      sourcemap: true,
      assetsDir: "assets",
      rollupOptions: {
        output: {
          manualChunks: {
            react: ['react', 'react-dom', 'react-router-dom'],
            vendor: ['@radix-ui/react-dialog', 'class-variance-authority', 'clsx', 'zod'],
          },
          assetFileNames: (assetInfo) => {
            // Handle files from public directory
            if (assetInfo.name?.startsWith('public/')) {
              return assetInfo.name.replace('public/', '');
            }
            // Handle other assets
            const info = assetInfo.name?.split('.') || [];
            const ext = info[info.length - 1]?.toLowerCase();
            if (['png', 'jpg', 'jpeg', 'svg', 'gif', 'tiff', 'bmp', 'ico', 'webp'].includes(ext)) {
              return `assets/images/[name]-[hash][extname]`;
            }
            return `assets/[name]-[hash][extname]`;
          },
        },
      },
    },
    // Ensure env vars are properly exposed to the client
    define: {
      'process.env': {},
      __APP_ENV__: JSON.stringify(env.NODE_ENV || 'production'),
    },
  };
});
