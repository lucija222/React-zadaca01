const User = ({name, lastName, age, userText}) => {
    return (
        <>
            <p>
                Hey there, I'm {name} {lastName} and I'm {age} years old. {userText}
            </p>
        </>
    );
}

export default User;