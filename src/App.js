import React,{ useState } from 'react';

import jsonplaceholder from './apis/jsonplaceholder';
import Button from './components/Button';
import Resources from './components/Resources';


const App = () => {
    const [resources,setResources ] = useState([]);

    //jsonplaceholderの中からPostsの配列をとってくる時
    const getPosts = async() => {
        //getPostsの中で正常に動いている際にはtry,何かしらのエラーが起こった場合にはcatsh
        try{
            const posts = await jsonplaceholder.get('/posts');
            setResources(posts.data);
        }catch (err) {
            console.log(err);
        }
    };
    
    //jsonplaceholderの中からAlbumsの配列をとってくる時
    const getAlbums = async() => {
        //getPostsの中で正常に動いている際にはtry,何かしらのエラーが起こった場合にはcatsh
        try{
            const albums = await jsonplaceholder.get('/albums');
            setResources(albums.data);
        }catch (err) {
            console.log(err);
        }
    };

    //jsonplaceholderの中からTodosの配列をとってくる時
    const getTodos = async() => {
        //getPostsの中で正常に動いている際にはtry,何かしらのエラーが起こった場合にはcatsh
        try{
            const todos = await jsonplaceholder.get('/todos');
            setResources(todos.data);
        }catch (err) {
            console.log(err);
        }
    };

    return(
        <div className='ui cintainer' style={{ marginTop: '30px'}}>
            <Button onClick={getPosts} color='primary' text='posts' />
            <Button onClick={getAlbums} color='red' text='albums' />
            <Button onClick={getTodos} color='orange' text='todos' />
            <Resources resources={resources} />
        </div>
    );
};

export default App;