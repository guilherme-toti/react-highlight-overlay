# React Highlight Overlay

A React component to highlight multiple targets by providing a canvas overlay


# Using

React Highlight Overlay is available as an [npm package](https://www.npmjs.com/package/react-highlight-overlay)

Install it

```
npm i react-highlight-overlay
```

Into your project, include Highlight Overlay

```
import HighlightOverlay from 'highlight-overlay';
```

Then put it on the top of your `<body>` passing the target(s) class you want

```
const targets = ['.first-target', '.second-target']

render() {
    return <HighlightOverlay targets={targets} />
}

```

**Note: Your `<body>` must have both `width` and `height` 100%**


## License

MIT
