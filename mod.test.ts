import { withTryCatch } from "./mod.ts";
import { assertEquals } from "@std/assert";

Deno.test("withTryCatch error", async () => {
  const { data, error } = await withTryCatch(() => {
    throw new Error("error");
  });

  assertEquals(data, null);
  assertEquals(error instanceof Error, true);
});

Deno.test("withTryCatch success", async () => {
  const { data, error } = await withTryCatch(() => {
    return "success";
  });

  assertEquals(data, "success");
  assertEquals(error, null);
});
