# Yeoman Front Generator

> This generator is in pre-alpha development stage.

A Yeoman generator for scaffolding a nice frontend structure for your project with Gulp tasks and watchers for:

* Compiling your .sass files
* Compiling your EcmaScript 6 files using babel
* Creating svg sprites
* Browsersync


## Installation

### This generator requires `yeoman`, `bower` and `gulp`

```
npm install -g yo gulp bower
```

### Installing `generator-front` on your system

Since this package is in pre-alpha stage it is not on npm yet. You will have to clone this repository and npm link it on your system.

#### Cloning this git repository
```
mkdir generator-front
cd generator-front
git clone https://github.com/RoachMech/generator-front.git
```

#### Linking the npm package locally
```
npm link
```

### Scaffolding
Inside your desired project folder run:

```
yo front
```

answer some questions and you're done.

## Want to contribute?

How nice of you! Just send in a pull-request or contact me.

## License

MIT
