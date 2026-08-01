import { MessageCircle } from "lucide-react";

function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919876543210?text=Hi%20NovaWeb%20Solutions,%20I%20need%20a%20website."
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl z-50 transition duration-300"
    >
      <MessageCircle size={32} />
    </a>
  );
}

export default WhatsAppButton;