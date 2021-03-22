The exercise was solved under the mvc pattern with the extra layer of service. Using the index of each object to find the price and the type of day it belongs to, which can be week or weekend day

how to run the program locally:

npm
* `git clone https://github.com/jeffqev/exercise-ioet.git`
* `cd exercise-ioet`
* `npm start`

docker 
* `git clone https://github.com/jeffqev/exercise-ioet.git`
* `cd exercise-ioet`
* `docker build -t app-docker .`
* `docker run --rm app-docker`

docker compose
* `git clone https://github.com/jeffqev/exercise-ioet.git`
* `cd exercise-ioet`
* `docker-compose up`

k8s
* `git clone https://github.com/jeffqev/exercise-ioet.git`
* `cd exercise-ioet`
* `docker build -t exercise-deploy:v1 .`
* `kubectl apply -f k8s-deploy.yml`
* `kubectl logs -l app=exercise`