import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';

import FetchCoinData from './../Actions/FetchCoinData';
import CoinCard from './CoinCard';
import { Paper, Body1, gu } from 'carbon-ui'

class CryptoContainer extends Component {

    componentWillMount() {
        this.props.FetchCoinData();
    }

    renderCoinCards() {
        const { crypto } = this.props;
        return crypto.data.map((coin) =>
            <CoinCard
                key={coin.name}
                coin_name={coin.name}
                symbol={coin.symbol}
                price_usd={coin.price_usd}
                percent_change_24h={coin.percent_change_24h}
                percent_change_7d={coin.percent_change_7d}
            />
        )
    }


    render() {

        const { crypto } = this.props;
        const { contentContainer } = styles;

        if (crypto.isFetching) {
            return (
                <View>
                    <Spinner
                        visible={crypto.isFetching}
                        textContent={"Loading..."}
                        textStyle={{color: '#253145'}}
                        animation="fade"
                    />
                </View>
            )
        }

        return (
            <ScrollView contentContainerStyle={contentContainer}>
              <Paper elevation={8} style={{ margin: 2 * gu, padding: 4 * gu }}>
                {this.renderCoinCards()}
              </Paper>
            </ScrollView>
        )


    }
}

const styles = {
    contentContainer: {
        paddingBottom: 100,
        paddingTop: 25
    }
}

function mapStateToProps(state) {
    return {
        crypto: state.crypto
    }
}

export default connect(mapStateToProps, { FetchCoinData })(CryptoContainer)
