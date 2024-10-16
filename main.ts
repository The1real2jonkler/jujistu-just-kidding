controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Math.percentChance(25)) {
        animation.runImageAnimation(
        mySprite,
        [img`
            ........................
            ........................
            ........................
            ........................
            ..........fffff.........
            ........ff1111bff.......
            .......fb1111111bf......
            .......f11111111999.....
            ......fd11111119ff9.ff..
            ......fd111dd1c9f1bff...
            ......fb11fcdf1bfbff99..
            ......f11111bfffbff99...
            ......f1b1bdfcfffff99...
            ......fbfbfcfcccf.ff....
            ......ffffffffff........
            .........ffffff.........
            .........ffffff.........
            .........fffffff..f.....
            ..........fffffffff.....
            ...........fffffff......
            ........................
            ........................
            ........................
            ........................
            `,img`
            ........................
            ........................
            ........................
            ..........ffff..........
            ........ff1111ff........
            .......fb111111bf.......
            .......f1111111dbf......
            ......fd1111111ddf......
            ......fd111111dddf......
            ......fd111ddddddf......
            ......fd111ddddddf......
            ......fd1dddddddbf......
            ....22fd1dfbddbbff......
            ......2bddfcdbbcf.......
            ...2.ff2fccddbfff.......
            .2.ffcffbbbfcffff.......
            .22f21b2f2ffffffff......
            .ff.fdfdff.ffffffffff...
            ..f..f.f.22..ffffff.....
            .f...222ff..............
            .2...2.f.f..............
            .22.....22..............
            ........................
            ........................
            `],
        200,
        false
        )
    } else {
        animation.runImageAnimation(
        mySprite,
        [img`
            ........................
            ........................
            ........................
            ........................
            ..........fffff.........
            ........ff1111bff.......
            .......fb1111ff1bf......
            .......f11111fffff9.....
            ......fd1111111f9ff.....
            ......fd111d966191966...
            ......fb11fc9ffb1bf999..
            ......f11111bf99b999....
            ......f1b1bdfcf9f99f....
            ......fbfbfcfcc99..f....
            ......ffffffffff........
            .........ffffff.........
            .........ffffff.........
            .........fffffff..f.....
            ..........fffffffff.....
            ...........fffffff......
            ........................
            ........................
            ........................
            ........................
            `,img`
            ........................
            ........................
            ........................
            ..........ffff..........
            ........ff1111ff........
            .......fb111111bf.......
            .......f1111111dbf......
            ......fd1111111ddf......
            ......fd111111dddf......
            ......fd111ddddddf......
            ......fd111ddddddf......
            ......fd1dddddddbf......
            .....9fd1dfbddbbff......
            ......99ddfcdbbcf.......
            ..99ff99fccddbfff.......
            .999f9b99bffcffff.......
            ...9919ff9ffffffff......
            ..f.66fdfffffffffffff...
            ..9f96.ff....ffffff.....
            ..9f966.9f..............
            ........99..............
            .........9..............
            ........................
            ........................
            `],
        200,
        false
        )
    }
})
let mySprite: Sprite = null
mySprite = sprites.create(img`
    ........................
    ........................
    ........................
    ........................
    ..........ffff..........
    ........ff1111ff........
    .......fb111111bf.......
    .......f11111111f.......
    ......fd11111111df......
    ......fd11111111df......
    ......fddd1111dddf......
    ......fbdbfddfbdbf......
    ......fcdcf11fcdcf......
    .......fb111111bf.......
    ......fffcdb1bdffff.....
    ....fc111cbfbfc111cf....
    ....f1b1b1ffff1b1b1f....
    ....fbfbffffffbfbfbf....
    .........ffffff.........
    ...........fff..........
    ........................
    ........................
    ........................
    ........................
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 75, 75)
characterAnimations.loopFrames(
mySprite,
[img`
    ........................
    ........................
    ........................
    ........................
    ..........ffff..........
    ........ff1111ff........
    .......fb111111bf.......
    .......f11111111f.......
    ......fd11111111df......
    ......fd11111111df......
    ......fddd1111dddf......
    ......fbdbfddfbdbf......
    ......fcdcf11fcdcf......
    .......fb111111bf.......
    ......fffcdb1bdffff.....
    ....fc111cbfbfc111cf....
    ....f1b1b1ffff1b1b1f....
    ....fbfbffffffbfbfbf....
    .........ffffff.........
    ...........fff..........
    ........................
    ........................
    ........................
    ........................
    `,img`
    ........................
    ........................
    ........................
    ........................
    ..........ffff..........
    ........ff1111ff........
    .......fb111111bf.......
    .......f11111111f.......
    ......fd11111111df......
    ......fd11111111df......
    ......fddd1111dddf......
    ......fbdbfddfbdbf......
    ......fcdcf11fcdcf......
    .......fb111111ffff.....
    ......fffcdb1bc111cf....
    ....fc111cbfbf1b1b1f....
    ....f1b1b1ffffbfbfbf....
    ....fbfbfffffff.........
    .........fffff..........
    ..........fff...........
    ........................
    ........................
    ........................
    ........................
    `,img`
    ........................
    ........................
    ........................
    ........................
    ..........ffff..........
    ........ff1111ff........
    .......fb111111bf.......
    .......f11111111f.......
    ......fd11111111df......
    ......fd11111111df......
    ......fddd1111dddf......
    ......fbdbfddfbdbf......
    ......fcdcf11fcdcf......
    .......fb111111bf.......
    ......fffcdb1bdffff.....
    ....fc111cbfbfc111cf....
    ....f1b1b1ffff1b1b1f....
    ....fbfbffffffbfbfbf....
    .........ffffff.........
    ...........fff..........
    ........................
    ........................
    ........................
    ........................
    `,img`
    ........................
    ........................
    ........................
    ........................
    ..........ffff..........
    ........ff1111ff........
    .......fb111111bf.......
    .......f11111111f.......
    ......fd11111111df......
    ......fd11111111df......
    ......fddd1111dddf......
    ......fbdbfddfbdbf......
    ......fcdcf11fcdcf......
    .....ffff111111bf.......
    ....fc111cdb1bdfff......
    ....f1b1bcbfbfc111cf....
    ....fbfbfbffff1b1b1f....
    .........fffffffbfbf....
    ..........fffff.........
    ...........fff..........
    ........................
    ........................
    ........................
    ........................
    `],
500,
characterAnimations.rule(Predicate.NotMoving)
)
characterAnimations.loopFrames(
mySprite,
[img`
    ........................
    ........................
    ........................
    ........................
    ..........ffff..........
    ........ff1111ff........
    .......fb111111bf.......
    .......f11111111f.......
    ......fd11111111df......
    ......fd11111111df......
    ......fddd1111dddf......
    ......fbdbfddfbdbf......
    ......fcdcf11fcdcf......
    .......fb111111bf.......
    ......fffcdb1bdffff.....
    ....fc111cbfbfc111cf....
    ....f1b1b1ffff1b1b1f....
    ....fbfbffffffbfbfbf....
    .........ffffff.........
    ...........fff..........
    ........................
    ........................
    ........................
    ........................
    `,img`
    ........................
    ........................
    ........................
    ........................
    ..........ffff..........
    ........ff1111ff........
    .......fb111111bf.......
    .......f11111111f.......
    ......fd11111111df......
    ......fd11111111df......
    ......fddd1111dddf......
    ......fbdbfddfbdbf......
    ......fcdcf11fcdcf......
    .......fb111111ffff.....
    ......fffcdb1bc111cf....
    ....fc111cbfbf1b1b1f....
    ....f1b1b1ffffbfbfbf....
    ....fbfbfffffff.........
    .........fffff..........
    ..........fff...........
    ........................
    ........................
    ........................
    ........................
    `,img`
    ........................
    ........................
    ........................
    ........................
    ..........ffff..........
    ........ff1111ff........
    .......fb111111bf.......
    .......f11111111f.......
    ......fd11111111df......
    ......fd11111111df......
    ......fddd1111dddf......
    ......fbdbfddfbdbf......
    ......fcdcf11fcdcf......
    .......fb111111bf.......
    ......fffcdb1bdffff.....
    ....fc111cbfbfc111cf....
    ....f1b1b1ffff1b1b1f....
    ....fbfbffffffbfbfbf....
    .........ffffff.........
    ...........fff..........
    ........................
    ........................
    ........................
    ........................
    `,img`
    ........................
    ........................
    ........................
    ........................
    ..........ffff..........
    ........ff1111ff........
    .......fb111111bf.......
    .......f11111111f.......
    ......fd11111111df......
    ......fd11111111df......
    ......fddd1111dddf......
    ......fbdbfddfbdbf......
    ......fcdcf11fcdcf......
    .....ffff111111bf.......
    ....fc111cdb1bdfff......
    ....f1b1bcbfbfc111cf....
    ....fbfbfbffff1b1b1f....
    .........fffffffbfbf....
    ..........fffff.........
    ...........fff..........
    ........................
    ........................
    ........................
    ........................
    `],
500,
characterAnimations.rule(Predicate.MovingDown)
)
characterAnimations.loopFrames(
mySprite,
[img`
    ........................
    ........................
    ........................
    ........................
    ..........ffff..........
    ........ff1111ff........
    .......fb111111bf.......
    .......f1111111df.......
    ......fd1111111ddf......
    ......fd111111dddf......
    ......fd111ddddddf......
    ......fd1dfbddddbf......
    ......fbddfcdbbbcf......
    .......f11111bbcf.......
    .......f1b1fffff........
    .......fbfc111bf........
    ........ff1b1bff........
    .........fbfbfff.f......
    ..........ffffffff......
    ............fffff.......
    ........................
    ........................
    ........................
    ........................
    `,img`
    ........................
    ........................
    ........................
    ........................
    .........fffff..........
    ........f11111ff........
    .......fb111111bf.......
    .......f1111111dbf......
    ......fd111111dddf......
    ......fd11111ddddf......
    ......fd11dddddddf......
    ......f111dddddddf......
    ......f11fcddddddf......
    .....fb1111bdddbf.......
    .....f1b1bdfcfff........
    .....fbfbffffffff.......
    ......fffffffffff.ff....
    ...........ffffffff.....
    ........f1b1bffffff.....
    ........fbfbffffff......
    ........................
    ........................
    ........................
    ........................
    `],
500,
characterAnimations.rule(Predicate.MovingLeft)
)
characterAnimations.loopFrames(
mySprite,
[img`
    ........................
    ........................
    ........................
    ........................
    ..........ffff..........
    ........ff1111ff........
    .......fb111111bf.......
    .......f11111111f.......
    ......fd11111111df......
    ......fd11111111df......
    ......fddd1111dddf......
    ......fbdb1111bdbf......
    ......fcd111111dcf......
    .....ffff111111bf.......
    ....fc111cdb1bdfff......
    ....f1111cbfbfc111cf....
    ....fb111bffff111b1f....
    .........ffffff111bf....
    ..........fffff.........
    ...........fff..........
    ........................
    ........................
    ........................
    ........................
    `],
500,
characterAnimations.rule(Predicate.MovingUp)
)
characterAnimations.loopFrames(
mySprite,
[img`
    ........................
    ........................
    ........................
    ..........ffff..........
    ........ff1111ff........
    .......fb111111bf.......
    ......fbd1111111f.......
    ......fdd1111111df......
    ......fddd111111df......
    ......fdddddd111df......
    ......fdddddd111df......
    ......fbddddddd1df......
    ......ffbbddbfd1df......
    .......fcbbdcfddbf......
    .......fffbddccffff.....
    .......ffffcfbbb1bcf....
    ......ffffffffcd1b1f....
    ...ffffffffff..fdfdf....
    .....ffffff.....f.f.....
    ........................
    ........................
    ........................
    ........................
    ........................
    `,img`
    ........................
    ........................
    ........................
    ........................
    .........fffff..........
    .......ffb1111ff........
    ......fb1111111bf.......
    ......f111111111f.......
    .....ffff1111111df......
    ....fb111c1dd111df......
    ....ffb1b1fdcf11bf......
    .....ffbfbfb11111f......
    ......ffffcfdb1b1f......
    .......fcccfcfbfbf......
    ........ffffffffff......
    .........ffffff.........
    .........ffffff.........
    .....f..fffffff.........
    .....fffffffff..........
    ......fffffff...........
    ........................
    ........................
    ........................
    ........................
    `],
500,
characterAnimations.rule(Predicate.MovingRight)
)
