
const parent = React.createElement(
    "div",
    { id: "parent" },
    React.createElement("div", { id: "child" }, [
        React.createElement("h1", {}, "I'm a heading from the child"),
        React.createElement("h2", {}, "I'm a H2 from the child"),
    ])
);


console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);//Take the object and put it into the page