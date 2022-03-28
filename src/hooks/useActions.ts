import {useDispatch} from 'react-redux'
import {bindActionCreators} from 'redux'
import MainActionCreators from '../redux/action-creators/mainActionCreators'

export const useActions = () => {
  const dispatch = useDispatch()
  return bindActionCreators(MainActionCreators, dispatch)
}
