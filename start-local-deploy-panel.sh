#!/bin/bash
set -e

if [ ! -f ".local-deploy/server.py" ]; then
  echo "ERROR: .local-deploy/server.py does not exist."
  echo "Create the local deploy panel files first."
  exit 1
fi

if [ ! -f ".local-deploy/panel.html" ]; then
  echo "ERROR: .local-deploy/panel.html does not exist."
  echo "Create the local deploy panel files first."
  exit 1
fi

python3 .local-deploy/server.py
