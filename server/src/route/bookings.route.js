import express from "express";
import {
  CancelBooking,
  CreateBooking,
  GetBookings,
  GetCancelBookings,
  InsertCancelBooking,
} from "../controller/bookings.controller.js";
import { Middleware } from "../middleware/middleware.js";

export const bookingRouter = express();

bookingRouter.post("/create-booking", Middleware, CreateBooking);

bookingRouter.get("/get-bookings", Middleware, GetBookings);

bookingRouter.delete("/cancel-booking/:bookingId", Middleware, CancelBooking);

bookingRouter.post("/insert-cancel-booking", Middleware, InsertCancelBooking);

bookingRouter.get("/get-cancel-bookings", Middleware, GetCancelBookings);
