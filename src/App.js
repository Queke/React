import { Component } from 'react';
import axios from 'axios'
import FormularioSimple from './Componets/FormularioSimple'

class App extends Component {
constructor(){
  super()
  // axios.get('https://jsonplaceholder.typicode.com/users')
  // .then (({data}) => console.log(data))
  //llamados post 
  axios.post('https://jsonplaceholder.typicode.com/users',{
    name: 'Nicolas Granados',
    username: 'Queke'
  }).then(({data}) => console.log(data))

}


  render() {
    return (
      <div className="App">
        <FormularioSimple/>
      </div>
    )
  }
}
  
export default App;
