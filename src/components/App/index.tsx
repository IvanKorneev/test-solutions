import './App.sass'
import UsersTable from "../UsersTable/users-table";
import Header from "../Header/header";
import {useState} from "react";
import UsersForm from "../UsersForm/users-form";


const App = () => {
    const [popupIsOpen, setPopupIsOpen] = useState(false);

    const onPopupOpen = () => {
        setPopupIsOpen(!popupIsOpen)
    };
    return (
        <div className='app'>
            <Header onPopupOpen={onPopupOpen}/>
            <UsersTable/>
            {popupIsOpen && <UsersForm onPopupOpen={onPopupOpen}/>}
        </div>
    )
}
export default App;