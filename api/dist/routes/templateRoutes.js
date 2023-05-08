import express from "express";
const router = express.Router();
//get route
router.get("/get-example", async (req, res) => {
    try {
        res.status(200).send("Success");
    }
    catch (error) {
        res.status(500).send("Error");
    }
});
//post route
router.post("/post-example", async (req, res) => {
    try {
        res.status(200).send("Success");
    }
    catch (error) {
        res.status(500).send("Error");
    }
});
export default router;
