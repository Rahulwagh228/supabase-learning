import { Link } from "react-router-dom"
import supabase from '../config/supabaseClient'

const smoothiecard = ({ smoothie, onDelete }) => {

    const delethandle = async () =>{
        // e.preventDefault();

        const { data, error} = await supabase
        .from('smoothies')
        .delete()
        .eq("id", smoothie.id);


        onDelete(smoothie.id)
        // parser is not passing thorugh this  
        if(error){
            console.log(error)
        }
        if(data){
            console.log(data)
            // onDelete(smoothie.id)
        }
    }

    return (
        <div className="smoothie-card">
            <h3>{smoothie.title} </h3>
            <p>{smoothie.method}</p>
            <div className="rating">{smoothie.rating}</div>
            <div className="button">
                <Link to={'/' + smoothie.id}>
                    <i className="material-icons">edit</i>
                </Link>
                <i className="material-icons" onClick={delethandle}>delete</i>

            </div>
        </div>
    )

}
export default smoothiecard
