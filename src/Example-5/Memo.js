import React from 'react';
import './Memo3.css';

class Memo extends React.Component {
  state = {
    text: ''
  };

  componentDidMount() {
    this.findEmoji();
  }

  handleChange = (e) => {
    this.setState({
      text: e,
    }, this.findEmoji);
  }
  
  findEmoji = () => {
    const { text } = this.state;
    window.fetch(`https://emoji.getdango.com/api/emoji?q=${encodeURI(text)}`)
      .then(response => response.json())
      .then(json => this.handleResult(json.results))
      .catch(error => console.error(error.message))
  }

  handleResult = (items) => {
    const result = document.querySelector('.result')
    result.innerHTML = ''
    if (!items) return
    items.length = 7
    items.forEach(item => {
      const button = this.createEmojiButton(item.text)
      result.appendChild(button);
    })
  }

  createEmojiButton = (value) => {
    const element = document.createElement('button')
    const input = document.querySelector('.input')
    element.classList.add('button')
    element.value = element.innerHTML = value
    element.addEventListener('click', evt => {
      const val = `${input.value} ${evt.currentTarget.value}`
      this.handleChange(val);
      input.focus()
    })
    return element
  }

  render() {
    return (
      <>
        <main className="content">
          <div className="result"></div>
          <input className="input" type="text" value={this.state.text} autoFocus onChange={e => this.handleChange(e.target.value)}/>
        </main>
       <p className="credits">
        API by:
         <a href="http://getdango.com/" >getdango</a>
        </p>
      </>
    );
  }
}

export default Memo;