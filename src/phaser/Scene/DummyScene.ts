import Phaser from "phaser";
import {SceneKeys} from "../Settings/SceneSettings";

// -------------------------
// クラスのテンプレート
// -------------------------
export class DummyScene extends Phaser.Scene {
  // クラス変数
  title: Phaser.GameObjects.Text | undefined;

  // そのシーンのキーを渡す
  constructor() {
    super(SceneKeys.dummy);
    // this.title = new Phaser.GameObjects.Text(this, 0, 0, "DummyScene", {});
  }

  // そのシーンのキーを渡す
  public create(): void {
    // タイトルテキストを画面に描写
    this.title = this.add.text(0, 0, "DummyScene", {
      color: "#ffffff",
      align: "center",
      fontSize: "32px",
      fixedWidth: Number(this.game.config.width),
    });
  }
}
