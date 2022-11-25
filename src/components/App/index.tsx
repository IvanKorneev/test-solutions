import './App.sass'
import UserTable from "../UsersTable/user-table";
import UsersForm from "../UsersForm/users-form";

const App = () => {


    return (
        <div className='app'>
          <UserTable/>
            <UsersForm/>
        </div>
    )
}
export default App;