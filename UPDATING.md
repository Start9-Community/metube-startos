# Updating MeTube

## Determining the upstream version

MeTube publishes date-based releases (`YYYY.MM.DD`) as Docker images under
[`alexta69/metube`](https://hub.docker.com/r/alexta69/metube/tags). Check the latest
release:

```bash
gh release view -R alexta69/metube --json tagName -q '.tagName'
```

(or browse the [Docker Hub tags](https://hub.docker.com/r/alexta69/metube/tags)).

The current pin lives in `startos/manifest/index.ts`:

```typescript
dockerTag: 'alexta69/metube:2026.04.28',
```

## Applying the bump

1. Edit `startos/manifest/index.ts` — update `dockerTag` to the new tag, e.g.
   `alexta69/metube:2026.05.12`.
2. Edit `startos/versions/current.ts` — update the version string and release notes.
   **Note the format difference:** the Docker tag is zero-padded (`2026.05.12`) but the
   StartOS (ExVer) version drops leading zeros (`2026.5.12:0`). The trailing `:0` is the
   StartOS package revision — bump it (e.g. `:1`) for packaging-only changes that reuse
   the same upstream version.
3. If the bump carries migration logic, create a new version file instead of editing
   `current.ts` (see the [Versions](https://docs.start9.com/packaging) guidance).
4. Update `UPDATING.md` and `README.md` where the version number is referenced.
5. Build and test: `npm ci && make`
