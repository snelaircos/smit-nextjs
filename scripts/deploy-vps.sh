#!/usr/bin/env bash
# =============================================================================
# Deploy script — SMIT Installatie Techniek
# Gebruik: bash scripts/deploy-vps.sh
# =============================================================================

set -euo pipefail

# ── Configuratie ──────────────────────────────────────────────────────────────
APP_DIR="/var/www/smit-site"
APP_NAME="smit-site"
BRANCH="master"

# ── Kleuren voor output ───────────────────────────────────────────────────────
GREEN="\033[0;32m"
YELLOW="\033[1;33m"
RED="\033[0;31m"
RESET="\033[0m"

log()  { echo -e "${GREEN}[DEPLOY]${RESET} $1"; }
warn() { echo -e "${YELLOW}[WARN]${RESET}  $1"; }
fail() { echo -e "${RED}[FOUT]${RESET}  $1"; exit 1; }

# ── Stap 0: Controleer of we in de juiste map zijn ───────────────────────────
log "Start deploy → $APP_NAME"
echo "────────────────────────────────────────────────"

if [ ! -d "$APP_DIR" ]; then
  fail "Map $APP_DIR bestaat niet. Voer eerst de eenmalige setup uit."
fi

cd "$APP_DIR"

# ── Stap 1: Git pull ──────────────────────────────────────────────────────────
log "Stap 1/4 — Code ophalen van GitHub ($BRANCH)..."
git fetch origin
git reset --hard origin/$BRANCH
log "Git pull geslaagd."

# ── Stap 2: Dependencies installeren ─────────────────────────────────────────
log "Stap 2/4 — Dependencies installeren..."
rm -rf node_modules
npm ci
log "npm install geslaagd."

# ── Stap 3: Build ─────────────────────────────────────────────────────────────
log "Stap 3/4 — Next.js build starten..."
rm -rf .next
npm run build
log "Build geslaagd."

# ── Stap 4: PM2 starten of herstarten ────────────────────────────────────────
log "Stap 4/4 — PM2 herstarten..."

if pm2 describe "$APP_NAME" > /dev/null 2>&1; then
  pm2 reload "$APP_NAME" --update-env
  log "PM2 app '$APP_NAME' herstart."
else
  pm2 start ecosystem.config.cjs
  pm2 save
  log "PM2 app '$APP_NAME' voor het eerst gestart en opgeslagen."
fi

# ── Klaar ─────────────────────────────────────────────────────────────────────
echo "────────────────────────────────────────────────"
log "Deploy voltooid. Site draait op poort 3000."
echo -e "${GREEN}→ https://www.smit-installatie-techniek.nl${RESET}"
