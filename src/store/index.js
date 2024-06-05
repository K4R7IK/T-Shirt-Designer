import { proxy } from "valtio";

const state = proxy({
  intro: true,
  color: "#efbd48",
  //color: "#A57ABF",
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: "./threejs.png",
  fullDecal: "./threejs.png",
});

export default state;
