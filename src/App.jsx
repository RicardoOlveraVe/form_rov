
import { useEffect, useState } from 'react'
import './App.css'
import useFetch from './hooks/useFetch'
import FormUser from './components/FormUser'
import UserCard from './components/UserCard'

function App() {

  const [infoUpdate, setInfoUpdate] = useState()
  const [closeForm, setCloseForm] = useState(true)

  const baseURL = 'https://users-crud.academlo.tech'

  const [ users, getUsers, createUser, deleteUser, updateUser ] = useFetch(baseURL, setCloseForm)

  useEffect(() => {
    getUsers('/users')
  }, [])

  console.log(users)

  const handleOpenForm = () => {
    setCloseForm(false)
  }
  return (
    <div>
      <header>
        <h1>Usuarios</h1>
        <button onClick={handleOpenForm} className='form__btn'>Add New User</button>
      </header>
      
      <FormUser 
        createUser={createUser}
        infoUpdate={infoUpdate}
        updateUser={updateUser}
        setInfoUpdate={setInfoUpdate}
        closeForm={closeForm}
        setCloseForm={setCloseForm}
      />
      <div className='usercard__general'>
        {
          users?.map(user => (
            
              <UserCard 
                key= {user.id}
                user={user}
                deleteUser={deleteUser}
                setInfoUpdate={setInfoUpdate}
                handleOpenForm={handleOpenForm}
              />
            
          ))
        }
      </div>
    </div>
  )
}

export default App
