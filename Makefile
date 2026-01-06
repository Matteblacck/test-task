COMPOSE_FILE=docker/docker-compose.yml
PROJECT_NAME=test


up:
	docker-compose -p $(PROJECT_NAME) -f $(COMPOSE_FILE) up -d

down:
	docker-compose -p $(PROJECT_NAME) -f $(COMPOSE_FILE) down

restart:
	make down
	make up

logs:
	docker-compose -p $(PROJECT_NAME) -f $(COMPOSE_FILE) logs -f

build:
	docker-compose -p $(PROJECT_NAME) -f $(COMPOSE_FILE) build

ps:
	docker-compose -p $(PROJECT_NAME) -f $(COMPOSE_FILE) ps

clean:
	docker-compose -p $(PROJECT_NAME) -f $(COMPOSE_FILE) down -v