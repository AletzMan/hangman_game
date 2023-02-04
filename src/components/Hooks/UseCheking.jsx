import { useState } from "react";


function useCheking() {
    const [selectedLetter, setSelectedLetter] = useState('');
    
    return({
        selectedLetter,
        setSelectedLetter
    })
}


export { useCheking };