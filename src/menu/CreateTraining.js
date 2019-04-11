import React, { Component } from 'react';
// import DatePicker from "react-datepicker";
import CurrencyInput from 'react-currency-input';

class CreateTraining extends Component {
    handleSubmit(event){
        event.preventDefault();
        console.log(this.refs.myinput.getMaskedValue())
    }
    render(){
        return (
            <div className="component">
                <h2>Request Training</h2>
            <form className="FormFields">
                <span className="input input--isao">
                    <label className="FormField__Label" htmlFor="pengelola">Pengelola Training</label>
					<input className="input__field input__field--isao" type="text" id="pengelola" />
					<label className="input__label input__label--isao">
						<span className="input__label-content input__label-content--isao"></span>
					</label>
				</span>
                
                <span className="input input--isao">
                    <label className="FormField__Label" htmlFor="topik">Topik</label>
					<input className="input__field input__field--isao" type="text" id="topik" />
					<label className="input__label input__label--isao">
						<span className="input__label-content input__label-content--isao"></span>
					</label>
				</span>                
                
                <span className="input input--isao">
                    <label className="FormField__Label" htmlFor="lokasi">Lokasi</label>
					<input className="input__field input__field--isao" type="text" id="lokasi" />
					<label className="input__label input__label--isao">
						<span className="input__label-content input__label-content--isao"></span>
					</label>
				</span>                
                
                <span className="input input--isao">
                    <label className="FormField__Label" htmlFor="tgl_mulai">Tanggal Mulai</label>
					<input className="input__field input__field--isao" type="date" id="tgl_mulai" />
					<label className="input__label input__label--isao">
						<span className="input__label-content input__label-content--isao"></span>
					</label>
				</span>
                <span className="input input--isao">
                    <label className="FormField__Label" htmlFor="tgl_akhir">Tanggal Berakhir</label>
					<input className="input__field input__field--isao" type="date" id="tgl_akhir" />
					<label className="input__label input__label--isao">
						<span className="input__label-content input__label-content--isao"></span>
					</label>
				</span>

                <span className="input input--isao">
                    <label className="FormField__Label" htmlFor="harga">Harga</label>
                    <CurrencyInput id="harga"  className="input__field input__field--isao" decimalSeparator="," thousandSeparator="." precision="0" prefix="Rp "/>
					<label className="input__label input__label--isao">
						<span className="input__label-content input__label-content--isao"></span>
					</label>
				</span>                 

                <div className="FormField">
                    <button className="FormField__Button mr-20">submit</button>
                </div>
            </form>
            </div>            
        );
    }
}

export default CreateTraining;