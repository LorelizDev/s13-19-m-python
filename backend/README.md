# Setting
Configuraciones necesarias para arrancar el proyecto en el local
## Requisitos previos

Python 3.10+
Poetry

## Pasos para preparar el entorno
Clona el proyecto con el siguiente comando
`git clone https://github.com/No-Country/s13-19-m-python`

Haras un archivo `.env` donde guardes las siguientes variables, guardalo en la carpeta
de `backend`

```
SECRET_KEY=django-insecure-jj5yp26ptiql6jo%n+22(tb5ock0(=q_f12l!xor!$k4ea%1wu
DEBUG=True
```
----
### Poetry config

Instalas Poetry con el siguiente comando:

```
pip install poetry
```
> 📝 **Note:** NO hacer `python -m venv venv` o algo como eso, Poetry se encarga de los paquetes.

Despues de haber instalado **Poetry**, escribe esto en la terminal

![poetry install](../assets/images/poetry-install.png)

Una vez verificado que lo tienes instalado, agrega la siguiente configuracion en la terminal

```sh
poetry config virtualenvs.in-project true
```

Luego instalas dependecias con el siguiente comando:

```sh
poetry install
# Luego para iniciar el entorno virtual
poetry shell
```

### Pre-commit config

Arranca el siguiente comando para configurar el **pre-commit**
```sh
poetry run pre-commit install
```

### Arrancar server

Arranca el servidor de Django.

```sh
python manage.py runserver
```
