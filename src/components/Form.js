import React from 'react'


class Form extends React.Component {

    state = {
        name: '',
        lastName: '',
        email: '',
    
    }


    // handleInputs = (event) => {
    //     const target = event.target
    //     const value = target.lastName
    //     const email = event.email
    //     const name = target.name
    //     this.setState({
    //         [name]: value
    //     })
    // }


    handleNameChange = (event) => {
        this.setState({
            name: event.target.value,
          
        })
    }

    handleLasNameChange = (event) => {
        this.setState({
            lastName: event.target.value
        })
    }

    handleEmailChange = (event) => {
        this.setState({
            email: event.target.value
        })
    }

    // onSubmit = (event) => {
    //     this.setState((e) => {
    //         event.preventDefault((event))

    //     })
    // }
    
    render () {
        return (
            <div className='form-container'>
                <form>
                    <label>
                        first name:
                    <input
                        name= 'name'
                        type='text'
                        id='name'
                        placeholder='name'
                        autoComplete='off'
                        value={this.state.name}
                        onChange={this.handleNameChange}
                        />
                    </label>

                    <label>
                    Last name: 
                    <input
                        name='lastName'
                        type='text'
                        id='name'
                        placeholder='name'
                        autoComplete='off'
                        value={this.state.lastName}
                        onChange={this.handleLasNameChange}
                        />
                    </label>

                    <label>
                        email:
                        <input
                        name='email'
                        type='text'
                        id='name'
                        placeholder='name'
                        autoComplete='off'
                        value={this.state.email}
                        onChange={this.handleEmailChange}
                        />
                    </label>

                    <button
                        className='submit-form'
                        type='submit'
                    >
                        Submit
                    </button>



                </form>
            </div>
        )
    }
}


export default Form;