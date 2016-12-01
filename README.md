# IAESTE LC Kiel - Website

## Development
In order to develop this website run:
```shell
docker-compose up
```

and check your page on `localhost:4000`. Every time you make a change to one of the html, scss, js files jekyll compiles it for you and you just need to refresh the browser.

## Deployment
For deployment you need to add a `JEKYLL_GITHUB_TOKEN` to the `.env` file. After you've done that you just need to run:
```shell 
make staging
```