# TypeScript: Unexpected runtime error with string | null type

This repository demonstrates a common yet subtle error in TypeScript related to handling nullable string types. The code attempts to call `toUpperCase()` on a potentially null string, which leads to a runtime error even though the TypeScript compiler doesn't flag it as an issue.  The solution shows how to properly handle null values to avoid this runtime exception.

## Bug
The `bug.ts` file contains the problematic code.  The `printName` function accepts a string or null. However, when a null value is passed, a runtime error occurs because `toUpperCase()` cannot be called on `null`.

## Solution
The `bugSolution.ts` file provides a corrected version. This version utilizes optional chaining (`?.`) and the nullish coalescing operator (`??`) to safely handle the potential null value.  This ensures that `toUpperCase()` is only called if the name is not null.  The nullish coalescing operator provides a default empty string value if the name is null, preventing the runtime error.