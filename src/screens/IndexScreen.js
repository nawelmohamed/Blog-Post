import React, {useContext}from 'react';
import {Text, View, StyleSheet, Button, FlatList, TouchableOpacity} from 'react-native';
import {Context} from "../context/BlogContext";
import {Feather} from '@expo/vector-icons'

const IndexScreen = ({navigation}) => {
const {state, addBlogPost, deleteBlogPost} = useContext(Context);

    return (
    
    <View>
        <Text>Index Screen</Text>
        <Button title= "Add Post" onPress={addBlogPost}/>
        <FlatList
            data= {state}
            keyExtractor={blogPost=>blogPost.title}
            renderItem={({item})=>{
                return <TouchableOpacity 
                onPress={()=>navigation.navigate("Show", {id: item.id})}>
                 <View style={styles.row}>
                    
                    <Text style={styles.title}>{item.title} - {item.id}</Text>
                    <TouchableOpacity onPress={()=> deleteBlogPost (item.id)}>
                      <Feather style={styles.icon} name="trash" size={24} color="black" />
                    </TouchableOpacity>
                </View>    
                </TouchableOpacity>  
            }}
        />
  
    </View>
   
     );
};
IndexScreen.navigationOptions =({navigation})=>{
    return {
        headerRight: (<TouchableOpacity onPress={()=>navigation.navigate('Create')}>
                      <Feather  name='plus' size={30}/>
                   </TouchableOpacity>
        )
        
    };
};

const styles= StyleSheet.create ({
     row: {
         flexDirection: "row",
         justifyContent: "space-between",
         paddingVertical: 20,
         paddingHorizontal: 10,
         borderTopWidth: 1,
         borderColor: "gray"
     },
     title: {
         fontSize: 18
     },
     icon : {
         fontSize: 24
     }

});

export default IndexScreen;