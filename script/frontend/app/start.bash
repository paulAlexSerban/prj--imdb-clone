#!/bin/bash
# makes sure the folder containing the script will be the root folder
cd "$(dirname "$0")" || exit

echo "START Frontend - ReactJS App"
npm --prefix ../../../frontend/app run start