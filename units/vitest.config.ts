import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'jsdom',
    include: ['**/*.test.ts'],
    globals: false, // Keep explicit imports for better IDE support
    // reporters: ['./specificity-reporter.ts'], // Uncomment to enable specificity reporter
  },
});
