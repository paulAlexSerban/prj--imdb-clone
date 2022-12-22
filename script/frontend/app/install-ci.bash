#!/bin/bash
# makes sure the folder containing the script will be the root folder
cd "$(dirname "$0")" || exit

echo "🛑  Cleaning Frontend - ReactJS App"
rm -rfv ../../../frontend/app/node_modules

echo "🔧  CI Install Frontend - ReactJS App"
npm --prefix ../../../frontend/app ci
