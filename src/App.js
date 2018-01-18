import React, { Component } from 'react';
import './App.css';
import data from './data';
import List from './components/List';



class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mylist: data.mylist,
      recom: data.recommendations,
    };

    this.handleAdd = this.handleAdd.bind(this);
    this.handleRemove = this.handleRemove.bind(this);

    //console.log(this.state.recom);
  }


  handleAdd(item,index){
    let myNewList = this.state.mylist.slice();
    myNewList.push(item);
    this.setState({mylist: myNewList});

    let myNewRecom = this.state.recom.slice();
    myNewRecom.splice(index,1);
    this.setState({recom: myNewRecom});
  }

  handleRemove(item,index){
    let myNewRecom = this.state.recom.slice();
    myNewRecom.push(item);
    this.setState({recom: myNewRecom});

    let myNewList = this.state.mylist.slice();
    myNewList.splice(index,1);
    this.setState({mylist: myNewList});
  }

  render() {

    return (
      <div className="App">
        <section className='main-row'>
          <div className='row-title'>My List</div>
          <List list={this.state.mylist}
                handleRemove={this.handleRemove}
          />
        </section>

        <section className='main-row'>
          <div className='row-title'>Recommendations</div>
          <List list={this.state.recom}
                handleAdd={this.handleAdd}
          />
        </section>
      </div>
    );
  }
}

export default App;
