import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Headline } from 'carbon-ui'
import { LinearGradient } from 'expo';
import { Paper, Body1, gu } from 'carbon-ui';

const Header = () => {
    return (
      <LinearGradient
          colors={['#ee0979', '#ff6a00']}
          start={[0, 0]}
          end={[1, 1]}
          style={headerContainer}>
            <Headline style={{color:'#fff'}}>
                Cryptocurrency Markets
            </Headline>
        </LinearGradient>
    )
}


const styles = StyleSheet.create({
    headerContainer: {
        display: "flex",
        paddingTop: 55,
        paddingBottom: 30,
        alignItems: "center",
        borderBottomLeftRadius: 10,
    		borderBottomRightRadius: 10,
    		borderTopLeftRadius: 0,
    		borderTopRightRadius: 0,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.8,
        shadowRadius: 5,
        elevation: 20,
    },
    header: {
        fontWeight: "bold",
        fontSize: 20,
    }
})

const { headerContainer, header } = styles;


export default Header;
