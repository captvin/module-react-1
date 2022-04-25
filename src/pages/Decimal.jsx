import React, { Component } from 'react'

class Decimal extends Component {
    constructor(){
        super();
        this.state ={
            Hasil1: 0,
            Hasil2: 0,
            Hasil3: 0
        }
    }

    handleSubmit(e){
        e.preventDefault()
        
        var Hasil1 = parseInt(this.refs.dcm.value, 10).toString(2)
        this.setState({Hasil1})
        var Hasil2 =parseInt(this.refs.dcm.value, 10).toString(8)
        this.setState({Hasil2})
        var Hasil3 =parseInt(this.refs.dcm.value, 10).toString(16)
        this.setState({Hasil3})

    }

    renderHasil(){
        const{Hasil1,Hasil2,Hasil3} =this.state;
        return(
            <div>
                <br />
                <h4>Biner</h4>
                <h5>{Hasil1}</h5>
                <h4>Oktal</h4>
                <h5>{Hasil2}</h5>
                <h4>Hexa</h4>
                <h5>{Hasil3}</h5>
            </div>
        );

    }

    render() {
        return (
            
            <div>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <label><center><h3>Decimal Convertion</h3></center></label>
                    <div className='mb-3'>
                        <h4>Input</h4>
                        <input type="number" className='form-control' ref="dcm" placeholder='decimal' />
                    </div>
                    
                    
                    

                    <button className='btn btn-primary' > Lihat Hasil</button>
                </form>
                {this.renderHasil()}
            </div>
        
        );
    }
}

export default Decimal