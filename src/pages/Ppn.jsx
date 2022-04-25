import React, { Component } from 'react'

class Ppn extends Component {
    constructor(){
        super();
        this.state ={
            hasil: null
        }
    }

    handleSubmit(e){
        e.preventDefault();

        const hrg = parseInt(this.refs.hrg.value);
        const ppn = parseInt(this.refs.ppn.value);
        const dc =parseInt(this.refs.dc.value);

        var diskon = hrg*(dc/100);
        var afdiskon = hrg-diskon;
        var pajak = afdiskon*(ppn/100);
        
        

        var hasil= afdiskon+pajak
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
                    <label><center><h3>Pajak</h3></center></label>
                    <div className='mb-3'>
                        <h4>Harga</h4>
                        <input type="number" className='form-control' ref="hrg" placeholder='Rp.' />
                    </div>
                    <div className='mb-3'>
                        <h4>Diskon</h4>
                        <input type="number" className='form-control' ref="dc" placeholder='%' />
                    </div>
                    <div className='mb-3'>
                        <h4>PPN</h4>
                        <input type="number" className='form-control' ref='ppn' placeholder='%' />
                    </div>

                    <button className='btn btn-primary' > Lihat Hasil</button>
                </form>
                {this.renderHasil()}
            </div>
        
        );
    }
}

export default Ppn;