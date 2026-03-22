import { Trans } from "@lingui-solid/solid/macro";
import { useState } from "@revolt/state";
import { CategoryButton, Checkbox, Column, Text } from "@revolt/ui";

/**
 * Voice channel sound options
 */
export function VoiceChannelSounds() {
  const state = useState();

  return (
    <Column>
      <Text class="title">
        <Trans>Voice Channel Sounds</Trans>
      </Text>
      <CategoryButton.Group>
        <CategoryButton
          icon="blank"
          action={<Checkbox checked={state.voice.playJoinLeaveSounds} />}
          onClick={() => {
            state.voice.playJoinLeaveSounds = !state.voice.playJoinLeaveSounds;
          }}
        >
          <Trans>Play Join/Leave Sounds</Trans>
        </CategoryButton>
      </CategoryButton.Group>
    </Column>
  );
}