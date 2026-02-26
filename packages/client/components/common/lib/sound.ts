export function playSound(audioUrl: string, volume: number = 1.0) {
  const audio = new Audio(audioUrl);

  audio.volume = volume;

  audio.play().catch((err) => {
    console.warn(
      "Failed to play sound. The browser might have blocked it:",
      err,
    );
  });
}
