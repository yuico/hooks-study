# React-hooks-study

The basic syntaxs of React and hooks

## useEffect
```js
useEffect(() => {
  firstNameRef.current.focus(); // focus on the input on initial node
}, []);
```
### Second Parameter
- [] emtpy array : run on initial node
- don't provide anything: run every time
- [title, date] with dependency : run whenever the dependecy change

## useRef
```js
//App.js
const firstNameRef = useRef(null);
...
return(
  <div>
    <input
      type='text'
      ref={firstNameRef}
      placeholder='Enter first name'
    />
  </div>
)
```

### Reference
https://www.youtube.com/watch?v=ScT4ElKd6eo&ab_channel=techsithtechsith
