import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // API route for submitting contact form
  app.post("/api/contact", async (req, res) => {
    try {
      const { name, email, phone, message } = req.body;
      
      // Validate required fields
      if (!name || !email || !phone || !message) {
        return res.status(400).json({ message: "All fields are required" });
      }
      
      // In a real application, you would save this to a database
      // For now, we'll just return success
      return res.status(200).json({ 
        success: true, 
        message: "Message received, we'll contact you soon." 
      });
    } catch (error) {
      console.error("Error submitting contact form:", error);
      res.status(500).json({ message: "Failed to submit contact form" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
