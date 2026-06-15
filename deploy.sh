#!/bin/bash
set -u

HOST="88.223.85.213"
PORT="65002"
USER="u593933576"
REMOTE_PATH="/home/u593933576/domains/culturarunner.com.co/public_html/competicion-global-26"
LOCAL_PATH="site/"
SSH_KEY="$HOME/.ssh/hostinger_global26"
LOG_DIR="logs"
LOG_FILE="$LOG_DIR/deploy-$(date '+%Y%m%d-%H%M%S').log"
MAX_ATTEMPTS=5
SLEEP_SECONDS=30

mkdir -p "$LOG_DIR"

log() {
  echo "[$(date '+%Y-%m-%d %H:%M:%S')] $1" | tee -a "$LOG_FILE"
}

log "Starting manual deploy..."

if [ ! -d "$LOCAL_PATH" ]; then
  log "ERROR: Local folder '$LOCAL_PATH' does not exist."
  exit 1
fi

if [ ! -f "$SSH_KEY" ]; then
  log "ERROR: SSH key not found at '$SSH_KEY'."
  exit 1
fi

chmod 600 "$SSH_KEY"

for attempt in $(seq 1 "$MAX_ATTEMPTS"); do
  log "Testing SSH connectivity. Attempt $attempt of $MAX_ATTEMPTS..."

  nc -vz "$HOST" "$PORT" >> "$LOG_FILE" 2>&1
  NC_STATUS=$?

  if [ "$NC_STATUS" -ne 0 ]; then
    log "SSH port test failed on attempt $attempt."
  else
    log "SSH port is reachable. Starting rsync..."

    rsync -avz --delete \
      -e "ssh -i $SSH_KEY -p $PORT -o StrictHostKeyChecking=no -o ConnectTimeout=30" \
      "$LOCAL_PATH" \
      "$USER@$HOST:$REMOTE_PATH/" >> "$LOG_FILE" 2>&1

    RSYNC_STATUS=$?

    if [ "$RSYNC_STATUS" -eq 0 ]; then
      log "Deploy completed successfully."
      log "Log file: $LOG_FILE"
      exit 0
    fi

    log "Rsync failed on attempt $attempt."
  fi

  if [ "$attempt" -lt "$MAX_ATTEMPTS" ]; then
    log "Waiting $SLEEP_SECONDS seconds before retry..."
    sleep "$SLEEP_SECONDS"
  fi
done

log "Deploy failed after $MAX_ATTEMPTS attempts."
log "Check log file: $LOG_FILE"
exit 1
