// src/services/singleplayerService.js
import api from "../utils/api";

export async function startSinglePlayer(mode = 1) {
  const res = await api.post("/api/singleplayer/start", { mode });
  return res.data;
}

export async function submitSinglePlayerAnswer(sessionId, answer) {
  const res = await api.post("/api/singleplayer/answer", { sessionId, answer });
  return res.data;
}

export async function getSinglePlayerTimer(sessionId) {
  const res = await api.get("/api/singleplayer/timer", { params: { sessionId } });
  return res.data;
}
