// Made with PenguinBuilder v4.2.0
// use PenguinBuilder at "https://penguinbuilder.github.io"
(async function(Scratch) {
    const blocks = [];
    const menus = {};

    if (!Scratch.extensions.unsandboxed) {
        throw new Error('JSONPrueba must run unsandboxed');
    }

    class Extension {
        getInfo() {
            return {
                "id": "jsonprueba2",
                "name": "JSONPrueba",
                "color1": "#dd7929",
                "blocks": blocks,
                "menus": menus,
            }
        }
    }

    var jsonprueba2_constant_a, jsonprueba2_Key;

    blocks.push({
        opcode: "jsonprueba2_Block_JSONPrueba",
        blockType: Scratch.BlockType.COMMAND,
        text: "JSONPrueba[Key]",
        arguments: {
            "Key": {
                type: Scratch.ArgumentType.STRING,
                defaultValue: ``
            },

        },
        disableMonitor: false
    });
    Extension.prototype["jsonprueba2_Block_JSONPrueba"] = async function(args, util) {
        jsonprueba2_constant_a = {"key":"value"};
        jsonprueba2_Key = args["Key"];
        if (jsonprueba2_constant_a[jsonprueba2_Key] == 'value') {
            alert((['La clave ', jsonprueba2_Key, ' Es correcta!'].join('')));
        } else {
            alert((['La clave ', jsonprueba2_Key, ' no Es correcta'].join('')));
        }

    };

    Scratch.extensions.register(new Extension());
})(Scratch);