const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();

// SETTINGS
app.set('port', process.env.PORT || 3000);

// MIDDLEWARES
app.use(morgan('dev'));
app.use(express.json());
app.use(cors({origin: 'http://localhost:4200'}));

// ROUTES
app.use('/api/calificar', require('./routes/calificar.routes'));

// START SERVER - Framework Express
app.listen(app.get('port'), () => {
    console.log('Server on Port ' + app.get('port'));
});