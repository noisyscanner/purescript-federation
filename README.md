# Demo of shared Halogen dependency between 2 apps

Monorepo consisting of 3 packages.

- `app1` and `app2` are both Halogen applications
- `shell` is the wrapper application which will mount both


## Running locally
```sh
pnpm install
pnpm build
pnpm preview
```
Runs using `vite preview` (prod mode) rather than dev mode to give a better idea of how this might behave in prod.

## What's going on?
Go to `localhost:6003` to see both apps running.
Notice that the Halogen stuff is split into its own chunk `Halogen-e2c23f3b.js` for both app-1 and app-2. It's currently requested twice as it's loaded from different servers for app-1 and app-2.

Therefore for prod, if we throw all Vite bundles into one bucket, the frontend should only load that chunk if it's not already in the cache.
In this case, that chunk shouldn't change until we upgrade Halogen.

## Applications of this
We could do this with much of the purs standard library, various monads, our oa-components, shared gql types, or whatever we want. As long as each app bundles each chunk the same, it should only be downloaded once until the content of it actually changes.

Old chunks will be kept around for a by the CDN until they're no longer requested, so if one app changes and a chunk changes its hash, other apps won't be affected.
If we make the chunking logic shared (eg in a custom plugin used by all vite apps), then a change to it would rebuild all vite apps, so their chunks and hashes would all move in sync.
