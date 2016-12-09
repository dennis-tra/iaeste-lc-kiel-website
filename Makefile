staging:
	./scripts/deploy.sh
build:
	docker run website_jekyll jekyll build
