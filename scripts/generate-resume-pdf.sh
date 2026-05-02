#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
PORT="${PORT:-3012}"
URL="http://127.0.0.1:${PORT}/resume"
OUT_FILE="${ROOT_DIR}/public/resume.pdf"
LOG_FILE="${ROOT_DIR}/.resume-pdf-server.log"

cleanup() {
  if [[ -n "${SERVER_PID:-}" ]] && kill -0 "${SERVER_PID}" >/dev/null 2>&1; then
    kill "${SERVER_PID}" >/dev/null 2>&1 || true
    wait "${SERVER_PID}" >/dev/null 2>&1 || true
  fi
}

trap cleanup EXIT

cd "${ROOT_DIR}"

npm run start -- --hostname 127.0.0.1 --port "${PORT}" >"${LOG_FILE}" 2>&1 &
SERVER_PID=$!

for _ in $(seq 1 45); do
  if curl -sf "${URL}" >/dev/null; then
    break
  fi
  sleep 1
done

if ! curl -sf "${URL}" >/dev/null; then
  echo "Resume page did not become available at ${URL}" >&2
  exit 1
fi

google-chrome \
  --headless \
  --disable-gpu \
  --no-sandbox \
  --run-all-compositor-stages-before-draw \
  --virtual-time-budget=5000 \
  --no-pdf-header-footer \
  "--print-to-pdf=${OUT_FILE}" \
  "${URL}"

echo "Generated ${OUT_FILE}"
