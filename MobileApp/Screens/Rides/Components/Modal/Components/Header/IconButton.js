import { TouchableOpacity } from "react-native"
import Ionicons from 'react-native-vector-icons/Ionicons';

const IconButton = ({ onPress, buttonStyle }) => {
    return (
        <TouchableOpacity style={ buttonStyle } activeOpacity={ 0.7 } onPress={ onPress }>
            <Ionicons name='close' size={50} style={{ color: 'black'}} />
        </TouchableOpacity>
    )
}

export default IconButton;