import React, { Component } from 'react'

class ContactUs extends Component {

    state = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        firstNameErr: '',
        lastNameErr: '',
        emailErr: '',
        phoneErr: ''
    }

    handleChange = (e) => {
        const { name, value } = e.target
        this.setState({ [name]: value })
        console.log(this.state)
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.validateForm()
    }

    // falsy values - 0, '', undefined, null, NaN, false


    validateForm = () => {
        let firstNameErr = '';
        let lastNameErr = '';
        let emailErr = '';
        let phoneErr = '';

        // firstName 
        if (this.state.firstName.length < 4) {
            firstNameErr = 'firstname should be atleast 4 char'
        }

        //lastName
        if (this.state.lastName.length < 1) {
            lastNameErr = 'lastName should be atleast 1 char'
        }

        //email 
        if (!this.state.email.includes('@')) {
            emailErr = 'Enter a valid Email'
        }

        //phone
        if (this.state.phone.length != 10) {
            phoneErr = 'Enter valid phone number'
        }

        if (firstNameErr || lastNameErr || emailErr || phoneErr) {
            this.setState({ firstNameErr, lastNameErr, emailErr, phoneErr })
        } else {
            this.setState({ firstNameErr, lastNameErr, emailErr, phoneErr })
        }
    }

    // validation
    // FirstName > 4
    // lastName > 1
    // email include '@'
    // phone 10 digits

    render() {
        return (
            <>
                <h2>ContactUs</h2>
                <div className='row'>
                    <div className='col-md-4'></div>
                    <div className='col-md-4'>
                        <h2>ContactUs</h2>
                        <form>
                            <div>
                                <input type="text"
                                    name='firstName'
                                    placeholder='Enter FirstName'
                                    className='form-control mt-2'
                                    onChange={(e) => { this.handleChange(e) }}
                                />
                                <p className='text-danger'>{this.state.firstNameErr}</p>
                            </div>
                            <div>
                                <input type="text"
                                    name='lastName'
                                    placeholder='Enter lastName'
                                    className='form-control mt-2'
                                    onChange={(e) => { this.handleChange(e) }}
                                />
                                <p className='text-danger'>{this.state.lastNameErr}</p>

                            </div>
                            <div>
                                <input type="text"
                                    name='email'
                                    placeholder='Enter email'
                                    className='form-control mt-2'
                                    onChange={(e) => { this.handleChange(e) }}
                                />
                                <p className='text-danger'>{this.state.emailErr}</p>

                            </div>
                            <div>
                                <input type="text"
                                    name='phone'
                                    placeholder='Enter phone'
                                    className='form-control mt-2'
                                    onChange={(e) => { this.handleChange(e) }}
                                />
                                <p className='text-danger'>{this.state.phoneErr}</p>

                            </div>
                            <div className='text-center mt-2'>
                                <button className='btn btn-primary'
                                    onClick={(e) => this.handleSubmit(e)}
                                >Submit</button>
                            </div>

                        </form>
                    </div>
                    <div className='col-md-4'></div>
                </div>
            </>
        )
    }
}

export default ContactUs