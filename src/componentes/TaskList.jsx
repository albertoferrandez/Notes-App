import { useState } from "react";
import { useSelector, useDispatch } from "react-redux"
import { Button } from "../StyleComp/Buttons";
import { MainNotes, Container, Note, NoteTitle, NoteDescription } from "../StyleComp/MainNotes";
import { Form, FormHeader, Input, ModalForm, Textarea } from "../StyleComp/ModalForm";
import { deleteTask, updateTask } from "../tasks/taskSlice";
import { MdDeleteForever, MdEdit } from "react-icons/md";
import { IconContext } from "react-icons";

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
                  <MdDeleteForever size={24} onClick={() => handleDelete(tareas.id)}/>
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
                <Button onClick={() => { setModal(false) }}> x </Button>
              </FormHeader>
              <Textarea name="description" placeholder="description" value={task.description} onChange={handleChange} />
              <Button>Guardar</Button>
            </Form>
          </ModalForm>
        }
      </Container>
    </MainNotes>
  )
}

export default TaskList