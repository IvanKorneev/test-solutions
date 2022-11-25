import './App.sass'
import UsersTable from "../UsersTable/users-table";
import UsersForm from "../UsersForm/users-form";
import Header from "../Header/header";

const App = () => {


    return (
        <div className='app'>
            <Header/>
          <UsersTable/>
            <UsersForm/>
        </div>
    )
}
export default App;