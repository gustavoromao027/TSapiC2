import express from 'express';
import authRoutes from './routes/AuthRoutes';
import userRoutes from './routes/UserRoutes';
import commentRoutes from './routes/CommentRoutes';

const app = express();

app.use(express.json());

app.use('/auth', authRoutes);
app.use('/users', userRoutes);
app.use('/', commentRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});