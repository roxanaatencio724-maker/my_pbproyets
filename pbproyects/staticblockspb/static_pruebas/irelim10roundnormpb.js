// Made with PenguinBuilder v4.2.0
// use PenguinBuilder at "https://penguinbuilder.github.io"
(async function(Scratch) {
    const blocks = [];
    const menus = {};

    class Extension {
        getInfo() {
            return {
                "id": "irelim10roundnormpb",
                "name": "IRElim10roundnormpb",
                "color1": "#0088ff",
                "blocks": blocks,
                "menus": menus,
            }
        }
    }

    var irelim10roundnormpb_random, irelim10roundnormpb_i;

    blocks.push({
        opcode: "irelim10roundnormpb_Block_Iterador_Random_Estatico",
        blockType: Scratch.BlockType.COMMAND,
        text: "Iterador Random Estatico",
        arguments: {

        },
        disableMonitor: false
    });
    Extension.prototype["irelim10roundnormpb_Block_Iterador_Random_Estatico"] = async function(args, util) {
        irelim10roundnormpb_random = eval('Math.random()');
        irelim10roundnormpb_i = 1;
        while (irelim10roundnormpb_i <= Math.round(irelim10roundnormpb_random * 10)) {
            console.log(irelim10roundnormpb_i);
            irelim10roundnormpb_i = (typeof irelim10roundnormpb_i === 'number' ? irelim10roundnormpb_i : 0) + 1;
        }

    };

    Scratch.extensions.register(new Extension());
})(Scratch);