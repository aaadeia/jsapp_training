const initialState = {
    addressList: [
        {address: 'Tokyo', name: 'Taro'},
        {address: 'Osaka', name: 'Hanako'},
    ],
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADDADDRESS': {
            let data = state.addressList;
            const newAddressList = data.concat({address: action.address, name: action.name});
            return {
                addressList: newAddressList,
            }
        }
        case 'DELADDRESS': {
            let data = state.addressList;
            data.splice(action.value, 1);
            const newAddressList = data.concat();
            return {
                addressList: newAddressList,
            }
        }
        default: {
            return state
        }
    }
}

export default reducer