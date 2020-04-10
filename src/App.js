import React from 'react';

class InputForms extends React.Component {
  constructor(props)
  {
    super(props);
    this.state = 
      { inputName: '',
        inputAddress: '',
        dataList: this.props.value,
      };
    
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleAddressChange = this.handleAddressChange.bind(this);
  }
  
  handleSubmit(event)
  { 
    event.preventDefault();
    this.state.dataList.push({
      name: this.state.inputName.slice(),
      address: this.state.inputAddress.slice(),
    });
    this.setState({dataList: this.state.dataList});
  }
    
  handleChange(event)
  {
     this.setState({inputName: event.target.value});
  }
  
   handleAddressChange(event)
  {
     this.setState({inputAddress: event.target.value});
  }
  
  render()
  {    
    return(
      <form onSubmit={this.handleSubmit}>
       <label>
         Name:
<input type="text" value={this.state.inputName} onChange={this.handleChange}/>
       </label>
       <label>
         Address:
<input type="text" value={this.state.inputAddress} onChange={this.handleAddressChange}/>
       </label>
       <input type="submit" value="追加"/>
      </form>
    );
  }
}

class AddressTable extends React.Component {
  constructor(props) {
    super(props);
        this.state = 
      { 
        dataList: this.props.value,
      };
  }
  
  deleteButton(i)
  {
    this.state.dataList.splice(i, 1);
    this.setState({
      dataList: this.state.dataList 
    });
  }
  
  render()
  {
    return(    
       <div>
       <h3>アドレス一覧</h3>
       <ol>
          {this.state.dataList.map( (dataList, i) => {
            return <li key={i}> <input type="button" value="☓" onClick={() => this.deleteButton(i)}/>{dataList.name} : {dataList.address}</li>
          })}
       </ol>
      </div>
    );
  }  
}

class AddressBook extends React.Component {
  constructor(props)
  {
    super(props);
    this.state = {
      addressList: [
          {address: 'Tokyo', name: 'Taro'},
          {address: 'Osaka', name: 'Hanako'},
      ],
    };
  }  
  
  render() {
    const inputName = 'アドレス帳';
    
    return (
      <div className="addressbook">
          <div>{inputName} </div>
          <div className='inputForms'>
            <InputForms value={this.state.addressList} />
          </div>
          <div className='addressList'>
            <AddressTable value={this.state.addressList}/>
          </div>  
      </div>
    );
  }
}

export default AddressBook;