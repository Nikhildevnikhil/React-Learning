import { useParams } from "react-router-dom";
function User(){
    const {userId} = useParams();
    return(
        <div className="bg-orange-200 text-center">User : {userId}</div>
    );
}
export default User;