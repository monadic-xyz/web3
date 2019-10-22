# Gitcoin X Radicle

Web outlet of the Gitcoin X Radicle hackathon. Generation of the static output is
managed with [NEXT.js](https://nextjs.org/). We picked the following
components:

* [NEXT.js] - side structure and content management
* [Sass] - CSS extension language for layouts and styles
* [yarn] - dependency management and task execution

### Develop

To run a local instance of the site issue the following command:

```
yarn dev
```

### Build

To produce the latest version of the static generation run:

```
yarn export
```

### Deploy

This will build and deploy the website to github pages with the custom url [monadic-xyz.github.io](https://monadic-xyz.github.io/).

```
yarn deploy
```
