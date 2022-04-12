/**
 * You won't be importing this file directly.
 * Take a look at tsconfig.app.json and tsconfig.spec.json files.
 * TypeScript is configured to discover .d.ts files via the "include" option.
 */

declare module '../../../node_modules/@spartacus/storefront/cms-structure/outlet/outlet.providers' {
  interface ProvideOutletOptions {
    myCustomProp: string;
  }
}

/**
 * We add an empty export to avoid the following error:
 * "Ambient module declaration cannot specify relative module name.ts (2436)"
 */
export {};
