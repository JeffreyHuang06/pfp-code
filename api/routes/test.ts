import express from 'express';
const router = express.Router();

router.get("/test", (_req, res) => {
    res.send("API is working properly");
});

export default router;