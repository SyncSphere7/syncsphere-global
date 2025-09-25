import formidable from 'formidable';
import fs from 'fs';

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const form = formidable({
      uploadDir: '/tmp',
      keepExtensions: true,
      maxFileSize: 25 * 1024 * 1024, // 25MB limit for audio
    });

    const [fields, files] = await form.parse(req);
    const audioFile = Array.isArray(files.audio) ? files.audio[0] : files.audio;

    if (!audioFile) {
      return res.status(400).json({ error: 'No audio file uploaded' });
    }

    // For now, we'll simulate voice-to-text processing
    // In production, you would use OpenAI Whisper API or similar service
    const simulatedTranscription = generateSimulatedTranscription();

    // Clean up uploaded file
    fs.unlinkSync(audioFile.filepath);

    res.status(200).json({
      success: true,
      text: simulatedTranscription,
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('Voice-to-text error:', error);
    res.status(500).json({ 
      error: 'Voice processing failed',
      details: error.message 
    });
  }
}

function generateSimulatedTranscription() {
  // Simulate different types of voice inputs for testing
  const sampleTranscriptions = [
    "I'm interested in AI automation for my e-commerce business. Can you help me understand the pricing and what's included?",
    "We're a startup looking to build an MVP. What are your development options and timeline?",
    "I need a chatbot for customer service that can handle WhatsApp and web chat. What would that cost?",
    "Can you explain your pilot program? I want to test AI solutions before making a big investment.",
    "We're in healthcare and need HIPAA compliant AI solutions. Do you have experience with medical practices?",
    "I'm looking for voice agents to handle our customer calls. What's the setup process and pricing?",
    "Our manufacturing company needs workflow automation. Can you analyze our current processes?",
    "I want to discuss partnership options for MVP development. Do you offer equity-based arrangements?"
  ];

  return sampleTranscriptions[Math.floor(Math.random() * sampleTranscriptions.length)];
}