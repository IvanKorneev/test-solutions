export const validateEmail = (value: string) => {
    let error;
    if (!value) {
        error = 'This field is Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
        error = 'Invalid email address';
    }
    return error;
}


export const validateUserName = (value: string) => {
    let error;
    if (!value) {
        error = 'This field is Required ';
    } else if (value.length > 10) {
        error = 'Must be 10 characters or less';
    }
    return error;
}

export const validateUserPhone = (value: string) => {
    let error;
    if (!value) {
        error = 'This field is Required ';
    } else if (!/^[0-9\-\+]{9,15}$/i.test(value)) {
        error = 'Invalid Phone number';
    }

    return error;
}

export const validateUserCompany = (value: string) => {
    let error;
    if (!value) {
        error = 'This field is Required ';
    } else if (value.length > 5) {
        error = 'Must be 5 characters or less';
    }
    return error;
}
export const validateUserWebsite = (value: string) => {
    let error;
    if (!value) {
        error = 'This field is Required ';
    } else if (!/^(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z0-9][a-z0-9-]{0,61}[a-z0-9]$/i.test(value)) {
        error = 'Invalid Website ';
    }

    return error;
}
