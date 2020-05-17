import React, { Component } from 'react';
import { Text,
    View,
    TouchableOpacity,
    StatusBar,
    Image
 } from 'react-native';
import { loginStyles } from '@styles/styles'
import MyTextInput from '@components/MyTextInput'
import color from '@styles/colors'

export default function LoginScreen(){
    const [hidePassword, setHidePassword] = useState(false)
    return(
        <View style={[loginStyles.container]}>
            <StatusBar backgroundColor={color.BLUE} translucent={true} />
            <View style={loginStyles.logo}>
                <Image source={require('@recursos/images/logo-brainapps.png')} 
                style={{height: 250, width:250}}  />

            </View>
            <MyTextInput keyboardType='email-address' placeholder='E-mail' image='user'  />
            <MyTextInput keyboardType={null} placeholder='Contraseña' image='lock'
            bolGone={true} secureTextEntry={hidePassword}
            onPress={() => setHidePassword(!hidePassword)}  />
            <View style={loginStyles.btnMain}>
                <TouchableOpacity>
                    <Text  style={loginStyles.btntxt} >Iniciar sesión</Text>
                </TouchableOpacity>
            </View>
            <View style={loginStyles.btnTransparent}>
                <TouchableOpacity>
                    <Text  style={ [loginStyles.btntxt, {color: color.BLUE} ]} >Registrarse</Text>
                </TouchableOpacity>
            </View>
            <View style={loginStyles.btnTransparent}>
                <TouchableOpacity>
                    <Text  style={ [loginStyles.txtTransparent, { textDecorationLine: 'underline'} ]} >Olvide mi contraseña</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
   
}