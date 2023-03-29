//import liraries
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from 'react-native';
import {onboardingStyles} from './onboardingStyles';
import {Img} from '../../theme/Img';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  HindGuntur,
} from '../../theme/layout';
import HeaderText from '../../components/onboarding/HeaderText';
import {lang} from '../../locales/lang';
import TitleText from '../../components/onboarding/TitleText';
import FilledButton from '../../components/onboarding/FilledButton';
import TextWithButton from '../../components/onboarding/TextButton';
import {myColors} from '../../theme/colors';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import DoubleInput from '../../components/onboarding/DoubleInput';

class SignUpScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPass: false,
      showconfPass: false,
    };
  }

  render() {
    return (
      <SafeAreaView style={onboardingStyles.mainFlex}>
        <KeyboardAwareScrollView 
          contentContainerStyle={{flex: Platform.OS === 'ios' ? 1 : null}}
        >
          <ImageBackground
            resizeMode="stretch"
            style={onboardingStyles.loginBG}
            source={Img.registrationBG}
          >
            <HeaderText headerText={lang.registration} />
            <View style={{marginTop: "60%", alignItems: 'center'}}>
              <TitleText titleText={lang.createacc} />
              <DoubleInput placeholder={lang.username} Icon={Img.userIcon} />
              <DoubleInput placeholder={lang.phoneNum} Icon={Img.phoneIcon} />
              <DoubleInput placeholder={lang.email} Icon={Img.emailIcon} />
              <DoubleInput
                secureTextEntry={this.state.showPass === false ? true : false}
                onPress={() => {
                  this.setState({
                    showPass: !this.state.showPass,
                  });
                }}
                pressable
                Icon={
                  this.state.showPass === false
                    ? Img.eyecloseIcon
                    : Img.eyeopenIcon
                }
                placeholder={lang.password}
              />
              <DoubleInput
                secureTextEntry={
                  this.state.showconfPass === false ? true : false
                }
                onPress={() => {
                  this.setState({
                    showconfPass: !this.state.showconfPass,
                  });
                }}
                pressable
                Icon={
                  this.state.showconfPass === false
                    ? Img.eyecloseIcon
                    : Img.eyeopenIcon
                }
                placeholder={lang.confpassword}
              />
              {/* <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate('ForgetPass');
                }}
                style={onboardingStyles.forgotPassbutton}
              >
                <Image
                  resizeMode="contain"
                  style={{height: hp(2.7), width: hp(2.7), marginBottom: hp(1)}}
                  source={Img.checkbox}
                />
                <Text style={onboardingStyles.forgetPassText}>
                  {lang.forgetPass}
                </Text>
              </TouchableOpacity> */}
              <FilledButton
                onPress={() => {
                  this.props.navigation.navigate('LoginScreen');
                }}
                title={lang.registration}
              />
              <TextWithButton
                onButtonPress={() => {
                  this.props.navigation.navigate('LoginScreen');
                }}
                textStyle={{fontSize: hp(2.2)}}
                buttonStyle={{
                  fontSize: hp(2.2),
                }}
                text={lang.alreadyacc}
                buttonText={` ${lang.login}`}
              />
            </View>
          </ImageBackground>
        </KeyboardAwareScrollView>
      </SafeAreaView>
    );
  }
}

export default SignUpScreen;
