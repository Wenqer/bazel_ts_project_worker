## This repository is an example of failures in node_modules resolution in the ts_project worker mode.

To see an issue in non-sandboxed mode please run `yarn clean && yarn build:local` or do a manual steps: 0. reset repo state by `yarn clean`

1. build a package in worker mode `bazel build packages/lib`
2. do a small change in packages/lib ts file
3. rebuild `bazel build packages/lib`

Expected result: packages/lib should be rebuilded without errors.
Actual result: build fail on `error TS2307: Cannot find module 'fp-ts/lib/function' or its corresponding type declarations.`

---

Somehow same issue works a bit different in sandboxed mode. First file change works fine, but the next one fails with same issue.

To see an issue in sandboxed mode please run `yarn clean && yarn build:sandbox` or do a manual steps: 0. reset repo state by `yarn clean`

1. build a package in worker mode `bazel build packages/lib --worker_sandboxing`
2. do a small change in packages/lib ts file
3. rebuild `bazel build packages/lib --worker_sandboxing`
4. do a small change in packages/lib ts file
5. rebuild `bazel build packages/lib --worker_sandboxing`

Expected result: packages/lib should be rebuilded without errors.
Actual result: build fail on `error TS2307: Cannot find module 'fp-ts/lib/function' or its corresponding type declarations.`
