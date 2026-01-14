/**
 * Retry utility with exponential backoff and timeout.
 *
 * Behavior:
 * - Retries the operation up to `maxRetries` times on failure
 * - Uses exponential backoff: delay doubles after each attempt (baseDelayMs * 2^attempt)
 * - Aborts if total elapsed time exceeds `timeoutMs`
 * - Returns the result on success, throws the last error on exhaustion
 */

export interface RetryOptions {
    /** Maximum retry attempts (0 = no retries). Default: 3 */
    maxRetries?: number;
    /** Initial delay between retries in ms. Default: 100 */
    baseDelayMs?: number;
    /** Overall timeout in ms (0 = no timeout). Default: 30000 */
    timeoutMs?: number;
    /** Operation name for error messages. Default: 'operation' */
    operation?: string;
}

export interface RetryError extends Error {
    code: 'ETIMEDOUT' | 'ERETRY_EXHAUSTED';
    cause?: Error;
    attempts?: number;
}

/**
 * Retry an async function with exponential backoff and timeout.
 *
 * @param fn - Async function to retry
 * @param options - Configuration options
 * @returns Result of the function
 * @throws RetryError if all retries exhausted or timeout reached
 */
export async function retryWithBackoff<T>(
    fn: () => Promise<T>,
    options: RetryOptions = {}
): Promise<T> {
    const {
        maxRetries = 3,
        baseDelayMs = 100,
        timeoutMs = 30000,
        operation = 'operation'
    } = options;

    const startTime = Date.now();
    let lastError: Error | undefined;

    for (let attempt = 0; attempt <= maxRetries; attempt++) {
        // Check timeout before attempting
        if (timeoutMs > 0 && Date.now() - startTime >= timeoutMs) {
            const err = new Error(`${operation} timed out after ${timeoutMs}ms`) as RetryError;
            err.code = 'ETIMEDOUT';
            err.cause = lastError;
            throw err;
        }

        try {
            return await fn();
        } catch (err) {
            lastError = err as Error;

            // Don't retry on final attempt
            if (attempt === maxRetries) {
                break;
            }

            // Calculate delay with exponential backoff
            const delay = baseDelayMs * Math.pow(2, attempt);

            // Check if delay would exceed timeout
            if (timeoutMs > 0 && Date.now() - startTime + delay >= timeoutMs) {
                const timeoutErr = new Error(`${operation} timed out after ${timeoutMs}ms`) as RetryError;
                timeoutErr.code = 'ETIMEDOUT';
                timeoutErr.cause = lastError;
                throw timeoutErr;
            }

            await sleep(delay);
        }
    }

    // Enhance error message with retry context
    const enhancedError = new Error(
        `${operation} failed after ${maxRetries + 1} attempts: ${lastError?.message}`
    ) as RetryError;
    enhancedError.code = 'ERETRY_EXHAUSTED';
    enhancedError.cause = lastError;
    enhancedError.attempts = maxRetries + 1;
    throw enhancedError;
}

/**
 * Sleep for specified milliseconds.
 * @param ms - Milliseconds to sleep
 */
export function sleep(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
}
