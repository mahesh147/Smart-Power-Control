import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { scale, moderateScale, verticalScale } from '../scaling';

const Header = () => {
 // This component is reponsible for rendering a Header on top of the app on both the routes.

  const heading = 'S M A R T \t\t P O W E R \t\t C O N T R O L';

    return (

        <View style={styles.containerStyle}>

          <Text style={styles.textStyle} numberOfLines={1} allowFontScaling adjustFontSizeToFit> {heading} </Text>

        </View>

    );
};

//These are the styles used for the Headers
const styles = StyleSheet.create({

    containerStyle: {
      flex: 3,
      borderBottomWidth: 2,
      borderColor: '#797574',
      position: 'relative',
      elevation: 2,
      justifyContent: 'space-around',
      height: verticalScale(90),
      paddingTop: scale(15),
      paddingBottom: scale(15),

    },

    textStyle: {
      flex: 1,
      textAlign: 'center',
      textAlignVertical: 'center',
      fontSize: moderateScale(10),
      color: '#000000',
      fontWeight: '300'

    }

});

export default Header;
