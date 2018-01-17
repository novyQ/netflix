import React, { Component } from 'react';
import './App.css';
import data from './data';
import MyList from './components/MyList';
import RecomList from './components/RecomList';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mylist: data.mylist,
      recom: data.recommendations,
      isHovered: false
    };

    this.handleHover = this.handleHover.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleRemove = this.handleRemove.bind(this);

    //console.log(this.state.recom);
  }

  handleHover(){
    this.setState({
      isHovered: !this.state.isHovered
    })
  }

  handleAdd(item,index){
    let myNewList = this.state.mylist.slice();
    myNewList.push(item);
    this.setState({mylist: myNewList});

    let myNewRecom = this.state.recom.slice();
    myNewRecom.splice(index,1);
    this.setState({recom: myNewRecom});
  }

  handleRemove(index){
    console.log('index',index)
    let myNewList = this.state.mylist.slice();
    myNewList.splice(index,1);
    this.setState({mylist: myNewList});
  }

  render() {
    const btnClass = this.state.isHovered ? 'hovered':'unhovered';
    return (
      <div className="App">
        <section className='main-row'>
          <div className='row-title'>My List</div>
          <MyList mylist={this.state.mylist}
                  handleHover={this.handleHover}
                  btnClass={btnClass}
                  handleRemove={this.handleRemove}
          />
        </section>

        <section className='main-row'>
          <div className='row-title'>Recommendations</div>
          <RecomList recomlist={this.state.recom}
                     btnClass={btnClass}
                     handleAdd={this.handleAdd}
          />
        </section>
      </div>
    );
  }
}

export default App;
