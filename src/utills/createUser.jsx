const CreateUser = () => {
    return (
        fetch ("https://playground.4geeks.com/todo/users/rocio_m" , {
            method: "POST",
            body:JSON.stringify({}),
            headers:
           { "Content-Type": "application/json"}
            
        })
        .then(resp=>{
            return resp.json();
        })
        .then(data=>{
            console.log(data)
        })
        .catch(error=>{
            console.log(error)
        })

    )
}

export default CreateUser;