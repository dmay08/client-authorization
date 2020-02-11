import React from 'react'
import { reduxForm, Field } from 'redux-form'

class Signup extends React.Component {
    render() {
        return (
            <form>
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
            </form>
        )
    }
}


// need to name the form ('Signup')
export default reduxForm({ form: 'Signup' })(Signup)