import PropTypes from 'prop-types';
import User from './User';


const Users = ({ users }) => {

    return (
        <div>
            {
                users.map((user) => {
                    return <User name={user.name} lastName={user.lastName} age={user.age} />
                })
            }
        </div>
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