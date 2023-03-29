//import liraries
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
  Image,
  Platform,
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
import CountryInput from '../../components/onboarding/CountryInput';
import FilledButton from '../../components/onboarding/FilledButton';
import TextWithButton from '../../components/onboarding/TextButton';
import {myColors} from '../../theme/colors';
import {SafeAreaView} from 'react-native-safe-area-context';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import DoubleInput from '../../components/onboarding/DoubleInput';

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isScreen: '',
      showPass:false,
    };
  }

  componentDidMount() {
    const route = this.props;

    console.log(route.route.params.screen);
    this.setState({
      isScreen: route.route.params.screen,
    });
    console.log(this.state.isScreen, 'state===');
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
            source={Img.loginBG}
          >
            <HeaderText headerText={lang.login} />

            <View style={{marginTop: '90%', alignItems: 'center'}}>
              <TitleText
                titleText={this.state.isScreen === 'withEmail' ? lang.withemail : lang.withmobnum}
              />
              {this.state.isScreen === 'withPhone' ? (
                <CountryInput />
              ) : (
                <View>
                  <DoubleInput placeholder={lang.email} Icon={Img.emailIcon} />
                  <DoubleInput
                    secureTextEntry={
                      this.state.showPass === false ? true : false
                    }
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
                   <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate('ForgetPass');
                }}
                style={onboardingStyles.forgotPassbutton}
              >
                <Image
                  resizeMode="contain"
                  style={{height: hp(2.2), width: hp(2.2),marginBottom: hp(0.7)}}
                  source={Img.checkbox}
                />
                <Text style={onboardingStyles.forgetPassText}>
                  {lang.forgetPass}
                </Text>
              </TouchableOpacity>
                </View>
              )}

              <FilledButton
                onPress={() => {
                  this.props.navigation.navigate('VerificationScreen');
                }}
                title={lang.continue}
              />

             
              <TextWithButton
               textStyle={{ fontSize: hp(2.4)}}
               buttonStyle={{
                 fontSize: hp(2.4),
               }}
                mainStyle={{marginTop:-10}}
                onButtonPress={() => {
                  this.props.navigation.navigate('SignUpScreen');
                }}
                text={lang.noacc}
                buttonText={` ${lang.register}`}
              />
              <TextWithButton
                textStyle={{color: myColors.greytext, fontSize: hp(2)}}
                buttonStyle={{
                  fontSize: hp(2),
                  fontFamily: HindGuntur.Regular,
                  textDecorationLine: 'underline',
                }}
                text={lang.initialpolicy}
                buttonText={` ${lang.privacyPolicy}`}
              />
              <TextWithButton
              mainStyle={{marginTop:-10}}
                textStyle={{color: myColors.greytext, fontSize: hp(2)}}
                buttonStyle={{
                  fontSize: hp(2),
                  fontFamily: HindGuntur.Regular,
                  textDecorationLine: 'underline',
                }}
                text={lang.initialTerms}
                buttonText={` ${lang.terms}`}
              />
            </View>
          </ImageBackground>
        </KeyboardAwareScrollView>

        {/* </TouchableWithoutFeedback> */}
      </SafeAreaView>
    );
  }
}

export default LoginScreen;
