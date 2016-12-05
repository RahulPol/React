function formatName(user) {
    if (user) {
        return user.firstName + ' ' + user.lastName;
    } else {
        return "Stranger";
    }
}

const user = {
    firstName: "Rahul",
    lastName: "Pol"
}

const element = (
    <div>
        <h1>Hello!</h1>
        <h1>
            Good to see you {formatName(user)}!
        </h1>
    </div>
);


ReactDOM.render(
    element,
    document.getElementById('example')
);

