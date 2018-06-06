import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';
import Background from '../../component/Background/Background';

const SCREEN_WIDTH = Dimensions.get('window').width;

export default class Tracking extends Component {
  render() {
    const { container } = styles;
    return (
      <Background>
        <View style={[container, { flex: 0.85, width: SCREEN_WIDTH }]}>
            <View style={{ flex: 0.1, flexDirection: 'row' }}>
                <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 26 }}>
                    SEPTEMBER 23
                </Text>
                
            </View>
        </View>
      </Background>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    position: 'relative' 
  }
});