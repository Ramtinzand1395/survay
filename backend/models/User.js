const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
  },
  lastName: {
    type: String,
    trim: true,
  },
  mobile: {
    type: String,
    trim: true,
  },
  overallSatisfaction: { type: String, default: null },
  planningAppropriate: { type: String, default: null },
  bestMoment: { type: String, default: "" },
  foodQuality: { type: String, default: null },
  accommodationQuality: { type: String, default: null },
  mostAttractiveActivity: { type: String, default: "" },
  activitiesVaried: { type: String, default: null },
  timeManagement: { type: String, default: null },
  staffBehavior: { type: String, default: null },
  staffBehaviorsuggestions: { type: String, default: null },
  staffAvailability: { type: String, default: null },
  futureParticipation: { type: String, default: null },
  suggestions: { type: String, default: "" },
  feelingSummary: { type: String, default: "" },
});

module.exports = mongoose.models.User || mongoose.model("User", userSchema);
