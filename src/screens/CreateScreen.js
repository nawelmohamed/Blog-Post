import React, {useContext, useState} from "react";
import {View, Text, TextInput, StyleSheet, Button} from "react-native";
import { Context } from "../context/BlogContext";



const CreateScreen = ({navigation}) => {
    const [title, setTitle]= useState('');
    const [content, setContent]= useState('');
    const {addBlogPost}=useContext(Context);
   
   return <View>
        <Text style={styles.label}>Enter Text</Text>
        <TextInput style={styles.input} value={title} onChange={text=> setTitle(text)}/>
        <Text style={styles.label}>Enter Content</Text>
        <TextInput style={styles.input} value={content} onChange={text=> setContent(text)}/>
        <Button
           title= 'Add Blog Post'
           onPress={()=> addBlogPost (title, content)}
        />
    </View>
};
const styles= StyleSheet.create({
    input: {
        fontSize: 18,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 15,
        margin:5,
        padding: 5
    },
    label:{
        fontSize: 20,
        marginBottom: 5,
        marginLeft: 5
    }


});

export default CreateScreen;