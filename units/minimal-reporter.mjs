/* eslint-disable no-console */
export default class MinimalReporter {
  constructor() {
    // ANSI color codes
    this.colors = {
      green: "\x1b[32m",
      red: "\x1b[31m",
      cyan: "\x1b[36m",
      yellow: "\x1b[33m",
      reset: "\x1b[0m",
      bold: "\x1b[1m",
    };

    // Collect suite failures for summary
    this.suiteFailures = [];
    // Collect individual test failures for copy-pasteable summary
    this.testFailures = [];
  }

  onTestResult(test, testResult) {
    // Collect test suite failures for summary at the end
    if (testResult.testExecError) {
      this.suiteFailures.push({
        path: test.path,
        error: testResult.testExecError.message,
      });
      
      // Log the error immediately for valuable debugging information
      console.log(`${this.colors.red}${this.colors.bold}SUITE FAIL${this.colors.reset}: ${test.path}`);
      console.log(`${this.colors.red}Error: ${testResult.testExecError.message}${this.colors.reset}`);
      
      return;
    }

    testResult.testResults.forEach((result) => {
      const testPath = result.ancestorTitles.length > 0 ? `${result.ancestorTitles.join(" › ")} › ${result.title}` : result.title;

      if (result.status === "passed") {
        console.log(`${this.colors.green}${this.colors.bold}PASS${this.colors.reset}: ${testPath}`);
      } else if (result.status === "failed") {
        // Collect for copy-pasteable summary
        this.testFailures.push(testPath);

        // Extract expected and actual values from the error message if available
        const failureMessage = result.failureMessages[0] || "";
        const expectedMatch = failureMessage.match(/Expected: (.+)/);
        const receivedMatch = failureMessage.match(/Received: (.+)/);

        let statusLine = `${this.colors.red}${this.colors.bold}FAIL${this.colors.reset}: ${testPath}`;

        if (expectedMatch && receivedMatch) {
          const expected = expectedMatch[1].trim();
          const received = receivedMatch[1].trim();
          statusLine += ` \n(${this.colors.cyan}Expected: ${this.colors.yellow}${expected}${this.colors.reset}, ${this.colors.cyan}Actual: ${this.colors.red}${received}${this.colors.reset})`;
        }

        console.log(statusLine);
      }
    });
  }

  onRunComplete(contexts, results) {
    const { numPassedTests, numFailedTests, numTotalTests, numFailedTestSuites } = results;

    // Display suite failures summary
    if (this.suiteFailures.length > 0) {
      console.log(`\n${this.colors.red}${this.colors.bold}Suite Failures Summary:${this.colors.reset}`);
      this.suiteFailures.forEach((failure, index) => {
        console.log(`${this.colors.red}${this.colors.bold}${index + 1}. SUITE FAIL${this.colors.reset}: ${failure.path}`);
        console.log(`${this.colors.red}Error: ${failure.error}${this.colors.reset}`);
      });
    }

    console.log("\n" + "=".repeat(50));
    console.log(`${this.colors.bold}Test Summary:${this.colors.reset}`);
    console.log(`${this.colors.green}Passed: ${numPassedTests}${this.colors.reset}`);
    console.log(`${this.colors.red}Failed: ${numFailedTests}${this.colors.reset}`);
    console.log(`Total: ${numTotalTests}`);

    if (numFailedTestSuites > 0) {
      console.log(`${this.colors.red}Failed Test Suites: ${numFailedTestSuites}${this.colors.reset}`);
    }

    if (numFailedTests > 0 || numFailedTestSuites > 0) {
      console.log(`\n${this.colors.red}${this.colors.bold}Tests failed!${this.colors.reset}`);
    } else {
      console.log(`\n${this.colors.green}${this.colors.bold}All tests passed!${this.colors.reset}`);
    }
  }
}
