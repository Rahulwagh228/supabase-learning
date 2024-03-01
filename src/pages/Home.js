import supabase from "../config/supabaseClient"
import { useEffect, useState } from "react"
import Smoothiecard from "../component/smoothiecard"


const Home = () => {
  const [fetchError, setFetchError] = useState(null)
  const [smoothies, setSmoothies] = useState(null)

  useEffect(() => {
    const fetchsmoothies = async () => {
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
            <Smoothiecard key={smoothies.id} smoothie={smoothies} />       
            ))}
            </div>
        </div>
      )}
    </div>
  )
}

export default Home