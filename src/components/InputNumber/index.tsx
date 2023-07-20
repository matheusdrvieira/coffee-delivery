import { InputHTMLAttributes } from "react";
import { Container } from "./style";
import { Minus, Plus } from "phosphor-react";

interface InputNumberProps extends InputHTMLAttributes<HTMLInputElement> {
    count: number;
    onCountChange: (count: number) => void;
}

export function InputNumber(props: InputNumberProps) {
    const { count, onCountChange } = props;

    const handleCountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newCount = parseInt(e.target.value, 10);
        onCountChange(newCount);
    };

    const handleMinusClick = () => {
        const newCount = count <= 0 ? 0 : count - 1;
        onCountChange(newCount);
    };

    const handlePlusClick = () => {
        const newCount = count + 1;
        onCountChange(newCount);
    };

    return (
        <Container>
            <Minus size={20} onClick={handleMinusClick} />
            <input type="number" value={count} onChange={handleCountChange} />
            <Plus size={20} onClick={handlePlusClick} />
        </Container>
    )
}