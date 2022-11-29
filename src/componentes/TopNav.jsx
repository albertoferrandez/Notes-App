import { useState } from 'react'
import TaskForm from './TaskForm'
import { ContNav, Nav, Title } from '../StyleComp/StyleTopNav'
import { Button } from '../StyleComp/Buttons'
import { FiPlusSquare } from "react-icons/fi";
import { IconContext } from "react-icons";

const TopNav = () => {

  const [openModal, setModal] = useState(false)

  return (
    <Nav>
      <ContNav>
        <div>
          <Title>doIt! /notes</Title>
        </div>
        <div>
          <Button onClick={() => { setModal(true) }}>
            Crear Nota
            <IconContext.Provider value={{ className: "icon" }}>
              <FiPlusSquare />
            </IconContext.Provider>
          </Button>
          {openModal && <TaskForm closeModal={setModal} />}
        </div>
      </ContNav>
    </Nav>
  )
}

export default TopNav