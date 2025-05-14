import express from "express";
import routes from "./src/routes/index.js";
import notFoundHandler from "./src/middlewares/notFoundHandler.js";
import errorHandler from "./src/middlewares/errorHandler.js";
import cors from "cors";
import jsonValid from "./src/middlewares/jsonInvalid.js";
import setupSwagger from "./src/configs/swaggerConfig.js";
import { connectDb } from "./src/configs/db.js";

const app = express();
app.use(express.json());

// Kết nối DB
connectDb();

// CORS cấu hình
app.use(
  cors({
    origin: ["http://localhost:5173", "http://localhost:5174"],
    credentials: true,
  })
);

// Swagger docs
setupSwagger(app);

// Route gốc
app.get("/", (req, res) => {
  res.send("Hello from Express on Vercel!");
});

// API routes
app.use("/api", routes);

// Middleware xử lý JSON không hợp lệ
app.use(jsonValid);

// Middleware xử lý route không tồn tại
app.use(notFoundHandler);

// Middleware xử lý lỗi chung
app.use(errorHandler);

// ❌ KHÔNG dùng app.listen hay PORT

// ✅ Export default cho Vercel
export default app;
