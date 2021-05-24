import React, { Component } from 'react'
import P from './P'


const validate = values => {
    const errors ={}
    if (!values.nombre){
        errors.nombre = 'este campo es obligatorio'
    }
    if(!values.apellido){
        errors.apellido = 'Este campo es obligatorio'
    }
    return errors
}
export default class FormularioSimple extends Component {
    state = {
        errors: {}
    }



    handleChange = ({target}) => {
        const {name, value} = target
        this.setState ( { [name]: value}) // capta la info del formulario en todo momento
    }

    handleSubmit = e => {
        e.preventDefault()
        const { errors, ...sinErrors} = this.state
        const result = validate(sinErrors)

        this.setState({ errors: result})
        if(!Object.keys(result).length){
            // enviar el formulario
            console.log('formulario válido')
            e.target.reset()
        }
    }

    render() {
        const {errors} = this.state
        return (
            <form onSubmit={this.handleSubmit}>

                <input name= "nombre" onChange={this.handleChange}/>
                {errors.nombre && <P>{errors.nombre}</P>}
                <input name= "apellido" onChange={this.handleChange}/>
                {errors.apellido && <P>{errors.apellido}</P>}
                <input type='submit' value='Enviar'/>
            </form>
        )

       
    }

}