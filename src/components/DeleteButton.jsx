const DeleteButton = ({id, onDelete}) => {
    return <button onClick={() => onDelete(id)} style={{margin: '0px 15px'}}>❌</button>;
}

export default DeleteButton;