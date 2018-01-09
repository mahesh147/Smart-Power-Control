import React, { Component } from 'react';
import { View,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
  Image,
  TouchableWithoutFeedback
 } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { scale, moderateScale, verticalScale } from './scaling';
import { bulbInfoFetch, ledInfoFetch, plugInfoFetch, toggleSelected } from '../actions';
import Header from './common/Header';
import { DEVICE_ONLINE_INDICATOR, DEVICE_OFFLINE_INDICATOR } from '../image';

var { width } = Dimensions.get('window');

class DeviceList extends Component {

  //This component is responsible for displaying the Device information from Firebase

  componentWillMount() {

    console.log('Inside Device List:');
    console.log(`bulbToggle: ${this.props.bulbToggle}`);
    console.log(`ledToggle: ${this.props.ledToggle}`);
    console.log(`plugToggle: ${this.props.plugToggle}`);

    //These function are uses to call the action creators and dispatch the action to the reducer

    this.props.bulbInfoFetch();
    this.props.ledInfoFetch();
    this.props.plugInfoFetch();

  }

  goBackToControlPanel() {
    //This function navigates the user back to the Control Panel
    Actions.pop();
  }

  totalPowerUseage() {
    //This function calculates and the returns the total Power Useage of the Devices
    const bulbPower = (+(this.props.bulb.power) * this.props.bulbToggle * +(this.props.bulb.status));
    const ledPower = (+(this.props.led.power) * this.props.ledToggle * +(this.props.led.status));
    const plugPower = (+(this.props.plug.power) * this.props.plugToggle * +(this.props.plug.status));
    return `Total Power: ${(bulbPower + ledPower + plugPower)} W`;
  }

  totalAmount() {
    //This function calculates and the returns the total Amount.
    const bulbAmount = ((+this.props.bulb.amount) * this.props.bulbToggle * +(this.props.bulb.status));
    const ledAmount = ((+this.props.led.amount) * this.props.ledToggle * +(this.props.led.status));
    const plugAmount = ((+this.props.plug.amount) * this.props.plugToggle * +(this.props.plug.status));
    return `Total Amount: ${(bulbAmount + ledAmount + plugAmount)} Rs`;
  }

  renderBulbInformation() {

    /*
    This fuction decides whether or not to display the information from Firebase to the user.
    The information will be displayed only if :
    1. The user marked the checkbox of BULB in the Control Panel.
    2. The status of BULB is "1" in the database.
    */

      if (this.props.bulbToggle && (+this.props.bulb.status == 1)) {

        return (
          <View style={styles.deviceInfoContainerStyle}>
        <Text style={styles.deviceInfoTextStyle} numberOfLines={1} allowFontScaling adjustFontSizeToFit>
        <Image
        source={DEVICE_ONLINE_INDICATOR}
        style={styles.indicatorIconStyle}
        />
          BULB
        </Text>
        <Text style={styles.deviceInfoTextStyle} numberOfLines={1} allowFontScaling adjustFontSizeToFit>{this.props.bulb.power}</Text>
        <Text style={styles.deviceInfoTextStyle} numberOfLines={1} allowFontScaling adjustFontSizeToFit>{this.props.bulb.amount}</Text>
        </View>
      );
    }
      return (
      <View style={styles.deviceInfoContainerStyle} numberOfLines={1} allowFontScaling adjustFontSizeToFit>
      <Text style={styles.deviceInfoTextStyle} numberOfLines={1} allowFontScaling adjustFontSizeToFit>
      <Image
      source={DEVICE_OFFLINE_INDICATOR}
      style={styles.indicatorIconStyle}
      />
        BULB
      </Text>
      <Text style={styles.deviceInfoTextStyle} numberOfLines={1} allowFontScaling adjustFontSizeToFit> 0 </Text>
      <Text style={styles.deviceInfoTextStyle} numberOfLines={1} allowFontScaling adjustFontSizeToFit> 0 </Text>
      </View>
      );

    }


    renderLedInformation() {

      /*
      This fuction decides whether or not to display the information from Firebase to the user.
      The information will be displayed only if :
      1. The user marked the checkbox of LED in the Control Panel.
      2. The status of LED is "1" in the database.
      */


      if (this.props.ledToggle && (+this.props.led.status == 1)) {

        return (
          <View style={styles.deviceInfoContainerStyle}>
        <Text style={styles.deviceInfoTextStyle} numberOfLines={1} allowFontScaling adjustFontSizeToFit>
        <Image
        source={DEVICE_ONLINE_INDICATOR}
        style={styles.indicatorIconStyle}
        />
          LED
        </Text>
        <Text style={styles.ledInfoPowerStyle} numberOfLines={1} allowFontScaling adjustFontSizeToFit>{this.props.led.power}</Text>
        <Text style={styles.ledInfoAmountStyle} numberOfLines={1} allowFontScaling adjustFontSizeToFit>{this.props.led.amount}</Text>
        </View>
      );
    }
      return (
      <View style={styles.deviceInfoContainerStyle}>
      <Text style={styles.deviceInfoTextStyle} numberOfLines={1} allowFontScaling adjustFontSizeToFit>
      <Image
      source={DEVICE_OFFLINE_INDICATOR}
      style={styles.indicatorIconStyle}
      />
        LED
      </Text>
      <Text style={styles.ledInfoPowerStyle} numberOfLines={1} allowFontScaling adjustFontSizeToFit> 0 </Text>
      <Text style={styles.ledInfoAmountStyle} numberOfLines={1} allowFontScaling adjustFontSizeToFit> 0 </Text>
      </View>
      );


    }


    renderPlugInformation() {

      /*
      This fuction decides whether or not to display the information from Firebase to the user.
      The information will be displayed only if :
      1. The user marked the checkbox of PLUG in the Control Panel.
      2. The status of PLUG is "1" in the database.
      */


      if (this.props.plugToggle && (+this.props.plug.status == 1)) {

        return (
          <View style={styles.deviceInfoContainerStyle} numberOfLines={1} allowFontScaling adjustFontSizeToFit >
        <Text style={styles.deviceInfoTextStyle} numberOfLines={1} allowFontScaling adjustFontSizeToFit>
        <Image
        source={DEVICE_ONLINE_INDICATOR}
        style={styles.indicatorIconStyle}
        />
          PLUG
        </Text>
        <Text style={styles.deviceInfoTextStyle} numberOfLines={1} allowFontScaling adjustFontSizeToFit>{this.props.plug.power}</Text>
        <Text style={styles.deviceInfoTextStyle} numberOfLines={1} allowFontScaling adjustFontSizeToFit>{this.props.plug.amount}</Text>
        </View>
      );
    }
      return (
      <View style={styles.deviceInfoContainerStyle} numberOfLines={1} allowFontScaling adjustFontSizeToFit>
      <Text style={styles.deviceInfoTextStyle} numberOfLines={1} allowFontScaling adjustFontSizeToFit>
      <Image
      source={DEVICE_OFFLINE_INDICATOR}
      style={styles.indicatorIconStyle}
      />
        PLUG
      </Text>
      <Text style={styles.deviceInfoTextStyle} numberOfLines={1} allowFontScaling adjustFontSizeToFit> 0 </Text>
      <Text style={styles.deviceInfoTextStyle} numberOfLines={1} allowFontScaling adjustFontSizeToFit> 0 </Text>
      </View>
      );

    }


  render() {

    console.log('Now in DeviceList.js');

    const {
      topTextStyle,
      topContainerStyle,
      deviceInfoTextStyle,
      deviceInfoContainerStyle,
      totalUseageTextStyle,
      goBackContainerStyle,
      goBackTextStyle,
      indicatorIconStyle
    } = styles;

    return (
      <ScrollView>
        <View>

          <Header />

          <View style={topContainerStyle}>
            <Text style={topTextStyle} numberOfLines={1} allowFontScaling adjustFontSizeToFit> Device </Text>
            <Text style={topTextStyle} numberOfLines={1} allowFontScaling adjustFontSizeToFit> Power(W) </Text>
            <Text style={topTextStyle} numberOfLines={1} allowFontScaling adjustFontSizeToFit> Amount(Rs) </Text>
          </View>


            {this.renderBulbInformation()}

            {this.renderLedInformation()}

            {this.renderPlugInformation()}

          <Text style={totalUseageTextStyle} numberOfLines={1} allowFontScaling adjustFontSizeToFit> {this.totalPowerUseage()} </Text>
          <Text style={totalUseageTextStyle} numberOfLines={1} allowFontScaling adjustFontSizeToFit> {this.totalAmount()} </Text>

          <TouchableWithoutFeedback onPress={this.goBackToControlPanel}>
            <View style={goBackContainerStyle}>
              <Text style={goBackTextStyle} numberOfLines={1} allowFontScaling adjustFontSizeToFit> Back to Control Panel </Text>
            </View>
          </TouchableWithoutFeedback>

        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({

  topContainerStyle: {

    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#37a1de'
  },

  topTextStyle: {
    fontSize: moderateScale(10, 0.4),
    fontWeight: 'bold',
    color: 'black',
    paddingTop: scale(30),
    paddingBottom: scale(30),
    paddingLeft: scale(10),
    paddingRight: scale(10)
  },

  deviceInfoContainerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 3,
    borderColor: '#37a1de'
  },

  deviceInfoTextStyle: {
    fontSize: moderateScale(20, 0.4),
    fontWeight: '900',
    paddingTop: scale(10),
    paddingBottom: scale(5),
    paddingRight: scale(50),
  },
  ledInfoPowerStyle: {
    paddingLeft: scale(20),
    fontSize: moderateScale(20, 0.4),
    fontWeight: '900',
    paddingTop: scale(10),
    paddingBottom: scale(5),
    paddingRight: scale(30)
  },
  ledInfoAmountStyle: {
    paddingLeft: scale(20),
    fontSize: moderateScale(20, 0.4),
    fontWeight: '900',
    paddingTop: scale(10),
    paddingBottom: scale(10),
    paddingRight: scale(50)
  },
  totalUseageTextStyle: {
    fontSize: moderateScale(15),
    color: 'black',
    fontWeight: '500',
    textAlign: 'right',
    paddingRight: scale(25),
    marginTop: moderateScale(20)
  },

  goBackContainerStyle: {
    width: moderateScale(width),
    height: verticalScale(130),
    justifyContent: 'center',
    backgroundColor: '#f5ec32',
    marginTop: moderateScale(20)
  },

  goBackTextStyle: {
    fontSize: moderateScale(15, 0.4),
    fontWeight: '700',
    color: 'black',
    textAlign: 'center',
    paddingRight: scale(30)
  },

  indicatorIconStyle: {
    height: 20,
    width: 20
  }
});

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, { bulbInfoFetch, ledInfoFetch, plugInfoFetch })(DeviceList);
