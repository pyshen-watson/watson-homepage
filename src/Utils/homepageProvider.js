import { createContext, useContext } from "react";

const homepageContext = createContext()
const homepageProvider = (props) => {

    return(
        <homepageContext.Provider
            value={{}}
            {...props}
        />
    )
}

const useHomepage = () => {
    return useContext(homepageContext)
}

export {useHomepage, homepageProvider}