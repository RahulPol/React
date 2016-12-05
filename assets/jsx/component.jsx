var Welcome = React.createClass({
    render: function () {
        return (
            <div>
                <h2> This is my first component. </h2>
                <p>Sample Text</p>
            </div>
        );
    }
});

ReactDOM.render(<div><Welcome /></div>, document.getElementById('root'));
