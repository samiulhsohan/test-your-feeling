## Feelic — Test your feeling

Question types:

1. Simple questions / situation
2. Color Based — what this color (red) means to you? Anger, Love, None
3. Music — What does it sound like? Happy Sad Fear

### Feelings

1. Stress
2. Angry
3. Happy
4. Sad
5. Calm

```json
{
  "type": "simple",
  "question": "You like",
  "overlayStyle": "",
  "backgroundElements": "",
  "music": "",
  "options": [
    {
      "label": "Sea",
      "nextQuestion": 3,
      "feeling": {
        "stress": 2,
        "angry": 0,
        "happy": 1,
        "sad": 1,
        "calm": 6
      }
    },
    {
      "label": "Mountain",
      "nextQuestion": 4,
      "feeling": {
        "happy": 0,
        "sad": 3,
        "fear": 0,
        "confused": 0,
        "stressed": 0
      }
    }
  ]
}
```
