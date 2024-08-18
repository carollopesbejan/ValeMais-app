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
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 50,
  },

  textTitle: {
    fontSize: 22.2,
    color: '#141414',
    textAlign: 'center',
  },

  containerUser: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingBottom: 13, 
  },

  imageContainer: {
    width: 80,
    height: 80,
    borderRadius: 50,
    overflow: 'hidden',
    marginBottom: 10,
    marginLeft: -115,
  },

  imageUser: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },

  textUser: {
    fontSize: 21.2,
    color: '#141414',
    marginLeft: 15,
  },

  containerList: {
    flex: 1,
    alignItems: 'flex-start',
    padding: 10,
    width: '100%',
  },

  containerListOpcoes: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginLeft: 10,
  },

  iconListOpcoes: {
    marginRight: 13,
  },

  textContainerListOpcoes: {
    flexDirection: 'column',
  },

  textContainerListOpcoes2: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    flex: 1, 
  },

  titleListOpcoes: {
    fontSize: 18.2,
    color: '#141414',
  },

  subtitleListOpcoes: {
    fontSize: 14.2,
    color: '#8A8A8A',
  },

  listSeparator: {
    marginTop: 11,
    marginBottom: 11,
    marginLeft: 10,
    height: 1,
    borderWidth: 0.5,
    borderColor: '#B3B3B3',
    width: '93%',
  },

  separator: {
    marginTop: 30,
  },

  chevronIcon: {
    marginLeft: 160, 
  },

});
