import express from "express";
import * as dotenv from "dotenv";
import { OpenAI } from "openai";

dotenv.config();

const router = express.Router();

const openAI = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

router.route("/").get((req, res) => {
  res.status(200).json({ message: "Success Viet Anh Api" });
});

router.route("/").post(async (req, res) => {
  try {
    const prompt = req.body;

    const response = await openAI.images.generate({
      prompt: prompt.prompt,
      n: 1,
      size: "1024x1024",
      response_format: "b64_json",
    });
    console.log("response", response);

    const image = response.data.data[0].b64_json;

    res.status(200).json({ photo: image });
  } catch (error) {
    res
      .status(error.status ?? 500)
      .json(error ?? 'Internal Server Error');
  }
});

export default router;
