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
    marginLeft: 52, 
  },

  textUser: {
    fontSize: 20.2,
    color: '#141414',
    alignSelf: 'flex-start',
    marginBottom: 40, 
  },

  imageContainer: {
    width: 200,
    height: 200,
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

  textOverlayContainer: {
    position: 'absolute',
    top: '77%',
    left: '37.5%',
    transform: [{ translateX: -75 }, { translateY: -10 }],
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    width: 200,
    height: 100, 
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  
  textOverlay: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold', 
    textAlign: 'center',
  },

  containerForms: {
    flex: 1,
    width: '100%',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginLeft: 52,
  },

  inputContainer: {
    marginBottom: 20, 
    width: '85%',
  },

  textForms: {
    fontSize: 16,
    color: '#141414',
    marginBottom: 8,  
  },

  textInput: {
    borderColor: '#000',  
    borderWidth: 1,  
    borderRadius: 8,  
    padding: 5,
    paddingLeft: 20,  
    width: '100%',
  },

});