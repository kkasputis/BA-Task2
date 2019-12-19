import React, { Component } from 'react';



class CommentForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            vardas: ' ',
            emailas: ' ',
            komentaras: ' '
        };
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    getCurrentDate(separator='-'){

        let newDate = new Date()
        let date = newDate.getDate();
        let month = newDate.getMonth() + 1;
        let year = newDate.getFullYear();
        let hours = newDate.getHours();
        let minutes = newDate.getMinutes();
                return `${year}${separator}${month<10?`0${month}`:`${month}`}${separator}${date}[${hours}:${minutes<10?`0${minutes}`:`${minutes}`}]`
        }
    async postData() {
        try {
            await fetch('http://localhost:3212/feedbacks', {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/json'
            },
                credentials: 'same-origin',
                body: new URLSearchParams({
                    'vardas': this.state.vardas,
                    'emailas': this.state.emailas,
                    'komentaras': this.state.komentaras,
                    'comment_time': this.getCurrentDate()
                  })
            });
        }
        catch(e) {
            console.log(e)
          
        }
        window.location.reload()
    }
    render() {
    return (
        <div className="commentform">
<form >
    <div>
    <label>Vardas</label>
    <input type="text" id="vardas"  name='vardas'
                        value={this.state.vardas}
                        onChange={e => this.handleChange(e)}></input>
    </div>
    <div>
        <label>El. paštas</label>
        <input type="email" id="emailas" name='emailas'
                        value={this.state.emailas}
                        onChange={e => this.handleChange(e)}></input>
    </div>
    <div>
        <label>Komentaras</label>
        <textarea type="text" id="komentaras" rows="6" name='komentaras'
                        value={this.state.komentaras}
                        onChange={e => this.handleChange(e)}></textarea>
    </div>
    <div>
 
    </div>
</form>
<button onClick={ () => this.postData() } > Siusti </button>
        </div>
    );
}
}
export default CommentForm;

