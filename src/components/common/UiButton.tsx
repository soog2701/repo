import { ButtonHTMLAttributes } from "react";
// extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> 
interface ButtonPropsType extends ButtonHTMLAttributes<HTMLButtonElement> {
    isLoad?: boolean;
}

const  UiButton = (props:ButtonPropsType) => {
    const  {children, ...attr} = props;

    return (<button {...attr}>{children}</button>)
}

export default UiButton