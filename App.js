import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      
{/* Today's Tasks */}

<View style={styles.tasksWrapper}></View>
<Text style={styles.sectionTitle}> Today's Tasks </Text>
<View style={styles.items}></View>
{/* Task should be shown here */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBEAED',
   
  },
  tasksWrapper:{
    paddingTop:80,
    paddingHorizontal:20,
  },
  sectionTitle:{
    fontSize:24,
    fontWeight:'bold'
  },
  items:{},
});
