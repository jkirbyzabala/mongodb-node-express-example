import express from "express";
import db from "../db/conn.mjs";
import { ObjectId } from "mongodb";
const router = express.Router();

// Get a single user entry
router.get("/:id", async (req, res) => {
  let collection = await db.collection("users");
  let query = { _id: new ObjectId(req.params.id) };
  let result = await collection.findOne(query);
  if (!result) res.send("Not found").status(404);
  else res.send(result).status(200);
});
// Create a single user entry
router.post("/", async (req, res) => {
    let collection = await db.collection("users");
    let newDocument = req.body;
    let result = await collection.insertOne(newDocument);
    res.send(result).status(204);
  });
export default router;