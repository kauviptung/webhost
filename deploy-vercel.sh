#!/usr/bin/env bash
set -euo pipefail
bun install
# `vercel build` sets VERCEL=1, so vite.config.ts switches to the nitro
# plugin and emits .vercel/output (Build Output API) for `--prebuilt` deploy.
bunx vercel@latest build --prod
bunx vercel@latest deploy --prebuilt --prod
