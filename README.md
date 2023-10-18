# Next.js Teslo Shop

To run locale, it is needed the database

```
docker-compose up -d
```

* -d means __detached__


## Configure the environment variables
Rename the file __.env.template__ to __.env__
* MongoDB Local URL:

```
MONGO_URL=mongodb://localhost:27017/teslodb
```

* Rebuild the node modules and start up Next
```
yarn install
yarn dev
```

## Charge database with test data

Call to
```
http://localhost:3000/api/seed
```