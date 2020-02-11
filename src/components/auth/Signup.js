import React from 'react'
import { reduxForm, Field } from 'redux-form'
import { connect } from 'react-redux'
import * as actions from '../../actions'
import { compose } from 'redux' // after importing this > redo 'export default'

class Signup extends React.Component {
    onSubmit = (formProps) => {         // formProps = { email, password }
        this.props.signup(formProps)    // this.props.signup >> comes from connect(null, *ACTIONS*) >> now all <index.js> actions are available as props 
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


// export default reduxForm({ form: 'Signup' })(Signup)
export default compose(
    connect(null, actions),
    reduxForm({ form: 'signup' })
)(Signup)