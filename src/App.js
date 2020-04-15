import React from 'react';
import PropTypes from 'prop-types';
import {Container, Divider, Header, Segment, Table} from 'semantic-ui-react'

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
    this.props.addAddress(this.state.inputName, this.state.inputAddress);
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

InputForms.propTypes = {
  value: PropTypes.array,
  addAddress: PropTypes.func
};

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
      <Container>
        <Header as="h3">アドレス一覧</Header>
        <Table>
          <Table.Header>
            <Table.HeaderCell>削除</Table.HeaderCell>
            <Table.HeaderCell>名前</Table.HeaderCell>
            <Table.HeaderCell>住所</Table.HeaderCell>
          </Table.Header>
          <Table.Body>
            {this.state.dataList.map( (dataList, i) => {
              return <Table.Row key={i}>
                <Table.Cell>
                <input type="button" value="☓" onClick={() => this.deleteButton(i)}/>
                </Table.Cell>
                <Table.Cell>
                {dataList.name}
                </Table.Cell>
                <Table.Cell>
                {dataList.address}
                </Table.Cell>
              </Table.Row>
            })}
          </Table.Body>
        </Table>
      </Container>
    );
  }  
}

AddressTable.propTypes = {
  value: PropTypes.array,
};

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

    this.handleAddAddress = this.handleAddAddress.bind(this);
  }  

  handleAddAddress(name, address)
  {
    var data = this.state.addressList;
    data.push({
      name: name,
      address: address,
    });
    this.setState({addressList: data});
  }

  render() {
    const inputName = 'アドレス帳';
    
    return (
      <Container text style={{ marginTop: '7rem' }} >
          <Header as="h2">{inputName} </Header>
          <Divider />
            <InputForms value={this.state.addressList} addAddress={this.handleAddAddress}/>
          <Divider />
            <AddressTable value={this.state.addressList}/>
      </Container>
    );
  }
}

export default AddressBook;