import './styles/UserCard.css'

const UserCard = ({user, deleteUser, setInfoUpdate, handleOpenForm}) => {

    const handleDelete= () => {
        deleteUser('/users', user.id)
    }

    const handleEdit= () => {
        setInfoUpdate(user)
        handleOpenForm()
    }

  return (
    <div className="usercard-container">
        <article className="usercard">
            <h3 className="usercard__title">#{`${user.id} ${user.first_name} ${user.last_name}`}</h3>
            <hr />
            <ul className="usercard__group">
                <li className="usercard__list">
                    <span className='usercard__info'>Email: </span>
                    <span  className='usercard__data'>{user.email}</span>
                </li>
                <li className="usercard__list">
                    <span  className='usercard__info'>Birthday: </span>
                    <span className='usercard__data'>{user.birthday}</span>
                </li>
            </ul>
            <button className="usercard__delete" onClick={handleDelete}>Delete</button>
            <button className="usercard__edit" onClick={handleEdit}>Edit</button>
        </article>
    </div>
  )
}

export default UserCard