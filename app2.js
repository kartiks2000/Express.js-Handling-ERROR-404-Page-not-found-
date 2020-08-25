// Handling ERROR 404 (Page not found OR Route not Handled)

// We need to erite the below code after handling all the other routes.
// NOTE-: It should always be written after all the other handled routes.

app.use('/',(res,req,next)=>{
    // Code....
});

// OR

app.use((res,req,next)=>{
    // Code....
});

// NOTE-: This is just a dummy code hence it wont work...