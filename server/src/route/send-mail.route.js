import { Router } from "express";
import {
  SendMailCancel,
  SendMailConfirm,
  SendMailTournament,
  SendWelcomeMail,
} from "../controller/send-mail.controller.js";

export const sendMailRouter = Router();

sendMailRouter.post("/send-email-confirm", SendMailConfirm);

sendMailRouter.post("/send-email-cancel", SendMailCancel);

sendMailRouter.post("/send-email-welcome", SendWelcomeMail);

sendMailRouter.post("/send-email-tournament", SendMailTournament);
