import { useParams } from "react-router-dom";
import { Navigate } from "react-router-dom";

const DogDetails = ({props}) => {
    const {name} = useParams();
    let neww = props.filter(n => n.name === name)[0]
    if (!neww) {
        return <Navigate to="/dogs" replace />;
      }
    console.log(neww)
    return (
        <div>
            <h1>{neww.name}</h1>
            <h2>{neww.age}</h2>
            <img src={neww.src} height={200} width={200}></img>
            <ul>
                {neww.facts.map(f => <li>{f}</li>)}
            </ul>
        </div>
        
    )
}

export default DogDetails;