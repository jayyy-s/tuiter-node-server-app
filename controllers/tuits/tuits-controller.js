import posts from "./tuits.js";
let tuits = posts;

const createTuit = (req, res) => {
    const newTuit = req.body;
    newTuit._id = (new Date()).getTime();
    newTuit.liked = false;
    newTuit.likes = 0;
    newTuit.disliked = false;
    newTuit.dislikes = 0;
    newTuit.replies = 0;
    newTuit.retuits = 0;
    newTuit.time = "Just now";
    tuits.push(newTuit);
    res.json(newTuit);
}

const findTuits  = (req, res) => {
    res.json(tuits);
}

const updateTuit = (req, res) => {
    const tuitdIdToUpdate = parseInt(req.params.tid);
    const updates = req.body;
    const tuitIndex = tuits.findIndex((t) => t._id === tuitdIdToUpdate)
    tuits[tuitIndex] = {...tuits[tuitIndex], ...updates};
    res.sendStatus(200);
}

const deleteTuit = (req, res) => {
    const tuitIdToDelete = parseInt(req.params.tid);
    tuits = tuits.filter(t => t._id !== tuitIdToDelete);
    res.sendStatus(200);
}

export default (app) => {
    app.post('/api/tuits', createTuit);
    app.get('/api/tuits', findTuits);
    app.put('/api/tuits/:tid', updateTuit);
    app.delete('/api/tuits/:tid', deleteTuit);
}
