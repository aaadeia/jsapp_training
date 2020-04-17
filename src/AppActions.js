const Actions = {
    addAddress(name, address) {
        return {
        type: 'ADDADDRESS',
        name,
        address
        }
    },
    delAddress(value) {
        return {
        type: 'DELADDRESS',
        value,
        }
    },
}

export default Actions