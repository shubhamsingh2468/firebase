import {useState, useEffect} from 'react'
import { getFirestore } from 'firebase/firestore';

import { getDocs, addDoc, collection, updateDoc, deleteDoc, doc } from '@firebase/firestore'
import {db} from './firebase.config'

export default function App() {
  const[users, setUsers]=useState([])
  const[name, setName]=useState("")
  const[age,setAge]=useState(0)

  const db = getFirestore(App);




  const UsersCollectionRef = collection(db, "backenddata")

  useEffect(() => {
    const getUsersData = async () => {
      const data = await getDocs(UsersCollectionRef)
      setUsers(data.docs.map((elem) => ({ ...elem.data(), id: elem.id })))
    }

    getUsersData()
}, [])

const CreateUser = async () => {
  await addDoc(UsersCollectionRef, { Name: name, age: age })
  window.location.reload()
}

const increaseAge = async (id, age) => {
  const userDoc = doc(db, "backenddata", id)
  const NewAge = { age: Number(age) + 1 }
  console.log("Updated the Data on System")
  await updateDoc(userDoc, NewAge)
  console.log("Updated the Data on the Server")
  window.location.reload()
}

const deleteUser = async (id) => {
  const userDoc = doc(db, "backenddata", id)
  console.log("Got the Document ID")
  await deleteDoc(userDoc)
  console.log("Deleted the Document")
  window.location.reload()
}


  return (
    <>
    <div className='text-black'>
    <h1 className=' w-screen text-center mt-8 text-4xl font-bold'>React with FireBase</h1>
    <p className='w-screen text-center mt-5'>Fillin the Details to Upload Data to the DataBase</p>
    <div className='text-center mt-16'>
        <span>Enter your Name : </span>
        <input className='mx-4 text-black' type="text" placeholder='Name' onChange={(event) => { setName(event.target.value)}} />
        <span>Enter your Age : </span>
        <input className='mx-4 text-black' type="text" placeholder='Age' onChange={(event) => { setAge(event.target.value) }} />
        <br />
        <button onClick={CreateUser} className='bg-slate-700 m-4 p-2 w-20 rounded-md'>Upload</button>
    </div>
</div>

<div className="text-white mt-20 mx-6">
    <h3 className='text-xl'>
       Users:
    </h3>
    <div className='grid grid-cols-2'>
        {users.map(user => {
            return <div className='hover:animate-pulse m-4 bg-gray-600 w-1/4 rounded-md p-2'>
            <p className='w-auto text-center'>{user.Name}</p>
            <p className='w-auto text-center'>{user.age}</p>
            <button onClick={() => { increaseAge(user.id, user.age) }}>Increase Age</button>
            <button onClick={() => { deleteUser(user.id) }}>Delete User</button>
        </div>
        })}
    </div>
</div>
    
    </>
  )
}