const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const Question = require('./model/Question');

dotenv.config();

const app = express();

// CORS — faqat frontend domeniga ruxsat beramiz
app.use(cors({
  origin: "https://ielts-mock-test-hku3.vercel.app",
  credentials: true
}));

app.use(express.json());

// MongoDB ulanadi
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ MongoDB ulandi'))
  .catch(err => console.error(err));

// ------------------ ADMIN CRUD ------------------

// Barcha savollarni olish
app.get('/api/questions', async (req, res) => {
  try {
    const questions = await Question.find();
    res.json(questions);
  } catch (err) {
    res.status(500).json({ error: "Server xatosi" });
  }
});

// Yangi savol qo‘shish
app.post('/api/questions', async (req, res) => {
  try {
    const newQ = new Question(req.body);
    await newQ.save();
    res.status(201).json(newQ);
  } catch (err) {
    res.status(500).json({ error: "Server xatosi" });
  }
});

// Savol tahrirlash
app.put('/api/questions/:id', async (req, res) => {
  try {
    const updatedQ = await Question.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedQ);
  } catch (err) {
    res.status(500).json({ error: "Server xatosi" });
  }
});

// Savol o‘chirish
app.delete('/api/questions/:id', async (req, res) => {
  try {
    await Question.findByIdAndDelete(req.params.id);
    res.json({ message: 'Savol o‘chirildi' });
  } catch (err) {
    res.status(500).json({ error: "Server xatosi" });
  }
});

// ------------------ USER FUNKSIYALAR ------------------

// Tasodifiy 30 ta savol olish
app.get('/api/test', async (req, res) => {
  try {
    const questions = await Question.aggregate([{ $sample: { size: 30 } }]);
    res.json(questions);
  } catch (err) {
    res.status(500).json({ error: "Server xatosi" });
  }
});

// Javoblarni tekshirish
app.post('/api/test/result', async (req, res) => {
  try {
    const { answers } = req.body; // [{id, answerIndex}]
    let correctCount = 0;

    for (let ans of answers) {
      const question = await Question.findById(ans.id);
      if (question && question.correctAnswerIndex === ans.answerIndex) {
        correctCount++;
      }
    }

    const percentage = ((correctCount / answers.length) * 100).toFixed(2);
    res.json({ correctCount, percentage });
  } catch (err) {
    res.status(500).json({ error: "Server xatosi" });
  }
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`🚀 Server ${PORT} portida ishlayapti`));
