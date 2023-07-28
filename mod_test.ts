import { assertEquals } from "https://deno.land/std@0.192.0/testing/asserts.ts";
import { add } from "./mod.js";

Deno.test(function addTest() {
  
  assertEquals(add(2, 3), 5);
});
