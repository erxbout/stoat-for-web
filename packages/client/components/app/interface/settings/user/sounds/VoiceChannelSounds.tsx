import { Trans } from "@lingui-solid/solid/macro";
import { useState } from "@revolt/state";
import { Button, CategoryButton, Checkbox, Column, Text } from "@revolt/ui";

/**
 * Voice channel sound options
 */
export function VoiceChannelSounds() {
  const state = useState();

  let joinInputRef: HTMLInputElement | undefined;
  let leaveInputRef: HTMLInputElement | undefined;

  const handleFileUpload = (
    e: Event,
    type: "customJoinSound" | "customLeaveSound",
  ) => {
    const target = e.target as HTMLInputElement;
    const file = target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === "string") {
        state.voice[type] = reader.result;
      }
    };
    reader.readAsDataURL(file);

    target.value = "";
  };

  return (
    <Column>
      <Text class="title">
        <Trans>Voice Channel Sounds</Trans>
      </Text>

      {/* Hidden native file inputs (invisible to the user) */}
      <input
        type="file"
        accept="audio/*"
        style={{ display: "none" }}
        ref={joinInputRef}
        onChange={(e) => handleFileUpload(e, "customJoinSound")}
      />
      <input
        type="file"
        accept="audio/*"
        style={{ display: "none" }}
        ref={leaveInputRef}
        onChange={(e) => handleFileUpload(e, "customLeaveSound")}
      />

      {/* JOIN SOUND SETTINGS */}
      <CategoryButton.Group>
        <CategoryButton
          icon="blank"
          action={<Checkbox checked={state.voice.playJoinSound} />}
          onClick={() => {
            state.voice.playJoinSound = !state.voice.playJoinSound;
          }}
        >
          <Trans>Play Join Sound</Trans>
        </CategoryButton>
        <CategoryButton
          icon="blank"
          action={
            <div
              style={{ display: "flex", gap: "8px", "align-items": "center" }}
            >
              {state.voice.customJoinSound && (
                <Button
                  size="small"
                  variant="outlined"
                  onPress={() => (state.voice.customJoinSound = null)}
                >
                  <Trans>Reset</Trans>
                </Button>
              )}
              <Button size="small" onPress={() => joinInputRef?.click()}>
                <Trans>
                  {state.voice.customJoinSound ? "Change" : "Select"}
                </Trans>
              </Button>
            </div>
          }
        >
          <Trans>Custom Join Sound</Trans>
        </CategoryButton>
      </CategoryButton.Group>

      {/* LEAVE SOUND SETTINGS */}
      <Column gap="sm" style={{ "margin-top": "16px" }}>
        <CategoryButton.Group>
          <CategoryButton
            icon="blank"
            action={<Checkbox checked={state.voice.playLeaveSound} />}
            onClick={() => {
              state.voice.playLeaveSound = !state.voice.playLeaveSound;
            }}
          >
            <Trans>Play Leave Sound</Trans>
          </CategoryButton>
          <CategoryButton
            icon="blank"
            action={
              <div
                style={{ display: "flex", gap: "8px", "align-items": "center" }}
              >
                {state.voice.customLeaveSound && (
                  <Button
                    size="small"
                    variant="outlined"
                    onPress={() => (state.voice.customLeaveSound = null)}
                  >
                    <Trans>Reset</Trans>
                  </Button>
                )}
                <Button size="small" onPress={() => leaveInputRef?.click()}>
                  <Trans>
                    {state.voice.customLeaveSound ? "Change" : "Select"}
                  </Trans>
                </Button>
              </div>
            }
          >
            <Trans>Custom Leave Sound</Trans>
          </CategoryButton>
        </CategoryButton.Group>
      </Column>
    </Column>
  );
}
