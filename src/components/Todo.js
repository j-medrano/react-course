import {useState} from 'react';
import Modal from "./Modal";
import Backdrop from "./Backdrop";
function Todo(props) {

  const [modalIsOpen, setModalIsOpen] = useState(false);
    {/*
    This handles when the delete button get clicked
  */}
  function deleteHandler(){
    setModalIsOpen(true);

    {/*
    This is good for debugging 1/16 
  */}

    console.log('CLicked');
    console.log(props.text)
  }

  function closeModalHandler(){
    setModalIsOpen(false);
  }

  return (
    <div className="card">
      <h2>{props.text}</h2>

      <div className="actions">

        <button className="btn" onClick={deleteHandler}>Delete</button>
      </div>

      { modalIsOpen ? <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler} /> : null}
      { modalIsOpen && <Backdrop onCancel={closeModalHandler} />}
    </div>
  );
}
export default Todo;
