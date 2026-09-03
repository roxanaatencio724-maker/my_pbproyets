// Made with PenguinBuilder v4.2.0
// use PenguinBuilder at "https://penguinbuilder.github.io"
(async function(Scratch) {
    const blocks = [];
    const menus = {};

    class Extension {
        getInfo() {
            return {
                "id": "iteradorpromptpb",
                "name": "IteradorPrompt",
                "color1": "#0088ff",
                "blocks": blocks,
                "menus": menus,
            }
        }
    }

    var iteradorpromptpb_i, iteradorpromptpb_a;

    blocks.push({
        opcode: "iteradorpromptpb_Block_Iterador",
        blockType: Scratch.BlockType.COMMAND,
        text: "Iterador",
        arguments: {

        },
        disableMonitor: false
    });
    Extension.prototype["iteradorpromptpb_Block_Iterador"] = async function(args, util) {
        iteradorpromptpb_i = 1;
        iteradorpromptpb_a = prompt('Hasta Que Numero vas a Iterar? (Solo Acepta Numeros enteros)');
        while (iteradorpromptpb_i <= iteradorpromptpb_a) {
            console.log(iteradorpromptpb_i);
            iteradorpromptpb_i = (typeof iteradorpromptpb_i === 'number' ? iteradorpromptpb_i : 0) + 1;
        }

    };

    Scratch.extensions.register(new Extension());
})(Scratch);