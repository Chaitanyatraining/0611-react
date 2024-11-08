import { Component } from "react";

class ClassComp extends Component{
    constructor(props){
        super(props)
        console.log('class component', props)
    }

    render(){
        return(
            <section>
                <h3>This is Class Component</h3>
                <h3>CourseName in classcomp : {this.props.courseName}</h3>
            </section>
        )
    }
}

export default ClassComp