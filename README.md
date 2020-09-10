# SPA Prueba Desarrollo XpertGroup

Prueba Desarrollo - XpertGroup. Califica el servicio que un CallCenter brinda a sus clientes por medio del historial de las conversaciones.

## Componentes
Se desarrolla la capa de Presentación por medio del framework Angular en su ultima versión estable.

Para la capa de Aplicaciones y Servicios, se hizo uso de tecnologia JavaScript, especialmente node.js sobre el framework Express.

## API Rest

### HOST: 
localhost:3000/api/calificar

### METODO HTTP: 
Post

### BODY
{
    "conversacion": [
        "11:51:00 CLIENTE1: Hola",
        "11:51:05 ASESOR1: Hola CLIENTE1, bienvenido al centro de servicio.",
        "11:51:10 CLIENTE1: Buenas tardes, tengo un inconveniente URGENTE, URGENTE, muy URGENTE. ",
        "11:51:15 ASESOR1: Con mucho gusto lo atenderemos.",
        "11:51:25 CLIENTE1: Gracias. EXCELENTE SERVICIO."
    ]
}

### RESPONSE
{
    "status": true,
    "mensaje": "Calificación Exitosa!",
    "totalPuntos": 110,
    "numEstrellas": "*****"
}



