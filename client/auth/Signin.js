import React from 'react'
import { signin } from './api-auth'


export default function Signin() {
    const [values, setValues] = useState({
        email: '',
        password: '',
        error: '',
        redirectToReferrer: false
    })

    const clickSubmit = () => {
        const user = {
            email: values.email || undefined,
            password: values.password || undefined
        }

        signin(user).then((data) => {
            if (data.error) {
                setValues({ ...values, error: data.error })
            } else {
                auth.authenticate(data, () => {
                    setValues({ ...values, error: '', redirectToReferrer: true })
                })
            }
        })
    }


    const { from } = props.location.state || {
        from: {
            pathname: '/'
        }
    }
    const { redirectToReferrer } = values
    if (redirectToReferrer) {
        return (<Redirect to={from} />)
    }
    
    return (
        <div>

        </div>
    )
}
