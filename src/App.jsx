import Footer from './componentes/Footer'
import TaskList from './componentes/TaskList'
import TopNav from './componentes/TopNav'
import { LayoutTheme } from './context/ThemeContext'
import Layout from './StyleComp/Theme'


const App = () => {

    return (
        <LayoutTheme>
            <Layout>
                <TopNav />
                    <TaskList />
                <Footer />
            </Layout>
        </LayoutTheme>
    )
}

export default App
