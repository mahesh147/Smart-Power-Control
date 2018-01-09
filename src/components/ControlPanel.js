import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Image,
  ScrollView
 } from 'react-native';


import { Actions } from 'react-native-router-flux';
import { scale, moderateScale, verticalScale } from './scaling';
import { UNMARKED_CHECKBOX, MARKED_CHECKBOX } from '../image';

import Header from './common/Header';

/*
  This component is responsible for displaying the main Control Panel page
  and taking the user input for BULB, LED, or PLUG.
*/


class ControlPanel extends Component {

  state = { bulbPressed: false, ledPressed: false, plugPressed: false };

  buttonPress() {
    //This function is called whenever the user press the "Ok" button
    Actions.deviceList({
      bulbToggle: +(this.state.bulbPressed),
      ledToggle: +(this.state.ledPressed),
      plugToggle: +(this.state.plugPressed)
     });
  }

  renderCheckboxImage(isPressed) {

    /*
    This function is responsible for rendering the checkbox image.
    The image will either be a marked checkbox or an unmarked checkbox.
    That is determined by this function
    */

    if (isPressed) {
      return (
        <View>
        <Image
        source={MARKED_CHECKBOX}
        style={styles.imageStyle}
        />
        </View>
      );
    }

    return (
      <View>
      <Image
      source={UNMARKED_CHECKBOX}
      style={styles.imageStyle}
      />
      </View>
    );

  }

  render() {

    console.log('Now inside ControlPanel');

    const {
      containerStyle,
      textStyle,
      buttonStyle,
      buttonTextStyle
    } = styles;

    return (

      <ScrollView style={{ flex: 1 }}>

        <View style={{ flex: 1 }}>
        <Header />

        <View style={containerStyle}>
          <TouchableWithoutFeedback
            onPress={() => this.setState({ bulbPressed: !(this.state.bulbPressed) })}
          >
            {this.renderCheckboxImage(this.state.bulbPressed)}

          </TouchableWithoutFeedback>

          <Text style={textStyle} numberOfLines={1} allowFontScaling adjustFontSizeToFit>BULB</Text>
        </View>


        <View style={containerStyle}>
        <TouchableWithoutFeedback
          onPress={() => this.setState({ ledPressed: !(this.state.ledPressed) })}
        >
            {this.renderCheckboxImage(this.state.ledPressed)}
        </TouchableWithoutFeedback>
          <Text style={textStyle} numberOfLines={1} allowFontScaling adjustFontSizeToFit>LED</Text>
          </View>


          <View style={containerStyle}>
          <TouchableWithoutFeedback
          onPress={() => this.setState({ plugPressed: !(this.state.plugPressed) })}
          >
            {this.renderCheckboxImage(this.state.plugPressed)}
          </TouchableWithoutFeedback>
            <Text style={textStyle} numberOfLines={1} allowFontScaling adjustFontSizeToFit>PLUG</Text>

          </View>


          <TouchableWithoutFeedback onPress={this.buttonPress.bind(this)}>
            <View style={buttonStyle}>
              <Text style={buttonTextStyle} numberOfLines={1} allowFontScaling adjustFontSizeToFit> Ok </Text>
            </View>
          </TouchableWithoutFeedback>

        </View>
      </ScrollView>

    );

  }

}

const styles = StyleSheet.create({

  containerStyle: {
  flex: 3,
  flexDirection: 'row',
  justifyContent: 'flex-start',
  marginTop: scale(30),
  marginBottom: scale(10)
  },

  textStyle: {
    fontSize: moderateScale(40, 0.4),
    fontWeight: '600',
    paddingLeft: scale(60),
    paddingRight: scale(40),

  },


  imageStyle: {

    height: 50,
    width: 50,
    marginLeft: 30,
    marginTop: 10
  },

  buttonStyle: {
    flex: 2,
    backgroundColor: '#56da29',
    borderRadius: 10,
    height: moderateScale(50, 0.3),
    width: moderateScale(100, 0.3),
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: moderateScale(40)
  },

  buttonTextStyle: {
    fontSize: moderateScale(20),
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center'
  }
});

export default ControlPanel;
