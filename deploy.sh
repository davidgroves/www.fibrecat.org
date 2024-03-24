#!/usr/bin/env bash

npm run astro build
scp -r dist/* neptune.fibrecat.org:/var/www/www.fibrecat.org/
scp -r dist/* zeus.fibrecat.org:/var/www/www.fibrecat.org/
