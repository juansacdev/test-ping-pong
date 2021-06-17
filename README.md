
# Ping Pong Traker

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`DB URI`

`PORT`



## Demo

**[Link demo](https://arvolution-test.herokuapp.com/)**


## API Reference

#### Renderiza el formulario

```http
  GET /
```

#### Renderiza el dashboard

```http
  GET /dashboard
```

#### Crea un nuevo juego

```http
  POST /new-game
```

| Body | Type     | Required                       |
| :-------- | :------- | :-------------------------------- |
| `namePlayerOne`      | `string` | **True**. |
| `namePlayerTwo`      | `string` | **True**. |

#### Guardar la partida

```http
  POST /save-game
```

| Parameters | Type     | Required                       |
| :-------- | :------- | :-------------------------------- |
| `players`      | `Array[ObjectID]` | **True** |
| `winner`      | `ObjectID` | **True**. |
| `point_diference`      | `Number` | **True**. |

```http
  POST /save-points-user
```

| Parameters | Type     | Required                       |
| :-------- | :------- | :-------------------------------- |
| `playerId`      | `ObjectID` | **True** |
| `wins`      | `Number` | **True**. |


