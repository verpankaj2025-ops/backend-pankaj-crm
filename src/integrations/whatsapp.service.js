let whatsappConfig = {};

// Save config
export const saveWhatsAppConfig = (data) => {
  whatsappConfig = data;
};

// Get config
export const getWhatsAppConfig = () => {
  return whatsappConfig;
};
