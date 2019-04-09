if ! [ -x "$(command -v docker-compose)" ]; then
  echo 'Error: docker-compose is not installed.' >&2
  exit 1
fi

if ! [ -x "$(command -v npm)" ]; then
  echo 'Error: npm is not installed.' >&2
  exit 1
fi

PWD=`pwd`
cd $PWD/src/frontend && npm i && cd $PWD
docker-compose up --build
