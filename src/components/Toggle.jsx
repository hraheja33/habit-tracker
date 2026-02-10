const ToggleButton = ({id, toggle}) => {
    return <button onClick={() => toggle(id)}>✅</button>;
}

export default ToggleButton;