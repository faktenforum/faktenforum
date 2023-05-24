<div align="center">
  <h1>Faktenforum</h1>
  <div align="center">
    <a href="https://www.faktenforum.org">Website</a>
    <span>&nbsp;&nbsp;•&nbsp;&nbsp;</span>
    <a href="https://app.gitbook.com/o/aw1SvnAHl2HeONNnQsWg/home">Gitbook</a>
  </div>
  <hr />
</div>

## Setup

Install dependencies:
```bash
yarn install
```

This project uses [barrelsby](https://www.npmjs.com/package/barrelsby) to generate index files to import the controllers.

Edit `.barreslby.json` to customize it:

```json
{
  "directory": [
    "./src/controllers/rest",
    "./src/controllers/pages"
  ],
  "exclude": [
    "__mock__",
    "__mocks__",
    ".spec.ts"
  ],
  "delete": true
}
```


## Serve

### From the Command Line
```
$ yarn start

# build for production
$ yarn build
$ yarn start:prod
```

### Docker

```
# build docker image
docker compose build

# start docker image
docker compose up
```
