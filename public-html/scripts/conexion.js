 function Conexion() {
    var config = {  
        server: '189.217.80.113', 
        authentication: {
            type: 'default',
            options: {
                userName: 'your_username', 
                password: 'your_password'  
            }
        },
        options: {
   
            encrypt: true,
            database: 'your_database' 
        }
    };  
    var connection = new Connection(config);  
    connection.on('connect', function(err) {  
        
        console.log("Connected");  
    });
    
    connection.connect();
}