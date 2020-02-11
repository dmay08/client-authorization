import React from 'react'
import { reduxForm, Field } from 'redux-form'

class Signup extends React.Component {
    onSubmit = (formProps) => {
        console.log(formProps)
    }

    render() {

        const { handleSubmit } = this.props // comes from 'redux-form'

        return (
            <form onSubmit={handleSubmit(this.onSubmit)}>
                <fieldset>
                    <label>Email</label>
                    <Field 
                        name="email"
                        type="text"
                        component="input"
                        autoComplete="none"
                    />
                </fieldset>
                <fieldset>
                    <label>Password</label>
                    <Field 
                        name="password"
                        type="password"
                        component="input"
                        autoComplete="none"
                    />
                </fieldset>
                <button>Sign Up!</button>
            </form>
        )
    }
}


// need to name the form ('Signup')
export default reduxForm({ form: 'Signup' })(Signup)