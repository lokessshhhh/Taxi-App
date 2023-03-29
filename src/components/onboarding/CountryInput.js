import React, {useState} from 'react';
import {
  View,
  TextInput,
  Image,
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../theme/layout';
import CountryPicker from 'react-native-country-picker-modal';
import {myColors} from '../../theme/colors';
// import CountryPicker package

const CountryInput = () => {
  const [countryCode, setCountryCode] = useState('US');
  const [countryCodeNum, setCountryCodeNum] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const onSelectCountry = country => {
    setCountryCode(country.cca2);
    setCountryCodeNum(
      country.callingCode[0] === undefined ? '' : `+ ${country.callingCode[0]}`,
    );
    console.log(country.callingCode[0], '===cont==');
  };

  return (
    <View style={styles.inputContainer}>
      <View style={styles.countryContainer}>
        <CountryPicker
          countryCode={countryCode}
          withFlag
          withCallingCode
          onSelect={onSelectCountry}
        />
        <Text>{countryCodeNum}</Text>
        <View style={styles.line} />
      </View>
      <TextInput
        placeholderTextColor={myColors.black}
        style={styles.input}
        placeholder="Enter mobile number"
        keyboardType="phone-pad"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: myColors.textinputBG,
    borderRadius: 10,
    paddingHorizontal: 10,
    width: wp(90),
    height: hp(6),
  },
  countryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  line: {
    height: hp(3),
    width: 1,
    backgroundColor: 'black',
    marginHorizontal: wp(2.5),
  },
  input: {
    flex: 1,
    height: '100%',
  },
});

export default CountryInput;
