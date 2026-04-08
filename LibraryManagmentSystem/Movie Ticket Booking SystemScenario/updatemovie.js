import fs from "fs";
function updateMovie(req, res) {    
    try {
        const { id, title, genre, duration } = req.para;
        if (!id || !title || !genre || !duration) {
            return res.status(400).json({ message: "All fields are required!" });
        }   
        let movies = [];
        if (fs.existsSync("movies.json")) {
            const data = fs.readFileSync("movies.json", "utf-8");
            movies = JSON.parse(data);
        }
        const movieIndex = movies.findIndex(m => m.id === parseInt(id));
        if (movieIndex === -1) {
            return res.status(404).json({ message: "Movie not found!" });
        }
        movies[movieIndex] = { id: parseInt(id), title, genre, duration };  
        fs.writeFileSync("movies.json", JSON.stringify(movies, null, 2));
        res.status(200).json({ message: "Movie updated successfully!", movie: movies[movieIndex] });
    }
    catch (error) {
        console.error(error);
        res.status(500).send("Server error");
    }
}
export default updateMovie;


 
