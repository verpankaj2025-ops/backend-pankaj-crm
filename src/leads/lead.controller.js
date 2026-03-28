import Lead from "./lead.model.js";

export const createLead = async (req, res) => {
  const lead = await Lead.create({
    ...req.body,
    userId: req.user.id,
  });

  global.io.emit("new-lead", lead);
  res.json(lead);
};

export const getLeads = async (req, res) => {
  const leads = await Lead.find({ userId: req.user.id });
  res.json(leads);
};

// 🔥 UPDATE STATUS
export const updateLeadStatus = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  const lead = await Lead.findByIdAndUpdate(
    id,
    { status },
    { new: true }
  );

  res.json(lead);
};
