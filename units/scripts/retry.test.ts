/**
 * Tests for retry utility with exponential backoff.
 * Validates retry behavior, timeout handling, and error mapping.
 */
import { describe, it, expect, jest } from "@jest/globals";
import { retryWithBackoff, sleep } from "../lib/retry";

describe("retryWithBackoff", () => {

    describe("success cases", () => {
        it("should return result on first success", async () => {
            const fn = jest.fn<() => Promise<string>>().mockResolvedValue("success");

            const result = await retryWithBackoff(fn, { maxRetries: 3 });

            expect(result).toBe("success");
            expect(fn).toHaveBeenCalledTimes(1);
        });

        it("should retry and succeed on second attempt", async () => {
            const fn = jest.fn<() => Promise<string>>()
                .mockRejectedValueOnce(new Error("fail 1"))
                .mockResolvedValue("success");

            const result = await retryWithBackoff(fn, {
                maxRetries: 3,
                baseDelayMs: 1 // Fast for testing
            });

            expect(result).toBe("success");
            expect(fn).toHaveBeenCalledTimes(2);
        });
    });

    describe("failure cases", () => {
        it("should throw ERETRY_EXHAUSTED after all retries fail", async () => {
            const originalError = new Error("persistent failure");
            const fn = jest.fn<() => Promise<string>>().mockRejectedValue(originalError);

            await expect(
                retryWithBackoff(fn, {
                    maxRetries: 2,
                    baseDelayMs: 1,
                    operation: "test-op"
                })
            ).rejects.toMatchObject({
                code: "ERETRY_EXHAUSTED",
                message: expect.stringContaining("test-op failed after 3 attempts"),
                attempts: 3,
                cause: originalError
            });

            expect(fn).toHaveBeenCalledTimes(3); // initial + 2 retries
        });

        it("should throw ETIMEDOUT when timeout exceeded", async () => {
            const fn = jest.fn<() => Promise<string>>().mockImplementation(async () => {
                await sleep(50);
                throw new Error("slow failure");
            });

            await expect(
                retryWithBackoff(fn, {
                    maxRetries: 10,
                    baseDelayMs: 10,
                    timeoutMs: 100,
                    operation: "slow-op"
                })
            ).rejects.toMatchObject({
                code: "ETIMEDOUT",
                message: expect.stringContaining("slow-op timed out")
            });
        });
    });

    describe("edge cases", () => {
        it("should work with maxRetries=0 (no retries)", async () => {
            const fn = jest.fn<() => Promise<string>>().mockRejectedValue(new Error("fail"));

            await expect(
                retryWithBackoff(fn, { maxRetries: 0 })
            ).rejects.toMatchObject({
                code: "ERETRY_EXHAUSTED",
                attempts: 1
            });

            expect(fn).toHaveBeenCalledTimes(1);
        });

        it("should work with timeoutMs=0 (no timeout)", async () => {
            const fn = jest.fn<() => Promise<string>>()
                .mockRejectedValueOnce(new Error("fail"))
                .mockResolvedValue("success");

            const result = await retryWithBackoff(fn, {
                maxRetries: 1,
                baseDelayMs: 1,
                timeoutMs: 0
            });

            expect(result).toBe("success");
        });
    });

});

describe("sleep", () => {
    it("should resolve after specified time", async () => {
        const start = Date.now();
        await sleep(50);
        const elapsed = Date.now() - start;

        expect(elapsed).toBeGreaterThanOrEqual(45); // Allow some timing variance
    });
});
