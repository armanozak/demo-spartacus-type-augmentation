# Demo Spartacus - Augment Built-in Types

This is a demo that shows how Spartacus types can be augmented **even when they are not exposed as augmentable**.

The _src/app/custom_ folder includes a _.d.ts_ file. In that file, [declaration merging](https://www.typescriptlang.org/docs/handbook/declaration-merging.html) is used to augment the `ProvideOutletOptions` interface. However, the declaration refers to a relative path of an actual declaration file instead of the module name, i.e. '@spartacus/storefront'. This is a workaround for [a known limitation of TypeScript](https://github.com/microsoft/TypeScript/issues/18877).

If you check _src/app/app.module.ts_, you should see an error in `provideOutlet` configuration. And, if you try to build or serve the app, the build should fail.
