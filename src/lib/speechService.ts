export class SpeechService {
  private static instance: SpeechService;
  private synthesis: SpeechSynthesis | null = null;

  private constructor() {
    if (typeof window !== "undefined") {
      this.synthesis = window.speechSynthesis;
    }
  }

  public static getInstance(): SpeechService {
    if (!SpeechService.instance) {
      SpeechService.instance = new SpeechService();
    }
    return SpeechService.instance;
  }

  public isSupported(): boolean {
    return !!this.synthesis;
  }

  public speak(text: string, onEnd?: () => void) {
    if (!this.synthesis) {
      if (onEnd) onEnd();
      return;
    }

    this.stop(); // interrupt current speech

    const utterance = new SpeechSynthesisUtterance(text);
    const voices = this.synthesis.getVoices();
    const preferredVoice = voices.find(v => v.lang.startsWith('en') && (v.name.includes('Female') || v.name.includes('Samantha') || v.name.includes('Google US English')));
    if (preferredVoice) utterance.voice = preferredVoice;
    
    utterance.pitch = 1.1; 
    utterance.rate = 1.05;

    utterance.onend = () => {
      if (onEnd) onEnd();
    };
    
    utterance.onerror = () => {
      if (onEnd) onEnd();
    };

    this.synthesis.speak(utterance);
  }

  public stop() {
    if (this.synthesis && this.synthesis.speaking) {
      this.synthesis.cancel();
    }
  }
}
