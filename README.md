# firebreak-project-quiz
Quiz app project for Firebreak Q2 2022 - Practice and Learning Django-React apps

## First-time Setup

- Clone repo to your local machine
```bash
git clone <FIND SSH LINK ON GITHUB>
```
- Install Docker (if you haven't already got it)
    - Docker for mac - https://hub.docker.com/editions/community/docker-ce-desktop-mac
    - Docker for Win - https://download.docker.com/win/static/stable/x86_64/
- Run the following command from the file containing the docker-compose.yml file
```bash
docker-compose up -d --build
```
- Open the terminal for the docker image for the Django portion of the container (should be called 'web'), you can click on the CLI symbol to open this if using the Docker Desktop app
- Run the initial migrations to setup the core database functionality by running the following in the Docker Terminal opened last step
```bash
python manage.py migrate
```
- Create a superuser for the Django backend by running the following in the Docker Terminal opened previously. Follow the prompts it gives. These details are used to access the Django backend admin panel:
```
python manage.py createsuperuser
```
- Done! The following are the URLs to access the default placeholder pages
```
React app frontend: http://localhost:3000/
Django app frontend: http://localhost:8000/
Django app admin panel: http://localhost:8000/admin
```
