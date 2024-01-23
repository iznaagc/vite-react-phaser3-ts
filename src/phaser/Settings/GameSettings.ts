import Phaser from "phaser";
import {DummyScene} from "../Scene/DummyScene";

type DeviceScreenSize = {
  width: number;
  height: number;
};

// 基本ウィンドウサイズ
const SCREEN_SIZE: DeviceScreenSize = {
  // 16:9
  width: 360,
  height: 600,
};

// Phaser全体の設定
export const runnerConfig: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  width: SCREEN_SIZE.width,
  height: SCREEN_SIZE.height,
  parent: "game", // HTMLのid
  scene: [DummyScene],
  physics: {
    default: "arcade",
    arcade: {
      debug: false,
    },
  },
  render: {
    pixelArt: true,
    antialias: false,
  },
  scale: {
    // mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_HORIZONTALLY,
    fullscreenTarget: "game",
    expandParent: false,
  },
};
