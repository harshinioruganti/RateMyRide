import { View, Text } from "react-native"

const HeaderInfo = ({ 
    containerStyle, 
    RideName, 
    ThemeParkName, 
    rideStyle, 
    themeParkStyle 
}) => {
    return (
        <View style={ containerStyle }>
            <Text style={ rideStyle }>{ RideName }</Text>
            <Text style={ themeParkStyle }>Located at: { ThemeParkName }</Text>
        </View>
    )
}

export default HeaderInfo;