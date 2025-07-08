// Jest setup file for HTML package
import '@testing-library/jest-dom';

// Mock React if needed
global.React = require('react');

// Add any global test utilities here
global.console = {
  ...console,
  // uncomment to ignore a specific log level
  // log: jest.fn(),
  // debug: jest.fn(),
  // info: jest.fn(),
  // warn: jest.fn(),
  // error: jest.fn(),
};
