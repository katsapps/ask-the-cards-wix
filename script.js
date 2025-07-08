var deck_dict = {
    "0": 'columba',
    "1": 'pegasus',
    "2": 'sirius',
    "3": 'venus',
    "4": 'jupiter',
    "5": 'centaurus',
    "6": 'corona-borealis',
    "7": 'auriga',
    "8": 'hercules',
    "9": 'halleys-comet',
    "10": 'draco',
    "11": 'libra',
    "12": 'capricornicus',
    "13": 'phoenix',
    "14": 'horologium',
    "15": 'cetus',
    "16": 'pavo',
    "17": 'polaris',
    "18": 'moon',
    "19": 'sun',
    "20": 'cassiopeia',
    "21": 'earth',
    "22": 'ace-of-cups',
    "23": 'two-of-cups',
    "24": 'three-of-cups',
    "25": 'four-of-cups',
    "26": 'five-of-cups',
    "27": 'six-of-cups',
    "28": 'seven-of-cups',
    "29": 'eight-of-cups',
    "30": 'nine-of-cups',
    "31": 'ten-of-cups',
    "32": 'page-of-cups',
    "33": 'knight-of-cups',
    "34": 'queen-of-cups',
    "35": 'king-of-cups',
    "36": 'ace-of-swords',
    "37": 'two-of-swords',
    "38": 'three-of-swords',
    "39": 'four-of-swords',
    "40": 'five-of-swords',
    "41": 'six-of-swords',
    "42": 'seven-of-swords',
    "43": 'eight-of-swords',
    "44": 'nine-of-swords ',
    "45": 'ten-of-swords',
    "46": 'page-of-swords',
    "47": 'knight-of-swords',
    "48": 'queen-of-swords',
    "49": 'king-of-swords',
    "50": 'ace-of-pentacles',
    "51": 'two-of-pentacles',
    "52": 'three-of-pentacles',
    "53": 'four-of-pentacles',
    "54": 'five-of-pentacles',
    "55": 'six-of-pentacles',
    "56": 'seven-of-pentacles',
    "57": 'eight-of-pentacles',
    "58": 'nine-of-pentacles',
    "59": 'ten-of-pentacles',
    "60": 'page-of-pentacles',
    "61": 'knight-of-pentacles',
    "62": 'queen-of-pentacles',
    "63": 'king-of-pentacles',
    "64": 'ace-of-wands',
    "65": 'two-of-wands',
    "66": 'three-of-wands',
    "67": 'four-of-wands',
    "68": 'five-of-wands',
    "69": 'six-of-wands',
    "70": 'seven-of-wands',
    "71": 'eight-of-wands',
    "72": 'nine-of-wands',
    "73": 'ten-of-wands',
    "74": 'page-of-wands',
    "75": 'knight-of-wands',
    "76": 'queen-of-wands',
    "77": 'king-of-wands'
};

var dict_size = 77;
var chosen_num;
var shuffled = true;

var img_url_dict = {
    "77": "https://static.wixstatic.com/media/c5e9ce_9f70f23e90fd4b9696139d0951b3e765~mv2.jpg",
    "76": "https://static.wixstatic.com/media/c5e9ce_6075dd11d4664825b494ceed231f10a7~mv2.jpg",
    "75": "https://static.wixstatic.com/media/c5e9ce_dda47e6fa065414d9baeb570a0c966e7~mv2.jpg",
    "74": "https://static.wixstatic.com/media/c5e9ce_c4ab27bed9b84b9cbea3866a111632c1~mv2.jpg",
    "73": "https://static.wixstatic.com/media/c5e9ce_27ddd731c8a4411991183059e5458bca~mv2.jpg",
    "72": "https://static.wixstatic.com/media/c5e9ce_f6f7f9791b1e4a7cb48fe2a19aa00f04~mv2.jpg",
    "71": "https://static.wixstatic.com/media/c5e9ce_1c9ced6f31d1437a82ddb56d7d981e67~mv2.jpg",
    "70": "https://static.wixstatic.com/media/c5e9ce_1c2060b265a34b9d8e154148a458d937~mv2.jpg",
    "69": "https://static.wixstatic.com/media/c5e9ce_6205b4c7609b4d7790c205cb4f8ba1f8~mv2.jpg",
    "68": "https://static.wixstatic.com/media/c5e9ce_7134dbbaad0149e4a4a441cab36b65b3~mv2.jpg",
    "67": "https://static.wixstatic.com/media/c5e9ce_0b1db3ad68374447a2cb79b1ea591107~mv2.jpg",
    "66": "https://static.wixstatic.com/media/c5e9ce_128877e4e44942b4aeb68bafa3053cb9~mv2.jpg",
    "65": "https://static.wixstatic.com/media/c5e9ce_dedc624fb8a84632af729315898c2a44~mv2.jpg",
    "64": "https://static.wixstatic.com/media/c5e9ce_5195408056b243a0b626096f7afab855~mv2.jpg",
    "63": "https://static.wixstatic.com/media/c5e9ce_a204893a2a404d7ebb3f50306ff85c20~mv2.jpg",
    "62": "https://static.wixstatic.com/media/c5e9ce_bb38e4e829bc4afa922e41c718a78cd7~mv2.jpg",
    "61": "https://static.wixstatic.com/media/c5e9ce_a7f215b9ba16466aac595ebc41f634be~mv2.jpg",
    "60": "https://static.wixstatic.com/media/c5e9ce_bd4538758ad947b79191ad5782e7a0b7~mv2.jpg",
    "59": "https://static.wixstatic.com/media/c5e9ce_e62bcc4b38144bd88fdb3a8c31689142~mv2.jpg",
    "58": "https://static.wixstatic.com/media/c5e9ce_c724594b8fc5486e8a8376a907584180~mv2.jpg",
    "57": "https://static.wixstatic.com/media/c5e9ce_bd23059074e2436880050619f13639b3~mv2.jpg",
    "56": "https://static.wixstatic.com/media/c5e9ce_22144298565940b89deb8f302bb930d4~mv2.jpg",
    "55": "https://static.wixstatic.com/media/c5e9ce_25a033d552c84ad4b2d3d0854b44a077~mv2.jpg",
    "54": "https://static.wixstatic.com/media/c5e9ce_aa97bfffd7d84bdb8d9857b085723088~mv2.jpg",
    "53": "https://static.wixstatic.com/media/c5e9ce_caab02d72ab84ee6b6b8304eef6a98d8~mv2.jpg",
    "52": "https://static.wixstatic.com/media/c5e9ce_b6bb99c2395b4b7ba37657c897d6e3db~mv2.jpg",
    "51": "https://static.wixstatic.com/media/c5e9ce_591e1ebf2012460a99e1e131a8aec022~mv2.jpg",
    "50": "https://static.wixstatic.com/media/c5e9ce_fc98f9c0af6744419addaecb3c51340a~mv2.jpg",
    "49": "https://static.wixstatic.com/media/c5e9ce_0bf369697c8d4c70b3dfc92f47bb3447~mv2.jpg",
    "48": "https://static.wixstatic.com/media/c5e9ce_0804915252f5477a9c235d5a924c7ab1~mv2.jpg",
    "47": "https://static.wixstatic.com/media/c5e9ce_d8d41bcb8d314b4db413c7ac755126da~mv2.jpg",
    "46": "https://static.wixstatic.com/media/c5e9ce_474339f579d944d3b901b42b4123c3d8~mv2.jpg",
    "45": "https://static.wixstatic.com/media/c5e9ce_60785382e1aa407f916e445f1a7277bf~mv2.jpg",
    "44": "https://static.wixstatic.com/media/c5e9ce_f41e0c697fde428e88f7bae05c96d86f~mv2.jpg",
    "43": "https://static.wixstatic.com/media/c5e9ce_dd84cdce6f1a492aacc7041b56c1b015~mv2.jpg",
    "42": "https://static.wixstatic.com/media/c5e9ce_40be0f3c56974c5db8f741e4b3e99ba2~mv2.jpg",
    "41": "https://static.wixstatic.com/media/c5e9ce_e51d95186ca84245bb39c6f39852978a~mv2.jpg",
    "40": "https://static.wixstatic.com/media/c5e9ce_272418e0c7dc46539010510ac26fbfb3~mv2.jpg",
    "39": "https://static.wixstatic.com/media/c5e9ce_a5177f70abe34da29c4e8b6bc4289dc2~mv2.jpg",
    "38": "https://static.wixstatic.com/media/c5e9ce_ff128ce902c84a38b7c60c6867c4a2f4~mv2.jpg",
    "37": "https://static.wixstatic.com/media/c5e9ce_178eb8842da54276a51fa536cd4727dd~mv2.jpg",
    "36": "https://static.wixstatic.com/media/c5e9ce_7aec2fb169da4183ab7d7491ad129416~mv2.jpg",
    "35": "https://static.wixstatic.com/media/c5e9ce_ba694b6f70644ecc8d4d2c359b592b9f~mv2.jpg",
    "34": "https://static.wixstatic.com/media/c5e9ce_2d75305c1c7e424cb336ca2137bc273d~mv2.jpg",
    "33": "https://static.wixstatic.com/media/c5e9ce_d94cdc6fa4cf467bb7d4039708721316~mv2.jpg",
    "32": "https://static.wixstatic.com/media/c5e9ce_f9c8212d74ae476cba0fba9228f69fa8~mv2.jpg",
    "31": "https://static.wixstatic.com/media/c5e9ce_2652145cec7c4a53b52c292ae86ce13c~mv2.jpg",
    "30": "https://static.wixstatic.com/media/c5e9ce_e75eb963cd8749f79aee734c89e6e7cb~mv2.jpg",
    "29": "https://static.wixstatic.com/media/c5e9ce_d4086b1ac1d345a5934ec466916455df~mv2.jpg",
    "28": "https://static.wixstatic.com/media/c5e9ce_fc43734b9794427092ea316717636f85~mv2.jpg",
    "27": "https://static.wixstatic.com/media/c5e9ce_7ea843fb75ad4116920158f685d48e8a~mv2.jpg",
    "26": "https://static.wixstatic.com/media/c5e9ce_c52a046c419d49cc84cfc84438c45354~mv2.jpg",
    "25": "https://static.wixstatic.com/media/c5e9ce_46fd87d64e6b449987c9056c821d7694~mv2.jpg",
    "24": "https://static.wixstatic.com/media/c5e9ce_ed30b7ec7ed447538898437c88040388~mv2.jpg",
    "23": "https://static.wixstatic.com/media/c5e9ce_a044b56432d348fba1d9c795d5c9e9b8~mv2.jpg",
    "22": "https://static.wixstatic.com/media/c5e9ce_edfc90720d374fa4a484bd82efef5ef0~mv2.jpg",
    "21": "https://static.wixstatic.com/media/c5e9ce_2e6cb7e7ffbb484fad5238073abf69ed~mv2.jpg",
    "20": "https://static.wixstatic.com/media/c5e9ce_941eaeae1ab14be9bb5713921743c80b~mv2.jpg",
    "19": "https://static.wixstatic.com/media/c5e9ce_7e7eac75a9be44f1a1eecf1972c4854b~mv2.jpg",
    "18": "https://static.wixstatic.com/media/c5e9ce_5661b64a066d42dd85368807df7373d0~mv2.jpg",
    "17": "https://static.wixstatic.com/media/c5e9ce_e624a61592cf495993f599bd055e45e3~mv2.jpg",
    "16": "https://static.wixstatic.com/media/c5e9ce_edaaeb064ec741298d1ef680c146a8a0~mv2.jpg",
    "15": "https://static.wixstatic.com/media/c5e9ce_defaed8983ff43bc86d948c716e6b561~mv2.jpg",
    "14": "https://static.wixstatic.com/media/c5e9ce_b3652f9e46544e18b51afb40103faa54~mv2.jpg",
    "13": "https://static.wixstatic.com/media/c5e9ce_dbd986f293534cbb89a0605f7a91c183~mv2.jpg",
    "12": "https://static.wixstatic.com/media/c5e9ce_b7f0d5ab42824f0896422e31c022914a~mv2.jpg",
    "11": "https://static.wixstatic.com/media/c5e9ce_a3476bcaa2d2406aa6755319abb53593~mv2.jpg",
    "10": "https://static.wixstatic.com/media/c5e9ce_08d82d5804064800a39e6afad4cf11c5~mv2.jpg",
    "9": "https://static.wixstatic.com/media/c5e9ce_1cf0e2ec7b6844e8906108450df62b0c~mv2.jpg",
    "8": "https://static.wixstatic.com/media/c5e9ce_c1a4a96d3acd40f98aba02b4c87838f3~mv2.jpg",
    "7": "https://static.wixstatic.com/media/c5e9ce_b4dcb0bf24e54e7c85da798d4d1d9d3b~mv2.jpg",
    "6": "https://static.wixstatic.com/media/c5e9ce_2d1972e889e84439812dc7454e871e43~mv2.jpg",
    "5": "https://static.wixstatic.com/media/c5e9ce_c42cabdd179542ac82aefadf60e36c96~mv2.jpg",
    "4": "https://static.wixstatic.com/media/c5e9ce_d7695cf5e64a41659142eb92229cc5e5~mv2.jpg",
    "3": "https://static.wixstatic.com/media/c5e9ce_4fd48532101e470ca9d8e3d3e397f121~mv2.jpg",
    "2": "https://static.wixstatic.com/media/c5e9ce_a3e346b26e5143acb41b6bc3bf1040a8~mv2.jpg",
    "1": "https://static.wixstatic.com/media/c5e9ce_aa259b2cef4f4227819e3e456bbf8873~mv2.jpg",
    "0": "https://static.wixstatic.com/media/c5e9ce_444b2db0a40e4a20a715beda1bff55e0~mv2.jpg",
    "_transition": "https://static.wixstatic.com/media/c5e9ce_9c0118c344bc4189b05d754824c1f019~mv2.jpg",
    "_back": "https://static.wixstatic.com/media/c5e9ce_b1d4444d8ea04e5aab98830afc0d4d53~mv2.jpg",
    "78m": "https://static.wixstatic.com/media/c5e9ce_db20dd3fd191439082d6c110c191d34b~mv2.jpg",
    "77m": "https://static.wixstatic.com/media/c5e9ce_886bbf77a7ee46a3b07c4d4f4cc454d4~mv2.jpg",
    "76m": "https://static.wixstatic.com/media/c5e9ce_cf3e157a0175454881bf6f37ea95ac2e~mv2.jpg",
    "75m": "https://static.wixstatic.com/media/c5e9ce_abbb3d146b36423cb5da1e07ab28e379~mv2.jpg",
    "74m": "https://static.wixstatic.com/media/c5e9ce_7a665239e2d54e5394205fb8df431206~mv2.jpg",
    "73m": "https://static.wixstatic.com/media/c5e9ce_e065e7e89e3e4410b650c70fd4d31285~mv2.jpg",
    "72m": "https://static.wixstatic.com/media/c5e9ce_b240cc6ca92244c5a6995a0ff37cdaf0~mv2.jpg",
    "71m": "https://static.wixstatic.com/media/c5e9ce_dc5fb0d233ef4a7b9d4a93a2a41ca22c~mv2.jpg",
    "70m": "https://static.wixstatic.com/media/c5e9ce_9064faea67ee41ce965fe3199b9e36da~mv2.jpg",
    "69m": "https://static.wixstatic.com/media/c5e9ce_30bf0b8684f24de69d1cfabd119f1b19~mv2.jpg",
    "68m": "https://static.wixstatic.com/media/c5e9ce_35f66c724c6d4a75894458ab55c861cc~mv2.jpg",
    "67m": "https://static.wixstatic.com/media/c5e9ce_e92f894b237c4ae9b93969e9d4042d12~mv2.jpg",
    "66m": "https://static.wixstatic.com/media/c5e9ce_9d31a7b5979245eeafb53ac3c4a78033~mv2.jpg",
    "65m": "https://static.wixstatic.com/media/c5e9ce_a65a38b8dda24ac996c53f008e24c3c5~mv2.jpg",
    "64m": "https://static.wixstatic.com/media/c5e9ce_e4ad9e96f54f4f53a6f5f71097a33d89~mv2.jpg",
    "63m": "https://static.wixstatic.com/media/c5e9ce_d3057e0753c544329adf8b432b854203~mv2.jpg",
    "62m": "https://static.wixstatic.com/media/c5e9ce_0b4567306c05452da25207ff599f8cc0~mv2.jpg",
    "61m": "https://static.wixstatic.com/media/c5e9ce_e86a1ae9cfea4c5c91d5115629ea1d9e~mv2.jpg",
    "60m": "https://static.wixstatic.com/media/c5e9ce_060ecf8875424f26997aa87b1dd01a64~mv2.jpg",
    "59m": "https://static.wixstatic.com/media/c5e9ce_ad6bd0633c2c4ae29314adbbe62414a0~mv2.jpg",
    "58m": "https://static.wixstatic.com/media/c5e9ce_c4b0df84627e44dd8089d2333444218a~mv2.jpg",
    "57m": "https://static.wixstatic.com/media/c5e9ce_a353c198771141849cabe572393a84b4~mv2.jpg",
    "56m": "https://static.wixstatic.com/media/c5e9ce_4596a2cc2eb24781a221264bc63266f4~mv2.jpg",
    "55m": "https://static.wixstatic.com/media/c5e9ce_0d90c227fb894f7dbaadbf6c94598692~mv2.jpg",
    "54m": "https://static.wixstatic.com/media/c5e9ce_11e69df731d94a1192145661062ff7a3~mv2.jpg",
    "53m": "https://static.wixstatic.com/media/c5e9ce_d9596d9e2073446292c698ccb6e341c0~mv2.jpg",
    "52m": "https://static.wixstatic.com/media/c5e9ce_c9ac20f1662e4a1abc24b75986aeb972~mv2.jpg",
    "51m": "https://static.wixstatic.com/media/c5e9ce_395d14cab6f043149269a83d64d24ca3~mv2.jpg",
    "50m": "https://static.wixstatic.com/media/c5e9ce_c59592fe2c47455c8abc5ef61e9e4e5f~mv2.jpg",
    "49m": "https://static.wixstatic.com/media/c5e9ce_cf8dd3a0649346cd94b6ecbb9f6f3c45~mv2.jpg",
    "48m": "https://static.wixstatic.com/media/c5e9ce_703b98400de14119a9bdc79cb616ef1d~mv2.jpg",
    "47m": "https://static.wixstatic.com/media/c5e9ce_2808628087c442388f4a9528c23daf08~mv2.jpg",
    "46m": "https://static.wixstatic.com/media/c5e9ce_41e1a6f9b06b44289f881773db767880~mv2.jpg",
    "45m": "https://static.wixstatic.com/media/c5e9ce_d320364fd2ba4698810e681621e1aef5~mv2.jpg",
    "44m": "https://static.wixstatic.com/media/c5e9ce_0fee761f2a624e808644bdaddd1a76e0~mv2.jpg",
    "43m": "https://static.wixstatic.com/media/c5e9ce_244c2436add14a15a175483900b37cb2~mv2.jpg",
    "42m": "https://static.wixstatic.com/media/c5e9ce_0f8dcc3f8d18452aad88aa1268edbf33~mv2.jpg",
    "41m": "https://static.wixstatic.com/media/c5e9ce_0cb424eac4b4468195942abb33a6795c~mv2.jpg",
    "40m": "https://static.wixstatic.com/media/c5e9ce_1365896923f24cb790f4b3b9cc8c3d97~mv2.jpg",
    "39m": "https://static.wixstatic.com/media/c5e9ce_1c4118f46aaa43af8ab8c4b8b8ef9cc5~mv2.jpg",
    "38m": "https://static.wixstatic.com/media/c5e9ce_23da065f7e4744eb9793df1f6221fb8f~mv2.jpg",
    "37m": "https://static.wixstatic.com/media/c5e9ce_4bca008022f343ceaa8ec465526caec8~mv2.jpg",
    "36m": "https://static.wixstatic.com/media/c5e9ce_6b2e765f82fd45a18a16e642d3628912~mv2.jpg",
    "35m": "https://static.wixstatic.com/media/c5e9ce_28ffaedfe89f4457b65723f1ab056166~mv2.jpg",
    "34m": "https://static.wixstatic.com/media/c5e9ce_d67fa01854c9485592bbb5926bdefacb~mv2.jpg",
    "33m": "https://static.wixstatic.com/media/c5e9ce_5746b571843a45a09c5363c80224bea0~mv2.jpg",
    "32m": "https://static.wixstatic.com/media/c5e9ce_14f59f97eb964fad96dcd3792186b354~mv2.jpg",
    "31m": "https://static.wixstatic.com/media/c5e9ce_36d7dc788f8a437eac4a788dd0a9c7f8~mv2.jpg",
    "30m": "https://static.wixstatic.com/media/c5e9ce_7377ee45d4a84deba85718176d927775~mv2.jpg",
    "29m": "https://static.wixstatic.com/media/c5e9ce_5058efaddec7468b8ca91b4be93fdd1c~mv2.jpg",
    "28m": "https://static.wixstatic.com/media/c5e9ce_c77b2d32e31d431c891ec513a33c98f3~mv2.jpg",
    "27m": "https://static.wixstatic.com/media/c5e9ce_50a32c5dfeaa49c199dd8edf60afd46d~mv2.jpg",
    "26m": "https://static.wixstatic.com/media/c5e9ce_5e68d599edd243a8ba4b1055ea25594d~mv2.jpg",
    "25m": "https://static.wixstatic.com/media/c5e9ce_8a5f876e90c6461c922649be9989e16b~mv2.jpg",
    "24m": "https://static.wixstatic.com/media/c5e9ce_8e70880d988d4c06b48c861063db6de2~mv2.jpg",
    "23m": "https://static.wixstatic.com/media/c5e9ce_7d807029e2d04ae3b23624464f4f0bdb~mv2.jpg",
    "22m": "https://static.wixstatic.com/media/c5e9ce_6484a993f4d74cf2b7067829f28fcefd~mv2.jpg",
    "21m": "https://static.wixstatic.com/media/c5e9ce_40e153544cc44b8991c5680964b7bc55~mv2.jpg",
    "20m": "https://static.wixstatic.com/media/c5e9ce_722217d7da444aeeb4307afd44b1d93e~mv2.jpg",
    "19m": "https://static.wixstatic.com/media/c5e9ce_7a7cf4e447c54610a49d33abaf157c2f~mv2.jpg",
    "18m": "https://static.wixstatic.com/media/c5e9ce_ba37bf84e86f43fc9ab147e0b2282d3f~mv2.jpg",
    "17m": "https://static.wixstatic.com/media/c5e9ce_aa991318fa6c4be2a3a639f2f5a5a248~mv2.jpg",
    "16m": "https://static.wixstatic.com/media/c5e9ce_6342dd97b6594ffcb15c9909fdfb15bd~mv2.jpg",
    "15m": "https://static.wixstatic.com/media/c5e9ce_eec4d42234d44e16b19353cc24663572~mv2.jpg",
    "14m": "https://static.wixstatic.com/media/c5e9ce_56fafcdc8a524a39acba7aeebbc80644~mv2.jpg",
    "13m": "https://static.wixstatic.com/media/c5e9ce_ec14e2f749134417bb04ee5468bc4b97~mv2.jpg",
    "12m": "https://static.wixstatic.com/media/c5e9ce_6899c53bb3494cd3829e1851f2d34867~mv2.jpg",
    "11m": "https://static.wixstatic.com/media/c5e9ce_a1bec4fa34274e08af5a31eb87a528bf~mv2.jpg",
    "10m": "https://static.wixstatic.com/media/c5e9ce_42f68bd297bc44bc9565f9c8333d5413~mv2.jpg",
    "9m": "https://static.wixstatic.com/media/c5e9ce_95575617a8a74894a32ebc6b5c565ec9~mv2.jpg",
    "8m": "https://static.wixstatic.com/media/c5e9ce_4664f05786034cee90be933f65ee6a0c~mv2.jpg",
    "7m": "https://static.wixstatic.com/media/c5e9ce_1e0d71e4b12c4c47bba2d94f48391bb3~mv2.jpg",
    "6m": "https://static.wixstatic.com/media/c5e9ce_e475cb769b44478085548e8e19ddc469~mv2.jpg",
    "5m": "https://static.wixstatic.com/media/c5e9ce_b3a1554d55924fe88d9f852f775abd6e~mv2.jpg",
    "4m": "https://static.wixstatic.com/media/c5e9ce_414ba208790c4226b6d91f6e62a0e763~mv2.jpg",
    "3m": "https://static.wixstatic.com/media/c5e9ce_d439a6bd5097477286319f5f2937479b~mv2.jpg",
    "2m": "https://static.wixstatic.com/media/c5e9ce_8d792f4b1db74be29221fba5d789479f~mv2.jpg",
    "1m": "https://static.wixstatic.com/media/c5e9ce_e718eb08caa74bb4b0e00154bb4a117a~mv2.jpg",
    "0m": "https://static.wixstatic.com/media/c5e9ce_03f8eb0dd6f74a80b61202f626f90850~mv2.jpg",
    "_backm": "https://static.wixstatic.com/media/c5e9ce_61df22c4c3e24117a5eca0d60c4ac907~mv2.jpg",
    "_transitionm": "https://static.wixstatic.com/media/c5e9ce_f1352c9fda414f999a6f20a351957025~mv2.jpg"
};

$(window).resize(function() {
    set_img_size();
});

// Use event delegation to handle clicks on dynamically added buttons
document.addEventListener('click', function(event) {
	// If the clicked element has id="shuffle-deck"
	if (event.target && event.target.id === 'shuffle-deck') {
	// Scroll the page to the very top
		window.scrollTo(0, 0);
				alert("clicked new");
	}
});
		
// Reverse lookup: find the key for a given value in img_url_dict
function getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value);
}

function set_img_size() {

    var window_width = $(window).width();
    if (window_width < 572) { // desktop to mobile
        $(".imgs").each(function(index, element) {

            var img_src = $(element).attr('src');
            var src_name = getKeyByValue(img_url_dict, img_src); // 65 or 65m
            var index_of_m = src_name.lastIndexOf("m");
            if (index_of_m == -1) { //if it's desktop
                var new_img_src = img_url_dict[src_name.concat('m')]; // 65m.jpg
                $(element).attr('src', new_img_src);
            } else {
                return
            }
        });
    } else {  // mobile to desktop
        $(".imgs").each(function(index, element) {

            var img_src = $(element).attr('src');
            var src_name = getKeyByValue(img_url_dict, img_src); // 65 or 65m
            var index_of_m = src_name.lastIndexOf("m");
            if (index_of_m > -1) { //if it's mobile  65m
                var new_img_src = img_url_dict[src_name.slice(0, -1)]; // 65.jpg
                $(element).attr('src', new_img_src);
            } else {
                return
            }
        });
    }
}

// adjust iframe height
  function sendSizeToParent() {
    const height = document.body.scrollHeight;
    const width = document.body.scrollWidth;
    parent.postMessage({ iframeHeight: height, iframeWidth: width }, '*');
  }

  // Optional: send size once when iframe loads
  window.addEventListener('load', sendSizeToParent);

$(document).ready(function() {

    set_img_size();

    $('#imgs-div').click(function() {
        if (shuffled) {
            $('#deck-div').empty();
            chosen_num = Math.floor(Math.random() * dict_size); //65
			//chosen_num = Math.floor(Math.random() * 16); //65
			//chosen_num = 0; //longest

            var card_name = deck_dict[chosen_num.toString()]; //deck_dict["65"] = "two-of-wands"
            var img = new Image();

            img.src = img_url_dict[chosen_num.toString()];

            img.alt = card_name;
            $(img).addClass('imgs');
            $('#deck-div').append(img);

            set_img_size();

            $('#desc-div').html($('#' + card_name).html());
            $('#imgs-div').removeClass('hand-cursor');
            $('#transition-img').addClass('opacity-to-1');
            $('.picked-card').addClass('opacity-to-1');

            shuffled = false;

            setTimeout(function() {
                $('#desc-div').addClass('to-display');
                $('#shuffle-deck').addClass('to-display');
                //sendSizeToParent();
            }, 2100);
        }
    });
	function scrollMeIntoParentView() {
	  const target = document.getElementById('imgs-div');
	  const y = target.getBoundingClientRect().top;

	  // Send relative scroll position to parent
	  parent.postMessage({ scrollToIframeOffset: y }, '*'); 
	}

    $('#shuffle-deck').click(function() {

        $('#imgs-div').addClass('hand-cursor');

        /*$('html, body').animate({
            scrollTop: ($('#imgs-div').offset().top)
        }, 500);*/
		
		//scrollMeIntoParentView();
		
		//document.querySelector("#imgs-div").scrollIntoView({behaviour:"smooth",block:"start",});
		
		//$("#shuffle-deck").on("click", function () {
		//	$("html body").animate({scrollTop: 0 }, 800);
		//});
		
		//window.scrollTo(0 ,0);

		
        shuffled = true;		
        $('#transition-img').removeClass('opacity-to-1');
        $('.picked-card').removeClass('opacity-to-1');

        setTimeout(function() {
            $('#desc-div').removeClass('to-display');
            $('#shuffle-deck').removeClass('to-display');
            //sendSizeToParent();
        }, 1000);
        
    });
});
