//MyForm component use useReducer hook to manage form state
import React, { useReducer } from 'react'
function MyForm() {
  //initial state
  const initialState = {
    name: '',
    email: '',
    password: ''
  }
    //reducer function
    const reducer = (state, action) => {
        switch (action.type) {
            case 'SET_NAME':
                return { ...state, name: action.payload }
            case 'SET_EMAIL':
                return { ...state, email: action.payload }
            case 'SET_PASSWORD':
                return { ...state, password: action.payload }
            default:
                return state
        }
    }
    //useReducer hook
    const [state, dispatch] = useReducer(reducer, initialState)
    //Form using react-bootstrap
    return (
        <div className="container mt-5">
            <h1>My Form</h1>
            <Form>
                <Form.Group className="mb-3" controlId="formName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter name"
                        value={state.name}
                        onChange={(e) => dispatch({ type: 'SET_NAME', payload: e.target.value })}
                    />  
                </Form.Group>
                <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter email"
                        value={state.email}
                        onChange={(e) => dispatch({ type: 'SET_EMAIL', payload: e.target.value })}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        value={state.password}  
                        onChange={(e) => dispatch({ type: 'SET_PASSWORD', payload: e.target.value })}
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default MyForm