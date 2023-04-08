import { TouchableOpacity, StyleSheet, Text, Linking } from 'react-native'; 
const whatsappLink = "https://wa.me/1165188743";
 function BotonFlotante() { return ( Linking.openURL(whatsappLink).BotonFlotante); } 

 const styles = StyleSheet.create({ boton: { position: 'absolute', bottom: 20, right: 20, width: 60, height: 60, backgroundColor: '#25d366', borderRadius: 30, alignItems: 'center', justifyContent: 'center', elevation: 3, }, 
textoBoton: { fontSize: 12, color: '#fff', textAlign: 'center', }, }); export default BotonFlotante;