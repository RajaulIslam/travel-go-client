import { useEffect } from "react";
import { useState } from "react";

const useElements = () => {
    const [elements, setElements] = useState([]);
    useEffect(() => {
        fetch('https://thawing-scrubland-41721.herokuapp.com/elements')
            .then(res => res.json())
            .then(data => setElements(data));

    },[])

    return {elements,setElements};


}
export default useElements;
