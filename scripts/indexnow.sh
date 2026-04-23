#!/usr/bin/env bash
# =============================================================================
# IndexNow notificatie — informeert Bing/Yandex over wijzigingen
# Wordt aangeroepen na een succesvolle deploy
# =============================================================================

set -euo pipefail

HOST="www.smit-installatie-techniek.nl"
KEY="2f75ee680d178870b14b87b807e1c9e5"
KEY_LOCATION="https://${HOST}/${KEY}.txt"
SITEMAP_URL="https://${HOST}/sitemap.xml"

GREEN="\033[0;32m"
YELLOW="\033[1;33m"
RESET="\033[0m"

log()  { echo -e "${GREEN}[INDEXNOW]${RESET} $1"; }
warn() { echo -e "${YELLOW}[WARN]${RESET}     $1"; }

log "Start IndexNow notificatie..."

# ── Haal alle URL's uit de sitemap ────────────────────────────────────────
URLS=$(curl -s "$SITEMAP_URL" | grep -oE '<loc>[^<]+</loc>' | sed 's/<loc>//; s/<\/loc>//')

if [ -z "$URLS" ]; then
  warn "Geen URL's gevonden in sitemap — overgeslagen."
  exit 0
fi

URL_COUNT=$(echo "$URLS" | wc -l | tr -d ' ')
log "Gevonden: $URL_COUNT URL's in sitemap."

# ── Bouw JSON payload ────────────────────────────────────────────────────
URL_LIST=$(echo "$URLS" | sed 's/.*/"&"/' | paste -sd, -)

PAYLOAD=$(cat <<EOF
{
  "host": "$HOST",
  "key": "$KEY",
  "keyLocation": "$KEY_LOCATION",
  "urlList": [$URL_LIST]
}
EOF
)

# ── Stuur naar Bing (centrale endpoint deelt met andere zoekmachines) ────
log "Stuur naar api.indexnow.org..."
HTTP_CODE=$(curl -s -o /tmp/indexnow-response.txt -w "%{http_code}" \
  -X POST "https://api.indexnow.org/IndexNow" \
  -H "Content-Type: application/json; charset=utf-8" \
  -d "$PAYLOAD")

if [ "$HTTP_CODE" = "200" ] || [ "$HTTP_CODE" = "202" ]; then
  log "IndexNow succesvol: HTTP $HTTP_CODE ($URL_COUNT URL's aangemeld)."
else
  warn "IndexNow gaf HTTP $HTTP_CODE — zie /tmp/indexnow-response.txt"
  cat /tmp/indexnow-response.txt || true
fi
