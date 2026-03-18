let jogador: Sprite = null
let ouro: Sprite = null

jogador = sprites.create(img`
    . . . . 2 2 2 2 . . . .
        . . . 2 2 2 2 2 2 . . .
            . . . 2 2 2 2 2 2 . . .
                . . . . 2 2 2 2 . . . .
                    . . . 2 2 2 2 2 2 . . .
                        . . . 2 . 2 2 . 2 . . .
                            . . . 2 2 2 2 2 2 . . .
                                . . . 2 . . . . 2 . . .
                                    . . . 2 . . . . 2 . . .
                                        . . . . 2 2 2 2 . . . .
                                        `, SpriteKind.Player)

                                        ouro = sprites.create(img`
                                            . . . . . . . .
                                                . . 5 5 5 5 . .
                                                    . 5 5 5 5 5 5 .
                                                        . 5 5 4 4 5 5 .
                                                            . 5 5 4 4 5 5 .
                                                                . 5 5 5 5 5 5 .
                                                                    . . 5 5 5 5 . .
                                                                        . . . . . . . .
                                                                        `, SpriteKind.Food)

                                                                        scene.setBackgroundColor(7)

                                                                        for (let i = 0; i < 20; i++) {
                                                                            let flor = sprites.create(img`
                                                                                    . . . . .
                                                                                            . . 3 . .
                                                                                                    . 3 3 3 .
                                                                                                            . . 3 . .
                                                                                                                    . . . . .
                                                                                                                        `, SpriteKind.Decoration)
                                                                                                                            flor.setPosition(randint(0, 160), randint(0, 120))
                                                                                                                            }

                                                                                                                            controller.moveSprite(jogador)
                                                                                                                            jogador.setStayInScreen(true)

                                                                                                                            ouro.setPosition(randint(10, 150), randint(10, 110))

                                                                                                                            info.setScore(0)

                                                                                                                            sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (player, food) {
                                                                                                                                info.changeScoreBy(1)
                                                                                                                                    food.setPosition(randint(10, 150), randint(10, 110))
                                                                                                                                    })
