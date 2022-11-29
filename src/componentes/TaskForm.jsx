import { useState } from "react"
import { useDispatch } from "react-redux"
import { addTask } from "../tasks/taskSlice"
import { v4 as uuid } from 'uuid'
import { ModalForm, FormHeader, Textarea, Form, Input } from "../StyleComp/ModalForm"
import { Button } from "../StyleComp/Buttons"

const TaskForm = ({ closeModal }) => {

  const dispatch = useDispatch(); //disparara eventos desde el taskSlice

  const [task, setTasks] = useState({
    title: '',
    description: ''
  })

  const handleChange = e => {
    setTasks({...task,[e.target.name]: e.target.value,})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTask({
      ...task,
      id: uuid()
    }))
  }

  return (
    <ModalForm>
        <Form onSubmit={handleSubmit}>
          <FormHeader>
            <Input type="text" name="title" 
              placeholder="Titulo de la tarea . . . " 
              onChange={handleChange} 
            />
            <Button onClick={() => { closeModal(false) }}> x </Button>
          </FormHeader>
          <Textarea name="description" 
            placeholder="Contenido de tu nota . . ." 
            onChange={handleChange} 
          />
          <Button>Guardar</Button>
        </Form>
    </ModalForm>
  )
}

export default TaskForm