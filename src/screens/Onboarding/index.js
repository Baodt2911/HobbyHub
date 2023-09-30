import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React, {useRef} from 'react';
import Onboarding1 from './Onboarding1';
import Onboarding2 from './Onboarding2';
import {WIDTH_SCREEN} from '../../utils/Screen';

const Onboarding = () => {
  const scrollViewRef = useRef(null);
  const scrollToPosition = () => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo({x: WIDTH_SCREEN, animated: true});
    }
  };
  return (
    <View style={styles.container}>
      <ScrollView
        ref={scrollViewRef}
        style={styles.tabScroll}
        horizontal
        pagingEnabled
        decelerationRate="fast"
        snapToAlignment="start"
        showsHorizontalScrollIndicator={false}
        scrollEnabled={false}>
        <View style={{width: WIDTH_SCREEN}}>
          <Onboarding1 nextScreen={scrollToPosition} />
        </View>
        <View style={{width: WIDTH_SCREEN}}>
          <Onboarding2 />
        </View>
      </ScrollView>
    </View>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabScroll: {
    flex: 1,
  },
});
