import express from "express"
import problems from "../problems/problems"

const router = express.Router();

const keys = JSON.stringify(Array.from(problems.keys()));

router.get("/list", (_req, res) => {
    res.send(keys);
});

export default router;