import React, { PureComponent } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { THEME_COLOR } from '../../constants/theme.js';

export default class Background extends PureComponent {
    render() {
        return (
            <LinearGradient
                colors={THEME_COLOR.backgroundGradient}
                start={{ x: 0.0, y: 0.7 }}
                end={{ x: 1.0, y: 0.7 }}
                style={{ flex: 1, justifyContent: 'center', alignItems: 'center', position: 'relative' }}
            >
                {this.props.children}
            </LinearGradient>
        );
    }
}