
import React, {Component} from 'react';

class commentList extends Component {
   
 
    constructor(props) {
        super(props);
        this.state = {
          items: [],
          isLoaded: false,
          search: ''
        }
      }
      
      componentDidMount() {
        fetch('http://localhost:3212/feedbacks')
        .then(res => res.json())
        .then(json => {
        this.setState({
          isLoaded: true,
          items: json.body,       
        })       
        })
      }
   
    render() {
      var { isLoaded, items, search} = this.state;
      if (!isLoaded) {
        return <div>Loading..</div>;
      }
      else {
      return (   
          <div className="atsiliepimuforma">
       <div><font size="6"> Atsiliepimai: </font></div>
       <div>
        <label>Paieška pagal vardą</label>
        <input type="text" id="search" name='search'
                        value={this.state.komentaras}
                        onChange={e => this.handleChange(e)}></input>
      
    </div>
    <div className="atsiliepimuforma">
       {items.filter(a => a.vardas.toLowerCase().includes(search.toLowerCase())).map(item => (
         <div>{item.comment_time} | {item.vardas } | {item.emailas} | {item.komentaras}</div>
       ))}
           </div>
           </div>
      );
      }
     
    }
    handleChange = (e) => {
      this.setState({
        [e.target.name]: e.target.value,
      })
    }
    }

    export default commentList;