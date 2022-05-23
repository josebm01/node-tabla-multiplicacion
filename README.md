# node-tabla-multiplicacion
Aplicación que permite hacer multiplicaciones y graba el resultado en una archivo txt, además de pasar pasar argumentos por consola.

Comando de ejemplo: 

--b: base para la multiplicación
--hasta: cantidad de veces que se va a multiplicar
-l: peude ir o no 

node app --b=numero -l --hasta=numero


Options:
      --help     Show help                                             [boolean]
      --version  Show version number                                   [boolean]
  -b, --base     Es la base de la tabla de multilplicar      [number] [required]
  -h, --hasta    Límite para hacer la tabla de multiplicaciones
                                                          [number] [default: 10]
  -l, --listar   Muestra la tabla de multiplicar en consola
                                                      [boolean] [default: false]
