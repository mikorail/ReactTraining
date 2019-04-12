import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Login extends Component {
    constructor() {
        super();

        this.state = {
            email: '',
            password: '',
            formErrors: {email: '', password: ''},
            emailValid: false,
            passwordValid: false,
            formValid: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        let target = e.target;
        let value = target.value;
        let name = target.name;

        this.setState({
          [name]: value
        });
        function CheckPassword(inputtxt) 
        { 
        var passw= /^[A-Za-z]\w{7,15}$/;
        if(this.password.value.match(passw)) 
        { 
        alert('Correct, try another...')
        return true;
        }
        else
        { 
        alert('Wrong...!')
        return false;
        }
        }

        
    }
    validate(){
        
    }
    handleSubmit(e) {
        e.preventDefault();

        console.log('Data masuk dengan isi :');
        console.log(this.state);
    }




    render() {
        return (
            <div>
                <p className="hello">Hello!</p>
                
                <form onSubmit={this.handleSubmit} className="FormFields"> 
                
                <div className="FormField">
                    <label className="FormField__Labsel" htmlFor="username"></label>
                    <input type="username" id="username" className="FormField__Input" placeholder="Masukkan username" name="username" value={this.state.username} onChange={this.handleChange} onInput={this.handleSubmit} />
                </div>

                <div className="FormField">
                    <label className="FormField__Label" htmlFor="password"></label>
                    <input type="password" id="password" className="FormField__Input" placeholder="Masukkan password" name="password" value={this.state.password} onChange={this.handleChange} onInput={this.handleSubmit}  />
                </div>

                <div className="FormField">
                    <Link to="/menu/create">
                        <button className="FormField__Button mr-20" onSubmit={this.validate}>Login</button>
                    </Link>
                    {/* <Link to="/" className="FormField__Link">Create an account</Link> */}
                </div>
                </form>
            </div>

            
        );
    }
}

export default Login;