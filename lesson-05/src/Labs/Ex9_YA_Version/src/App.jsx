
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { onSnapshot, collection, query, addDoc, deleteDoc, doc } from "firebase/firestore"
import db from "./firebase"
import Cars from "./components/Cars"
import AddCar from "./components/AddCar"

function App() {

  const dispatch = useDispatch()

  const cars = useSelector(cars => cars)
  const saveChanges = () => {

    const col = collection(db, "cars")


    cars.forEach((car) => {
      switch (car.status) {
        case 'new':
          const newCar = { model: car.model, year: car.year, color: car.color }
          addDoc(col, newCar)
          break;

        case 'deleted':
          deleteDoc(doc(db, "cars", car.id))
      }
    })

  }



  useEffect(() => {

    const col = collection(db, "cars")
    const q = query(col)

    onSnapshot(q, (snapshot) => {
      const allCars = snapshot.docs.map((doc) => {
        return { id: doc.id, ...doc.data(), status: "unchanged" }
      })
      dispatch({ type: "LOAD_CARS", payload: allCars })
    })

  }, [])
  return (
    <div>

      <AddCar />
      <Cars />

      <button onClick={saveChanges}>Save Changes</button>

    </div>
  )
}

export default App