import React from 'react';
import { View, StyleSheet } from 'react-native';

export const ProgressBar = ({ totalSteps, currentStep }) => {
  return (
    <View style={styles.container}>
      {Array.from({ length: totalSteps }).map((_, index) => (
        <View
          key={index}
          style={[
            styles.step,
            index < currentStep ? styles.activeStep : styles.inactiveStep,
          ]}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: "9%",
    margin: "20",
    justifyContent: 'center',
    alignItems: 'center',
  },
  step: {
    width: "10%",
    height: "10%",
    borderRadius: 5,
    margin: 2,
    backgroundColor: 'lightgrey',
  },
  activeStep: {
    backgroundColor: 'blue',
  },
  inactiveStep: {
    backgroundColor: 'grey',
  },
});

export default ProgressBar;
