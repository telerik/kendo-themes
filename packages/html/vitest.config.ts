import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'node',
    include: ['tests/**/*.(test|spec).+(ts|tsx|js)'],
    globals: false,
    coverage: {
      provider: 'v8',
      include: ['src/**/*.{ts,tsx}'],
      exclude: ['src/**/*.d.ts', 'src/**/*.spec.{ts,tsx}'],
    },
  },
  esbuild: {
    jsx: 'automatic',
  },
});
