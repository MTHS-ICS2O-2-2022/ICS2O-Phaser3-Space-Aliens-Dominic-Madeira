/* global Phaser */

//* Copyright (c) 2023 Dominic M. All rights reserved
//
// Created by: Dominic M.
// Created on: Apr 2023
// This is the Phaser3 game configuration file

import SplashScene from "./splashScene.js"
import TitleScene from "./titleScene.js"
import MenuScene from "./menuScene.js"
import GameScene from "./gameScene.js"

// Our game scene
const splashScene = new SplashScene()
const titleScene = new TitleScene()
const menuScene = new MenuScene()
const gameScene = new GameScene()

//* Game scene */
const config = {
  type: Phaser.AUTO,
  width: 1920,
  height: 1080,
  physics: {
    default: "arcade",
    arcade: {
      debug: false
    },
  },
  // set background color
  backgroundColor: 0x5f6e7a,
  scale: {
    mode: Phaser.Scale.FIT,
    //we place it in the middle of the page.
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
}

const game = new Phaser.Game(config)

// load scenes
game.scene.add('splashScene', splashScene)
game.scene.add('titleScene', titleScene)
game.scene.add('menuScene', menuScene)
game.scene.add('gameScene', gameScene)

// start title
game.scene.start ('splashScene')
