# &lt;gfy-cat&gt;

a polymer web-component for displaying gifs thru [gfycat](http://gfycat.com/)'s conversion service

## Demo

[See this working here](http://mattybow.github.io/gfy-cat)

## Install

Install the component using [Bower](http://bower.io/):

```sh
$ bower install gfy-cat --save
```

Or [download as ZIP](https://github.com/mattybow/gfy-cat/archive/master.zip).

## Usage

```html
<head>
    <script src="bower_components/platform/platform.js"></script>
    <link rel="import" href="bower_components/gfy-cat/dist/gfy-cat.html">
</head>
<body>
    <gfy-cat></gfy-cat>
</body>
```

Use, [grunt-vulcanize](https://github.com/Polymer/grunt-vulcanize) to reduce network requests

## Options

Attribute       | Options           | Default      | Description
---             | ---               | ---          | ---
`src`           | *string*          | `''`         | .gif source url
`gfyName`       | *string*          | `''`         | gfyName returned by gfycat.com _example:CostlyAfraidEmu_
`width`         | *% or px*         | `100%`       | size you want the element
`color`         | *hex rbg or rgba* | `#eee`       | the color of the contols and the text
`fill`          | *true or false*   | `false`      | true means a solid filled in polygon, false will be a path
`strokeWidth`   | *integer*         | `3`          | controls the line width if you have fill attribute set to true
`ntimes`        | *integer*         | `3`          | if not specified, animation will loop 3 times then pause, user can playback at will
`loop`          | *true or false*    | `false`     | video will loop infinitely until paused or pingpong is activated in which case ntimes is set to 100

## Compatibility
Please see bottom of the [demo](http://mattybow.github.io/gfy-cat) on notes about iOS safari fallbacks

## Development

In order to run it locally you'll need to fetch some dependencies and a basic server setup.

* Install [Bower](http://bower.io/) & [Grunt](http://gruntjs.com/):

    ```sh
    $ [sudo] npm install -g bower grunt-cli
    ```

* Install local dependencies:

    ```sh
    $ bower install && npm install
    ```

* To test your project, start the development server and open `http://localhost:4000`.

    ```sh
    $ grunt serve
    ```

* To build the distribution files before releasing a new version.

    ```sh
    $ grunt build
    ```

* To provide a live demo, send everything to `gh-pages` branch.

    ```sh
    $ grunt deploy
    ```

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## History

For detailed changelog, check [Releases](https://github.com/mattybow/gfy-cat/releases).

## License

[MIT License](http://opensource.org/licenses/MIT)
