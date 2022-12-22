#!/bin/bash
# makes sure the folder containing the script will be the root folder
cd "$(dirname "$0")" || exit

echo "BUILD ReactJS App"
npm --prefix ../../../frontend/app run build