import React, { Component } from 'react';
// import { NavLink, Link } from 'react-router-dom';

class Register extends Component {
    constructor() {
        super();

        this.state = {
            username: '',
            password: '',
            name: '',
            alamat: '',
            noKTP: '',
            noHP: '',
            jenisKelamin: "laki",
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleOptionChange = this.handleOptionChange.bind(this);
    }

    handleChange(e) {
        let target = e.target;
        let value = target.value;
        let name = target.name;

        this.setState({
          [name]: value
        });
    }

    handleOptionChange(e) {
      this.setState({
        jenisKelamin: e.target.value
      });
    };

    handleSubmit(e) {
        e.preventDefault();

        console.log('Data masuk dengan isi seperti ini:');
        console.log(this.state);
    }

    render() {
        return (            
            <form onSubmit={this.handleSubmit} className="FormFields">
            {/* Nama lengkap */}
            <div className="FormField">
                <label className="FormField__Label" htmlFor="name">Nama Lengkap</label>
                <input type="text" id="name" className="FormField__Input" placeholder="Masukkan Nama Lengkap" name="name" value={this.state.name} onChange={this.handleChange} />
            </div>
            {/* Alamat */}
            <div className="FormField">
                <label className="FormField__Label" htmlFor="alamat">Alamat</label>
                <input type="text" id="alamat" className="FormField__Input" placeholder="Masukkan Alamat" name="alamat" value={this.state.alamat} onChange={this.handleChange}/>
            </div>
            {/* No ktp */}
            <div className="FormField">
                <label className="FormField__Label" htmlFor="noKTP">No KTP</label>
                <input type="number" id="noKTP" className="FormField__Input" placeholder="Masukkan No KTP" name="noKTP" value={this.state.noKTP} onChange={this.handleChange}/>
            </div>
            {/* No Hp */}
            <div className="FormField">
                <label className="FormField__Label" htmlFor="noHP">No HP</label>
                <input type="number" id="noHP" className="FormField__Input" placeholder="Masukkan No HP" name="noHP" value={this.state.noHP} onChange={this.handleChange}/>
            </div>
            {/* Jenis Kelamin */}
            <div className="FormField">
                <label className="FormField__Label" htmlFor="jenisKelamin">Jenis Kelamin</label>
                <div className="FormField__Radio">
                <input
                    className="FormField__Radio--laki"
                    type="radio"
                    name="jenisKelamin"
                    value="laki"
                    checked={this.state.jenisKelamin === "laki"}
                    onChange={this.handleOptionChange}
                />
                Laki-laki
                <input
                    className="FormField__Radio--perempuan"
                    type="radio"
                    name="jenisKelamin"
                    value="perempuan"
                    checked={this.state.jenisKelamin === "perempuan"}
                    onChange={this.handleOptionChange}
                />
                Perempuan
                </div>
            </div>
            {/* Username */}
            <div className="FormField">
                <label className="FormField__Label" htmlFor="username">Username</label>
                <input type="text" id="username" className="FormField__Input" placeholder="Masukkan Username" name="username" value={this.state.username} onChange={this.handleChange} />
            </div>
            {/* Password */}
            <div className="FormField">
                <label className="FormField__Label" htmlFor="password">Password</label>
                <input type="password" id="password" className="FormField__Input" placeholder="Enter your password" name="password" value={this.state.password} onChange={this.handleChange} />
            </div>
            {/* Submit */}
            <div className="FormField">
                {/* <Link to="/menu/create"> */}
                    <button className="FormField__Button mr-20">Submit</button> 
                {/* </Link> */}
                {/* <Link to="/login" className="FormField__Link">I'm already member</Link> */}
            </div>
            </form>
        );
    }
}
export default Register;