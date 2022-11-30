import { useState } from "react"
import { useDispatch } from "react-redux"
import { addTask } from "../tasks/taskSlice"
import { v4 as uuid } from 'uuid'
import { ModalForm, FormHeader, Textarea, Form, Input } from "../StyleComp/ModalForm"
import { Button } from "../StyleComp/Buttons"
import { AiOutlineCloseCircle, AiOutlineSave } from "react-icons/ai";
import { IconContext } from "react-icons"

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
              required
            />
            <IconContext.Provider  value={{ className: "icon" }}>
              <AiOutlineCloseCircle size={34} onClick={() => { closeModal(false) }}/>
            </IconContext.Provider>
          </FormHeader>
          <Textarea name="description" 
            placeholder="Contenido de tu nota . . ." 
            onChange={handleChange}
            required 
          />
          <IconContext.Provider  value={{ className: "icon" }}>
            <button><AiOutlineSave size={34}/></button>
          </IconContext.Provider>
          
        </Form>
    </ModalForm>
  )
}

export default TaskForm