import PropTypes from 'prop-types';
import User from './User';


const Users = (props) => {

    const userText = props.userText

    return (
        <>
            {
                props.users.map((user) => {
                    return <User name={user.name} lastName={user.lastName} age={user.age} userText={userText}/>
                })
            }
        </>
    );
}

export default Users;

Users.propTypes = {
    users: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string,
            lastName: PropTypes.string,
            age: PropTypes.number
        })
    )
}