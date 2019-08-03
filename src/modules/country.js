import React from "react";
import Header from "../components/header/profileHeader";
import Json from "../json/jsonCountry.json"
class Country extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            country:Json,
            states:[],
            stateData:[],
            stateValue:"",
            modalPro:false,
            valueProps:''
        }
    }

    componentWillMount(){
        var countryState=this.state.country[0].states
        this.setState({
            states:Object.keys(countryState)
        })
    }

    handleChange(e){
        if(e.target.id=="country"){
            this.setState({
                stateValue:e.target.value
            })
            
            if( e.target.value!= ""){
                setTimeout(()=>{
                    this.setState({
                        stateData:this.state.country[0].states[this.state.stateValue]
                    })
                })  
            }
        }
    }

    render() {
        const{stateValue}=this.state
        return (
            <div>
                <Header />
                <div className="row m-top-20 m-lft-50">
                    <div className="col-md-4">
                        <select className="" value={stateValue} id="country" onChange={e=> this.handleChange(e)}>
                            <option value="">
                                Select state
                            </option>
                            {this.state.states.map((data,key)=>(
                                <option key={key} value={data}>
                                    {data}
                                </option>)
                            )} 
                        </select>
                    </div>
                    <div className="col-md-4">
                        <select className="">
                            <option disabled>
                                Select state
                            </option>
                            {/* {this.state.states.map((data,key)=>(
                                this.state.country[0].states[data].map((dataa,key)=>(
                                <option value={dataa}>
                                    {dataa}

                                </option>))
                            ))}  */}
                            {this.state.stateData.map((dataa,i)=>
                                <option value={dataa} key={i}>
                                    {dataa}
                                </option>
                            )}
                        </select>
                    </div>
                </div>
                
            </div>

        );
    }
}

export default Country;
