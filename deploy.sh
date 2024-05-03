#!/usr/bin/env bash

npm run build
scp -r dist/* neptune.fibrecat.org:/var/www/www.fibrecat.org/ &
scp -r dist/* zeus.fibrecat.org:/var/www/www.fibrecat.org/ &
wait

echo ""
echo "========================="
echo "Deployed to fibrecat.org"
echo "========================="
