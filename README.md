## What is this ?

My personal blog site, built with [Astro](https://astro.build/).

## Useful commands / reminders.

To run in local dev mode.
```
$ npm run dev
```

To build the dockerimage.
```
$ docker compose build
OR
$ ./deploy-docker.sh
```

To run the dockerimage locally, to test like it was in production.
```
$ docker run -it -p127.0.0.1:4321:4321 pumplekin/fibrecat.org:astro-armv8
```
