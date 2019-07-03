import { connect } from 'react-redux'
import People from '../components/People'
import { getPeople } from '../actions'

const mapStateToProps = (state) => {
    return {
        people: state.people
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getPeopleFromAPI: () => dispatch(getPeople())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(People)