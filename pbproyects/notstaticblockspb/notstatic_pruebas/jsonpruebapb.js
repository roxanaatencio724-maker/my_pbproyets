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
                "id": "jsonpruebapb",
                "name": "JSONPrueba",
                "color1": "#dd7929",
                "blocks": blocks,
                "menus": menus,
            }
        }
    }

    var jsonpruebapb_constant_a, jsonpruebapb_Key;

    blocks.push({
        opcode: "jsonpruebapb_Block_JSONPrueba",
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
    Extension.prototype["jsonpruebapb_Block_JSONPrueba"] = async function(args, util) {
        jsonpruebapb_constant_a = '"key" : "value"';
        jsonpruebapb_Key = args["Key"];
        if (((JSON.parse(jsonpruebapb_constant_a))[jsonpruebapb_Key]) == 'value') {
            alert((['La clave key ', jsonpruebapb_Key, ' Es correcta!'].join('')));
        } else {
            alert((['La clave key ', jsonpruebapb_Key, ' no Es correcta'].join('')));
        }

    };

    Scratch.extensions.register(new Extension());
})(Scratch);