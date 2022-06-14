# ImplementadoAplicacionJSErickDiaz
Este repositorio alojara el codigo correspondiente a la solución del trabajo denominado "Implementado Aplicación" del Training League de SofkaU C3

#Instalación de JSON-server

Para la descarga de este proyecto y la correcta ejecución del mismo es necesario instalar JSON-server, ya que esta herramienta permite consumir una api ficticia en la maquina local, para así poderla consumir desde un cliente (FrontEnd).

Para su instalación se necesita ejecutar un comando desde la terminal en la direccion de la carpeta descargada del proyecto:

npm install -g json-server

Posteriormente para levantar el servidor de la api falsa es necesario ejecutar este comando:

json-server -w -p 5000 assets/db.json

Esto hara que inicialice el servidor en el puerto 5000 del local escuchando la 'base de datos' suministrada

Finalmente es necesario levantar otro servidor para el cliente que va a consumir la api, por lo que se recomienda ejecutar el archivo index.html con Live Server, una extensión de VS code

#VIDEO SUSTENTACION: https://youtu.be/TxvkpwKCUrI
