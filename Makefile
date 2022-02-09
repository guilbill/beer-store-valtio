

help:
	@grep -P '^[a-zA-Z0-9_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

install: ## Install npm dependencies
	docker-compose run --no-deps --rm beer-store npm install
start: ## Start the beer store
	docker-compose up
