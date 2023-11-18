import { View, Text } from "react-native"

const HeaderInfo = ({ 
    containerStyle, 
    RideName,
    rideStyle,
}) => {
    return (
        <View style={ containerStyle }>
            <Text style={ rideStyle }>{ RideName }</Text>
        </View>
    )
}

export default HeaderInfo;