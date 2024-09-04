require('dotenv').config();
const express = require('express');
const cors = require('cors');
const Replicate = require('replicate');

const app = express();
const PORT = 4000;

app.use(express.json());
app.use(cors());

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN,
});

app.post('/generate-image', async (req, res) => {
  try {
    const {
      prompt,
      aspectRatio,
      imageFormat,
      disableSafetyCheck,
      quality,
      promptStrength
    } = req.body;

    const input = {
      prompt,
      guidance: 3.5,
      num_outputs: 1,
      aspect_ratio: aspectRatio,
      output_format: imageFormat,
      output_quality: quality,
      prompt_strength: promptStrength,
      num_inference_steps: 28,
      disable_safety_check: disableSafetyCheck
    };

    const output = await replicate.run("black-forest-labs/flux-dev", { input });
    res.json({ imageUrl: output[0] });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while generating the image' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
