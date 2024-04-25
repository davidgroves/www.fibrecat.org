#!/usr/bin/env bash

echo "======================================"
echo "Deploying SSR Site to neptune and zeus"
echo "======================================"

sed -i 's/output: "\(.*\)"/output: "'hybrid'"/g' astro.config.mjs
docker buildx build -t pumplekin/fibrecat.org:astro-armv8 --platform linux/arm/v8 .
docker push pumplekin/fibrecat.org:astro-armv8

ssh dwg@neptune.fibrecat.org docker pull pumplekin/fibrecat.org:astro-armv8
ssh dwg@zeus.fibrecat.org docker pull pumplekin/fibrecat.org:astro-armv8

ssh dwg@neptune.fibrecat.org docker restart astro
ssh dwg@zeus.fibrecat.org docker restart astro

#ssh dwg@neptune.fibrecat.org docker run -dit -p 127.0.0.1:4321:4321 --name astro --restart=on-failure:5 pumplekin/fibrecat.org:astro-armv8
#ssh dwg@zeus.fibrecat.org docker run -dit -p 127.0.0.1:4321:4321 --name astro --restart=on-failure:5 pumplekin/fibrecat.org:astro-armv8


echo "========================="
echo "Deployed to fibrecat.org"
echo "========================="
echo ""
