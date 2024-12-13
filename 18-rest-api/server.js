const app = express();

const PORT = 3001;

app.listen(PORT,() => {
    console.log(`Servidor está corriendo en el puerto ${PORT}`);
})