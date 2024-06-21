import { useEffect, useState } from "react";


const useUser = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('https://thawing-scrubland-41721.herokuapp.com/users')
            .then(res => res.json())
            .then(data => setUsers(data));

    },[])

    return {users,setUsers};
};

export default useUser;