import { Layout } from "../Layout";
import ListTodos from "../components/ListTodos";


import { TODOS_DB } from "../db";


const HomePage = () => {

    return (

        <Layout title="Home">

            <ListTodos todos={TODOS_DB} />
        </Layout>

    )
}

export default HomePage;