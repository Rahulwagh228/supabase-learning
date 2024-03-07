import supabase from "../config/supabaseClient"
import { useEffect, useState } from "react"
import Smoothiecard from "../component/smoothiecard"


const Home = () => {
  const [fetchError, setFetchError] = useState(null)
  const [smoothies, setSmoothies] = useState(null)

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
  }, [])



  return (
    <div className="page home">
      {fetchError && (<p>{fetchError}</p>)}
      {smoothies && (
        <div className="smoothies">
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