import React, { useState } from 'react';
import {
  View,
  TextInput,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {myColors} from '../../theme/colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../theme/layout';

const DoubleInput = ({
  placeholder,
  Icon,
  value,
  onChangeText,
  pressable,
  onPress,
  secureTextEntry
}) => {

const [showText,setshowText] = useState(false);

  return (
    <View style={styles.inputContainer}>
      <TextInput
        secureTextEntry={secureTextEntry}
        value={value}
        onChangeText={onChangeText}
        placeholderTextColor={myColors.black}
        style={styles.input}
        placeholder={placeholder}
      />
      <TouchableOpacity onPress={onPress} disabled={pressable ? false : true}>
        <Image resizeMode="contain" source={Icon} style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    marginBottom: hp(1),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: myColors.textinputBG,
    borderRadius: 10,
    width: wp(90),
    height: hp(6),
    paddingHorizontal: 15,
  },
  input: {
    width: '90%',
    height: '100%',
    color: myColors.black,
  },
  icon: {
    width: hp(3),
    height: hp(3),
    tintColor: myColors.greytext,
  },
});

export default DoubleInput;
