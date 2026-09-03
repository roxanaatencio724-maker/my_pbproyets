// Made with PenguinBuilder v4.2.0
// use PenguinBuilder at "https://penguinbuilder.github.io"
(async function(Scratch) {
    const blocks = [];
    const menus = {};

    class Extension {
        getInfo() {
            return {
                "id": "cpthayhastanpb",
                "name": "CPtHayhastan",
                "color1": "#0088ff",
                "blocks": blocks,
                "menus": menus,
            }
        }
    }

    var cpthayhastanpb_n, cpthayhastanpb_ntriangular, cpthayhastanpb_nprompt, cpthayhastanpb_ntriangularstring, cpthayhastanpb_i, cpthayhastanpb_inv_ntriangularstring;

    // Describe this function...
    async function cpthayhastanpb_VerificadorTriangular_es_Palindrotriangular(cpthayhastanpb_n) {
        cpthayhastanpb_ntriangular = (cpthayhastanpb_n * (cpthayhastanpb_n + 1)) / 2;
        cpthayhastanpb_ntriangularstring = String(cpthayhastanpb_ntriangular);
        cpthayhastanpb_inv_ntriangularstring = cpthayhastanpb_ntriangularstring.split('').reverse().join('');
        return (await (async () => {
            return (cpthayhastanpb_inv_ntriangularstring == cpthayhastanpb_ntriangularstring);
        })());
    }

    blocks.push({
        opcode: "cpthayhastanpb_Block_Cuantospalindrotriangulareshayhastan",
        blockType: Scratch.BlockType.COMMAND,
        text: "Cuantos palindrotriangulares hay hasta n",
        arguments: {

        },
        disableMonitor: false
    });
    Extension.prototype["cpthayhastanpb_Block_Cuantospalindrotriangulareshayhastan"] = async function(args, util) {
        cpthayhastanpb_nprompt = Number(prompt('Hasta que numero entero se te ocurre buscar palindrotriangulares'));
        cpthayhastanpb_i = 0;
        while (cpthayhastanpb_i <= cpthayhastanpb_nprompt) {
            if ((await cpthayhastanpb_VerificadorTriangular_es_Palindrotriangular(cpthayhastanpb_i)) === true){
                console.log(((cpthayhastanpb_i * (cpthayhastanpb_i + 1)) / 2));
            }
            cpthayhastanpb_i = (typeof cpthayhastanpb_i === 'number' ? cpthayhastanpb_i : 0) + 1;
        }

    };

    Scratch.extensions.register(new Extension());
})(Scratch);