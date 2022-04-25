import React, { Component } from 'react'

class Cicilan extends Component {
    constructor(){
        super();
        this.state ={
            hasil: null
        }
    }

    handleSubmit(e){
        e.preventDefault();

        const nmn = parseInt(this.refs.nmn.value);
        const bga = parseInt(this.refs.bga.value);
        const periode =parseInt(this.refs.periode.value);
        

        var hasil= (nmn / periode) +((nmn/periode)*(bga/100));
        this.setState({hasil})
    }

    renderHasil(){
        const{hasil} =this.state;
        return(
            <div>
                <br />
                <p className='alert alert-success'>
                    {hasil}
                </p>
            </div>
        );

        

        // if(this.state.hasil >30){
        //     return(
        //         <div>
        //             <br />
        //             <p className='alert alert-danger'>
        //                 <h5>Obesitas</h5><br />
        //                 {hasil}
        //             </p>
        //         </div>
        //     );
        // }

        // else if((this.state.hasil >=25) & (this.state.hasil <= 29.9)){
        //     return(
        //         <div>
        //             <br />
        //             <p className='alert alert-warning'>
        //                 <h5>Kelebihan berat badan</h5><br />
        //                 {hasil}
        //             </p>
        //         </div>
        //     );
        // }

        // else if((this.state.hasil >=18.5) & (this.state.hasil <= 24.9)){
        //     return(
        //         <div>
        //             <br />
        //             <p className='alert alert-success'>
        //                 <h5>Ideal</h5>
        //                 {hasil}
        //             </p>
        //         </div>
        //     );
        // }

        // else{
        //     return(
        //         <div>
        //             <br />
        //             <p className='alert alert-warning'>
        //                 <h5>Kekurangan Berat Badan</h5>
        //                 {hasil}
        //             </p>
        //         </div>
        //     );
        // }
    }

    render() {
        return (
            
            <div>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <label><center><h3>Cicilan</h3></center></label>
                    <div className='mb-3'>
                        <h4>nominal</h4>
                        <input type="number" className='form-control' ref="nmn" placeholder='Rp.' />
                    </div>
                    <div className='mb-3'>
                        <h4>Bunga</h4>
                        <input type="number" className='form-control' ref="bga" placeholder='%' />
                    </div>
                    <div className='mb-3'>
                        <h4>Periode</h4>
                        <input type="number" className='form-control' ref='periode' placeholder='Bulan' />
                    </div>

                    <button className='btn btn-primary' > Lihat Hasil</button>
                </form>
                {this.renderHasil()}
            </div>
        
        );
    }
}

export default Cicilan