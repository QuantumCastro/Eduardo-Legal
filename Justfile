set shell := ["pwsh", "-NoLogo", "-NoProfile", "-Command"]
default: verify

# --- Setup ---
setup:
  pnpm install

# --- Frontend ---
dev:
  pnpm --dir frontend dev

lint:
  pnpm --dir frontend lint

format:
  pnpm --dir frontend format
  pnpm --dir frontend format:fix

type:
  pnpm --dir frontend type-check

test:
  pnpm --dir frontend test

build:
  pnpm --dir frontend build

scan:
  pnpm audit --prod

verify:
  just format
  just lint
  just type
  just test
  just build
  just scan

# --- GitHub: Nuclear Reset ---
gh url:
    Remove-Item -Recurse -Force .git
    git init
    git add .
    git commit -m "Initial Commit"
    git remote add origin {{url}}
    git push -u --force origin main
