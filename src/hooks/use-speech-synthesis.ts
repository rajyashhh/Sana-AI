import { useState, useCallback, useEffect } from 'react';

export const useSpeechSynthesis = () => {
    const [isSpeaking, setIsSpeaking] = useState(false);
    const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);

    useEffect(() => {
        if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
            const updateVoices = () => {
                setVoices(window.speechSynthesis.getVoices());
            };

            updateVoices();
            window.speechSynthesis.onvoiceschanged = updateVoices;
        }
    }, []);

    const speak = useCallback((text: string, lang = "en") => {
        if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;

        // Cancel any ongoing speech
        window.speechSynthesis.cancel();

        const utterance = new SpeechSynthesisUtterance(text);

        // Explicitly set the language on the utterance
        // using 'kn-IN' provides better hints to the browser engine than just 'kn'
        const targetLang = lang === 'kn' ? 'kn-IN' : lang;
        utterance.lang = targetLang;

        // Filter voices based on requested language
        let preferredVoice: SpeechSynthesisVoice | undefined;

        if (targetLang === "kn-IN") {
            preferredVoice = voices.find(
                (v) => v.lang === "kn-IN" || v.name.toLowerCase().includes("kannada")
            );
        } else {
            // Prefer a nice English voice
            preferredVoice = voices.find(
                (v) => (v.name.includes("Google US English") || v.name.includes("Samantha")) && v.lang.startsWith("en")
            ) || voices.find((v) => v.lang.startsWith("en"));
        }

        if (preferredVoice) {
            utterance.voice = preferredVoice;
        } else {
            console.warn(`[SpeechSynthesis] No specific voice found for ${targetLang}. Relying on system default.`);
        }

        // Adjust rate/pitch for a more natural feel
        utterance.rate = 1.0;
        utterance.pitch = 1.0;

        utterance.onstart = () => setIsSpeaking(true);
        utterance.onend = () => setIsSpeaking(false);
        utterance.onerror = (e) => {
            console.error("Speech synthesis error:", e);
            setIsSpeaking(false);
        };

        window.speechSynthesis.speak(utterance);
    }, [voices]);

    const cancel = useCallback(() => {
        if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
            window.speechSynthesis.cancel();
            setIsSpeaking(false);
        }
    }, []);

    return {
        isSpeaking,
        speak,
        cancel,
        hasSupport: typeof window !== 'undefined' && 'speechSynthesis' in window
    };
};
