'use client'

import { CVDATA } from "./cvdata"
import { useContext,createContext,useReducer } from "react"
import {CV_DATA_ACTION_TYPES,cvdata_reducer} from './CVdataReducer'

const CVDataContext = createContext()
const CVDataUpdateDispatchContext = createContext()

export function CVDataContextProvider ({children}){


    const [cvdataState,cvDataUpdateDispatcher] = useReducer(cvdata_reducer,CVDATA)

    return (
        <CVDataContext.Provider value={cvdataState}>
            <CVDataUpdateDispatchContext.Provider value={cvDataUpdateDispatcher}>
                {children}
            </CVDataUpdateDispatchContext.Provider>
        </CVDataContext.Provider>
    )
}

export function useCVDataContext(){
    return useContext(CVDataContext)
}

export function useCVDataUpdateDispatchContext(){
    return useContext(CVDataUpdateDispatchContext)
}