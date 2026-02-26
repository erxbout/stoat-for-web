import { Column } from "@revolt/ui";

import { OtherVoiceOptions } from "./OtherVoiceOptions";
import { VoiceInputOptions } from "./VoiceInputOptions";
import { VoiceProcessingOptions } from "./VoiceProcessingOptions";

/**
 * Configure voice options
 */
export function VoiceSettings() {
  return (
    <Column gap="lg">
      <VoiceInputOptions />
      <VoiceProcessingOptions />
      <OtherVoiceOptions />
    </Column>
  );
}
