import type { SceneOverlayId } from "../../scenes/phase1/openingScenes";
import { SiloWallTrek } from "./SiloWallTrek";
import { AnvilDust } from "./AnvilDust";

interface SceneOverlayProps {
  id?: SceneOverlayId;
}

export function SceneOverlay({ id }: SceneOverlayProps) {
  if (!id) return null;
  switch (id) {
    case "silo-trek":
      return <SiloWallTrek />;
    case "anvil-dust":
      return <AnvilDust />;
    default:
      return null;
  }
}
