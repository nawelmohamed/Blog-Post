
import CreateDataContext from "./CreateDataContext";

const blogReducer = (state,action)=> {
   switch (action.type){
       case "add_blogPost":
           return [
               ...state, 
               {id: Math.floor(Math.random ()*99999),
                title: action.payload.title,
                content: action.payload.content
            }]
        case "delete_blogPost" :
            return state.filter(blogPost=> blogPost.id !== action.payload );     
       default:
           return state ;
    }
};


const addBlogPost = (dispatch) => {
    return(title,content)=>{
        dispatch ({type: "add_blogPost", payload: {title, content}})
    }
    ;
};

const deleteBlogPost = (dispatch)=>{
    return id => {
        dispatch({type: "delete_blogPost" , payload: id})
    }
}

export const {Context, Provider}= CreateDataContext(
    blogReducer, 
    {addBlogPost, deleteBlogPost},
    []
    );