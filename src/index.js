
// requiero las dependencias previamente instalados anteriormente 
require('dotenv').config();
const app = require('./server');

// conexion a los puertos para visualizarse en google 
app.listen(app.get('port'), () => {
    console.log('server on port ', app.get('port'))
})