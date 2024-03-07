import supabase from "../config/supabaseClient"
import { useEffect, useState } from "react"
import Smoothiecard from "../component/smoothiecard"


const Home = () => {
  const [fetchError, setFetchError] = useState(null)
  const [smoothies, setSmoothies] = useState(null)
  const  [orderBy, setOrderBy] = useState('created_at')

  // Updatinf the local state 
  const handleDelete = (id) => {
    setSmoothies(prevSmoothies => {
      return prevSmoothies.filter(sm => sm.id !== id)
    })

  }
  useEffect(() => {
    const fetchsmoothies = async () => {


      // DAta fetching krtohyy re nana 
      const { data, error } = await supabase
        .from('smoothies')
        .select()
        .order(orderBy, {ascending:false})


        // parsar not comming
      if (error) {
        setFetchError('smoothies not fetch')
        setSmoothies(null)
        console.log(error)
      }
      if (data) {
        setSmoothies(data)
        setFetchError(null)
      }
    }
    fetchsmoothies()
  }, [orderBy])



  return (
    <div className="page home">
      {fetchError && (<p>{fetchError}</p>)}
      {smoothies && (
        <div className="smoothies">
          <div className="order-by">
            <p>Order by:</p>
            <button onClick={()=>setOrderBy('created_at')}>Time Created</button>
            <button onClick={()=>setOrderBy('title')}>Title</button>
            <button onClick={()=>setOrderBy('rating')}>Rating</button>
            {orderBy}
          </div>
          <div className="smoothie-grid">

            {smoothies.map((smoothies) => (
              <Smoothiecard key={smoothies.id} smoothie={smoothies} onDelete= {handleDelete} />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default Home