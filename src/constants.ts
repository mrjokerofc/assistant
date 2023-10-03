import dotenv from "dotenv";
import dotenvExpand from "dotenv-expand";
dotenvExpand.expand(dotenv.config());

export const BOT_PREFIX = process.env.BOT_PREFIX?.trim() + " " || "[BOT]: ";
export const ALLOWED_USERS = process.env.ALLOWED_USERS?.split(",") || [];
export const BLOCKED_USERS = process.env.BLOCKED_USERS?.split(",") || [];
export const SYSTEM_MESSAGE = process.env.SYSTEM_MESSAGE;