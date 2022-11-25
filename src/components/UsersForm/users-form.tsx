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

interface MyFormValues {
    name: string;
    email: string;
    phone: string;
    company: string;
    website: string

}



export const UserForm: React.FC<{}> = () => {
    const initialValues: MyFormValues = {name: '', email: '', phone: '', company: '', website: ''};
    return (
        <div>
            <h1>My Example</h1>
            <Formik
                initialValues={initialValues}
                onSubmit={(values, actions) => {
                    console.log({values, actions});
                    actions.setSubmitting(false);
                }}
            >
                {({ errors, touched, isValidating }) => (
                <Form>
                    <label htmlFor="Name">Name</label>
                    <Field
                        id="Name"
                        name="Name"
                        placeholder="Name"
                        validate={validateUserName}
                    />
                    {touched.name && errors.name && <div>{errors.name}</div>}

                    <label htmlFor="email">Email</label>
                    <Field
                        id="email"
                        name="email"
                        placeholder="email"
                        validate={validateEmail}
                    />
                    {errors.email && touched.email && <div>{errors.email}</div>}

                    <label htmlFor="phone">Phone</label>
                    <Field id="phone"
                           name="phone"
                           placeholder="phone"
                           validate={validateUserPhone}
                    />
                    {errors.phone && touched.phone && <div>{errors.phone}</div>}

                    <label htmlFor="company">Company</label>
                    <Field id="company"
                           name="company"
                           placeholder="company"
                           validate={validateUserCompany}
                    />
                    {errors.company && touched.company && <div>{errors.company}</div>}

                    <label htmlFor="website">Website</label>
                    <Field id="website"
                           name="website"
                           placeholder="website"
                           validate={validateUserWebsite}
                    />
                    {errors.website && touched.website && <div>{errors.website}</div>}
                    <button type="submit">Submit</button>
                </Form>
                    )}
            </Formik>
        </div>
    );
};
export default UserForm;