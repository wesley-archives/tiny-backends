import fastify from "fastify";
import cors from "@fastify/cors";
import { AuthRouter } from "@/route/auth.route";
import { ProfileRouter } from "@/route/profile.route";
import { Database } from "@/infra/database.infra";
import { ErrorMiddleware } from "@/middleware/error.middleware";
import { Server } from "@/infra/server.infra";
import dotenv from "dotenv";
import { EmployeeRouter } from "./route/employee.route";

// dotenv
dotenv.config();

// mongodb
const database = Database.getInstance();

// server
const server = fastify({ logger: true });

// middleware
server.setErrorHandler(ErrorMiddleware.handle);

// routes
const routes = () => {
  new AuthRouter(server, "/api/v1").register();
  new ProfileRouter(server, "/api/v1").register();
  new EmployeeRouter(server, "/api/v1").register();
};

// start
const start = async () => {
  try {
    await database.connect();

    routes();

    await server.register(cors, {
      origin: true,
      methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
      allowedHeaders: ["Content-Type", "Authorization"],
    });

    await server.listen({ port: Server.port });
    console.log(`Server is running on port ${Server.port}`);
  } catch (err) {
    console.error("Server startup error:", err);
    process.exit(1);
  }
};

// shutdown
const shutdown = async () => {
  try {
    await server.close();
    await database.disconnect();
  } catch (err) {
    console.error("Error during shutdown:", err);
  } finally {
    process.exit(0);
  }
};

["SIGINT", "SIGTERM", "SIGTSTP"].forEach((signal) => {
  process.on(signal, shutdown);
});

// startup
start();
