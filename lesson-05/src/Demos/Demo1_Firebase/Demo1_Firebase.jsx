
// CRUD - Create, Read, Update, Delete

import { useState } from "react"
import db from "../src/firebase"

import {
    query,
    onSnapshot,
    collection,
    doc,
    addDoc,
    updateDoc,
    deleteDoc
} from "firebase/firestore"



function Demo1_Firebase() {

    const [users, setUsers] = useState([])
    const [user, setUser] = useState({})

    const getAllUsers = () => {
        const col = collection(db, "users")
        const q = query(col)
        onSnapshot(q, (querySnapshot) => {
            const newUsers = querySnapshot.docs.map((user) => {
                return { id: user.id, ...user.data() }
            })
            setUsers(newUsers)
        })
    }

    const getUserById = () => {
        const id = "RCVEoQXvS4jBigqXqx0n"
        const userDoc = doc(db, "users", id)
        const q = query(userDoc)
        onSnapshot(q, (doc) => {
            console.log(doc.id)
            console.log(doc.data())
            setUser({ id: doc.id, ...doc.data() })
        })

    }

    const add = async () => {
        const col = collection(db, "users")
        await addDoc(col, {name: "Ron", age: 30, city: "Haifa"})
        console.log("More code....")
    }

    const update = async () => {
        const id = "RCVEoQXvS4jBigqXqx0n"
        const userDoc = doc(db, "users", id)
        updateDoc(userDoc, {age: 100})
    }

    const remove = async () => {
        const id = "RCVEoQXvS4jBigqXqx0n"
        const userDoc = doc(db, "users", id)
        deleteDoc(userDoc)
    }


    return (
        <div>Demo1_Firebase


            <h1>User Data:</h1>
            name: {user.name}
            age: {user.age}


            <table border={1}>
                <tbody>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>City</th>
                    </tr>

                    {
                        users.map((user) => {
                            return <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.age}</td>
                                <td>{user.city}</td>
                            </tr>
                        })
                    }

                </tbody>
            </table>


            <button onClick={getAllUsers}>Get</button>
            <button onClick={getUserById}>Get By Id</button>
            <button onClick={add}>Add</button>
            <button onClick={update}>Update</button>
            <button onClick={remove}>Delete</button>

        </div>
    )
}

export default Demo1_Firebase