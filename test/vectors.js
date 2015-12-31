module.exports = {};

// bitstrings (<= 32 bits) encoding a number
module.exports.bits = [
[ "00"                              , 0|0x0         ],
[ "01"                              , 0|0x1         ],
[ "10"                              , 0|0x2         ],
[ "11"                              , 0|0x3         ],
[ "000"                             , 0|0x0         ],
[ "011"                             , 0|0x3         ],
[ "101"                             , 0|0x5         ],
[ "110"                             , 0|0x6         ],
[ "0100"                            , 0|0x4         ],
[ "0101"                            , 0|0x5         ],
[ "1000"                            , 0|0x8         ],
[ "1100"                            , 0|0xc         ],
[ "00101"                           , 0|0x5         ],
[ "01010"                           , 0|0xa         ],
[ "10011"                           , 0|0x13        ],
[ "11010"                           , 0|0x1a        ],
[ "001100"                          , 0|0xc         ],
[ "001110"                          , 0|0xe         ],
[ "010100"                          , 0|0x14        ],
[ "100111"                          , 0|0x27        ],
[ "0001011"                         , 0|0xb         ],
[ "0001101"                         , 0|0xd         ],
[ "1000100"                         , 0|0x44        ],
[ "1101011"                         , 0|0x6b        ],
[ "00100001"                        , 0|0x21        ],
[ "00100111"                        , 0|0x27        ],
[ "00101000"                        , 0|0x28        ],
[ "10101111"                        , 0|0xaf        ],
[ "000100000"                       , 0|0x20        ],
[ "100100011"                       , 0|0x123       ],
[ "100111001"                       , 0|0x139       ],
[ "111010011"                       , 0|0x1d3       ],
[ "0001001011"                      , 0|0x4b        ],
[ "0001100110"                      , 0|0x66        ],
[ "0010110111"                      , 0|0xb7        ],
[ "1011101111"                      , 0|0x2ef       ],
[ "01000010110"                     , 0|0x216       ],
[ "01001101000"                     , 0|0x268       ],
[ "10111101001"                     , 0|0x5e9       ],
[ "11111100000"                     , 0|0x7e0       ],
[ "000101010001"                    , 0|0x151       ],
[ "010101111111"                    , 0|0x57f       ],
[ "101010001110"                    , 0|0xa8e       ],
[ "110101100010"                    , 0|0xd62       ],
[ "0010001111010"                   , 0|0x47a       ],
[ "1000000001100"                   , 0|0x100c      ],
[ "1100011000000"                   , 0|0x18c0      ],
[ "1110011000011"                   , 0|0x1cc3      ],
[ "00111101111110"                  , 0|0xf7e       ],
[ "01101011001001"                  , 0|0x1ac9      ],
[ "10111000111101"                  , 0|0x2e3d      ],
[ "11101010011110"                  , 0|0x3a9e      ],
[ "010111101010110"                 , 0|0x2f56      ],
[ "100011010110000"                 , 0|0x46b0      ],
[ "110001001100100"                 , 0|0x6264      ],
[ "111011000100110"                 , 0|0x7626      ],
[ "0100101111001100"                , 0|0x4bcc      ],
[ "1000000001101100"                , 0|0x806c      ],
[ "1001000100110110"                , 0|0x9136      ],
[ "1101010000100011"                , 0|0xd423      ],
[ "01001001001101110"               , 0|0x926e      ],
[ "01111001111000010"               , 0|0xf3c2      ],
[ "10011011011000011"               , 0|0x136c3     ],
[ "10101011001110000"               , 0|0x15670     ],
[ "010000000101000110"              , 0|0x10146     ],
[ "011000100101110001"              , 0|0x18971     ],
[ "101100100110110111"              , 0|0x2c9b7     ],
[ "101110100100101111"              , 0|0x2e92f     ],
[ "0010101100101000000"             , 0|0x15940     ],
[ "1011010010000101010"             , 0|0x5a42a     ],
[ "1011100111011011000"             , 0|0x5ced8     ],
[ "1111011110011111110"             , 0|0x7bcfe     ],
[ "00101000011011111111"            , 0|0x286ff     ],
[ "01111001100011000100"            , 0|0x798c4     ],
[ "11111001001110101011"            , 0|0xf93ab     ],
[ "11111001111001101001"            , 0|0xf9e69     ],
[ "000110100000110010101"           , 0|0x34195     ],
[ "011110000101101101111"           , 0|0xf0b6f     ],
[ "101111010011001100110"           , 0|0x17a666    ],
[ "111101001011110010001"           , 0|0x1e9791    ],
[ "1001111100011011100001"          , 0|0x27c6e1    ],
[ "1011110101000101010110"          , 0|0x2f5156    ],
[ "1100000100011110001011"          , 0|0x30478b    ],
[ "1100001010010110111111"          , 0|0x30a5bf    ],
[ "01001111001101000111101"         , 0|0x279a3d    ],
[ "10110011101111110000001"         , 0|0x59df81    ],
[ "11000001101100110100011"         , 0|0x60d9a3    ],
[ "11011000010110110010110"         , 0|0x6c2d96    ],
[ "010011110100100110010100"        , 0|0x4f4994    ],
[ "011101110001100111111110"        , 0|0x7719fe    ],
[ "011110001010011011100011"        , 0|0x78a6e3    ],
[ "111100010001011101111110"        , 0|0xf1177e    ],
[ "0010110000010110001000010"       , 0|0x582c42    ],
[ "0100100011001001101110000"       , 0|0x919370    ],
[ "1000111001010110111010110"       , 0|0x11cadd6   ],
[ "1111001100101000010010101"       , 0|0x1e65095   ],
[ "00110010011100010101111111"      , 0|0xc9c57f    ],
[ "00111101011011010100111110"      , 0|0xf5b53e    ],
[ "01100000111011111010011100"      , 0|0x183be9c   ],
[ "11010001100110101111010111"      , 0|0x3466bd7   ],
[ "010000001111100110000110011"     , 0|0x207cc33   ],
[ "011010010000110000101011111"     , 0|0x348615f   ],
[ "011010110001110110001110010"     , 0|0x358ec72   ],
[ "110110100001001001001110000"     , 0|0x6d09270   ],
[ "0101000000000001000011100101"    , 0|0x50010e5   ],
[ "0110011001001100011111111100"    , 0|0x664c7fc   ],
[ "1001011010000001100110111101"    , 0|0x96819bd   ],
[ "1011011101000000111000000010"    , 0|0xb740e02   ],
[ "00100111111011011111010101101"   , 0|0x4fdbead   ],
[ "00110000011001110110101110010"   , 0|0x60ced72   ],
[ "10111110111000010010010111101"   , 0|0x17dc24bd  ],
[ "11010001000001110010101000010"   , 0|0x1a20e542  ],
[ "001001010001010111111101010111"  , 0|0x9457f57   ],
[ "100110011101100000110111111010"  , 0|0x26760dfa  ],
[ "100111000100011001010011111011"  , 0|0x271194fb  ],
[ "111011110110101110110111010101"  , 0|0x3bdaedd5  ],
[ "0111100111010100101010000111100" , 0|0x3cea543c  ],
[ "1000010011010100111001110000100" , 0|0x426a7384  ],
[ "1001110000000100001011010001010" , 0|0x4e02168a  ],
[ "1101000000000110110010011010100" , 0|0x680364d4  ],
[ "00000011100100001011101011100111", 0|0x390bae7   ],
[ "10011110110111111000010010010011", 0|0x9edf8493  ],
[ "11000101100000110001011010111100", 0|0xc58316bc  ],
[ "11111010101110011001010001011000", 0|0xfab99458  ]
];

// concat some bitstrings into an array (the last array entry here is not "high" shifted yet)
module.exports.slices = [
// lengths: 17, 16, 15, 14, 13
[ ["00100010111010110", "0010000111100001", "101111111100010", "10111011110000", "1100100100001" ], [0|0x22eb10f0, 0|0xdfe2bbc3, 0|0x121] ],
[ ["00001010100110010", "0000100011110001", "111110101100100", "10110111000101", "0000100111011" ], [0|0x0a990478, 0|0xfd64b714, 0|0x13b] ],
[ ["10110101101100001", "0000110110010100", "110100011010100", "01011010010111", "0101101011011" ], [0|0xb5b086ca, 0|0x68d45a5d, 0|0x35b] ],
[ ["01010010001010110", "1110010000100111", "001010110101110", "10110111101000", "0100000010100" ], [0|0x522b7213, 0|0x95aeb7a1, 0|0x014] ],
[ ["10011001001100110", "0100100011100010", "000110011001001", "00101101101000", "0001111101100" ], [0|0x99332471, 0|0x0cc92da0, 0|0x3ec] ],
[ ["01111100000110000", "1000101001000010", "110101001111111", "01001010110110", "0111100000001" ], [0|0x7c184521, 0|0x6a7f4ad9, 0|0x701] ],
[ ["00110011010100110", "0100101101110000", "110101110100100", "00111010010110", "0110011011100" ], [0|0x335325b8, 0|0x6ba43a59, 0|0x4dc] ],
[ ["11111110011100100", "1111101001010011", "001000100110010", "01101101100001", "0001011101011" ], [0|0xfe727d29, 0|0x91326d84, 0|0x2eb] ],
[ ["00100011001001000", "1001010100000100", "010111001100111", "11011111000000", "0100111101110" ], [0|0x23244a82, 0|0x2e67df01, 0|0x1ee] ],
[ ["10111111100000010", "0111110011010001", "001000101001110", "11101010011001", "0101111101110" ], [0|0xbf813e68, 0|0x914eea65, 0|0x3ee] ],
// lengths: 17, 15, 32, 10, 20
[ ["00001111000110001", "110100011111001", "10010110001110010011011000011111", "1001101101", "01110010001111001110" ], [0|0x0f18e8f9, 0|0x9639361f, 0|0x26d723ce] ],
[ ["11011111010101100", "101010100101100", "11101101011001011011010111101011", "0010110010", "11110011110110000010" ], [0|0xdf56552c, 0|0xed65b5eb, 0|0x0b2f3d82] ],
[ ["10100100001000101", "100111001100011", "00111100101000110010000011101001", "1001110001", "11000000001111111110" ], [0|0xa422ce63, 0|0x3ca320e9, 0|0x271c03fe] ],
[ ["01110001111111010", "000101001101110", "00001100011010100100001011111001", "1011111010", "00011001110111111001" ], [0|0x71fd0a6e, 0|0x0c6a42f9, 0|0x2fa19df9] ],
[ ["01001100010011001", "000111011000100", "10100000110101110110011110001100", "0011000001", "11001101010101011100" ], [0|0x4c4c8ec4, 0|0xa0d7678c, 0|0x0c1cd55c] ],
[ ["01010010100110110", "110111110001000", "10011100001100010100000110000000", "1100111101", "00010001110100111101" ], [0|0x529b6f88, 0|0x9c314180, 0|0x33d11d3d] ],
[ ["11010100011101101", "110101011011010", "01000110000011001111101110100001", "0001001110", "01001100010010001010" ], [0|0xd476eada, 0|0x460cfba1, 0|0x04e4c48a] ],
[ ["11000001010001101", "001111011110111", "10000010100111010111011000100001", "0011000011", "11011110110000101000" ], [0|0xc1469ef7, 0|0x829d7621, 0|0x0c3dec28] ],
[ ["11000101100010100", "000110111111110", "11111011110010001100001100010000", "0000101010", "10000011010011100011" ], [0|0xc58a0dfe, 0|0xfbc8c310, 0|0x02a834e3] ],
[ ["11111111110100101", "110101000011001", "10101010010100111010100010110100", "0010011000", "10100110001000000010" ], [0|0xffd2ea19, 0|0xaa53a8b4, 0|0x098a6202] ]
];

module.exports.byteswap = [
  [ [ 0xdab1a44e, 0x73fdc3de, 0xed6e6f00, 0x5d221b85, 0xadb987a4, 0xc20eda76, 0xa0d40d0c, 0xd1da9657, 0xd85eebf0, 0xd3f9c06d, 0xca1e39b0, 0xccd7eaeb, 0xb1dd6bd0, 0x7315a9e6, 0x77cfcac4, 0xf7914c19, 0x1bc15354, 0x935afabc, 0x3ee9d375, 0xd18a095f]
  , [ 0x4ea4b1da, 0xdec3fd73, 0x006f6eed, 0x851b225d, 0xa487b9ad, 0x76da0ec2, 0x0c0dd4a0, 0x5796dad1, 0xf0eb5ed8, 0x6dc0f9d3, 0xb0391eca, 0xebead7cc, 0xd06bddb1, 0xe6a91573, 0xc4cacf77, 0x194c91f7, 0x5453c11b, 0xbcfa5a93, 0x75d3e93e, 0x5f098ad1]
  ]
];