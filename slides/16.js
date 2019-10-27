// Usando apenas callbacks
app.get("/users", function(req, res) {
  db.get(QUERY1, {}, result1 => {
    db.get(QUERY2, { result1 }, result2 => {
      db.get(QUERY3, { result2 }, result3 => {
        db.get(QUERY4, { result3 }, result4 => {
          res.send(result4);
        });
      });
    });
  });
});

// Usando promises
app.get("/users", function(req, res) {
  db.get(QUERY1)
    .then(result1 => db.get(QUERY2, { result1 }))
    .then(result2 => db.get(QUERY3, { result2 }))
    .then(result3 => db.get(QUERY4, { result3 }))
    .then(result4 => res.send(result4));
});

// Usando async/await
app.get("/users", async function(req, res) {
  const result1 = await db.get(QUERY1);
  const result2 = await db.get(QUERY2, { result1 });
  const result3 = await db.get(QUERY3, { result2 });
  const result4 = await db.get(QUERY4, { result3 });
  res.send(result4);
});
