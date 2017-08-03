# vue-svgpaths

> A Vue.js Component to generate relative SVG clipPaths (0-1) to achieve responsive clipping paths.
> Still very experimenta with plans on becoming a Vue plugin (or directive!).

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

```

Details:

 * Make sure your SVGs are positioned (0,0)
 * ```~/src/utils/MaskPaths.js``` contains svg Path, Width, Height and unique Id. These values are required.
 * This can be used as a single component, just include SvgPath.vue in your project and adjust as needed.
