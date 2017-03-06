# react-expandable-grid

Image grid with an expanding detail view

An Easy to use react component to get your galleries and portfolios up and running quickly. When an user clicks on an image thumbnail, a preview window opens up showing a larger (or smaller, depending on the settings) image along with some textual information such as a title or a description.

It's always easier to use it than read about it... Check out the demo!


## Demo & Examples

Live demo: [karthicashokan.github.io/react-expandable-grid](http://karthicashokan.github.io/react-expandable-grid/)

To build the examples locally, run:

```
npm install
npm run build
cd example
npm install
npm start
```

Then open [`localhost:3000`](http://localhost:3000) in a browser.


## Installation

The easiest way to use react-expandable-grid is to install it from NPM and include it in your own React build process.

You can also use the standalone build by including `src/react-expandable-grid.js` in your page. If you use this, make sure you have already included React, and it is available as a global variable.

```
npm install react-expandable-grid --save
```


## Usage


```
var ReactGridDetailExpansion = require('react-expandable-grid');

var data = [
{'img': '<url>', 'link': '<url>', 'title': '<text>', 'description': '<text>'},
{'img': '<url>', 'link': '<url>', 'title': '<text>', 'description': '<text>'}
]

var data_string = JSON.stringify(data)

<ReactGridDetailExpansion
                    gridData={data_string}
                    detailHeight={300}
                    ExpandedDetail_image_size={300}
                    cellSize={200}
                />
```

### Properties

| Property                           | Type     | Explanation                                                      |  Notes  |
| :--------------------------------- |:--------:| :----------------------------------------------------------------|--------:|
| gridData                           | string   | JSON string of the data to be displayed in the grid              |         |
| cellSize                           | string   | Size of the thumbnail image in the grid                          |         |
| cellMargin                         | number   | Margin between the thumbnails in the grid                        |         |
| bgColor                            | string   | Background color for the grid itself                             |         |
| detailWidth                        | string   | Width of the expanded window                                     |    in % |
| detailHeight                       | number   | Height of the expanded window                                    |    in px|
| detailBackgroundColor              | string   | Background color of the expanded window                          |         |
| ExpandedDetail_right_width         | string   | Width of the expanded window's right pane (see screenshot)       |    in % |
| ExpandedDetail_left_width          | string   | Width of the expanded window's left pane (see screenshot)        |    in % |
| ExpandedDetail_description_bgColor | string   | Background color of the expanded window's description            |         |
| ExpandedDetail_title_bgColor       | string   | Background color of the expanded window's title                  |         |
| ExpandedDetail_img_bgColor         | string   | Background color of the expanded window's image                  |         |
| ExpandedDetail_link_text           | string   | Text to be placed for the expanded window's link                 |         |
| ExpandedDetail_font_color          | string   | font-coloe of the expanded window's link                         |         |
| ExpandedDetail_close_x_bool        | boolean  | Whether you want the simple 'X' close button (else, use css)     |         |
| show_mobile_style_from_width       | number   | Responsive design: Uses mobile optimization from this width      |         |


![Screen Shot](https://github.com/karthicashokan/react-expandable-grid/blob/master/react-expandable-grid.png)


### Notes

####Default values for properties are given below:

```
cellSize: 200,
cellMargin: 25,
bgColor: "#f2f2f2",
detailWidth: "100%",
detailHeight: 200,
detailBackgroundColor: "#D9D9D9",
ExpandedDetail_right_width: "60%",
ExpandedDetail_left_width: "40%",
ExpandedDetail_image_size: 200,
ExpandedDetail_description_bgColor: "#D9D9D9",
ExpandedDetail_title_bgColor: "#D9D9D9",
ExpandedDetail_img_bgColor: "#D9D9D9",
ExpandedDetail_link_text: "→ Link",
ExpandedDetail_font_color: "#434343",
ExpandedDetail_close_x_bool: false, // set false, if you're going to adding css to this div and making a customized button
show_mobile_style_from_width: 600,
```

####Use CSS to make elements look nicer. IDs for some key elements are given below:

```
// Link
#ExpandedDetailDescriptionLink

// Close Button
#ExpandedDetail_close

// Title for the expanded detail
#ExpandedDetailTitle

// Text/Description for the expanded detail
#ExpandedDetailDescription

// Image for the expanded detail
#ExpandedDetailImage
```

## Development (`src`, `lib` and the build process)

**NOTE:** The source code for the component is in `src`. A transpiled CommonJS version (generated with Babel) is available in `lib` for use with node.js, browserify and webpack. A UMD bundle is also built to `dist`, which can be included without the need for any build system.

To build, watch and serve the examples (which will also watch the component source), run `npm start`. If you just want to watch changes to `src` and rebuild `lib`, run `npm run watch` (this is useful if you are working with `npm link`).

## License 

####(MIT License)

```
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
```

Copyright (c) 2017 Karthic Ashokan.

