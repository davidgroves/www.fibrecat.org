#!/usr/bin/env bash

echo "========================================="
echo "Deploying Static Site to neptune and zeus"
echo "========================================="

sed -i 's/output: "\(.*\)"/output: "'static'"/g' astro.config.mjs
npm run build
scp -r dist/* neptune.fibrecat.org:/var/www/www.fibrecat.org/ &
scp -r dist/* zeus.fibrecat.org:/var/www/www.fibrecat.org/ &
wait

echo "========================="
echo "Deployed to fibrecat.org"
echo "========================="
echo ""
