
# API REST Basica usando Express con TS 

API REST Basica para ser usada como plantilla para futuros proyectos usando este STACK de tecnologias.

## Descripción

La aplicación proporciona funcionalidades para:
- **Autenticación**: Los usuarios pueden iniciar sesión y crear órdenes.
- **Cargar Archivos**: Los usuarios pueden cargar archivos a través de la API. Los archivos se almacenan en el sistema y se registran en la base de datos.
- **Gestión de Órdenes**: Los usuarios pueden consultar las órdenes que han creado.

## Tecnologías Utilizadas

- **Node.js** con **Express** para el servidor backend.
- **TypeScript** como lenguaje de programación.
- **TypeORM** para la gestión de bases de datos con PostgreSQL.
- **Multer** para la carga de archivos.
- **JWT (JSON Web Tokens)** para la autenticación de usuarios.
- **ESM (ECMAScript Modules)** para la organización del código.

## Instalación

Sigue estos pasos para instalar y ejecutar el proyecto en tu máquina local:

1. **Clona este repositorio:**

   ```bash
   git clone https://github.com/tu-usuario/tu-repo.git
   ```

2. **Instala las dependencias:**

   Entra en el directorio del proyecto e instala las dependencias con npm o yarn:

   ```bash
   cd tu-repo
   npm install
   ```

   O si usas **yarn**:

   ```bash
   yarn install
   ```

3. **Configura la base de datos:**

   - Asegúrate de tener MySQL instalado y en funcionamiento.
   - Crea una base de datos para tu aplicación (por ejemplo, `ordenes_db`).
   - Configura los detalles de la conexión a la base de datos en el archivo de configuración de TypeORM (`data-source.ts`).

4. **Ejecuta el servidor:**

   Una vez que todo esté configurado, puedes iniciar el servidor de desarrollo:

   ```bash
   npm run dev
   ```

   El servidor se ejecutará en `http://localhost:3000`.

## Estructura del Proyecto

El proyecto tiene la siguiente estructura:

```
├── src
│   ├── controllers      # Controladores para manejar las rutas
│   ├── entities         # Entidades de la base de datos (Documentos, Usuarios, etc.)
│   ├── middleware       # Middleware para autenticación y manejo de archivos
│   ├── routes           # Definición de rutas API
│   ├── services         # Lógica de negocio (por ejemplo, el servicio de almacenamiento)
│   └── db               # Configuración de TypeORM y conexión a la base de datos
├── .env                 # Variables de entorno (por ejemplo, base de datos, JWT secret)
├── package.json         # Dependencias y scripts del proyecto
└── README.md            # Documentación del proyecto
```

## Autenticación

La aplicación utiliza **JWT (JSON Web Tokens)** para la autenticación de usuarios. Un usuario debe autenticarse a través de un endpoint de login (que puedes agregar en la API) y obtener un token JWT, que se debe incluir en el encabezado `Authorization` de las solicitudes protegidas.

### Ejemplo de solicitud de autenticación (login):
```bash
POST /login
{
  "email": "usuario@ejemplo.com",
  "password": "contraseña123"
}
```

### Ejemplo de uso del token:
```bash
GET /orders
Authorization: Bearer <tu-token-jwt>
```

## Notas

- El almacenamiento de archivos se realiza de manera que los archivos se guardan en la carpeta `storage` dentro del proyecto.
- El servicio de carga de archivos está gestionado por **Multer**, y los archivos se almacenan en el sistema de archivos. Si lo deseas, puedes adaptar este servicio para usar almacenamiento en la nube (por ejemplo, AWS S3, Firebase, etc.).
