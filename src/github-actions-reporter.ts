/* eslint-disable @typescript-eslint/no-unused-vars */

import type { Reporter, Test, AggregatedResult, TestResult, ReporterOnStartOptions, TestContext } from '@jest/reporters'

/**
 * @see https://github.com/facebook/jest/blob/master/packages/jest-reporters/src/types.ts
 * @see https://jestjs.io/docs/en/configuration#reporters-arraymodulename--modulename-options
*/

export default class GithubActionsReporter implements Reporter {
    onRunStart(results: AggregatedResult, options: ReporterOnStartOptions): void | Promise<void> {
        console.log('[MY REPORTER] onRunStart!')
    }
    onTestStart(test: Test): void | Promise<void> {
        console.log('[MY REPORTER] onTestStart!')
    }
    onTestResult(test: Test, testResult: TestResult, aggregatedResult: AggregatedResult): void | Promise<void> {
        console.log('[MY REPORTER] onTestResult!')
    }

    onRunComplete(contexts: Set<TestContext>, results: AggregatedResult): void | Promise<void> {
      results.testResults.forEach((testResultItem: { testFilePath: any; testResults: any[] }) => {
        const testFilePath = testResultItem.testFilePath

        testResultItem.testResults.forEach((result) => {
          if (result.status !== 'failed') {
            return
          }

          result.failureMessages.forEach((failureMessages: string) => {
            const newLine = '%0A'
            const message = failureMessages.replace(/\n/g, newLine)
            const captureGroup = message.match(/:([0-9]+):([0-9]+)/)

            if (!captureGroup) {
              console.log('Unable to extract line number from call stack')
              return
            }

            const [, line, col] = captureGroup
            console.log(
              `::error file=${testFilePath},line=${line},col=${col}::${message}`,
            )
          })
        })
      })
    }
    getLastError(): void | Error {
        console.log('[MY REPORTER] last error!')
    }
}
