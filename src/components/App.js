import React from 'react';
import { View, Text, Easing, ImageBackground, StyleSheet, Animated} from 'react-native';
//import ajax from '../ajax';


class App extends React.Component {
    width = new Animated.Value(0);
    state = {
      loadingFinished : 0
    }
    animateTitle = () => {
      const loadingFinished = 294 ;
      Animated.timing(this.width, {
        toValue: loadingFinished,
        duration: 3000,
        easing: Easing.ease,
      }).start(({ finished }) => {
        if (finished) {
          this.setState ({ loadingFinished }) ;
        }
      });
    };

    async componentDidMount(){
      this.animateTitle();
    }
    render() {

      if (this.state.loadingFinished) {
        return (
          <View style={styles.container}>
            <Text> Hello </Text>
          </View>
        );
      }

      return (
        <View style={styles.container}>
          <ImageBackground source={require('../../images/launchScreen1.png')} style={{width:'100%', height:'100%'}}>
            <Animated.Image source={require('../../images/whiteLoadingBar.png')} style={{width:this.width, height:'3%', marginTop:621, marginLeft:48}}/>
          </ImageBackground>
        </View>
      );

    }
}


const styles = StyleSheet.create ({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  header: {
    fontSize: 30
  },

  main: {
    marginTop: 50
  }
});

export default App;
