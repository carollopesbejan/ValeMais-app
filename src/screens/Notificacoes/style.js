import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 35,
    backgroundColor: "#F3F1F4",
    justifyContent: 'flex-start',
    alignItems: 'center', 
  },

  containerTitle: {
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 50,
    flexDirection: 'row',
    position: 'relative',
  },

  textTitelContainer:{
    flex: 1,
    alignItems: 'center',
    marginLeft: -41, 
  },

  textTitle: {
    fontSize: 22.2,
    color: '#141414',
  },

  chevronIcon: {
    marginLeft: 15, 
  },

});