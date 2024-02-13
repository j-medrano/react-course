function Modal(props){

  function cancelHandler(){
    props.onCancel();
  }

  function confirmHandler(){
    props.onCancel();
  }
  return <div className="modal">
    <p>Are you sure?</p>

    {/*
    both work the same way with props.onCancel part and the confirmHandler part, props.onCancel goes back to the Todo.js file and uses the function there
  */}
    <button className="btn btn--alt" onClick={props.onCancel}>Cancel</button>
    <button className="btn" onClick={confirmHandler}>Confirm</button>
  </div>
}

export default Modal;