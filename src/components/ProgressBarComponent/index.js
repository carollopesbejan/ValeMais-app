import React from 'react';
import { View, StyleSheet } from 'react-native';

const ProgressBar = ({ totalSteps, currentStep }) => {
  const activeStep = currentStep - 1;

  return (
    <View style={styles.container}>
      {[...Array(totalSteps)].map((_, index) => (
        <View
          key={index}
          style={[
            styles.step,
            index === activeStep ? styles.activeStep : styles.inactiveStep,
            index > 0 && { marginLeft: 10 }, // Adiciona margem à esquerda a partir do segundo elemento
          ]}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 10,
    marginTop: 50,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  step: {
    width: 17,
    height: 17,
    borderRadius: 10,
    backgroundColor: 'lightgrey',
  },
  activeStep: {
    backgroundColor: '#076D78',
    height: 15,
    width: 45,
  },
  inactiveStep: {
    backgroundColor: '#8FB6BD',
  },
});

export default ProgressBar;
