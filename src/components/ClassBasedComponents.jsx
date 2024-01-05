import alertify from "alertifyjs";
import React, { Component } from "react";

class ClassBasedComponents extends Component{
            
            state = {
                        // write all state propertes indside of this
                        count : 0, //intiial value of count properties
                        flag  : false,
                        formData : {
                                    name: '',
                                    age: 0
                        },
                        finalFormData: {}
            }
            /* constructor(props){
                        super(props)
                        this.state = {

                        }
            } */

            handleClick = () => {
                        //Dont use this
                        //this.state.count = this.state.count + 1; //directly mutating the state

                        //use setState instead of above
                        //take count into paramerter
                        const {count} = this.state;
                        this.setState({
                                    count: count + 1
                        }, ()=> {
                                    console.log(this.state);
                        })
            }

            componentDidMount(){
                        alertify.success('compoent is mounted');
            }

            componentDidUpdate(prevProps, prevState){
                        console.log("componentDidUpdate",prevState, this.state);
                        if (prevState && prevState.count !== this.state.count && this.state.count == 10) {
                                    this.setState({
                                                flag: true
                                    })
                        }
            }

            componentWillUnmount(){
                        alertify.error('component destroyed');
            }

            handleSubmit = (e) => {
                        e.preventDefault();
                        const {formData} = this.state;
                        this.setState(prevState => ({
                                    ...prevState,
                                    finalFormData:{
                                                ...prevState.finalFormData, formData
                                    }
                        }))
            }

            handleNamechange = (e) => {
                        const {value} = e.target;
                        this.setState(prevState => ({
                                    formData : {
                                                ...prevState.formData,
                                                name: value
                                    }
                        }))

            }

            handleAgechange = (e) => {
                        const {value} = e.target;
                        this.setState(prevState => ({
                                    formData : {
                                                ...prevState.formData,
                                                age: value
                                    }
                        }))
            }

            render(){
                        console.log("render",this.state);
                        console.log("render 2",this.state.formData);
                        return (
                                    <>
                                                <form onSubmit={this.handleSubmit}>
                                                            <input placeholder="name" type="text" name="name" value={this.state.formData.name} onChange={this.handleNamechange}/>
                                                            <input placeholder="age" type="text" name="age" value={this.state.formData.age} onChange={this.handleAgechange}/>
                                                            <button type="submit" aria-label="submit">
                                                                        Submit
                                                            </button>
                                                            
                                                </form>
                                                <div>
                                                            {
                                                                    this.state.finalFormData && Object.keys(this.state.finalFormData).length > 0 && (
                                                                        <p>

                                                                                    Final Form data is : {this.state.finalFormData.name} and {this.state.finalFormData.age}
                                                                        </p>
                                                                    )
                                                            }
                                                </div>
                                                <div>Class Based Component
                                                            <button onClick={this.handleClick}>Click - State value</button>
                                                            {
                                                                        this.state.count == 5 && "Count is 5"
                                                            }
                                                            <br/>
                                                            {
                                                                        this.state.flag == true &&<p>Flag is true</p>
                                                            }
                                                </div>
                                    </>
                        );
            }
}

export default ClassBasedComponents;