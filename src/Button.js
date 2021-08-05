export const Button = (props) => {
    return (
        <button onClick = {() => props.onClickFunction(props.buttonText)}>+{props.buttonText}</button>
    );
}