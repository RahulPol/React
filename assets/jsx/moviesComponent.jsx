var Movie = React.createClass({
    render: function() {
        return (
            <div>
                <h3>{this.props.title}</h3>
                <h4>{this.props.genre}</h4>
            </div>
        );
    }
});

ReactDOM.render(
    <div>
        <Movie title="Avatar" genre="action" />
        <Movie title="The Notebook" genre="romance" />
        <Movie title="Captain America" genre="action" />
    </div>,
    document.getElementById('root'));
