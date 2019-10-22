import React, { Component } from 'react';

class NewCourseForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: '',
            category: '',
            image: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleSubmit(event){
        event.preventDefault();
        const   newCourse = this.state;

        if(newCourse.name && newCourse.image && newCourse.category){
            this.props.onSubmit(newCourse);
            this.setState({
                name:'',
                image:''
            })
        }

    }

    handleChange(event){
        const { target } = event,
              {name, value} = target;
        this.setState({
            [name]: value
        })

    }

    render (){

        const { state } = this;
        // const { props, state } = this;
        return (
            <form className={'course-form'}  onSubmit={this.handleSubmit}>
                <label>
                    <span>Nome:</span>
                    <input name={'name'}  onChange={this.handleChange} value={state.name}/>
                </label>
                <label>
                    <span>Image:</span>
                    <input name={'image'} onChange={this.handleChange} value={state.image}/>
                </label>
                <label>
                    <span>Category:</span>
                    <select name={'category'} onChange={this.handleChange} value={state.category}>
                        <option value={''}>Selecionar</option>
                        <option value={'JavaScript'}>JavaScript</option>
                        <option value={'Python'}>Python</option>
                        <option value={'Ruby'}>Ruby</option>
                        <option value={'C'}>C</option>
                    </select>
                </label>
                <button type={'submit'}>Criar Curso</button>
            </form>
        )

    }

}


export default NewCourseForm;