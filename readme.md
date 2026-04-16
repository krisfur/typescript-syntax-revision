# TypeScript Syntax Revision Notes

Basic repo with core TypeScript syntax.

## Running the code

The repo was generated using WebStorm (JetBrains IDE) with their TS preset.

To get this running, first use NPM to install the dependencies:
```bash
bun install
```

Building the TypeScript into JavaScript is done with:
```bash
bun run build
```

To run it locally we use `ts-node` as aliased in the `package.json` file:
```bash
bun run start
```

or directly:
```bash
node-ts src/index.ts
```
