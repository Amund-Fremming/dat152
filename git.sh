#!/bin/bash

msg=$1

if [ -z "$msg" ]; then
    echo "Provide a msg"
    exit 1
elif [ "$msg" == ur ]; then
    git add .
    git commit -m "Updated README"
    git push
elif [ "$msg" == uc ]; then
    git add .
    git commit -m "Updated Code"
    git push
elif [ "$msg" == "help" ]; then
    echo "ur - Update README"
    echo "uc - Update Code"
else
    git add .
    git commit -m "$msg"
    git push
fi