# @aissadev1/with-try-catch

A utility function for handling asynchronous and synchronous functions with try-catch in Deno.

## Example

Example with a Function Returning Data

```ts
import { withTryCatch } from "@aissadev1/with-try-catch";

function returnData(): string {
  return "This is the data";
}

const result = await withTryCatch(returnData);
if (result.error) {
  console.error("Error:", result.error.message);
} else {
  console.log("Data:", result.data); // Output: "This is the data"
}
```

Example with a Function Throwing an Error

```ts
import { withTryCatch } from "@aissadev1/with-try-catch";

function throwError(): string {
  throw new Error("This is an error");
}

const result = await withTryCatch(throwError);
if (result.error) {
  console.error("Error:", result.error.message); // Output: "This is an error"
} else {
  console.log("Data:", result.data);
}
```

## Installation

Add the package using JSR:

```bash
deno add jsr:@aissadev1/with-try-catch
```

## Import

```ts
import { withTryCatch } from "@aissadev1/with-try-catch";
```
