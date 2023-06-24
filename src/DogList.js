import { Link } from "react-router-dom";
const DogList = ({props}) => {
    console.log(props)
    return (
        <div>
           {props.map(p => (
            <div>

                <h1>{p.name}</h1>
                <Link exact to={`/dogs/${p.name}`}>Check out: {p.name}</Link>
            </div>
            ))}
             
        </div>
        
    )
}
export default DogList;