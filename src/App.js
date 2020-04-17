import React from 'react';
import PropTypes from 'prop-types';
import {Container, Divider, Header, Table} from 'semantic-ui-react'

class InputForms extends React.Component {
  constructor(props)
  {
    super(props);
    this.state = 
      { inputName: '',
        inputAddress: '',
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
  }
  
  deleteButton(i)
  {
    this.props.delAddress(i);
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
            {this.props.value.map( (addresData, i) => {
              return <Table.Row key={i}>
                <Table.Cell>
                <input type="button" value="☓" onClick={() => this.deleteButton(i)}/>
                </Table.Cell>
                <Table.Cell>
                {addresData.name}
                </Table.Cell>
                <Table.Cell>
                {addresData.address}
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
  delAddress: PropTypes.func,
};

class AddressBook extends React.Component {
  constructor(props)
  {
    super(props);
    this.AddAddress = this.AddAddress.bind(this);
    this.DelAddress = this.DelAddress.bind(this);
  }  

  AddAddress(name, address)
  {
    this.props.handleAddressAdd(name, address);
  }

  DelAddress(i)
  {
    this.props.handleAddressDelete(i);
  }

  render() {
    const inputName = 'アドレス帳';
    
    return (
      <Container text style={{ marginTop: '7rem' }} >
          <Header as="h2">{inputName} </Header>
          <Divider />
            <InputForms value={this.props.addressList} addAddress={this.AddAddress}/>
          <Divider />
            <AddressTable value={this.props.addressList} delAddress={this.DelAddress}/>
      </Container>
    );
  }
}

AddressBook.propTypes = {
  addressList: PropTypes.array,
  handleAddressAdd: PropTypes.func,
  handleAddressDelete: PropTypes.func,
}

export default AddressBook;