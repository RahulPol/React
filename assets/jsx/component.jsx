
var Comment = React.createClass({
    render: function() {
        return ()
    }
});

ReactDOM.render(
    <div>
        <Movie title="Avatar" genre="action" />
        <Movie title="The Notebook" genre="romance" />
        <Movie title="Captain America" genre="action" />
    </div>,
    document.getElementById('root'));
