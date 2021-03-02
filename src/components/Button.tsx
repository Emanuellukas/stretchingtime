interface ButtonProps {
    color: string;
}

export default function Button (props: ButtonProps) {
    return (
        <button type="button" style={{color: props.color}}>
            Botão
            <strong>{props.color}</strong>
        </button>
    )
}