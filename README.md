# React Highlight Overlay

A React component to highlight multiple targets by providing a canvas overlay


# Using

First of all, your `<body>` must have `width` and `height`: **100%**.

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


## License

MIT
