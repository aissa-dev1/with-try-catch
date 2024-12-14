type Result<T> = { data: T; error: null } | { data: null; error: Error };

/**
 * Runs a function with try-catch and returns an object with either the data if
 * the function succeeded or an error if it failed.
 *
 * @template T - The return type of the function.
 * @template A - The argument types of the function.
 * @param {(...args: A) => Promise<T> | T} fn - The function to run with try-catch.
 * @param {...A} args - The arguments to pass to the function.
 * @returns {Promise<Result<T>>} An object containing either the data or the error.
 * @example
 * const { data, error } = await withTryCatch(() => {
 *   throw new Error('error');
 * });
 * console.assert(data === null);
 * console.assert(error instanceof Error);
 *
 * const { data, error } = await withTryCatch(() => {
 *   return 'success';
 * });
 * console.assert(data === 'success');
 * console.assert(error === null);
 */
export async function withTryCatch<T, A extends unknown[]>(
  fn: (...args: A) => Promise<T> | T,
  ...args: A
): Promise<Result<T>> {
  try {
    const result = await Promise.resolve(fn(...args));
    return { data: result, error: null };
  } catch (error) {
    return {
      data: null,
      error: error instanceof Error ? error : new Error(String(error)),
    };
  }
}
