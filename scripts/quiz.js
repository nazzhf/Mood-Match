const moodScoring = {
    q1: {
        excited: { Happy: 0.5, Sad: 0, Angry: 0, Anxious: 0.2, Excited: 1, Relaxed: 0 },
        tense: { Happy: 0, Sad: 0.1, Angry: 0.8, Anxious: 0.5, Excited: 0.2, Relaxed: 0 },
        calm: { Happy: 0.3, Sad: 0, Angry: 0, Anxious: 0, Excited: 0, Relaxed: 1 },
        drained: { Happy: 0, Sad: 0.8, Angry: 0.2, Anxious: 0.3, Excited: 0, Relaxed: 0.1 },
    },
    q2: {
        joyful: { Happy: 1, Sad: 0, Angry: 0, Anxious: 0, Excited: 0.5, Relaxed: 0.3 },
        frustrated: { Happy: 0, Sad: 0.2, Angry: 1, Anxious: 0.4, Excited: 0.1, Relaxed: 0 },
        sad: { Happy: 0, Sad: 1, Angry: 0.2, Anxious: 0.3, Excited: 0, Relaxed: 0 },
        anxious: { Happy: 0, Sad: 0.3, Angry: 0.3, Anxious: 1, Excited: 0.2, Relaxed: 0 },
    },
    q3: {
        social: { Happy: 0.8, Sad: 0, Angry: 0, Anxious: 0.2, Excited: 0.7, Relaxed: 0.3 },
        solitude: { Happy: 0, Sad: 0.7, Angry: 0.3, Anxious: 0.5, Excited: 0, Relaxed: 0.4 },
        irritated: { Happy: 0, Sad: 0.2, Angry: 1, Anxious: 0.4, Excited: 0, Relaxed: 0 },
        neutral: { Happy: 0.3, Sad: 0.1, Angry: 0, Anxious: 0, Excited: 0.2, Relaxed: 0.5 },
    },
    q4: {
        confident: { Happy: 0.7, Sad: 0, Angry: 0, Anxious: 0, Excited: 0.6, Relaxed: 0.3 },
        stressed: { Happy: 0, Sad: 0.3, Angry: 0.4, Anxious: 1, Excited: 0.2, Relaxed: 0 },
        angry: { Happy: 0, Sad: 0.2, Angry: 1, Anxious: 0.4, Excited: 0.1, Relaxed: 0 },
        calm: { Happy: 0.4, Sad: 0, Angry: 0, Anxious: 0, Excited: 0, Relaxed: 1 },
    },
    q5: {
        focused: { Happy: 0.6, Sad: 0, Angry: 0, Anxious: 0.2, Excited: 0.5, Relaxed: 0.3 },
        racing: { Happy: 0, Sad: 0.2, Angry: 0.3, Anxious: 1, Excited: 0.4, Relaxed: 0 },
        wandering: { Happy: 0.3, Sad: 0.1, Angry: 0, Anxious: 0, Excited: 0.2, Relaxed: 1 },
        negative: { Happy: 0, Sad: 0.8, Angry: 0.4, Anxious: 0.5, Excited: 0, Relaxed: 0 },
    },
    q6: {
        fast: { Happy: 0.5, Sad: 0, Angry: 0.2, Anxious: 0.3, Excited: 1, Relaxed: 0 },
        slow: { Happy: 0.2, Sad: 0.3, Angry: 0, Anxious: 0, Excited: 0, Relaxed: 1 },
        moderate: { Happy: 0.4, Sad: 0.1, Angry: 0, Anxious: 0.1, Excited: 0.3, Relaxed: 0.5 },
        intense: { Happy: 0, Sad: 0.2, Angry: 1, Anxious: 0.4, Excited: 0.5, Relaxed: 0 },
    },
    q7: {
        excited: { Happy: 0.7, Sad: 0, Angry: 0, Anxious: 0.2, Excited: 1, Relaxed: 0.3 },
        worried: { Happy: 0, Sad: 0.4, Angry: 0.3, Anxious: 1, Excited: 0, Relaxed: 0 },
        neutral: { Happy: 0.3, Sad: 0, Angry: 0, Anxious: 0, Excited: 0.2, Relaxed: 0.6 },
        hopeless: { Happy: 0, Sad: 1, Angry: 0.2, Anxious: 0.5, Excited: 0, Relaxed: 0 },
    },
    q8: {
        energized: { Happy: 0.6, Sad: 0, Angry: 0.2, Anxious: 0.3, Excited: 1, Relaxed: 0.2 },
        tense: { Happy: 0, Sad: 0.2, Angry: 1, Anxious: 0.5, Excited: 0.3, Relaxed: 0 },
        relaxed: { Happy: 0.4, Sad: 0, Angry: 0, Anxious: 0, Excited: 0, Relaxed: 1 },
        fatigued: { Happy: 0, Sad: 0.8, Angry: 0.2, Anxious: 0.3, Excited: 0, Relaxed: 0.1 },
    },
    q9: {
        proud: { Happy: 1, Sad: 0, Angry: 0, Anxious: 0, Excited: 0.5, Relaxed: 0.3 },
        disappointed: { Happy: 0, Sad: 1, Angry: 0.3, Anxious: 0.4, Excited: 0, Relaxed: 0 },
        neutral: { Happy: 0.3, Sad: 0, Angry: 0, Anxious: 0, Excited: 0.2, Relaxed: 0.5 },
        frustrated: { Happy: 0, Sad: 0.3, Angry: 1, Anxious: 0.5, Excited: 0.1, Relaxed: 0 },
    },
    q10: {
        vibrant: { Happy: 0.7, Sad: 0, Angry: 0.2, Anxious: 0.3, Excited: 1, Relaxed: 0.2 },
        peaceful: { Happy: 0.4, Sad: 0, Angry: 0, Anxious: 0, Excited: 0, Relaxed: 1 },
        controlled: { Happy: 0.3, Sad: 0.1, Angry: 0, Anxious: 0.5, Excited: 0.2, Relaxed: 0.4 },
        isolated: { Happy: 0, Sad: 0.7, Angry: 0.3, Anxious: 0.5, Excited: 0, Relaxed: 0.2 },
    }
};

document.addEventListener('DOMContentLoaded', function() {
    const quizForm = document.getElementById('mood-quiz-form');

    function handleQuizSubmission(e) {
        e.preventDefault();
        const formData = new FormData(quizForm);
        const answers = {};

        for (let [key, value] of formData.entries()) {
            answers[key] = value;
        }
        
        const moodScores = {
            Happy: 0, Sad: 0, Angry: 0, Anxious: 0, Excited: 0, Relaxed: 0
        };
        
        for (let i = 1; i <= 10; i++) {
            const question = `q${i}`;
            const answer = answers[question];
            if (moodScoring[question] && moodScoring[question][answer]) {
                for (let mood in moodScoring[question][answer]) {
                    moodScores[mood] += moodScoring[question][answer][mood];
                }
            }
        }
        
        let selectedMood = 'Happy';
        let maxScore = -1;
        for (let mood in moodScores) {
            if (moodScores[mood] > maxScore) {
                maxScore = moodScores[mood];
                selectedMood = mood;
            }
        }

        localStorage.setItem('mood', selectedMood);
        window.location.href = `recommendations.html?mood=${selectedMood}`;
    }

    quizForm.addEventListener('submit', handleQuizSubmission);
});