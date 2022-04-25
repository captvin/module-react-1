import React, { Component } from 'react'

class Bmi extends Component {
    constructor(){
        super();
        this.state ={
            // brt: null,
            // tgi: null,
            hasil: null
            // alert: null
        }
    }

    handleSubmit(e){
        e.preventDefault();

        const brt = parseInt(this.refs.brt.value);
        const tgi = parseInt(this.refs.tgi.value);
        var tinggi = tgi/100

        var hasil= brt /(tinggi*2);
        this.setState({hasil})
    }

    renderHasil(){
        const{hasil} =this.state;

        if(this.state.hasil >30){
            return(
                <div>
                    <br />
                    <p className='alert alert-danger'>
                        <h5>Obesitas</h5><br />
                        {hasil}
                    </p>
                </div>
            );
        }

        else if((this.state.hasil >=25) & (this.state.hasil <= 29.9)){
            return(
                <div>
                    <br />
                    <p className='alert alert-warning'>
                        <h5>Kelebihan berat badan</h5><br />
                        {hasil}
                    </p>
                </div>
            );
        }

        else if((this.state.hasil >=18.5) & (this.state.hasil <= 24.9)){
            return(
                <div>
                    <br />
                    <p className='alert alert-success'>
                        <h5>Ideal</h5>
                        {hasil}
                    </p>
                </div>
            );
        }

        else{
            return(
                <div>
                    <br />
                    <p className='alert alert-warning'>
                        <h5>Kekurangan Berat Badan</h5>
                        {hasil}
                    </p>
                </div>
            );
        }
    }

    render() {
        return (
            
            <div>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <label><center><h3>Body Mass Index</h3></center></label>
                    <div className='mb-3'>
                        <h4>Berat Badan</h4>
                        <input type="number" className='form-control' ref="brt" placeholder='Berat (Kg)' />
                    </div>
                    <div className='mb-3'>
                        <h4>Tinggi Badan</h4>
                        <input type="number" className='form-control' ref="tgi" placeholder='Tinggi (Cm)' />
                    </div>
                    <button className='btn btn-primary'> Lihat Hasil</button>
                </form>
                {this.renderHasil()}
            </div>
        
        );
    }
}

export default Bmi