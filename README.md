# IAESTE LC Kiel - Website

## Prerequisites
You just need docker to be able to set up the development environment.

## Development
Run:
```shell
docker-compose up
```

and go to `localhost:4000` in your browser. Every time you make a change to one of the html, scss, js files jekyll will compile these files for you. Just refresh your browser and see the changes.

## Deployment
### Development
For deployment you need to add a `JEKYLL_GITHUB_TOKEN` to the `.env` file (remove the `.example` part). After you've done that you just need to run:
```shell
make staging
```

### Production
You need to have your private key `id_rsa` in the project root directory. Then run
```shell
docker build . -t iaeste-lc-kiel-website:latest && docker run iaeste-lc-kiel-website:latest ./scripts/production.sh
```
to deploy a new version of the website.
