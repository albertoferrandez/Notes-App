import { createSlice } from '@reduxjs/toolkit'

const initialState = [
    {
        id: "1",
        title: "Task 1",
        description: "Task 1 description",
        completado: false
    },
    {
        id: "2",
        title: "Task 2",
        description: "Task 2 description",
        completado: false
    },
]

export const taskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        //funcion para añadir tarea al initialstate a la que acceder desde cualquier lugar
        addTask: (state, action) => { 
            //añade al arrey del initialState el payload que es lo que recibimos del formulario
            state.push(action.payload) 
        },

        deleteTask: (state, action) => {
            //variable que encuentra el id que ha sido seleccionado
            const taskfound = state.find(tareas => tareas.id === action.payload) 
            //elimina del estado el indice del array que ha encontrado
            if(taskfound){
                state.splice(state.indexOf(taskfound),1)
            }
        },

        updateTask: (state,action) => {
            state.map((tareas) => {
                if(tareas.id === action.payload.id){
                    tareas.title = action.payload.title;
                    tareas.description = action.payload.description;
                }
            })
        }
    }
})

export const { addTask, deleteTask, updateTask } = taskSlice.actions
export default taskSlice.reducer //solo exporta el reducer 