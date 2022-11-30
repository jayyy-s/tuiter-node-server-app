import * as tuitsDao from './tuits-dao.js'

const createTuit = async (req, res) => {
    const newTuit = req.body;
    newTuit.liked = false;
    newTuit.likes = 0;
    newTuit.disliked = false;
    newTuit.dislikes = 0;
    newTuit.replies = 0;
    newTuit.retuits = 0;
    newTuit.time = "Just now";
    const insertedTuit = await tuitsDao.createTuit(newTuit);

    res.json(insertedTuit);
}

const findTuits = async (req, res) => {
    const tuits = await tuitsDao.findTuits();
    res.json(tuits);
}

const updateTuit = async (req, res) => {
    const tuitdIdToUpdate = parseInt(req.params.tid);
    const updates = req.body;
    const status = await tuitsDao.updateTuit(tuitdIdToUpdate, updates);
    res.json(status);
}

const deleteTuit = async (req, res) => {
    const tuitIdToDelete = parseInt(req.params.tid);
    const status = await tuitsDao.deleteTuit(tuitIdToDelete);

    res.json(status);
}

export default (app) => {
    app.post('/api/tuits', createTuit);
    app.get('/api/tuits', findTuits);
    app.put('/api/tuits/:tid', updateTuit);
    app.delete('/api/tuits/:tid', deleteTuit);
}
