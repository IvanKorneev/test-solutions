import * as React from 'react';
import {
    Formik,
    Form,
    Field,
} from 'formik';
import {
    validateEmail,
    validateUserCompany,
    validateUserName,
    validateUserPhone,
    validateUserWebsite
} from "./input-form-validation";
import Loader from "../Loader/loader";
import Error from "../Error/error";
import {useTypedSelector} from "../Hooks/useTypedSelector";
import {useActions} from "../Hooks/useActions";
import CloseIcon from '@mui/icons-material/Close';
import './users-form.sass'

interface MyFormValues {
    name: string;
    email: string;
    phone: string;
    company: string;
    website: string
}
interface UserFormProps {
    onPopupOpen: () => void
}


export const UserForm = ({onPopupOpen}:UserFormProps) => {
    const initialValues: MyFormValues = {name: '', email: '', phone: '', company: '', website: ''};
    const {error, loading} = useTypedSelector(state => state.user);
    const {postUser} = useActions();

    if (loading) {
        return <Loader/>
    }
    if (error) {
        return <Error/>
    }
    return (
        <div className='form-container'>
            <div className='form-header'>
                <h1>Fill the form</h1>
                <CloseIcon onClick={onPopupOpen}/>
            </div>

            <Formik
                initialValues={initialValues}
                onSubmit={(values, actions) => {
                    postUser({
                        'id': Date.now() + Math.random(),
                        'name': values.name,
                        'email': values.email,
                        'phone': values.phone,
                        'company': values.company,
                        'website': values.website,
                    });
                    actions.setSubmitting(false);
                    actions.resetForm();
                    onPopupOpen();
                }}
            >
                {({errors, touched, isValidating}) => (
                    <Form>
                        <div className='input-container'>
                            <label htmlFor="name">Name</label>
                            <Field
                                id="name"
                                name="name"
                                placeholder="name"
                                validate={validateUserName}
                            />
                            {touched.name && errors.name && <div className='error-message'>{errors.name}</div>}
                        </div>
                        <div className='input-container'>
                            <label htmlFor="email">Email</label>
                            <Field
                                id="email"
                                name="email"
                                placeholder="email"
                                validate={validateEmail}
                            />
                            {errors.email && touched.email && <div className='error-message'>{errors.email}</div>}
                        </div>
                        <div className='input-container'>
                            <label htmlFor="phone">Phone</label>
                            <Field id="phone"
                                   name="phone"
                                   placeholder="phone"
                                   validate={validateUserPhone}
                            />
                            {errors.phone && touched.phone && <div className='error-message'>{errors.phone}</div>}
                        </div>
                        <div className='input-container'>
                            <label htmlFor="company">Company</label>
                            <Field id="company"
                                   name="company"
                                   placeholder="company"
                                   validate={validateUserCompany}
                            />
                            {errors.company && touched.company && <div className='error-message'>{errors.company}</div>}
                        </div>
                        <div className='input-container'>
                            <label htmlFor="website">Website</label>
                            <Field id="website"
                                   name="website"
                                   placeholder="website"
                                   validate={validateUserWebsite}
                            />
                            {errors.website && touched.website && <div className='error-message'>{errors.website}</div>}
                        </div>
                        <button type="submit" className='submit-button'>Submit</button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};
export default UserForm;