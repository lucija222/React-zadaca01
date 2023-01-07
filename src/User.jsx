const User = ({name, lastName, age}) => {
    return (
        <div>
            <p>
                Hey there, I'm {name} {lastName} and I'm {age} years old.
            </p>
        </div>
    );
}

export default User;