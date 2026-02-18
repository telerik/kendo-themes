/* eslint-disable no-console */
import type { Reporter, TestCase, TestModule } from 'vitest/node';

// ANSI color codes
const colors = {
  green: "\x1b[32m",
  red: "\x1b[31m",
  cyan: "\x1b[36m",
  yellow: "\x1b[33m",
  reset: "\x1b[0m",
  bold: "\x1b[1m",
};

interface SuiteFailure {
  path: string;
  error: string;
}

export default class MinimalReporter implements Reporter {
  private suiteFailures: SuiteFailure[] = [];
  private testFailures: string[] = [];
  private numPassedTests = 0;
  private numFailedTests = 0;
  private numTotalTests = 0;

  onTestCaseResult(testCase: TestCase) {
    const result = testCase.result();
    const taskName = testCase.fullName;

    if (result.state === 'passed') {
      this.numPassedTests++;
      this.numTotalTests++;
      console.log(`${colors.green}${colors.bold}PASS${colors.reset}: ${taskName}`);
    } else if (result.state === 'failed') {
      this.numFailedTests++;
      this.numTotalTests++;
      this.testFailures.push(taskName);

      let statusLine = `${colors.red}${colors.bold}FAIL${colors.reset}: ${taskName}`;

      // Extract expected and actual values from error if available
      if (result.errors && result.errors.length > 0) {
        const error = result.errors[0];
        const message = error.message || '';
        const expectedMatch = message.match(/Expected: (.+)/);
        const receivedMatch = message.match(/Received: (.+)/);

        if (expectedMatch && receivedMatch) {
          const expected = expectedMatch[1].trim();
          const received = receivedMatch[1].trim();
          statusLine += ` \n(${colors.cyan}Expected: ${colors.yellow}${expected}${colors.reset}, ${colors.cyan}Actual: ${colors.red}${received}${colors.reset})`;
        }
      }

      console.log(statusLine);
    }
  }

  onTestModuleCollected(testModule: TestModule) {
    // Handle module-level errors during collection
    const errors = testModule.errors();
    if (errors.length > 0) {
      for (const error of errors) {
        this.suiteFailures.push({
          path: testModule.moduleId,
          error: error.message || 'Unknown collection error',
        });
        console.log(`${colors.red}${colors.bold}SUITE FAIL${colors.reset}: ${testModule.moduleId}`);
        console.log(`${colors.red}Error: ${error.message}${colors.reset}`);
      }
    }
  }

  onTestRunEnd() {
    // Display suite failures summary
    if (this.suiteFailures.length > 0) {
      console.log(`\n${colors.red}${colors.bold}Suite Failures Summary:${colors.reset}`);
      this.suiteFailures.forEach((failure, index) => {
        console.log(`${colors.red}${colors.bold}${index + 1}. SUITE FAIL${colors.reset}: ${failure.path}`);
        console.log(`${colors.red}Error: ${failure.error}${colors.reset}`);
      });
    }

    console.log("\n" + "=".repeat(50));
    console.log(`${colors.bold}Test Summary:${colors.reset}`);
    console.log(`${colors.green}Passed: ${this.numPassedTests}${colors.reset}`);
    console.log(`${colors.red}Failed: ${this.numFailedTests}${colors.reset}`);
    console.log(`Total: ${this.numTotalTests}`);

    if (this.numFailedTests > 0) {
      console.log(`\n${colors.red}${colors.bold}Tests failed!${colors.reset}`);
    } else {
      console.log(`\n${colors.green}${colors.bold}All tests passed!${colors.reset}`);
    }
  }
}
