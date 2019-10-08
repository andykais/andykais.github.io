# andykais.github.io

[![Github Actions Build
Status](https://github.com/andykais/andykais.github.io/workflows/Github%20Pages%20Deploy/badge.svg)](https://github.com/andykais/andykais.github.io)

The [master](https://github.com/andykais/andykais.github.io/tree/master) branch holds only the generated
`public/` folder served by Github Pages, while the source code lives on the
[src](https://github.com/andykais/andykais.github.io/tree/gh-pages) branch


## Running

```bash
npm install
npm run develop # run locally
npm run build # build production files
```

## Deploy
push to the `src` branch and [github workflows](./.github/workflows/gh-pages.yml) handle the rest
