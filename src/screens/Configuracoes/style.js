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

  containerUser: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 35,
    marginLeft: 52, 
  },

  textUser: {
    fontSize: 20.2,
    color: '#141414',
    alignSelf: 'flex-start',
    marginBottom: 40, 
  },

  imageContainer: {
    width: 225,
    height: 225,
    borderRadius: 125,
    overflow: 'hidden',
    justifyContent: 'flex-start',
    marginRight: 55, 
  },

  imageUser: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },

});