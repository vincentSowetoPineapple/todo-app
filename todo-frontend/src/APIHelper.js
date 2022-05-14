import fetch from 'node-fetch';
const API_URL='http://127.0.0.1:3001/todos/';

async function createTodo(todo){
    console.log(todo);
    console.log('Saving todo');

    try{
        let fetchData = {
                    method: 'POST',
                    body: JSON.stringify({"task":todo,"completed":false}),
                    headers: new Headers({
                        'Content-Type': 'application/json; charset=UTF-8'
              })
                }
        const response = await fetch(API_URL, fetchData);
        if(!response.ok){
            const message = `An error has occured: ${response.status}`;
            console.log(message);
            throw new Error(message);
        }
        
        const data = await response.clone().json();;
        console.log(data);
        return data;
    }catch(err){
        console.log('Error in creating to do');
        console.log(err);
        return [];
    }

}

 async function deleteTodo(id){
    try{
        let fetchData = {
                    method: 'DELETE',
                    headers: new Headers({
                        'Content-Type': 'application/json; charset=UTF-8'
              })
                }
        const response = await fetch(`${API_URL}${id}`, fetchData);
        if(!response.ok){
            const message = `An error has occured: ${response.status}`;
            console.log(message);
            throw new Error(message);
        }
        
        const data = await response.clone().json();;
        console.log(data);
        return data;
    }catch(err){
        console.log('Error in creating to do');
        console.log(err);
        return [];
    }
    
}

 async function updateTodo(id, payload){

    try{
    let fetchData = {
                method: 'PUT',
                body: JSON.stringify({"completed": payload.completed}),
                headers: new Headers({
                    'Content-Type': 'application/json; charset=UTF-8'
          })
            }
        const response = await fetch(`${API_URL}${id}`, fetchData);
        if(!response.ok){
            const message = `An error has occured: ${response.status}`;
            console.log(message);
            throw new Error(message);
        }
        
        const data = await response.clone().json();;
   //     console.log(data);
        return data;
    }catch(err){
        console.log('Error in creating to do');
        console.log(err);
        return [];
    }
}

async function getAllTodos() {
    
    try{
    const response = await fetch(API_URL);
    
    if(!response.ok){
        const message = `An error has occured: ${response.status}`;
        console.log(message);
        throw new Error(message);
    }
    
    const data = await response.clone().json();;
   // console.log(data);
    return data;
    }catch(error){
        if (error.name === 'AbortError') {
			console.log('request was aborted');
		}
        return [];
    }
}



export default {createTodo, deleteTodo, updateTodo, getAllTodos} ;


