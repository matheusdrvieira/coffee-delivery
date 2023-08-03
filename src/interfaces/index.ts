import { ButtonHTMLAttributes, InputHTMLAttributes, ReactNode } from "react";
import { formData } from "../screens/order";

export interface ContextProviderProps {
    children: ReactNode
}

export interface OrderContextType {
    order: OrderProps;
    setOrder: React.Dispatch<React.SetStateAction<OrderProps>>;
}

export interface OrderProps {
    coffees: CoffeeProps[];
    address?: formData;
    paymentMethod: string | null;
}

export interface CoffeeProps {
    id: number;
    image: string;
    title: string;
    price: number;
    quantity: number
}

export interface CardCoffeeProps {
    id: number;
    image: string;
    tags: TagsProps[];
    title: string;
    description: string;
    price: number;
    quantity: number
}

export interface TagsProps {
    id: number;
    name: string;
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    icon: ReactNode
    empty?: number
    background?: string
}

export interface ButtonPaymentMethodProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    icon: ReactNode
    title: string
    isSelected: boolean
}

export interface InputNumberProps extends InputHTMLAttributes<HTMLInputElement> {
    count: number;
    onCountChange: (count: number) => void;
}

export interface IconProps {
    icon: ReactNode
    color: any
}

export interface AddressProps {
    city: string;
    province: string;
    country: string;
    postCode: string;
    neighbourhood: string;
    street: string;
    uf?: string;
    lat: number;
    lng: string;
}