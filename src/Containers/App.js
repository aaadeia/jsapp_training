import { connect } from 'react-redux'

import AddressBook from './../App'
import Actions from './../AppActions'

const mapStateToProps = (state) => {
    return state
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleAddressAdd(name, address) {
            dispatch(Actions.addAddress(name, address))
        },
        handleAddressDelete(value) {
            dispatch(Actions.delAddress(value))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddressBook)