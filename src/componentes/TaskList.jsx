import { useState } from "react";
import { useSelector, useDispatch } from "react-redux"
import { MainNotes, Container, Note, NoteTitle, NoteDescription } from "../StyleComp/MainNotes";
import { Form, FormHeader, Input, ModalForm, Textarea } from "../StyleComp/ModalForm";
import { deleteTask, updateTask } from "../tasks/taskSlice";
import { MdDeleteForever, MdEdit } from "react-icons/md";
import { IconContext } from "react-icons";
import { AiOutlineCloseCircle, AiOutlineSave } from "react-icons/ai";

const TaskList = () => {

  const dispatch = useDispatch();
  const tareas = useSelector(state => state.tasks)

  const [openModal, setModal] = useState(false)

  const handleDelete = (id) => {
    dispatch(deleteTask(id))
  }

  const [task, setTask] = useState({
    title: "",
    description: ""
  })

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value })
  }

  const handleTasktoEdit = (id) => {
    setModal(true);
    setTask(tareas.find((tareas) => tareas.id === id))
  }

  const handleEdit = (e) => {
    e.preventDefault();
    dispatch(updateTask(task))
  }

  return (
    <MainNotes>
      <Container>
        {
          tareas.map(tareas => (
            <Note key={tareas.id} >
              <FormHeader>
                <NoteTitle>{tareas.title}</NoteTitle>
                <div>
                  <IconContext.Provider value={{ className: "icon" }}>
                    <MdDeleteForever size={24} onClick={() => handleDelete(tareas.id)} />
                    <MdEdit size={24} onClick={() => handleTasktoEdit(tareas.id)} />
                  </IconContext.Provider>
                </div>
              </FormHeader>
              <NoteDescription>{tareas.description}</NoteDescription>
            </Note>
          ))
        }

        {
          openModal &&
          <ModalForm>
            <Form onSubmit={handleEdit}>
              <FormHeader>
                <Input type="text" name="title" placeholder="titulo" value={task.title} onChange={handleChange} />
                <IconContext.Provider value={{ className: "icon" }}>
                  <AiOutlineCloseCircle size={34} onClick={() => { setModal(false) }} />
                </IconContext.Provider>
              </FormHeader>
              <Textarea name="description" placeholder="description" value={task.description} onChange={handleChange} />
              <IconContext.Provider value={{ className: "icon" }}>
                <button><AiOutlineSave size={34} /></button>
              </IconContext.Provider>
            </Form>
          </ModalForm>
        }
      </Container>
    </MainNotes>
  )
}

export default TaskList

