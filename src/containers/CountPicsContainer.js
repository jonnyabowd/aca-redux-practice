import { connect } from 'react-redux'
import CountPics from '../components/CountPics'

const mapStateToProps = (state) => {
    return {
        pics: state.pics,
        gallery: state.gallery
    }
}


export default connect(mapStateToProps, null)(CountPics)