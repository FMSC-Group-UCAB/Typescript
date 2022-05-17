## _myOnlineDoctor_


## TypeScript


Implementado por el subgrupo de "The Hackers" conformado por:
- Carlos Doffiny S-V
- Manuel Da Pena
- Santiago Figueroa 
- Froilán Roa

En el siguiente repositorio esta la implementación a lo solicitado en el enunciado del ShortPaper #1 :

- Entidades de dominio 
- Cuatro (4) casos de uso: Registrar Suscripción, Registrar Paciente, Crear Suscripción y Agendar Cita.


## Instalaciones:


Para poder compilar y ejecutar el código se deben instalar las dependencias de node:

```sh
$ npm install
```


## Comandos:


Para compilar el código:
```sh
$ npm run start:build
```
Para compilar el código en modo watch:
```sh
$ npm run start:dev
```


Para compilar el código en main:
```sh
$ npm run main
```
## Observar la interacción de los objetos:

La interacción de los objetos se hará el archivo main.ts, el cual se compilara ejecutando el comando arriba señalado. Este archivo contiene una función para cada caso de uso, por lo cual pueden ejecutarse todos en la misma simulación, o puede comentarse el llamado a la función, en caso de solo querer ejecutar un caso de uso en específico.


## Tabla con las actividades mas significativas de cada integrante: 

# Da Pena, Manuel. 

| Actividad                                                                                                            | Commit                                                |
|----------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------|
| Implementación de la interfaz genérica IValueObject                                                                  | https://github.com/FMSC-Group-UCAB/Typescript/pull/2  |
| Implementación del patrón de diseño Observador, junto con sus eventos de dominio y observers                         | https://github.com/FMSC-Group-UCAB/Typescript/pull/4  |
| Implementación de Value Objects y entidades relacionadas a suscripción (Subscription).                               | https://github.com/FMSC-Group-UCAB/Typescript/pull/7  |
| Implementación de las interfaces IPayMethod y IGeoLocator aplicando el patrón de diseño de inyección de dependencias | https://github.com/FMSC-Group-UCAB/Typescript/pull/18 |
| Implementación del patrón repositorio                                                                                | https://github.com/FMSC-Group-UCAB/Typescript/pull/26 |

# Doffiny S-V, Carlos.

|Actividad                                              |                         Commit                     |
|-----------------------------------------------------------------------------------------------------------|-----------------------------------------------------|
| Implementación de las entidades Patient y Appointment, con sus respectivos Value Objects y tipos enumerados | https://github.com/FMSC-Group-UCAB/Typescript/pull/12 |
| Implementación del Caso de Uso "Solicitar cita" con sus excepciones Pt 1                                    | https://github.com/FMSC-Group-UCAB/Typescript/pull/22 |
| Implementación del Caso de Uso "Solicitar cita" con sus excepciones Pt 2                                    | https://github.com/FMSC-Group-UCAB/Typescript/pull/23 |
|                                                                                                             



# Figueroa, Santiago.

|Actividad                                                  | Commit                                               |
|-----------------------------------------------------------------------------------------------------------|-------------------------------------------------------|
| Implementacion de los value objects relacionados con CaseFile y CaseFileCardiologist y sus tipos enumerados | https://github.com/FMSC-Group-UCAB/Typescript/pull/5  |
| Aplicacion del patron factory para las entidades CaseFileCardiologist y CaseFile                            | https://github.com/FMSC-Group-UCAB/Typescript/pull/10 |
| Aplicacion del patron observador para el caso de uso Registrar Suscripcion                                  | https://github.com/FMSC-Group-UCAB/Typescript/pull/24 |


# Roa, Froilán. 

| Actividad                                                                                         | Commit                                                                                        |
|---------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------|
| Creación de la entidad doctor con todos sus ValueObjects, Enumerados de especialidad y retención. | https://github.com/FMSC-Group-UCAB/Typescript/commit/cecf4f683b4370cbb65d227078851cb18b60c857 |
| Creación del caso de uso registrar paciente.                                                      | https://github.com/FMSC-Group-UCAB/Typescript/commit/da5ab89f54644e163e76121cb05c29e7484f2457 |
| Creacion del Readme                                                                               | https://github.com/FMSC-Group-UCAB/Typescript/pull/21                                         |