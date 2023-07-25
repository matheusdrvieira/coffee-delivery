import { createContext, useEffect, useState } from "react"
import { ContextProviderProps, OrderContextType, OrderProps } from "../interfaces"

export const Context = createContext({} as OrderContextType)

export function ContextProvider({ children }: ContextProviderProps) {
    const [order, setOrder] = useState<OrderProps>({ coffees: [], address: undefined, paymentMethod: null });

    useEffect(() => {
        async function fetchCoffee() {
            const response = JSON.parse(localStorage.getItem('@deliveryCofee:Order')!);
            if (response) {
                setOrder(response)
            }
        }
        fetchCoffee()
    }, [])

    return (
        <Context.Provider value={{ order, setOrder }}>
            {children}
        </Context.Provider>
    )
}