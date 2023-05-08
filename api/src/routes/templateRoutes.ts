import express, { Request, Response } from "express";

const router = express.Router();

//get route
router.get("/get-example", async (req: Request | any, res: Response) => {
  try {
    res.status(200).send("Success");
  } catch (error) {
    res.status(500).send("Error");
  }
});

//post route
router.post("/post-example", async (req: Request | any, res: Response) => {
  try {
    res.status(200).send("Success");
  } catch (error) {
    res.status(500).send("Error");
  }
});

export default router;
