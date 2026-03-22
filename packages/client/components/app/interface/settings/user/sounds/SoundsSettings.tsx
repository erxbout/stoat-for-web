import { Column } from "@revolt/ui";

import { VoiceChannelSounds } from "./VoiceChannelSounds";

/**
 * Configure sound and notification options
 */
export function SoundsSettings() {
  return (
    <Column gap="lg">
      <VoiceChannelSounds />
    </Column>
  );
}