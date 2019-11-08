# Website

This website is built using Docusaurus 2, a modern static website generator.

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and open up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

```
$ GIT_USER=<Your GitHub username> USE_SSH=1 yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

### Docker

To build a Docker image for local testing, run:

```
docker build --tag bothub-blog .
```

and then to run it:

```
docker run -p 3000:3000 -it bothub-blog
```

You'll be able to access it from your machine at `localhost:3000`.