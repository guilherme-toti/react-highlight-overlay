# React Highlight Overlay

A React component to highlight multiple targets by providing a canvas overlay


# Example
Using **React Highlight Overlay** with a tour on a real application
![image](https://cloud.githubusercontent.com/assets/5498874/24042316/3b5a3bf0-0af0-11e7-910b-4419214ec3e9.png)

![image](https://cloud.githubusercontent.com/assets/5498874/24042255/f027a0fa-0aef-11e7-9c1b-0f46dc0af99e.png)


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
