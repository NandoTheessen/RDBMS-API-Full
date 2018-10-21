const express = require('express');
const server = express();
const dbConfig = require('./knexfile');
const db = require('knex')(dbConfig.development);

server.use(express.json());

server.post('/api/cohorts', async (req, res) => {
  const name = req.body.cohort;

  try {
    const cohort = await db('cohorts').insert({ cohort: name });
    res.status(201).json(cohort);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

server.get('/api/cohorts', async (req, res) => {
  try {
    const cohorts = await db('cohorts').select('cohort');
    res.status(201).json(cohorts);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

server.get('/api/cohorts/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const cohort = await db('cohorts')
      .select(name)
      .where({ id });
    res.status(201).json(cohort);
  } catch (err) {
    res.status(500).json(err);
  }
});

server.get('/api/cohorts/:id/students', async (req, res) => {
  const { id } = req.params;
  console.log('Fire', id);
  try {
    const students = await db('students')
      .select('name')
      .where({ cohort: id });
    console.log('success');
    res.status(201).json(students);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

server.put('/api/cohorts/:id', async (req, res) => {
  const { id } = req.params;
  const { cohort } = req.body;
  try {
    const newCohort = await db('cohorts')
      .where({ id })
      .update(cohort);
    res.status(201).json(newCohort);
  } catch (err) {
    res.status(500).json(err);
  }
});

server.delete('/api/cohorts/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const cohort = await db('cohorts')
      .where({ id })
      .del();
    res.status(201).json(cohort);
  } catch (err) {
    res.status(500).json(err);
  }
});

server.listen(3300, () => {
  console.log('Server is listening on port 3300');
});

module.exports = db;
