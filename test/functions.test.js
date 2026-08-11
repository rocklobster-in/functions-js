import { strict as assert } from "node:assert";
import { flatten } from "../index.js";

describe("flatten()", function () {
  it(`should return a flat array`, function () {
    assert.deepEqual(flatten(["a", [1, ["B"]]]), ["a", 1, "B"]);
  });
});
