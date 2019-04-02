# About me 
This will setup, using docker-compose, a basic Django + Django Graphene + Vuejs `(vue-cli project)` + Vuetify + Vue Apollo project.

# Status:

- [x]  Ready to be used for development (hot reload, etc) 
- [ ]  Ready to be used on Production (nginx conf, prod settings, etc) 

# First steps 
Start (and build if needed) containers with the command:
  - `docker-compose up --build`

Create Django tables on DB:
  - `docker-compose run backend migrate`

Create super user:
  - `docker-compose run backend createsuperuser`

Start all containers:
  - `docker-compose up`

# How to use it
First, be sure to complete `First steps` (described above).
Then, after you start all containers (with `docker-compose up`, you are free to start coding the backend or frontend (the code will be auto-reloaded, both
the backend and frontend, each time you save the files in your editor).

# I have a problem, this is not working
Please fill a bug :)

# Directory structure

  - File `docker-compose.yml`: Orchestrate all containers settings
  - Directory `dockerfiles`: 
    - File `backend`: Dockerfile to setup Django + GraphQL
    - File `vuejs`: Dockerfile to setup Vuejs + Webpack + NPM + etc...
  - File `Pipfile` and `Pipfile.lock`: [Pipenv](https://pipenv.readthedocs.io/en/latest/) files
  - File `README.md`: You are here :)
  - Directory `src`:
    - Directory `backend`: Here is the Django + DRF project.
    - Drirectory `frontend`: Here is the Vuejs project.

# About the backend

## Python version

DRF container uses `python:latest` (more info at `https://hub.docker.com/_/python/`. To know which version is running on the container, run: `docker-compose run backend python --version`

## Django related things

  > Question: Can i run `manage.py` scripts from my host? If `true`, how?
  - Answer: Yes you can. Just remember to start your commands with: 

    `docker-compose run backend <any manage.py option here>`

    So for example, if you want to get `manage.py` help, you would write: 

    `docker-compose run backend help`

    Lets suppose you want to list the migrations, you would write:

    `docker-compose run backend showmigrations`

    Another example, if you want to get a `python` shell (command `python manage.py shell`), you would write:

    `docker-compose run backend shell`

  > Question: Can i run `django-admin` script from my host? If `true`, how?

  - Answer: Yes you can. Just remember to start your commands with: 

    `docker-compose run backend django-admin <your options here>`

    So for example, to get `django-admin` help, you would write:

    `docker-compose run backend django-admin help`

    Another example, if you want to get a `db shell`, you would write:

    `docker-compose run backend django-admin dbshell`

  > Question: How can i create a django app?

  - Answer: Just use the command:

    `docker-compose run backend startapp <your app name here>`

    You will found the recently created app inside `src/backend`

  > Question: Do i need to install requirements locally on my system?

  - Answer: Not if you dont want. As described above, you should be able to excecute all django commands as described above.

## (optional) Install requirements locally on your host 

  - Install `pipenv` with your distro package manager, or as you prefer.
  - In the same directory where `Pipfile` and `Pipfile.lock` exists, run: `pipenv install`
  - Done, now you are able to add your bugs at `src/backend`

# About the frontend 

## (optional) Install `vue-cli` locally on your host

  - Create a directory where `npm i -g ...` will be installed. Run: `mkdir ~/.npm-global`
  - Let `npm` where to find installed packages. Run: `npm config set prefix '~/.npm-global'`
  - Let your `bash` knows where `excecutable` installed by `npm` are. Run: ` echo "export PATH=~/.npm-global/bin:$PATH" >> ~/.bashrc `. Apply changes made on `$PATH` running: `source ~/.bashrc`, or open a new terminal. 
  - Install `@vue-cli`, run: `npm install -g @vue/cli`
  - Install `@vue/cli-init`, run: `npm install -g @vue/cli-init`
