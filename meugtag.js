// Copyright 2012 Google Inc. All rights reserved.

(function() {
    console.log("v = 5");

    var data = {
        "resource": {
            "version": "1",

            "macros": [{
                "function": "__e"
            }, {
                "function": "__c",
                "vtp_value": "google.com.br"
            }, {
                "function": "__c",
                "vtp_value": 0
            }],
            "tags": [{
                "function": "__ogt_1p_data_v2",
                "priority": 6,
                "vtp_isAutoEnabled": true,
                "vtp_autoCollectExclusionSelectors": ["list", ["map", "exclusionSelector", ""]],
                "vtp_isEnabled": true,
                "vtp_manualEmailEnabled": false,
                "vtp_cityValue": "",
                "vtp_autoEmailEnabled": true,
                "vtp_postalCodeValue": "",
                "vtp_lastNameValue": "",
                "vtp_phoneValue": "",
                "vtp_autoPhoneEnabled": false,
                "vtp_emailValue": "",
                "vtp_firstNameValue": "",
                "vtp_streetValue": "",
                "vtp_autoAddressEnabled": false,
                "vtp_regionValue": "",
                "vtp_countryValue": "",
                "vtp_isAutoCollectPiiEnabledFlag": false,
                "tag_id": 4
            }, {
                "function": "__ccd_ga_first",
                "priority": 5,
                "vtp_instanceDestinationId": "G-TR5E2D5Y8N",
                "tag_id": 11
            }, {
                "function": "__set_product_settings",
                "priority": 4,
                "vtp_instanceDestinationId": "G-TR5E2D5Y8N",
                "vtp_foreignTldMacroResult": ["macro", 1],
                "vtp_isChinaVipRegionMacroResult": ["macro", 2],
                "tag_id": 10
            }, {
                "function": "__ccd_ga_regscope",
                "priority": 3,
                "vtp_settingsTable": ["list", ["map", "redactFieldGroup", "DEVICE_AND_GEO", "disallowAllRegions", false, "disallowedRegions", ""],
                    ["map", "redactFieldGroup", "GOOGLE_SIGNALS", "disallowAllRegions", true, "disallowedRegions", ""]
                ],
                "vtp_instanceDestinationId": "G-TR5E2D5Y8N",
                "tag_id": 9
            }, {
                "function": "__ccd_conversion_marking",
                "priority": 2,
                "vtp_conversionRules": ["list", ["map", "matchingRules", "{\"type\":5,\"args\":[{\"stringValue\":\"purchase\"},{\"contextValue\":{\"namespaceType\":1,\"keyParts\":[\"eventName\"]}}]}"]],
                "vtp_instanceDestinationId": "G-TR5E2D5Y8N",
                "tag_id": 8
            }, {
                "function": "__ccd_auto_redact",
                "priority": 1,
                "vtp_redactEmail": true,
                "vtp_instanceDestinationId": "G-TR5E2D5Y8N",
                "tag_id": 7
            }, {
                "function": "__gct",
                "vtp_trackingId": "G-TR5E2D5Y8N",
                "vtp_sessionDuration": 0,
                "tag_id": 1
            }, {
                "function": "__ccd_ga_last",
                "priority": 0,
                "vtp_instanceDestinationId": "G-TR5E2D5Y8N",
                "tag_id": 6
            }],
            "predicates": [{
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "gtm.js"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "gtm.init"
            }],
            "rules": [
                [
                    ["if", 0],
                    ["add", 6]
                ],
                [
                    ["if", 1],
                    ["add", 0, 7, 5, 4, 3, 2, 1]
                ]
            ]
        },
        "runtime": [
            [50, "__c", [46, "a"],
                [36, [17, [15, "a"], "value"]]
            ],
            [50, "__ccd_auto_redact", [46, "a"],
                [50, "v", [46, "bk"],
                    [36, [2, [15, "bk"], "replace", [7, [15, "u"], "\\$1"]]]
                ],
                [50, "w", [46, "bk"],
                    [52, "bl", ["c", [15, "bk"]]],
                    [52, "bm", [7]],
                    [65, "bn", [2, [15, "bl"], "split", [7, ""]],
                        [46, [53, [52, "bo", [7, ["v", [15, "bn"]]]],
                            [52, "bp", ["d", [15, "bn"]]],
                            [22, [12, [15, "bp"],
                                    [45]
                                ],
                                [46, [36, ["d", ["v", [15, "bk"]]]]]
                            ],
                            [22, [21, [15, "bp"],
                                    [15, "bn"]
                                ],
                                [46, [2, [15, "bo"], "push", [7, [15, "bp"]]],
                                    [22, [21, [15, "bn"],
                                            [2, [15, "bn"], "toLowerCase", [7]]
                                        ],
                                        [46, [2, [15, "bo"], "push", [7, ["d", [2, [15, "bn"], "toLowerCase", [7]]]]]],
                                        [46, [22, [21, [15, "bn"],
                                                [2, [15, "bn"], "toUpperCase", [7]]
                                            ],
                                            [46, [2, [15, "bo"], "push", [7, ["d", [2, [15, "bn"], "toUpperCase", [7]]]]]]
                                        ]]
                                    ]
                                ]
                            ],
                            [22, [18, [17, [15, "bo"], "length"], 1],
                                [46, [2, [15, "bm"], "push", [7, [0, [0, "(?:", [2, [15, "bo"], "join", [7, "|"]]], ")"]]]],
                                [46, [2, [15, "bm"], "push", [7, [16, [15, "bo"], 0]]]]
                            ]
                        ]]
                    ],
                    [36, [2, [15, "bm"], "join", [7, ""]]]
                ],
                [50, "x", [46, "bk", "bl", "bm"],
                    [52, "bn", ["z", [15, "bk"],
                        [15, "bm"]
                    ]],
                    [22, [28, [15, "bn"]],
                        [46, [36, [15, "bk"]]]
                    ],
                    [22, [28, [17, [15, "bn"], "search"]],
                        [46, [36, [15, "bk"]]]
                    ],
                    [41, "bo"],
                    [3, "bo", [17, [15, "bn"], "search"]],
                    [65, "bp", [15, "bl"],
                        [46, [53, [52, "bq", [7, ["v", [15, "bp"]],
                                ["w", [15, "bp"]]
                            ]],
                            [65, "br", [15, "bq"],
                                [46, [53, [52, "bs", [30, [16, [15, "t"],
                                            [15, "br"]
                                        ],
                                        [43, [15, "t"],
                                            [15, "br"],
                                            ["b", [0, [0, "([?&]", [15, "br"]], "=)([^&]*)"], "gi"]
                                        ]
                                    ]],
                                    [3, "bo", [2, [15, "bo"], "replace", [7, [15, "bs"],
                                        [0, "$1", [15, "r"]]
                                    ]]]
                                ]]
                            ]
                        ]]
                    ],
                    [22, [20, [15, "bo"],
                            [17, [15, "bn"], "search"]
                        ],
                        [46, [36, [15, "bk"]]]
                    ],
                    [22, [20, [16, [15, "bo"], 0], "&"],
                        [46, [3, "bo", [2, [15, "bo"], "substring", [7, 1]]]]
                    ],
                    [22, [21, [16, [15, "bo"], 0], "?"],
                        [46, [3, "bo", [0, "?", [15, "bo"]]]]
                    ],
                    [22, [20, [15, "bo"], "?"],
                        [46, [3, "bo", ""]]
                    ],
                    [43, [15, "bn"], "search", [15, "bo"]],
                    [36, ["ba", [15, "bn"],
                        [15, "bm"]
                    ]]
                ],
                [50, "z", [46, "bk", "bl"],
                    [22, [20, [15, "bl"],
                            [17, [15, "s"], "PATH"]
                        ],
                        [46, [3, "bk", [0, [15, "y"],
                            [15, "bk"]
                        ]]]
                    ],
                    [36, ["g", [15, "bk"]]]
                ],
                [50, "ba", [46, "bk", "bl"],
                    [41, "bm"],
                    [3, "bm", ""],
                    [22, [20, [15, "bl"],
                            [17, [15, "s"], "URL"]
                        ],
                        [46, [53, [41, "bn"],
                            [3, "bn", ""],
                            [22, [30, [17, [15, "bk"], "username"],
                                    [17, [15, "bk"], "password"]
                                ],
                                [46, [3, "bn", [0, [15, "bn"],
                                    [0, [0, [0, [17, [15, "bk"], "username"],
                                            [39, [17, [15, "bk"], "password"], ":", ""]
                                        ],
                                        [17, [15, "bk"], "password"]
                                    ], "@"]
                                ]]]
                            ],
                            [3, "bm", [0, [0, [0, [17, [15, "bk"], "protocol"], "//"],
                                    [15, "bn"]
                                ],
                                [17, [15, "bk"], "host"]
                            ]]
                        ]]
                    ],
                    [36, [0, [0, [0, [15, "bm"],
                                [17, [15, "bk"], "pathname"]
                            ],
                            [17, [15, "bk"], "search"]
                        ],
                        [17, [15, "bk"], "hash"]
                    ]]
                ],
                [50, "bb", [46, "bk", "bl"],
                    [41, "bm"],
                    [3, "bm", [2, [15, "bk"], "replace", [7, [15, "n"],
                        [15, "r"]
                    ]]],
                    [22, [30, [20, [15, "bl"],
                                [17, [15, "s"], "URL"]
                            ],
                            [20, [15, "bl"],
                                [17, [15, "s"], "PATH"]
                            ]
                        ],
                        [46, [53, [52, "bn", ["z", [15, "bm"],
                                [15, "bl"]
                            ]],
                            [22, [20, [15, "bn"],
                                    [44]
                                ],
                                [46, [36, [15, "bm"]]]
                            ],
                            [52, "bo", [17, [15, "bn"], "search"]],
                            [52, "bp", [2, [15, "bo"], "replace", [7, [15, "o"],
                                [15, "r"]
                            ]]],
                            [22, [20, [15, "bo"],
                                    [15, "bp"]
                                ],
                                [46, [36, [15, "bm"]]]
                            ],
                            [43, [15, "bn"], "search", [15, "bp"]],
                            [3, "bm", ["ba", [15, "bn"],
                                [15, "bl"]
                            ]]
                        ]]
                    ],
                    [36, [15, "bm"]]
                ],
                [50, "bc", [46, "bk"],
                    [22, [20, [15, "bk"],
                            [15, "q"]
                        ],
                        [46, [36, [17, [15, "s"], "PATH"]]],
                        [46, [22, [21, [2, [15, "p"], "indexOf", [7, [15, "bk"]]],
                                [27, 1]
                            ],
                            [46, [36, [17, [15, "s"], "URL"]]],
                            [46, [36, [17, [15, "s"], "TEXT"]]]
                        ]]
                    ]
                ],
                [50, "bd", [46, "bk", "bl"],
                    [41, "bm"],
                    [3, "bm", false],
                    [52, "bn", ["f", [15, "bk"]]],
                    [38, [15, "bn"],
                        [46, "string", "array", "object"],
                        [46, [5, [46, [52, "bo", ["bb", [15, "bk"],
                                    [15, "bl"]
                                ]],
                                [22, [21, [15, "bk"],
                                        [15, "bo"]
                                    ],
                                    [46, [36, [15, "bo"]]]
                                ],
                                [4]
                            ]],
                            [5, [46, [53, [41, "bp"],
                                    [3, "bp", 0],
                                    [63, [7, "bp"],
                                        [23, [15, "bp"],
                                            [17, [15, "bk"], "length"]
                                        ],
                                        [33, [15, "bp"],
                                            [3, "bp", [0, [15, "bp"], 1]]
                                        ],
                                        [46, [53, [52, "bq", ["bd", [16, [15, "bk"],
                                                    [15, "bp"]
                                                ],
                                                [17, [15, "s"], "TEXT"]
                                            ]],
                                            [22, [21, [15, "bq"],
                                                    [44]
                                                ],
                                                [46, [43, [15, "bk"],
                                                        [15, "bp"],
                                                        [15, "bq"]
                                                    ],
                                                    [3, "bm", true]
                                                ]
                                            ]
                                        ]]
                                    ]
                                ],
                                [4]
                            ]],
                            [5, [46, [54, "bp", [15, "bk"],
                                    [46, [53, [52, "bq", ["bd", [16, [15, "bk"],
                                                [15, "bp"]
                                            ],
                                            [17, [15, "s"], "TEXT"]
                                        ]],
                                        [22, [21, [15, "bq"],
                                                [44]
                                            ],
                                            [46, [43, [15, "bk"],
                                                    [15, "bp"],
                                                    [15, "bq"]
                                                ],
                                                [3, "bm", true]
                                            ]
                                        ]
                                    ]]
                                ],
                                [4]
                            ]]
                        ]
                    ],
                    [36, [39, [15, "bm"],
                        [15, "bk"],
                        [44]
                    ]]
                ],
                [50, "bj", [46, "bk", "bl"],
                    [52, "bm", [30, [2, [15, "bk"], "getMetadata", [7, [15, "bi"]]],
                        [7]
                    ]],
                    [22, [20, [2, [15, "bm"], "indexOf", [7, [15, "bl"]]],
                            [27, 1]
                        ],
                        [46, [2, [15, "bm"], "push", [7, [15, "bl"]]]]
                    ],
                    [2, [15, "bk"], "setMetadata", [7, [15, "bi"],
                        [15, "bm"]
                    ]]
                ],
                [52, "b", ["require", "internal.createRegex"]],
                [52, "c", ["require", "decodeUriComponent"]],
                [52, "d", ["require", "encodeUriComponent"]],
                [52, "e", [13, [41, "$0"],
                    [3, "$0", ["require", "internal.getFlags"]],
                    ["$0"]
                ]],
                [52, "f", ["require", "getType"]],
                [52, "g", ["require", "parseUrl"]],
                [52, "h", ["require", "internal.registerCcdCallback"]],
                [52, "i", [17, [15, "a"], "instanceDestinationId"]],
                [52, "j", [17, [15, "a"], "redactEmail"]],
                [52, "k", [17, [15, "a"], "redactQueryParams"]],
                [52, "l", [39, [15, "k"],
                    [2, [15, "k"], "split", [7, ","]],
                    [7]
                ]],
                [52, "m", "is_sgtm_prehit"],
                [22, [1, [28, [17, [15, "l"], "length"]],
                        [28, [15, "j"]]
                    ],
                    [46, [2, [15, "a"], "gtmOnSuccess", [7]],
                        [36]
                    ]
                ],
                [52, "n", ["b", "[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,}", "gi"]],
                [52, "o", ["b", [0, "([A-Z0-9._-]|%25|%2B)+%40[A-Z0-9.-]", "+\\.[A-Z]{2,}"], "gi"]],
                [52, "p", [7, "page_location", "page_referrer", "page_path", "link_url", "video_url", "form_destination"]],
                [52, "q", "page_path"],
                [52, "r", "(redacted)"],
                [52, "s", [8, "TEXT", 0, "URL", 1, "PATH", 2]],
                [52, "t", [8]],
                [52, "u", ["b", "([\\\\^$.|?*+(){}]|\\[|\\[)", "g"]],
                [52, "y", "http://."],
                [52, "be", 15],
                [52, "bf", 16],
                [52, "bg", 23],
                [52, "bh", 24],
                [52, "bi", "event_usage"],
                ["h", [15, "i"],
                    [51, "", [7, "bk"],
                        [22, [15, "j"],
                            [46, [53, [52, "bl", [2, [15, "bk"], "getHitKeys", [7]]],
                                [65, "bm", [15, "bl"],
                                    [46, [53, [22, [20, [15, "bm"], "_sst_parameters"],
                                            [46, [6]]
                                        ],
                                        [52, "bn", [2, [15, "bk"], "getHitData", [7, [15, "bm"]]]],
                                        [22, [28, [15, "bn"]],
                                            [46, [6]]
                                        ],
                                        [52, "bo", ["bc", [15, "bm"]]],
                                        [52, "bp", ["bd", [15, "bn"],
                                            [15, "bo"]
                                        ]],
                                        [22, [21, [15, "bp"],
                                                [44]
                                            ],
                                            [46, [2, [15, "bk"], "setHitData", [7, [15, "bm"],
                                                    [15, "bp"]
                                                ]],
                                                ["bj", [15, "bk"],
                                                    [39, [2, [15, "bk"], "getMetadata", [7, [15, "m"]]],
                                                        [15, "bg"],
                                                        [15, "be"]
                                                    ]
                                                ]
                                            ]
                                        ]
                                    ]]
                                ]
                            ]]
                        ],
                        [22, [17, [15, "l"], "length"],
                            [46, [65, "bl", [15, "p"],
                                [46, [53, [52, "bm", [2, [15, "bk"], "getHitData", [7, [15, "bl"]]]],
                                    [22, [28, [15, "bm"]],
                                        [46, [6]]
                                    ],
                                    [52, "bn", [39, [20, [15, "bl"],
                                            [15, "q"]
                                        ],
                                        [17, [15, "s"], "PATH"],
                                        [17, [15, "s"], "URL"]
                                    ]],
                                    [52, "bo", ["x", [15, "bm"],
                                        [15, "l"],
                                        [15, "bn"]
                                    ]],
                                    [22, [21, [15, "bo"],
                                            [15, "bm"]
                                        ],
                                        [46, [2, [15, "bk"], "setHitData", [7, [15, "bl"],
                                                [15, "bo"]
                                            ]],
                                            ["bj", [15, "bk"],
                                                [39, [2, [15, "bk"], "getMetadata", [7, [15, "m"]]],
                                                    [15, "bh"],
                                                    [15, "bf"]
                                                ]
                                            ]
                                        ]
                                    ]
                                ]]
                            ]]
                        ]
                    ]
                ],
                [2, [15, "a"], "gtmOnSuccess", [7]]
            ],
            [50, "__ccd_conversion_marking", [46, "a"],
                [22, [30, [28, [17, [15, "a"], "conversionRules"]],
                        [20, [17, [17, [15, "a"], "conversionRules"], "length"], 0]
                    ],
                    [46, [2, [15, "a"], "gtmOnSuccess", [7]],
                        [36]
                    ]
                ],
                [52, "b", ["require", "internal.copyPreHit"]],
                [52, "c", ["require", "internal.evaluateBooleanExpression"]],
                [52, "d", ["require", "internal.registerCcdCallback"]],
                [52, "e", "is_conversion"],
                [52, "f", "is_first_visit"],
                [52, "g", "is_first_visit_conversion"],
                [52, "h", "is_session_start"],
                [52, "i", "is_session_start_conversion"],
                [52, "j", "first_visit"],
                [52, "k", "session_start"],
                [41, "l"],
                [41, "m"],
                ["d", [17, [15, "a"], "instanceDestinationId"],
                    [51, "", [7, "n"],
                        [52, "o", [8, "preHit", [15, "n"]]],
                        [65, "p", [17, [15, "a"], "conversionRules"],
                            [46, [22, ["c", [17, [15, "p"], "matchingRules"],
                                    [15, "o"]
                                ],
                                [46, [2, [15, "n"], "setMetadata", [7, [15, "e"], true]],
                                    [4]
                                ]
                            ]]
                        ],
                        [22, [2, [15, "n"], "getMetadata", [7, [15, "f"]]],
                            [46, [22, [28, [15, "l"]],
                                    [46, [53, [52, "p", ["b", [15, "n"],
                                            [8, "omitHitData", true, "omitMetadata", true]
                                        ]],
                                        [2, [15, "p"], "setEventName", [7, [15, "j"]]],
                                        [3, "l", [8, "preHit", [15, "p"]]]
                                    ]]
                                ],
                                [65, "p", [17, [15, "a"], "conversionRules"],
                                    [46, [22, ["c", [17, [15, "p"], "matchingRules"],
                                            [15, "l"]
                                        ],
                                        [46, [2, [15, "n"], "setMetadata", [7, [15, "g"], true]],
                                            [4]
                                        ]
                                    ]]
                                ]
                            ]
                        ],
                        [22, [2, [15, "n"], "getMetadata", [7, [15, "h"]]],
                            [46, [22, [28, [15, "m"]],
                                    [46, [53, [52, "p", ["b", [15, "n"],
                                            [8, "omitHitData", true, "omitMetadata", true]
                                        ]],
                                        [2, [15, "p"], "setEventName", [7, [15, "k"]]],
                                        [3, "m", [8, "preHit", [15, "p"]]]
                                    ]]
                                ],
                                [65, "p", [17, [15, "a"], "conversionRules"],
                                    [46, [22, ["c", [17, [15, "p"], "matchingRules"],
                                            [15, "m"]
                                        ],
                                        [46, [2, [15, "n"], "setMetadata", [7, [15, "i"], true]],
                                            [4]
                                        ]
                                    ]]
                                ]
                            ]
                        ]
                    ]
                ],
                [2, [15, "a"], "gtmOnSuccess", [7]],
                [36]
            ],
            [50, "__ccd_ga_first", [46, "a"],
                [2, [15, "a"], "gtmOnSuccess", [7]]
            ],
            [50, "__ccd_ga_last", [46, "a"],
                [2, [15, "a"], "gtmOnSuccess", [7]]
            ],
            [50, "__ccd_ga_regscope", [46, "a"],
                [52, "b", [15, "__module_ccdGaRegionScopedSettings"]],
                [52, "c", [2, [15, "b"], "extractRedactedLocations", [7, [15, "a"]]]],
                [2, [15, "b"], "applyRegionScopedSettings", [7, [15, "a"],
                    [15, "c"]
                ]],
                [2, [15, "a"], "gtmOnSuccess", [7]]
            ],
            [50, "__e", [46, "a"],
                [36, [13, [41, "$0"],
                    [3, "$0", ["require", "internal.getEventData"]],
                    ["$0", "event"]
                ]]
            ],
            [50, "__ogt_1p_data_v2", [46, "a"],
                [50, "k", [46, "m", "n", "o"],
                    [22, [20, [16, [15, "n"], "type"],
                            [15, "o"]
                        ],
                        [46, [22, [28, [15, "m"]],
                                [46, [3, "m", [8]]]
                            ],
                            [22, [28, [16, [15, "m"],
                                    [15, "o"]
                                ]],
                                [46, [43, [15, "m"],
                                    [15, "o"],
                                    [16, [15, "n"], "userData"]
                                ]]
                            ]
                        ]
                    ],
                    [36, [15, "m"]]
                ],
                [50, "l", [46, "m", "n", "o"],
                    [22, [28, [16, [15, "a"],
                            [15, "o"]
                        ]],
                        [46, [36]]
                    ],
                    [43, [15, "m"],
                        [15, "n"],
                        [8, "value", [16, [15, "a"],
                            [15, "o"]
                        ]]
                    ]
                ],
                [22, [28, [17, [15, "a"], "isEnabled"]],
                    [46, [2, [15, "a"], "gtmOnSuccess", [7]],
                        [36]
                    ]
                ],
                [52, "b", [13, [41, "$0"],
                    [3, "$0", ["require", "internal.getFlags"]],
                    ["$0"]
                ]],
                [52, "c", ["require", "internal.getDestinationIds"]],
                [52, "d", ["require", "internal.getProductSettingsParameter"]],
                [52, "e", ["require", "internal.detectUserProvidedData"]],
                [52, "f", ["require", "queryPermission"]],
                [52, "g", ["require", "internal.setRemoteConfigParameter"]],
                [52, "h", ["require", "internal.registerCcdCallback"]],
                [52, "i", [30, ["c"],
                    [7]
                ]],
                [52, "j", [8, "enable_code", true]],
                [22, [17, [15, "a"], "isAutoEnabled"],
                    [46, [53, [52, "m", [7]],
                        [22, [1, [17, [15, "a"], "autoCollectExclusionSelectors"],
                                [17, [17, [15, "a"], "autoCollectExclusionSelectors"], "length"]
                            ],
                            [46, [53, [41, "p"],
                                [3, "p", 0],
                                [63, [7, "p"],
                                    [23, [15, "p"],
                                        [17, [17, [15, "a"], "autoCollectExclusionSelectors"], "length"]
                                    ],
                                    [33, [15, "p"],
                                        [3, "p", [0, [15, "p"], 1]]
                                    ],
                                    [46, [53, [52, "q", [17, [16, [17, [15, "a"], "autoCollectExclusionSelectors"],
                                            [15, "p"]
                                        ], "exclusionSelector"]],
                                        [22, [15, "q"],
                                            [46, [2, [15, "m"], "push", [7, [15, "q"]]]]
                                        ]
                                    ]]
                                ]
                            ]]
                        ],
                        [52, "n", [30, [16, [15, "b"], "enableAutoPhoneAndAddressDetection"],
                            [17, [15, "a"], "isAutoCollectPiiEnabledFlag"]
                        ]],
                        [52, "o", [39, [17, [15, "a"], "isAutoCollectPiiEnabledFlag"],
                            [17, [15, "a"], "autoEmailEnabled"], true
                        ]],
                        [43, [15, "j"], "auto_detect", [8, "email", [15, "o"], "phone", [1, [15, "n"],
                            [17, [15, "a"], "autoPhoneEnabled"]
                        ], "address", [1, [15, "n"],
                            [17, [15, "a"], "autoAddressEnabled"]
                        ], "exclude_element_selectors", [15, "m"]]]
                    ]]
                ],
                [22, [17, [15, "a"], "isManualEnabled"],
                    [46, [53, [52, "m", [8]],
                        [22, [17, [15, "a"], "manualEmailEnabled"],
                            [46, ["l", [15, "m"], "email", "emailValue"]]
                        ],
                        [22, [17, [15, "a"], "manualPhoneEnabled"],
                            [46, ["l", [15, "m"], "phone", "phoneValue"]]
                        ],
                        [22, [17, [15, "a"], "manualAddressEnabled"],
                            [46, [53, [52, "n", [8]],
                                ["l", [15, "n"], "first_name", "firstNameValue"],
                                ["l", [15, "n"], "last_name", "lastNameValue"],
                                ["l", [15, "n"], "street", "streetValue"],
                                ["l", [15, "n"], "city", "cityValue"],
                                ["l", [15, "n"], "region", "regionValue"],
                                ["l", [15, "n"], "country", "countryValue"],
                                ["l", [15, "n"], "postal_code", "postalCodeValue"],
                                [43, [15, "m"], "name_and_address", [7, [15, "n"]]]
                            ]]
                        ],
                        [43, [15, "j"], "selectors", [15, "m"]]
                    ]]
                ],
                [65, "m", [15, "i"],
                    [46, [53, ["g", [15, "m"], "user_data_settings", [15, "j"]],
                        [52, "n", [16, [15, "j"], "auto_detect"]],
                        [22, [28, [15, "n"]],
                            [46, [6]]
                        ],
                        [52, "o", [51, "", [7, "p"],
                            [52, "q", [2, [15, "p"], "getMetadata", [7, "user_data_from_automatic"]]],
                            [22, [15, "q"],
                                [46, [36, [15, "q"]]]
                            ],
                            [41, "r"],
                            [22, ["f", "detect_user_provided_data", "auto"],
                                [46, [3, "r", ["e", [8, "excludeElementSelectors", [16, [15, "n"], "exclude_element_selectors"], "fieldFilters", [8, "email", [16, [15, "n"], "email"], "phone", [16, [15, "n"], "phone"], "address", [16, [15, "n"], "address"]]]]]]
                            ],
                            [52, "s", [1, [15, "r"],
                                [16, [15, "r"], "elements"]
                            ]],
                            [52, "t", [8]],
                            [22, [1, [15, "s"],
                                    [18, [17, [15, "s"], "length"], 0]
                                ],
                                [46, [53, [41, "u"],
                                    [53, [41, "v"],
                                        [3, "v", 0],
                                        [63, [7, "v"],
                                            [23, [15, "v"],
                                                [17, [15, "s"], "length"]
                                            ],
                                            [33, [15, "v"],
                                                [3, "v", [0, [15, "v"], 1]]
                                            ],
                                            [46, [53, [52, "w", [16, [15, "s"],
                                                    [15, "v"]
                                                ]],
                                                ["k", [15, "t"],
                                                    [15, "w"], "email"
                                                ],
                                                [22, [16, [15, "b"], "enableAutoPiiOnPhoneAndAddress"],
                                                    [46, ["k", [15, "t"],
                                                            [15, "w"], "phone_number"
                                                        ],
                                                        [3, "u", ["k", [15, "u"],
                                                            [15, "w"], "first_name"
                                                        ]],
                                                        [3, "u", ["k", [15, "u"],
                                                            [15, "w"], "last_name"
                                                        ]],
                                                        [3, "u", ["k", [15, "u"],
                                                            [15, "w"], "country"
                                                        ]],
                                                        [3, "u", ["k", [15, "u"],
                                                            [15, "w"], "postal_code"
                                                        ]]
                                                    ]
                                                ]
                                            ]]
                                        ]
                                    ],
                                    [22, [1, [15, "u"],
                                            [28, [16, [15, "t"], "address"]]
                                        ],
                                        [46, [43, [15, "t"], "address", [15, "u"]]]
                                    ]
                                ]]
                            ],
                            [2, [15, "p"], "setMetadata", [7, "user_data_from_automatic", [15, "t"]]],
                            [36, [15, "t"]]
                        ]],
                        ["h", [15, "m"],
                            [51, "", [7, "p"],
                                [2, [15, "p"], "setMetadata", [7, "user_data_from_automatic_getter", [15, "o"]]]
                            ]
                        ]
                    ]]
                ],
                [2, [15, "a"], "gtmOnSuccess", [7]]
            ],
            [50, "__set_product_settings", [46, "a"],
                [2, [15, "a"], "gtmOnSuccess", [7]]
            ],
            [52, "__module_activities", [13, [41, "$0"],
                [3, "$0", [51, "", [7],
                    [50, "a", [46],
                        [50, "b", [46, "c", "d"],
                            [36, [39, [15, "d"],
                                ["d", [15, "c"]],
                                [15, "c"]
                            ]]
                        ],
                        [36, [8, "withRequestContext", [15, "b"]]]
                    ],
                    [36, ["a"]]
                ]],
                ["$0"]
            ]],
            [52, "__module_ccdGaRegionScopedSettings", [13, [41, "$0"],
                [3, "$0", [51, "", [7],
                    [50, "a", [46],
                        [50, "n", [46, "q", "r", "s"],
                            [50, "x", [46, "z"],
                                [52, "ba", [16, [15, "m"],
                                    [15, "z"]
                                ]],
                                [22, [28, [15, "ba"]],
                                    [46, [36]]
                                ],
                                [53, [41, "bb"],
                                    [3, "bb", 0],
                                    [63, [7, "bb"],
                                        [23, [15, "bb"],
                                            [17, [15, "ba"], "length"]
                                        ],
                                        [33, [15, "bb"],
                                            [3, "bb", [0, [15, "bb"], 1]]
                                        ],
                                        [46, [53, [52, "bc", [16, [15, "ba"],
                                                [15, "bb"]
                                            ]],
                                            ["u", [15, "t"],
                                                [17, [15, "bc"], "name"],
                                                [17, [15, "bc"], "value"]
                                            ]
                                        ]]
                                    ]
                                ]
                            ],
                            [50, "y", [46, "z"],
                                [22, [30, [28, [15, "v"]],
                                        [21, [17, [15, "v"], "length"], 2]
                                    ],
                                    [46, [36, false]]
                                ],
                                [41, "ba"],
                                [3, "ba", [16, [15, "z"],
                                    [15, "w"]
                                ]],
                                [22, [20, [15, "ba"],
                                        [44]
                                    ],
                                    [46, [3, "ba", [16, [15, "z"],
                                        [15, "v"]
                                    ]]]
                                ],
                                [36, [28, [28, [15, "ba"]]]]
                            ],
                            [22, [28, [15, "r"]],
                                [46, [36]]
                            ],
                            [52, "t", [30, [17, [15, "q"], "instanceDestinationId"],
                                [17, ["d"], "containerId"]
                            ]],
                            [52, "u", ["i", [15, "g"],
                                [15, "s"]
                            ]],
                            [52, "v", [13, [41, "$0"],
                                [3, "$0", ["i", [15, "e"],
                                    [15, "s"]
                                ]],
                                ["$0"]
                            ]],
                            [52, "w", [13, [41, "$0"],
                                [3, "$0", ["i", [15, "f"],
                                    [15, "s"]
                                ]],
                                ["$0"]
                            ]],
                            [53, [41, "z"],
                                [3, "z", 0],
                                [63, [7, "z"],
                                    [23, [15, "z"],
                                        [17, [15, "r"], "length"]
                                    ],
                                    [33, [15, "z"],
                                        [3, "z", [0, [15, "z"], 1]]
                                    ],
                                    [46, [53, [52, "ba", [16, [15, "r"],
                                            [15, "z"]
                                        ]],
                                        [22, [30, [17, [15, "ba"], "disallowAllRegions"],
                                                ["y", [17, [15, "ba"], "disallowedRegions"]]
                                            ],
                                            [46, ["x", [17, [15, "ba"], "redactFieldGroup"]]]
                                        ]
                                    ]]
                                ]
                            ]
                        ],
                        [50, "o", [46, "q"],
                            [52, "r", [8]],
                            [22, [28, [15, "q"]],
                                [46, [36, [15, "r"]]]
                            ],
                            [52, "s", [2, [15, "q"], "split", [7, ","]]],
                            [53, [41, "t"],
                                [3, "t", 0],
                                [63, [7, "t"],
                                    [23, [15, "t"],
                                        [17, [15, "s"], "length"]
                                    ],
                                    [33, [15, "t"],
                                        [3, "t", [0, [15, "t"], 1]]
                                    ],
                                    [46, [53, [52, "u", [2, [16, [15, "s"],
                                            [15, "t"]
                                        ], "trim", [7]]],
                                        [22, [28, [15, "u"]],
                                            [46, [6]]
                                        ],
                                        [52, "v", [2, [15, "u"], "split", [7, "-"]]],
                                        [52, "w", [16, [15, "v"], 0]],
                                        [52, "x", [39, [20, [17, [15, "v"], "length"], 2],
                                            [15, "u"],
                                            [44]
                                        ]],
                                        [22, [30, [28, [15, "w"]],
                                                [21, [17, [15, "w"], "length"], 2]
                                            ],
                                            [46, [6]]
                                        ],
                                        [22, [1, [21, [15, "x"],
                                                    [44]
                                                ],
                                                [30, [23, [17, [15, "x"], "length"], 4],
                                                    [18, [17, [15, "x"], "length"], 6]
                                                ]
                                            ],
                                            [46, [6]]
                                        ],
                                        [43, [15, "r"],
                                            [15, "u"], true
                                        ]
                                    ]]
                                ]
                            ],
                            [36, [15, "r"]]
                        ],
                        [50, "p", [46, "q"],
                            [22, [28, [17, [15, "q"], "settingsTable"]],
                                [46, [36, [7]]]
                            ],
                            [52, "r", [8]],
                            [53, [41, "s"],
                                [3, "s", 0],
                                [63, [7, "s"],
                                    [23, [15, "s"],
                                        [17, [17, [15, "q"], "settingsTable"], "length"]
                                    ],
                                    [33, [15, "s"],
                                        [3, "s", [0, [15, "s"], 1]]
                                    ],
                                    [46, [53, [52, "t", [16, [17, [15, "q"], "settingsTable"],
                                            [15, "s"]
                                        ]],
                                        [52, "u", [17, [15, "t"], "redactFieldGroup"]],
                                        [22, [28, [16, [15, "m"],
                                                [15, "u"]
                                            ]],
                                            [46, [6]]
                                        ],
                                        [43, [15, "r"],
                                            [15, "u"],
                                            [8, "redactFieldGroup", [15, "u"], "disallowAllRegions", false, "disallowedRegions", [8]]
                                        ],
                                        [52, "v", [16, [15, "r"],
                                            [15, "u"]
                                        ]],
                                        [22, [17, [15, "t"], "disallowAllRegions"],
                                            [46, [43, [15, "v"], "disallowAllRegions", true],
                                                [6]
                                            ]
                                        ],
                                        [43, [15, "v"], "disallowedRegions", ["o", [17, [15, "t"], "disallowedRegions"]]]
                                    ]]
                                ]
                            ],
                            [36, [2, [15, "b"], "values", [7, [15, "r"]]]]
                        ],
                        [52, "b", ["require", "Object"]],
                        [52, "c", [13, [41, "$0"],
                            [3, "$0", ["require", "internal.getFlags"]],
                            ["$0"]
                        ]],
                        [52, "d", ["require", "getContainerVersion"]],
                        [52, "e", ["require", "internal.getCountryCode"]],
                        [52, "f", ["require", "internal.getRegionCode"]],
                        [52, "g", ["require", "internal.setRemoteConfigParameter"]],
                        [52, "h", [15, "__module_activities"]],
                        [52, "i", [17, [15, "h"], "withRequestContext"]],
                        [41, "j"],
                        [41, "k"],
                        [41, "l"],
                        [52, "m", [8, "GOOGLE_SIGNALS", [7, [8, "name", "allow_google_signals", "value", false]], "DEVICE_AND_GEO", [7, [8, "name", "geo_granularity", "value", true],
                            [8, "name", "redact_device_info", "value", true]
                        ]]],
                        [36, [8, "applyRegionScopedSettings", [15, "n"], "extractRedactedLocations", [15, "p"]]]
                    ],
                    [36, ["a"]]
                ]],
                ["$0"]
            ]]

        ],
        "entities": {
            "__c": {
                "2": true,
                "4": true
            },
            "__ccd_auto_redact": {
                "2": true,
                "4": true
            },
            "__ccd_conversion_marking": {
                "2": true,
                "4": true
            },
            "__ccd_ga_first": {
                "2": true,
                "4": true
            },
            "__ccd_ga_last": {
                "2": true,
                "4": true
            },
            "__ccd_ga_regscope": {
                "2": true,
                "4": true
            },
            "__e": {
                "2": true,
                "4": true
            },
            "__ogt_1p_data_v2": {
                "2": true
            },
            "__set_product_settings": {
                "2": true,
                "4": true
            }


        },
        "blob": {
            "1": "1"
        },
        "permissions": {
            "__c": {},
            "__ccd_auto_redact": {},
            "__ccd_conversion_marking": {},
            "__ccd_ga_first": {},
            "__ccd_ga_last": {},
            "__ccd_ga_regscope": {
                "read_container_data": {}
            },
            "__e": {
                "read_event_data": {
                    "eventDataAccess": "specific",
                    "keyPatterns": ["event"]
                }
            },
            "__ogt_1p_data_v2": {
                "detect_user_provided_data": {
                    "limitDataSources": true,
                    "allowAutoDataSources": true,
                    "allowManualDataSources": false,
                    "allowCodeDataSources": false
                }
            },
            "__set_product_settings": {}


        }



        ,
        "security_groups": {
            "google": [
                "__c",
                "__ccd_auto_redact",
                "__ccd_conversion_marking",
                "__ccd_ga_first",
                "__ccd_ga_last",
                "__ccd_ga_regscope",
                "__e",
                "__ogt_1p_data_v2",
                "__set_product_settings"

            ]


        }



    };




    var h, ba = function(a) {
            var b = 0;
            return function() {
                return b < a.length ? {
                    done: !1,
                    value: a[b++]
                } : {
                    done: !0
                }
            }
        },
        ca = typeof Object.defineProperties == "function" ? Object.defineProperty : function(a, b, c) {
            if (a == Array.prototype || a == Object.prototype) return a;
            a[b] = c.value;
            return a
        },
        fa = function(a) {
            console.log("ordem: a");
            console.log("a", a);
            for (var b = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global], c = 0; c < b.length; ++c) {
                var d = b[c];
                if (d && d.Math == Math) return d
            }
            throw Error("Cannot find global object");
        },
        ha = fa(this),
        ja = function(a, b) {
            if (b) a: {
                for (var c = ha, d = a.split("."), e = 0; e < d.length - 1; e++) {
                    var f = d[e];
                    if (!(f in c)) break a;
                    c = c[f]
                }
                var g = d[d.length - 1],
                    k = c[g],
                    m = b(k);m != k && m != null && ca(c, g, {
                    configurable: !0,
                    writable: !0,
                    value: m
                })
            }
        };
    ja("Symbol", function(a) {
        if (a) return a;
        var b = function(f, g) {
            this.j = f;
            ca(this, "description", {
                configurable: !0,
                writable: !0,
                value: g
            })
        };
        b.prototype.toString = function() {
            return this.j
        };
        var c = "jscomp_symbol_" + (Math.random() * 1E9 >>> 0) + "_",
            d = 0,
            e = function(f) {
                if (this instanceof e) throw new TypeError("Symbol is not a constructor");
                return new b(c + (f || "") + "_" + d++, f)
            };
        return e
    });
    var ma = function(a) {
            return ka(a, a)
        },
        ka = function(a, b) {
            a.raw = b;
            Object.freeze && (Object.freeze(a), Object.freeze(b));
            return a
        },
        l = function(a) {
            var b = typeof Symbol != "undefined" && Symbol.iterator && a[Symbol.iterator];
            if (b) return b.call(a);
            if (typeof a.length == "number") return {
                next: ba(a)
            };
            throw Error(String(a) + " is not an iterable or ArrayLike");
        },
        na = function(a) {
            for (var b, c = []; !(b = a.next()).done;) c.push(b.value);
            return c
        },
        oa = function(a) {
            return a instanceof Array ? a : na(l(a))
        },
        pa = typeof Object.assign == "function" ? Object.assign :
        function(a, b) {
            for (var c = 1; c < arguments.length; c++) {
                var d = arguments[c];
                if (d)
                    for (var e in d) Object.prototype.hasOwnProperty.call(d, e) && (a[e] = d[e])
            }
            return a
        };
    ja("Object.assign", function(a) {
        return a || pa
    });
    var qa = typeof Object.create == "function" ? Object.create : function(a) {
            var b = function() {};
            b.prototype = a;
            return new b
        },
        ra;
    if (typeof Object.setPrototypeOf == "function") ra = Object.setPrototypeOf;
    else {
        var sa;
        a: {
            var ta = {
                    a: !0
                },
                va = {};
            try {
                va.__proto__ = ta;
                sa = va.a;
                break a
            } catch (a) {}
            sa = !1
        }
        ra = sa ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
            return a
        } : null
    }
    var wa = ra,
        xa = function(a, b) {
            a.prototype = qa(b.prototype);
            a.prototype.constructor = a;
            if (wa) wa(a, b);
            else
                for (var c in b)
                    if (c != "prototype")
                        if (Object.defineProperties) {
                            var d = Object.getOwnPropertyDescriptor(b, c);
                            d && Object.defineProperty(a, c, d)
                        } else a[c] = b[c];
            a.oo = b.prototype
        },
        ya = function() {
            for (var a = Number(this), b = [], c = a; c < arguments.length; c++) b[c - a] = arguments[c];
            return b
        };
    /*

     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */
    var za = this || self;
    var Aa = function(a, b) {
        this.type = a;
        this.data = b
    };
    var Ba = function() {
        this.map = {};
        this.j = {}
    };
    h = Ba.prototype;
    h.get = function(a) {
        return this.map["dust." + a]
    };
    h.set = function(a, b) {
        var c = "dust." + a;
        this.j.hasOwnProperty(c) || (this.map[c] = b)
    };
    h.oi = function(a, b) {
        this.set(a, b);
        this.j["dust." + a] = !0
    };
    h.has = function(a) {
        return this.map.hasOwnProperty("dust." + a)
    };
    h.remove = function(a) {
        var b = "dust." + a;
        this.j.hasOwnProperty(b) || delete this.map[b]
    };
    var Ca = function(a, b) {
        var c = [],
            d;
        for (d in a.map)
            if (a.map.hasOwnProperty(d)) {
                var e = d.substring(5);
                switch (b) {
                    case 1:
                        c.push(e);
                        break;
                    case 2:
                        c.push(a.map[d]);
                        break;
                    case 3:
                        c.push([e, a.map[d]])
                }
            } return c
    };
    Ba.prototype.ka = function() {
        return Ca(this, 1)
    };
    Ba.prototype.Vb = function() {
        return Ca(this, 2)
    };
    Ba.prototype.Cb = function() {
        return Ca(this, 3)
    };
    var Ea = function() {};
    Ea.prototype.reset = function() {};
    var Fa = function(a, b) {
        this.K = a;
        this.parent = b;
        this.j = this.C = void 0;
        this.sc = !1;
        this.H = function(c, d, e) {
            return c.apply(d, e)
        };
        this.values = new Ba
    };
    Fa.prototype.add = function(a, b) {
        Ga(this, a, b, !1)
    };
    var Ga = function(a, b, c, d) {
        a.sc || (d ? a.values.oi(b, c) : a.values.set(b, c))
    };
    Fa.prototype.set = function(a, b) {
        this.sc || (!this.values.has(a) && this.parent && this.parent.has(a) ? this.parent.set(a, b) : this.values.set(a, b))
    };
    Fa.prototype.get = function(a) {
        return this.values.has(a) ? this.values.get(a) : this.parent ? this.parent.get(a) : void 0
    };
    Fa.prototype.has = function(a) {
        return !!this.values.has(a) || !(!this.parent || !this.parent.has(a))
    };
    var Ha = function(a) {
        var b = new Fa(a.K, a);
        a.C && (b.C = a.C);
        b.H = a.H;
        b.j = a.j;
        return b
    };
    Fa.prototype.Fd = function() {
        return this.K
    };
    Fa.prototype.Ia = function() {
        this.sc = !0
    };

    function Ia(a, b) {
        for (var c, d = l(b), e = d.next(); !e.done && !(c = Ja(a, e.value), c instanceof Aa); e = d.next());
        return c
    }

    function Ja(a, b) {
        try {
            var c = l(b),
                d = c.next().value,
                e = na(c),
                f = a.get(String(d));
            if (!f || typeof f.invoke !== "function") throw Error("Attempting to execute non-function " + b[0] + ".");
            return f.invoke.apply(f, [a].concat(oa(e)))
        } catch (k) {
            var g = a.C;
            g && g(k, b.context ? {
                id: b[0],
                line: b.context.line
            } : null);
            throw k;
        }
    };
    var Ka = function() {
        this.C = new Ea;
        this.j = new Fa(this.C)
    };
    h = Ka.prototype;
    h.Fd = function() {
        return this.C
    };
    h.execute = function(a) {
        return this.ni([a].concat(oa(ya.apply(1, arguments))))
    };
    h.ni = function() {
        for (var a, b = l(ya.apply(0, arguments)), c = b.next(); !c.done; c = b.next()) a = Ja(this.j, c.value);
        return a
    };
    h.ql = function(a) {
        var b = ya.apply(1, arguments),
            c = Ha(this.j);
        c.j = a;
        for (var d, e = l(b), f = e.next(); !f.done; f = e.next()) d = Ja(c, f.value);
        return d
    };
    h.Ia = function() {
        this.j.Ia()
    };
    var La = function() {
        this.la = !1;
        this.R = new Ba
    };
    h = La.prototype;
    h.get = function(a) {
        return this.R.get(a)
    };
    h.set = function(a, b) {
        this.la || this.R.set(a, b)
    };
    h.has = function(a) {
        return this.R.has(a)
    };
    h.oi = function(a, b) {
        this.la || this.R.oi(a, b)
    };
    h.remove = function(a) {
        this.la || this.R.remove(a)
    };
    h.ka = function() {
        return this.R.ka()
    };
    h.Vb = function() {
        return this.R.Vb()
    };
    h.Cb = function() {
        return this.R.Cb()
    };
    h.Ia = function() {
        this.la = !0
    };
    h.sc = function() {
        return this.la
    };

    function Na() {
        for (var a = Oa, b = {}, c = 0; c < a.length; ++c) b[a[c]] = c;
        return b
    }

    function Pa() {
        var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        a += a.toLowerCase() + "0123456789-_";
        return a + "."
    }
    var Oa, Qa;

    function Ra(a) {
        Oa = Oa || Pa();
        Qa = Qa || Na();
        for (var b = [], c = 0; c < a.length; c += 3) {
            var d = c + 1 < a.length,
                e = c + 2 < a.length,
                f = a.charCodeAt(c),
                g = d ? a.charCodeAt(c + 1) : 0,
                k = e ? a.charCodeAt(c + 2) : 0,
                m = f >> 2,
                n = (f & 3) << 4 | g >> 4,
                p = (g & 15) << 2 | k >> 6,
                q = k & 63;
            e || (q = 64, d || (p = 64));
            b.push(Oa[m], Oa[n], Oa[p], Oa[q])
        }
        return b.join("")
    }

    function Ta(a) {
        function b(m) {
            for (; d < a.length;) {
                var n = a.charAt(d++),
                    p = Qa[n];
                if (p != null) return p;
                if (!/^[\s\xa0]*$/.test(n)) throw Error("Unknown base64 encoding at char: " + n);
            }
            return m
        }
        Oa = Oa || Pa();
        Qa = Qa || Na();
        for (var c = "", d = 0;;) {
            var e = b(-1),
                f = b(0),
                g = b(64),
                k = b(64);
            if (k === 64 && e === -1) return c;
            c += String.fromCharCode(e << 2 | f >> 4);
            g !== 64 && (c += String.fromCharCode(f << 4 & 240 | g >> 2), k !== 64 && (c += String.fromCharCode(g << 6 & 192 | k)))
        }
    };
    var Ua = {};

    function Va(a, b) {
        Ua[a] = Ua[a] || [];
        Ua[a][b] = !0
    }

    function Wa(a) {
        var b = Ua[a];
        if (!b || b.length === 0) return "";
        for (var c = [], d = 0, e = 0; e < b.length; e++) e % 8 === 0 && e > 0 && (c.push(String.fromCharCode(d)), d = 0), b[e] && (d |= 1 << e % 8);
        d > 0 && c.push(String.fromCharCode(d));
        return Ra(c.join("")).replace(/\.+$/, "")
    }

    function Xa() {
        for (var a = [], b = Ua.fdr || [], c = 0; c < b.length; c++) b[c] && a.push(c);
        return a.length > 0 ? a : void 0
    };
    var Ya = [],
        Za = {};

    function $a(a) {
        return Ya[a] === void 0 ? !1 : Ya[a]
    };

    function ab() {}

    function bb(a) {
        return typeof a === "function"
    }

    function z(a) {
        return typeof a === "string"
    }

    function cb(a) {
        return typeof a === "number" && !isNaN(a)
    }

    function db(a) {
        return Array.isArray(a) ? a : [a]
    }

    function eb(a, b) {
        if (a && Array.isArray(a))
            for (var c = 0; c < a.length; c++)
                if (a[c] && b(a[c])) return a[c]
    }

    function fb(a, b) {
        if (!cb(a) || !cb(b) || a > b) a = 0, b = 2147483647;
        return Math.floor(Math.random() * (b - a + 1) + a)
    }

    function hb(a, b) {
        for (var c = new ib, d = 0; d < a.length; d++) c.set(a[d], !0);
        for (var e = 0; e < b.length; e++)
            if (c.get(b[e])) return !0;
        return !1
    }

    function jb(a, b) {
        for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(c, a[c])
    }

    function kb(a) {
        return !!a && (Object.prototype.toString.call(a) === "[object Arguments]" || Object.prototype.hasOwnProperty.call(a, "callee"))
    }

    function math_round(a) {
        //retorna ou o numero arredondado ou zero
        return Math.round(Number(a)) || 0
    }

    function mb(a) {
        return "false" === String(a).toLowerCase() ? !1 : !!a
    }

    function nb(a) {
        var b = [];
        if (Array.isArray(a))
            for (var c = 0; c < a.length; c++) b.push(String(a[c]));
        return b
    }

    function ob(a) {
        return a ? a.replace(/^\s+|\s+$/g, "") : ""
    }

    function getCurrentDate() {
        return new Date(Date.now())
    }

    function getCurrentTimestamp() {
        return getCurrentDate().getTime()
    }
    var ib = function() {
        this.prefix = "gtm.";
        this.values = {}
    };
    ib.prototype.set = function(a, b) {
        this.values[this.prefix + a] = b
    };
    ib.prototype.get = function(a) {
        return this.values[this.prefix + a]
    };
    ib.prototype.contains = function(a) {
        return this.get(a) !== void 0
    };

    function rb(a, b, c) {
        return a && a.hasOwnProperty(b) ? a[b] : c
    }

    function sb(a) {
        var b = a;
        return function() {
            if (b) {
                var c = b;
                b = void 0;
                try {
                    c()
                } catch (d) {}
            }
        }
    }

    function tb(a, b) {
        for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c])
    }

    function ub(a, b) {
        for (var c = [], d = 0; d < a.length; d++) c.push(a[d]), c.push.apply(c, b[a[d]] || []);
        return c
    }

    function vb(a, b) {
        return a.length >= b.length && a.substring(0, b.length) === b
    }

    function wb(a, b) {
        return a.length >= b.length && a.substring(a.length - b.length, a.length) === b
    }

    function xb(a, b) {
        var c = C;
        b = b || [];
        for (var d = c, e = 0; e < a.length - 1; e++) {
            if (!d.hasOwnProperty(a[e])) return;
            d = d[a[e]];
            if (b.indexOf(d) >= 0) return
        }
        return d
    }

    function yb(a, b) {
        for (var c = {}, d = c, e = a.split("."), f = 0; f < e.length - 1; f++) d = d[e[f]] = {};
        d[e[e.length - 1]] = b;
        return c
    }
    var zb = /^\w{1,9}$/;

    function Ab(a, b) {
        a = a || {};
        b = b || ",";
        var c = [];
        jb(a, function(d, e) {
            zb.test(d) && e && c.push(d)
        });
        return c.join(b)
    }

    function Bb(a, b) {
        function c() {
            e && ++d === b && (e(), e = null, c.done = !0)
        }
        var d = 0,
            e = a;
        c.done = !1;
        return c
    }

    function Cb(a) {
        if (!a) return a;
        var b = a;
        if ($a(3)) try {
            b = decodeURIComponent(a)
        } catch (d) {}
        var c = b.split(",");
        return c.length === 2 && c[0] === c[1] ? c[0] : a
    }

    function Db(a, b, c) {
        function d(n) {
            var p = n.split("=")[0];
            if (a.indexOf(p) < 0) return n;
            if (c !== void 0) return p + "=" + c
        }

        function e(n) {
            return n.split("&").map(d).filter(function(p) {
                return p !== void 0
            }).join("&")
        }
        var f = b.href.split(/[?#]/)[0],
            g = b.search,
            k = b.hash;
        g[0] === "?" && (g = g.substring(1));
        k[0] === "#" && (k = k.substring(1));
        g = e(g);
        k = e(k);
        g !== "" && (g = "?" + g);
        k !== "" && (k = "#" + k);
        var m = "" + f + g + k;
        m[m.length - 1] === "/" && (m = m.substring(0, m.length - 1));
        return m
    };
    /*

     Copyright Google LLC
     SPDX-License-Identifier: Apache-2.0
    */
    var Eb = globalThis.trustedTypes,
        Fb;

    function Gb() {
        var a = null;
        if (!Eb) return a;
        try {
            var b = function(c) {
                return c
            };
            a = Eb.createPolicy("goog#html", {
                createHTML: b,
                createScript: b,
                createScriptURL: b
            })
        } catch (c) {}
        return a
    }

    function Hb() {
        Fb === void 0 && (Fb = Gb());
        return Fb
    };
    var Ib = function(a) {
        this.j = a
    };
    Ib.prototype.toString = function() {
        return this.j + ""
    };

    function Jb(a) {
        var b = a,
            c = Hb();
        return new Ib(c ? c.createScriptURL(b) : b)
    }

    function Kb(a) {
        if (a instanceof Ib) return a.j;
        throw Error("");
    };
    var Lb = ma([""]),
        Mb = ka(["\x00"], ["\\0"]),
        Nb = ka(["\n"], ["\\n"]),
        Ob = ka(["\x00"], ["\\u0000"]);

    function Pb(a) {
        return a.toString().indexOf("`") === -1
    }
    Pb(function(a) {
        return a(Lb)
    }) || Pb(function(a) {
        return a(Mb)
    }) || Pb(function(a) {
        return a(Nb)
    }) || Pb(function(a) {
        return a(Ob)
    });
    var Qb = function(a) {
        this.j = a
    };
    Qb.prototype.toString = function() {
        return this.j
    };
    var Rb = new Qb("about:invalid#zClosurez");
    var Sb = function(a) {
        this.Gm = a
    };

    function Tb(a) {
        return new Sb(function(b) {
            return b.substr(0, a.length + 1).toLowerCase() === a + ":"
        })
    }
    var Ub = [Tb("data"), Tb("http"), Tb("https"), Tb("mailto"), Tb("ftp"), new Sb(function(a) {
        return /^[^:]*([/?#]|$)/.test(a)
    })];

    function Vb(a, b) {
        b = b === void 0 ? Ub : b;
        if (a instanceof Qb) return a;
        for (var c = 0; c < b.length; ++c) {
            var d = b[c];
            if (d instanceof Sb && d.Gm(a)) return new Qb(a)
        }
    }

    function Wb(a) {
        var b;
        b = b === void 0 ? Ub : b;
        return Vb(a, b) || Rb
    }
    var Xb = /^\s*(?!javascript:)(?:[\w+.-]+:|[^:/?#]*(?:[/?#]|$))/i;

    function Yb(a) {
        var b;
        if (a instanceof Qb)
            if (a instanceof Qb) b = a.j;
            else throw Error("");
        else b = Xb.test(a) ? a : void 0;
        return b
    };
    var $b = function() {
        this.j = Zb[0].toLowerCase()
    };
    $b.prototype.toString = function() {
        return this.j
    };
    var ac = function(a) {
        this.j = a
    };
    ac.prototype.toString = function() {
        return this.j + ""
    };

    function bc(a, b) {
        var c = [new $b];
        if (c.length === 0) throw Error("");
        var d = c.map(function(f) {
                var g;
                if (f instanceof $b) g = f.j;
                else throw Error("");
                return g
            }),
            e = b.toLowerCase();
        if (d.every(function(f) {
                return e.indexOf(f) !== 0
            })) throw Error('Attribute "' + b + '" does not match any of the allowed prefixes.');
        a.setAttribute(b, "true")
    };

    function cc(a, b) {
        var c = Yb(b);
        c !== void 0 && (a.action = c)
    };
    var dc = Array.prototype.indexOf ? function(a, b) {
        return Array.prototype.indexOf.call(a, b, void 0)
    } : function(a, b) {
        if (typeof a === "string") return typeof b !== "string" || b.length != 1 ? -1 : a.indexOf(b, 0);
        for (var c = 0; c < a.length; c++)
            if (c in a && a[c] === b) return c;
        return -1
    };
    "ARTICLE SECTION NAV ASIDE H1 H2 H3 H4 H5 H6 HEADER FOOTER ADDRESS P HR PRE BLOCKQUOTE OL UL LH LI DL DT DD FIGURE FIGCAPTION MAIN DIV EM STRONG SMALL S CITE Q DFN ABBR RUBY RB RT RTC RP DATA TIME CODE VAR SAMP KBD SUB SUP I B U MARK BDI BDO SPAN BR WBR NOBR INS DEL PICTURE PARAM TRACK MAP TABLE CAPTION COLGROUP COL TBODY THEAD TFOOT TR TD TH SELECT DATALIST OPTGROUP OPTION OUTPUT PROGRESS METER FIELDSET LEGEND DETAILS SUMMARY MENU DIALOG SLOT CANVAS FONT CENTER ACRONYM BASEFONT BIG DIR HGROUP STRIKE TT".split(" ").concat(["BUTTON",
        "INPUT"
    ]);

    function ec(a) {
        return a === null ? "null" : a === void 0 ? "undefined" : a
    };
    var C = window,
        fc = window.history,
        E = document,
        gc = navigator;

    function hc() {
        var a;
        try {
            a = gc.serviceWorker
        } catch (b) {
            return
        }
        return a
    }
    var ic = E.currentScript,
        jc = ic && ic.src;

    function kc(a, b) {
        console.log("kc a - ",a);
        console.log("kc b - ", b);
        console.log("kc C - ", C);
        var c = C[a];
        C[a] = c === void 0 ? b : c;
        return C[a]
    }

    function lc(a) {
        return (gc.userAgent || "").indexOf(a) !== -1
    }
    var mc = {
            async: 1,
            nonce: 1,
            onerror: 1,
            onload: 1,
            src: 1,
            type: 1
        },
        nc = {
            onload: 1,
            src: 1,
            width: 1,
            height: 1,
            style: 1
        };

    function oc(a, b, c) {
        b && jb(b, function(d, e) {
            d = d.toLowerCase();
            c.hasOwnProperty(d) || a.setAttribute(d, e)
        })
    }

    function pc(a, b, c, d, e) {
        var f = E.createElement("script");
        oc(f, d, mc);
        f.type = "text/javascript";
        f.async = d && d.async === !1 ? !1 : !0;
        var g;
        g = Jb(ec(a));
        f.src = Kb(g);
        var k, m = f.ownerDocument && f.ownerDocument.defaultView || window;
        m = m === void 0 ? document : m;
        var n, p, q = (p = (n = "document" in m ? m.document : m).querySelector) == null ? void 0 : p.call(n, "script[nonce]");
        (k = q == null ? "" : q.nonce || q.getAttribute("nonce") || "") && f.setAttribute("nonce", k);
        b && (f.onload = b);
        c && (f.onerror = c);
        if (e) e.appendChild(f);
        else {
            var r = E.getElementsByTagName("script")[0] ||
                E.body || E.head;
            r.parentNode.insertBefore(f, r)
        }
        return f
    }

    function qc() {
        if (jc) {
            var a = jc.toLowerCase();
            if (a.indexOf("https://") === 0) return 2;
            if (a.indexOf("http://") === 0) return 3
        }
        return 1
    }

    function rc(a, b, c, d, e) {
        var f;
        f = f === void 0 ? !0 : f;
        var g = e,
            k = !1;
        g || (g = E.createElement("iframe"), k = !0);
        oc(g, c, nc);
        d && jb(d, function(n, p) {
            g.dataset[n] = p
        });
        f && (g.height = "0", g.width = "0", g.style.display = "none", g.style.visibility = "hidden");
        a !== void 0 && (g.src = a);
        if (k) {
            var m = E.body && E.body.lastChild || E.body || E.head;
            m.parentNode.insertBefore(g, m)
        }
        b && (g.onload = b);
        return g
    }
    var sc = function(a, b, c, d) {
        var e = new Image(1, 1);
        oc(e, d, {});
        e.onload = function() {
            e.onload = null;
            b && b()
        };
        e.onerror = function() {
            e.onerror = null;
            c && c()
        };
        e.src = a;
        return e
    };

    function tc(a, b, c, d) {
        sc(a, b, c, d)
    }

    function uc(a, b, c, d) {
        a.addEventListener ? a.addEventListener(b, c, !!d) : a.attachEvent && a.attachEvent("on" + b, c)
    }

    function vc(a, b, c) {
        a.removeEventListener ? a.removeEventListener(b, c, !1) : a.detachEvent && a.detachEvent("on" + b, c)
    }

    function F(a) {
        C.setTimeout(a, 0)
    }

    function wc(a, b) {
        return a && b && a.attributes && a.attributes[b] ? a.attributes[b].value : null
    }

    function xc(a) {
        var b = a.innerText || a.textContent || "";
        b && b !== " " && (b = b.replace(/^[\s\xa0]+/g, ""), b = b.replace(/[\s\xa0]+$/g, ""));
        b && (b = b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g, " "));
        return b
    }

    function yc(a) {
        var b = E.createElement("div"),
            c = b,
            d, e = ec("A<div>" + a + "</div>"),
            f = Hb();
        d = new ac(f ? f.createHTML(e) : e);
        if (c.nodeType === 1 && /^(script|style)$/i.test(c.tagName)) throw Error("");
        var g;
        if (d instanceof ac) g = d.j;
        else throw Error("");
        c.innerHTML = g;
        b = b.lastChild;
        for (var k = []; b && b.firstChild;) k.push(b.removeChild(b.firstChild));
        return k
    }

    function zc(a, b, c) {
        c = c || 100;
        for (var d = {}, e = 0; e < b.length; e++) d[b[e]] = !0;
        for (var f = a, g = 0; f && g <= c; g++) {
            if (d[String(f.tagName).toLowerCase()]) return f;
            f = f.parentElement
        }
        return null
    }

    function Ac(a) {
        //console.log("Ac",a);
        var b;
        try {
            b = gc.sendBeacon && gc.sendBeacon(a)
        } catch (c) {
            Va("TAGGING", 15)
        }
        b || sc(a)
    }

    function Bc(a, b) {
        //console.log("Bc",a,b);
        try {
            return gc.sendBeacon(a, b)
        } catch (c) {
            Va("TAGGING", 15)
        }
        return !1
    }
    var Cc = {
        cache: "no-store",
        credentials: "include",
        keepalive: !0,
        method: "POST",
        mode: "no-cors",
        redirect: "follow"
    };

    function Dc(a, b, c) {
        if (Ec()) {
            var d = Object.assign({}, Cc);
            b && (d.body = b);
            c && (c.attributionReporting && (d.attributionReporting = c.attributionReporting), c.browsingTopics && (d.browsingTopics = c.browsingTopics));
            try {
                var e = C.fetch(a, d);
                e && e.catch(ab);
                return !0
            } catch (f) {}
        }
        if (c && c.noFallback) return !1;
        if (b) return Bc(a, b);
        Ac(a);
        return !0
    }

    function Ec() {
        return typeof C.fetch === "function"
    }

    function Gc(a, b) {
        var c = a[b];
        c && typeof c.animVal === "string" && (c = c.animVal);
        return c
    }

    function Hc() {
        var a = C.performance;
        if (a && bb(a.now)) return a.now()
    }

    function Ic() {
        var a, b = C.performance;
        if (b && b.getEntriesByType) try {
            var c = b.getEntriesByType("navigation");
            c && c.length > 0 && (a = c[0].type)
        } catch (d) {
            return "e"
        }
        if (!a) return "u";
        switch (a) {
            case "navigate":
                return "n";
            case "back_forward":
                return "h";
            case "reload":
                return "r";
            case "prerender":
                return "p";
            default:
                return "x"
        }
    }

    function Jc() {
        return C.performance || void 0
    }

    function Kc() {
        var a = C.webPixelsManager;
        return a ? a.createShopifyExtend !== void 0 : !1
    };

    function Lc(a, b) {
        return this.evaluate(a) && this.evaluate(b)
    }

    function Mc(a, b) {
        return this.evaluate(a) === this.evaluate(b)
    }

    function Nc(a, b) {
        return this.evaluate(a) || this.evaluate(b)
    }

    function Oc(a, b) {
        a = this.evaluate(a);
        b = this.evaluate(b);
        return String(a).indexOf(String(b)) > -1
    }

    function Pc(a, b) {
        var c = String(this.evaluate(a)),
            d = String(this.evaluate(b));
        return c.substring(0, d.length) === d
    }

    function Qc(a, b) {
        a = this.evaluate(a);
        b = this.evaluate(b);
        switch (a) {
            case "pageLocation":
                var c = C.location.href;
                b instanceof La && b.get("stripProtocol") && (c = c.replace(/^https?:\/\//, ""));
                return c
        }
    };
    /*
     jQuery (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license.
    */
    var Rc = /\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,
        Sc = function(a) {
            if (a == null) return String(a);
            var b = Rc.exec(Object.prototype.toString.call(Object(a)));
            return b ? b[1].toLowerCase() : "object"
        },
        Tc = function(a, b) {
            return Object.prototype.hasOwnProperty.call(Object(a), b)
        },
        Uc = function(a) {
            if (!a || Sc(a) != "object" || a.nodeType || a == a.window) return !1;
            try {
                if (a.constructor && !Tc(a, "constructor") && !Tc(a.constructor.prototype, "isPrototypeOf")) return !1
            } catch (c) {
                return !1
            }
            for (var b in a);
            return b === void 0 ||
                Tc(a, b)
        },
        Vc = function(a, b) {
            var c = b || (Sc(a) == "array" ? [] : {}),
                d;
            for (d in a)
                if (Tc(a, d)) {
                    var e = a[d];
                    Sc(e) == "array" ? (Sc(c[d]) != "array" && (c[d] = []), c[d] = Vc(e, c[d])) : Uc(e) ? (Uc(c[d]) || (c[d] = {}), c[d] = Vc(e, c[d])) : c[d] = e
                } return c
        };

    function Wc(a) {
        if (a == void 0 || Array.isArray(a) || Uc(a)) return !0;
        switch (typeof a) {
            case "boolean":
            case "number":
            case "string":
            case "function":
                return !0
        }
        return !1
    }

    function Xc(a) {
        return typeof a === "number" && a >= 0 && isFinite(a) && a % 1 === 0 || typeof a === "string" && a[0] !== "-" && a === "" + parseInt(a)
    };
    var Yc = function(a) {
        a = a === void 0 ? [] : a;
        this.R = new Ba;
        this.values = [];
        this.la = !1;
        for (var b in a) a.hasOwnProperty(b) && (Xc(b) ? this.values[Number(b)] = a[Number(b)] : this.R.set(b, a[b]))
    };
    h = Yc.prototype;
    h.toString = function(a) {
        if (a && a.indexOf(this) >= 0) return "";
        for (var b = [], c = 0; c < this.values.length; c++) {
            var d = this.values[c];
            d === null || d === void 0 ? b.push("") : d instanceof Yc ? (a = a || [], a.push(this), b.push(d.toString(a)), a.pop()) : b.push(String(d))
        }
        return b.join(",")
    };
    h.set = function(a, b) {
        if (!this.la)
            if (a === "length") {
                if (!Xc(b)) throw Error("RangeError: Length property must be a valid integer.");
                this.values.length = Number(b)
            } else Xc(a) ? this.values[Number(a)] = b : this.R.set(a, b)
    };
    h.get = function(a) {
        return a === "length" ? this.length() : Xc(a) ? this.values[Number(a)] : this.R.get(a)
    };
    h.length = function() {
        return this.values.length
    };
    h.ka = function() {
        for (var a = this.R.ka(), b = 0; b < this.values.length; b++) this.values.hasOwnProperty(b) && a.push(String(b));
        return a
    };
    h.Vb = function() {
        for (var a = this.R.Vb(), b = 0; b < this.values.length; b++) this.values.hasOwnProperty(b) && a.push(this.values[b]);
        return a
    };
    h.Cb = function() {
        for (var a = this.R.Cb(), b = 0; b < this.values.length; b++) this.values.hasOwnProperty(b) && a.push([String(b), this.values[b]]);
        return a
    };
    h.remove = function(a) {
        Xc(a) ? delete this.values[Number(a)] : this.la || this.R.remove(a)
    };
    h.pop = function() {
        return this.values.pop()
    };
    h.push = function() {
        return this.values.push.apply(this.values, oa(ya.apply(0, arguments)))
    };
    h.shift = function() {
        return this.values.shift()
    };
    h.splice = function(a, b) {
        var c = ya.apply(2, arguments);
        return b === void 0 && c.length === 0 ? new Yc(this.values.splice(a)) : new Yc(this.values.splice.apply(this.values, [a, b || 0].concat(oa(c))))
    };
    h.unshift = function() {
        return this.values.unshift.apply(this.values, oa(ya.apply(0, arguments)))
    };
    h.has = function(a) {
        return Xc(a) && this.values.hasOwnProperty(a) || this.R.has(a)
    };
    h.Ia = function() {
        this.la = !0;
        Object.freeze(this.values)
    };
    h.sc = function() {
        return this.la
    };

    function Zc(a) {
        for (var b = [], c = 0; c < a.length(); c++) a.has(c) && (b[c] = a.get(c));
        return b
    };
    var $c = function(a, b) {
        this.functionName = a;
        this.Ed = b;
        this.R = new Ba;
        this.la = !1
    };
    h = $c.prototype;
    h.toString = function() {
        return this.functionName
    };
    h.getName = function() {
        return this.functionName
    };
    h.invoke = function(a) {
        return this.Ed.call.apply(this.Ed, [new ad(this, a)].concat(oa(ya.apply(1, arguments))))
    };
    h.nb = function(a) {
        var b = ya.apply(1, arguments);
        try {
            return this.invoke.apply(this, [a].concat(oa(b)))
        } catch (c) {}
    };
    h.get = function(a) {
        return this.R.get(a)
    };
    h.set = function(a, b) {
        this.la || this.R.set(a, b)
    };
    h.has = function(a) {
        return this.R.has(a)
    };
    h.remove = function(a) {
        this.la || this.R.remove(a)
    };
    h.ka = function() {
        return this.R.ka()
    };
    h.Vb = function() {
        return this.R.Vb()
    };
    h.Cb = function() {
        return this.R.Cb()
    };
    h.Ia = function() {
        this.la = !0
    };
    h.sc = function() {
        return this.la
    };
    var ad = function(a, b) {
        this.Ed = a;
        this.D = b
    };
    ad.prototype.evaluate = function(a) {
        var b = this.D;
        return Array.isArray(a) ? Ja(b, a) : a
    };
    ad.prototype.getName = function() {
        return this.Ed.getName()
    };
    ad.prototype.Fd = function() {
        return this.D.Fd()
    };
    var bd = function() {
        this.map = new Map
    };
    bd.prototype.set = function(a, b) {
        this.map.set(a, b)
    };
    bd.prototype.get = function(a) {
        return this.map.get(a)
    };
    var cd = function() {
        this.keys = [];
        this.values = []
    };
    cd.prototype.set = function(a, b) {
        this.keys.push(a);
        this.values.push(b)
    };
    cd.prototype.get = function(a) {
        var b = this.keys.indexOf(a);
        if (b > -1) return this.values[b]
    };

    function dd() {
        try {
            return Map ? new bd : new cd
        } catch (a) {
            return new cd
        }
    };
    var ed = function(a) {
        if (a instanceof ed) return a;
        if (Wc(a)) throw Error("Type of given value has an equivalent Pixie type.");
        this.value = a
    };
    ed.prototype.getValue = function() {
        return this.value
    };
    ed.prototype.toString = function() {
        return String(this.value)
    };
    var gd = function(a) {
        this.promise = a;
        this.la = !1;
        this.R = new Ba;
        this.R.set("then", fd(this));
        this.R.set("catch", fd(this, !0));
        this.R.set("finally", fd(this, !1, !0))
    };
    h = gd.prototype;
    h.get = function(a) {
        return this.R.get(a)
    };
    h.set = function(a, b) {
        this.la || this.R.set(a, b)
    };
    h.has = function(a) {
        return this.R.has(a)
    };
    h.remove = function(a) {
        this.la || this.R.remove(a)
    };
    h.ka = function() {
        return this.R.ka()
    };
    h.Vb = function() {
        return this.R.Vb()
    };
    h.Cb = function() {
        return this.R.Cb()
    };
    var fd = function(a, b, c) {
        b = b === void 0 ? !1 : b;
        c = c === void 0 ? !1 : c;
        return new $c("", function(d, e) {
            b && (e = d, d = void 0);
            c && (e = d);
            d instanceof $c || (d = void 0);
            e instanceof $c || (e = void 0);
            var f = Ha(this.D),
                g = function(m) {
                    return function(n) {
                        return c ? (m.invoke(f), a.promise) : m.invoke(f, n)
                    }
                },
                k = a.promise.then(d && g(d), e && g(e));
            return new gd(k)
        })
    };
    gd.prototype.Ia = function() {
        this.la = !0
    };
    gd.prototype.sc = function() {
        return this.la
    };

    function G(a, b, c) {
        var d = dd(),
            e = function(g, k) {
                for (var m = g.ka(), n = 0; n < m.length; n++) k[m[n]] = f(g.get(m[n]))
            },
            f = function(g) {
                var k = d.get(g);
                if (k) return k;
                if (g instanceof Yc) {
                    var m = [];
                    d.set(g, m);
                    for (var n = g.ka(), p = 0; p < n.length; p++) m[n[p]] = f(g.get(n[p]));
                    return m
                }
                if (g instanceof gd) return g.promise;
                if (g instanceof La) {
                    var q = {};
                    d.set(g, q);
                    e(g, q);
                    return q
                }
                if (g instanceof $c) {
                    var r = function() {
                        for (var v = ya.apply(0, arguments), t = 0; t < v.length; t++) v[t] = hd(v[t], b, c);
                        var w = new Fa(b ? b.Fd() : new Ea);
                        b && (w.j = b.j);
                        return f(g.invoke.apply(g,
                            [w].concat(oa(v))))
                    };
                    d.set(g, r);
                    e(g, r);
                    return r
                }
                var u = !1;
                switch (c) {
                    case 1:
                        u = !0;
                        break;
                    case 2:
                        u = !1;
                        break;
                    case 3:
                        u = !1;
                        break;
                    default:
                }
                if (g instanceof ed && u) return g.getValue();
                switch (typeof g) {
                    case "boolean":
                    case "number":
                    case "string":
                    case "undefined":
                        return g;
                    case "object":
                        if (g === null) return null
                }
            };
        return f(a)
    }

    function hd(a, b, c) {
        var d = dd(),
            e = function(g, k) {
                for (var m in g) g.hasOwnProperty(m) && k.set(m, f(g[m]))
            },
            f = function(g) {
                var k = d.get(g);
                if (k) return k;
                if (Array.isArray(g) || kb(g)) {
                    var m = new Yc([]);
                    d.set(g, m);
                    for (var n in g) g.hasOwnProperty(n) && m.set(n, f(g[n]));
                    return m
                }
                if (Uc(g)) {
                    var p = new La;
                    d.set(g, p);
                    e(g, p);
                    return p
                }
                if (typeof g === "function") {
                    var q = new $c("", function() {
                        for (var x = ya.apply(0, arguments), y = 0; y < x.length; y++) x[y] = G(this.evaluate(x[y]), b, c);
                        return f((0, this.D.H)(g, g, x))
                    });
                    d.set(g, q);
                    e(g, q);
                    return q
                }
                var t = typeof g;
                if (g === null || t === "string" || t === "number" || t === "boolean") return g;
                var w = !1;
                switch (c) {
                    case 1:
                        w = !0;
                        break;
                    case 2:
                        w = !1;
                        break;
                    default:
                }
                if (g !== void 0 && w) return new ed(g)
            };
        return f(a)
    };

    function id() {
        var a = !1;
        return a
    };
    var jd = {
        supportedMethods: "concat every filter forEach hasOwnProperty indexOf join lastIndexOf map pop push reduce reduceRight reverse shift slice some sort splice unshift toString".split(" "),
        concat: function(a) {
            for (var b = [], c = 0; c < this.length(); c++) b.push(this.get(c));
            for (var d = 1; d < arguments.length; d++)
                if (arguments[d] instanceof Yc)
                    for (var e = arguments[d], f = 0; f < e.length(); f++) b.push(e.get(f));
                else b.push(arguments[d]);
            return new Yc(b)
        },
        every: function(a, b) {
            for (var c = this.length(), d = 0; d < this.length() &&
                d < c; d++)
                if (this.has(d) && !b.invoke(a, this.get(d), d, this)) return !1;
            return !0
        },
        filter: function(a, b) {
            for (var c = this.length(), d = [], e = 0; e < this.length() && e < c; e++) this.has(e) && b.invoke(a, this.get(e), e, this) && d.push(this.get(e));
            return new Yc(d)
        },
        forEach: function(a, b) {
            for (var c = this.length(), d = 0; d < this.length() && d < c; d++) this.has(d) && b.invoke(a, this.get(d), d, this)
        },
        hasOwnProperty: function(a, b) {
            return this.has(b)
        },
        indexOf: function(a, b, c) {
            var d = this.length(),
                e = c === void 0 ? 0 : Number(c);
            e < 0 && (e = Math.max(d + e, 0));
            for (var f =
                    e; f < d; f++)
                if (this.has(f) && this.get(f) === b) return f;
            return -1
        },
        join: function(a, b) {
            for (var c = [], d = 0; d < this.length(); d++) c.push(this.get(d));
            return c.join(b)
        },
        lastIndexOf: function(a, b, c) {
            var d = this.length(),
                e = d - 1;
            c !== void 0 && (e = c < 0 ? d + c : Math.min(c, e));
            for (var f = e; f >= 0; f--)
                if (this.has(f) && this.get(f) === b) return f;
            return -1
        },
        map: function(a, b) {
            for (var c = this.length(), d = [], e = 0; e < this.length() && e < c; e++) this.has(e) && (d[e] = b.invoke(a, this.get(e), e, this));
            return new Yc(d)
        },
        pop: function() {
            return this.pop()
        },
        push: function(a) {
            return this.push.apply(this,
                oa(ya.apply(1, arguments)))
        },
        reduce: function(a, b, c) {
            var d = this.length(),
                e, f = 0;
            if (c !== void 0) e = c;
            else {
                if (d === 0) throw Error("TypeError: Reduce on List with no elements.");
                for (var g = 0; g < d; g++)
                    if (this.has(g)) {
                        e = this.get(g);
                        f = g + 1;
                        break
                    } if (g === d) throw Error("TypeError: Reduce on List with no elements.");
            }
            for (var k = f; k < d; k++) this.has(k) && (e = b.invoke(a, e, this.get(k), k, this));
            return e
        },
        reduceRight: function(a, b, c) {
            var d = this.length(),
                e, f = d - 1;
            if (c !== void 0) e = c;
            else {
                if (d === 0) throw Error("TypeError: ReduceRight on List with no elements.");
                for (var g = 1; g <= d; g++)
                    if (this.has(d - g)) {
                        e = this.get(d - g);
                        f = d - (g + 1);
                        break
                    } if (g > d) throw Error("TypeError: ReduceRight on List with no elements.");
            }
            for (var k = f; k >= 0; k--) this.has(k) && (e = b.invoke(a, e, this.get(k), k, this));
            return e
        },
        reverse: function() {
            for (var a = Zc(this), b = a.length - 1, c = 0; b >= 0; b--, c++) a.hasOwnProperty(b) ? this.set(c, a[b]) : this.remove(c);
            return this
        },
        shift: function() {
            return this.shift()
        },
        slice: function(a, b, c) {
            var d = this.length();
            b === void 0 && (b = 0);
            b = b < 0 ? Math.max(d + b, 0) : Math.min(b, d);
            c = c === void 0 ?
                d : c < 0 ? Math.max(d + c, 0) : Math.min(c, d);
            c = Math.max(b, c);
            for (var e = [], f = b; f < c; f++) e.push(this.get(f));
            return new Yc(e)
        },
        some: function(a, b) {
            for (var c = this.length(), d = 0; d < this.length() && d < c; d++)
                if (this.has(d) && b.invoke(a, this.get(d), d, this)) return !0;
            return !1
        },
        sort: function(a, b) {
            var c = Zc(this);
            b === void 0 ? c.sort() : c.sort(function(e, f) {
                return Number(b.invoke(a, e, f))
            });
            for (var d = 0; d < c.length; d++) c.hasOwnProperty(d) ? this.set(d, c[d]) : this.remove(d);
            return this
        },
        splice: function(a, b, c) {
            return this.splice.apply(this,
                [b, c].concat(oa(ya.apply(3, arguments))))
        },
        toString: function() {
            return this.toString()
        },
        unshift: function(a) {
            return this.unshift.apply(this, oa(ya.apply(1, arguments)))
        }
    };
    var kd = function(a) {
        var b;
        b = Error.call(this, a);
        this.message = b.message;
        "stack" in b && (this.stack = b.stack)
    };
    xa(kd, Error);
    var ld = {
            charAt: 1,
            concat: 1,
            indexOf: 1,
            lastIndexOf: 1,
            match: 1,
            replace: 1,
            search: 1,
            slice: 1,
            split: 1,
            substring: 1,
            toLowerCase: 1,
            toLocaleLowerCase: 1,
            toString: 1,
            toUpperCase: 1,
            toLocaleUpperCase: 1,
            trim: 1
        },
        md = new Aa("break"),
        nd = new Aa("continue");

    function od(a, b) {
        return this.evaluate(a) + this.evaluate(b)
    }

    function pd(a, b) {
        return this.evaluate(a) && this.evaluate(b)
    }

    function qd(a, b, c) {
        a = this.evaluate(a);
        b = this.evaluate(b);
        c = this.evaluate(c);
        if (!(c instanceof Yc)) throw Error("Error: Non-List argument given to Apply instruction.");
        if (a === null || a === void 0) {
            var d = "TypeError: Can't read property " + b + " of " + a + ".";
            if (id()) throw new kd(d);
            throw Error(d);
        }
        var e = typeof a === "number";
        if (typeof a === "boolean" || e) {
            if (b === "toString") {
                if (e && c.length()) {
                    var f = G(c.get(0));
                    try {
                        return a.toString(f)
                    } catch (y) {}
                }
                return a.toString()
            }
            var g = "TypeError: " + a + "." + b + " is not a function.";
            if (id()) throw new kd(g);
            throw Error(g);
        }
        if (typeof a === "string") {
            if (ld.hasOwnProperty(b)) {
                var k = 2;
                k = 1;
                var m = G(c, void 0, k);
                return hd(a[b].apply(a, m), this.D)
            }
            var n = "TypeError: " + b + " is not a function";
            if (id()) throw new kd(n);
            throw Error(n);
        }
        if (a instanceof Yc) {
            if (a.has(b)) {
                var p = a.get(String(b));
                if (p instanceof $c) {
                    var q = Zc(c);
                    return p.invoke.apply(p, [this.D].concat(oa(q)))
                }
                var r =
                    "TypeError: " + b + " is not a function";
                if (id()) throw new kd(r);
                throw Error(r);
            }
            if (jd.supportedMethods.indexOf(b) >= 0) {
                var u = Zc(c);
                return jd[b].call.apply(jd[b], [a, this.D].concat(oa(u)))
            }
        }
        if (a instanceof $c || a instanceof La || a instanceof gd) {
            if (a.has(b)) {
                var v = a.get(b);
                if (v instanceof $c) {
                    var t = Zc(c);
                    return v.invoke.apply(v, [this.D].concat(oa(t)))
                }
                var w = "TypeError: " + b + " is not a function";
                if (id()) throw new kd(w);
                throw Error(w);
            }
            if (b === "toString") return a instanceof $c ? a.getName() : a.toString();
            if (b ===
                "hasOwnProperty") return a.has(c.get(0))
        }
        if (a instanceof ed && b === "toString") return a.toString();
        var x = "TypeError: Object has no '" + b + "' property.";
        if (id()) throw new kd(x);
        throw Error(x);
    }

    function rd(a, b) {
        a = this.evaluate(a);
        if (typeof a !== "string") throw Error("Invalid key name given for assignment.");
        var c = this.D;
        if (!c.has(a)) throw Error("Attempting to assign to undefined value " + b);
        var d = this.evaluate(b);
        c.set(a, d);
        return d
    }

    function sd() {
        var a = ya.apply(0, arguments),
            b = Ha(this.D),
            c = Ia(b, a);
        if (c instanceof Aa) return c
    }

    function td() {
        return md
    }

    function ud(a) {
        for (var b = this.evaluate(a), c = 0; c < b.length; c++) {
            var d = this.evaluate(b[c]);
            if (d instanceof Aa) return d
        }
    }

    function vd() {
        for (var a = this.D, b = 0; b < arguments.length - 1; b += 2) {
            var c = arguments[b];
            if (typeof c === "string") {
                var d = this.evaluate(arguments[b + 1]);
                Ga(a, c, d, !0)
            }
        }
    }

    function wd() {
        return nd
    }

    function xd(a, b) {
        return new Aa(a, this.evaluate(b))
    }

    function yd(a, b) {
        var c = ya.apply(2, arguments),
            d = new Yc;
        b = this.evaluate(b);
        for (var e = 0; e < b.length; e++) d.push(b[e]);
        var f = [51, a, d].concat(oa(c));
        this.D.add(a, this.evaluate(f))
    }

    function zd(a, b) {
        return this.evaluate(a) / this.evaluate(b)
    }

    function Ad(a, b) {
        a = this.evaluate(a);
        b = this.evaluate(b);
        var c = a instanceof ed,
            d = b instanceof ed;
        return c || d ? c && d ? a.getValue() === b.getValue() : !1 : a == b
    }

    function Bd() {
        for (var a, b = 0; b < arguments.length; b++) a = this.evaluate(arguments[b]);
        return a
    }

    function Cd(a, b, c, d) {
        for (var e = 0; e < b(); e++) {
            var f = a(c(e)),
                g = Ia(f, d);
            if (g instanceof Aa) {
                if (g.type === "break") break;
                if (g.type === "return") return g
            }
        }
    }

    function Dd(a, b, c) {
        if (typeof b === "string") return Cd(a, function() {
            return b.length
        }, function(f) {
            return f
        }, c);
        if (b instanceof La || b instanceof gd || b instanceof Yc || b instanceof $c) {
            var d = b.ka(),
                e = d.length;
            return Cd(a, function() {
                return e
            }, function(f) {
                return d[f]
            }, c)
        }
    }

    function Ed(a, b, c) {
        a = this.evaluate(a);
        b = this.evaluate(b);
        c = this.evaluate(c);
        var d = this.D;
        return Dd(function(e) {
            d.set(a, e);
            return d
        }, b, c)
    }

    function Fd(a, b, c) {
        a = this.evaluate(a);
        b = this.evaluate(b);
        c = this.evaluate(c);
        var d = this.D;
        return Dd(function(e) {
            var f = Ha(d);
            Ga(f, a, e, !0);
            return f
        }, b, c)
    }

    function Gd(a, b, c) {
        a = this.evaluate(a);
        b = this.evaluate(b);
        c = this.evaluate(c);
        var d = this.D;
        return Dd(function(e) {
            var f = Ha(d);
            f.add(a, e);
            return f
        }, b, c)
    }

    function Hd(a, b, c) {
        a = this.evaluate(a);
        b = this.evaluate(b);
        c = this.evaluate(c);
        var d = this.D;
        return Id(function(e) {
            d.set(a, e);
            return d
        }, b, c)
    }

    function Jd(a, b, c) {
        a = this.evaluate(a);
        b = this.evaluate(b);
        c = this.evaluate(c);
        var d = this.D;
        return Id(function(e) {
            var f = Ha(d);
            Ga(f, a, e, !0);
            return f
        }, b, c)
    }

    function Kd(a, b, c) {
        a = this.evaluate(a);
        b = this.evaluate(b);
        c = this.evaluate(c);
        var d = this.D;
        return Id(function(e) {
            var f = Ha(d);
            f.add(a, e);
            return f
        }, b, c)
    }

    function Id(a, b, c) {
        if (typeof b === "string") return Cd(a, function() {
            return b.length
        }, function(d) {
            return b[d]
        }, c);
        if (b instanceof Yc) return Cd(a, function() {
            return b.length()
        }, function(d) {
            return b.get(d)
        }, c);
        if (id()) throw new kd("The value is not iterable.");
        throw new TypeError("The value is not iterable.");
    }

    function Ld(a, b, c, d) {
        function e(p, q) {
            for (var r = 0; r < f.length(); r++) {
                var u = f.get(r);
                q.add(u, p.get(u))
            }
        }
        var f = this.evaluate(a);
        if (!(f instanceof Yc)) throw Error("TypeError: Non-List argument given to ForLet instruction.");
        var g = this.D;
        d = this.evaluate(d);
        var k = Ha(g);
        for (e(g, k); Ja(k, b);) {
            var m = Ia(k, d);
            if (m instanceof Aa) {
                if (m.type === "break") break;
                if (m.type === "return") return m
            }
            var n = Ha(g);
            e(k, n);
            Ja(n, c);
            k = n
        }
    }

    function Md(a, b) {
        var c = ya.apply(2, arguments),
            d = this.D,
            e = this.evaluate(b);
        if (!(e instanceof Yc)) throw Error("Error: non-List value given for Fn argument names.");
        return new $c(a, function() {
            return function() {
                var f = ya.apply(0, arguments),
                    g = Ha(d);
                g.j === void 0 && (g.j = this.D.j);
                for (var k = 0; k < f.length; k++)
                    if (f[k] = this.evaluate(f[k]), f[k] instanceof Aa) return f[k];
                for (var m = e.get("length"), n = 0; n < m; n++) n < f.length ? g.add(e.get(n), f[n]) : g.add(e.get(n), void 0);
                g.add("arguments", new Yc(f));
                var p = Ia(g, c);
                if (p instanceof Aa) return p.type === "return" ? p.data : p
            }
        }())
    }

    function Nd(a) {
        a = this.evaluate(a);
        var b = this.D;
        if (Od && !b.has(a)) throw new ReferenceError(a + " is not defined.");
        return b.get(a)
    }

    function Pd(a, b) {
        var c;
        a = this.evaluate(a);
        b = this.evaluate(b);
        if (a === void 0 || a === null) {
            var d = "TypeError: Cannot read properties of " + a + " (reading '" + b + "')";
            if (id()) throw new kd(d);
            throw Error(d);
        }
        if (a instanceof La || a instanceof gd || a instanceof Yc || a instanceof $c) c = a.get(b);
        else if (typeof a === "string") b === "length" ? c = a.length : Xc(b) && (c = a[b]);
        else if (a instanceof ed) return;
        return c
    }

    function Qd(a, b) {
        return this.evaluate(a) > this.evaluate(b)
    }

    function Rd(a, b) {
        return this.evaluate(a) >= this.evaluate(b)
    }

    function Sd(a, b) {
        a = this.evaluate(a);
        b = this.evaluate(b);
        a instanceof ed && (a = a.getValue());
        b instanceof ed && (b = b.getValue());
        return a === b
    }

    function Td(a, b) {
        return !Sd.call(this, a, b)
    }

    function Ud(a, b, c) {
        var d = [];
        this.evaluate(a) ? d = this.evaluate(b) : c && (d = this.evaluate(c));
        var e = Ia(this.D, d);
        if (e instanceof Aa) return e
    }
    var Od = !1;

    function Vd(a, b) {
        return this.evaluate(a) < this.evaluate(b)
    }

    function Wd(a, b) {
        return this.evaluate(a) <= this.evaluate(b)
    }

    function Xd() {
        for (var a = new Yc, b = 0; b < arguments.length; b++) {
            var c = this.evaluate(arguments[b]);
            a.push(c)
        }
        return a
    }

    function Yd() {
        for (var a = new La, b = 0; b < arguments.length - 1; b += 2) {
            var c = this.evaluate(arguments[b]) + "",
                d = this.evaluate(arguments[b + 1]);
            a.set(c, d)
        }
        return a
    }

    function Zd(a, b) {
        return this.evaluate(a) % this.evaluate(b)
    }

    function $d(a, b) {
        return this.evaluate(a) * this.evaluate(b)
    }

    function ae(a) {
        return -this.evaluate(a)
    }

    function be(a) {
        return !this.evaluate(a)
    }

    function ce(a, b) {
        return !Ad.call(this, a, b)
    }

    function de() {
        return null
    }

    function ee(a, b) {
        return this.evaluate(a) || this.evaluate(b)
    }

    function ge(a, b) {
        var c = this.evaluate(a);
        this.evaluate(b);
        return c
    }

    function he(a) {
        return this.evaluate(a)
    }

    function ie() {
        return ya.apply(0, arguments)
    }

    function je(a) {
        return new Aa("return", this.evaluate(a))
    }

    function ke(a, b, c) {
        a = this.evaluate(a);
        b = this.evaluate(b);
        c = this.evaluate(c);
        if (a === null || a === void 0) {
            var d = "TypeError: Can't set property " + b + " of " + a + ".";
            if (id()) throw new kd(d);
            throw Error(d);
        }(a instanceof $c || a instanceof Yc || a instanceof La) && a.set(String(b), c);
        return c
    }

    function le(a, b) {
        return this.evaluate(a) - this.evaluate(b)
    }

    function me(a, b, c) {
        a = this.evaluate(a);
        var d = this.evaluate(b),
            e = this.evaluate(c);
        if (!Array.isArray(d) || !Array.isArray(e)) throw Error("Error: Malformed switch instruction.");
        for (var f, g = !1, k = 0; k < d.length; k++)
            if (g || a === this.evaluate(d[k]))
                if (f = this.evaluate(e[k]), f instanceof Aa) {
                    var m = f.type;
                    if (m === "break") return;
                    if (m === "return" || m === "continue") return f
                } else g = !0;
        if (e.length === d.length + 1 && (f = this.evaluate(e[e.length - 1]), f instanceof Aa && (f.type === "return" || f.type === "continue"))) return f
    }

    function ne(a, b, c) {
        return this.evaluate(a) ? this.evaluate(b) : this.evaluate(c)
    }

    function oe(a) {
        a = this.evaluate(a);
        return a instanceof $c ? "function" : typeof a
    }

    function pe() {
        for (var a = this.D, b = 0; b < arguments.length; b++) {
            var c = arguments[b];
            typeof c !== "string" || a.add(c, void 0)
        }
    }

    function qe(a, b, c, d) {
        var e = this.evaluate(d);
        if (this.evaluate(c)) {
            var f = Ia(this.D, e);
            if (f instanceof Aa) {
                if (f.type === "break") return;
                if (f.type === "return") return f
            }
        }
        for (; this.evaluate(a);) {
            var g = Ia(this.D, e);
            if (g instanceof Aa) {
                if (g.type === "break") break;
                if (g.type === "return") return g
            }
            this.evaluate(b)
        }
    }

    function re(a) {
        return ~Number(this.evaluate(a))
    }

    function se(a, b) {
        return Number(this.evaluate(a)) << Number(this.evaluate(b))
    }

    function te(a, b) {
        return Number(this.evaluate(a)) >> Number(this.evaluate(b))
    }

    function ue(a, b) {
        return Number(this.evaluate(a)) >>> Number(this.evaluate(b))
    }

    function ve(a, b) {
        return Number(this.evaluate(a)) & Number(this.evaluate(b))
    }

    function we(a, b) {
        return Number(this.evaluate(a)) ^ Number(this.evaluate(b))
    }

    function xe(a, b) {
        return Number(this.evaluate(a)) | Number(this.evaluate(b))
    }

    function ye() {}

    function ze(a, b, c, d, e) {
        var f = !0;
        try {
            var g = this.evaluate(c);
            if (g instanceof Aa) return g
        } catch (r) {
            if (!(r instanceof kd && a)) throw f = r instanceof kd, r;
            var k = Ha(this.D),
                m = new ed(r);
            k.add(b, m);
            var n = this.evaluate(d),
                p = Ia(k, n);
            if (p instanceof Aa) return p
        } finally {
            if (f && e !== void 0) {
                var q = this.evaluate(e);
                if (q instanceof Aa) return q
            }
        }
    };
    var Be = function() {
        this.j = new Ka;
        Ae(this)
    };
    Be.prototype.execute = function(a) {
        return this.j.ni(a)
    };
    var Ae = function(a) {
        var b = function(c, d) {
            var e = new $c(String(c), d);
            e.Ia();
            a.j.j.set(String(c), e)
        };
        b("map", Yd);
        b("and", Lc);
        b("contains", Oc);
        b("equals", Mc);
        b("or", Nc);
        b("startsWith", Pc);
        b("variable", Qc)
    };
    var De = function() {
        this.C = !1;
        this.j = new Ka;
        Ce(this);
        this.C = !0
    };
    De.prototype.execute = function(a) {
        return Ee(this.j.ni(a))
    };
    var Fe = function(a, b, c) {
        return Ee(a.j.ql(b, c))
    };
    De.prototype.Ia = function() {
        this.j.Ia()
    };
    var Ce = function(a) {
        var b = function(c, d) {
            var e = String(c),
                f = new $c(e, d);
            f.Ia();
            a.j.j.set(e, f)
        };
        b(0, od);
        b(1, pd);
        b(2, qd);
        b(3, rd);
        b(56, ve);
        b(57, se);
        b(58, re);
        b(59, xe);
        b(60, te);
        b(61, ue);
        b(62, we);
        b(53, sd);
        b(4, td);
        b(5, ud);
        b(52, vd);
        b(6, wd);
        b(49, xd);
        b(7, Xd);
        b(8, Yd);
        b(9, ud);
        b(50, yd);
        b(10, zd);
        b(12, Ad);
        b(13, Bd);
        b(51, Md);
        b(47, Ed);
        b(54, Fd);
        b(55, Gd);
        b(63, Ld);
        b(64, Hd);
        b(65, Jd);
        b(66, Kd);
        b(15, Nd);
        b(16, Pd);
        b(17, Pd);
        b(18, Qd);
        b(19, Rd);
        b(20, Sd);
        b(21, Td);
        b(22, Ud);
        b(23, Vd);
        b(24, Wd);
        b(25, Zd);
        b(26, $d);
        b(27, ae);
        b(28, be);
        b(29,
            ce);
        b(45, de);
        b(30, ee);
        b(32, ge);
        b(33, ge);
        b(34, he);
        b(35, he);
        b(46, ie);
        b(36, je);
        b(43, ke);
        b(37, le);
        b(38, me);
        b(39, ne);
        b(67, ze);
        b(40, oe);
        b(44, ye);
        b(41, pe);
        b(42, qe)
    };
    De.prototype.Fd = function() {
        return this.j.Fd()
    };

    function Ee(a) {
        if (a instanceof Aa || a instanceof $c || a instanceof Yc || a instanceof La || a instanceof gd || a instanceof ed || a === null || a === void 0 || typeof a === "string" || typeof a === "number" || typeof a === "boolean") return a
    };
    var Ge = function(a) {
        this.message = a
    };

    function He(a) {
        var b = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [a];
        return b === void 0 ? new Ge("Value " + a + " can not be encoded in web-safe base64 dictionary.") : b
    };

    function Ie(a) {
        switch (a) {
            case 1:
                return "1";
            case 2:
            case 4:
                return "0";
            default:
                return "-"
        }
    };
    var Je = /^[1-9a-zA-Z_-][1-9a-c][1-9a-v]\d$/;

    function Ke(a, b) {
        for (var c = "", d = !0; a > 7;) {
            var e = a & 31;
            a >>= 5;
            d ? d = !1 : e |= 32;
            c = "" + He(e) + c
        }
        a <<= 2;
        d || (a |= 32);
        return c = "" + He(a | b) + c
    };
    var Le = function() {
        function a(b) {
            return {
                toString: function() {
                    return b
                }
            }
        }
        return {
            Nk: a("consent"),
            Ai: a("convert_case_to"),
            Bi: a("convert_false_to"),
            Ci: a("convert_null_to"),
            Di: a("convert_true_to"),
            Ei: a("convert_undefined_to"),
            Dn: a("debug_mode_metadata"),
            oa: a("function"),
            rh: a("instance_name"),
            tl: a("live_only"),
            vl: a("malware_disabled"),
            METADATA: a("metadata"),
            yl: a("original_activity_id"),
            Nn: a("original_vendor_template_id"),
            Mn: a("once_on_load"),
            xl: a("once_per_event"),
            Mj: a("once_per_load"),
            Pn: a("priority_override"),
            Qn: a("respected_consent_types"),
            Uj: a("setup_tags"),
            Fe: a("tag_id"),
            Zj: a("teardown_tags")
        }
    }();
    var gf;
    var hf = [],
        jf = [],
        kf = [],
        lf = [],
        mf = [],
        nf = {},
        of, pf;

    function qf(a) {
        pf = pf || a
    }

    function rf(a) {}
    var sf, tf = [],
        uf = [];

    function vf(a, b) {
        var c = {};
        c[Le.oa] = "__" + a;
        for (var d in b) b.hasOwnProperty(d) && (c["vtp_" + d] = b[d]);
        return c
    }

    function wf(a, b, c) {
        try {
            return of(xf(a, b, c))
        } catch (d) {
            JSON.stringify(a)
        }
        return 2
    }

    function yf(a) {
        var b = a[Le.oa];
        if (!b) throw Error("Error: No function name given for function call.");
        return !!nf[b]
    }
    var xf = function(a, b, c) {
            c = c || [];
            var d = {},
                e;
            for (e in a) a.hasOwnProperty(e) && (d[e] = zf(a[e], b, c));
            return d
        },
        zf = function(a, b, c) {
            if (Array.isArray(a)) {
                var d;
                switch (a[0]) {
                    case "function_id":
                        return a[1];
                    case "list":
                        d = [];
                        for (var e = 1; e < a.length; e++) d.push(zf(a[e], b, c));
                        return d;
                    case "macro":
                        var f = a[1];
                        if (c[f]) return;
                        var g = hf[f];
                        if (!g || b.isBlocked(g)) return;
                        c[f] = !0;
                        var k = String(g[Le.rh]);
                        try {
                            var m = xf(g, b, c);
                            m.vtp_gtmEventId = b.id;
                            b.priorityId && (m.vtp_gtmPriorityId = b.priorityId);
                            d = Af(m, {
                                event: b,
                                index: f,
                                type: 2,
                                name: k
                            });
                            sf && (d = sf.Nl(d, m))
                        } catch (y) {
                            b.logMacroError && b.logMacroError(y, Number(f), k), d = !1
                        }
                        c[f] = !1;
                        return d;
                    case "map":
                        d = {};
                        for (var n = 1; n < a.length; n += 2) d[zf(a[n], b, c)] = zf(a[n + 1], b, c);
                        return d;
                    case "template":
                        d = [];
                        for (var p = !1, q = 1; q < a.length; q++) {
                            var r = zf(a[q], b, c);
                            pf && (p = p || pf.Dm(r));
                            d.push(r)
                        }
                        return pf && p ? pf.Ql(d) : d.join("");
                    case "escape":
                        d = zf(a[1], b, c);
                        if (pf && Array.isArray(a[1]) && a[1][0] === "macro" && pf.Em(a)) return pf.Xm(d);
                        d = String(d);
                        for (var u = 2; u < a.length; u++) Se[a[u]] && (d = Se[a[u]](d));
                        return d;
                    case "tag":
                        var v = a[1];
                        if (!lf[v]) throw Error("Unable to resolve tag reference " + v + ".");
                        return {
                            hk: a[2], index: v
                        };
                    case "zb":
                        var t = {
                            arg0: a[2],
                            arg1: a[3],
                            ignore_case: a[5]
                        };
                        t[Le.oa] = a[1];
                        var w = wf(t, b, c),
                            x = !!a[4];
                        return x || w !== 2 ? x !== (w === 1) : null;
                    default:
                        throw Error("Attempting to expand unknown Value type: " + a[0] + ".");
                }
            }
            return a
        },
        Af = function(a, b) {
            var c = a[Le.oa],
                d = b && b.event;
            if (!c) throw Error("Error: No function name given for function call.");
            var e = nf[c],
                f = b && b.type === 2 && (d == null ? void 0 : d.reportMacroDiscrepancy) &&
                e && tf.indexOf(c) !== -1,
                g = {},
                k = {},
                m;
            for (m in a) a.hasOwnProperty(m) && vb(m, "vtp_") && (e && (g[m] = a[m]), !e || f) && (k[m.substring(4)] = a[m]);
            e && d && d.cachedModelValues && (g.vtp_gtmCachedValues = d.cachedModelValues);
            if (b) {
                if (b.name == null) {
                    var n;
                    a: {
                        var p = b.type,
                            q = b.index;
                        if (q == null) n = "";
                        else {
                            var r;
                            switch (p) {
                                case 2:
                                    r = hf[q];
                                    break;
                                case 1:
                                    r = lf[q];
                                    break;
                                default:
                                    n = "";
                                    break a
                            }
                            var u = r && r[Le.rh];
                            n = u ? String(u) : ""
                        }
                    }
                    b.name = n
                }
                e && (g.vtp_gtmEntityIndex = b.index, g.vtp_gtmEntityName = b.name)
            }
            var v, t, w;
            if (f && uf.indexOf(c) === -1) {
                uf.push(c);
                var x = getCurrentTimestamp();
                v = e(g);
                var y = getCurrentTimestamp() - x,
                    A = getCurrentTimestamp();
                t = gf(c, k, b);
                w = y - (getCurrentTimestamp() - A)
            } else if (e && (v = e(g)), !e || f) t = gf(c, k, b);
            f && d && (d.reportMacroDiscrepancy(d.id, c, void 0, !0), Wc(v) ? (Array.isArray(v) ? Array.isArray(t) : Uc(v) ? Uc(t) : typeof v === "function" ? typeof t === "function" : v === t) || d.reportMacroDiscrepancy(d.id, c) : v !== t && d.reportMacroDiscrepancy(d.id, c), w !== void 0 && d.reportMacroDiscrepancy(d.id, c, w));
            return e ? v : t
        };
    var Bf = function(a, b, c) {
        var d;
        d = Error.call(this, c);
        this.message = d.message;
        "stack" in d && (this.stack = d.stack);
        this.permissionId = a;
        this.parameters = b;
        this.name = "PermissionError"
    };
    xa(Bf, Error);
    Bf.prototype.getMessage = function() {
        return this.message
    };

    function Cf(a, b) {
        if (Array.isArray(a)) {
            Object.defineProperty(a, "context", {
                value: {
                    line: b[0]
                }
            });
            for (var c = 1; c < a.length; c++) Cf(a[c], b[c])
        }
    };
    var Df = function(a, b) {
        var c;
        c = Error.call(this, "Wrapped error for Dust debugging. Original error message: " + a.message);
        this.message = c.message;
        "stack" in c && (this.stack = c.stack);
        this.Rm = a;
        this.j = [];
        this.C = b
    };
    xa(Df, Error);

    function Ef() {
        return function(a, b) {
            a instanceof Df || (a = new Df(a, Ff));
            b && a instanceof Df && a.j.push(b);
            throw a;
        }
    }

    function Ff(a) {
        if (!a.length) return a;
        a.push({
            id: "main",
            line: 0
        });
        for (var b = a.length - 1; b > 0; b--) cb(a[b].id) && a.splice(b++, 1);
        for (var c = a.length - 1; c > 0; c--) a[c].line = a[c - 1].line;
        a.splice(0, 1);
        return a
    };

    function Gf(a) {
        function b(r) {
            for (var u = 0; u < r.length; u++) d[r[u]] = !0
        }
        for (var c = [], d = [], e = Hf(a), f = 0; f < jf.length; f++) {
            var g = jf[f],
                k = If(g, e);
            if (k) {
                for (var m = g.add || [], n = 0; n < m.length; n++) c[m[n]] = !0;
                b(g.block || [])
            } else k === null && b(g.block || []);
        }
        for (var p = [], q = 0; q < lf.length; q++) c[q] && !d[q] && (p[q] = !0);
        return p
    }

    function If(a, b) {
        for (var c = a["if"] || [], d = 0; d < c.length; d++) {
            var e = b(c[d]);
            if (e === 0) return !1;
            if (e === 2) return null
        }
        for (var f = a.unless || [], g = 0; g < f.length; g++) {
            var k = b(f[g]);
            if (k === 2) return null;
            if (k === 1) return !1
        }
        return !0
    }

    function Hf(a) {
        var b = [];
        return function(c) {
            b[c] === void 0 && (b[c] = wf(kf[c], a));
            return b[c]
        }
    };
    var Jf = {
        Nl: function(a, b) {
            b[Le.Ai] && typeof a === "string" && (a = b[Le.Ai] === 1 ? a.toLowerCase() : a.toUpperCase());
            b.hasOwnProperty(Le.Ci) && a === null && (a = b[Le.Ci]);
            b.hasOwnProperty(Le.Ei) && a === void 0 && (a = b[Le.Ei]);
            b.hasOwnProperty(Le.Di) && a === !0 && (a = b[Le.Di]);
            b.hasOwnProperty(Le.Bi) && a === !1 && (a = b[Le.Bi]);
            return a
        }
    };
    var Kf = function() {
            this.j = {}
        },
        Mf = function(a, b) {
            var c = Lf.j,
                d;
            (d = c.j)[a] != null || (d[a] = []);
            c.j[a].push(function() {
                return b.apply(null, oa(ya.apply(0, arguments)))
            })
        };

    function Nf(a, b, c, d) {
        if (a)
            for (var e = 0; e < a.length; e++) {
                var f = void 0,
                    g = "A policy function denied the permission request";
                try {
                    f = a[e](b, c, d), g += "."
                } catch (k) {
                    g = typeof k === "string" ? g + (": " + k) : k instanceof Error ? g + (": " + k.message) : g + "."
                }
                if (!f) throw new Bf(c, d, g);
            }
    }

    function Of(a, b, c) {
        return function() {
            var d = arguments[0];
            if (d) {
                var e = a.j[d],
                    f = a.j.all;
                if (e || f) {
                    var g = c.apply(void 0, Array.prototype.slice.call(arguments, 0));
                    Nf(e, b, d, g);
                    Nf(f, b, d, g)
                }
            }
        }
    };
    var Sf = function() {
            var a = data.permissions || {},
                b = Pf.ctid,
                c = this;
            this.C = {};
            this.j = new Kf;
            var d = {},
                e = {},
                f = Of(this.j, b, function() {
                    var g = arguments[0];
                    return g && d[g] ? d[g].apply(void 0, Array.prototype.slice.call(arguments, 0)) : {}
                });
            jb(a, function(g, k) {
                function m(p) {
                    var q = ya.apply(1, arguments);
                    if (!n[p]) throw Qf(p, {}, "The requested additional permission " + p + " is not configured.");
                    f.apply(null, [p].concat(oa(q)))
                }
                var n = {};
                jb(k, function(p, q) {
                    var r = Rf(p, q);
                    n[p] = r.assert;
                    d[p] || (d[p] = r.M);
                    r.dk && !e[p] && (e[p] = r.dk)
                });
                c.C[g] = function(p, q) {
                    var r = n[p];
                    if (!r) throw Qf(p, {}, "The requested permission " + p + " is not configured.");
                    var u = Array.prototype.slice.call(arguments, 0);
                    r.apply(void 0, u);
                    f.apply(void 0, u);
                    var v = e[p];
                    v && v.apply(null, [m].concat(oa(u.slice(1))))
                }
            })
        },
        Vf = function(a) {
            return Lf.C[a] || function() {}
        };

    function Rf(a, b) {
        var c = vf(a, b);
        c.vtp_permissionName = a;
        c.vtp_createPermissionError = Qf;
        try {
            return Af(c)
        } catch (d) {
            return {
                assert: function(e) {
                    throw new Bf(e, {}, "Permission " + e + " is unknown.");
                },
                M: function() {
                    throw new Bf(a, {}, "Permission " + a + " is unknown.");
                }
            }
        }
    }

    function Qf(a, b, c) {
        return new Bf(a, b, c)
    };
    var Wf = !1;
    var Xf = {};
    Xf.Ek = mb('');
    Xf.Ul = mb('');
    var ag = function(a) {
            var b = {},
                c = 0;
            jb(a, function(e, f) {
                if (f != null) {
                    var g = ("" + f).replace(/~/g, "~~");
                    if (Yf.hasOwnProperty(e)) b[Yf[e]] = g;
                    else if (Zf.hasOwnProperty(e)) {
                        var k = Zf[e];
                        b.hasOwnProperty(k) || (b[k] = g)
                    } else if (e === "category")
                        for (var m = g.split("/", 5), n = 0; n < m.length; n++) {
                            var p = b,
                                q = $f[n],
                                r = m[n];
                            p.hasOwnProperty(q) || (p[q] = r)
                        } else if (c < 27) {
                            var u = String.fromCharCode(c < 10 ? 48 + c : 65 + c - 10);
                            b["k" + u] = ("" + String(e)).replace(/~/g, "~~");
                            b["v" + u] = g;
                            c++
                        }
                }
            });
            var d = [];
            jb(b, function(e, f) {
                d.push("" + e + f)
            });
            return d.join("~")
        },
        Yf = {
            item_id: "id",
            item_name: "nm",
            item_brand: "br",
            item_category: "ca",
            item_category2: "c2",
            item_category3: "c3",
            item_category4: "c4",
            item_category5: "c5",
            item_variant: "va",
            price: "pr",
            quantity: "qt",
            coupon: "cp",
            item_list_name: "ln",
            index: "lp",
            item_list_id: "li",
            discount: "ds",
            affiliation: "af",
            promotion_id: "pi",
            promotion_name: "pn",
            creative_name: "cn",
            creative_slot: "cs",
            location_id: "lo"
        },
        Zf = {
            id: "id",
            name: "nm",
            brand: "br",
            variant: "va",
            list_name: "ln",
            list_position: "lp",
            list: "ln",
            position: "lp",
            creative: "cn"
        },
        $f = ["ca",
            "c2", "c3", "c4", "c5"
        ];
    var bg = function() {
        this.events = [];
        this.j = "";
        this.ja = {};
        this.baseUrl = "";
        this.H = 0;
        this.K = this.C = !1;
    };
    bg.prototype.add = function(a) {
        return this.P(a) ? (this.events.push(a), this.j = a.C, this.ja = a.ja, this.baseUrl = a.baseUrl, this.H += a.K, this.C = a.H, !0) : !1
    };
    bg.prototype.P = function(a) {
        return this.events.length ? this.events.length >= 20 || a.K + this.H >= 16384 ? !1 : this.baseUrl ===
            a.baseUrl && this.C === a.H && this.aa(a) : !0
    };
    bg.prototype.aa = function(a) {
        var b = this;
        if (!this.K) return this.j === a.C;
        var c = Object.keys(this.ja);
        return c.length === Object.keys(a.ja).length && c.every(function(d) {
            return a.ja.hasOwnProperty(d) && String(b.ja[d]) === String(a.ja[d])
        })
    };
    var cg = {},
        dg = (cg.uaa = !0, cg.uab = !0, cg.uafvl = !0, cg.uamb = !0, cg.uam = !0, cg.uap = !0, cg.uapv = !0, cg.uaw = !0, cg);
    var gg = function(a, b) {
            var c = a.events;
            if (c.length === 1) return eg(c[0], b);
            var d = [];
            a.j && d.push(a.j);
            for (var e = {}, f = 0; f < c.length; f++) jb(c[f].Rc, function(u, v) {
                v != null && (e[u] = e[u] || {}, e[u][String(v)] = e[u][String(v)] + 1 || 1)
            });
            var g = {};
            jb(e, function(u, v) {
                var t, w = -1,
                    x = 0;
                jb(v, function(y, A) {
                    x += A;
                    var B = (y.length + u.length + 2) * (A - 1);
                    B > w && (t = y, w = B)
                });
                x === c.length && (g[u] = t)
            });
            fg(g, d);
            b && d.push("_s=" + b);
            for (var k = d.join("&"), m = [], n = {}, p = 0; p < c.length; n = {
                    Zh: void 0
                }, p++) {
                var q = [];
                n.Zh = {};
                jb(c[p].Rc, function(u) {
                    return function(v,
                        t) {
                        g[v] !== "" + t && (u.Zh[v] = t)
                    }
                }(n));
                c[p].j && q.push(c[p].j);
                fg(n.Zh, q);
                m.push(q.join("&"))
            }
            var r = m.join("\r\n");
            return {
                params: k,
                body: r
            }
        },
        eg = function(a, b) {
            var c = [];
            a.C && c.push(a.C);
            b && c.push("_s=" + b);
            fg(a.Rc, c);
            var d = !1;
            a.j && (c.push(a.j), d = !0);
            var e = c.join("&"),
                f = "",
                g = e.length + a.baseUrl.length + 1;
            d && g > 2048 && (f = c.pop(), e = c.join("&"));
            return {
                params: e,
                body: f
            }
        },
        fg = function(a, b) {
            jb(a, function(c, d) {
                d != null && b.push(encodeURIComponent(c) + "=" + encodeURIComponent(d))
            })
        };
    var hg = function(a) {
            var b = [];
            jb(a, function(c, d) {
                d != null && b.push(encodeURIComponent(c) + "=" + encodeURIComponent(String(d)))
            });
            return b.join("&")
        },
        ig = function(a, b, c, d, e) {
            this.baseUrl = b;
            this.endpoint = c;
            this.ja = a.ja;
            this.Rc = a.Rc;
            this.Jh = a.Jh;
            this.H = d;
            this.C = hg(a.ja);
            this.j = hg(a.Jh);
            this.K = this.j.length;
            if (e && this.K > 16384) throw Error("EVENT_TOO_LARGE");
        };
    var lg = function(a, b) {
            for (var c = 0; c < b.length; c++) {
                var d = a,
                    e = b[c];
                if (!jg.exec(e)) throw Error("Invalid key wildcard");
                var f = e.indexOf(".*"),
                    g = f !== -1 && f === e.length - 2,
                    k = g ? e.slice(0, e.length - 2) : e,
                    m;
                a: if (d.length === 0) m = !1;
                    else {
                        for (var n = d.split("."), p = 0; p < n.length; p++)
                            if (!kg.exec(n[p])) {
                                m = !1;
                                break a
                            } m = !0
                    }
                if (!m || k.length > d.length || !g && d.length !== e.length ? 0 : g ? vb(d, k) && (d === k || d.charAt(k.length) === ".") : d === k) return !0
            }
            return !1
        },
        kg = /^[a-z$_][\w$]*$/i,
        jg = /^(?:[a-z_$][a-z_$0-9]*\.)*[a-z_$][a-z_$0-9]*(?:\.\*)?$/i;
    var mg = ["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"];

    function ng(a, b) {
        var c = String(a),
            d = String(b),
            e = c.length - d.length;
        return e >= 0 && c.indexOf(d, e) === e
    }
    var og = new ib;

    function pg(a, b, c) {
        var d = c ? "i" : void 0;
        try {
            var e = String(b) + String(d),
                f = og.get(e);
            f || (f = new RegExp(b, d), og.set(e, f));
            return f.test(a)
        } catch (g) {
            return !1
        }
    }

    function qg(a, b) {
        return String(a).indexOf(String(b)) >= 0
    }

    function rg(a, b) {
        return String(a) === String(b)
    }

    function sg(a, b) {
        return Number(a) >= Number(b)
    }

    function tg(a, b) {
        return Number(a) <= Number(b)
    }

    function ug(a, b) {
        return Number(a) > Number(b)
    }

    function vg(a, b) {
        return Number(a) < Number(b)
    }

    function wg(a, b) {
        return vb(String(a), String(b))
    };
    var Dg = /^([a-z][a-z0-9]*):(!|\?)(\*|string|boolean|number|Fn|PixieMap|List|OpaqueValue)$/i,
        Eg = {
            Fn: "function",
            PixieMap: "Object",
            List: "Array"
        };

    function K(a, b, c) {
        for (var d = 0; d < b.length; d++) {
            var e = Dg.exec(b[d]);
            if (!e) throw Error("Internal Error in " + a);
            var f = e[1],
                g = e[2] === "!",
                k = e[3],
                m = c[d];
            if (m == null) {
                if (g) throw Error("Error in " + a + ". Required argument " + f + " not supplied.");
            } else if (k !== "*") {
                var n = typeof m;
                m instanceof $c ? n = "Fn" : m instanceof Yc ? n = "List" : m instanceof La ? n = "PixieMap" : m instanceof gd ? n = "PixiePromise" : m instanceof ed && (n = "OpaqueValue");
                if (n !== k) throw Error("Error in " + a + ". Argument " + f + " has type " + ((Eg[n] || n) + ", which does not match required type ") +
                    ((Eg[k] || k) + "."));
            }
        }
    };

    function Fg(a) {
        return "" + a
    }

    function Gg(a, b) {
        var c = [];
        return c
    };

    function Hg(a, b) {
        var c = new $c(a, function() {
            for (var d = Array.prototype.slice.call(arguments, 0), e = 0; e < d.length; e++) d[e] = this.evaluate(d[e]);
            try {
                return b.apply(this, d)
            } catch (g) {
                if (id()) throw new kd(g.message);
                throw g;
            }
        });
        c.Ia();
        return c
    }

    function Ig(a, b) {
        var c = new La,
            d;
        for (d in b)
            if (b.hasOwnProperty(d)) {
                var e = b[d];
                bb(e) ? c.set(d, Hg(a + "_" + d, e)) : Uc(e) ? c.set(d, Ig(a + "_" + d, e)) : (cb(e) || z(e) || typeof e === "boolean") && c.set(d, e)
            } c.Ia();
        return c
    };

    function Jg(a, b) {
        K(this.getName(), ["apiName:!string", "message:?string"], arguments);
        var c = {},
            d = new La;
        return d = Ig("AssertApiSubject", c)
    };

    function Kg(a, b) {
        K(this.getName(), ["actual:?*", "message:?string"], arguments);
        if (a instanceof gd) throw Error("Argument actual cannot have type Promise. Assertions on asynchronous code aren't supported.");
        var c = {},
            d = new La;
        return d = Ig("AssertThatSubject", c)
    };

    function Lg(a) {
        return function() {
            for (var b = [], c = this.D, d = 0; d < arguments.length; ++d) b.push(G(arguments[d], c));
            return hd(a.apply(null, b))
        }
    }

    function Mg() {
        for (var a = Math, b = Ng, c = {}, d = 0; d < b.length; d++) {
            var e = b[d];
            a.hasOwnProperty(e) && (c[e] = Lg(a[e].bind(a)))
        }
        return c
    };

    function Og(a) {
        var b;
        return b
    };

    function Pg(a) {
        var b;
        K(this.getName(), ["uri:!string"], arguments);
        try {
            b = decodeURIComponent(a)
        } catch (c) {}
        return b
    };

    function Qg(a) {
        try {
            return encodeURI(a)
        } catch (b) {}
    };

    function Rg(a) {
        try {
            return encodeURIComponent(a)
        } catch (b) {}
    };
    var Sg = function(a, b) {
            for (var c = 0; c < b.length; c++) {
                if (a === void 0) return;
                a = a[b[c]]
            }
            return a
        },
        Tg = function(a, b) {
            var c = b.preHit;
            if (c) {
                var d = a[0];
                switch (d) {
                    case "hitData":
                        return a.length < 2 ? void 0 : Sg(c.getHitData(a[1]), a.slice(2));
                    case "metadata":
                        return a.length < 2 ? void 0 : Sg(c.getMetadata(a[1]), a.slice(2));
                    case "eventName":
                        return c.getEventName();
                    case "destinationId":
                        return c.getDestinationId();
                    default:
                        throw Error(d + " is not a valid field that can be accessed\n                      from PreHit data.");
                }
            }
        },
        Vg = function(a, b) {
            if (a) {
                if (a.contextValue !== void 0) {
                    var c;
                    a: {
                        var d = a.contextValue,
                            e = d.keyParts;
                        if (e && e.length !== 0) {
                            var f = d.namespaceType;
                            switch (f) {
                                case 1:
                                    c = Tg(e, b);
                                    break a;
                                case 2:
                                    var g = b.macro;
                                    c = g ? g[e[0]] : void 0;
                                    break a;
                                default:
                                    throw Error("Unknown Namespace Type used: " + f);
                            }
                        }
                        c = void 0
                    }
                    return c
                }
                if (a.booleanExpressionValue !== void 0) return Ug(a.booleanExpressionValue, b);
                if (a.booleanValue !== void 0) return !!a.booleanValue;
                if (a.stringValue !== void 0) return String(a.stringValue);
                if (a.integerValue !== void 0) return Number(a.integerValue);
                if (a.doubleValue !== void 0) return Number(a.doubleValue);
                throw Error("Unknown field used for variable of type ExpressionValue:" + a);
            }
        },
        Ug = function(a, b) {
            var c = a.args;
            if (!Array.isArray(c) || c.length === 0) throw Error('Invalid boolean expression format. Expected "args":' + c + " property to\n         be non-empty array.");
            var d = function(g) {
                return Vg(g, b)
            };
            switch (a.type) {
                case 1:
                    for (var e = 0; e < c.length; e++)
                        if (d(c[e])) return !0;
                    return !1;
                case 2:
                    for (var f = 0; f < c.length; f++)
                        if (!d(c[f])) return !1;
                    return c.length > 0;
                case 3:
                    return !d(c[0]);
                case 4:
                    return pg(d(c[0]), d(c[1]), !1);
                case 5:
                    return rg(d(c[0]), d(c[1]));
                case 6:
                    return wg(d(c[0]), d(c[1]));
                case 7:
                    return ng(d(c[0]), d(c[1]));
                case 8:
                    return qg(d(c[0]), d(c[1]));
                case 9:
                    return vg(d(c[0]), d(c[1]));
                case 10:
                    return tg(d(c[0]), d(c[1]));
                case 11:
                    return ug(d(c[0]), d(c[1]));
                case 12:
                    return sg(d(c[0]), d(c[1]));
                default:
                    throw Error('Invalid boolean expression format. Expected "type" property tobe a positive integer which is less than 13.');
            }
        };

    function Wg(a) {
        K(this.getName(), ["message:?string"], arguments);
    };

    function Xg(a, b) {
        K(this.getName(), ["min:!number", "max:!number"], arguments);
        return fb(a, b)
    };

    function Yg() {
        return (new Date).getTime()
    };

    function Zg(a) {
        if (a === null) return "null";
        if (a instanceof Yc) return "array";
        if (a instanceof $c) return "function";
        if (a instanceof ed) {
            var b;
            a = (b = a) == null ? void 0 : b.getValue();
            var c;
            if (((c = a) == null ? void 0 : c.constructor) === void 0 || a.constructor.name === void 0) {
                var d = String(a);
                return d.substring(8, d.length - 1)
            }
            return String(a.constructor.name)
        }
        return typeof a
    };

    function $g(a) {
        function b(c) {
            return function(d) {
                try {
                    return c(d)
                } catch (e) {
                    (Wf || Xf.Ek) && a.call(this, e.message)
                }
            }
        }
        return {
            parse: b(function(c) {
                return hd(JSON.parse(c))
            }),
            stringify: b(function(c) {
                return JSON.stringify(G(c))
            })
        }
    };

    function ah(a) {
        return math_round(G(a, this.D))
    };

    function bh(a) {
        return Number(G(a, this.D))
    };

    function ch(a) {
        return a === null ? "null" : a === void 0 ? "undefined" : a.toString()
    };

    function dh(a, b, c) {
        var d = null,
            e = !1;
        return e ? d : null
    };
    var Ng = "floor ceil round max min abs pow sqrt".split(" ");

    function eh() {
        var a = {};
        return {
            fm: function(b) {
                return a.hasOwnProperty(b) ? a[b] : void 0
            },
            Ak: function(b, c) {
                a[b] = c
            },
            reset: function() {
                a = {}
            }
        }
    }

    function fh(a, b) {
        return function() {
            var c = Array.prototype.slice.call(ya.apply(0, arguments), 0);
            c.unshift(b);
            return $c.prototype.invoke.apply(a, c)
        }
    }

    function gh(a, b) {
        K(this.getName(), ["apiName:!string", "mock:?*"], arguments);
    }

    function hh(a, b) {
        K(this.getName(), ["apiName:!string", "mock:!PixieMap"], arguments);
    };
    var ih = {};
    var jh = function(a) {
        var b = new La;
        if (a instanceof Yc)
            for (var c = a.ka(), d = 0; d < c.length; d++) {
                var e = c[d];
                a.has(e) && b.set(e, a.get(e))
            } else if (a instanceof $c)
                for (var f = a.ka(), g = 0; g < f.length; g++) {
                    var k = f[g];
                    b.set(k, a.get(k))
                } else
                    for (var m = 0; m < a.length; m++) b.set(m, a[m]);
        return b
    };
    ih.keys = function(a) {
        K(this.getName(), ["input:!*"], arguments);
        if (a instanceof Yc || a instanceof $c || typeof a === "string") a = jh(a);
        if (a instanceof La || a instanceof gd) return new Yc(a.ka());
        return new Yc
    };
    ih.values = function(a) {
        K(this.getName(), ["input:!*"], arguments);
        if (a instanceof Yc || a instanceof $c || typeof a === "string") a = jh(a);
        if (a instanceof La || a instanceof gd) return new Yc(a.Vb());
        return new Yc
    };
    ih.entries = function(a) {
        K(this.getName(), ["input:!*"], arguments);
        if (a instanceof Yc || a instanceof $c || typeof a === "string") a = jh(a);
        if (a instanceof La || a instanceof gd) return new Yc(a.Cb().map(function(b) {
            return new Yc(b)
        }));
        return new Yc
    };
    ih.freeze = function(a) {
        (a instanceof La || a instanceof gd || a instanceof Yc || a instanceof $c) && a.Ia();
        return a
    };
    ih.delete = function(a, b) {
        if (a instanceof La && !a.sc()) return a.remove(b), !0;
        return !1
    };

    function L(a, b) {
        var c = ya.apply(2, arguments),
            d = a.D.j;
        if (!d) throw Error("Missing program state.");
        if (d.gn) {
            try {
                d.ek.apply(null, [b].concat(oa(c)))
            } catch (e) {
                throw Va("TAGGING", 21), e;
            }
            return
        }
        d.ek.apply(null, [b].concat(oa(c)))
    };
    var kh = function() {
        this.C = {};
        this.j = {};
        this.H = !0;
    };
    kh.prototype.get = function(a, b) {
        var c = this.contains(a) ? this.C[a] : void 0;
        return c
    };
    kh.prototype.contains = function(a) {
        return this.C.hasOwnProperty(a)
    };
    kh.prototype.add = function(a, b, c) {
        if (this.contains(a)) throw Error("Attempting to add a function which already exists: " + a + ".");
        if (this.j.hasOwnProperty(a)) throw Error("Attempting to add an API with an existing private API name: " + a + ".");
        this.C[a] = c ? void 0 : bb(b) ? Hg(a, b) : Ig(a, b)
    };

    function lh(a, b) {
        var c = void 0;
        return c
    };

    function mh() {
        var a = {};
        return a
    };
    var O = {
            g: {
                za: "ad_personalization",
                O: "ad_storage",
                N: "ad_user_data",
                U: "analytics_storage",
                Jb: "region",
                Yb: "consent_updated",
                tf: "wait_for_update",
                Gi: "app_remove",
                Hi: "app_store_refund",
                Ii: "app_store_subscription_cancel",
                Ji: "app_store_subscription_convert",
                Ki: "app_store_subscription_renew",
                Qk: "consent_update",
                wg: "add_payment_info",
                xg: "add_shipping_info",
                wc: "add_to_cart",
                xc: "remove_from_cart",
                yg: "view_cart",
                Zb: "begin_checkout",
                yc: "select_item",
                pb: "view_item_list",
                Kb: "select_promotion",
                qb: "view_promotion",
                Ma: "purchase",
                zc: "refund",
                Qa: "view_item",
                zg: "add_to_wishlist",
                Rk: "exception",
                Li: "first_open",
                Mi: "first_visit",
                ba: "gtag.config",
                Ya: "gtag.get",
                Ni: "in_app_purchase",
                ac: "page_view",
                Sk: "screen_view",
                Oi: "session_start",
                Tk: "timing_complete",
                Uk: "track_social",
                Uc: "user_engagement",
                Vk: "user_id_update",
                Rd: "gclid_link_decoration_source",
                Sd: "gclid_storage_source",
                rb: "gclgb",
                Za: "gclid",
                wf: "gclgs",
                xf: "gcllp",
                yf: "gclst",
                ia: "ads_data_redaction",
                Pi: "gad_source",
                Qi: "gad_source_src",
                Ri: "ndclid",
                Si: "ngad_source",
                Ti: "ngbraid",
                Ui: "ngclid",
                Vi: "ngclsrc",
                Td: "gclid_url",
                Wi: "gclsrc",
                Ag: "gbraid",
                zf: "wbraid",
                ma: "allow_ad_personalization_signals",
                Af: "allow_custom_scripts",
                Ud: "allow_direct_google_requests",
                Bf: "allow_display_features",
                Vd: "allow_enhanced_conversions",
                sb: "allow_google_signals",
                Ea: "allow_interest_groups",
                Wk: "app_id",
                Xk: "app_installer_id",
                Yk: "app_name",
                Zk: "app_version",
                Lb: "auid",
                Xi: "auto_detection_enabled",
                bc: "aw_remarketing",
                Cf: "aw_remarketing_only",
                Wd: "discount",
                Xd: "aw_feed_country",
                Yd: "aw_feed_language",
                da: "items",
                Zd: "aw_merchant_id",
                Bg: "aw_basket_type",
                Vc: "campaign_content",
                Wc: "campaign_id",
                Xc: "campaign_medium",
                Yc: "campaign_name",
                Zc: "campaign",
                bd: "campaign_source",
                dd: "campaign_term",
                tb: "client_id",
                Yi: "rnd",
                Cg: "consent_update_type",
                Zi: "content_group",
                aj: "content_type",
                eb: "conversion_cookie_prefix",
                ed: "conversion_id",
                ra: "conversion_linker",
                bj: "conversion_linker_disabled",
                fc: "conversion_api",
                Df: "cookie_deprecation",
                Ra: "cookie_domain",
                Sa: "cookie_expires",
                ab: "cookie_flags",
                Ac: "cookie_name",
                vb: "cookie_path",
                Na: "cookie_prefix",
                hc: "cookie_update",
                Bc: "country",
                Aa: "currency",
                Dg: "customer_buyer_stage",
                ae: "customer_lifetime_value",
                Eg: "customer_loyalty",
                Fg: "customer_ltv_bucket",
                fd: "custom_map",
                Gg: "gcldc",
                be: "dclid",
                Hg: "debug_mode",
                fa: "developer_id",
                cj: "disable_merchant_reported_purchases",
                gd: "dc_custom_params",
                dj: "dc_natural_search",
                Ig: "dynamic_event_settings",
                Jg: "affiliation",
                ce: "checkout_option",
                Ef: "checkout_step",
                Kg: "coupon",
                hd: "item_list_name",
                Ff: "list_name",
                ej: "promotions",
                jd: "shipping",
                Gf: "tax",
                de: "engagement_time_msec",
                ee: "enhanced_client_id",
                fe: "enhanced_conversions",
                Lg: "enhanced_conversions_automatic_settings",
                he: "estimated_delivery_date",
                Hf: "euid_logged_in_state",
                kd: "event_callback",
                al: "event_category",
                fb: "event_developer_id_string",
                bl: "event_label",
                Cc: "event",
                ie: "event_settings",
                je: "event_timeout",
                fl: "description",
                il: "fatal",
                fj: "experiments",
                If: "firebase_id",
                Dc: "first_party_collection",
                ke: "_x_20",
                wb: "_x_19",
                gj: "fledge_drop_reason",
                Mg: "fledge",
                Ng: "flight_error_code",
                Og: "flight_error_message",
                ij: "fl_activity_category",
                jj: "fl_activity_group",
                Pg: "fl_advertiser_id",
                kj: "fl_ar_dedupe",
                Qg: "match_id",
                lj: "fl_random_number",
                mj: "tran",
                nj: "u",
                me: "gac_gclid",
                Ec: "gac_wbraid",
                Rg: "gac_wbraid_multiple_conversions",
                Sg: "ga_restrict_domain",
                Tg: "ga_temp_client_id",
                jl: "ga_temp_ecid",
                ic: "gdpr_applies",
                Ug: "geo_granularity",
                Mb: "value_callback",
                xb: "value_key",
                Fc: "_google_ng",
                Gc: "google_signals",
                Vg: "google_tld",
                ne: "groups",
                Wg: "gsa_experiment_id",
                oj: "gtm_up",
                Nb: "iframe_state",
                ld: "ignore_referrer",
                Jf: "internal_traffic_results",
                jc: "is_legacy_converted",
                Ob: "is_legacy_loaded",
                oe: "is_passthrough",
                md: "_lps",
                Ta: "language",
                pe: "legacy_developer_id_string",
                sa: "linker",
                Hc: "accept_incoming",
                yb: "decorate_forms",
                X: "domains",
                Pb: "url_position",
                Kf: "merchant_feed_label",
                Lf: "merchant_feed_language",
                Mf: "merchant_id",
                Xg: "method",
                kl: "name",
                nd: "new_customer",
                Yg: "non_interaction",
                pj: "optimize_id",
                Zg: "page_hostname",
                od: "page_path",
                Fa: "page_referrer",
                ib: "page_title",
                ah: "passengers",
                bh: "phone_conversion_callback",
                qj: "phone_conversion_country_code",
                eh: "phone_conversion_css_class",
                rj: "phone_conversion_ids",
                fh: "phone_conversion_number",
                gh: "phone_conversion_options",
                hh: "_protected_audience_enabled",
                pd: "quantity",
                qe: "redact_device_info",
                Nf: "referral_exclusion_definition",
                Qb: "restricted_data_processing",
                sj: "retoken",
                ml: "sample_rate",
                Of: "screen_name",
                Rb: "screen_resolution",
                tj: "_script_source",
                uj: "search_term",
                Oa: "send_page_view",
                kc: "send_to",
                rd: "server_container_url",
                sd: "session_duration",
                se: "session_engaged",
                Pf: "session_engaged_time",
                zb: "session_id",
                te: "session_number",
                Qf: "_shared_user_id",
                ud: "delivery_postal_code",
                nl: "temporary_client_id",
                Rf: "topmost_url",
                vj: "tracking_id",
                Sf: "traffic_type",
                Ba: "transaction_id",
                Sb: "transport_url",
                ih: "trip_type",
                nc: "update",
                cb: "url_passthrough",
                wj: "uptgs",
                Tf: "_user_agent_architecture",
                Uf: "_user_agent_bitness",
                Vf: "_user_agent_full_version_list",
                Wf: "_user_agent_mobile",
                Xf: "_user_agent_model",
                Yf: "_user_agent_platform",
                Zf: "_user_agent_platform_version",
                cg: "_user_agent_wow64",
                Ga: "user_data",
                jh: "user_data_auto_latency",
                kh: "user_data_auto_meta",
                lh: "user_data_auto_multi",
                mh: "user_data_auto_selectors",
                nh: "user_data_auto_status",
                vd: "user_data_mode",
                ue: "user_data_settings",
                Ca: "user_id",
                jb: "user_properties",
                xj: "_user_region",
                wd: "us_privacy_string",
                na: "value",
                oh: "wbraid_multiple_conversions",
                xd: "_fpm_parameters",
                Ej: "_host_name",
                Fj: "_in_page_command",
                Gj: "_ip_override",
                Hj: "_is_passthrough_cid",
                Tb: "non_personalized_ads",
                De: "_sst_parameters",
                ub: "conversion_label",
                wa: "page_location",
                hb: "global_developer_id_string",
                mc: "tc_privacy_string"
            }
        },
        nh = {},
        oh = Object.freeze((nh[O.g.ma] =
            1, nh[O.g.Bf] = 1, nh[O.g.Vd] = 1, nh[O.g.sb] = 1, nh[O.g.da] = 1, nh[O.g.Ra] = 1, nh[O.g.Sa] = 1, nh[O.g.ab] = 1, nh[O.g.Ac] = 1, nh[O.g.vb] = 1, nh[O.g.Na] = 1, nh[O.g.hc] = 1, nh[O.g.fd] = 1, nh[O.g.fa] = 1, nh[O.g.Ig] = 1, nh[O.g.kd] = 1, nh[O.g.ie] = 1, nh[O.g.je] = 1, nh[O.g.Dc] = 1, nh[O.g.Sg] = 1, nh[O.g.Gc] = 1, nh[O.g.Vg] = 1, nh[O.g.ne] = 1, nh[O.g.Jf] = 1, nh[O.g.jc] = 1, nh[O.g.Ob] = 1, nh[O.g.sa] = 1, nh[O.g.Nf] = 1, nh[O.g.Qb] = 1, nh[O.g.Oa] = 1, nh[O.g.kc] = 1, nh[O.g.rd] = 1, nh[O.g.sd] = 1, nh[O.g.Pf] = 1, nh[O.g.ud] = 1, nh[O.g.Sb] = 1, nh[O.g.nc] = 1, nh[O.g.ue] = 1, nh[O.g.jb] = 1, nh[O.g.De] =
            1, nh));
    Object.freeze([O.g.wa, O.g.Fa, O.g.ib, O.g.Ta, O.g.Of, O.g.Ca, O.g.If, O.g.Zi]);
    var ph = {},
        qh = Object.freeze((ph[O.g.Gi] = 1, ph[O.g.Hi] = 1, ph[O.g.Ii] = 1, ph[O.g.Ji] = 1, ph[O.g.Ki] = 1, ph[O.g.Li] = 1, ph[O.g.Mi] = 1, ph[O.g.Ni] = 1, ph[O.g.Oi] = 1, ph[O.g.Uc] = 1, ph)),
        rh = {},
        sh = Object.freeze((rh[O.g.wg] = 1, rh[O.g.xg] = 1, rh[O.g.wc] = 1, rh[O.g.xc] = 1, rh[O.g.yg] = 1, rh[O.g.Zb] = 1, rh[O.g.yc] = 1, rh[O.g.pb] = 1, rh[O.g.Kb] = 1, rh[O.g.qb] = 1, rh[O.g.Ma] = 1, rh[O.g.zc] = 1, rh[O.g.Qa] = 1, rh[O.g.zg] = 1, rh)),
        th = Object.freeze([O.g.ma, O.g.Ud, O.g.sb, O.g.hc, O.g.Dc, O.g.ld, O.g.Oa, O.g.nc]),
        uh = Object.freeze([].concat(oa(th))),
        vh = Object.freeze([O.g.Sa,
            O.g.je, O.g.sd, O.g.Pf, O.g.de
        ]),
        wh = Object.freeze([].concat(oa(vh))),
        zh = {},
        Ah = (zh[O.g.O] = "1", zh[O.g.U] = "2", zh[O.g.N] = "3", zh[O.g.za] = "4", zh),
        Bh = {},
        Ch = Object.freeze((Bh[O.g.Rd] = 1, Bh[O.g.Sd] = 1, Bh[O.g.ma] = 1, Bh[O.g.Ud] = 1, Bh[O.g.Vd] = 1, Bh[O.g.Ea] = 1, Bh[O.g.bc] = 1, Bh[O.g.Cf] = 1, Bh[O.g.Wd] = 1, Bh[O.g.Xd] = 1, Bh[O.g.Yd] = 1, Bh[O.g.da] = 1, Bh[O.g.Zd] = 1, Bh[O.g.eb] = 1, Bh[O.g.ra] = 1, Bh[O.g.Ra] = 1, Bh[O.g.Sa] = 1, Bh[O.g.ab] = 1, Bh[O.g.Na] = 1, Bh[O.g.Aa] = 1, Bh[O.g.Dg] = 1, Bh[O.g.ae] = 1, Bh[O.g.Eg] = 1, Bh[O.g.Fg] = 1, Bh[O.g.fa] = 1, Bh[O.g.cj] = 1, Bh[O.g.fe] =
            1, Bh[O.g.he] = 1, Bh[O.g.If] = 1, Bh[O.g.Dc] = 1, Bh[O.g.jc] = 1, Bh[O.g.Ob] = 1, Bh[O.g.Ta] = 1, Bh[O.g.Kf] = 1, Bh[O.g.Lf] = 1, Bh[O.g.Mf] = 1, Bh[O.g.nd] = 1, Bh[O.g.wa] = 1, Bh[O.g.Fa] = 1, Bh[O.g.bh] = 1, Bh[O.g.eh] = 1, Bh[O.g.fh] = 1, Bh[O.g.gh] = 1, Bh[O.g.Qb] = 1, Bh[O.g.Oa] = 1, Bh[O.g.kc] = 1, Bh[O.g.rd] = 1, Bh[O.g.ud] = 1, Bh[O.g.Ba] = 1, Bh[O.g.Sb] = 1, Bh[O.g.nc] = 1, Bh[O.g.cb] = 1, Bh[O.g.Ga] = 1, Bh[O.g.Ca] = 1, Bh[O.g.na] = 1, Bh)),
        Dh = {},
        Eh = Object.freeze((Dh.search = "s", Dh.youtube = "y", Dh.playstore = "p", Dh.shopping = "h", Dh.ads = "a", Dh.maps = "m", Dh));
    Object.freeze(O.g);
    var P = {},
        Fh = (P[O.g.Yb] = "gcu", P[O.g.rb] = "gclgb", P[O.g.Za] = "gclaw", P[O.g.wf] = "gclgs", P[O.g.xf] = "gcllp", P[O.g.yf] = "gclst", P[O.g.Ri] = "ndclid", P[O.g.Si] = "ngad_source", P[O.g.Ti] = "ngbraid", P[O.g.Ui] = "ngclid", P[O.g.Vi] = "ngclsrc", P[O.g.Lb] = "auid", P[O.g.Wd] = "dscnt", P[O.g.Xd] = "fcntr", P[O.g.Yd] = "flng", P[O.g.Zd] = "mid", P[O.g.Bg] = "bttype", P[O.g.ub] = "label", P[O.g.fc] = "capi", P[O.g.Df] = "pscdl", P[O.g.Aa] = "currency_code", P[O.g.Dg] = "clobs", P[O.g.ae] = "vdltv", P[O.g.Eg] = "clolo", P[O.g.Fg] = "clolb", P[O.g.Hg] = "_dbg", P[O.g.he] =
            "oedeld", P[O.g.fb] = "edid", P[O.g.gj] = "fdr", P[O.g.Mg] = "fledge", P[O.g.me] = "gac", P[O.g.Ec] = "gacgb", P[O.g.Rg] = "gacmcov", P[O.g.ic] = "gdpr", P[O.g.hb] = "gdid", P[O.g.Fc] = "_ng", P[O.g.Wg] = "gsaexp", P[O.g.Nb] = "frm", P[O.g.oe] = "gtm_up", P[O.g.md] = "lps", P[O.g.pe] = "did", P[O.g.Kf] = "fcntr", P[O.g.Lf] = "flng", P[O.g.Mf] = "mid", P[O.g.nd] = void 0, P[O.g.ib] = "tiba", P[O.g.Qb] = "rdp", P[O.g.zb] = "ecsid", P[O.g.Qf] = "ga_uid", P[O.g.ud] = "delopc", P[O.g.mc] = "gdpr_consent", P[O.g.Ba] = "oid", P[O.g.wj] = "uptgs", P[O.g.Tf] = "uaa", P[O.g.Uf] = "uab", P[O.g.Vf] =
            "uafvl", P[O.g.Wf] = "uamb", P[O.g.Xf] = "uam", P[O.g.Yf] = "uap", P[O.g.Zf] = "uapv", P[O.g.cg] = "uaw", P[O.g.jh] = "ec_lat", P[O.g.kh] = "ec_meta", P[O.g.lh] = "ec_m", P[O.g.mh] = "ec_sel", P[O.g.nh] = "ec_s", P[O.g.vd] = "ec_mode", P[O.g.Ca] = "userId", P[O.g.wd] = "us_privacy", P[O.g.na] = "value", P[O.g.oh] = "mcov", P[O.g.Ej] = "hn", P[O.g.Fj] = "gtm_ee", P[O.g.Tb] = "npa", P[O.g.ed] = null, P[O.g.Rb] = null, P[O.g.Ta] = null, P[O.g.da] = null, P[O.g.wa] = null, P[O.g.Fa] = null, P[O.g.Rf] = null, P[O.g.xd] = null, P[O.g.Rd] = null, P[O.g.Sd] = null, P);

    function Gh(a, b) {
        if (a) {
            var c = a.split("x");
            c.length === 2 && (Hh(b, "u_w", c[0]), Hh(b, "u_h", c[1]))
        }
    }

    function Ih(a, b) {
        a && (a.length === 2 ? Hh(b, "hl", a) : a.length === 5 && (Hh(b, "hl", a.substring(0, 2)), Hh(b, "gl", a.substring(3, 5))))
    }

    function Jh(a) {
        var b = Kh;
        b = b === void 0 ? Lh : b;
        var c;
        var d = b;
        if (a && a.length) {
            for (var e = [], f = 0; f < a.length; ++f) {
                var g = a[f];
                g && e.push({
                    item_id: d(g),
                    quantity: g.quantity,
                    value: g.price,
                    start_date: g.start_date,
                    end_date: g.end_date
                })
            }
            c = e
        } else c = [];
        var k;
        var m = c;
        if (m) {
            for (var n = [], p = 0; p < m.length; p++) {
                var q = m[p],
                    r = [];
                q && (r.push(Mh(q.value)), r.push(Mh(q.quantity)), r.push(Mh(q.item_id)), r.push(Mh(q.start_date)), r.push(Mh(q.end_date)), n.push("(" + r.join("*") + ")"))
            }
            k = n.length > 0 ? n.join("") : ""
        } else k = "";
        return k
    }

    function Lh(a) {
        return Nh(a.item_id, a.id, a.item_name)
    }

    function Nh() {
        for (var a = l(ya.apply(0, arguments)), b = a.next(); !b.done; b = a.next()) {
            var c = b.value;
            if (c !== null && c !== void 0) return c
        }
    }

    function Oh(a) {
        if (a && a.length) {
            for (var b = [], c = 0; c < a.length; ++c) {
                var d = a[c];
                d && d.estimated_delivery_date ? b.push("" + d.estimated_delivery_date) : b.push("")
            }
            return b.join(",")
        }
    }

    function Hh(a, b, c) {
        c === void 0 || c === null || c === "" && !dg[b] || (a[b] = c)
    }

    function Mh(a) {
        return typeof a !== "number" && typeof a !== "string" ? "" : a.toString()
    };

    function Ph(a) {
        return Qh ? E.querySelectorAll(a) : null
    }

    function Rh(a, b) {
        if (!Qh) return null;
        if (Element.prototype.closest) try {
            return a.closest(b)
        } catch (e) {
            return null
        }
        var c = Element.prototype.matches || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector,
            d = a;
        if (!E.documentElement.contains(d)) return null;
        do {
            try {
                if (c.call(d, b)) return d
            } catch (e) {
                break
            }
            d = d.parentElement || d.parentNode
        } while (d !== null && d.nodeType === 1);
        return null
    }
    var Sh = !1;
    if (E.querySelectorAll) try {
        var Th = E.querySelectorAll(":root");
        Th && Th.length == 1 && Th[0] == E.documentElement && (Sh = !0)
    } catch (a) {}
    var Qh = Sh;

    function Uh(a) {
        switch (a) {
            case 0:
                break;
            case 9:
                return "e4";
            case 6:
                return "e5";
            case 14:
                return "e6";
            default:
                return "e7"
        }
    };
    var Vh = /^[0-9A-Fa-f]{64}$/;

    function Wh(a) {
        try {
            return (new TextEncoder).encode(a)
        } catch (e) {
            for (var b = [], c = 0; c < a.length; c++) {
                var d = a.charCodeAt(c);
                d < 128 ? b.push(d) : d < 2048 ? b.push(192 | d >> 6, 128 | d & 63) : d < 55296 || d >= 57344 ? b.push(224 | d >> 12, 128 | d >> 6 & 63, 128 | d & 63) : (d = 65536 + ((d & 1023) << 10 | a.charCodeAt(++c) & 1023), b.push(240 | d >> 18, 128 | d >> 12 & 63, 128 | d >> 6 & 63, 128 | d & 63))
            }
            return new Uint8Array(b)
        }
    }

    function Xh(a) {
        if (a === "" || a === "e0") return Promise.resolve(a);
        var b;
        if ((b = C.crypto) == null ? 0 : b.subtle) {
            if (Vh.test(a)) return Promise.resolve(a);
            try {
                var c = Wh(a);
                return C.crypto.subtle.digest("SHA-256", c).then(function(d) {
                    var e = Array.from(new Uint8Array(d)).map(function(f) {
                        return String.fromCharCode(f)
                    }).join("");
                    return C.btoa(e).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "")
                }).catch(function() {
                    return "e2"
                })
            } catch (d) {
                return Promise.resolve("e2")
            }
        } else return Promise.resolve("e1")
    };

    function Yh(a, b) {
        if (a === "") return b;
        var c = Number(a);
        return isNaN(c) ? b : c
    };
    var Zh = [];

    function $h(a) {
        switch (a) {
            case 0:
                return 0;
            case 44:
                return 1;
            case 45:
                return 2;
            case 46:
                return 9;
            case 51:
                return 3;
            case 66:
                return 4;
            case 89:
                return 5;
            case 91:
                return 6;
            case 109:
                return 7;
            case 110:
                return 11;
            case 111:
                return 8
        }
    }

    function ai(a, b) {
        Zh[a] = b;
        var c = $h(a);
        c !== void 0 && (Ya[c] = b)
    }

    function Q(a) {
        ai(a, !0)
    }
    Q(33);
    Q(29);
    Q(30);
    Q(31);
    Q(32);
    Q(47);
    Q(81);
    Q(16);
    Q(118);
    Q(15);
    Q(124);
    Q(117);
    Q(67);
    Q(92);
    Q(6);
    Q(48);
    Q(4);
    Q(79);
    Q(85);
    Q(113);
    Q(77);
    Q(72);
    Q(90);
    Q(129);
    Q(104);

    Q(125);
    Q(91);
    Q(5);
    ai(19, !1), Q(20);
    Q(109);
    Za[1] = Yh('1', 6E4);
    Za[3] = Yh('10', 1);
    Za[2] = Yh('', 50);
    Q(25);
    Q(13);
    Q(71);
    Q(114);
    var ci = !1;
    Q(8);
    Q(96);
    Q(60);
    Q(128);
    Q(50);
    Q(111);
    Q(99);
    Q(23);
    Q(51);
    Q(63);
    Q(110);
    Q(74);
    Q(76);
    Q(87);
    Q(54);
    Q(52);
    Q(100);

    function S(a) {
        return !!Zh[a]
    }

    function bi(a, b) {
        for (var c = !1, d = !1, e = 0; c === d;)
            if (c = ((Math.random() * 4294967296 | 0) & 1) === 0, d = ((Math.random() * 4294967296 | 0) & 1) === 0, e++, e > 30) return;
        c ? Q(b) : Q(a)
    }

    function U(a) {
        Va("GTM", a)
    };
    var hi = function(a) {
            var b = S(103);
            b = b === void 0 ? !1 : b;
            var c = {},
                d = ["tv.1"],
                e = 0;
            var t =
                d.join("~"),
                w = {
                    userData: c
                };
            return b ? {
                Dk: t,
                qg: w,
                Fk: e,
                Tl: "tv.1~${" + (t + "|encrypt}"),
                encryptionKeyString: gi()
            } : {
                Dk: t,
                qg: w,
                Fk: e
            }
        },
        ei = function(a) {
            return ii.indexOf(a) !== -1
        },
        gi = function() {
            return '{\x22keys\x22:[{\x22id\x22:\x22079ec22a-d3f1-46e7-abc0-848a6d551873\x22,\x22hpkePublicKey\x22:{\x22version\x22:0,\x22params\x22:{\x22kem\x22:\x22DHKEM_P256_HKDF_SHA256\x22,\x22kdf\x22:\x22HKDF_SHA256\x22,\x22aead\x22:\x22AES_128_GCM\x22},\x22publicKey\x22:\x22BOHoyhwwMHtWFS+PXF8I/7emKbQqOO8bhQSFfhEFi82Ym1vWB2O4+Sk78P4zs1eURTS3nzezmh2Hm+X8WjVH0+o\x3d\x22}},{\x22id\x22:\x223c94c280-f04a-499f-b802-f04df8cecd32\x22,\x22hpkePublicKey\x22:{\x22version\x22:0,\x22params\x22:{\x22kem\x22:\x22DHKEM_P256_HKDF_SHA256\x22,\x22kdf\x22:\x22HKDF_SHA256\x22,\x22aead\x22:\x22AES_128_GCM\x22},\x22publicKey\x22:\x22BJnDh63rmJuqfwGhek0SYHuX+VLyJS1UU2VV3kEbvK3G8diloHX51NPqMzIgR+hz1Ipd02HzYlX4sNlx8nrOq2s\x3d\x22}},{\x22id\x22:\x2259a1f68a-3874-4d65-9e80-c0910818efe9\x22,\x22hpkePublicKey\x22:{\x22version\x22:0,\x22params\x22:{\x22kem\x22:\x22DHKEM_P256_HKDF_SHA256\x22,\x22kdf\x22:\x22HKDF_SHA256\x22,\x22aead\x22:\x22AES_128_GCM\x22},\x22publicKey\x22:\x22BL1FalTfAoTghE9pOBecbTt4xAbAdq0rkapgOtChb4mTbA2UX5kY3q7LYMAlcPIPqxcKfPurWXHDj9ROwbDgxVQ\x3d\x22}},{\x22id\x22:\x22ad49812c-f069-4ab3-9f5e-e95e4f287f88\x22,\x22hpkePublicKey\x22:{\x22version\x22:0,\x22params\x22:{\x22kem\x22:\x22DHKEM_P256_HKDF_SHA256\x22,\x22kdf\x22:\x22HKDF_SHA256\x22,\x22aead\x22:\x22AES_128_GCM\x22},\x22publicKey\x22:\x22BAu2UbcNHABhYxIfKzUPOYzKZRGk9hXXI3cEma07UyCi2nllYQDVvNXX6Pq5Tk+9vUAdwq18sbx8mRlme4Sff1I\x3d\x22}},{\x22id\x22:\x22c72045d2-d41d-43fe-ad75-a45e2225de56\x22,\x22hpkePublicKey\x22:{\x22version\x22:0,\x22params\x22:{\x22kem\x22:\x22DHKEM_P256_HKDF_SHA256\x22,\x22kdf\x22:\x22HKDF_SHA256\x22,\x22aead\x22:\x22AES_128_GCM\x22},\x22publicKey\x22:\x22BATjD5M/kDmaYQDYfh0utf70Df3dsDPLxvnpzZa87bSFXICPhBM1BNAZimH9x4S0m6g7+ZAaqtjuiG61xi1Z84Y\x3d\x22}}]}'
        },
        ki = function(a, b) {
            if (C.Promise) {
                var c = void 0;
                return c
            }
        },
        mi = function(a, b, c) {
            if (C.Promise) try {
                var d = new Promise(function(e) {
                    li(a, e)
                });
                return d
            } catch (e) {}
        },
        ni = function(a) {
            if (C.Promise) try {
                return new Promise(function(b) {
                    li(a, function(c) {
                        b(c)
                    })
                })
            } catch (b) {}
        },
        oi = function(a) {
            for (var b = a.jf, c = a.time, d = ["tv.1"], e = 0, f = !1, g = 0; g < b.length; ++g) {
                var k = b[g].name,
                    m = b[g].value,
                    n = b[g].index,
                    p = di[k];
                p && m && (!ei(k) || /^e\d+$/.test(m) || fi.test(m) || Vh.test(m)) && (n !== void 0 && (p += n), d.push(p + "." + m), e++)
            }
            b.length === 1 && b[0].name === "error_code" && (e = 0, f = !0);
            return {
                Gb: encodeURIComponent(d.join("~")),
                Ld: e,
                time: c,
                jg: f
            }
        },
        li = function(a, b) {
            pi(a, function(c) {
                b(oi(c))
            })
        },
        xi = function(a) {
            function b(r, u, v, t) {
                var w = qi(r);
                w !== "" && (Vh.test(w) ? k.push({
                    name: u,
                    value: w,
                    index: t
                }) : k.push({
                    name: u,
                    value: v(w),
                    index: t
                }))
            }

            function c(r, u) {
                var v = r;
                if (z(v) || Array.isArray(v)) {
                    v = db(r);
                    for (var t = 0; t < v.length; ++t) {
                        var w = qi(v[t]),
                            x = Vh.test(w);
                        u && !x && U(89);
                        !u && x && U(88)
                    }
                }
            }

            function d(r, u) {
                var v = r[u];
                c(v, !1);
                var t = ri[u];
                r[t] && (r[u] && U(90), v = r[t], c(v, !0));
                return v
            }

            function e(r, u, v) {
                for (var t = db(d(r, u)), w = 0; w < t.length; ++w) b(t[w],
                    u, v)
            }

            function f(r, u, v, t) {
                var w = d(r, u);
                b(w, u, v, t)
            }

            function g(r) {
                return function(u) {
                    U(64);
                    return r(u)
                }
            }
            var k = [];
            if (C.location.protocol !== "https:") return k.push({
                name: "error_code",
                value: "e3",
                index: void 0
            }), k;
            e(a, "email", si);
            e(a, "phone_number", ti);
            e(a, "first_name", g(ui));
            e(a, "last_name", g(ui));
            var m = a.home_address || {};
            e(m, "street", g(vi));
            e(m, "city", g(vi));
            e(m, "postal_code", g(wi));
            e(m, "region", g(vi));
            e(m, "country", g(wi));
            for (var n = db(a.address || {}), p = 0; p < n.length; p++) {
                var q = n[p];
                f(q, "first_name", ui, p);
                f(q, "last_name", ui, p);
                f(q, "street", vi, p);
                f(q, "city", vi, p);
                f(q, "postal_code", wi, p);
                f(q, "region", vi, p);
                f(q, "country", wi, p)
            }
            return k
        },
        yi = function(a) {
            var b = a ? xi(a) : [];
            return oi({
                jf: b
            })
        },
        zi = function(a) {
            return a && a != null && Object.keys(a).length > 0 && C.Promise ? xi(a).some(function(b) {
                return b.value && ei(b.name) && !Vh.test(b.value)
            }) : !1
        },
        pi = function(a, b) {
            var c = xi(a);
            Ai(c, b)
        },
        qi = function(a) {
            return a == null ? "" : z(a) ? ob(String(a)) : "e0"
        },
        wi = function(a) {
            return a.replace(Bi, "")
        },
        ui = function(a) {
            return vi(a.replace(/\s/g,
                ""))
        },
        vi = function(a) {
            return ob(a.replace(Ci, "").toLowerCase())
        },
        ti = function(a) {
            a = a.replace(/[\s-()/.]/g, "");
            a.charAt(0) !== "+" && (a = "+" + a);
            return Di.test(a) ? a : "e0"
        },
        si = function(a) {
            var b = a.toLowerCase().split("@");
            if (b.length === 2) {
                var c = b[0];
                /^(gmail|googlemail)\./.test(b[1]) && (c = c.replace(/\./g, ""));
                c = c + "@" + b[1];
                if (Ei.test(c)) return c
            }
            return "e0"
        },
        Ai = function(a, b) {
            var c = !1;
            if (c = S(54) ? !a.some(function(e) {
                    return e.value && ei(e.name)
                }) : a.some(function(e) {
                    e.value && ei(e.name)
                })) b({
                jf: a
            });
            else if (C.Promise) {
                var d;
                if (S(53) || S(83)) d = Hc();
                Promise.all(a.map(function(e) {
                    return e.value && ei(e.name) ? Xh(e.value).then(function(f) {
                        e.value = f
                    }) : Promise.resolve()
                })).then(function() {
                    var e = {
                        jf: a
                    };
                    if (d !== void 0) {
                        var f = Hc();
                        d && f && (e.time = Math.round(f) - Math.round(d))
                    }
                    b(e)
                }).catch(function() {
                    b({
                        jf: []
                    })
                })
            } else b({
                jf: []
            })
        },
        Ci = /[0-9`~!@#$%^&*()_\-+=:;<>,.?|/\\[\]]/g,
        Ei = /^\S+@\S+\.\S+$/,
        Di = /^\+\d{10,15}$/,
        Bi = /[.~]/g,
        fi = /^[0-9A-Za-z_-]{43}$/,
        Fi = {},
        di = (Fi.email = "em", Fi.phone_number = "pn", Fi.first_name = "fn", Fi.last_name = "ln", Fi.street =
            "sa", Fi.city = "ct", Fi.region = "rg", Fi.country = "co", Fi.postal_code = "pc", Fi.error_code = "ec", Fi),
        Gi = {},
        ri = (Gi.email = "sha256_email_address", Gi.phone_number = "sha256_phone_number", Gi.first_name = "sha256_first_name", Gi.last_name = "sha256_last_name", Gi.street = "sha256_street", Gi);
    var ii = Object.freeze(["email", "phone_number", "first_name", "last_name", "street"]);
    var Hi = {},
        Ii = C.google_tag_manager = C.google_tag_manager || {};
    Hi.th = "4b70";
    Hi.Ce = Number("0") || 0;
    Hi.ob = "dataLayer";
    Hi.Cn = "ChAIgIq3uQYQkKirgr6ygqkOEiUAu4ow19J5/7/qF+0xdzBkwQ0wxYSAje0ZyIJpw1h9t+9Qi9/oGgJ/3g\x3d\x3d";
    var Ji = {
            __cl: 1,
            __ecl: 1,
            __ehl: 1,
            __evl: 1,
            __fal: 1,
            __fil: 1,
            __fsl: 1,
            __hl: 1,
            __jel: 1,
            __lcl: 1,
            __sdl: 1,
            __tl: 1,
            __ytl: 1
        },
        Ki = {
            __paused: 1,
            __tg: 1
        },
        Li;
    for (Li in Ji) Ji.hasOwnProperty(Li) && (Ki[Li] = 1);
    var Mi = mb("true"),
        Ni = !1,
        Oi, Pi = !1;
    Pi = !0;
    Oi = Pi;
    var Qi, Ri = !1;
    Qi = Ri;
    var Si, Ti = !1;
    Si = Ti;
    Hi.vf = "www.googletagmanager.com";
    var Ui = "" + Hi.vf + (Oi ? "/gtag/js" : "/gtm.js"),
        Vi = null,
        Wi = null,
        Xi = {},
        Yi = {};

    function Zi() {
        var a = Ii.sequence || 1;
        Ii.sequence = a + 1;
        return a
    }
    Hi.Ok = "true";
    var $i = "";
    Hi.uh = $i;
    var aj = new function() {
        this.j = "";
        this.H = !1;
        this.C = 0;
        this.P = this.aa = this.Ua = this.K = ""
    };

    function bj() {
        var a = aj.K.length;
        return aj.K[a - 1] === "/" ? aj.K.substring(0, a - 1) : aj.K
    }

    function cj() {
        return aj.H && aj.C !== 1
    }

    function dj(a) {
        for (var b = {}, c = l(a.split("|")), d = c.next(); !d.done; d = c.next()) b[d.value] = !0;
        return b
    }
    var ej = new ib,
        fj = {},
        gj = {},
        jj = {
            name: Hi.ob,
            set: function(a, b) {
                Vc(yb(a, b), fj);
                hj()
            },
            get: function(a) {
                return ij(a, 2)
            },
            reset: function() {
                ej = new ib;
                fj = {};
                hj()
            }
        };

    function ij(a, b) {
        return b != 2 ? ej.get(a) : kj(a)
    }

    function kj(a, b) {
        var c = a.split(".");
        b = b || [];
        for (var d = fj, e = 0; e < c.length; e++) {
            if (d === null) return !1;
            if (d === void 0) break;
            d = d[c[e]];
            if (b.indexOf(d) !== -1) return
        }
        return d
    }

    function lj(a, b) {
        gj.hasOwnProperty(a) || (ej.set(a, b), Vc(yb(a, b), fj), hj())
    }

    function mj() {
        for (var a = ["gtm.allowlist", "gtm.blocklist", "gtm.whitelist", "gtm.blacklist", "tagTypeBlacklist"], b = 0; b < a.length; b++) {
            var c = a[b],
                d = ij(c, 1);
            if (Array.isArray(d) || Uc(d)) d = Vc(d, null);
            gj[c] = d
        }
    }

    function hj(a) {
        jb(gj, function(b, c) {
            ej.set(b, c);
            Vc(yb(b), fj);
            Vc(yb(b, c), fj);
            a && delete gj[b]
        })
    }

    function nj(a, b) {
        var c, d = (b === void 0 ? 2 : b) !== 1 ? kj(a) : ej.get(a);
        Sc(d) === "array" || Sc(d) === "object" ? c = Vc(d, null) : c = d;
        return c
    };
    var oj = function(a, b, c) {
            if (!c) return !1;
            for (var d = String(c.value), e, f = d.replace(/\["?'?/g, ".").replace(/"?'?\]/g, "").split(","), g = 0; g < f.length; g++) {
                var k = f[g].trim();
                if (k && !vb(k, "#") && !vb(k, ".")) {
                    if (vb(k, "dataLayer.")) e = ij(k.substring(10));
                    else {
                        var m = k.split(".");
                        e = C[m.shift()];
                        for (var n = 0; n < m.length; n++) e = e && e[m[n]]
                    }
                    if (e !== void 0) break
                }
            }
            if (e === void 0 && Qh) try {
                var p = Ph(d);
                if (p && p.length > 0) {
                    e = [];
                    for (var q = 0; q < p.length && q < (b === "email" || b === "phone_number" ? 5 : 1); q++) e.push(xc(p[q]) || ob(p[q].value));
                    e = e.length ===
                        1 ? e[0] : e
                }
            } catch (r) {
                U(149)
            }
            return e ? (a[b] = e, !0) : !1
        },
        pj = function(a) {
            if (a) {
                var b = {},
                    c = !1;
                c = oj(b, "email", a.email) || c;
                c = oj(b, "phone_number", a.phone) || c;
                b.address = [];
                for (var d = a.name_and_address || [], e = 0; e < d.length; e++) {
                    var f = {};
                    c = oj(f, "first_name", d[e].first_name) || c;
                    c = oj(f, "last_name", d[e].last_name) || c;
                    c = oj(f, "street", d[e].street) || c;
                    c = oj(f, "city", d[e].city) || c;
                    c = oj(f, "region", d[e].region) || c;
                    c = oj(f, "country", d[e].country) || c;
                    c = oj(f, "postal_code", d[e].postal_code) || c;
                    b.address.push(f)
                }
                return c ? b : void 0
            }
        },
        qj = function(a, b) {
            switch (a.enhanced_conversions_mode) {
                case "manual":
                    if (b && Uc(b)) return b;
                    var c = a.enhanced_conversions_manual_var;
                    if (c !== void 0) return c;
                    var d = C.enhanced_conversion_data;
                    d && U(154);
                    return d;
                case "automatic":
                    return pj(a[O.g.Lg])
            }
        },
        rj = function(a) {
            return Uc(a) ? !!a.enable_code : !1
        };
    var sj = /:[0-9]+$/,
        tj = /^\d+\.fls\.doubleclick\.net$/;

    function uj(a, b, c, d) {
        for (var e = [], f = l(a.split("&")), g = f.next(); !g.done; g = f.next()) {
            var k = l(g.value.split("=")),
                m = k.next().value,
                n = na(k);
            if (decodeURIComponent(m.replace(/\+/g, " ")) === b) {
                var p = n.join("=");
                if (!c) return d ? p : decodeURIComponent(p.replace(/\+/g, " "));
                e.push(d ? p : decodeURIComponent(p.replace(/\+/g, " ")))
            }
        }
        return c ? e : void 0
    }

    function vj(a, b, c, d, e) {
        b && (b = String(b).toLowerCase());
        if (b === "protocol" || b === "port") a.protocol = wj(a.protocol) || wj(C.location.protocol);
        b === "port" ? a.port = String(Number(a.hostname ? a.port : C.location.port) || (a.protocol === "http" ? 80 : a.protocol === "https" ? 443 : "")) : b === "host" && (a.hostname = (a.hostname || C.location.hostname).replace(sj, "").toLowerCase());
        return xj(a, b, c, d, e)
    }

    function xj(a, b, c, d, e) {
        var f, g = wj(a.protocol);
        b && (b = String(b).toLowerCase());
        switch (b) {
            case "url_no_fragment":
                f = yj(a);
                break;
            case "protocol":
                f = g;
                break;
            case "host":
                f = a.hostname.replace(sj, "").toLowerCase();
                if (c) {
                    var k = /^www\d*\./.exec(f);
                    k && k[0] && (f = f.substring(k[0].length))
                }
                break;
            case "port":
                f = String(Number(a.port) || (g === "http" ? 80 : g === "https" ? 443 : ""));
                break;
            case "path":
                a.pathname || a.hostname || Va("TAGGING", 1);
                f = a.pathname.substring(0, 1) === "/" ? a.pathname : "/" + a.pathname;
                var m = f.split("/");
                (d || []).indexOf(m[m.length -
                    1]) >= 0 && (m[m.length - 1] = "");
                f = m.join("/");
                break;
            case "query":
                f = a.search.replace("?", "");
                e && (f = uj(f, e, !1));
                break;
            case "extension":
                var n = a.pathname.split(".");
                f = n.length > 1 ? n[n.length - 1] : "";
                f = f.split("/")[0];
                break;
            case "fragment":
                f = a.hash.replace("#", "");
                break;
            default:
                f = a && a.href
        }
        return f
    }

    function wj(a) {
        return a ? a.replace(":", "").toLowerCase() : ""
    }

    function yj(a) {
        var b = "";
        if (a && a.href) {
            var c = a.href.indexOf("#");
            b = c < 0 ? a.href : a.href.substring(0, c)
        }
        return b
    }
    var zj = {},
        Aj = 0;

    function Bj(a) {
        var b = zj[a];
        if (!b) {
            var c = E.createElement("a");
            a && (c.href = a);
            var d = c.pathname;
            d[0] !== "/" && (a || Va("TAGGING", 1), d = "/" + d);
            var e = c.hostname.replace(sj, "");
            b = {
                href: c.href,
                protocol: c.protocol,
                host: c.host,
                hostname: e,
                pathname: d,
                search: c.search,
                hash: c.hash,
                port: c.port
            };
            Aj < 5 && (zj[a] = b, Aj++)
        }
        return b
    }

    function Cj(a) {
        var b = Bj(C.location.href),
            c = vj(b, "host", !1);
        if (c && c.match(tj)) {
            var d = vj(b, "path");
            if (d) {
                var e = d.split(a + "=");
                if (e.length > 1) return e[1].split(";")[0].split("?")[0]
            }
        }
    }

    function Dj(a) {
        for (var b = 0; b < 3; ++b) try {
            var c = decodeURIComponent(a).replace(/\+/g, " ");
            if (c === a) break;
            a = c
        } catch (d) {
            return ""
        }
        return a
    };
    var Ej = {
        "https://www.google.com": "/g",
        "https://www.googleadservices.com": "/as",
        "https://pagead2.googlesyndication.com": "/gs"
    };

    function Fj(a, b) {
        if (a) {
            var c = "" + a;
            c.indexOf("http://") !== 0 && c.indexOf("https://") !== 0 && (c = "https://" + c);
            c[c.length - 1] === "/" && (c = c.substring(0, c.length - 1));
            return Bj("" + c + b).href
        }
    }

    function Gj(a, b) {
        if (cj() || Qi) return Fj(a, b)
    }

    function Hj() {
        return !!Hi.uh && Hi.uh.split("@@").join("") !== "SGTM_TOKEN"
    }

    function Ij(a) {
        for (var b = l([O.g.rd, O.g.Sb]), c = b.next(); !c.done; c = b.next()) {
            var d = V(a, c.value);
            if (d) return d
        }
    }

    function Jj(a, b) {
        //console.log(">>>> Jj", a, b);
        return cj() ? "" + bj() + (b ? Ej[a] || "" : "") : a
    };

    function Kj(a) {
        var b = String(a[Le.oa] || "").replace(/_/g, "");
        return vb(b, "cvt") ? "cvt" : b
    }
    var Lj = C.location.search.indexOf("?gtm_latency=") >= 0 || C.location.search.indexOf("&gtm_latency=") >= 0;
    var Mj = {
            sampleRate: "0.005000",
            Kk: "",
            An: "0.01"
        },
        Nj = Math.random(),
        Oj;
    if (!(Oj = Lj)) {
        var Pj = Mj.sampleRate;
        Oj = Nj < Number(Pj)
    }
    var Qj = Oj,
        Rj = (jc == null ? void 0 : jc.includes("gtm_debug=d")) || Lj || Nj >= 1 - Number(Mj.An);
    var Sj = /gtag[.\/]js/,
        Tj = /gtm[.\/]js/,
        Xj = !1;

    function Yj(a) {
        if (Xj) return "1";
        var b, c = (b = a.scriptElement) == null ? void 0 : b.src;
        if (c) {
            if (Sj.test(c)) return "3";
            if (Tj.test(c)) return "2"
        }
        return "0"
    }

    function Zj(a, b) {
        var c = ak();
        c.pending || (c.pending = []);
        eb(c.pending, function(d) {
            return d.target.ctid === a.ctid && d.target.isDestination === a.isDestination
        }) || c.pending.push({
            target: a,
            onLoad: b
        })
    }

    function bk() {
        var a = C.google_tags_first_party;
        Array.isArray(a) || (a = []);
        for (var b = {}, c = l(a), d = c.next(); !d.done; d = c.next()) b[d.value] = !0;
        return Object.freeze(b)
    }
    var ck = function() {
        this.container = {};
        this.destination = {};
        this.canonical = {};
        this.pending = [];
        this.siloed = [];
        this.injectedFirstPartyContainers = {};
        this.injectedFirstPartyContainers = bk()
    };

    function ak() {
        console.log("a");
        var a = kc("google_tag_data", {}),
            b = a.tidr;
        b && typeof b === "object" || (b = new ck, a.tidr = b);
        var c = b;
        c.container || (c.container = {});
        c.destination || (c.destination = {});
        c.canonical || (c.canonical = {});
        c.pending || (c.pending = []);
        c.siloed || (c.siloed = []);
        c.injectedFirstPartyContainers || (c.injectedFirstPartyContainers = bk());
        return c
    };
    var dk = {},
        ek = !1,
        Pf = {
            ctid: "G-TR5E2D5Y8N",
            canonicalContainerId: "191473170",
            qk: "G-TR5E2D5Y8N|GT-WRCZP569",
            rk: "G-TR5E2D5Y8N"
        };
    dk.ze = mb("");

    function fk() {
        return dk.ze && gk().some(function(a) {
            return a === Pf.ctid
        })
    }

    function hk() {
        var a = ik();
        return ek ? a.map(jk) : a
    }

    function kk() {
        var a = gk();
        return ek ? a.map(jk) : a
    }

    function lk() {
        return mk(Pf.ctid)
    }

    function nk() {
        return mk(Pf.canonicalContainerId || "_" + Pf.ctid)
    }

    function ik() {
        return Pf.qk ? Pf.qk.split("|") : [Pf.ctid]
    }

    function gk() {
        return Pf.rk ? Pf.rk.split("|") : []
    }

    function ok() {
        var a = pk(qk()),
            b = a && a.parent;
        if (b) return pk(b)
    }

    function pk(a) {
        var b = ak();
        return a.isDestination ? b.destination[a.ctid] : b.container[a.ctid]
    }

    function mk(a) {
        return ek ? jk(a) : a
    }

    function jk(a) {
        return "siloed_" + a
    }

    function rk(a) {
        return ek ? sk(a) : a
    }

    function sk(a) {
        a = String(a);
        return vb(a, "siloed_") ? a.substring(7) : a
    }

    function tk() {
        var a = !1;
        if (a) {
            var b = ak();
            if (b.siloed) {
                for (var c = [], d = ik().map(jk), e = gk().map(jk), f = {}, g = 0; g < b.siloed.length; f = {
                        hg: void 0
                    }, g++) f.hg = b.siloed[g], !ek && eb(f.hg.isDestination ? e : d, function(k) {
                    return function(m) {
                        return m === k.hg.ctid
                    }
                }(f)) ? ek = !0 : c.push(f.hg);
                b.siloed = c
            }
        }
    }

    function uk() {
        var a = ak();
        if (a.pending) {
            for (var b, c = [], d = !1, e = hk(), f = kk(), g = {}, k = 0; k < a.pending.length; g = {
                    ff: void 0
                }, k++) g.ff = a.pending[k], eb(g.ff.target.isDestination ? f : e, function(m) {
                return function(n) {
                    return n === m.ff.target.ctid
                }
            }(g)) ? d || (b = g.ff.onLoad, d = !0) : c.push(g.ff);
            a.pending = c;
            if (b) try {
                b(nk())
            } catch (m) {}
        }
    }

    function vk() {
        for (var a = Pf.ctid, b = hk(), c = kk(), d = function(n, p) {
                var q = {
                    canonicalContainerId: Pf.canonicalContainerId,
                    scriptContainerId: a,
                    state: 2,
                    containers: b.slice(),
                    destinations: c.slice()
                };
                ic && (q.scriptElement = ic);
                jc && (q.scriptSource = jc);
                if (ok() === void 0) {
                    var r;
                    a: {
                        if ((q.scriptContainerId || "").indexOf("GTM-") >= 0) {
                            var u;
                            b: {
                                var v, t = (v = q.scriptElement) == null ? void 0 : v.src;
                                if (t) {
                                    for (var w = aj.H, x = Bj(t), y = w ? x.pathname : "" + x.hostname + x.pathname, A = E.scripts, B = "", D = 0; D < A.length; ++D) {
                                        var I = A[D];
                                        if (!(I.innerHTML.length ===
                                                0 || !w && I.innerHTML.indexOf(q.scriptContainerId || "SHOULD_NOT_BE_SET") < 0 || I.innerHTML.indexOf(y) < 0)) {
                                            if (I.innerHTML.indexOf("(function(w,d,s,l,i)") >= 0) {
                                                u = String(D);
                                                break b
                                            }
                                            B = String(D)
                                        }
                                    }
                                    if (B) {
                                        u = B;
                                        break b
                                    }
                                }
                                u = void 0
                            }
                            var J = u;
                            if (J) {
                                Xj = !0;
                                r = J;
                                break a
                            }
                        }
                        var H = [].slice.call(document.scripts);r = q.scriptElement ? String(H.indexOf(q.scriptElement)) : "-1"
                    }
                    q.htmlLoadOrder = r;
                    q.loadScriptType = Yj(q)
                }
                var W = p ? e.destination : e.container,
                    N = W[n];
                N ? (p && N.state === 0 && U(93), Object.assign(N, q)) : W[n] = q
            }, e = ak(), f = l(b), g = f.next(); !g.done; g =
            f.next()) d(g.value, !1);
        for (var k = l(c), m = k.next(); !m.done; m = k.next()) d(m.value, !0);
        e.canonical[nk()] = {};
        uk()
    }

    function wk(a) {
        return !!ak().container[a]
    }

    function xk(a) {
        var b = ak().destination[a];
        return !!b && !!b.state
    }

    function qk() {
        return {
            ctid: lk(),
            isDestination: dk.ze
        }
    }

    function yk(a) {
        var b = ak();
        (b.siloed = b.siloed || []).push(a)
    }

    function zk() {
        var a = ak().container,
            b;
        for (b in a)
            if (a.hasOwnProperty(b) && a[b].state === 1) return !0;
        return !1
    }

    function Ak() {
        var a = {};
        jb(ak().destination, function(b, c) {
            c.state === 0 && (a[sk(b)] = c)
        });
        return a
    }

    function Bk(a) {
        return !!(a && a.parent && a.context && a.context.source === 1 && a.parent.ctid.indexOf("GTM-") !== 0)
    }
    var Ck = "/td?id=" + Pf.ctid,
        Dk = ["v", "t", "pid", "dl", "tdp"],
        Ek = ["mcc"],
        Fk = {},
        Gk = {};

    function Hk(a, b, c) {
        Gk[a] = b;
        (c === void 0 || c) && Ik(a)
    }

    function Ik(a, b) {
        if (Fk[a] === void 0 || (b === void 0 ? 0 : b)) Fk[a] = !0
    }

    function Jk(a) {
        a = a === void 0 ? !1 : a;
        var b = Object.keys(Fk).filter(function(c) {
            return Fk[c] === !0 && Gk[c] !== void 0 && (a || !Ek.includes(c))
        }).map(function(c) {
            var d = Gk[c];
            typeof d === "function" && (d = d());
            return d ? "&" + c + "=" + d : ""
        }).join("");
        return "" + Jj("https://www.googletagmanager.com") + Ck + ("" + b + "&z=0")
    }

    function Kk() {
        Object.keys(Fk).forEach(function(a) {
            Dk.indexOf(a) < 0 && (Fk[a] = !1)
        })
    }

    function Lk(a) {
        a = a === void 0 ? !1 : a;
        if (Rj && Pf.ctid) {
            var b = Jk(a);
            a ? Dc(b) : sc(b);
            Kk()
        }
    }

    function Mk() {
        Object.keys(Fk).filter(function(a) {
            return Fk[a] && !Dk.includes(a)
        }).length > 0 && Lk(!0)
    }
    var Nk = fb();

    function Ok() {
        Nk = fb()
    }

    function Pk() {
        Hk("v", "3");
        Hk("t", "t");
        Hk("pid", function() {
            return String(Nk)
        });
        uc(C, "pagehide", Mk);
        C.setInterval(Ok, 864E5)
    }

    function Qk() {
        console.log("b");
        var a = kc("google_tag_data", {});
        return a.ics = a.ics || new Rk
    }
    var Rk = function() {
        this.entries = {};
        this.waitPeriodTimedOut = this.wasSetLate = this.accessedAny = this.accessedDefault = this.usedImplicit = this.usedUpdate = this.usedDefault = this.usedDeclare = this.active = !1;
        this.j = []
    };
    Rk.prototype.default = function(a, b, c, d, e, f, g) {
        this.usedDefault || this.usedDeclare || !this.accessedDefault && !this.accessedAny || (this.wasSetLate = !0);
        this.usedDefault = this.active = !0;
        Va("TAGGING", 19);
        b == null ? Va("TAGGING", 18) : Sk(this, a, b === "granted", c, d, e, f, g)
    };
    Rk.prototype.waitForUpdate = function(a, b, c) {
        for (var d = 0; d < a.length; d++) Sk(this, a[d], void 0, void 0, "", "", b, c)
    };
    var Sk = function(a, b, c, d, e, f, g, k) {
        var m = a.entries,
            n = m[b] || {},
            p = n.region,
            q = d && z(d) ? d.toUpperCase() : void 0;
        e = e.toUpperCase();
        f = f.toUpperCase();
        if (e === "" || q === f || (q === e ? p !== f : !q && !p)) {
            var r = !!(g && g > 0 && n.update === void 0),
                u = {
                    region: q,
                    declare_region: n.declare_region,
                    implicit: n.implicit,
                    default: c !== void 0 ? c : n.default,
                    declare: n.declare,
                    update: n.update,
                    quiet: r
                };
            if (e !== "" || n.default !== !1) m[b] = u;
            r && C.setTimeout(function() {
                m[b] === u && u.quiet && (Va("TAGGING", 2), a.waitPeriodTimedOut = !0, a.clearTimeout(b, void 0, k),
                    a.notifyListeners())
            }, g)
        }
    };
    h = Rk.prototype;
    h.clearTimeout = function(a, b, c) {
        var d = [a],
            e = c.delegatedConsentTypes,
            f;
        for (f in e) e.hasOwnProperty(f) && e[f] === a && d.push(f);
        var g = this.entries[a] || {},
            k = this.getConsentState(a, c);
        if (g.quiet) {
            g.quiet = !1;
            for (var m = l(d), n = m.next(); !n.done; n = m.next()) Tk(this, n.value)
        } else if (b !== void 0 && k !== b)
            for (var p = l(d), q = p.next(); !q.done; q = p.next()) Tk(this, q.value)
    };
    h.update = function(a, b, c) {
        this.usedDefault || this.usedDeclare || this.usedUpdate || !this.accessedAny || (this.wasSetLate = !0);
        this.usedUpdate = this.active = !0;
        if (b != null) {
            var d = this.getConsentState(a, c),
                e = this.entries;
            (e[a] = e[a] || {}).update = b === "granted";
            this.clearTimeout(a, d, c)
        }
    };
    h.declare = function(a, b, c, d, e) {
        this.usedDeclare = this.active = !0;
        var f = this.entries,
            g = f[a] || {},
            k = g.declare_region,
            m = c && z(c) ? c.toUpperCase() : void 0;
        d = d.toUpperCase();
        e = e.toUpperCase();
        if (d === "" || m === e || (m === d ? k !== e : !m && !k)) {
            var n = {
                region: g.region,
                declare_region: m,
                declare: b === "granted",
                implicit: g.implicit,
                default: g.default,
                update: g.update,
                quiet: g.quiet
            };
            if (d !== "" || g.declare !== !1) f[a] = n
        }
    };
    h.implicit = function(a, b) {
        this.usedImplicit = !0;
        var c = this.entries,
            d = c[a] = c[a] || {};
        d.implicit !== !1 && (d.implicit = b === "granted")
    };
    h.getConsentState = function(a, b) {
        var c = this.entries,
            d = c[a] || {},
            e = d.update;
        if (e !== void 0) return e ? 1 : 2;
        if (b.usedContainerScopedDefaults) {
            var f = b.containerScopedDefaults[a];
            if (f === 3) return 1;
            if (f === 2) return 2
        } else if (e = d.default, e !== void 0) return e ? 1 : 2;
        if (b == null ? 0 : b.delegatedConsentTypes.hasOwnProperty(a)) {
            var g = b.delegatedConsentTypes[a],
                k = c[g] || {};
            e = k.update;
            if (e !== void 0) return e ? 1 : 2;
            if (b.usedContainerScopedDefaults) {
                var m = b.containerScopedDefaults[g];
                if (m === 3) return 1;
                if (m === 2) return 2
            } else if (e =
                k.default, e !== void 0) return e ? 1 : 2
        }
        e = d.declare;
        if (e !== void 0) return e ? 1 : 2;
        e = d.implicit;
        return e !== void 0 ? e ? 3 : 4 : 0
    };
    h.addListener = function(a, b) {
        this.j.push({
            consentTypes: a,
            Ed: b
        })
    };
    var Tk = function(a, b) {
        for (var c = 0; c < a.j.length; ++c) {
            var d = a.j[c];
            Array.isArray(d.consentTypes) && d.consentTypes.indexOf(b) !== -1 && (d.sk = !0)
        }
    };
    Rk.prototype.notifyListeners = function(a, b) {
        for (var c = 0; c < this.j.length; ++c) {
            var d = this.j[c];
            if (d.sk) {
                d.sk = !1;
                try {
                    d.Ed({
                        consentEventId: a,
                        consentPriorityId: b
                    })
                } catch (e) {}
            }
        }
    };
    var Uk = !1,
        Vk = !1,
        Wk = {},
        Xk = {
            delegatedConsentTypes: {},
            corePlatformServices: {},
            usedCorePlatformServices: !1,
            selectedAllCorePlatformServices: !1,
            containerScopedDefaults: (Wk.ad_storage = 1, Wk.analytics_storage = 1, Wk.ad_user_data = 1, Wk.ad_personalization = 1, Wk),
            usedContainerScopedDefaults: !1
        };

    function Yk(a) {
        var b = Qk();
        b.accessedAny = !0;
        return (z(a) ? [a] : a).every(function(c) {
            switch (b.getConsentState(c, Xk)) {
                case 1:
                case 3:
                    return !0;
                case 2:
                case 4:
                    return !1;
                default:
                    return !0
            }
        })
    }

    function Zk(a) {
        var b = Qk();
        b.accessedAny = !0;
        return b.getConsentState(a, Xk)
    }

    function $k(a) {
        for (var b = {}, c = l(a), d = c.next(); !d.done; d = c.next()) {
            var e = d.value;
            b[e] = Xk.corePlatformServices[e] !== !1
        }
        return b
    }

    function al(a) {
        var b = Qk();
        b.accessedAny = !0;
        return !(b.entries[a] || {}).quiet
    }

    function bl() {
        if (!$a(10)) return !1;
        var a = Qk();
        a.accessedAny = !0;
        if (a.active) return !0;
        if (!Xk.usedContainerScopedDefaults) return !1;
        for (var b = l(Object.keys(Xk.containerScopedDefaults)), c = b.next(); !c.done; c = b.next())
            if (Xk.containerScopedDefaults[c.value] !== 1) return !0;
        return !1
    }

    function cl(a, b) {
        Qk().addListener(a, b)
    }

    function dl(a, b) {
        Qk().notifyListeners(a, b)
    }

    function el(a, b) {
        function c() {
            for (var e = 0; e < b.length; e++)
                if (!al(b[e])) return !0;
            return !1
        }
        if (c()) {
            var d = !1;
            cl(b, function(e) {
                d || c() || (d = !0, a(e))
            })
        } else a({})
    }

    function fl(a, b) {
        function c() {
            for (var k = [], m = 0; m < e.length; m++) {
                var n = e[m];
                Yk(n) && !f[n] && k.push(n)
            }
            return k
        }

        function d(k) {
            for (var m = 0; m < k.length; m++) f[k[m]] = !0
        }
        var e = z(b) ? [b] : b,
            f = {},
            g = c();
        g.length !== e.length && (d(g), cl(e, function(k) {
            function m(q) {
                q.length !== 0 && (d(q), k.consentTypes = q, a(k))
            }
            var n = c();
            if (n.length !== 0) {
                var p = Object.keys(f).length;
                n.length + p >= e.length ? m(n) : C.setTimeout(function() {
                    m(c())
                }, 500)
            }
        }))
    };
    var gl = ["ad_storage", "analytics_storage", "ad_user_data", "ad_personalization"],
        hl = !1,
        il = !1;

    function jl() {
        !il && hl && (gl.some(function(a) {
            return Xk.containerScopedDefaults[a] !== 1
        }) || kl("mbc"));
        il = !0
    }

    function kl(a) {
        Rj && (Hk(a, "1"), Lk())
    }

    function ll(a) {
        Va("HEALTH", a)
    };
    var ml;
    try {
        ml = JSON.parse(Ta("eyIwIjoiQlIiLCIxIjoiQlItU1AiLCIyIjpmYWxzZSwiMyI6Imdvb2dsZS5jb20uYnIiLCI0IjoiIiwiNSI6ZmFsc2UsIjYiOmZhbHNlLCI3IjoiYWRfc3RvcmFnZXxhbmFseXRpY3Nfc3RvcmFnZXxhZF91c2VyX2RhdGF8YWRfcGVyc29uYWxpemF0aW9uIn0"))
    } catch (a) {
        U(123), ll(2), ml = {}
    }

    function nl() {
        return ml["0"] || ""
    }

    function ol() {
        return ml["1"] || ""
    }

    function pl() {
        var a = !1;
        a = !!ml["2"];
        return a
    }

    function ql() {
        return ml["6"] !== !1
    }

    function rl() {
        var a = "";
        a = ml["4"] || "";
        return a
    }

    function sl() {
        var a = !1;
        a = !!ml["5"];
        return a
    }

    function tl() {
        var a = "";
        a = ml["3"] || "";
        return a
    }
    var ul = [O.g.O, O.g.U, O.g.N, O.g.za],
        vl, wl;

    function xl(a) {
        for (var b = a[O.g.Jb], c = Array.isArray(b) ? b : [b], d = {
                Ue: 0
            }; d.Ue < c.length; d = {
                Ue: d.Ue
            }, ++d.Ue) jb(a, function(e) {
            return function(f, g) {
                if (f !== O.g.Jb) {
                    var k = c[e.Ue],
                        m = nl(),
                        n = ol();
                    Vk = !0;
                    Uk && Va("TAGGING", 20);
                    Qk().declare(f, g, k, m, n)
                }
            }
        }(d))
    }

    function yl(a) {
        jl();
        !wl && vl && kl("crc");
        wl = !0;
        var b = a[O.g.Jb];
        b && U(40);
        var c = a[O.g.tf];
        c && U(41);
        for (var d = Array.isArray(b) ? b : [b], e = {
                Ve: 0
            }; e.Ve < d.length; e = {
                Ve: e.Ve
            }, ++e.Ve) jb(a, function(f) {
            return function(g, k) {
                if (g !== O.g.Jb && g !== O.g.tf) {
                    var m = d[f.Ve],
                        n = Number(c),
                        p = nl(),
                        q = ol();
                    n = n === void 0 ? 0 : n;
                    Uk = !0;
                    Vk && Va("TAGGING", 20);
                    Qk().default(g, k, m, p, q, n, Xk)
                }
            }
        }(e))
    }

    function zl(a) {
        Xk.usedContainerScopedDefaults = !0;
        var b = a[O.g.Jb];
        if (b) {
            var c = Array.isArray(b) ? b : [b];
            if (!c.includes(ol()) && !c.includes(nl())) return
        }
        jb(a, function(d, e) {
            switch (d) {
                case "ad_storage":
                case "analytics_storage":
                case "ad_user_data":
                case "ad_personalization":
                    break;
                default:
                    return
            }
            Xk.usedContainerScopedDefaults = !0;
            Xk.containerScopedDefaults[d] = e === "granted" ? 3 : 2
        })
    }

    function Al(a, b) {
        jl();
        vl = !0;
        jb(a, function(c, d) {
            Uk = !0;
            Vk && Va("TAGGING", 20);
            Qk().update(c, d, Xk)
        });
        dl(b.eventId, b.priorityId)
    }

    function Bl(a) {
        a.hasOwnProperty("all") && (Xk.selectedAllCorePlatformServices = !0, jb(Eh, function(b) {
            Xk.corePlatformServices[b] = a.all === "granted";
            Xk.usedCorePlatformServices = !0
        }));
        jb(a, function(b, c) {
            b !== "all" && (Xk.corePlatformServices[b] = c === "granted", Xk.usedCorePlatformServices = !0)
        })
    }

    function X(a) {
        Array.isArray(a) || (a = [a]);
        return a.every(function(b) {
            return Yk(b)
        })
    }

    function Cl(a, b) {
        cl(a, b)
    }

    function Dl(a, b) {
        fl(a, b)
    }

    function El(a, b) {
        el(a, b)
    }

    function Fl() {
        var a = [O.g.O, O.g.za, O.g.N];
        Qk().waitForUpdate(a, 500, Xk)
    }

    function Gl(a) {
        for (var b = l(a), c = b.next(); !c.done; c = b.next()) {
            var d = c.value;
            Qk().clearTimeout(d, void 0, Xk)
        }
        dl()
    }
    var Hl = !1,
        Il = [];
    var Jl = {
            Tj: "service_worker_endpoint",
            vh: "shared_user_id",
            wh: "shared_user_id_requested",
            Ee: "shared_user_id_source",
            uf: "cookie_deprecation_label"
        },
        Kl;

    function Ll(a) {
        if (!Kl) {
            Kl = {};
            for (var b = l(Object.keys(Jl)), c = b.next(); !c.done; c = b.next()) Kl[Jl[c.value]] = !0
        }
        return !!Kl[a]
    }

    function Ml(a, b) {
        b = b === void 0 ? !1 : b;
        if (Ll(a)) {
            console.log("c");
            var c, d, e = (d = (c = kc("google_tag_data", {})).xcd) != null ? d : c.xcd = {};
            if (e[a]) return e[a];
            if (b) {
                var f = void 0,
                    g = 1,
                    k = {},
                    m = {
                        set: function(n) {
                            f = n;
                            m.notify()
                        },
                        get: function() {
                            return f
                        },
                        subscribe: function(n) {
                            k[String(g)] = n;
                            return g++
                        },
                        unsubscribe: function(n) {
                            var p = String(n);
                            return k.hasOwnProperty(p) ? (delete k[p], !0) : !1
                        },
                        notify: function() {
                            for (var n = l(Object.keys(k)), p = n.next(); !p.done; p = n.next()) {
                                var q = p.value;
                                try {
                                    k[q](a, f)
                                } catch (r) {}
                            }
                        }
                    };
                return e[a] = m
            }
        }
    }

    function Nl(a, b) {
        var c = Ml(a, !0);
        c && c.set(b)
    }

    function Ol(a) {
        var b;
        return (b = Ml(a)) == null ? void 0 : b.get()
    }

    function Pl(a, b) {
        if (typeof b === "function") {
            var c;
            return (c = Ml(a, !0)) == null ? void 0 : c.subscribe(b)
        }
    }

    function Ql(a, b) {
        var c = Ml(a);
        return c ? c.unsubscribe(b) : !1
    };

    function Rl() {
        if (Ii.pscdl !== void 0) Ol(Jl.uf) === void 0 && Nl(Jl.uf, Ii.pscdl);
        else {
            var a = function(c) {
                    Ii.pscdl = c;
                    Nl(Jl.uf, c)
                },
                b = function() {
                    a("error")
                };
            try {
                gc.cookieDeprecationLabel ? (a("pending"), gc.cookieDeprecationLabel.getValue().then(a).catch(b)) : a("noapi")
            } catch (c) {
                b(c)
            }
        }
    };

    function Sl(a, b) {
        b && jb(b, function(c, d) {
            typeof d !== "object" && d !== void 0 && (a["1p." + c] = String(d))
        })
    };
    var Tl = /[A-Z]+/,
        Ul = /\s/;

    function Vl(a, b) {
        if (z(a)) {
            a = ob(a);
            var c = a.indexOf("-");
            if (!(c < 0)) {
                var d = a.substring(0, c);
                if (Tl.test(d)) {
                    var e = a.substring(c + 1),
                        f;
                    if (b) {
                        var g = function(n) {
                            var p = n.indexOf("/");
                            return p < 0 ? [n] : [n.substring(0, p), n.substring(p + 1)]
                        };
                        f = g(e);
                        if (d === "DC" && f.length === 2) {
                            var k = g(f[1]);
                            k.length === 2 && (f[1] = k[0], f.push(k[1]))
                        }
                    } else {
                        f = e.split("/");
                        for (var m = 0; m < f.length; m++)
                            if (!f[m] || Ul.test(f[m]) && (d !== "AW" || m !== 1)) return
                    }
                    return {
                        id: a,
                        prefix: d,
                        destinationId: d + "-" + f[0],
                        ids: f
                    }
                }
            }
        }
    }

    function Wl(a, b) {
        for (var c = {}, d = 0; d < a.length; ++d) {
            var e = Vl(a[d], b);
            e && (c[e.id] = e)
        }
        Xl(c);
        var f = [];
        jb(c, function(g, k) {
            f.push(k)
        });
        return f
    }

    function Xl(a) {
        var b = [],
            c;
        for (c in a)
            if (a.hasOwnProperty(c)) {
                var d = a[c];
                d.prefix === "AW" && d.ids[Yl[2]] && b.push(d.destinationId)
            } for (var e = 0; e < b.length; ++e) delete a[b[e]]
    }
    var Zl = {},
        Yl = (Zl[0] = 0, Zl[1] = 0, Zl[2] = 1, Zl[3] = 0, Zl[4] = 1, Zl[5] = 2, Zl[6] = 0, Zl[7] = 0, Zl[8] = 0, Zl);
    var $l = Number('') || 500,
        am = {},
        bm = {},
        cm = {
            initialized: 11,
            complete: 12,
            interactive: 13
        },
        dm = {},
        em = Object.freeze((dm[O.g.Oa] = !0, dm)),
        fm = E.location.search.indexOf("?gtm_diagnostics=") >= 0 || E.location.search.indexOf("&gtm_diagnostics=") >= 0,
        gm = void 0;

    function hm(a, b) {
        if (b.length && Rj) {
            var c;
            (c = am)[a] != null || (c[a] = []);
            bm[a] != null || (bm[a] = []);
            var d = b.filter(function(e) {
                return !bm[a].includes(e)
            });
            am[a].push.apply(am[a], oa(d));
            bm[a].push.apply(bm[a], oa(d));
            !gm && d.length > 0 && (Ik("tdc", !0), gm = C.setTimeout(function() {
                Lk();
                am = {};
                gm = void 0
            }, $l))
        }
    }

    function im(a, b, c) {
        if (Rj && a === "config") {
            var d, e = (d = Vl(b)) == null ? void 0 : d.ids;
            if (!(e && e.length > 1)) {
                console.log("d");
                var f, g = kc("google_tag_data", {});
                g.td || (g.td = {});
                f = g.td;
                var k = Vc(c.K);
                Vc(c.j, k);
                var m = [],
                    n;
                for (n in f)
                    if (f.hasOwnProperty(n)) {
                        var p = jm(f[n], k);
                        p.length && (fm && console.log(p), m.push(n))
                    } m.length && (hm(b, m), Va("TAGGING", cm[E.readyState] || 14));
                f[b] = k
            }
        }
    }

    function km(a, b) {
        var c = {},
            d;
        for (d in b) b.hasOwnProperty(d) && (c[d] = !0);
        for (var e in a) a.hasOwnProperty(e) && (c[e] = !0);
        return c
    }

    function jm(a, b, c, d) {
        c = c === void 0 ? {} : c;
        d = d === void 0 ? "" : d;
        if (a === b) return [];
        var e = function(r, u) {
                var v;
                Sc(u) === "object" ? v = u[r] : Sc(u) === "array" && (v = u[r]);
                return v === void 0 ? em[r] : v
            },
            f = km(a, b),
            g;
        for (g in f)
            if (f.hasOwnProperty(g)) {
                var k = (d ? d + "." : "") + g,
                    m = e(g, a),
                    n = e(g, b),
                    p = Sc(m) === "object" || Sc(m) === "array",
                    q = Sc(n) === "object" || Sc(n) === "array";
                if (p && q) jm(m, n, c, k);
                else if (p || q || m !== n) c[k] = !0
            } return Object.keys(c)
    }

    function lm() {
        Hk("tdc", function() {
            gm && (C.clearTimeout(gm), gm = void 0);
            var a = [],
                b;
            for (b in am) am.hasOwnProperty(b) && a.push(b + "*" + am[b].join("."));
            return a.length ? a.join("!") : void 0
        }, !1)
    };
    var mm = function(a, b, c, d, e, f, g, k, m, n, p) {
            this.eventId = a;
            this.priorityId = b;
            this.j = c;
            this.P = d;
            this.H = e;
            this.K = f;
            this.C = g;
            this.eventMetadata = k;
            this.onSuccess = m;
            this.onFailure = n;
            this.isGtmEvent = p
        },
        nm = function(a, b) {
            var c = [];
            switch (b) {
                case 3:
                    c.push(a.j);
                    c.push(a.P);
                    c.push(a.H);
                    c.push(a.K);
                    c.push(a.C);
                    break;
                case 2:
                    c.push(a.j);
                    break;
                case 1:
                    c.push(a.P);
                    c.push(a.H);
                    c.push(a.K);
                    c.push(a.C);
                    break;
                case 4:
                    c.push(a.j), c.push(a.P), c.push(a.H), c.push(a.K)
            }
            return c
        },
        V = function(a, b, c, d) {
            
            for (var e = l(nm(a, d === void 0 ? 3 : d)), f = e.next(); !f.done; f = e.next()) {
                var g = f.value;
                if (g[b] !== void 0) return g[b]
            }
            return c
        },
        om = function(a) {
            for (var b = {}, c = nm(a, 4), d = l(c), e = d.next(); !e.done; e = d.next())
                for (var f = Object.keys(e.value), g = l(f), k = g.next(); !k.done; k = g.next()) b[k.value] = 1;
            return Object.keys(b)
        },
        pm = function(a, b, c) {
            function d(n) {
                Uc(n) && jb(n, function(p, q) {
                    f = !0;
                    e[p] = q
                })
            }
            var e = {},
                f = !1,
                g = nm(a, c === void 0 ? 3 : c);
            g.reverse();
            for (var k = l(g), m = k.next(); !m.done; m = k.next()) d(m.value[b]);
            return f ? e : void 0
        },
        qm = function(a) {
            for (var b = [O.g.Zc, O.g.Vc,
                    O.g.Wc, O.g.Xc, O.g.Yc, O.g.bd, O.g.dd
                ], c = nm(a, 3), d = l(c), e = d.next(); !e.done; e = d.next()) {
                for (var f = e.value, g = {}, k = !1, m = l(b), n = m.next(); !n.done; n = m.next()) {
                    var p = n.value;
                    f[p] !== void 0 && (g[p] = f[p], k = !0)
                }
                var q = k ? g : void 0;
                if (q) return q
            }
            return {}
        },
        rm = function(a, b) {
            this.eventId = a;
            this.priorityId = b;
            this.C = {};
            this.P = {};
            this.j = {};
            this.H = {};
            this.aa = {};
            this.K = {};
            this.eventMetadata = {};
            this.isGtmEvent = !1;
            this.onSuccess = function() {};
            this.onFailure = function() {}
        },
        sm = function(a, b) {
            a.C = b;
            return a
        },
        tm = function(a, b) {
            a.P = b;
            return a
        },
        um = function(a, b) {
            a.j = b;
            return a
        },
        vm = function(a, b) {
            a.H = b;
            return a
        },
        wm = function(a, b) {
            a.aa = b;
            return a
        },
        xm = function(a, b) {
            a.K = b;
            return a
        },
        ym = function(a, b) {
            a.eventMetadata = b || {};
            return a
        },
        zm = function(a, b) {
            a.onSuccess = b;
            return a
        },
        Am = function(a, b) {
            a.onFailure = b;
            return a
        },
        Bm = function(a, b) {
            a.isGtmEvent = b;
            return a
        },
        Cm = function(a) {
            return new mm(a.eventId, a.priorityId, a.C, a.P, a.j, a.H, a.K, a.eventMetadata, a.onSuccess, a.onFailure, a.isGtmEvent)
        };
    var Dm = {
            Jk: Number("5"),
            po: Number("")
        },
        Em = [];

    function Fm(a) {
        Em.push(a)
    }
    var Gm = "?id=" + Pf.ctid,
        Hm = void 0,
        Im = {},
        Jm = void 0,
        Km = new function() {
            var a = 5;
            Dm.Jk > 0 && (a = Dm.Jk);
            this.C = a;
            this.j = 0;
            this.H = []
        },
        Lm = 1E3;

    function Mm(a, b) {
        var c = Hm;
        if (c === void 0)
            if (b) c = Zi();
            else return "";
        for (var d = [Jj("https://www.googletagmanager.com"), "/a", Gm], e = l(Em), f = e.next(); !f.done; f = e.next())
            for (var g = f.value, k = g({
                    eventId: c,
                    Tc: !!a
                }), m = l(k), n = m.next(); !n.done; n = m.next()) {
                var p = l(n.value),
                    q = p.next().value,
                    r = p.next().value;
                d.push("&" + q + "=" + r)
            }
        d.push("&z=0");
        return d.join("")
    }

    function Nm() {
        Jm && (C.clearTimeout(Jm), Jm = void 0);
        if (Hm !== void 0 && Om) {
            var a;
            (a = Im[Hm]) || (a = Km.j < Km.C ? !1 : getCurrentTimestamp() - Km.H[Km.j % Km.C] < 1E3);
            if (a || Lm-- <= 0) U(1), Im[Hm] = !0;
            else {
                var b = Km.j++ % Km.C;
                Km.H[b] = getCurrentTimestamp();
                var c = Mm(!0);
                sc(c);
                Om = !1
            }
        }
    }
    var Om = !1;

    function Pm(a) {
        Im[a] || (a !== Hm && (Nm(), Hm = a), Om = !0, Jm || (Jm = C.setTimeout(Nm, 500)), Mm().length >= 2022 && Nm())
    }
    var Qm = fb();

    function Rm() {
        Qm = fb()
    }

    function Sm() {
        return [
            ["v", "3"],
            ["t", "t"],
            ["pid", String(Qm)]
        ]
    }
    var Tm = {};

    function Um(a, b, c) {
        Qj && a !== void 0 && (Tm[a] = Tm[a] || [], Tm[a].push(c + b), Pm(a))
    }

    function Vm(a) {
        var b = a.eventId,
            c = a.Tc,
            d = [],
            e = Tm[b] || [];
        e.length && d.push(["epr", e.join(".")]);
        c && delete Tm[b];
        return d
    };

    function Wm(a, b) {
        var c = Vl(mk(a), !0);
        c && Xm.register(c, b)
    }

    function Ym(a, b, c, d) {
        var e = Vl(c, d.isGtmEvent);
        e && (S(49) && Ni && (d.deferrable = !0), Xm.push("event", [b, a], e, d))
    }

    function Zm(a, b, c, d) {
        var e = Vl(c, d.isGtmEvent);
        e && Xm.push("get", [a, b], e, d)
    }

    function $m(a) {
        var b = Vl(mk(a), !0),
            c;
        b ? c = an(Xm, b).j : c = {};
        return c
    }

    function bn(a, b) {
        var c = Vl(mk(a), !0);
        if (c) {
            var d = Xm,
                e = Vc(b, null);
            Vc(an(d, c).j, e);
            an(d, c).j = e
        }
    }
    var cn = function() {
            this.P = {};
            this.j = {};
            this.C = {};
            this.aa = null;
            this.K = {};
            this.H = !1;
            this.status = 1
        },
        dn = function(a, b, c, d) {
            this.C = getCurrentTimestamp();
            this.j = b;
            this.args = c;
            this.messageContext = d;
            this.type = a
        },
        en = function() {
            this.destinations = {};
            this.j = {};
            this.commands = []
        },
        an = function(a, b) {
            var c = b.destinationId;
            return a.destinations[c] = a.destinations[c] || new cn
        },
        fn = function(a, b, c, d) {
            if (d.j) {
                var e = an(a, d.j),
                    f = e.aa;
                if (f) {
                    var g = Vc(c, null),
                        k = Vc(e.P[d.j.id], null),
                        m = Vc(e.K, null),
                        n = Vc(e.j, null),
                        p = Vc(a.j, null),
                        q = {};
                    if (Qj) try {
                        q = Vc(fj,
                            null)
                    } catch (t) {
                        U(72)
                    }
                    var r = d.j.prefix,
                        u = function(t) {
                            Um(d.messageContext.eventId, r, t)
                        },
                        v = Cm(Bm(Am(zm(ym(wm(vm(xm(um(tm(sm(new rm(d.messageContext.eventId, d.messageContext.priorityId), g), k), m), n), p), q), d.messageContext.eventMetadata), function() {
                            if (u) {
                                var t = u;
                                u = void 0;
                                t("2");
                                if (d.messageContext.onSuccess) d.messageContext.onSuccess()
                            }
                        }), function() {
                            if (u) {
                                var t = u;
                                u = void 0;
                                t("3");
                                if (d.messageContext.onFailure) d.messageContext.onFailure()
                            }
                        }), !!d.messageContext.isGtmEvent));
                    try {
                        Um(d.messageContext.eventId,
                            r, "1"), im(d.type, d.j.id, v), f(d.j.id, b, d.C, v)
                    } catch (t) {
                        Um(d.messageContext.eventId, r, "4")
                    }
                }
            }
        };
    en.prototype.register = function(a, b, c) {
        var d = an(this, a);
        d.status !== 3 && (d.aa = b, d.status = 3, c && (Vc(d.j, c), d.j = c), this.flush())
    };
    en.prototype.push = function(a, b, c, d) {
        c !== void 0 && (an(this, c).status === 1 && (an(this, c).status = 2, this.push("require", [{}], c, {})), an(this, c).H && (d.deferrable = !1));
        this.commands.push(new dn(a, c, b, d));
        d.deferrable || this.flush()
    };
    en.prototype.flush = function(a) {
        for (var b = this, c = [], d = !1, e = {}; this.commands.length; e = {
                Jc: void 0,
                Kh: void 0
            }) {
            var f = this.commands[0],
                g = f.j;
            if (f.messageContext.deferrable) !g || an(this, g).H ? (f.messageContext.deferrable = !1, this.commands.push(f)) : c.push(f), this.commands.shift();
            else {
                switch (f.type) {
                    case "require":
                        if (an(this, g).status !== 3 && !a) {
                            this.commands.push.apply(this.commands, c);
                            return
                        }
                        break;
                    case "set":
                        jb(f.args[0], function(r, u) {
                            Vc(yb(r, u), b.j)
                        });
                        break;
                    case "config":
                        var k = an(this, g);
                        e.Jc = {};
                        jb(f.args[0],
                            function(r) {
                                return function(u, v) {
                                    Vc(yb(u, v), r.Jc)
                                }
                            }(e));
                        var m = !!e.Jc[O.g.nc];
                        delete e.Jc[O.g.nc];
                        var n = g.destinationId === g.id;
                        m || (n ? k.K = {} : k.P[g.id] = {});
                        k.H && m || fn(this, O.g.ba, e.Jc, f);
                        k.H = !0;
                        n ? Vc(e.Jc, k.K) : (Vc(e.Jc, k.P[g.id]), U(70));
                        d = !0;
                        break;
                    case "event":
                        e.Kh = {};
                        jb(f.args[0], function(r) {
                            return function(u, v) {
                                Vc(yb(u, v), r.Kh)
                            }
                        }(e));
                        fn(this, f.args[1], e.Kh, f);
                        break;
                    case "get":
                        var p = {},
                            q = (p[O.g.xb] = f.args[0], p[O.g.Mb] = f.args[1], p);
                        fn(this, O.g.Ya, q, f)
                }
                this.commands.shift();
                gn(this, f)
            }
        }
        this.commands.push.apply(this.commands,
            c);
        d && this.flush()
    };
    var gn = function(a, b) {
            if (b.type !== "require")
                if (b.j)
                    for (var c = an(a, b.j).C[b.type] || [], d = 0; d < c.length; d++) c[d]();
                else
                    for (var e in a.destinations)
                        if (a.destinations.hasOwnProperty(e)) {
                            var f = a.destinations[e];
                            if (f && f.C)
                                for (var g = f.C[b.type] || [], k = 0; k < g.length; k++) g[k]()
                        }
        },
        Xm = new en;
    var hn = function(a, b) {
            var c = function() {};
            c.prototype = a.prototype;
            var d = new c;
            a.apply(d, Array.prototype.slice.call(arguments, 1));
            return d
        },
        jn = function(a) {
            var b = a;
            return function() {
                if (b) {
                    var c = b;
                    b = null;
                    c()
                }
            }
        };
    var kn = function(a, b, c) {
            a.addEventListener && a.addEventListener(b, c, !1)
        },
        ln = function(a, b, c) {
            a.removeEventListener && a.removeEventListener(b, c, !1)
        };
    var mn, nn;
    a: {
        for (var on = ["CLOSURE_FLAGS"], pn = za, qn = 0; qn < on.length; qn++)
            if (pn = pn[on[qn]], pn == null) {
                nn = null;
                break a
            } nn = pn
    }
    var rn = nn && nn[610401301];
    mn = rn != null ? rn : !1;

    function sn() {
        var a = za.navigator;
        if (a) {
            var b = a.userAgent;
            if (b) return b
        }
        return ""
    }
    var tn, un = za.navigator;
    tn = un ? un.userAgentData || null : null;

    function vn(a) {
        return mn ? tn ? tn.brands.some(function(b) {
            var c;
            return (c = b.brand) && c.indexOf(a) != -1
        }) : !1 : !1
    }

    function wn(a) {
        return sn().indexOf(a) != -1
    };

    function xn() {
        return mn ? !!tn && tn.brands.length > 0 : !1
    }

    function yn() {
        return xn() ? !1 : wn("Opera")
    }

    function zn() {
        return wn("Firefox") || wn("FxiOS")
    }

    function An() {
        return xn() ? vn("Chromium") : (wn("Chrome") || wn("CriOS")) && !(xn() ? 0 : wn("Edge")) || wn("Silk")
    };
    var Bn = function(a) {
        Bn[" "](a);
        return a
    };
    Bn[" "] = function() {};
    var Cn = function(a, b, c, d) {
            for (var e = b, f = c.length;
                (e = a.indexOf(c, e)) >= 0 && e < d;) {
                var g = a.charCodeAt(e - 1);
                if (g == 38 || g == 63) {
                    var k = a.charCodeAt(e + f);
                    if (!k || k == 61 || k == 38 || k == 35) return e
                }
                e += f + 1
            }
            return -1
        },
        Dn = /#|$/,
        En = function(a, b) {
            var c = a.search(Dn),
                d = Cn(a, 0, b, c);
            if (d < 0) return null;
            var e = a.indexOf("&", d);
            if (e < 0 || e > c) e = c;
            d += b.length + 1;
            return decodeURIComponent(a.slice(d, e !== -1 ? e : 0).replace(/\+/g, " "))
        },
        Fn = /[?&]($|#)/,
        Gn = function(a, b, c) {
            for (var d, e = a.search(Dn), f = 0, g, k = [];
                (g = Cn(a, f, b, e)) >= 0;) k.push(a.substring(f,
                g)), f = Math.min(a.indexOf("&", g) + 1 || e, e);
            k.push(a.slice(f));
            d = k.join("").replace(Fn, "$1");
            var m, n = c != null ? "=" + encodeURIComponent(String(c)) : "";
            var p = b + n;
            if (p) {
                var q, r = d.indexOf("#");
                r < 0 && (r = d.length);
                var u = d.indexOf("?"),
                    v;
                u < 0 || u > r ? (u = r, v = "") : v = d.substring(u + 1, r);
                q = [d.slice(0, u), v, d.slice(r)];
                var t = q[1];
                q[1] = p ? t ? t + "&" + p : p : t;
                m = q[0] + (q[1] ? "?" + q[1] : "") + q[2]
            } else m = d;
            return m
        };

    function Hn() {
        return mn ? !!tn && !!tn.platform : !1
    }

    function In() {
        return wn("iPhone") && !wn("iPod") && !wn("iPad")
    }

    function Jn() {
        In() || wn("iPad") || wn("iPod")
    };
    yn();
    xn() || wn("Trident") || wn("MSIE");
    wn("Edge");
    !wn("Gecko") || sn().toLowerCase().indexOf("webkit") != -1 && !wn("Edge") || wn("Trident") || wn("MSIE") || wn("Edge");
    sn().toLowerCase().indexOf("webkit") != -1 && !wn("Edge") && wn("Mobile");
    Hn() || wn("Macintosh");
    Hn() || wn("Windows");
    (Hn() ? tn.platform === "Linux" : wn("Linux")) || Hn() || wn("CrOS");
    Hn() || wn("Android");
    In();
    wn("iPad");
    wn("iPod");
    Jn();
    sn().toLowerCase().indexOf("kaios");
    var Kn = function(a) {
            try {
                var b;
                if (b = !!a && a.location.href != null) a: {
                    try {
                        Bn(a.foo);
                        b = !0;
                        break a
                    } catch (c) {}
                    b = !1
                }
                return b
            } catch (c) {
                return !1
            }
        },
        Ln = function(a, b) {
            if (a)
                for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a)
        },
        Mn = function(a) {
            if (C.top == C) return 0;
            if (a === void 0 ? 0 : a) {
                var b = C.location.ancestorOrigins;
                if (b) return b[b.length - 1] == C.location.origin ? 1 : 2
            }
            return Kn(C.top) ? 1 : 2
        },
        Nn = function(a) {
            a = a === void 0 ? document : a;
            return a.createElement("img")
        },
        On = function() {
            for (var a = C, b = a; a && a != a.parent;) a =
                a.parent, Kn(a) && (b = a);
            return b
        };

    function Pn(a, b, c, d) {
        d = d === void 0 ? !1 : d;
        a.google_image_requests || (a.google_image_requests = []);
        var e = Nn(a.document);
        if (c) {
            var f = function() {
                if (c) {
                    var g = a.google_image_requests,
                        k = dc(g, e);
                    k >= 0 && Array.prototype.splice.call(g, k, 1)
                }
                ln(e, "load", f);
                ln(e, "error", f)
            };
            kn(e, "load", f);
            kn(e, "error", f)
        }
        d && (e.attributionSrc = "");
        e.src = b;
        a.google_image_requests.push(e)
    }
    var Rn = function(a) {
            var b;
            b = b === void 0 ? !1 : b;
            var c = "https://pagead2.googlesyndication.com/pagead/gen_204?id=tcfe";
            Ln(a, function(d, e) {
                if (d || d === 0) c += "&" + e + "=" + encodeURIComponent("" + d)
            });
            Qn(c, b)
        },
        Qn = function(a, b) {
            var c = window,
                d;
            b = b === void 0 ? !1 : b;
            d = d === void 0 ? !1 : d;
            if (c.fetch) {
                var e = {
                    keepalive: !0,
                    credentials: "include",
                    redirect: "follow",
                    method: "get",
                    mode: "no-cors"
                };
                d && (e.mode = "cors", "setAttributionReporting" in XMLHttpRequest.prototype ? e.attributionReporting = {
                        eventSourceEligible: "true",
                        triggerEligible: "false"
                    } :
                    e.headers = {
                        "Attribution-Reporting-Eligible": "event-source"
                    });
                c.fetch(a, e)
            } else Pn(c, a, b === void 0 ? !1 : b, d === void 0 ? !1 : d)
        };
    var Sn = function() {
        this.P = this.P;
        this.C = this.C
    };
    Sn.prototype.P = !1;
    Sn.prototype.dispose = function() {
        this.P || (this.P = !0, this.Ua())
    };
    Sn.prototype[Symbol.dispose] = function() {
        this.dispose()
    };
    Sn.prototype.addOnDisposeCallback = function(a, b) {
        this.P ? b !== void 0 ? a.call(b) : a() : (this.C || (this.C = []), b && (a = a.bind(b)), this.C.push(a))
    };
    Sn.prototype.Ua = function() {
        if (this.C)
            for (; this.C.length;) this.C.shift()()
    };

    function Tn(a) {
        a.addtlConsent !== void 0 && typeof a.addtlConsent !== "string" && (a.addtlConsent = void 0);
        a.gdprApplies !== void 0 && typeof a.gdprApplies !== "boolean" && (a.gdprApplies = void 0);
        return a.tcString !== void 0 && typeof a.tcString !== "string" || a.listenerId !== void 0 && typeof a.listenerId !== "number" ? 2 : a.cmpStatus && a.cmpStatus !== "error" ? 0 : 3
    }
    var Un = function(a, b) {
        b = b === void 0 ? {} : b;
        Sn.call(this);
        this.j = null;
        this.aa = {};
        this.dg = 0;
        this.K = null;
        this.H = a;
        var c;
        this.xe = (c = b.vn) != null ? c : 500;
        var d;
        this.Ic = (d = b.Xn) != null ? d : !1
    };
    xa(Un, Sn);
    Un.prototype.Ua = function() {
        this.aa = {};
        this.K && (ln(this.H, "message", this.K), delete this.K);
        delete this.aa;
        delete this.H;
        delete this.j;
        Sn.prototype.Ua.call(this)
    };
    var Wn = function(a) {
        return typeof a.H.__tcfapi === "function" || Vn(a) != null
    };
    Un.prototype.addEventListener = function(a) {
        var b = this,
            c = {
                internalBlockOnErrors: this.Ic
            },
            d = jn(function() {
                return a(c)
            }),
            e = 0;
        this.xe !== -1 && (e = setTimeout(function() {
            c.tcString = "tcunavailable";
            c.internalErrorState = 1;
            d()
        }, this.xe));
        var f = function(g, k) {
            clearTimeout(e);
            g ? (c = g, c.internalErrorState = Tn(c), c.internalBlockOnErrors = b.Ic, k && c.internalErrorState === 0 || (c.tcString = "tcunavailable", k || (c.internalErrorState = 3))) : (c.tcString = "tcunavailable", c.internalErrorState = 3);
            a(c)
        };
        try {
            Xn(this, "addEventListener", f)
        } catch (g) {
            c.tcString =
                "tcunavailable", c.internalErrorState = 3, e && (clearTimeout(e), e = 0), d()
        }
    };
    Un.prototype.removeEventListener = function(a) {
        a && a.listenerId && Xn(this, "removeEventListener", null, a.listenerId)
    };
    var Zn = function(a, b, c) {
            var d;
            d = d === void 0 ? "755" : d;
            var e;
            a: {
                if (a.publisher && a.publisher.restrictions) {
                    var f = a.publisher.restrictions[b];
                    if (f !== void 0) {
                        e = f[d === void 0 ? "755" : d];
                        break a
                    }
                }
                e = void 0
            }
            var g = e;
            if (g === 0) return !1;
            var k = c;
            c === 2 ? (k = 0, g === 2 && (k = 1)) : c === 3 && (k = 1, g === 1 && (k = 0));
            var m;
            if (k === 0)
                if (a.purpose && a.vendor) {
                    var n = Yn(a.vendor.consents, d === void 0 ? "755" : d);
                    m = n && b === "1" && a.purposeOneTreatment && a.publisherCC === "CH" ? !0 : n && Yn(a.purpose.consents, b)
                } else m = !0;
            else m = k === 1 ? a.purpose && a.vendor ? Yn(a.purpose.legitimateInterests,
                b) && Yn(a.vendor.legitimateInterests, d === void 0 ? "755" : d) : !0 : !0;
            return m
        },
        Yn = function(a, b) {
            return !(!a || !a[b])
        },
        Xn = function(a, b, c, d) {
            c || (c = function() {});
            var e = a.H;
            if (typeof e.__tcfapi === "function") {
                var f = e.__tcfapi;
                f(b, 2, c, d)
            } else if (Vn(a)) {
                $n(a);
                var g = ++a.dg;
                a.aa[g] = c;
                if (a.j) {
                    var k = {};
                    a.j.postMessage((k.__tcfapiCall = {
                        command: b,
                        version: 2,
                        callId: g,
                        parameter: d
                    }, k), "*")
                }
            } else c({}, !1)
        },
        Vn = function(a) {
            if (a.j) return a.j;
            var b;
            a: {
                for (var c = a.H, d = 0; d < 50; ++d) {
                    var e;
                    try {
                        e = !(!c.frames || !c.frames.__tcfapiLocator)
                    } catch (k) {
                        e = !1
                    }
                    if (e) {
                        b = c;
                        break a
                    }
                    var f;
                    b: {
                        try {
                            var g = c.parent;
                            if (g && g != c) {
                                f = g;
                                break b
                            }
                        } catch (k) {}
                        f = null
                    }
                    if (!(c = f)) break
                }
                b = null
            }
            a.j = b;
            return a.j
        },
        $n = function(a) {
            if (!a.K) {
                var b = function(c) {
                    try {
                        var d;
                        d = (typeof c.data === "string" ? JSON.parse(c.data) : c.data).__tcfapiReturn;
                        a.aa[d.callId](d.returnValue, d.success)
                    } catch (e) {}
                };
                a.K = b;
                kn(a.H, "message", b)
            }
        },
        ao = function(a) {
            if (a.gdprApplies === !1) return !0;
            a.internalErrorState === void 0 && (a.internalErrorState = Tn(a));
            return a.cmpStatus === "error" || a.internalErrorState !== 0 ? a.internalBlockOnErrors ?
                (Rn({
                    e: String(a.internalErrorState)
                }), !1) : !0 : a.cmpStatus !== "loaded" || a.eventStatus !== "tcloaded" && a.eventStatus !== "useractioncomplete" ? !1 : !0
        };
    var bo = {
        1: 0,
        3: 0,
        4: 0,
        7: 3,
        9: 3,
        10: 3
    };

    function lo() {
        var a = Ii.tcf || {};
        return Ii.tcf = a
    }
    var mo = function() {
        return new Un(C, {
            vn: -1
        })
    };

    function no() {
        var a = lo(),
            b = mo();
        Wn(b) && !oo() && !po() && U(124);
        if (!a.active && Wn(b)) {
            oo() && (a.active = !0, a.uc = {}, a.cmpId = 0, a.tcfPolicyVersion = 0, Qk().active = !0, a.tcString = "tcunavailable");
            Fl();
            try {
                b.addEventListener(function(c) {
                    if (c.internalErrorState !== 0) qo(a), Gl([O.g.O, O.g.za, O.g.N]), Qk().active = !0;
                    else if (a.gdprApplies = c.gdprApplies, a.cmpId = c.cmpId, a.enableAdvertiserConsentMode = c.enableAdvertiserConsentMode, po() && (a.active = !0), !ro(c) || oo() || po()) {
                        a.tcfPolicyVersion = c.tcfPolicyVersion;
                        var d;
                        if (c.gdprApplies ===
                            !1) {
                            var e = {},
                                f;
                            for (f in bo) bo.hasOwnProperty(f) && (e[f] = !0);
                            d = e;
                            b.removeEventListener(c)
                        } else if (ro(c)) {
                            var g = {},
                                k;
                            for (k in bo)
                                if (bo.hasOwnProperty(k))
                                    if (k === "1") {
                                        var m, n = c,
                                            p = {
                                                dm: !0
                                            };
                                        p = p === void 0 ? {} : p;
                                        m = ao(n) ? n.gdprApplies === !1 ? !0 : n.tcString === "tcunavailable" ? !p.mk : (p.mk || n.gdprApplies !== void 0 || p.dm) && (p.mk || typeof n.tcString === "string" && n.tcString.length) ? Zn(n, "1", 0) : !0 : !1;
                                        g["1"] = m
                                    } else g[k] = Zn(c, k, bo[k]);
                            d = g
                        }
                        if (d) {
                            a.tcString = c.tcString || "tcempty";
                            a.uc = d;
                            var q = {},
                                r = (q[O.g.O] = a.uc["1"] ? "granted" :
                                    "denied", q);
                            a.gdprApplies !== !0 ? (Gl([O.g.O, O.g.za, O.g.N]), Qk().active = !0) : (r[O.g.za] = a.uc["3"] && a.uc["4"] ? "granted" : "denied", typeof a.tcfPolicyVersion === "number" && a.tcfPolicyVersion >= 4 ? r[O.g.N] = a.uc["1"] && a.uc["7"] ? "granted" : "denied" : Gl([O.g.N]), Al(r, {
                                eventId: 0
                            }, {
                                gdprApplies: a ? a.gdprApplies : void 0,
                                tcString: so() || ""
                            }))
                        }
                    } else Gl([O.g.O, O.g.za, O.g.N])
                })
            } catch (c) {
                qo(a), Gl([O.g.O, O.g.za, O.g.N]), Qk().active = !0
            }
        }
    }

    function qo(a) {
        a.type = "e";
        a.tcString = "tcunavailable"
    }

    function ro(a) {
        return a.eventStatus === "tcloaded" || a.eventStatus === "useractioncomplete" || a.eventStatus === "cmpuishown"
    }

    function oo() {
        return C.gtag_enable_tcf_support === !0
    }

    function po() {
        return lo().enableAdvertiserConsentMode === !0
    }

    function so() {
        var a = lo();
        if (a.active) return a.tcString
    }

    function to() {
        var a = lo();
        if (a.active && a.gdprApplies !== void 0) return a.gdprApplies ? "1" : "0"
    }

    function uo(a) {
        if (!bo.hasOwnProperty(String(a))) return !0;
        var b = lo();
        return b.active && b.uc ? !!b.uc[String(a)] : !0
    }
    var vo = [O.g.O, O.g.U, O.g.N, O.g.za],
        wo = {},
        xo = (wo[O.g.O] = 1, wo[O.g.U] = 2, wo);

    function yo(a) {
        if (a === void 0) return 0;
        switch (V(a, O.g.ma)) {
            case void 0:
                return 1;
            case !1:
                return 3;
            default:
                return 2
        }
    }

    function zo(a) {
        if (ol() === "US-CO" && gc.globalPrivacyControl === !0) return !1;
        var b = yo(a);
        if (b === 3) return !1;
        switch (Zk(O.g.za)) {
            case 1:
            case 3:
                return !0;
            case 2:
                return !1;
            case 4:
                return b === 2;
            case 0:
                return !0;
            default:
                return !1
        }
    }

    function Ao() {
        return bl() || !Yk(O.g.O) || !Yk(O.g.U)
    }

    function Bo() {
        var a = {},
            b;
        for (b in xo) xo.hasOwnProperty(b) && (a[xo[b]] = Zk(b));
        return "G1" + Ie(a[1] || 0) + Ie(a[2] || 0)
    }
    var Co = {},
        Do = (Co[O.g.O] = 0, Co[O.g.U] = 1, Co[O.g.N] = 2, Co[O.g.za] = 3, Co);

    function Eo(a) {
        switch (a) {
            case void 0:
                return 1;
            case !0:
                return 3;
            case !1:
                return 2;
            default:
                return 0
        }
    }

    function Fo(a) {
        for (var b = "1", c = 0; c < vo.length; c++) {
            var d = b,
                e, f = vo[c],
                g = Xk.delegatedConsentTypes[f];
            e = g === void 0 ? 0 : Do.hasOwnProperty(g) ? 12 | Do[g] : 8;
            var k = Qk();
            k.accessedAny = !0;
            var m = k.entries[f] || {};
            e = e << 2 | Eo(m.implicit);
            b = d + ("" + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [e] + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [Eo(m.declare) << 4 | Eo(m.default) << 2 | Eo(m.update)])
        }
        var n = b,
            p = (ol() === "US-CO" && gc.globalPrivacyControl === !0 ? 1 : 0) << 3,
            q = (bl() ? 1 : 0) << 2,
            r = yo(a);
        b =
            n + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [p | q | r];
        return b += "" + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [Xk.containerScopedDefaults.ad_storage << 4 | Xk.containerScopedDefaults.analytics_storage << 2 | Xk.containerScopedDefaults.ad_user_data] + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [(Xk.usedContainerScopedDefaults ? 1 : 0) << 2 | Xk.containerScopedDefaults.ad_personalization]
    }

    function Go() {
        if (!Yk(O.g.N)) return "-";
        for (var a = Object.keys(Eh), b = $k(a), c = "", d = l(a), e = d.next(); !e.done; e = d.next()) {
            var f = e.value;
            b[f] && (c += Eh[f])
        }(Xk.usedCorePlatformServices ? Xk.selectedAllCorePlatformServices : 1) && (c += "o");
        return c || "-"
    }

    function Ho() {
        return ql() || (oo() || po()) && to() === "1" ? "1" : "0"
    }

    function Io() {
        return (ql() ? !0 : !(!oo() && !po()) && to() === "1") || !Yk(O.g.N)
    }

    function Jo() {
        var a = "0",
            b = "0",
            c;
        var d = lo();
        c = d.active ? d.cmpId : void 0;
        typeof c === "number" && c >= 0 && c <= 4095 && (a = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [c >> 6 & 63], b = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [c & 63]);
        var e = "0",
            f;
        var g = lo();
        f = g.active ? g.tcfPolicyVersion : void 0;
        typeof f === "number" && f >= 0 && f <= 63 && (e = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [f]);
        var k = 0;
        ql() && (k |= 1);
        to() === "1" && (k |= 2);
        oo() && (k |= 4);
        var m;
        var n = lo();
        m = n.enableAdvertiserConsentMode !==
            void 0 ? n.enableAdvertiserConsentMode ? "1" : "0" : void 0;
        m === "1" && (k |= 8);
        Qk().waitPeriodTimedOut && (k |= 16);
        return "1" + a + b + e + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [k]
    }

    function Ko() {
        return ol() === "US-CO"
    };

    function Lo() {
        var a = !1;
        return a
    };
    var Mo = {
        UA: 1,
        AW: 2,
        DC: 3,
        G: 4,
        GF: 5,
        GT: 12,
        GTM: 14,
        HA: 6,
        MC: 7
    };

    function No(a) {
        a = a === void 0 ? {} : a;
        var b = Pf.ctid.split("-")[0].toUpperCase(),
            c = {
                ctid: Pf.ctid,
                fn: Hi.Ce,
                kn: Hi.th,
                Hm: dk.ze ? 2 : 1,
                qn: a.zk,
                Je: Pf.canonicalContainerId
            };
        c.Je !== a.ya && (c.ya = a.ya);
        var d = ok();
        c.Sm = d ? d.canonicalContainerId : void 0;
        Oi ? (c.og = Mo[b], c.og || (c.og = 0)) : c.og = Si ? 13 : 10;
        aj.H ? (c.mg = 0, c.Jl = 2) : Qi ? c.mg = 1 : Lo() ? c.mg = 2 : c.mg = 3;
        var e = {};
        e[6] = ek;
        aj.C === 2 ? e[7] = !0 : aj.C === 1 && (e[2] = !0);
        if (jc) {
            var f = vj(Bj(jc), "host");
            f && (e[8] = f.match(/^(www\.)?googletagmanager\.com$/) === null)
        }
        c.Ml = e;
        var g = a.fg,
            k;
        var m = c.og,
            n = c.mg;
        m === void 0 ? k = "" : (n || (n = 0), k = "" + Ke(1, 1) + He(m << 2 | n));
        var p = c.Jl,
            q = "4" + k + (p ? "" + Ke(2, 1) + He(p) : ""),
            r, u = c.kn;
        r = u && Je.test(u) ? "" + Ke(3, 2) + u : "";
        var v, t = c.fn;
        v = t ? "" + Ke(4, 1) + He(t) : "";
        var w;
        var x = c.ctid;
        if (x && g) {
            var y = x.split("-"),
                A = y[0].toUpperCase();
            if (A !== "GTM" && A !== "OPT") w = "";
            else {
                var B = y[1];
                w = "" + Ke(5, 3) + He(1 + B.length) + (c.Hm || 0) + B
            }
        } else w = "";
        var D = c.qn,
            I = c.Je,
            J = c.ya,
            H = c.mo,
            W = q + r + v + w + (D ? "" + Ke(6, 1) + He(D) : "") + (I ? "" + Ke(7, 3) + He(I.length) + I : "") + (J ? "" + Ke(8, 3) + He(J.length) + J : "") + (H ? "" + Ke(9, 3) + He(H.length) +
                H : ""),
            N;
        var aa = c.Ml;
        aa = aa === void 0 ? {} : aa;
        for (var da = [], T = l(Object.keys(aa)), R = T.next(); !R.done; R = T.next()) {
            var M = R.value;
            da[Number(M)] = aa[M]
        }
        if (da.length) {
            var ia = Ke(10, 3),
                la;
            if (da.length === 0) la = He(0);
            else {
                for (var ea = [], ua = 0, Ma = !1, Da = 0; Da < da.length; Da++) {
                    Ma = !0;
                    var Sa = Da % 6;
                    da[Da] && (ua |= 1 << Sa);
                    Sa === 5 && (ea.push(He(ua)), ua = 0, Ma = !1)
                }
                Ma && ea.push(He(ua));
                la = ea.join("")
            }
            var gb = la;
            N = "" + ia + He(gb.length) + gb
        } else N = "";
        var Fc = c.Sm;
        return W + N + (Fc ? "" + Ke(11, 3) + He(Fc.length) + Fc : "")
    };

    function Oo(a) {
        var b = 1,
            c, d, e;
        if (a)
            for (b = 0, d = a.length - 1; d >= 0; d--) e = a.charCodeAt(d), b = (b << 6 & 268435455) + e + (e << 14), c = b & 266338304, b = c !== 0 ? b ^ c >> 21 : b;
        return b
    };

    function Po(a) {
        return a.origin !== "null"
    };

    function Qo(a, b, c, d) {
        var e;
        if (Ro(d)) {
            for (var f = [], g = String(b || So()).split(";"), k = 0; k < g.length; k++) {
                var m = g[k].split("="),
                    n = m[0].replace(/^\s*|\s*$/g, "");
                if (n && n === a) {
                    var p = m.slice(1).join("=").replace(/^\s*|\s*$/g, "");
                    p && c && (p = decodeURIComponent(p));
                    f.push(p)
                }
            }
            e = f
        } else e = [];
        return e
    }

    function To(a, b, c, d, e) {
        if (Ro(e)) {
            var f = Uo(a, d, e);
            if (f.length === 1) return f[0].id;
            if (f.length !== 0) {
                f = Vo(f, function(g) {
                    return g.Sl
                }, b);
                if (f.length === 1) return f[0].id;
                f = Vo(f, function(g) {
                    return g.Um
                }, c);
                return f[0] ? f[0].id : void 0
            }
        }
    }

    function Wo(a, b, c, d) {
        var e = So(),
            f = window;
        //console.log("final?",a);
        Po(f) && (f.document.cookie = a);
        var g = So();
        return e !== g || c !== void 0 && Qo(b, g, !1, d).indexOf(c) >= 0
    }

    function Xo(a, b, c, d) {
        function e(w, x, y) {
            if (y == null) return delete k[x], w;
            k[x] = y;
            return w + "; " + x + "=" + y
        }

        function f(w, x) {
            if (x == null) return w;
            k[x] = !0;
            return w + "; " + x
        }
        if (!Ro(c.Hb)) return 2;
        var g;
        b == null ? g = a + "=deleted; expires=" + (new Date(0)).toUTCString() : (c.encode && (b = encodeURIComponent(b)), b = Yo(b), g = a + "=" + b);
        var k = {};
        g = e(g, "path", c.path);
        var m;
        c.expires instanceof Date ? m = c.expires.toUTCString() : c.expires != null && (m = "" + c.expires);
        g = e(g, "expires", m);
        g = e(g, "max-age", c.Lm);
        g = e(g, "samesite", c.ln);
        c.secure &&
            (g = f(g, "secure"));''
        var n = c.domain;
        if (n && n.toLowerCase() === "auto") {
            for (var p = Zo(), q = void 0, r = !1, u = 0; u < p.length; ++u) {
                //v = dominio atual
                var v = p[u] !== "none" ? p[u] : void 0,
                    t = e(g, "domain", v);
                t = f(t, c.flags);
                try {
                    d && d(a, k)
                } catch (w) {
                    q = w;
                    continue
                }
                r = !0;
                if (!$o(v, c.path) && Wo(t, a, b, c.Hb)) return 0
            }
            if (q && !r) throw q;
            return 1
        }
        n && n.toLowerCase() !== "none" && (g = e(g, "domain", n));
        g = f(g, c.flags);
        d && d(a, k);
        return $o(n, c.path) ? 1 : Wo(g, a, b, c.Hb) ? 0 : 1
    }

    function ap(a, b, c) {
        c.path == null && (c.path = "/");
        c.domain || (c.domain = "auto");
        return Xo(a, b, c)
    }

    function Vo(a, b, c) {
        for (var d = [], e = [], f, g = 0; g < a.length; g++) {
            var k = a[g],
                m = b(k);
            m === c ? d.push(k) : f === void 0 || m < f ? (e = [k], f = m) : m === f && e.push(k)
        }
        return d.length > 0 ? d : e
    }

    function Uo(a, b, c) {
        for (var d = [], e = Qo(a, void 0, void 0, c), f = 0; f < e.length; f++) {
            var g = e[f].split("."),
                k = g.shift();
            if (!b || !k || b.indexOf(k) !== -1) {
                var m = g.shift();
                if (m) {
                    var n = m.split("-");
                    d.push({
                        id: g.join("."),
                        Sl: Number(n[0]) || 1,
                        Um: Number(n[1]) || 1
                    })
                }
            }
        }
        return d
    }

    function Yo(a) {
        a && a.length > 1200 && (a = a.substring(0, 1200));
        return a
    }
    var bp = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,
        cp = /(^|\.)doubleclick\.net$/i;

    function $o(a, b) {
        return a !== void 0 && (cp.test(window.document.location.hostname) || b === "/" && bp.test(a))
    }

    function dp(cookie_domain) {
        if (!cookie_domain){
            return 1;
        }
        var b = cookie_domain;
        $a(9) && cookie_domain === "none" && (b = window.document.location.hostname);
        b = b.indexOf(".") === 0 ? b.substring(1) : b;
        return b.split(".").length
    }

    function ep(a) {
        if (!a || a === "/") return 1;
        a[0] !== "/" && (a = "/" + a);
        a[a.length - 1] !== "/" && (a += "/");
        return a.split("/").length - 1
    }

    function getDomainLevel(cookie_domain, cookie_path) {
        var c = "" + dp(cookie_domain),
            d = ep(cookie_path);
        d > 1 && (c += "-" + d);
        return c
    }
    var So = function() {
            return Po(window) ? window.document.cookie : ""
        },
        Ro = function(a) {
            return a && $a(10) ? (Array.isArray(a) ? a : [a]).every(function(b) {
                return al(b) && Yk(b)
            }) : !0
        },
        Zo = function() {
            var a = [],
                b = window.document.location.hostname.split(".");
            if (b.length === 4) {
                var c = b[b.length - 1];
                if (Number(c).toString() === c) return ["none"]
            }
            for (var d = b.length - 2; d >= 0; d--) a.push(b.slice(d).join("."));
            var e = window.document.location.hostname;
            cp.test(e) || bp.test(e) || a.push("none");
            return a
        };

    function getBSDRandomNumberLike(a) {
        //2147483647 é o máximo do BSD Random Number 
        var numero_aleatorio = Math.round(Math.random() * 2147483647);
        if(a){
            return String(numero_aleatorio ^ Oo(a) & 2147483647)
        }else{
            return String(numero_aleatorio)
        }
    }

    function generateClientID(a) {
        var numero_aleatorio = getBSDRandomNumberLike(a);
        var timestamp_atual = Math.round(getCurrentTimestamp() / 1E3);
        return [numero_aleatorio, timestamp_atual].join(".")
    }

    function ip(a, b, c, d, e) {
        var f = dp(b);
        return To(a, f, ep(c), d, e)
    }
    
    function concatCookieData(valor_cookie, versao_cookie, cookie_domain, cookie_path) {
        /*
            valor_cookie  = 795306973.1733023458  ou  1733023458.1.0.1733023480.0.0.0
            versao_cookie = GS1 ou GA1
            cookie_domain = auto - Specifies the domain used to store the analytics cookie.
            cookie_path   = / - Specifies the subpath used to store the analytics cookie.
        */
        var domain_level = getDomainLevel(cookie_domain, cookie_path);

        var cookie_concatenado = [versao_cookie, domain_level, valor_cookie].join(".");
        /*
            GS1.1.1733023458.1.0.1733023480.0.0.0
            ou
            GA1.1.795306973.1733023458
        */
        return cookie_concatenado
    };
    

    function kp(a, b, c, d) {
        var e, f = Number(a.Fb != null ? a.Fb : void 0);
        f !== 0 && (e = new Date((b || getCurrentTimestamp()) + 1E3 * (f || 7776E3)));
        return {
            path: a.path,
            domain: a.domain,
            flags: a.flags,
            encode: !!c,
            expires: e,
            Hb: d
        }
    };
    var lp;

    function mp() {
        function a(g) {
            c(g.target || g.srcElement || {})
        }

        function b(g) {
            d(g.target || g.srcElement || {})
        }
        var c = np,
            d = op,
            e = pp();
        if (!e.init) {
            uc(E, "mousedown", a);
            uc(E, "keyup", a);
            uc(E, "submit", b);
            var f = HTMLFormElement.prototype.submit;
            HTMLFormElement.prototype.submit = function() {
                d(this);
                f.call(this)
            };
            e.init = !0
        }
    }

    function qp(a, b, c, d, e) {
        var f = {
            callback: a,
            domains: b,
            fragment: c === 2,
            placement: c,
            forms: d,
            sameHost: e
        };
        pp().decorators.push(f)
    }

    function rp(a, b, c) {
        for (var d = pp().decorators, e = {}, f = 0; f < d.length; ++f) {
            var g = d[f],
                k;
            if (k = !c || g.forms) a: {
                var m = g.domains,
                    n = a,
                    p = !!g.sameHost;
                if (m && (p || n !== E.location.hostname))
                    for (var q = 0; q < m.length; q++)
                        if (m[q] instanceof RegExp) {
                            if (m[q].test(n)) {
                                k = !0;
                                break a
                            }
                        } else if (n.indexOf(m[q]) >= 0 || p && m[q].indexOf(n) >= 0) {
                    k = !0;
                    break a
                }
                k = !1
            }
            if (k) {
                var r = g.placement;
                r === void 0 && (r = g.fragment ? 2 : 1);
                r === b && tb(e, g.callback())
            }
        }
        return e
    }

    function pp() {
        console.log("e");
        var a = kc("google_tag_data", {}),
            b = a.gl;
        b && b.decorators || (b = {
            decorators: []
        }, a.gl = b);
        return b
    };
    var sp = /(.*?)\*(.*?)\*(.*)/,
        tp = /^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,
        up = /^(?:www\.|m\.|amp\.)+/,
        vp = /([^?#]+)(\?[^#]*)?(#.*)?/;

    function wp(a) {
        var b = vp.exec(a);
        if (b) return {
            ei: b[1],
            query: b[2],
            fragment: b[3]
        }
    }

    function xp(a) {
        return new RegExp("(.*?)(^|&)" + a + "=([^&]*)&?(.*)")
    }

    function yp(a, b) {
        var c = [gc.userAgent, (new Date).getTimezoneOffset(), gc.userLanguage || gc.language, Math.floor(getCurrentTimestamp() / 60 / 1E3) - (b === void 0 ? 0 : b), a].join("*"),
            d;
        if (!(d = lp)) {
            for (var e = Array(256), f = 0; f < 256; f++) {
                for (var g = f, k = 0; k < 8; k++) g = g & 1 ? g >>> 1 ^ 3988292384 : g >>> 1;
                e[f] = g
            }
            d = e
        }
        lp = d;
        for (var m = 4294967295, n = 0; n < c.length; n++) m = m >>> 8 ^ lp[(m ^ c.charCodeAt(n)) & 255];
        return ((m ^ -1) >>> 0).toString(36)
    }

    function zp(a) {
        return function(b) {
            var c = Bj(C.location.href),
                d = c.search.replace("?", ""),
                e = uj(d, "_gl", !1, !0) || "";
            b.query = Ap(e) || {};
            var f = vj(c, "fragment"),
                g;
            var k = -1;
            if (vb(f, "_gl=")) k = 4;
            else {
                var m = f.indexOf("&_gl=");
                m > 0 && (k = m + 3 + 2)
            }
            if (k < 0) g = void 0;
            else {
                var n = f.indexOf("&", k);
                g = n < 0 ? f.substring(k) : f.substring(k, n)
            }
            b.fragment = Ap(g || "") || {};
            a && Bp(c, d, f)
        }
    }

    function Cp(a, b) {
        var c = xp(a).exec(b),
            d = b;
        if (c) {
            var e = c[2],
                f = c[4];
            d = c[1];
            f && (d = d + e + f)
        }
        return d
    }

    function Bp(a, b, c) {
        function d(g, k) {
            var m = Cp("_gl", g);
            m.length && (m = k + m);
            return m
        }
        if (fc && fc.replaceState) {
            var e = xp("_gl");
            if (e.test(b) || e.test(c)) {
                var f = vj(a, "path");
                b = d(b, "?");
                c = d(c, "#");
                fc.replaceState({}, "", "" + f + b + c)
            }
        }
    }

    function Dp(a, b) {
        var c = zp(!!b),
            d = pp();
        d.data || (d.data = {
            query: {},
            fragment: {}
        }, c(d.data));
        var e = {},
            f = d.data;
        f && (tb(e, f.query), a && tb(e, f.fragment));
        return e
    }
    var Ap = function(a) {
        try {
            var b = Ep(a, 3);
            if (b !== void 0) {
                for (var c = {}, d = b ? b.split("*") : [], e = 0; e + 1 < d.length; e += 2) {
                    var f = d[e],
                        g = Ta(d[e + 1]);
                    c[f] = g
                }
                Va("TAGGING", 6);
                return c
            }
        } catch (k) {
            Va("TAGGING", 8)
        }
    };

    function Ep(a, b) {
        if (a) {
            var c;
            a: {
                for (var d = a, e = 0; e < 3; ++e) {
                    var f = sp.exec(d);
                    if (f) {
                        c = f;
                        break a
                    }
                    d = decodeURIComponent(d)
                }
                c = void 0
            }
            var g = c;
            if (g && g[1] === "1") {
                var k = g[3],
                    m;
                a: {
                    for (var n = g[2], p = 0; p < b; ++p)
                        if (n === yp(k, p)) {
                            m = !0;
                            break a
                        } m = !1
                }
                if (m) return k;
                Va("TAGGING", 7)
            }
        }
    }

    function Fp(a, b, c, d, e) {
        function f(p) {
            p = Cp(a, p);
            var q = p.charAt(p.length - 1);
            p && q !== "&" && (p += "&");
            return p + n
        }
        d = d === void 0 ? !1 : d;
        e = e === void 0 ? !1 : e;
        var g = wp(c);
        if (!g) return "";
        var k = g.query || "",
            m = g.fragment || "",
            n = a + "=" + b;
        d ? m.substring(1).length !== 0 && e || (m = "#" + f(m.substring(1))) : k = "?" + f(k.substring(1));
        return "" + g.ei + k + m
    }

    function Gp(a, b) {
        function c(n, p, q) {
            var r;
            a: {
                for (var u in n)
                    if (n.hasOwnProperty(u)) {
                        r = !0;
                        break a
                    } r = !1
            }
            if (r) {
                var v, t = [],
                    w;
                for (w in n)
                    if (n.hasOwnProperty(w)) {
                        var x = n[w];
                        x !== void 0 && x === x && x !== null && x.toString() !== "[object Object]" && (t.push(w), t.push(Ra(String(x))))
                    } var y = t.join("*");
                v = ["1", yp(y), y].join("*");
                d ? ($a(4) || $a(1) || !p) && Hp("_gl", v, a, p, q) : Ip("_gl", v, a, p, q)
            }
        }
        var d = (a.tagName || "").toUpperCase() === "FORM",
            e = rp(b, 1, d),
            f = rp(b, 2, d),
            g = rp(b, 4, d),
            k = rp(b, 3, d);
        c(e, !1, !1);
        c(f, !0, !1);
        $a(1) && c(g, !0, !0);
        for (var m in k) k.hasOwnProperty(m) &&
            Jp(m, k[m], a)
    }

    function Jp(a, b, c) {
        c.tagName.toLowerCase() === "a" ? Ip(a, b, c) : c.tagName.toLowerCase() === "form" && Hp(a, b, c)
    }

    function Ip(a, b, c, d, e) {
        d = d === void 0 ? !1 : d;
        e = e === void 0 ? !1 : e;
        var f;
        if (f = c.href) {
            var g;
            if (!(g = !$a(6) || d)) {
                var k = C.location.href,
                    m = wp(c.href),
                    n = wp(k);
                g = !(m && n && m.ei === n.ei && m.query === n.query && m.fragment)
            }
            f = g
        }
        if (f) {
            var p = Fp(a, b, c.href, d, e);
            Xb.test(p) && (c.href = p)
        }
    }

    function Hp(a, b, c, d, e) {
        d = d === void 0 ? !1 : d;
        e = e === void 0 ? !1 : e;
        if (c && c.action) {
            var f = (c.method || "").toLowerCase();
            if (f !== "get" || d) {
                if (f === "get" || f === "post") {
                    var g = Fp(a, b, c.action, d, e);
                    Xb.test(g) && (c.action = g)
                }
            } else {
                for (var k = c.childNodes || [], m = !1, n = 0; n < k.length; n++) {
                    var p = k[n];
                    if (p.name === a) {
                        p.setAttribute("value", b);
                        m = !0;
                        break
                    }
                }
                if (!m) {
                    var q = E.createElement("input");
                    q.setAttribute("type", "hidden");
                    q.setAttribute("name", a);
                    q.setAttribute("value", b);
                    c.appendChild(q)
                }
            }
        }
    }

    function np(a) {
        try {
            var b;
            a: {
                for (var c = a, d = 100; c && d > 0;) {
                    if (c.href && c.nodeName.match(/^a(?:rea)?$/i)) {
                        b = c;
                        break a
                    }
                    c = c.parentNode;
                    d--
                }
                b = null
            }
            var e = b;
            if (e) {
                var f = e.protocol;
                f !== "http:" && f !== "https:" || Gp(e, e.hostname)
            }
        } catch (g) {}
    }

    function op(a) {
        try {
            if (a.action) {
                var b = vj(Bj(a.action), "host");
                Gp(a, b)
            }
        } catch (c) {}
    }

    function Kp(a, b, c, d) {
        mp();
        var e = c === "fragment" ? 2 : 1;
        d = !!d;
        qp(a, b, e, d, !1);
        e === 2 && Va("TAGGING", 23);
        d && Va("TAGGING", 24)
    }

    function Lp(a, b) {
        mp();
        qp(a, [xj(C.location, "host", !0)], b, !0, !0)
    }

    function Mp() {
        var a = E.location.hostname,
            b = tp.exec(E.referrer);
        if (!b) return !1;
        var c = b[2],
            d = b[1],
            e = "";
        if (c) {
            var f = c.split("/"),
                g = f[1];
            e = g === "s" ? decodeURIComponent(f[2]) : decodeURIComponent(g)
        } else if (d) {
            if (d.indexOf("xn--") === 0) return !1;
            e = d.replace(/-/g, ".").replace(/\.\./g, "-")
        }
        var k = a.replace(up, ""),
            m = e.replace(up, "");
        return k === m || wb(k, "." + m)
    }

    function Np(a, b) {
        return a === !1 ? !1 : a || b || Mp()
    };
    var Op = ["1"],
        Pp = {},
        Qp = {};

    function Rp(a, b) {
        b = b === void 0 ? !0 : b;
        var c = Sp(a.prefix);
        if (!Pp[c])
            if (Tp(c, a.path, a.domain)) {
                var d = Qp[Sp(a.prefix)];
                Up(a, d ? d.id : void 0, d ? d.Yh : void 0)
            } else {
                var e = Cj("auiddc");
                if (e) Va("TAGGING", 17), Pp[c] = e;
                else if (b) {
                    var f = Sp(a.prefix),
                        g = generateClientID();
                    Vp(f, g, a);
                    Tp(c, a.path, a.domain)
                }
            }
    }

    function Up(a, b, c) {
        var d = Sp(a.prefix),
            e = Pp[d];
        if (e) {
            var f = e.split(".");
            if (f.length === 2) {
                var g = Number(f[1]) || 0;
                if (g) {
                    var k = e;
                    b && (k = e + "." + b + "." + (c ? c : Math.floor(getCurrentTimestamp() / 1E3)));
                    Vp(d, k, a, g * 1E3)
                }
            }
        }
    }

    function Vp(a, b, c, d) {
        var e = concatCookieData(b, "1", c.domain, c.path),
            f = kp(c, d);
        f.Hb = Wp();
        ap(a, e, f)
    }

    function Tp(a, b, c) {
        var d = ip(a, b, c, Op, Wp());
        if (!d) return !1;
        Xp(a, d);
        return !0
    }

    function Xp(a, b) {
        var c = b.split(".");
        c.length === 5 ? (Pp[a] = c.slice(0, 2).join("."), Qp[a] = {
            id: c.slice(2, 4).join("."),
            Yh: Number(c[4]) || 0
        }) : c.length === 3 ? Qp[a] = {
            id: c.slice(0, 2).join("."),
            Yh: Number(c[2]) || 0
        } : Pp[a] = b
    }

    function Sp(a) {
        return (a || "_gcl") + "_au"
    }

    function Yp(a) {
        function b() {
            Yk(c) && a()
        }
        var c = Wp();
        el(function() {
            b();
            Yk(c) || fl(b, c)
        }, c)
    }

    function Zp(a) {
        var b = Dp(!0),
            c = Sp(a.prefix);
        Yp(function() {
            var d = b[c];
            if (d) {
                Xp(c, d);
                var e = Number(Pp[c].split(".")[1]) * 1E3;
                if (e) {
                    Va("TAGGING", 16);
                    var f = kp(a, e);
                    f.Hb = Wp();
                    var g = concatCookieData(d, "1", a.domain, a.path);
                    ap(c, g, f)
                }
            }
        })
    }

    function $p(a, b, c, d, e) {
        e = e || {};
        var f = function() {
            var g = {},
                k = ip(a, e.path, e.domain, Op, Wp());
            k && (g[a] = k);
            return g
        };
        Yp(function() {
            Kp(f, b, c, d)
        })
    }

    function Wp() {
        return ["ad_storage", "ad_user_data"]
    };
    var aq = {},
        bq = (aq.k = {
            La: /^[\w-]+$/
        }, aq.b = {
            La: /^[\w-]+$/,
            li: !0
        }, aq.i = {
            La: /^[1-9]\d*$/
        }, aq.u = {
            La: /^[1-9]\d*$/
        }, aq);
    var cq = {},
        fq = (cq[5] = {
            Lk: {
                2: dq
            },
            Ch: ["k", "i", "b", "u"]
        }, cq[4] = {
            Lk: {
                2: dq,
                GCL: eq
            },
            Ch: ["k", "i", "b"]
        }, cq);

    function gq(a) {
        var b = fq[5];
        if (b) {
            var c = a.split(".")[0];
            if (c) {
                var d = b.Lk[c];
                if (d) return d(a, 5)
            }
        }
    }

    function dq(a, b) {
        var c = a.split(".");
        if (c.length === 3) {
            var d = {},
                e = fq[b];
            if (e) {
                for (var f = e.Ch, g = l(c[2].split("$")), k = g.next(); !k.done; k = g.next()) {
                    var m = k.value,
                        n = m[0];
                    if (f.indexOf(n) !== -1) try {
                        var p = decodeURIComponent(m.substring(1)),
                            q = bq[n];
                        q && (q.li ? (d[n] = d[n] || [], d[n].push(p)) : d[n] = p)
                    } catch (r) {}
                }
                return d
            }
        }
    }

    function hq(a, b) {
        var c = fq[5];
        if (c) {
            for (var d = [], e = l(c.Ch), f = e.next(); !f.done; f = e.next()) {
                var g = f.value,
                    k = bq[g];
                if (k) {
                    var m = a[g];
                    if (m !== void 0)
                        if (k.li && Array.isArray(m))
                            for (var n = l(m), p = n.next(); !p.done; p = n.next()) d.push(encodeURIComponent("" + g + p.value));
                        else d.push(encodeURIComponent("" + g + m))
                }
            }
            return ["2", b || "1", d.join("$")].join(".")
        }
    }

    function eq(a) {
        var b = a.split(".");
        b.shift();
        var c = b.shift(),
            d = b.shift(),
            e = {};
        return e.k = d, e.i = c, e.b = b, e
    };
    var iq = new Map([
        [5, "ad_storage"],
        [4, ["ad_storage", "ad_user_data"]]
    ]);

    function jq(a) {
        if (fq[5]) {
            for (var b = [], c = Qo(a, void 0, void 0, iq.get(5)), d = l(c), e = d.next(); !e.done; e = d.next()) {
                var f = gq(e.value);
                f && (kq(f), b.push(f))
            }
            return b
        }
    }

    function lq(a, b, c, d) {
        c = c || {};
        var e = getDomainLevel(c.domain, c.path),
            f = hq(b, e);
        if (f) {
            var g = kp(c, d, void 0, iq.get(5));
            ap(a, f, g)
        }
    }

    function mq(a, b) {
        var c = b.La;
        return typeof c === "function" ? c(a) : c.test(a)
    }

    function kq(a) {
        for (var b = l(Object.keys(a)), c = b.next(), d = {}; !c.done; d = {
                Le: void 0
            }, c = b.next()) {
            var e = c.value,
                f = a[e];
            d.Le = bq[e];
            d.Le ? d.Le.li ? a[e] = Array.isArray(f) ? f.filter(function(g) {
                return function(k) {
                    return mq(k, g.Le)
                }
            }(d)) : void 0 : typeof f === "string" && mq(f, d.Le) || (a[e] = void 0) : a[e] = void 0
        }
    };

    function nq(a) {
        for (var b = [], c = E.cookie.split(";"), d = new RegExp("^\\s*" + (a || "_gac") + "_(UA-\\d+-\\d+)=\\s*(.+?)\\s*$"), e = 0; e < c.length; e++) {
            var f = c[e].match(d);
            f && b.push({
                si: f[1],
                value: f[2],
                timestamp: Number(f[2].split(".")[1]) || 0
            })
        }
        b.sort(function(g, k) {
            return k.timestamp - g.timestamp
        });
        return b
    }

    function oq(a, b) {
        var c = nq(a),
            d = {};
        if (!c || !c.length) return d;
        for (var e = 0; e < c.length; e++) {
            var f = c[e].value.split(".");
            if (!(f[0] !== "1" || b && f.length < 3 || !b && f.length !== 3) && Number(f[1])) {
                d[c[e].si] || (d[c[e].si] = []);
                var g = {
                    version: f[0],
                    timestamp: Number(f[1]) * 1E3,
                    W: f[2]
                };
                b && f.length > 3 && (g.labels = f.slice(3));
                d[c[e].si].push(g)
            }
        }
        return d
    };
    var pq = ["ad_storage", "ad_user_data"];

    function qq() {
        var a = rq();
        if (a.error) return a;
        if (!a.value) return {
            error: 2
        };
        var b;
        try {
            b = a.value.gclid
        } catch (c) {
            return {
                error: 11
            }
        }
        return b ? {
            value: b
        } : {
            value: void 0
        }
    }

    function rq() {
        if (!Yk(pq)) return {
            error: 3
        };
        try {
            if (!C.localStorage) return {
                error: 1
            }
        } catch (d) {
            return {
                error: 14
            }
        }
        var a = {
                schema: "gcl",
                version: 1
            },
            b = void 0;
        try {
            b = C.localStorage.getItem("_gcl_ls")
        } catch (d) {
            return {
                error: 13
            }
        }
        try {
            if (b) {
                var c = JSON.parse(b);
                if (c && typeof c === "object") a = c;
                else return {
                    error: 12
                }
            }
        } catch (d) {
            return {
                error: 8
            }
        }
        if (a.schema !== "gcl") return {
            error: 4
        };
        if (a.version !== 1) return {
            error: 5
        };
        try {
            sq(a)
        } catch (d) {
            return {
                error: 8
            }
        }
        return {
            value: a,
            error: 0
        }
    }

    function sq(a) {
        if (a && typeof a === "object")
            if ("expires" in a && "value" in a) {
                var b;
                typeof a.expires === "number" ? b = a.expires : b = typeof a.expires === "string" ? Number(a.expires) : NaN;
                !isNaN(b) && Date.now() <= b || (a.value = null, a.error = 9)
            } else
                for (var c = l(Object.keys(a)), d = c.next(); !d.done; d = c.next()) sq(a[d.value])
    };
    var tq = /^\w+$/,
        uq = /^[\w-]+$/,
        vq = {},
        wq = (vq.aw = "_aw", vq.dc = "_dc", vq.gf = "_gf", vq.gp = "_gp", vq.gs = "_gs", vq.ha = "_ha", vq.ag = "_ag", vq.gb = "_gb", vq);

    function xq() {
        return ["ad_storage", "ad_user_data"]
    }

    function yq(a) {
        return !$a(10) || Yk(a)
    }

    function zq(a, b) {
        function c() {
            var d = yq(b);
            d && a();
            return d
        }
        el(function() {
            c() || fl(c, b)
        }, b)
    }

    function Aq(a) {
        return Bq(a).map(function(b) {
            return b.W
        })
    }

    function Cq(a) {
        return Dq(a).filter(function(b) {
            return b.W
        }).map(function(b) {
            return b.W
        })
    }

    function Dq(a) {
        var b = Eq(a.prefix),
            c = Fq("gb", b),
            d = Fq("ag", b);
        if (!d || !c) return [];
        var e = function(k) {
                return function(m) {
                    m.type = k;
                    return m
                }
            },
            f = Bq(c).map(e("gb")),
            g = Gq(d).map(e("ag"));
        return f.concat(g).sort(function(k, m) {
            return m.timestamp - k.timestamp
        })
    }

    function Hq(a, b, c, d, e, f) {
        var g = eb(a, function(k) {
            return k.W === c
        });
        g ? (g.timestamp < d && (g.timestamp = d, g.Jd = f), g.labels = Iq(g.labels || [], e || [])) : a.push({
            version: b,
            W: c,
            timestamp: d,
            labels: e,
            Jd: f
        })
    }

    function Gq(a) {
        for (var b = jq(a) || [], c = [], d = l(b), e = d.next(); !e.done; e = d.next()) {
            var f = e.value,
                g = f,
                k = g.k,
                m = g.b,
                n = Jq(f);
            if (n) {
                var p = void 0;
                $a(11) && (p = f.u);
                Hq(c, "2", k, n, m || [], p)
            }
        }
        return c.sort(function(q, r) {
            return r.timestamp - q.timestamp
        })
    }

    function Bq(a) {
        for (var b = [], c = Qo(a, E.cookie, void 0, xq()), d = l(c), e = d.next(); !e.done; e = d.next()) {
            var f = Kq(e.value);
            if (f != null) {
                var g = f;
                Hq(b, g.version, g.W, g.timestamp, g.labels)
            }
        }
        b.sort(function(k, m) {
            return m.timestamp - k.timestamp
        });
        return Lq(b)
    }

    function Mq(a, b) {
        for (var c = [], d = l(a), e = d.next(); !e.done; e = d.next()) {
            var f = e.value;
            c.includes(f) || c.push(f)
        }
        for (var g = l(b), k = g.next(); !k.done; k = g.next()) {
            var m = k.value;
            c.includes(m) || c.push(m)
        }
        return c
    }

    function Nq(a, b) {
        var c = eb(a, function(d) {
            return d.W === b.W
        });
        c ? (c.timestamp < b.timestamp && (c.timestamp = b.timestamp, c.Jd = b.Jd), c.Pa = c.Pa ? b.Pa ? c.timestamp < b.timestamp ? b.Pa : c.Pa : c.Pa || 0 : b.Pa || 0, c.labels = Mq(c.labels || [], b.labels || []), c.Sc = Mq(c.Sc || [], b.Sc || [])) : a.push(b)
    }

    function Oq() {
        var a = qq();
        if (!a || a.error || !a.value || typeof a.value !== "object") return null;
        var b = a.value;
        try {
            if (!("value" in b && b.value) || typeof b.value !== "object") return null;
            var c = b.value,
                d = c.value;
            return d && d.match(uq) ? {
                version: "",
                W: d,
                timestamp: Number(c.creationTimeMs) || 0,
                labels: [],
                Pa: c.linkDecorationSource || 0,
                Sc: [2]
            } : null
        } catch (e) {
            return null
        }
    }

    function Pq(a) {
        for (var b = [], c = Qo(a, E.cookie, void 0, xq()), d = l(c), e = d.next(); !e.done; e = d.next()) {
            var f = Kq(e.value);
            f != null && (f.Jd = void 0, f.Pa = 0, f.Sc = [1], Nq(b, f))
        }
        var g = Oq();
        g && (g.Jd = void 0, g.Pa = g.Pa || 0, g.Sc = g.Sc || [2], Nq(b, g));
        b.sort(function(k, m) {
            return m.timestamp - k.timestamp
        });
        return Lq(b)
    }

    function Iq(a, b) {
        if (!a.length) return b;
        if (!b.length) return a;
        var c = {};
        return a.concat(b).filter(function(d) {
            return c.hasOwnProperty(d) ? !1 : c[d] = !0
        })
    }

    function Eq(a) {
        return a && typeof a === "string" && a.match(tq) ? a : "_gcl"
    }

    function Qq(a, b, c) {
        var d = Bj(a),
            e = vj(d, "query", !1, void 0, "gclsrc"),
            f = {
                value: vj(d, "query", !1, void 0, "gclid"),
                Pa: c ? 4 : 2
            };
        if (b && (!f.value || !e)) {
            var g = d.hash.replace("#", "");
            f.value || (f.value = uj(g, "gclid", !1), f.Pa = 3);
            e || (e = uj(g, "gclsrc", !1))
        }
        return !f.value || e !== void 0 && e !== "aw" && e !== "aw.ds" ? [] : [f]
    }

    function Rq(a, b) {
        var c = Bj(a),
            d = vj(c, "query", !1, void 0, "gclid"),
            e = vj(c, "query", !1, void 0, "gclsrc"),
            f = vj(c, "query", !1, void 0, "wbraid");
        f = Cb(f);
        var g = vj(c, "query", !1, void 0, "gbraid"),
            k = vj(c, "query", !1, void 0, "gad_source"),
            m = vj(c, "query", !1, void 0, "dclid");
        if (b && !(d && e && f && g)) {
            var n = c.hash.replace("#", "");
            d = d || uj(n, "gclid", !1);
            e = e || uj(n, "gclsrc", !1);
            f = f || uj(n, "wbraid", !1);
            g = g || uj(n, "gbraid", !1);
            k = k || uj(n, "gad_source", !1)
        }
        return Sq(d, e, m, f, g, k)
    }

    function Tq() {
        return Rq(C.location.href, !0)
    }

    function Sq(a, b, c, d, e, f) {
        var g = {},
            k = function(m, n) {
                g[n] || (g[n] = []);
                g[n].push(m)
            };
        g.gclid = a;
        g.gclsrc = b;
        g.dclid = c;
        if (a !== void 0 && a.match(uq)) switch (b) {
            case void 0:
                k(a, "aw");
                break;
            case "aw.ds":
                k(a, "aw");
                k(a, "dc");
                break;
            case "ds":
                k(a, "dc");
                break;
            case "3p.ds":
                k(a, "dc");
                break;
            case "gf":
                k(a, "gf");
                break;
            case "ha":
                k(a, "ha")
        }
        c && k(c, "dc");
        d !== void 0 && uq.test(d) && (g.wbraid = d, k(d, "gb"));
        e !== void 0 && uq.test(e) && (g.gbraid = e, k(e, "ag"));
        f !== void 0 && uq.test(f) && (g.gad_source = f, k(f, "gs"));
        return g
    }

    function Uq(a) {
        var b = Tq();
        if ($a(7)) {
            for (var c = !0, d = l(Object.keys(b)), e = d.next(); !e.done; e = d.next())
                if (b[e.value] !== void 0) {
                    c = !1;
                    break
                } c && (b = Rq(C.document.referrer, !1), b.gad_source = void 0)
        }
        Vq(b, !1, a)
    }

    function Wq(a) {
        Uq(a);
        var b = Qq(C.location.href, !0, !1);
        $a(7) && !b.length && (b = Qq(C.document.referrer, !1, !0));
        if (b.length) {
            var c = b[0];
            a = a || {};
            var d = getCurrentTimestamp(),
                e = kp(a, d, !0),
                f = xq(),
                g = function() {
                    if (yq(f) && e.expires !== void 0) {
                        var k = {
                                value: {
                                    value: c.value,
                                    creationTimeMs: d,
                                    linkDecorationSource: c.Pa
                                },
                                expires: Number(e.expires)
                            },
                            m = rq();
                        if (!m.error && m.value) a: if (m.value.gclid = k, !m.error && m.value) {
                            var n = m.value,
                                p;
                            try {
                                p = JSON.stringify(n)
                            } catch (q) {
                                break a
                            }
                            try {
                                C.localStorage.setItem("_gcl_ls", p)
                            } catch (q) {}
                        }
                    }
                };
            el(function() {
                g();
                yq(f) || fl(g, f)
            }, f)
        }
    }

    function Vq(a, b, c, d, e) {
        c = c || {};
        e = e || [];
        var f = Eq(c.prefix),
            g = d || getCurrentTimestamp(),
            k = Math.round(g / 1E3),
            m = xq(),
            n = !1,
            p = !1,
            q = function() {
                if (yq(m)) {
                    var r = kp(c, g, !0);
                    r.Hb = m;
                    for (var u = function(H, W) {
                            var N = Fq(H, f);
                            N && (ap(N, W, r), H !== "gb" && (n = !0))
                        }, v = function(H) {
                            var W = ["GCL", k, H];
                            e.length > 0 && W.push(e.join("."));
                            return W.join(".")
                        }, t = l(["aw", "dc", "gf", "ha", "gp"]), w = t.next(); !w.done; w = t.next()) {
                        var x = w.value;
                        a[x] && u(x, v(a[x][0]))
                    }
                    if (!n && a.gb) {
                        var y = a.gb[0],
                            A = Fq("gb", f);
                        !b && Bq(A).some(function(H) {
                            return H.W === y && H.labels && H.labels.length >
                                0
                        }) || u("gb", v(y))
                    }
                }
                if (!p && a.gbraid && yq("ad_storage") && (p = !0, !n)) {
                    var B = a.gbraid,
                        D = Fq("ag", f);
                    if (b || !Gq(D).some(function(H) {
                            return H.W === B && H.labels && H.labels.length > 0
                        })) {
                        var I = {},
                            J = (I.k = B, I.i = "" + k, I.b = e, I);
                        lq(D, J, c, g)
                    }
                }
                Xq(a, f, g, c)
            };
        el(function() {
            q();
            yq(m) || fl(q, m)
        }, m)
    }

    function Xq(a, b, c, d) {
        if (a.gad_source !== void 0 && yq("ad_storage")) {
            if ($a(5)) {
                var e = Ic();
                if (e === "r" || e === "h") return
            }
            var f = a.gad_source,
                g = Fq("gs", b);
            if (g) {
                var k = Math.round((getCurrentTimestamp() - (Hc() || 0)) / 1E3),
                    m;
                if ($a(11)) {
                    var n, p = String,
                        q = C.location.hostname,
                        r = C.location.pathname,
                        u = q = Dj(q);
                    u.split(".").length > 2 && (u = u.replace(/^(www[0-9]*|web|ftp|wap|home|m|w|amp|mobile)\./, ""));
                    q = u;
                    r = Dj(r);
                    var v = r.split(";")[0];
                    v = v.replace(/\/(ar|slp|web|index)?\/?$/, "");
                    n = p(Oo(("" + q + v).toLowerCase()));
                    var t = {};
                    m = (t.k = f, t.i = "" + k, t.u =
                        n, t)
                } else {
                    var w = {};
                    m = (w.k = f, w.i = "" + k, w)
                }
                lq(g, m, d, c)
            }
        }
    }

    function Yq(a, b) {
        var c = Dp(!0);
        zq(function() {
            for (var d = Eq(b.prefix), e = 0; e < a.length; ++e) {
                var f = a[e];
                if (wq[f] !== void 0) {
                    var g = Fq(f, d),
                        k = c[g];
                    if (k) {
                        var m = Math.min(Zq(k), getCurrentTimestamp()),
                            n;
                        b: {
                            for (var p = m, q = Qo(g, E.cookie, void 0, xq()), r = 0; r < q.length; ++r)
                                if (Zq(q[r]) > p) {
                                    n = !0;
                                    break b
                                } n = !1
                        }
                        if (!n) {
                            var u = kp(b, m, !0);
                            u.Hb = xq();
                            ap(g, k, u)
                        }
                    }
                }
            }
            Vq(Sq(c.gclid, c.gclsrc), !1, b)
        }, xq())
    }

    function $q(a) {
        var b = ["ag"],
            c = Dp(!0),
            d = Eq(a.prefix);
        zq(function() {
            for (var e = 0; e < b.length; ++e) {
                var f = Fq(b[e], d);
                if (f) {
                    var g = c[f];
                    if (g) {
                        var k = gq(g);
                        if (k) {
                            var m = Jq(k);
                            m || (m = getCurrentTimestamp());
                            var n;
                            a: {
                                for (var p = m, q = jq(f), r = 0; r < q.length; ++r)
                                    if (Jq(q[r]) > p) {
                                        n = !0;
                                        break a
                                    } n = !1
                            }
                            if (n) break;
                            k.i = "" + Math.round(m / 1E3);
                            lq(f, k, a, m)
                        }
                    }
                }
            }
        }, ["ad_storage"])
    }

    function Fq(a, b) {
        var c = wq[a];
        if (c !== void 0) return b + c
    }

    function Zq(a) {
        return ar(a.split(".")).length !== 0 ? (Number(a.split(".")[1]) || 0) * 1E3 : 0
    }

    function Jq(a) {
        return a ? (Number(a.i) || 0) * 1E3 : 0
    }

    function Kq(a) {
        var b = ar(a.split("."));
        return b.length === 0 ? null : {
            version: b[0],
            W: b[2],
            timestamp: (Number(b[1]) || 0) * 1E3,
            labels: b.slice(3)
        }
    }

    function ar(a) {
        return a.length < 3 || a[0] !== "GCL" && a[0] !== "1" || !/^\d+$/.test(a[1]) || !uq.test(a[2]) ? [] : a
    }

    function br(a, b, c, d, e) {
        if (Array.isArray(b) && Po(C)) {
            var f = Eq(e),
                g = function() {
                    for (var k = {}, m = 0; m < a.length; ++m) {
                        var n = Fq(a[m], f);
                        if (n) {
                            var p = Qo(n, E.cookie, void 0, xq());
                            p.length && (k[n] = p.sort()[p.length - 1])
                        }
                    }
                    return k
                };
            zq(function() {
                Kp(g, b, c, d)
            }, xq())
        }
    }

    function cr(a, b, c, d) {
        if (Array.isArray(a) && Po(C)) {
            var e = ["ag"],
                f = Eq(d),
                g = function() {
                    for (var k = {}, m = 0; m < e.length; ++m) {
                        var n = Fq(e[m], f);
                        if (!n) return {};
                        var p = jq(n);
                        if (p.length) {
                            var q = p.sort(function(r, u) {
                                return Jq(u) - Jq(r)
                            })[0];
                            k[n] = hq(q)
                        }
                    }
                    return k
                };
            zq(function() {
                Kp(g, a, b, c)
            }, ["ad_storage"])
        }
    }

    function Lq(a) {
        return a.filter(function(b) {
            return uq.test(b.W)
        })
    }

    function dr(a, b) {
        if (Po(C)) {
            for (var c = Eq(b.prefix), d = {}, e = 0; e < a.length; e++) wq[a[e]] && (d[a[e]] = wq[a[e]]);
            zq(function() {
                jb(d, function(f, g) {
                    var k = Qo(c + g, E.cookie, void 0, xq());
                    k.sort(function(u, v) {
                        return Zq(v) - Zq(u)
                    });
                    if (k.length) {
                        var m = k[0],
                            n = Zq(m),
                            p = ar(m.split(".")).length !== 0 ? m.split(".").slice(3) : [],
                            q = {},
                            r;
                        r = ar(m.split(".")).length !== 0 ? m.split(".")[2] : void 0;
                        q[f] = [r];
                        Vq(q, !0, b, n, p)
                    }
                })
            }, xq())
        }
    }

    function er(a) {
        var b = ["ag"],
            c = ["gbraid"];
        zq(function() {
            for (var d = Eq(a.prefix), e = 0; e < b.length; ++e) {
                var f = Fq(b[e], d);
                if (!f) break;
                var g = jq(f);
                if (g.length) {
                    var k = g.sort(function(q, r) {
                            return Jq(r) - Jq(q)
                        })[0],
                        m = Jq(k),
                        n = k.b,
                        p = {};
                    p[c[e]] = k.k;
                    Vq(p, !0, a, m, n)
                }
            }
        }, ["ad_storage"])
    }

    function fr(a, b) {
        for (var c = 0; c < b.length; ++c)
            if (a[b[c]]) return !0;
        return !1
    }

    function gr(a) {
        function b(k, m, n) {
            n && (k[m] = n)
        }
        if (bl()) {
            var c = Tq(),
                d;
            a.includes("gad_source") && (d = c.gad_source !== void 0 ? c.gad_source : Dp(!1)._gs);
            if (fr(c, a) || d) {
                var e = {};
                b(e, "gclid", c.gclid);
                b(e, "dclid", c.dclid);
                b(e, "gclsrc", c.gclsrc);
                b(e, "wbraid", c.wbraid);
                b(e, "gbraid", c.gbraid);
                Lp(function() {
                    return e
                }, 3);
                var f = {},
                    g = (f._up = "1", f);
                b(g, "_gs", d);
                Lp(function() {
                    return g
                }, 1)
            }
        }
    }

    function hr(a) {
        if (!$a(1)) return null;
        var b = Dp(!0).gad_source;
        if (b != null) return C.location.hash = "", b;
        if ($a(2)) {
            var c = Bj(C.location.href);
            b = vj(c, "query", !1, void 0, "gad_source");
            if (b != null) return b;
            var d = Tq();
            if (fr(d, a)) return "0"
        }
        return null
    }

    function ir(a) {
        var b = hr(a);
        b != null && Lp(function() {
            var c = {};
            return c.gad_source = b, c
        }, 4)
    }

    function jr(a, b, c) {
        var d = [];
        if (b.length === 0) return d;
        for (var e = {}, f = 0; f < b.length; f++) {
            var g = b[f],
                k = g.type ? g.type : "gcl";
            (g.labels || []).indexOf(c) === -1 ? (a.push(0), e[k] || d.push(g)) : a.push(1);
            e[k] = !0
        }
        return d
    }

    function kr(a, b, c, d) {
        var e = [];
        c = c || {};
        if (!yq(xq())) return e;
        var f = Bq(a),
            g = jr(e, f, b);
        if (g.length && !d)
            for (var k = l(g), m = k.next(); !m.done; m = k.next()) {
                var n = m.value,
                    p = n.timestamp,
                    q = [n.version, Math.round(p / 1E3), n.W].concat(n.labels || [], [b]).join("."),
                    r = kp(c, p, !0);
                r.Hb = xq();
                ap(a, q, r)
            }
        return e
    }

    function lr(a, b) {
        var c = [];
        b = b || {};
        var d = Dq(b),
            e = jr(c, d, a);
        if (e.length)
            for (var f = l(e), g = f.next(); !g.done; g = f.next()) {
                var k = g.value,
                    m = Eq(b.prefix),
                    n = Fq(k.type, m);
                if (!n) break;
                var p = k,
                    q = p.version,
                    r = p.W,
                    u = p.labels,
                    v = p.timestamp,
                    t = Math.round(v / 1E3);
                if (k.type === "ag") {
                    var w = {},
                        x = (w.k = r, w.i = "" + t, w.b = (u || []).concat([a]), w);
                    lq(n, x, b, v)
                } else if (k.type === "gb") {
                    var y = [q, t, r].concat(u || [], [a]).join("."),
                        A = kp(b, v, !0);
                    A.Hb = xq();
                    ap(n, y, A)
                }
            }
        return c
    }

    function mr(a, b) {
        var c = Eq(b),
            d = Fq(a, c);
        if (!d) return 0;
        var e;
        e = a === "ag" ? Gq(d) : Bq(d);
        for (var f = 0, g = 0; g < e.length; g++) f = Math.max(f, e[g].timestamp);
        return f
    }

    function nr(a) {
        for (var b = 0, c = l(Object.keys(a)), d = c.next(); !d.done; d = c.next())
            for (var e = a[d.value], f = 0; f < e.length; f++) b = Math.max(b, Number(e[f].timestamp));
        return b
    }

    function or(a) {
        var b = Math.max(mr("aw", a), nr(yq(xq()) ? oq() : {})),
            c = Math.max(mr("gb", a), nr(yq(xq()) ? oq("_gac_gb", !0) : {}));
        c = Math.max(c, mr("ag", a));
        return c > b
    };
    var pr = function(a, b) {
            var c = Ii.ads_pageview = Ii.ads_pageview || {};
            if (c[a]) return !1;
            (b === void 0 ? 0 : b) || (c[a] = !0);
            return !0
        },
        qr = function(a) {
            var b = Bj(a);
            return Db("gclid dclid gbraid wbraid gclaw gcldc gclha gclgf gclgb _gl".split(" "), b, "0")
        },
        yr = function(a, b, c, d, e) {
            var f = Eq(a.prefix);
            if (pr(f, !0)) {
                var g = Tq(),
                    k = [],
                    m = g.gclid,
                    n = g.dclid,
                    p = g.gclsrc || "aw",
                    q = rr(),
                    r = q.Re,
                    u = q.ik;
                !m || p !== "aw.ds" && p !== "aw" && p !== "ds" && p !== "3p.ds" || k.push({
                    W: m,
                    Se: p
                });
                n && k.push({
                    W: n,
                    Se: "ds"
                });
                k.length === 2 && U(147);
                k.length === 0 && g.wbraid &&
                    k.push({
                        W: g.wbraid,
                        Se: "gb"
                    });
                k.length === 0 && p === "aw.ds" && k.push({
                    W: "",
                    Se: "aw.ds"
                });
                sr(function() {
                    var v = X(tr());
                    if (v) {
                        Rp(a);
                        var t = [],
                            w = v ? Pp[Sp(a.prefix)] : void 0;
                        w && t.push("auid=" + w);
                        if (X(O.g.N)) {
                            e && t.push("userId=" + e);
                            var x = Ol(Jl.vh);
                            if (x === void 0) Nl(Jl.wh, !0);
                            else {
                                var y = Ol(Jl.Ee);
                                t.push("ga_uid=" + y + "." + x)
                            }
                        }
                        var A = E.referrer ? vj(Bj(E.referrer), "host") : "",
                            B = v || !d ? k : [];
                        B.length === 0 && (ur.test(A) || vr.test(A)) && B.push({
                            W: "",
                            Se: ""
                        });
                        if (B.length !== 0 || r !== void 0) {
                            A && t.push("ref=" + encodeURIComponent(A));
                            var D =
                                wr();
                            t.push("url=" + encodeURIComponent(D));
                            t.push("tft=" + getCurrentTimestamp());
                            var I = Hc();
                            I !== void 0 && t.push("tfd=" + Math.round(I));
                            var J = Mn(!0);
                            t.push("frm=" + J);
                            r !== void 0 && t.push("gad_source=" + encodeURIComponent(r));
                            u !== void 0 && t.push("gad_source_src=" + encodeURIComponent(u.toString()));
                            if (!c) {
                                var H = {};
                                c = Cm(sm(new rm(0), (H[O.g.ma] = Xm.j[O.g.ma], H)))
                            }
                            t.push("gtm=" + No({
                                ya: b
                            }));
                            Ao() && t.push("gcs=" + Bo());
                            t.push("gcd=" + Fo(c));
                            Io() && t.push("dma_cps=" + Go());
                            t.push("dma=" + Ho());
                            zo(c) ? t.push("npa=0") : t.push("npa=1");
                            Ko() &&
                                t.push("_ng=1");
                            Wn(mo()) && t.push("tcfd=" + Jo());
                            var W = to();
                            W && t.push("gdpr=" + W);
                            var N = so();
                            N && t.push("gdpr_consent=" + N);
                            S(19) && t.push("apve=0");
                            S(96) && Dp(!1)._up && t.push("gtm_up=1");
                            aj.j && t.push("tag_exp=" + aj.j);
                            if (B.length > 0)
                                for (var aa = 0; aa < B.length; aa++) {
                                    var da = B[aa],
                                        T = da.W,
                                        R = da.Se;
                                    if (!xr(a.prefix, R + "." + T, w !== void 0)) {
                                        var M = 'https://adservice.google.com/pagead/regclk?' + t.join("&");
                                        T !== "" ? M = R === "gb" ? M + "&wbraid=" + T : M + "&gclid=" + T + "&gclsrc=" + R : R === "aw.ds" && (M += "&gclsrc=aw.ds");
                                        Ac(M)
                                    }
                                } else if (r !== void 0 &&
                                    !xr(a.prefix, "gad", w !== void 0)) {
                                    var ia = 'https://adservice.google.com/pagead/regclk?' + t.join("&");
                                    Ac(ia)
                                }
                        }
                    }
                })
            }
        },
        xr = function(a, b, c) {
            var d = Ii.joined_auid = Ii.joined_auid || {},
                e = (c ? a || "_gcl" : "") + "." + b;
            if (d[e]) return !0;
            d[e] = !0;
            return !1
        },
        rr = function() {
            var a = Bj(C.location.href),
                b = void 0,
                c = void 0,
                d = vj(a, "query", !1, void 0, "gad_source"),
                e, f = a.hash.replace("#", "").match(zr);
            e = f ? f[1] : void 0;
            d && e ? (b = d, c = 1) : d ? (b = d, c = 2) : e && (b = e, c = 3);
            return {
                Re: b,
                ik: c
            }
        },
        wr = function() {
            var a = Mn(!1) === 1 ? C.top.location.href : C.location.href;
            return a = a.replace(/[\?#].*$/, "")
        },
        Ar = function(a) {
            var b = [];
            jb(a, function(c, d) {
                d = Lq(d);
                for (var e = [], f = 0; f < d.length; f++) e.push(d[f].W);
                e.length && b.push(c + ":" + e.join(","))
            });
            return b.join(";")
        },
        Cr = function(a, b) {
            return Br("dc", a, b)
        },
        Dr = function(a, b) {
            return Br("aw", a, b)
        },
        Br = function(a, b, c) {
            if (a === "aw" || a === "dc" || a === "gb") {
                var d = Cj("gcl" + a);
                if (d) return d.split(".")
            }
            var e = Eq(b);
            if (e === "_gcl") {
                var f = !X(tr()) && c,
                    g;
                g = Tq()[a] || [];
                if (g.length > 0) return f ? ["0"] : g
            }
            var k = Fq(a, e);
            return k ? Aq(k) : []
        },
        sr = function(a) {
            var b =
                tr();
            El(function() {
                a();
                X(b) || fl(a, b)
            }, b)
        },
        tr = function() {
            return [O.g.O, O.g.N]
        },
        ur = /^(?:www\.)?google(?:\.com?)?(?:\.[a-z]{2}t?)?$/,
        vr = /^www\.googleadservices\.com$/,
        zr = /^gad_source[_=](\d+)$/;

    function Er() {
        Ii.dedupe_gclid || (Ii.dedupe_gclid = generateClientID());
        return Ii.dedupe_gclid
    };
    var Fr = /^(www\.)?google(\.com?)?(\.[a-z]{2}t?)?$/,
        Gr = /^www.googleadservices.com$/;

    function Hr(a) {
        a || (a = Ir());
        return a.zn ? !1 : a.sm || a.tm || a.xm || a.vm || a.Re || a.bm || a.wm || a.hm ? !0 : !1
    }

    function Ir() {
        var a = {},
            b = Dp(!0);
        a.zn = !!b._up;
        var c = Tq();
        a.sm = c.aw !== void 0;
        a.tm = c.dc !== void 0;
        a.xm = c.wbraid !== void 0;
        a.vm = c.gbraid !== void 0;
        a.wm = c.gclsrc === "aw.ds";
        a.Re = rr().Re;
        var d = E.referrer ? vj(Bj(E.referrer), "host") : "";
        a.hm = Fr.test(d);
        a.bm = Gr.test(d);
        return a
    };
    var Jr = RegExp("^UA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*(?:%3BUA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*)*$"),
        Kr = /^~?[\w-]+(?:\.~?[\w-]+)*$/,
        Lr = /^\d+\.fls\.doubleclick\.net$/,
        Mr = /;gac=([^;?]+)/,
        Nr = /;gacgb=([^;?]+)/;

    function Or(a, b) {
        if (Lr.test(E.location.host)) {
            var c = E.location.href.match(b);
            return c && c.length === 2 && c[1].match(Jr) ? decodeURIComponent(c[1]) : ""
        }
        for (var d = [], e = l(Object.keys(a)), f = e.next(); !f.done; f = e.next()) {
            for (var g = f.value, k = [], m = a[g], n = 0; n < m.length; n++) k.push(m[n].W);
            d.push(g + ":" + k.join(","))
        }
        return d.length > 0 ? d.join(";") : ""
    }

    function Pr(a, b, c) {
        for (var d = yq(xq()) ? oq("_gac_gb", !0) : {}, e = [], f = !1, g = l(Object.keys(d)), k = g.next(); !k.done; k = g.next()) {
            var m = k.value,
                n = kr("_gac_gb_" + m, a, b, c);
            f = f || n.length !== 0 && n.some(function(p) {
                return p === 1
            });
            e.push(m + ":" + n.join(","))
        }
        return {
            am: f ? e.join(";") : "",
            Zl: Or(d, Nr)
        }
    }

    function Qr(a) {
        var b = E.location.href.match(new RegExp(";" + a + "=([^;?]+)"));
        return b && b.length === 2 && b[1].match(Kr) ? b[1] : void 0
    }

    function Rr(a) {
        var b = $a(11),
            c = {},
            d, e, f;
        Lr.test(E.location.host) && (d = Qr("gclgs"), e = Qr("gclst"), b && (f = Qr("gcllp")));
        if (d && e && (!b || f)) c.Mh = d, c.Oh = e, c.Nh = f;
        else {
            var g = getCurrentTimestamp(),
                k = Gq((a || "_gcl") + "_gs"),
                m = k.map(function(q) {
                    return q.W
                }),
                n = k.map(function(q) {
                    return g - q.timestamp
                }),
                p = [];
            b && (p = k.map(function(q) {
                return q.Jd
            }));
            m.length > 0 && n.length > 0 && (!b || p.length > 0) && (c.Mh = m.join("."), c.Oh = n.join("."), b && p.length > 0 && (c.Nh = p.join(".")))
        }
        return c
    }

    function Sr(a, b, c, d) {
        d = d === void 0 ? !1 : d;
        if (Lr.test(E.location.host)) {
            var e = Qr(c);
            if (e) return [{
                W: e
            }]
        } else {
            if (b === "gclid") {
                var f = (a || "_gcl") + "_aw";
                return d ? Pq(f) : Bq(f)
            }
            if (b === "wbraid") return Bq((a || "_gcl") + "_gb");
            if (b === "braids") return Dq({
                prefix: a
            })
        }
        return []
    }

    function Tr(a) {
        return Sr(a, "gclid", "gclaw").map(function(b) {
            return b.W
        }).join(".")
    }

    function Ur(a) {
        var b = Sr(a, "gclid", "gclaw", !0),
            c = b.map(function(f) {
                return f.W
            }).join("."),
            d = b.map(function(f) {
                return f.Pa || 0
            }).join("."),
            e = b.map(function(f) {
                for (var g = 0, k = l(f.Sc || []), m = k.next(); !m.done; m = k.next()) {
                    var n = m.value;
                    n === 1 && (g |= 1);
                    n === 2 && (g |= 2)
                }
                return g.toString()
            }).join(".");
        return {
            W: c,
            jk: d,
            kk: e
        }
    }

    function Vr(a) {
        return Sr(a, "braids", "gclgb").map(function(b) {
            return b.W
        }).join(".")
    }

    function Wr(a) {
        return Lr.test(E.location.host) ? !(Qr("gclaw") || Qr("gac")) : or(a)
    }

    function Xr(a, b, c) {
        var d;
        d = c ? lr(a, b) : kr((b && b.prefix || "_gcl") + "_gb", a, b);
        return d.length === 0 || d.every(function(e) {
            return e === 0
        }) ? "" : d.join(".")
    };

    function Yr() {
        var a = C.__uspapi;
        if (bb(a)) {
            var b = "";
            try {
                a("getUSPData", 1, function(c, d) {
                    if (d && c) {
                        var e = c.uspString;
                        e && RegExp("^[\\da-zA-Z-]{1,20}$").test(e) && (b = e)
                    }
                })
            } catch (c) {}
            return b
        }
    };
    var bs = function(a) {
            if (a.eventName === O.g.ba && a.metadata.hit_type === "page_view")
                if (S(20)) {
                    a.metadata.redact_click_ids = V(a.m, O.g.ia) != null && V(a.m, O.g.ia) !== !1 && !X([O.g.O, O.g.N]);
                    var b = Zr(a),
                        c = V(a.m, O.g.ra) !== !1;
                    c || (a.j[O.g.bj] = "1");
                    var d = Eq(b.prefix),
                        e = a.metadata.is_server_side_destination;
                    if (!a.metadata.consent_updated && !a.metadata.user_id_updated) {
                        var f = V(a.m, O.g.cb),
                            g = V(a.m, O.g.sa) || {};
                        $r({
                            Bd: c,
                            Kd: g,
                            Pd: f,
                            rc: b
                        });
                        if (!e && !pr(d)) {
                            a.isAborted = !0;
                            return
                        }
                    }
                    if (e) a.isAborted = !0;
                    else {
                        a.j[O.g.Cc] = O.g.ac;
                        if (a.metadata.consent_updated) a.j[O.g.Cc] =
                            O.g.Qk, a.j[O.g.Yb] = "1";
                        else if (a.metadata.user_id_updated) a.j[O.g.Cc] = O.g.Vk;
                        else {
                            var k = Tq();
                            a.j[O.g.Td] = k.gclid;
                            a.j[O.g.be] = k.dclid;
                            a.j[O.g.Wi] = k.gclsrc;
                            a.j[O.g.Td] || a.j[O.g.be] || (a.j[O.g.zf] = k.wbraid, a.j[O.g.Ag] = k.gbraid);
                            a.j[O.g.Fa] = E.referrer ? vj(Bj(E.referrer), "host") : "";
                            a.j[O.g.wa] = wr();
                            if (S(23) && jc) {
                                var m = vj(Bj(jc), "host");
                                m && (a.j[O.g.tj] = m)
                            }
                            var n = rr(),
                                p = n.ik;
                            a.j[O.g.Pi] = n.Re;
                            a.j[O.g.Qi] = p;
                            a.j[O.g.Nb] = Mn(!0);
                            var q = Ir();
                            Hr(q) && (a.j[O.g.md] = "1");
                            a.j[O.g.Yi] = Er();
                            Dp(!1)._up === "1" && (a.j[O.g.oj] =
                                "1")
                        }
                        hl = !0;
                        var r = X([O.g.O, O.g.N]);
                        r && (S(24) && (a.j[O.g.ib] = as()), c && (Rp(b), a.j[O.g.Lb] = Pp[Sp(b.prefix)]));
                        a.j[O.g.rb] = void 0;
                        a.j[O.g.Za] = void 0;
                        if (!a.j[O.g.Td] && !a.j[O.g.be] && Wr(d)) {
                            var u = Cq(b);
                            u.length > 0 && (a.j[O.g.rb] = u.join("."))
                        } else if (!a.j[O.g.zf] && r) {
                            var v = Aq(d + "_aw");
                            v.length > 0 && (a.j[O.g.Za] = v.join("."))
                        }
                        a.m.isGtmEvent && (a.m.j[O.g.ma] = Xm.j[O.g.ma]);
                        zo(a.m) ? a.j[O.g.Tb] = !1 : a.j[O.g.Tb] = !0;
                        a.metadata.add_tag_timing = !0;
                        var t = Yr();
                        t !== void 0 && (a.j[O.g.wd] = t || "error");
                        var w = to();
                        w && (a.j[O.g.ic] = w);
                        var x = so();
                        x && (a.j[O.g.mc] = x);
                        a.metadata.speculative = !1
                    }
                } else a.isAborted = !0
        },
        Zr = function(a) {
            var b = {
                prefix: V(a.m, O.g.eb) || V(a.m, O.g.Na),
                domain: V(a.m, O.g.Ra),
                Fb: V(a.m, O.g.Sa),
                flags: V(a.m, O.g.ab)
            };
            a.m.isGtmEvent && (b.path = V(a.m, O.g.vb));
            return b
        },
        cs = function(a, b) {
            var c, d, e, f, g, k, m, n;
            c = a.Bd;
            d = a.Kd;
            e = a.Pd;
            f = a.ya;
            g = a.m;
            k = a.Md;
            m = a.Zn;
            n = a.Hk;
            $r({
                Bd: c,
                Kd: d,
                Pd: e,
                rc: b
            });
            c && m !== !0 && (n != null ? n = String(n) : n = void 0, yr(b, f, g, k, n))
        },
        $r = function(a) {
            var b, c, d, e;
            b = a.Bd;
            c = a.Kd;
            d = a.Pd;
            e = a.rc;
            b && (Np(c[O.g.Hc], !!c[O.g.X]) &&
                (Yq(ds, e), $q(e), Zp(e)), S(86) || S(115) ? Wq(e) : Uq(e), dr(ds, e), er(e));
            c[O.g.X] && (br(ds, c[O.g.X], c[O.g.Pb], !!c[O.g.yb], e.prefix), cr(c[O.g.X], c[O.g.Pb], !!c[O.g.yb], e.prefix), $p(Sp(e.prefix), c[O.g.X], c[O.g.Pb], !!c[O.g.yb], e), $p("FPAU", c[O.g.X], c[O.g.Pb], !!c[O.g.yb], e));
            d && (S(75) ? gr(es) : gr(fs));
            ir(fs)
        },
        gs = function(a, b, c, d) {
            var e, f, g;
            e = a.Ik;
            f = a.callback;
            g = a.pk;
            if (typeof f === "function")
                if (e === O.g.Za && g === void 0) {
                    var k = d(b.prefix, c);
                    k.length === 0 ? f(void 0) : k.length === 1 ? f(k[0]) : f(k)
                } else e === O.g.Lb ? (U(65), Rp(b,
                    !1), f(Pp[Sp(b.prefix)])) : f(g)
        },
        ds = ["aw", "dc", "gb"],
        fs = ["aw", "dc", "gb", "ag"],
        es = ["aw", "dc", "gb", "ag", "gad_source"];

    function hs(a) {
        var b = V(a.m, O.g.Ob),
            c = V(a.m, O.g.jc);
        b && !c ? (a.eventName !== O.g.ba && a.eventName !== O.g.Uc && U(131), a.isAborted = !0) : !b && c && (U(132), a.isAborted = !0)
    }

    function is(a) {
        var b = X(O.g.O) ? Ii.pscdl : "denied";
        b != null && (a.j[O.g.Df] = b)
    }

    function js(a) {
        var b = Mn(!0);
        a.j[O.g.Nb] = b
    }

    function ks(a) {
        Ko() && (a.j[O.g.Fc] = 1)
    }

    function as() {
        var a = E.title;
        if (a === void 0 || a === "") return "";
        var b = function(d) {
            try {
                return decodeURIComponent(d), !0
            } catch (e) {
                return !1
            }
        };
        a = encodeURIComponent(a);
        for (var c = 256; c > 0 && !b(a.substring(0, c));) c--;
        return decodeURIComponent(a.substring(0, c))
    }

    function ls(a) {
        ms(a, "ce", V(a.m, O.g.Sa))
    }

    function ms(a, b, c) {
        a.j[O.g.xd] || (a.j[O.g.xd] = {});
        a.j[O.g.xd][b] = c
    };

    function ss(a, b, c, d) {
        var e = qc(),
            f;
        if (e === 1) a: {
            var g = Ui;g = g.toLowerCase();
            for (var k = "https://" + g, m = "http://" + g, n = 1, p = E.getElementsByTagName("script"), q = 0; q < p.length && q < 100; q++) {
                var r = p[q].src;
                if (r) {
                    r = r.toLowerCase();
                    if (r.indexOf(m) === 0) {
                        f = 3;
                        break a
                    }
                    n === 1 && r.indexOf(k) === 0 && (n = 2)
                }
            }
            f = n
        }
        else f = e;
        return (f === 2 || d || "http:" !== C.location.protocol ? a : b) + c
    };

    function Es(a) {
        return {
            getDestinationId: function() {
                return a.target.destinationId
            },
            getEventName: function() {
                return a.eventName
            },
            setEventName: function(b) {
                a.eventName = b
            },
            getHitData: function(b) {
                return a.j[b]
            },
            setHitData: function(b, c) {
                a.j[b] = c
            },
            setHitDataIfNotDefined: function(b, c) {
                a.j[b] === void 0 && (a.j[b] = c)
            },
            copyToHitData: function(b, c) {
                a.copyToHitData(b, c)
            },
            getMetadata: function(b) {
                return a.metadata[b]
            },
            setMetadata: function(b, c) {
                a.metadata[b] = c
            },
            isAborted: function() {
                return a.isAborted
            },
            abort: function() {
                a.isAborted = !0
            },
            getFromEventContext: function(b) {
                return V(a.m, b)
            },
            Ub: function() {
                return a
            },
            getHitKeys: function() {
                return Object.keys(a.j)
            }
        }
    };
    var Gs = function(a) {
            var b = Fs[a.target.destinationId];
            if (!a.isAborted && b)
                for (var c = Es(a), d = 0; d < b.length; ++d) {
                    try {
                        b[d](c)
                    } catch (e) {
                        a.isAborted = !0
                    }
                    if (a.isAborted) break
                }
        },
        Hs = function(a, b) {
            var c = Fs[a];
            c || (c = Fs[a] = []);
            c.push(b)
        },
        Fs = {};

    function Ls(a) {
        var b, c = C,
            d = [];
        try {
            c.navigation && c.navigation.entries && (d = c.navigation.entries())
        } catch (k) {}
        b = d;
        for (var e = b.length - 1; e >= 0; e--) {
            var f = b[e],
                g = f.url && f.url.match("[?&#]" + a + "=([^&#]+)");
            if (g && g.length === 2) return g[1]
        }
    };
    var Ms, Ns = !1;

    function Os() {
        Ns = !0;
        Ms = Ms || {}
    }

    function Ps(a) {
        Ns || Os();
        return Ms[a]
    }

    function Qs() {
        var a = C.screen;
        return {
            width: a ? a.width : 0,
            height: a ? a.height : 0
        }
    }

    function Rs(a) {
        if (E.hidden) return !0;
        var b = a.getBoundingClientRect();
        if (b.top === b.bottom || b.left === b.right || !C.getComputedStyle) return !0;
        var c = C.getComputedStyle(a, null);
        if (c.visibility === "hidden") return !0;
        for (var d = a, e = c; d;) {
            if (e.display === "none") return !0;
            var f = e.opacity,
                g = e.filter;
            if (g) {
                var k = g.indexOf("opacity(");
                k >= 0 && (g = g.substring(k + 8, g.indexOf(")", k)), g.charAt(g.length - 1) === "%" && (g = g.substring(0, g.length - 1)), f = String(Math.min(Number(g), Number(f))))
            }
            if (f !== void 0 && Number(f) <= 0) return !0;
            (d = d.parentElement) &&
            (e = C.getComputedStyle(d, null))
        }
        return !1
    }
    var at = function(a) {
            return a.tagName + ":" + a.isVisible + ":" + a.Z.length + ":" + $s.test(a.Z)
        },
        ot = function(a) {
            a = a || {
                Hd: !0,
                Id: !0,
                pg: void 0
            };
            a.Bb = a.Bb || {
                email: !0,
                phone: !1,
                address: !1
            };
            var b = bt(a),
                c = ct[b];
            if (c && getCurrentTimestamp() - c.timestamp < 200) return c.result;
            var d = dt(),
                e = d.status,
                f = [],
                g, k, m = [];
            if (!S(28)) {
                if (a.Bb && a.Bb.email) {
                    var n = et(d.elements);
                    f = ft(n, a && a.Me);
                    g = gt(f);
                    n.length > 10 && (e = "3")
                }!a.pg && g && (f = [g]);
                for (var p = 0; p < f.length; p++) m.push(ht(f[p], !!a.Hd, !!a.Id));
                m = m.slice(0, 10)
            } else if (a.Bb) {}
            g && (k = ht(g, !!a.Hd, !!a.Id));
            var D = {
                elements: m,
                hi: k,
                status: e
            };
            ct[b] = {
                timestamp: getCurrentTimestamp(),
                result: D
            };
            return D
        },
        nt = function(a, b, c) {
            var d = a.element,
                e = {
                    Z: a.Z,
                    type: a.qa,
                    tagName: d.tagName
                };
            b && (e.querySelector = pt(d));
            c && (e.isVisible = !Rs(d));
            return e
        },
        ht = function(a, b, c) {
            return nt({
                element: a.element,
                Z: a.Z,
                qa: mt.vc
            }, b, c)
        },
        bt = function(a) {
            var b = !(a == null || !a.Hd) + "." + !(a == null || !a.Id);
            a && a.Me && a.Me.length && (b += "." + a.Me.join("."));
            a && a.Bb && (b += "." + a.Bb.email + "." + a.Bb.phone + "." + a.Bb.address);
            return b
        },
        gt = function(a) {
            if (a.length !== 0) {
                var b;
                b = qt(a, function(c) {
                    return !rt.test(c.Z)
                });
                b = qt(b, function(c) {
                    return c.element.tagName.toUpperCase() === "INPUT"
                });
                b = qt(b, function(c) {
                    return !Rs(c.element)
                });
                return b[0]
            }
        },
        ft = function(a, b) {
            if (!b || b.length === 0) return a;
            for (var c = [], d = 0; d < a.length; d++) {
                for (var e = !0, f = 0; f < b.length; f++) {
                    var g = b[f];
                    if (g && Rh(a[d].element, g)) {
                        e = !1;
                        break
                    }
                }
                e && c.push(a[d])
            }
            return c
        },
        qt = function(a, b) {
            if (a.length <= 1) return a;
            var c = a.filter(b);
            return c.length === 0 ? a : c
        },
        pt = function(a) {
            var b;
            if (a === E.body) b = "body";
            else {
                var c;
                if (a.id) c = "#" + a.id;
                else {
                    var d;
                    if (a.parentElement) {
                        var e;
                        a: {
                            var f = a.parentElement;
                            if (f) {
                                for (var g = 0; g < f.childElementCount; g++)
                                    if (f.children[g] === a) {
                                        e = g + 1;
                                        break a
                                    } e = -1
                            } else e = 1
                        }
                        d = pt(a.parentElement) + ">:nth-child(" + e.toString() + ")"
                    } else d = "";
                    c = d
                }
                b = c
            }
            return b
        },
        et = function(a) {
            for (var b = [], c = 0; c < a.length; c++) {
                var d = a[c],
                    e = d.textContent;
                d.tagName.toUpperCase() === "INPUT" && d.value && (e = d.value);
                if (e) {
                    var f = e.match(st);
                    if (f) {
                        var g = f[0],
                            k;
                        if (C.location) {
                            var m = xj(C.location, "host", !0);
                            k = g.toLowerCase().indexOf(m) >= 0
                        } else k = !1;
                        k || b.push({
                            element: d,
                            Z: g
                        })
                    }
                }
            }
            return b
        },
        dt = function() {
            var a = [],
                b = E.body;
            if (!b) return {
                elements: a,
                status: "4"
            };
            for (var c = b.querySelectorAll("*"), d = 0; d < c.length && d < 1E4; d++) {
                var e = c[d];
                if (!(tt.indexOf(e.tagName.toUpperCase()) >= 0) && e.children instanceof HTMLCollection) {
                    for (var f = !1, g = 0; g < e.childElementCount && g < 1E4; g++)
                        if (!(ut.indexOf(e.children[g].tagName.toUpperCase()) >= 0)) {
                            f = !0;
                            break
                        }(!f || S(28) && vt.indexOf(e.tagName) !== -1) && a.push(e)
                }
            }
            return {
                elements: a,
                status: c.length > 1E4 ? "2" : "1"
            }
        },
        wt = !1;
    var st = /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i,
        $s = /@(gmail|googlemail)\./i,
        rt = /support|noreply/i,
        tt = "SCRIPT STYLE IMG SVG PATH BR NOSCRIPT TEXTAREA".split(" "),
        ut = ["BR"],
        mt = {
            vc: "1",
            Be: "2",
            we: "3",
            ye: "4",
            ug: "5",
            sh: "6",
            eg: "7"
        },
        ct = {},
        vt = ["INPUT", "SELECT"];
    var Mt = function(a, b, c) {
            a.j[O.g.De] || (a.j[O.g.De] = {});
            a.j[O.g.De][b] = c
        },
        Ot = function(a, b) {
            var c = Nt(a, O.g.ie, a.m.C[O.g.ie]);
            if (c && c[b || a.eventName] !== void 0) return c[b || a.eventName]
        },
        Pt = function(a) {
            var b = a.metadata.user_data;
            if (Uc(b)) return b
        },
        Qt = function(a) {
            if (a.metadata.is_merchant_center || !Ij(a.m)) return !1;
            if (!V(a.m, O.g.rd)) {
                var b = V(a.m, O.g.Dc);
                return b === !0 || b === "true"
            }
            return !0
        },
        Rt = function(a) {
            return Nt(a, O.g.Gc, V(a.m, O.g.Gc)) || !!Nt(a, "google_ng", !1)
        };
    var Lf;
    var St = Number('') || 5,
        Tt = Number('') || 50,
        Ut = fb();
    var Zt = {
        Dl: Number('') || 500,
        pl: Number('') || 5E3,
        Jj: Number('20') || 10,
        Pk: Number('') || 5E3
    };

    function $t(a) {
        return a.performance && a.performance.now() || Date.now()
    }
    var au = function(a, b) {
        var c;
        return c
    };
    var bu;

    function iu() {
        var a = Of(Lf.j, "", function() {
            return {}
        });
        try {
            return a("internal_sw_allowed"), !0
        } catch (b) {
            return !1
        }
    }

    function ju(a, b, c) {
        c = c === void 0 ? !1 : c;
    }
    var ku = function(a, b, c, d) {};

    function lu(a, b, c, d, e) {}

    function mu(a, b, c, d) {}
    var nu = function(a) {
        for (var b = [], c = 0, d = 0; d < a.length; d++) {
            var e = a.charCodeAt(d);
            e < 128 ? b[c++] = e : (e < 2048 ? b[c++] = e >> 6 | 192 : ((e & 64512) == 55296 && d + 1 < a.length && (a.charCodeAt(d + 1) & 64512) == 56320 ? (e = 65536 + ((e & 1023) << 10) + (a.charCodeAt(++d) & 1023), b[c++] = e >> 18 | 240, b[c++] = e >> 12 & 63 | 128) : b[c++] = e >> 12 | 224, b[c++] = e >> 6 & 63 | 128), b[c++] = e & 63 | 128)
        }
        return b
    };
    zn();
    In() || wn("iPod");
    wn("iPad");
    !wn("Android") || An() || zn() || yn() || wn("Silk");
    An();
    !wn("Safari") || An() || (xn() ? 0 : wn("Coast")) || yn() || (xn() ? 0 : wn("Edge")) || (xn() ? vn("Microsoft Edge") : wn("Edg/")) || (xn() ? vn("Opera") : wn("OPR")) || zn() || wn("Silk") || wn("Android") || Jn();
    var ou = {},
        pu = null,
        qu = function(a) {
            for (var b = [], c = 0, d = 0; d < a.length; d++) {
                var e = a.charCodeAt(d);
                e > 255 && (b[c++] = e & 255, e >>= 8);
                b[c++] = e
            }
            var f = 4;
            f === void 0 && (f = 0);
            if (!pu) {
                pu = {};
                for (var g = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), k = ["+/=", "+/", "-_=", "-_.", "-_"], m = 0; m < 5; m++) {
                    var n = g.concat(k[m].split(""));
                    ou[m] = n;
                    for (var p = 0; p < n.length; p++) {
                        var q = n[p];
                        pu[q] === void 0 && (pu[q] = p)
                    }
                }
            }
            for (var r = ou[f], u = Array(Math.floor(b.length / 3)), v = r[64] || "", t = 0, w = 0; t < b.length - 2; t += 3) {
                var x = b[t],
                    y = b[t + 1],
                    A = b[t + 2],
                    B = r[x >> 2],
                    D = r[(x & 3) << 4 | y >> 4],
                    I = r[(y & 15) << 2 | A >> 6],
                    J = r[A & 63];
                u[w++] = "" + B + D + I + J
            }
            var H = 0,
                W = v;
            switch (b.length - t) {
                case 2:
                    H = b[t + 1], W = r[(H & 15) << 2] || v;
                case 1:
                    var N = b[t];
                    u[w] = "" + r[N >> 2] + r[(N & 3) << 4 | H >> 4] + W + v
            }
            return u.join("")
        };
    var ru = "platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(" ");

    function su(a) {
        var b;
        return (b = a.google_tag_data) != null ? b : a.google_tag_data = {}
    }

    function tu() {
        var a = C.google_tag_data,
            b;
        if (a != null && a.uach) {
            var c = a.uach,
                d = Object.assign({}, c);
            c.fullVersionList && (d.fullVersionList = c.fullVersionList.slice(0));
            b = d
        } else b = null;
        return b
    }

    function uu() {
        var a, b;
        return (b = (a = C.google_tag_data) == null ? void 0 : a.uach_promise) != null ? b : null
    }

    function vu(a) {
        var b, c;
        return typeof((b = a.navigator) == null ? void 0 : (c = b.userAgentData) == null ? void 0 : c.getHighEntropyValues) === "function"
    }

    function wu() {
        var a = C;
        if (!vu(a)) return null;
        var b = su(a);
        if (b.uach_promise) return b.uach_promise;
        var c = a.navigator.userAgentData.getHighEntropyValues(ru).then(function(d) {
            b.uach != null || (b.uach = d);
            return d
        });
        return b.uach_promise = c
    };
    var yu = function(a, b) {
            if (a) {
                var c = xu(a);
                Object.assign(b.j, c)
            }
        },
        xu = function(a) {
            var b = {};
            b[O.g.Tf] = a.architecture;
            b[O.g.Uf] = a.bitness;
            a.fullVersionList && (b[O.g.Vf] = a.fullVersionList.map(function(c) {
                return encodeURIComponent(c.brand || "") + ";" + encodeURIComponent(c.version || "")
            }).join("|"));
            b[O.g.Wf] = a.mobile ? "1" : "0";
            b[O.g.Xf] = a.model;
            b[O.g.Yf] = a.platform;
            b[O.g.Zf] = a.platformVersion;
            b[O.g.cg] = a.wow64 ? "1" : "0";
            return b
        },
        Au = function(a) {
            var b = zu.yn,
                c = function(g, k) {
                    try {
                        a(g, k)
                    } catch (m) {}
                },
                d = tu();
            if (d) c(d);
            else {
                var e =
                    uu();
                if (e) {
                    b = Math.min(Math.max(isFinite(b) ? b : 0, 0), 1E3);
                    var f = C.setTimeout(function() {
                        c.Ze || (c.Ze = !0, U(106), c(null, Error("Timeout")))
                    }, b);
                    e.then(function(g) {
                        c.Ze || (c.Ze = !0, U(104), C.clearTimeout(f), c(g))
                    }).catch(function(g) {
                        c.Ze || (c.Ze = !0, U(105), C.clearTimeout(f), c(null, g))
                    })
                } else c(null)
            }
        },
        Cu = function() {
            if (vu(C) && (Bu = getCurrentTimestamp(), !uu())) {
                var a = wu();
                a && (a.then(function() {
                    U(95)
                }), a.catch(function() {
                    U(96)
                }))
            }
        },
        Bu;

    function Du(a) {
        var b;
        b = b === void 0 ? document : b;
        var c;
        return !((c = b.featurePolicy) == null || !c.allowedFeatures().includes(a))
    };

    function Eu() {
        return Du("join-ad-interest-group") && bb(gc.joinAdInterestGroup)
    }

    function Fu(a, b) {
        var c = Za[3] === void 0 ? 1 : Za[3],
            d = 'iframe[data-tagging-id="' + b + '"]',
            e = [];
        try {
            if (c === 1) {
                var f = E.querySelector(d);
                f && (e = [f])
            } else e = Array.from(E.querySelectorAll(d))
        } catch (q) {}
        var g;
        a: {
            try {
                g = E.querySelectorAll('iframe[allow="join-ad-interest-group"][data-tagging-id*="-"]');
                break a
            } catch (q) {}
            g = void 0
        }
        var k = g,
            m = ((k == null ? void 0 : k.length) || 0) >= (Za[2] === void 0 ? 50 : Za[2]),
            n;
        if (n = e.length >= 1) {
            var p = Number(e[e.length - 1].dataset.loadTime);
            p !== void 0 && getCurrentTimestamp() - p < (Za[1] === void 0 ? 6E4 : Za[1]) ? (Va("TAGGING",
                9), n = !0) : n = !1
        }
        if (!n) {
            if (c === 1)
                if (e.length >= 1) Gu(e[0]);
                else {
                    if (m) {
                        Va("TAGGING", 10);
                        return
                    }
                }
            else e.length >= c ? Gu(e[0]) : m && Gu(k[0]);
            rc(a, void 0, {
                allow: "join-ad-interest-group"
            }, {
                taggingId: b,
                loadTime: getCurrentTimestamp()
            })
        }
    }

    function Gu(a) {
        try {
            a.parentNode.removeChild(a)
        } catch (b) {}
    }

    function Hu() {
        return "https://td.doubleclick.net"
    };

    function Iu(a) {
        var b = a.location.href;
        if (a === a.top) return {
            url: b,
            Fm: !0
        };
        var c = !1,
            d = a.document;
        d && d.referrer && (b = d.referrer, a.parent === a.top && (c = !0));
        var e = a.location.ancestorOrigins;
        if (e) {
            var f = e[e.length - 1];
            f && b.indexOf(f) === -1 && (c = !1, b = f)
        }
        return {
            url: b,
            Fm: c
        }
    };
    var Av = function(a, b) {
            var c = {},
                d = function(f, g) {
                    var k;
                    k = g === !0 ? "1" : g === !1 ? "0" : encodeURIComponent(String(g));
                    c[f] = k
                };
            jb(a.j, function(f, g) {
                var k = zv[f];
                k && g !== void 0 && g !== "" && (!a.metadata.redact_click_ids || f !== O.g.Td && f !== O.g.be && f !== O.g.zf && f !== O.g.Ag || (g = "0"), d(k, g))
            });
            d("gtm", No({
                ya: a.metadata.source_canonical_id
            }));
            Ao() && d("gcs", Bo());
            d("gcd", Fo(a.m));
            Io() && d("dma_cps", Go());
            d("dma", Ho());
            Wn(mo()) && d("tcfd", Jo());
            aj.j && d("tag_exp", aj.j);
            if (a.metadata.add_tag_timing) {
                d("tft", getCurrentTimestamp());
                var e = Hc();
                e !== void 0 &&
                    d("tfd", Math.round(e))
            }
            S(20) && d("apve", "1");
            S(21) && d("apvf", Ec() ? S(22) ? "f" : "sb" : "nf");
            b(c)
        },
        Bv = function(a) {
            Av(a, function(b) {
                if (a.metadata.hit_type === "page_view") {
                    var c = [];
                    jb(b, function(e, f) {
                        c.push(e + "=" + f)
                    });
                    var d = Jj(X([O.g.O, O.g.N]) ? "https://www.google.com" : "https://pagead2.googlesyndication.com", !0) + "/ccm/collect?" + c.join("&");
                    S(21) && S(22) && Ec() ? Dc(d, void 0, {
                        noFallback: !0
                    }) : Ac(d);
                    if (bb(a.m.onSuccess)) a.m.onSuccess()
                }
            })
        },
        Cv = {},
        zv = (Cv[O.g.Yb] = "gcu", Cv[O.g.rb] = "gclgb", Cv[O.g.Za] = "gclaw", Cv[O.g.Pi] =
            "gad_source", Cv[O.g.Qi] = "gad_source_src", Cv[O.g.Td] = "gclid", Cv[O.g.Wi] = "gclsrc", Cv[O.g.Ag] = "gbraid", Cv[O.g.zf] = "wbraid", Cv[O.g.Lb] = "auid", Cv[O.g.Yi] = "rnd", Cv[O.g.bj] = "ncl", Cv[O.g.Gg] = "gcldc", Cv[O.g.be] = "dclid", Cv[O.g.fb] = "edid", Cv[O.g.Cc] = "en", Cv[O.g.ic] = "gdpr", Cv[O.g.hb] = "gdid", Cv[O.g.Fc] = "_ng", Cv[O.g.oj] = "gtm_up", Cv[O.g.Nb] = "frm", Cv[O.g.md] = "lps", Cv[O.g.pe] = "did", Cv[O.g.wa] = "dl", Cv[O.g.Fa] = "dr", Cv[O.g.ib] = "dt", Cv[O.g.tj] = "scrsrc", Cv[O.g.Qf] = "ga_uid", Cv[O.g.mc] = "gdpr_consent", Cv[O.g.Ca] = "uid", Cv[O.g.wd] =
            "us_privacy", Cv[O.g.Tb] = "npa", Cv);
    var Dv = {
        J: {
            vi: "ads_conversion_hit",
            Qd: "container_execute_start",
            yi: "container_setup_end",
            rg: "container_setup_start",
            wi: "container_blocking_end",
            xi: "container_execute_end",
            zi: "container_yield_end",
            sg: "container_yield_start",
            zj: "event_execute_end",
            yj: "event_evaluation_end",
            ph: "event_evaluation_start",
            Aj: "event_setup_end",
            ve: "event_setup_start",
            Cj: "ga4_conversion_hit",
            Ae: "page_load",
            On: "pageview",
            oc: "snippet_load",
            Vj: "tag_callback_error",
            Wj: "tag_callback_failure",
            Xj: "tag_callback_success",
            Yj: "tag_execute_end",
            yd: "tag_execute_start"
        }
    };

    function Ev() {
        function a(c, d) {
            var e = Wa(d);
            e && b.push([c, e])
        }
        var b = [];
        a("u", "GTM");
        a("ut", "TAGGING");
        a("h", "HEALTH");
        return b
    };
    var Fv = !1;

    function nw(a, b) {}

    function ow(a, b) {}

    function pw(a, b) {}

    function qw(a, b) {}

    function rw() {
        var a = {};
        return a
    }

    function fw(a) {
        a = a === void 0 ? !0 : a;
        var b = {};
        return b
    }

    function sw() {}

    function tw(a, b) {}

    function uw(a, b, c) {}

    function vw() {}

    function ww(a, b) {
        var c = C,
            d, e = c.GooglebQhCsO;
        e || (e = {}, c.GooglebQhCsO = e);
        d = e;
        if (d[a]) return !1;
        d[a] = [];
        d[a][0] = b;
        return !0
    };

    function xw(a, b, c, d) {
        var e = En(a, "fmt");
        if (b) {
            var f = En(a, "random"),
                g = En(a, "label") || "";
            if (!f) return !1;
            var k = qu(decodeURIComponent(g.replace(/\+/g, " ")) + ":" + decodeURIComponent(f.replace(/\+/g, " ")));
            if (!ww(k, b)) return !1
        }
        e && Number(e) !== 4 && (a = Gn(a, "rfmt", e));
        var m = Gn(a, "fmt", 4);
        pc(m, function() {
            C.google_noFurtherRedirects && b && (C.google_noFurtherRedirects = null, b())
        }, c, d, E.getElementsByTagName("script")[0].parentElement || void 0);
        return !0
    };

    function Nw(a, b) {
        if (data.entities) {
            var c = data.entities[a];
            if (c) return c[b]
        }
    };

    function Ow(a, b, c) {
        c = c === void 0 ? !1 : c;
        Pw().addRestriction(0, a, b, c)
    }

    function Qw(a, b, c) {
        c = c === void 0 ? !1 : c;
        Pw().addRestriction(1, a, b, c)
    }

    function Rw() {
        var a = nk();
        return Pw().getRestrictions(1, a)
    }
    var Sw = function() {
            this.container = {};
            this.j = {}
        },
        Tw = function(a, b) {
            var c = a.container[b];
            c || (c = {
                _entity: {
                    internal: [],
                    external: []
                },
                _event: {
                    internal: [],
                    external: []
                }
            }, a.container[b] = c);
            return c
        };
    Sw.prototype.addRestriction = function(a, b, c, d) {
        d = d === void 0 ? !1 : d;
        if (!d || !this.j[b]) {
            var e = Tw(this, b);
            a === 0 ? d ? e._entity.external.push(c) : e._entity.internal.push(c) : a === 1 && (d ? e._event.external.push(c) : e._event.internal.push(c))
        }
    };
    Sw.prototype.getRestrictions = function(a, b) {
        var c = Tw(this, b);
        if (a === 0) {
            var d, e;
            return [].concat(oa((c == null ? void 0 : (d = c._entity) == null ? void 0 : d.internal) || []), oa((c == null ? void 0 : (e = c._entity) == null ? void 0 : e.external) || []))
        }
        if (a === 1) {
            var f, g;
            return [].concat(oa((c == null ? void 0 : (f = c._event) == null ? void 0 : f.internal) || []), oa((c == null ? void 0 : (g = c._event) == null ? void 0 : g.external) || []))
        }
        return []
    };
    Sw.prototype.getExternalRestrictions = function(a, b) {
        var c = Tw(this, b),
            d, e;
        return a === 0 ? (c == null ? void 0 : (d = c._entity) == null ? void 0 : d.external) || [] : (c == null ? void 0 : (e = c._event) == null ? void 0 : e.external) || []
    };
    Sw.prototype.removeExternalRestrictions = function(a) {
        var b = Tw(this, a);
        b._event && (b._event.external = []);
        b._entity && (b._entity.external = []);
        this.j[a] = !0
    };

    function Pw() {
        var a = Ii.r;
        a || (a = new Sw, Ii.r = a);
        return a
    };
    var Uw = new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),
        Vw = {
            cl: ["ecl"],
            customPixels: ["nonGooglePixels"],
            ecl: ["cl"],
            ehl: ["hl"],
            gaawc: ["googtag"],
            hl: ["ehl"],
            html: ["customScripts", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"],
            customScripts: ["html", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"],
            nonGooglePixels: [],
            nonGoogleScripts: ["nonGooglePixels"],
            nonGoogleIframes: ["nonGooglePixels"]
        },
        Ww = {
            cl: ["ecl"],
            customPixels: ["customScripts",
                "html"
            ],
            ecl: ["cl"],
            ehl: ["hl"],
            gaawc: ["googtag"],
            hl: ["ehl"],
            html: ["customScripts"],
            customScripts: ["html"],
            nonGooglePixels: ["customPixels", "customScripts", "html", "nonGoogleScripts", "nonGoogleIframes"],
            nonGoogleScripts: ["customScripts", "html"],
            nonGoogleIframes: ["customScripts", "html", "nonGoogleScripts"]
        },
        Xw = "google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" ");

    function Yw() {
        var a = ij("gtm.allowlist") || ij("gtm.whitelist");
        a && U(9);
        Oi && (a = ["google", "gtagfl", "lcl", "zone"]);
        Uw.test(C.location && C.location.hostname) && (Oi ? U(116) : (U(117), Zw && (a = [], window.console && window.console.log && window.console.log("GTM blocked. See go/13687728."))));
        var b = a && ub(nb(a), Vw),
            c = ij("gtm.blocklist") || ij("gtm.blacklist");
        c || (c = ij("tagTypeBlacklist")) && U(3);
        c ? U(8) : c = [];
        Uw.test(C.location && C.location.hostname) && (c = nb(c), c.push("nonGooglePixels", "nonGoogleScripts", "sandboxedScripts"));
        nb(c).indexOf("google") >= 0 && U(2);
        var d = c && ub(nb(c), Ww),
            e = {};
        return function(f) {
            var g = f && f[Le.oa];
            if (!g || typeof g !== "string") return !0;
            g = g.replace(/^_*/, "");
            if (e[g] !== void 0) return e[g];
            var k = Yi[g] || [],
                m = !0;
            if (a) {
                var n;
                if (n = m) a: {
                    if (b.indexOf(g) < 0)
                        if (k && k.length > 0)
                            for (var p = 0; p < k.length; p++) {
                                if (b.indexOf(k[p]) < 0) {
                                    U(11);
                                    n = !1;
                                    break a
                                }
                            } else {
                                n = !1;
                                break a
                            }
                    n = !0
                }
                m = n
            }
            var q = !1;
            if (c) {
                var r = d.indexOf(g) >= 0;
                if (r) q = r;
                else {
                    var u = hb(d, k || []);
                    u && U(10);
                    q = u
                }
            }
            var v = !m || q;
            v || !(k.indexOf("sandboxedScripts") >= 0) || b && b.indexOf("sandboxedScripts") !==
                -1 || (v = hb(d, Xw));
            return e[g] = v
        }
    }
    var Zw = !1;
    Zw = !0;

    function $w() {
        ek && Ow(nk(), function(a) {
            var b = vf(a.entityId),
                c;
            if (yf(b)) {
                var d = b[Le.oa];
                if (!d) throw Error("Error: No function name given for function call.");
                var e = nf[d];
                c = !!e && !!e.runInSiloedMode
            } else c = !!Nw(b[Le.oa], 4);
            return c
        })
    }

    function ax(a, b, c, d, e) {
        if (!bx()) {
            var f = d.siloed ? jk(a) : a;
            if (!wk(f)) {
                d.siloed && yk({
                    ctid: f,
                    isDestination: !1
                });
                var g = qk();
                ak().container[f] = {
                    state: 1,
                    context: d,
                    parent: g
                };
                Zj({
                    ctid: f,
                    isDestination: !1
                }, e);
                var k = cx(a);
                if (S(69) && cj()) pc(bj() + "/" + k);
                else {
                    var m = vb(a, "GTM-"),
                        n = Hj(),
                        p = c ? "/gtag/js" : "/gtm.js",
                        q = Gj(b, p + k);
                    if (!q) {
                        var r = Hi.vf + p;
                        n && jc && m ? (r = jc.replace(/^(?:https?:\/\/)?/i, "").split(/[?#]/)[0], q = ss("https://", "http://", r + k)) : q = cj() ? bj() + "/" + k : ss("https://", "http://", r + k)
                    }
                    pc(q)
                }
            }
        }
    }

    function dx(a, b, c, d) {
        if (!bx()) {
            var e = c.siloed ? jk(a) : a;
            if (!xk(e))
                if (!c.siloed && zk()) ak().destination[e] = {
                    state: 0,
                    transportUrl: b,
                    context: c,
                    parent: qk()
                }, Zj({
                    ctid: e,
                    isDestination: !0
                }, d), U(91);
                else if (c.siloed && yk({
                    ctid: e,
                    isDestination: !0
                }), ak().destination[e] = {
                    state: 1,
                    context: c,
                    parent: qk()
                }, Zj({
                    ctid: e,
                    isDestination: !0
                }, d), S(69) && cj()) pc(bj() + ("/gtd" + cx(a, !0)));
            else {
                var f = "/gtag/destination" + cx(a, !0),
                    g = Gj(b, f);
                g || (cj() ? (f = "/gtd" + cx(a, !0), g = bj() + f) : g = ss("https://", "http://", Hi.vf + f));
                pc(g)
            }
        }
    }

    function cx(a, b) {
        b = b === void 0 ? !1 : b;
        var c = "?id=" + encodeURIComponent(a) + "&l=" + Hi.ob;
        if (!vb(a, "GTM-") || b) c += "&cx=c";
        S(79) && (c += "&gtm=" + No());
        Hj() && (c += "&sign=" + Hi.uh);
        var d = aj.C;
        d === 1 ? c += "&fps=fc" : d === 2 && (c += "&fps=fe");
        return c
    }

    function bx() {
        if (Lo()) {
            return !0
        }
        return !1
    };
    var ex = !1,
        fx = 0,
        gx = [];

    function hx(a) {
        if (!ex) {
            var b = E.createEventObject,
                c = E.readyState === "complete",
                d = E.readyState === "interactive";
            if (!a || a.type !== "readystatechange" || c || !b && d) {
                ex = !0;
                for (var e = 0; e < gx.length; e++) F(gx[e])
            }
            gx.push = function() {
                for (var f = ya.apply(0, arguments), g = 0; g < f.length; g++) F(f[g]);
                return 0
            }
        }
    }

    function ix() {
        if (!ex && fx < 140) {
            fx++;
            try {
                var a, b;
                (b = (a = E.documentElement).doScroll) == null || b.call(a, "left");
                hx()
            } catch (c) {
                C.setTimeout(ix, 50)
            }
        }
    }

    function jx(a) {
        ex ? a() : gx.push(a)
    };

    function lx(a, b, c) {
        return {
            entityType: a,
            indexInOriginContainer: b,
            nameInOriginContainer: c,
            originContainerId: lk()
        }
    };
    var nx = function(a, b) {
            this.j = !1;
            this.K = [];
            this.eventData = {
                tags: []
            };
            this.P = !1;
            this.C = this.H = 0;
            mx(this, a, b)
        },
        ox = function(a, b, c, d) {
            if (Ki.hasOwnProperty(b) || b === "__zone") return -1;
            var e = {};
            Uc(d) && (e = Vc(d, e));
            e.id = c;
            e.status = "timeout";
            return a.eventData.tags.push(e) - 1
        },
        px = function(a, b, c, d) {
            var e = a.eventData.tags[b];
            e && (e.status = c, e.executionTime = d)
        },
        qx = function(a) {
            if (!a.j) {
                for (var b = a.K, c = 0; c < b.length; c++) b[c]();
                a.j = !0;
                a.K.length = 0
            }
        },
        mx = function(a, b, c) {
            b !== void 0 && a.Ge(b);
            c && C.setTimeout(function() {
                    qx(a)
                },
                Number(c))
        };
    nx.prototype.Ge = function(a) {
        var b = this,
            c = sb(function() {
                F(function() {
                    a(lk(), b.eventData)
                })
            });
        this.j ? c() : this.K.push(c)
    };
    var rx = function(a) {
            a.H++;
            return sb(function() {
                a.C++;
                a.P && a.C >= a.H && qx(a)
            })
        },
        sx = function(a) {
            a.P = !0;
            a.C >= a.H && qx(a)
        };
    var tx = {};

    function ux() {
        return C[vx()]
    }

    function vx() {
        return C.GoogleAnalyticsObject || "ga"
    }

    function yx() {
        var a = lk();
    }

    function zx(a, b) {
        return function() {
            var c = ux(),
                d = c && c.getByName && c.getByName(a);
            if (d) {
                var e = d.get("sendHitTask");
                d.set("sendHitTask", function(f) {
                    var g = f.get("hitPayload"),
                        k = f.get("hitCallback"),
                        m = g.indexOf("&tid=" + b) < 0;
                    m && (f.set("hitPayload", g.replace(/&tid=UA-[0-9]+-[0-9]+/, "&tid=" + b), !0), f.set("hitCallback", void 0, !0));
                    e(f);
                    m && (f.set("hitPayload", g, !0), f.set("hitCallback", k, !0), f.set("_x_19", void 0, !0), e(f))
                })
            }
        }
    }
    var Ex = ["es", "1"],
        Fx = {},
        Gx = {};

    function Hx(a, b) {
        if (Qj) {
            var c;
            c = b.match(/^(gtm|gtag)\./) ? encodeURIComponent(b) : "*";
            Fx[a] = [
                ["e", c],
                ["eid", a]
            ];
            Pm(a)
        }
    }

    function Ix(a) {
        var b = a.eventId,
            c = a.Tc;
        if (!Fx[b]) return [];
        var d = [];
        Gx[b] || d.push(Ex);
        d.push.apply(d, oa(Fx[b]));
        c && (Gx[b] = !0);
        return d
    };
    var Jx = {},
        Kx = {},
        Lx = {};

    function Mx(a, b, c, d) {
        Qj && S(92) && ((d === void 0 ? 0 : d) ? (Lx[b] = Lx[b] || 0, ++Lx[b]) : c !== void 0 ? (Kx[a] = Kx[a] || {}, Kx[a][b] = Math.round(c)) : (Jx[a] = Jx[a] || {}, Jx[a][b] = (Jx[a][b] || 0) + 1))
    }

    function Nx(a) {
        var b = a.eventId,
            c = a.Tc,
            d = Jx[b] || {},
            e = [],
            f;
        for (f in d) d.hasOwnProperty(f) && e.push("" + f + d[f]);
        c && delete Jx[b];
        return e.length ? [
            ["md", e.join(".")]
        ] : []
    }

    function Ox(a) {
        var b = a.eventId,
            c = a.Tc,
            d = Kx[b] || {},
            e = [],
            f;
        for (f in d) d.hasOwnProperty(f) && e.push("" + f + d[f]);
        c && delete Kx[b];
        return e.length ? [
            ["mtd", e.join(".")]
        ] : []
    }

    function Px() {
        for (var a = [], b = l(Object.keys(Lx)), c = b.next(); !c.done; c = b.next()) {
            var d = c.value;
            a.push("" + d + Lx[d])
        }
        return a.length ? [
            ["mec", a.join(".")]
        ] : []
    };
    var Qx = {},
        Rx = {};

    function Sx(a, b, c) {
        if (Qj && b) {
            var d = Kj(b);
            Qx[a] = Qx[a] || [];
            Qx[a].push(c + d);
            var e = (yf(b) ? "1" : "2") + d;
            Rx[a] = Rx[a] || [];
            Rx[a].push(e);
            Pm(a)
        }
    }

    function Tx(a) {
        var b = a.eventId,
            c = a.Tc,
            d = [],
            e = Qx[b] || [];
        e.length && d.push(["tr", e.join(".")]);
        var f = Rx[b] || [];
        f.length && d.push(["ti", f.join(".")]);
        c && (delete Qx[b], delete Rx[b]);
        return d
    };

    function Ux(a, b, c, d) {
        var e = lf[a],
            f = Vx(a, b, c, d);
        if (!f) return null;
        var g = zf(e[Le.Uj], c, []);
        if (g && g.length) {
            var k = g[0];
            f = Ux(k.index, {
                onSuccess: f,
                onFailure: k.hk === 1 ? b.terminate : f,
                terminate: b.terminate
            }, c, d)
        }
        return f
    }

    function Vx(a, b, c, d) {
        function e() {
            function w() {
                ll(3);
                var J = getCurrentTimestamp() - I;
                Sx(c.id, f, "7");
                px(c.qc, B, "exception", J);
                S(80) && uw(c, f, Dv.J.Vj);
                D || (D = !0, k())
            }
            if (f[Le.vl]) k();
            else {
                var x = xf(f, c, []),
                    y = x[Le.Nk];
                if (y != null)
                    for (var A = 0; A < y.length; A++)
                        if (!X(y[A])) {
                            k();
                            return
                        } var B = ox(c.qc, String(f[Le.oa]), Number(f[Le.Fe]), x[Le.METADATA]),
                    D = !1;
                x.vtp_gtmOnSuccess = function() {
                    if (!D) {
                        D = !0;
                        var J = getCurrentTimestamp() - I;
                        Sx(c.id, lf[a], "5");
                        px(c.qc, B, "success", J);
                        S(80) && uw(c, f, Dv.J.Xj);
                        g()
                    }
                };
                x.vtp_gtmOnFailure = function() {
                    if (!D) {
                        D = !0;
                        var J = getCurrentTimestamp() -
                            I;
                        Sx(c.id, lf[a], "6");
                        px(c.qc, B, "failure", J);
                        S(80) && uw(c, f, Dv.J.Wj);
                        k()
                    }
                };
                x.vtp_gtmTagId = f.tag_id;
                x.vtp_gtmEventId = c.id;
                c.priorityId && (x.vtp_gtmPriorityId = c.priorityId);
                Sx(c.id, f, "1");
                S(80) && tw(c, f);
                var I = getCurrentTimestamp();
                try {
                    Af(x, {
                        event: c,
                        index: a,
                        type: 1
                    })
                } catch (J) {
                    w(J)
                }
                S(80) && uw(c, f, Dv.J.Yj)
            }
        }
        var f = lf[a],
            g = b.onSuccess,
            k = b.onFailure,
            m = b.terminate;
        if (c.isBlocked(f)) return null;
        var n = zf(f[Le.Zj], c, []);
        if (n && n.length) {
            var p = n[0],
                q = Ux(p.index, {
                    onSuccess: g,
                    onFailure: k,
                    terminate: m
                }, c, d);
            if (!q) return null;
            g = q;
            k = p.hk ===
                2 ? m : q
        }
        if (f[Le.Mj] || f[Le.xl]) {
            var r = f[Le.Mj] ? mf : c.rn,
                u = g,
                v = k;
            if (!r[a]) {
                var t = Wx(a, r, sb(e));
                g = t.onSuccess;
                k = t.onFailure
            }
            return function() {
                r[a](u, v)
            }
        }
        return e
    }

    function Wx(a, b, c) {
        var d = [],
            e = [];
        b[a] = Xx(d, e, c);
        return {
            onSuccess: function() {
                b[a] = Yx;
                for (var f = 0; f < d.length; f++) d[f]()
            },
            onFailure: function() {
                b[a] = Zx;
                for (var f = 0; f < e.length; f++) e[f]()
            }
        }
    }

    function Xx(a, b, c) {
        return function(d, e) {
            a.push(d);
            b.push(e);
            c()
        }
    }

    function Yx(a) {
        a()
    }

    function Zx(a, b) {
        b()
    };
    var by = function(a, b) {
        for (var c = [], d = 0; d < lf.length; d++)
            if (a[d]) {
                var e = lf[d];
                var f = rx(b.qc);
                try {
                    var g = Ux(d, {
                        onSuccess: f,
                        onFailure: f,
                        terminate: f
                    }, b, d);
                    if (g) {
                        var k = e[Le.oa];
                        if (!k) throw Error("Error: No function name given for function call.");
                        var m = nf[k];
                        c.push({
                            Ck: d,
                            tk: (m ? m.priorityOverride || 0 : 0) || Nw(e[Le.oa], 1) || 0,
                            execute: g
                        })
                    } else $x(d, b), f()
                } catch (p) {
                    f()
                }
            } c.sort(ay);
        for (var n = 0; n < c.length; n++) c[n].execute();
        return c.length >
            0
    };

    function ay(a, b) {
        var c, d = b.tk,
            e = a.tk;
        c = d > e ? 1 : d < e ? -1 : 0;
        var f;
        if (c !== 0) f = c;
        else {
            var g = a.Ck,
                k = b.Ck;
            f = g > k ? 1 : g < k ? -1 : 0
        }
        return f
    }

    function $x(a, b) {
        if (Qj) {
            var c = function(d) {
                var e = b.isBlocked(lf[d]) ? "3" : "4",
                    f = zf(lf[d][Le.Uj], b, []);
                f && f.length && c(f[0].index);
                Sx(b.id, lf[d], e);
                var g = zf(lf[d][Le.Zj], b, []);
                g && g.length && c(g[0].index)
            };
            c(a)
        }
    }
    var ey = !1,
        cy;

    function gy(a) {
        var b = a["gtm.uniqueEventId"],
            c = a["gtm.priorityId"],
            d = a.event;
        if (S(80)) {}
        if (d === "gtm.js") {
            if (ey) return !1;
            ey = !0
        }
        var e = !1,
            f = Rw(),
            g = Vc(a, null);
        if (!f.every(function(u) {
                return u({
                    originalEventData: g
                })
            })) {
            if (d !== "gtm.js" && d !== "gtm.init" && d !== "gtm.init_consent") return !1;
            e = !0
        }
        Hx(b, d);
        var k = a.eventCallback,
            m = a.eventTimeout,
            n = {
                id: b,
                priorityId: c,
                name: d,
                isBlocked: hy(g, e),
                rn: [],
                logMacroError: function() {
                    U(6);
                    ll(0)
                },
                cachedModelValues: iy(),
                qc: new nx(function() {
                    if (S(80)) {}
                    k &&
                        k.apply(k, Array.prototype.slice.call(arguments, 0))
                }, m),
                originalEventData: g
            };
        S(92) && Qj && (n.reportMacroDiscrepancy = Mx);
        S(80) && pw(n.id, n.name);
        var p = Gf(n);
        S(80) && qw(n.id, n.name);
        e && (p = jy(p));
        if (S(80)) {}
        var q = by(p, n),
            r = !1;
        sx(n.qc);
        d !== "gtm.js" && d !== "gtm.sync" || yx();
        return ky(p, q) || r
    }

    function iy() {
        var a = {};
        a.event = nj("event", 1);
        a.ecommerce = nj("ecommerce", 1);
        a.gtm = nj("gtm");
        a.eventModel = nj("eventModel");
        return a
    }

    function hy(a, b) {
        var c = Yw();
        return function(d) {
            if (c(d)) return !0;
            var e = d && d[Le.oa];
            if (!e || typeof e !== "string") return !0;
            e = e.replace(/^_*/, "");
            var f, g = nk();
            f = Pw().getRestrictions(0, g);
            var k = a;
            b && (k = Vc(a, null), k["gtm.uniqueEventId"] = Number.MAX_SAFE_INTEGER);
            for (var m = Yi[e] || [], n = l(f), p = n.next(); !p.done; p = n.next()) {
                var q = p.value;
                try {
                    if (!q({
                            entityId: e,
                            securityGroups: m,
                            originalEventData: k
                        })) return !0
                } catch (r) {
                    return !0
                }
            }
            return !1
        }
    }

    function jy(a) {
        for (var b = [], c = 0; c < a.length; c++)
            if (a[c]) {
                var d = String(lf[c][Le.oa]);
                if (Ji[d] || lf[c][Le.yl] !== void 0 || Nw(d, 2)) b[c] = !0
            } return b
    }

    function ky(a, b) {
        if (!b) return b;
        for (var c = 0; c < a.length; c++)
            if (a[c] && lf[c] && !Ki[String(lf[c][Le.oa])]) return !0;
        return !1
    }
    var ly = 0;

    function my(a, b) {
        return arguments.length === 1 ? ny("set", a) : ny("set", a, b)
    }

    function oy(a, b) {
        return arguments.length === 1 ? ny("config", a) : ny("config", a, b)
    }

    function py(a, b, c) {
        c = c || {};
        c[O.g.kc] = a;
        return ny("event", b, c)
    }

    function ny() {
        return arguments
    };
    var qy = function() {
        this.messages = [];
        this.j = []
    };
    qy.prototype.enqueue = function(a, b, c) {
        var d = this.messages.length + 1;
        a["gtm.uniqueEventId"] = b;
        a["gtm.priorityId"] = d;
        var e = Object.assign({}, c, {
                eventId: b,
                priorityId: d,
                fromContainerExecution: !0
            }),
            f = {
                message: a,
                notBeforeEventId: b,
                priorityId: d,
                messageContext: e
            };
        this.messages.push(f);
        for (var g = 0; g < this.j.length; g++) try {
            this.j[g](f)
        } catch (k) {}
    };
    qy.prototype.listen = function(a) {
        this.j.push(a)
    };
    qy.prototype.get = function() {
        for (var a = {}, b = 0; b < this.messages.length; b++) {
            var c = this.messages[b],
                d = a[c.notBeforeEventId];
            d || (d = [], a[c.notBeforeEventId] = d);
            d.push(c)
        }
        return a
    };
    qy.prototype.prune = function(a) {
        for (var b = [], c = [], d = 0; d < this.messages.length; d++) {
            var e = this.messages[d];
            e.notBeforeEventId === a ? b.push(e) : c.push(e)
        }
        this.messages = c;
        return b
    };

    function ry(a, b, c) {
        c.eventMetadata = c.eventMetadata || {};
        c.eventMetadata.source_canonical_id = Pf.canonicalContainerId;
        sy().enqueue(a, b, c)
    }

    function ty() {
        var a = uy;
        sy().listen(a)
    }

    function sy() {
        var a = Ii.mb;
        a || (a = new qy, Ii.mb = a);
        return a
    };
    var vy = {},
        wy = {};

    function xy(a, b) {
        for (var c = [], d = [], e = {}, f = 0; f < a.length; e = {
                gi: void 0,
                Qh: void 0
            }, f++) {
            var g = a[f];
            if (g.indexOf("-") >= 0) {
                if (e.gi = Vl(g, b), e.gi) {
                    var k = kk();
                    eb(k, function(r) {
                        return function(u) {
                            return r.gi.destinationId === u
                        }
                    }(e)) ? c.push(g) : d.push(g)
                }
            } else {
                var m = vy[g] || [];
                e.Qh = {};
                m.forEach(function(r) {
                    return function(u) {
                        r.Qh[u] = !0
                    }
                }(e));
                for (var n = hk(), p = 0; p < n.length; p++)
                    if (e.Qh[n[p]]) {
                        c = c.concat(kk());
                        break
                    } var q = wy[g] || [];
                q.length && (c = c.concat(q))
            }
        }
        return {
            Jm: c,
            Mm: d
        }
    }

    function Jy(a) {
        jb(vy, function(b, c) {
            var d = c.indexOf(a);
            d >= 0 && c.splice(d, 1)
        })
    }

    function Ky(a) {
        jb(wy, function(b, c) {
            var d = c.indexOf(a);
            d >= 0 && c.splice(d, 1)
        })
    }
    var Ly = "HA GF G UA AW DC MC".split(" "),
        My = !1,
        Ny = !1,
        Oy = !1,
        Py = !1;

    function Qy(a, b) {
        a.hasOwnProperty("gtm.uniqueEventId") || Object.defineProperty(a, "gtm.uniqueEventId", {
            value: Zi()
        });
        b.eventId = a["gtm.uniqueEventId"];
        b.priorityId = a["gtm.priorityId"];
        return {
            eventId: b.eventId,
            priorityId: b.priorityId
        }
    }
    var Ry = void 0,
        Sy = void 0;

    function Ty(a, b, c) {
        var d = Vc(a, null);
        d.eventId = void 0;
        d.inheritParentConfig = void 0;
        Object.keys(b).some(function(f) {
            return b[f] !== void 0
        }) && U(136);
        var e = Vc(b, null);
        Vc(c, e);
        ry(oy(hk()[0], e), a.eventId, d)
    }

    function Uy(a) {
        for (var b = l([O.g.rd, O.g.Sb]), c = b.next(); !c.done; c = b.next()) {
            var d = c.value,
                e = a && a[d] || Xm.j[d];
            if (e) return e
        }
    }
    var Vy = [O.g.rd, O.g.Sb, O.g.Dc, O.g.tb, O.g.zb, O.g.Ca, O.g.sa, O.g.Na, O.g.Ra, O.g.vb],
        Wy = {
            config: function(a, b) {
                var c = Qy(a, b);
                if (!(a.length < 2) && z(a[1])) {
                    var d = {};
                    if (a.length > 2) {
                        if (a[2] !== void 0 && !Uc(a[2]) || a.length > 3) return;
                        d = a[2]
                    }
                    var e = Vl(a[1], b.isGtmEvent);
                    if (e) {
                        var f, g, k;
                        a: {
                            if (!dk.ze) {
                                var m = pk(qk());
                                if (Bk(m)) {
                                    var n = m.parent,
                                        p = n.isDestination;
                                    k = {
                                        Tm: pk(n),
                                        Im: p
                                    };
                                    break a
                                }
                            }
                            k = void 0
                        }
                        var q = k;
                        q && (f = q.Tm, g = q.Im);
                        Hx(c.eventId, "gtag.config");
                        var r = e.destinationId,
                            u = e.id !== r;
                        if (u ? kk().indexOf(r) === -1 : hk().indexOf(r) ===
                            -1) {
                            if (!b.inheritParentConfig && !d[O.g.Ob]) {
                                var v = Uy(d);
                                if (u) dx(r, v, {
                                    source: 2,
                                    fromContainerExecution: b.fromContainerExecution
                                });
                                else if (f !== void 0 && f.containers.indexOf(r) !== -1) {
                                    var t = d;
                                    Ry ? Ty(b, t, Ry) : Sy || (Sy = Vc(t, null))
                                } else ax(r, v, !0, {
                                    source: 2,
                                    fromContainerExecution: b.fromContainerExecution
                                })
                            }
                        } else {
                            if (f && (U(128), g && U(130), b.inheritParentConfig)) {
                                var w;
                                var x = d;
                                Sy ? (Ty(b, Sy, x), w = !1) : (!x[O.g.nc] && Mi && Ry || (Ry = Vc(x, null)), w = !0);
                                w && f.containers && f.containers.join(",");
                                return
                            }
                            var y = d;
                            if (!Oy && (Oy = !0, Ny))
                                for (var A =
                                        l(Vy), B = A.next(); !B.done; B = A.next())
                                    if (y.hasOwnProperty(B.value)) {
                                        kl("erc");
                                        break
                                    } Rj && !ek && (ly === 1 && (Fk.mcc = !1), ly = 2);
                            hl = !0;
                            if (Mi && !u && !d[O.g.nc]) {
                                var D = Py;
                                Py = !0;
                                if (D) return
                            }
                            My || U(43);
                            if (!b.noTargetGroup)
                                if (u) {
                                    Ky(e.id);
                                    var I = e.id,
                                        J = d[O.g.ne] || "default";
                                    J = String(J).split(",");
                                    for (var H = 0; H < J.length; H++) {
                                        var W = wy[J[H]] || [];
                                        wy[J[H]] = W;
                                        W.indexOf(I) < 0 && W.push(I)
                                    }
                                } else {
                                    Jy(e.id);
                                    var N = e.id,
                                        aa = d[O.g.ne] || "default";
                                    aa = aa.toString().split(",");
                                    for (var da = 0; da < aa.length; da++) {
                                        var T = vy[aa[da]] || [];
                                        vy[aa[da]] =
                                            T;
                                        T.indexOf(N) < 0 && T.push(N)
                                    }
                                } delete d[O.g.ne];
                            var R = b.eventMetadata || {};
                            R.hasOwnProperty("is_external_event") || (R.is_external_event = !b.fromContainerExecution);
                            b.eventMetadata = R;
                            delete d[O.g.kd];
                            for (var M = u ? [e.id] : kk(), ia = 0; ia < M.length; ia++) {
                                var la = d,
                                    ea = M[ia],
                                    ua = Vc(b, null),
                                    Ma = Vl(ea, ua.isGtmEvent);
                                Ma && Xm.push("config", [la], Ma, ua)
                            }
                        }
                    }
                }
            },
            consent: function(a, b) {
                if (a.length === 3) {
                    U(39);
                    var c = Qy(a, b),
                        d = a[1],
                        e = a[2];
                    b.fromContainerExecution || (e[O.g.N] && U(139), e[O.g.za] && U(140));
                    d === "default" ? yl(e) : d === "update" ?
                        Al(e, c) : d === "declare" && b.fromContainerExecution && xl(e)
                }
            },
            event: function(a, b) {
                var c = a[1];
                if (!(a.length < 2) && z(c)) {
                    var d = void 0;
                    if (a.length > 2) {
                        if (!Uc(a[2]) && a[2] !== void 0 || a.length > 3) return;
                        d = a[2]
                    }
                    var e = d,
                        f = {},
                        g = (f.event = c, f);
                    e && (g.eventModel = Vc(e, null), e[O.g.kd] && (g.eventCallback = e[O.g.kd]), e[O.g.je] && (g.eventTimeout = e[O.g.je]));
                    var k = Qy(a, b),
                        m = k.eventId,
                        n = k.priorityId;
                    g["gtm.uniqueEventId"] = m;
                    n && (g["gtm.priorityId"] = n);
                    if (c === "optimize.callback") return g.eventModel = g.eventModel || {}, g;
                    var p;
                    var q = d,
                        r = q && q[O.g.kc];
                    r === void 0 && (r = ij(O.g.kc, 2), r === void 0 && (r = "default"));
                    if (z(r) || Array.isArray(r)) {
                        var u;
                        u = b.isGtmEvent ? z(r) ? [r] : r : r.toString().replace(/\s+/g, "").split(",");
                        var v = xy(u, b.isGtmEvent),
                            t = v.Jm,
                            w = v.Mm;
                        if (w.length)
                            for (var x = Uy(q), y = 0; y < w.length; y++) {
                                var A = Vl(w[y], b.isGtmEvent);
                                A && dx(A.destinationId, x, {
                                    source: 3,
                                    fromContainerExecution: b.fromContainerExecution
                                })
                            }
                        p = Wl(t, b.isGtmEvent)
                    } else p = void 0;
                    var B = p;
                    if (B) {
                        var D;
                        !B.length || ((D = b.eventMetadata) == null ? 0 : D.em_event) || (Ny = !0);
                        Hx(m, c);
                        for (var I = [], J = 0; J < B.length; J++) {
                            var H = B[J],
                                W = Vc(b, null);
                            if (Ly.indexOf(rk(H.prefix)) !== -1) {
                                var N = Vc(d, null),
                                    aa = W.eventMetadata || {};
                                aa.hasOwnProperty("is_external_event") || (aa.is_external_event = !W.fromContainerExecution);
                                W.eventMetadata = aa;
                                delete N[O.g.kd];
                                Ym(c, N, H.id, W);
                                Rj && !ek && ly === 0 && (Hk("mcc", "1"), ly = 1);
                                hl = !0
                            }
                            I.push(H.id)
                        }
                        g.eventModel = g.eventModel || {};
                        B.length > 0 ? g.eventModel[O.g.kc] = I.join() : delete g.eventModel[O.g.kc];
                        My || U(43);
                        b.noGtmEvent === void 0 && b.eventMetadata && b.eventMetadata.syn_or_mod && (b.noGtmEvent = !0);
                        g.eventModel[O.g.jc] && (b.noGtmEvent = !0);
                        return b.noGtmEvent ? void 0 : g
                    }
                }
            },
            get: function(a, b) {
                U(53);
                if (a.length === 4 && z(a[1]) && z(a[2]) && bb(a[3])) {
                    var c = Vl(a[1], b.isGtmEvent),
                        d = String(a[2]),
                        e = a[3];
                    if (c) {
                        My || U(43);
                        var f = Uy();
                        if (!eb(kk(), function(k) {
                                return c.destinationId === k
                            })) dx(c.destinationId, f, {
                            source: 4,
                            fromContainerExecution: b.fromContainerExecution
                        });
                        else if (Ly.indexOf(rk(c.prefix)) !== -1) {
                            hl = !0;
                            Qy(a, b);
                            var g = {};
                            Vc((g[O.g.xb] = d, g[O.g.Mb] = e, g), null);
                            Zm(d, function(k) {
                                F(function() {
                                    e(k)
                                })
                            }, c.id, b)
                        }
                    }
                }
            },
            js: function(a, b) {
                if (a.length === 2 && a[1].getTime) {
                    My = !0;
                    var c = Qy(a, b),
                        d = c.eventId,
                        e = c.priorityId,
                        f = {};
                    return f.event = "gtm.js", f["gtm.start"] = a[1].getTime(), f["gtm.uniqueEventId"] = d, f["gtm.priorityId"] = e, f
                }
            },
            policy: function(a) {
                if (a.length === 3 && z(a[1]) && bb(a[2])) {
                    if (Mf(a[1], a[2]), U(74), a[1] === "all") {
                        U(75);
                        var b = !1;
                        try {
                            b = a[2](lk(), "unknown", {})
                        } catch (c) {}
                        b || U(76)
                    }
                } else U(73)
            },
            set: function(a, b) {
                var c = void 0;
                a.length === 2 && Uc(a[1]) ? c = Vc(a[1], null) : a.length === 3 && z(a[1]) && (c = {}, Uc(a[2]) || Array.isArray(a[2]) ?
                    c[a[1]] = Vc(a[2], null) : c[a[1]] = a[2]);
                if (c) {
                    var d = Qy(a, b),
                        e = d.eventId,
                        f = d.priorityId;
                    Vc(c, null);
                    var g = Vc(c, null);
                    Xm.push("set", [g], void 0, b);
                    c["gtm.uniqueEventId"] = e;
                    f && (c["gtm.priorityId"] = f);
                    delete c.event;
                    b.overwriteModelFields = !0;
                    return c
                }
            }
        },
        Xy = {
            policy: !0
        };
    var Zy = function(a) {
        if (Yy(a)) return a;
        this.value = a
    };
    Zy.prototype.getUntrustedMessageValue = function() {
        return this.value
    };
    var Yy = function(a) {
        return !a || Sc(a) !== "object" || Uc(a) ? !1 : "getUntrustedMessageValue" in a
    };
    Zy.prototype.getUntrustedMessageValue = Zy.prototype.getUntrustedMessageValue;
    var $y = !1,
        az = [];

    function bz() {
        if (!$y) {
            $y = !0;
            for (var a = 0; a < az.length; a++) F(az[a])
        }
    }

    function cz(a) {
        $y ? F(a) : az.push(a)
    };
    var dz = 0,
        ez = {},
        fz = [],
        gz = [],
        hz = !1,
        iz = !1;

    function jz(a, b) {
        return a.messageContext.eventId - b.messageContext.eventId || a.messageContext.priorityId - b.messageContext.priorityId
    }

    function kz(a, b, c) {
        a.eventCallback = b;
        c && (a.eventTimeout = c);
        return lz(a)
    }

    function mz(a, b) {
        if (!cb(b) || b < 0) b = 0;
        var c = Ii[Hi.ob],
            d = 0,
            e = !1,
            f = void 0;
        f = C.setTimeout(function() {
            e || (e = !0, a());
            f = void 0
        }, b);
        return function() {
            var g = c ? c.subscribers : 1;
            ++d === g && (f && (C.clearTimeout(f), f = void 0), e || (a(), e = !0))
        }
    }

    function nz(a, b) {
        var c = a._clear || b.overwriteModelFields;
        jb(a, function(e, f) {
            e !== "_clear" && (c && lj(e), lj(e, f))
        });
        Vi || (Vi = a["gtm.start"]);
        var d = a["gtm.uniqueEventId"];
        if (!a.event) return !1;
        typeof d !== "number" && (d = Zi(), a["gtm.uniqueEventId"] = d, lj("gtm.uniqueEventId", d));
        return gy(a)
    }

    function oz(a) {
        if (a == null || typeof a !== "object") return !1;
        if (a.event) return !0;
        if (kb(a)) {
            var b = a[0];
            if (b === "config" || b === "event" || b === "js" || b === "get") return !0
        }
        return !1
    }

    function pz() {
        var a;
        if (gz.length) a = gz.shift();
        else if (fz.length) a = fz.shift();
        else return;
        var b;
        var c = a;
        if (hz || !oz(c.message)) b = c;
        else {
            hz = !0;
            var d = c.message["gtm.uniqueEventId"];
            typeof d !== "number" && (d = c.message["gtm.uniqueEventId"] = Zi());
            var e = {},
                f = {
                    message: (e.event = "gtm.init_consent", e["gtm.uniqueEventId"] = d - 2, e),
                    messageContext: {
                        eventId: d - 2
                    }
                },
                g = {},
                k = {
                    message: (g.event = "gtm.init", g["gtm.uniqueEventId"] = d - 1, g),
                    messageContext: {
                        eventId: d - 1
                    }
                };
            fz.unshift(k, c);
            Rj && Lk();
            b = f
        }
        return b
    }

    function qz() {
        for (var a = !1, b; !iz && (b = pz());) {
            iz = !0;
            delete fj.eventModel;
            hj();
            var c = b,
                d = c.message,
                e = c.messageContext;
            if (d == null) iz = !1;
            else {
                e.fromContainerExecution && mj();
                try {
                    if (bb(d)) try {
                        d.call(jj)
                    } catch (v) {} else if (Array.isArray(d)) {
                        if (z(d[0])) {
                            var f = d[0].split("."),
                                g = f.pop(),
                                k = d.slice(1),
                                m = ij(f.join("."), 2);
                            if (m != null) try {
                                m[g].apply(m, k)
                            } catch (v) {}
                        }
                    } else {
                        var n = void 0;
                        if (kb(d)) a: {
                            if (d.length && z(d[0])) {
                                var p = Wy[d[0]];
                                if (p && (!e.fromContainerExecution || !Xy[d[0]])) {
                                    n = p(d, e);
                                    break a
                                }
                            }
                            n = void 0
                        }
                        else n = d;
                        n && (a = nz(n, e) || a)
                    }
                } finally {
                    e.fromContainerExecution && hj(!0);
                    var q = d["gtm.uniqueEventId"];
                    if (typeof q === "number") {
                        for (var r = ez[String(q)] || [], u = 0; u < r.length; u++) gz.push(rz(r[u]));
                        r.length && gz.sort(jz);
                        delete ez[String(q)];
                        q > dz && (dz = q)
                    }
                    iz = !1
                }
            }
        }
        return !a
    }

    function sz() {
        if (S(80)) {
            var a = tz();
        }
        var b = qz();
        if (S(80)) {}
        try {
            var c = lk(),
                d = C[Hi.ob].hide;
            if (d && d[c] !== void 0 && d.end) {
                d[c] = !1;
                var e = !0,
                    f;
                for (f in d)
                    if (d.hasOwnProperty(f) && d[f] ===
                        !0) {
                        e = !1;
                        break
                    } e && (d.end(), d.end = null)
            }
        } catch (g) {}
        return b
    }

    function uy(a) {
        if (dz < a.notBeforeEventId) {
            var b = String(a.notBeforeEventId);
            ez[b] = ez[b] || [];
            ez[b].push(a)
        } else gz.push(rz(a)), gz.sort(jz), F(function() {
            iz || qz()
        })
    }

    function rz(a) {
        return {
            message: a.message,
            messageContext: a.messageContext
        }
    }

    function uz() {
        function a(f) {
            var g = {};
            if (Yy(f)) {
                var k = f;
                f = Yy(k) ? k.getUntrustedMessageValue() : void 0;
                g.fromContainerExecution = !0
            }
            return {
                message: f,
                messageContext: g
            }
        }
        var b = kc(Hi.ob, []),
            c = Ii[Hi.ob] = Ii[Hi.ob] || {};
        c.pruned === !0 && U(83);
        ez = sy().get();
        ty();
        jx(function() {
            if (!c.gtmDom) {
                c.gtmDom = !0;
                var f = {};
                b.push((f.event = "gtm.dom", f))
            }
        });
        cz(function() {
            if (!c.gtmLoad) {
                c.gtmLoad = !0;
                var f = {};
                b.push((f.event = "gtm.load", f))
            }
        });
        c.subscribers = (c.subscribers || 0) + 1;
        var d = b.push;
        b.push = function() {
            var f;
            if (Ii.SANDBOXED_JS_SEMAPHORE >
                0) {
                f = [];
                for (var g = 0; g < arguments.length; g++) f[g] = new Zy(arguments[g])
            } else f = [].slice.call(arguments, 0);
            var k = f.map(function(q) {
                return a(q)
            });
            fz.push.apply(fz, k);
            var m = d.apply(b, f),
                n = Math.max(100, Number("1000") || 300);
            if (this.length > n)
                for (U(4), c.pruned = !0; this.length > n;) this.shift();
            var p = typeof m !== "boolean" || m;
            return qz() && p
        };
        var e = b.slice(0).map(function(f) {
            return a(f)
        });
        fz.push.apply(fz, e);
        if (tz()) {
            if (S(80)) {}
            F(sz)
        }
    }
    var tz = function() {
            var a = !0;
            return a
        },
        lz = function(a) {
            return C[Hi.ob].push(a)
        };

    function vz(a) {
        if (a == null || a.length === 0) return !1;
        var b = Number(a),
            c = getCurrentTimestamp();
        return b < c + 3E5 && b > c - 9E5
    }

    function wz(a) {
        return a && a.indexOf("pending:") === 0 ? vz(a.substr(8)) : !1
    };

    function Rz() {};
    var Sz = function() {};
    Sz.prototype.toString = function() {
        return "undefined"
    };
    var Tz = new Sz;

    function $z(a, b) {
        function c(g) {
            var k = Bj(g),
                m = vj(k, "protocol"),
                n = vj(k, "host", !0),
                p = vj(k, "port"),
                q = vj(k, "path").toLowerCase().replace(/\/$/, "");
            if (m === void 0 || m === "http" && p === "80" || m === "https" && p === "443") m = "web", p = "default";
            return [m, n, p, q]
        }
        for (var d = c(String(a)), e = c(String(b)), f = 0; f < d.length; f++)
            if (d[f] !== e[f]) return !1;
        return !0
    }

    function aA(a) {
        return bA(a) ? 1 : 0
    }

    function bA(a) {
        var b = a.arg0,
            c = a.arg1;
        if (a.any_of && Array.isArray(c)) {
            for (var d = 0; d < c.length; d++) {
                var e = Vc(a, {});
                Vc({
                    arg1: c[d],
                    any_of: void 0
                }, e);
                if (aA(e)) return !0
            }
            return !1
        }
        switch (a["function"]) {
            case "_cn":
                return qg(b, c);
            case "_css":
                var f;
                a: {
                    if (b) try {
                        for (var g = 0; g < mg.length; g++) {
                            var k = mg[g];
                            if (b[k] != null) {
                                f = b[k](c);
                                break a
                            }
                        }
                    } catch (m) {}
                    f = !1
                }
                return f;
            case "_ew":
                return ng(b, c);
            case "_eq":
                return rg(b, c);
            case "_ge":
                return sg(b, c);
            case "_gt":
                return ug(b, c);
            case "_lc":
                return String(b).split(",").indexOf(String(c)) >=
                    0;
            case "_le":
                return tg(b, c);
            case "_lt":
                return vg(b, c);
            case "_re":
                return pg(b, c, a.ignore_case);
            case "_sw":
                return wg(b, c);
            case "_um":
                return $z(b, c)
        }
        return !1
    };

    function cA() {
        var a;
        a = a === void 0 ? "" : a;
        var b, c;
        return ((b = data) == null ? 0 : (c = b.blob) == null ? 0 : c.hasOwnProperty(1)) ? String(data.blob[1]) : a
    };

    function dA() {
        var a = [
            ["cv", S(114) ? cA() : "1"],
            ["rv", Hi.th],
            ["tc", lf.filter(function(b) {
                return b
            }).length]
        ];
        Hi.Ce && a.push(["x", Hi.Ce]);
        aj.j && a.push(["tag_exp", aj.j]);
        return a
    };
    var eA = {},
        fA = {};

    function gA() {
        var a = 0;
        return function(b) {
            switch (b) {
                case 1:
                    a |= 1;
                    break;
                case 2:
                    a |= 2;
                    break;
                case 3:
                    a |= 4
            }
            return a
        }
    }

    function hA(a, b, c, d) {
        if (Qj) {
            var e = String(c) + b;
            eA[a] = eA[a] || [];
            eA[a].push(e);
            fA[a] = fA[a] || [];
            fA[a].push(d + b)
        }
    }

    function iA(a) {
        var b = a.eventId,
            c = a.Tc,
            d = [],
            e = eA[b] || [];
        e.length && d.push(["hf", e.join(".")]);
        var f = fA[b] || [];
        f.length && d.push(["ht", f.join(".")]);
        c && (delete eA[b], delete fA[b]);
        return d
    };

    function jA() {
        return !1
    }

    function kA() {
        var a = {};
        return function(b, c, d) {}
    };

    function lA() {
        var a = mA;
        return function(b, c, d) {
            var e = d && d.event;
            b === "__html" && S(84) || nA(c);
            var f = vb(b, "__cvt_") ? void 0 : 1,
                g = new La;
            jb(c, function(r, u) {
                var v = hd(u, void 0, f);
                v === void 0 && u !== void 0 && U(44);
                g.set(r, v)
            });
            a.j.j.C = Ef();
            var k = {
                ek: Vf(b),
                eventId: e == null ? void 0 : e.id,
                priorityId: e !== void 0 ? e.priorityId : void 0,
                Ge: e !== void 0 ? function(r) {
                    e.qc.Ge(r)
                } : void 0,
                kb: function() {
                    return b
                },
                log: function() {},
                Yl: {
                    index: d == null ? void 0 : d.index,
                    type: d == null ? void 0 : d.type,
                    name: d == null ? void 0 : d.name
                },
                gn: !!Nw(b, 3),
                originalEventData: e ==
                    null ? void 0 : e.originalEventData
            };
            e && e.cachedModelValues && (k.cachedModelValues = {
                gtm: e.cachedModelValues.gtm,
                ecommerce: e.cachedModelValues.ecommerce
            });
            if (jA()) {
                var m = kA(),
                    n, p;
                k.Xa = {
                    ri: [],
                    He: {},
                    Db: function(r, u, v) {
                        u === 1 && (n = r);
                        u === 7 && (p = v);
                        m(r, u, v)
                    },
                    ng: eh()
                };
                k.log = function(r) {
                    var u = ya.apply(1, arguments);
                    n && m(n, 4, {
                        level: r,
                        source: p,
                        message: u
                    })
                }
            }
            var q = Fe(a, k, [b, g]);
            a.j.j.C = void 0;
            q instanceof Aa && q.type === "return" && (q = q.data);
            return G(q, void 0, f)
        }
    }

    function nA(a) {
        var b = a.gtmOnSuccess,
            c = a.gtmOnFailure;
        bb(b) && (a.gtmOnSuccess = function() {
            F(b)
        });
        bb(c) && (a.gtmOnFailure = function() {
            F(c)
        })
    };

    function oA(a) {}
    oA.F = "internal.addAdsClickIds";

    function pA(a, b) {
        var c = this;
    }
    pA.T = "addConsentListener";
    var qA = !1;

    function rA(a) {
        for (var b = 0; b < a.length; ++b)
            if (qA) try {
                a[b]()
            } catch (c) {
                U(77)
            } else a[b]()
    }

    function sA(a, b, c) {
        var d = this,
            e;
        return e
    }
    sA.F = "internal.addDataLayerEventListener";

    function tA(a, b, c) {}
    tA.T = "addDocumentEventListener";

    function uA(a, b, c, d) {}
    uA.T = "addElementEventListener";

    function vA(a) {
        return a.D.j
    };

    function wA(a) {}
    wA.T = "addEventCallback";

    function MA(a) {}
    MA.F = "internal.addFormAbandonmentListener";

    function NA(a, b, c, d) {}
    NA.F = "internal.addFormData";
    var OA = {},
        PA = [],
        QA = {},
        RA = 0,
        SA = 0;

    function ZA(a, b) {}
    ZA.F = "internal.addFormInteractionListener";

    function fB(a, b) {}
    fB.F = "internal.addFormSubmitListener";

    function kB(a) {}
    kB.F = "internal.addGaSendListener";

    function lB(a) {
        if (!a) return {};
        var b = a.Yl;
        return lx(b.type, b.index, b.name)
    }

    function mB(a) {
        return a ? {
            originatingEntity: lB(a)
        } : {}
    };

    function uB(a) {
        var b = Ii.zones;
        return b ? b.getIsAllowedFn(hk(), a) : function() {
            return !0
        }
    }

    function vB() {
        Qw(nk(), function(a) {
            var b = a.originalEventData["gtm.uniqueEventId"],
                c = Ii.zones;
            return c ? c.isActive(hk(), b) : !0
        });
        Ow(nk(), function(a) {
            var b, c;
            b = a.entityId;
            c = a.securityGroups;
            return uB(Number(a.originalEventData["gtm.uniqueEventId"]))(b, c)
        })
    };
    var wB = function(a, b) {
        this.tagId = a;
        this.Je = b
    };

    function xB(a, b) {
        var c = this,
            d;
        return d
    }
    xB.F = "internal.loadGoogleTag";

    function yB(a) {
        return new $c("", function(b) {
            var c = this.evaluate(b);
            if (c instanceof $c) return new $c("", function() {
                var d = ya.apply(0, arguments),
                    e = this,
                    f = Vc(vA(this), null);
                f.eventId = a.eventId;
                f.priorityId = a.priorityId;
                f.originalEventData = a.originalEventData;
                var g = d.map(function(m) {
                        return e.evaluate(m)
                    }),
                    k = Ha(this.D);
                k.j = f;
                return c.nb.apply(c, [k].concat(oa(g)))
            })
        })
    };

    function zB(a, b, c) {
        var d = this;
    }
    zB.F = "internal.addGoogleTagRestriction";
    var AB = {},
        BB = [];

    function IB(a, b) {}
    IB.F = "internal.addHistoryChangeListener";

    function JB(a, b, c) {}
    JB.T = "addWindowEventListener";

    function KB(a, b) {
        return !0
    }
    KB.T = "aliasInWindow";

    function LB(a, b, c) {}
    LB.F = "internal.appendRemoteConfigParameter";

    function MB(a) {
        var b;
        return b
    }
    MB.T = "callInWindow";

    function NB(a) {}
    NB.T = "callLater";

    function OB(a) {}
    OB.F = "callOnDomReady";

    function PB(a) {}
    PB.F = "callOnWindowLoad";

    function QB(a, b) {
        var c;
        return c
    }
    QB.F = "internal.computeGtmParameter";

    function RB(a, b) {
        var c = this;
    }
    RB.F = "internal.consentScheduleFirstTry";

    function SB(a, b) {
        var c = this;
    }
    SB.F = "internal.consentScheduleRetry";

    function TB(a) {
        var b;
        return b
    }
    TB.F = "internal.copyFromCrossContainerData";

    function UB(a, b) {
        var c;
        var d = hd(c, this.D, vb(vA(this).kb(), "__cvt_") ? 2 : 1);
        d === void 0 && c !== void 0 && U(45);
        return d
    }
    UB.T = "copyFromDataLayer";

    function VB(a) {
        var b = void 0;
        return b
    }
    VB.F = "internal.copyFromDataLayerCache";

    function WB(a) {
        var b;
        return b
    }
    WB.T = "copyFromWindow";

    function XB(a) {
        var b = void 0;
        return hd(b, this.D, 1)
    }
    XB.F = "internal.copyKeyFromWindow";
    var YB = function(a, b, c) {
        this.eventName = b;
        this.m = c;
        this.j = {};
        this.isAborted = !1;
        this.target = a;
        this.metadata = Vc(c.eventMetadata || {}, {})
    };
    YB.prototype.copyToHitData = function(a, b, c) {
        var d = V(this.m, a);
        d === void 0 && (d = b);
        if (d !== void 0 && c !== void 0 && z(d) && S(72)) try {
            d = c(d)
        } catch (e) {}
        d !== void 0 && (this.j[a] = d)
    };
    var Nt = function(a, b, c) {
        var d = Ps(a.target.destinationId);
        return d && d[b] !== void 0 ? d[b] : c
    };

    function ZB(a, b) {
        var c;
        K(this.getName(), ["preHit:!PixieMap", "dustOptions:?PixieMap"], arguments);
        var d = G(b) || {},
            e = G(a, this.D, 1).Ub(),
            f = e.m;
        d.omitEventContext && (f = Cm(new rm(e.m.eventId, e.m.priorityId)));
        var g = new YB(e.target, e.eventName, f);
        d.omitHitData || Vc(e.j, g.j);
        d.omitMetadata ? g.metadata = {} : Vc(e.metadata, g.metadata);
        g.isAborted = e.isAborted;
        c = hd(Es(g), this.D, 1);
        return c
    }
    ZB.F = "internal.copyPreHit";

    function $B(a, b) {
        var c = null;
        return hd(c, this.D, 2)
    }
    $B.T = "createArgumentsQueue";

    function aC(a) {
        return hd(function(c) {
            var d = ux();
            if (typeof c === "function") d(function() {
                c(function(f, g, k) {
                    var m = ux(),
                        n = m && m.getByName &&
                        m.getByName(f);
                    return hn(C.gaplugins.Linker, n).decorate(g, k)
                })
            });
            else if (Array.isArray(c)) {
                var e = String(c[0]).split(".");
                b[e.length === 1 ? e[0] : e[1]] && d.apply(null, c)
            } else if (c === "isLoaded") return !!d.loaded
        }, this.D, 1)
    }
    aC.F = "internal.createGaCommandQueue";

    function bC(a) {
        return hd(function() {
            if (!bb(e.push)) throw Error("Object at " + a + " in window is not an array.");
            e.push.apply(e, Array.prototype.slice.call(arguments, 0))
        }, this.D, vb(vA(this).kb(),
            "__cvt_") ? 2 : 1)
    }
    bC.T = "createQueue";

    function cC(a, b) {
        var c = null;
        K(this.getName(), ["pattern:!string", "flags:?string"], arguments);
        try {
            var d = (b || "").split("").filter(function(e) {
                return "ig".indexOf(e) >= 0
            }).join("");
            c = new ed(new RegExp(a, d))
        } catch (e) {}
        return c
    }
    cC.F = "internal.createRegex";

    function dC() {
        var a = {};
        return a
    };

    function eC(a) {}
    eC.F = "internal.declareConsentState";

    function fC(a) {
        var b = "";
        return b
    }
    fC.F = "internal.decodeUrlHtmlEntities";

    function gC(a, b, c) {
        var d;
        return d
    }
    gC.F = "internal.decorateUrlWithGaCookies";

    function hC() {}
    hC.F = "internal.deferCustomEvents";

    function iC(a) {
        var b;
        L(this, "detect_user_provided_data", "auto");
        var c = G(a) || {},
            d = ot({
                Hd: !!c.includeSelector,
                Id: !!c.includeVisibility,
                Me: c.excludeElementSelectors,
                Bb: c.fieldFilters,
                pg: !!c.selectMultipleElements
            });
        b = new La;
        var e = new Yc;
        b.set("elements", e);
        for (var f = d.elements, g = 0; g < f.length; g++) e.push(jC(f[g]));
        d.hi !== void 0 && b.set("preferredEmailElement", jC(d.hi));
        b.set("status", d.status);
        return b
    }
    var jC = function(a) {
        var b = new La;
        b.set("userData", a.Z);
        b.set("tagName", a.tagName);
        a.querySelector !== void 0 && b.set("querySelector", a.querySelector);
        a.isVisible !== void 0 && b.set("isVisible", a.isVisible);
        if (S(28)) {} else switch (a.type) {
            case mt.vc:
                b.set("type", "email")
        }
        return b
    };
    iC.F = "internal.detectUserProvidedData";

    function mC(a, b) {
        return b
    }
    mC.F = "internal.enableAutoEventOnClick";

    function uC(a, b) {
        return b
    }
    uC.F = "internal.enableAutoEventOnElementVisibility";

    function vC() {}
    vC.F = "internal.enableAutoEventOnError";
    var wC = {},
        xC = [],
        yC = {},
        zC = 0,
        AC = 0;

    function GC(a, b) {
        var c = this;
        return b
    }
    GC.F = "internal.enableAutoEventOnFormInteraction";

    function LC(a, b) {
        var c = this;
        return b
    }
    LC.F = "internal.enableAutoEventOnFormSubmit";

    function QC() {
        var a = this;
    }
    QC.F = "internal.enableAutoEventOnGaSend";
    var RC = {},
        SC = [];

    function ZC(a, b) {
        var c = this;
        return b
    }
    ZC.F = "internal.enableAutoEventOnHistoryChange";
    var $C = ["http://", "https://", "javascript:", "file://"];

    function dD(a, b) {
        var c = this;
        return b
    }
    dD.F = "internal.enableAutoEventOnLinkClick";
    var eD, fD;

    function qD(a, b) {
        var c = this;
        return b
    }
    qD.F = "internal.enableAutoEventOnScroll";

    function rD(a) {
        return function() {
            if (a.limit && a.ai >= a.limit) a.lg && C.clearInterval(a.lg);
            else {
                a.ai++;
                var b = getCurrentTimestamp();
                lz({
                    event: a.eventName,
                    "gtm.timerId": a.lg,
                    "gtm.timerEventNumber": a.ai,
                    "gtm.timerInterval": a.interval,
                    "gtm.timerLimit": a.limit,
                    "gtm.timerStartTime": a.Bk,
                    "gtm.timerCurrentTime": b,
                    "gtm.timerElapsedTime": b - a.Bk,
                    "gtm.triggers": a.xn
                })
            }
        }
    }

    function sD(a, b) {
        return b
    }
    sD.F = "internal.enableAutoEventOnTimer";
    var Zb = ma(["data-gtm-yt-inspected-"]),
        uD = ["www.youtube.com", "www.youtube-nocookie.com"],
        vD, wD = !1;

    function GD(a, b) {
        var c = this;
        return b
    }
    GD.F = "internal.enableAutoEventOnYouTubeActivity";

    function HD(a, b) {
        K(this.getName(), ["booleanExpression:!string", "context:?PixieMap"], arguments);
        var c = b ? G(b) : {},
            d = a,
            e = !1;
        var f = JSON.parse(d);
        if (!f) throw Error("Invalid boolean expression string was given.");
        e = Ug(f, c);
        return e
    }
    HD.F = "internal.evaluateBooleanExpression";
    var ID;

    function JD(a) {
        var b = !1;
        return b
    }
    JD.F = "internal.evaluateMatchingRules";

    function qE() {
        return uo(7) && uo(9) && uo(10)
    };

    function lF(a, b, c, d) {}
    lF.F = "internal.executeEventProcessor";

    function mF(a) {
        var b;
        return hd(b, this.D, 1)
    }
    mF.F = "internal.executeJavascriptString";

    function nF(a) {
        var b;
        return b
    };

    function oF(a) {
        var b = {};
        return hd(b)
    }
    oF.F = "internal.getAdsCookieWritingOptions";

    function pF(a) {
        var b = !1;
        return b
    }
    pF.F = "internal.getAllowAdPersonalization";

    function qF(a, b) {
        b = b === void 0 ? !0 : b;
        var c;
        return c
    }
    qF.F = "internal.getAuid";
    var rF = null;

    function sF() {
        var a = new La;
        L(this, "read_container_data"), S(43) && rF ? a = rF : (a.set("containerId", 'G-TR5E2D5Y8N'), a.set("version", '1'), a.set("environmentName", ''), a.set("debugMode", Wf), a.set("previewMode", Xf.Ek), a.set("environmentMode", Xf.Ul), a.set("firstPartyServing", cj() || Qi), a.set("containerUrl", jc), a.Ia(), S(43) && (rF = a));
        return a
    }
    sF.T = "getContainerVersion";

    function tF(a, b) {
        b = b === void 0 ? !0 : b;
        var c;
        return c
    }
    tF.T = "getCookieValues";

    function uF() {
        return nl()
    }
    uF.F = "internal.getCountryCode";

    function vF() {
        var a = [];
        a = kk();
        return hd(a)
    }
    vF.F = "internal.getDestinationIds";

    function wF(a) {
        var b = new La;
        return b
    }
    wF.F = "internal.getDeveloperIds";

    function xF(a, b) {
        var c = null;
        return c
    }
    xF.F = "internal.getElementAttribute";

    function yF(a) {
        var b = null;
        return b
    }
    yF.F = "internal.getElementById";

    function zF(a) {
        var b = "";
        return b
    }
    zF.F = "internal.getElementInnerText";

    function AF(a, b) {
        var c = null;
        return c
    }
    AF.F = "internal.getElementProperty";

    function BF(a) {
        var b;
        return b
    }
    BF.F = "internal.getElementValue";

    function CF(a) {
        var b = 0;
        return b
    }
    CF.F = "internal.getElementVisibilityRatio";

    function DF(a) {
        var b = null;
        return b
    }
    DF.F = "internal.getElementsByCssSelector";

    function EF(a) {
        var b;
        K(this.getName(), ["keyPath:!string"], arguments);
        L(this, "read_event_data", a);
        var c;
        a: {
            var d = a,
                e = vA(this).originalEventData;
            if (e) {
                for (var f = e, g = {}, k = {}, m = {}, n = [], p = d.split("\\\\"), q = 0; q < p.length; q++) {
                    for (var r = p[q].split("\\."), u = 0; u < r.length; u++) {
                        for (var v = r[u].split("."), t = 0; t < v.length; t++) n.push(v[t]), t !== v.length - 1 && n.push(m);
                        u !== r.length - 1 && n.push(k)
                    }
                    q !== p.length - 1 && n.push(g)
                }
                for (var w = [], x = "", y = l(n), A = y.next(); !A.done; A =
                    y.next()) {
                    var B = A.value;
                    B === m ? (w.push(x), x = "") : x = B === g ? x + "\\" : B === k ? x + "." : x + B
                }
                x && w.push(x);
                for (var D = l(w), I = D.next(); !I.done; I = D.next()) {
                    if (f == null) {
                        c = void 0;
                        break a
                    }
                    f = f[I.value]
                }
                c = f
            } else c = void 0
        }
        b = hd(c, this.D, 1);
        return b
    }
    EF.F = "internal.getEventData";
    var FF = {};
    FF.enableAWFledge = S(29);
    FF.enableAdsConversionValidation = S(15);
    FF.enableAutoPhoneAndAddressDetection = S(27);
    FF.enableAutoPiiOnPhoneAndAddress = S(28);
    FF.enableCachedEcommerceData = S(35);
    FF.enableCloudRecommentationsErrorLogging = S(36);
    FF.enableCloudRecommentationsSchemaIngestion = S(37);
    FF.enableCloudRetailInjectPurchaseMetadata = S(39);
    FF.enableCloudRetailLogging = S(38);
    FF.enableCloudRetailPageCategories = S(40);
    FF.enableConsentDisclosureActivity = S(42);
    FF.enableDCFledge = S(47);
    FF.enableDecodeUri = S(72);
    FF.enableDeferAllEnhancedMeasurement = S(48);
    FF.enableDmaBlockDisclosure = S(50);
    FF.enableFormSkipValidation = S(67);
    FF.enableGaAdsConversions = S(93);
    FF.enableMerchantRenameForBasketData = S(88);
    FF.enableUrlDecodeEventUsage = S(113);
    FF.enableZoneConfigInChildContainers = S(116);
    FF.useEnableAutoEventOnFormApis = S(127);
    FF.autoPiiEligible = sl();

    function GF() {
        return hd(FF)
    }
    GF.F = "internal.getFlags";

    function HF() {
        return new ed(Tz)
    }
    HF.F = "internal.getHtmlId";

    function IF(a) {
        var b;
        return b
    }
    IF.F = "internal.getIframingState";

    function JF(a, b) {
        var c = {};
        return hd(c)
    }
    JF.F = "internal.getLinkerValueFromLocation";

    function KF() {
        var a = new La;
        return a
    }
    KF.F = "internal.getPrivacyStrings";

    function LF(a, b) {
        var c;
        K(this.getName(), ["targetId:!string", "name:!string"], arguments);
        var d = Ps(a) || {};
        c = hd(d[b], this.D);
        return c
    }
    LF.F = "internal.getProductSettingsParameter";

    function MF(a, b) {
        var c;
        return c
    }
    MF.T = "getQueryParameters";

    function NF(a, b) {
        var c;
        return c
    }
    NF.T = "getReferrerQueryParameters";

    function OF(a) {
        var b = "";
        return b
    }
    OF.T = "getReferrerUrl";

    function PF() {
        return ol()
    }
    PF.F = "internal.getRegionCode";

    function QF(a, b) {
        var c;
        return c
    }
    QF.F = "internal.getRemoteConfigParameter";

    function RF() {
        var a = new La;
        a.set("width", 0);
        a.set("height", 0);
        return a
    }
    RF.F = "internal.getScreenDimensions";

    function SF() {
        var a = "";
        return a
    }
    SF.F = "internal.getTopSameDomainUrl";

    function TF() {
        var a = "";
        return a
    }
    TF.F = "internal.getTopWindowUrl";

    function UF(a) {
        var b = "";
        return b
    }
    UF.T = "getUrl";

    function VF() {
        L(this, "get_user_agent");
        return gc.userAgent
    }
    VF.F = "internal.getUserAgent";

    function WF() {
        var a;
        return hd(a ? xu(a) : null)
    }
    WF.F = "internal.getUserAgentClientHints";
    var YF = function(a) {
            var b = a.eventName === O.g.ac && bl() && Qt(a),
                c = a.metadata.is_sgtm_service_worker,
                d = a.metadata.batch_on_navigation,
                e = a.metadata.is_conversion,
                f = a.metadata.is_session_start,
                g = a.metadata.create_dc_join,
                k = a.metadata.create_google_join,
                m = a.metadata.euid_mode_enabled && !!Pt(a);
            return !(!Ec() && gc.sendBeacon === void 0 || e || m || f || g || k || b || c || !d && XF)
        },
        XF = !1;
    var ZF = function(a) {
            var b = 0,
                c = 0;
            return {
                start: function() {
                    b = getCurrentTimestamp()
                },
                stop: function() {
                    c = this.get()
                },
                get: function() {
                    var d = 0;
                    a.Th() && (d = getCurrentTimestamp() - b);
                    return d + c
                }
            }
        },
        $F = function() {
            this.j = void 0;
            this.C = 0;
            this.isActive = this.isVisible = this.H = !1;
            this.P = this.K = void 0
        };
    h = $F.prototype;
    h.rl = function(a) {
        var b = this;
        if (!this.j) {
            this.H = E.hasFocus();
            this.isVisible = !E.hidden;
            this.isActive = !0;
            var c = function(d, e, f) {
                uc(d, e, function(g) {
                    b.j.stop();
                    f(g);
                    b.Th() && b.j.start()
                })
            };
            c(C, "focus", function() {
                b.H = !0
            });
            c(C, "blur", function() {
                b.H = !1
            });
            c(C, "pageshow", function(d) {
                b.isActive = !0;
                d.persisted && U(56);
                b.P && b.P()
            });
            c(C, "pagehide", function() {
                b.isActive = !1;
                b.K && b.K()
            });
            c(E, "visibilitychange", function() {
                b.isVisible = !E.hidden
            });
            Qt(a) && !lc("Firefox") && !lc("FxiOS") && c(C, "beforeunload", function() {
                XF = !0
            });
            this.mi();
            this.C = 0
        }
    };
    h.mi = function() {
        this.C += this.ig();
        this.j = ZF(this);
        this.Th() && this.j.start()
    };
    h.wn = function(a) {
        var b = this.ig();
        b > 0 && (a.j[O.g.de] = b)
    };
    h.qm = function(a) {
        a.j[O.g.de] = void 0;
        this.mi();
        this.C = 0
    };
    h.Th = function() {
        return this.H &&
            this.isVisible && this.isActive
    };
    h.gm = function() {
        return this.C + this.ig()
    };
    h.ig = function() {
        return this.j && this.j.get() || 0
    };
    h.dn = function(a) {
        this.K = a
    };
    h.wk = function(a) {
        this.P = a
    };
    var bG = function(a) {
            var b = a.metadata.event_usage;
            if (Array.isArray(b))
                for (var c = 0; c < b.length; c++) aG(b[c]);
            var d = Wa("GA4_EVENT");
            d && (a.j._eu = d)
        },
        cG = function() {
            delete Ua.GA4_EVENT
        },
        aG = function(a) {
            Va("GA4_EVENT", a)
        };

    function dG() {
        return C.gaGlobal = C.gaGlobal || {}
    }

    function eG() {
        var a = dG();
        a.hid = a.hid || fb();
        return a.hid
    }

    function fG(a, b) {
        var c = dG();
        if (c.vid === void 0 || b && !c.from_cookie) c.vid = a, c.from_cookie = b
    };
    var gG = function(a, client_id_gerado, c, onde) {
            var d = a.metadata.client_id_source;
            if (d === void 0 || c <= d) a.j[O.g.tb] = client_id_gerado, a.metadata.client_id_source = c
        },
        iG = function(a, b) {
            var c = a.j[O.g.tb];
            if (V(a.m, O.g.Ob) && V(a.m, O.g.jc) || b && c === b) return c;
            if (c) {
                c = "" + c;
                if (!hG(c, a)) return U(31), a.isAborted = !0, "";
                fG(c, X(O.g.U));
                return c
            }
            U(32);
            a.isAborted = !0;
            return ""
        },

        ga4_cookie_version = ["GA1"],
        
        kG = function(a) {
            var b = a.metadata.cookie_options,
                c = b.prefix + "_ga",
                d = ip(c, b.domain, b.path, ga4_cookie_version, O.g.U);
            if (!d) {
                var e = String(V(a.m, O.g.Ac, ""));
                e && e !== c && (d = ip(e, b.domain, b.path, ga4_cookie_version,
                    O.g.U))
            }
            return d
        },
        hG = function(valor_do_cookie, b) {
            //valor do cookie de usuario
            var c;
            var cookie_options = b.metadata.cookie_options,
                e = cookie_options.prefix + "_ga",
                f = kp(cookie_options, void 0, void 0, O.g.U);
                
            if (V(b.m, O.g.hc) === !1 && kG(b) === valor_do_cookie) c = !0;
            else {
                var cookie_concatenado = concatCookieData(
                    valor_do_cookie, 
                    ga4_cookie_version[0], 
                    cookie_options.domain, 
                    cookie_options.path
                );
                c = ap(e, cookie_concatenado, f) !== 1
            }
            return c
        };
    var nG = function(a, b, c) {
            if (!b) return a;
            if (!a) return b;
            var d = lG(a);
            if (!d) return b;
            var e, f = math_round((e = V(c.m, O.g.sd)) != null ? e : 30);
            if (!(Math.floor(c.metadata.event_start_timestamp_ms / 1E3) > d.cf + f * 60)) return a;
            var g = lG(b);
            if (!g) return a;
            g.Qc = d.Qc + 1;
            var k;
            return (k = mG(g.sessionId, g.Qc, g.Nd, g.cf, g.Xh, g.Mc, g.Dd)) != null ? k : b
        },
        
        qG = function(valor_do_cookie, b, onde) {
            //valor do cookie session
            var cookie_options = b.metadata.cookie_options,
                d = oG(b, cookie_options),
                cookie_concatenado = concatCookieData(
                    valor_do_cookie, 
                    ga4_stream_version[0], 
                    cookie_options.domain, 
                    cookie_options.path
                ),
                f = {
                    Hb: O.g.U,
                    domain: cookie_options.domain,
                    path: cookie_options.path,
                    expires: cookie_options.Fb ? new Date(getCurrentTimestamp() + Number(cookie_options.Fb) * 1E3) : void 0,
                    flags: cookie_options.flags
                };
            ap(d, void 0, f);
            return ap(d, cookie_concatenado, f) !== 1
        },
        rG = function(a) {
            var b = a.metadata.cookie_options,
                c = oG(a, b),
                d = ip(c, b.domain, b.path, ga4_stream_version, O.g.U);
            if (!d) return d;
            var e = Qo(c, void 0, void 0, O.g.U);
            if (d && e.length > 1) {
                U(114);
                for (var f = void 0, g = void 0, k = 0; k < e.length; k++) {
                    var m = e[k].split(".");
                    if (!(m.length < 7)) {
                        var n = Number(m[5]);
                        n && (!g || n > g) && (g = n, f = e[k])
                    }
                }
                f && !wb(f, d) && (U(115), d = f.split(".").slice(2).join("."))
            }
            return d
        },
        sG = function(a) {
            return mG(a.j[O.g.zb], a.j[O.g.te], a.j[O.g.se], Math.floor(a.metadata.event_start_timestamp_ms /
                1E3), a.metadata.join_timer_sec || 0, !!a.metadata[O.g.Hf], a.j[O.g.ee])
        },
        mG = function(a, b, c, d, e, f, g) {
            if (a && b) {
                var k = [a, b, math_round(c), d, e];
                k.push(f ? "1" : "0");
                k.push(g || "0");
                return k.join(".")
            }
        },
        oG = function(a, b) {
            return b.prefix + "_ga_" + a.target.ids[Yl[0]]
        },

        ga4_stream_version = ["GS1"],

        lG = function(a) {
            if (a) {
                var b = a.split(".");
                if (!(b.length < 5 || b.length > 7)) {
                    b.length < 7 && U(67);
                    var c = Number(b[1]),
                        d = Number(b[3]),
                        e = Number(b[4] || 0);
                    c || U(118);
                    d || U(119);
                    isNaN(e) && U(120);
                    if (c && d && !isNaN(e)) return {
                        sessionId: b[0],
                        Qc: c,
                        Nd: !!Number(b[2]),
                        cf: d,
                        Xh: e,
                        Mc: b[5] === "1",
                        Dd: b[6] !== "0" ? b[6] : void 0
                    }
                }
            }
        };
    var tG = function(a) {
            var b = V(a.m, O.g.sa),
                c = a.m.C[O.g.sa];
            if (c === b) return c;
            var d = Vc(b, null);
            c && c[O.g.X] && (d[O.g.X] = (d[O.g.X] || []).concat(c[O.g.X]));
            return d
        },
        uG = function(a, b) {
            var c = Dp(!0);
            return c._up !== "1" ? {} : {
                clientId: c[a],
                Wa: c[b]
            }
        },
        vG = function(a, b, c) {
            var d = Dp(!0),
                e = d[b];
            e && (gG(a, e, 2, "vG"), hG(e, a));
            var f = d[c];
            f && qG(f, a, "vG");
            return {
                clientId: e,
                Wa: f
            }
        },
        wG = function() {
            var a = xj(C.location, "host"),
                b = xj(Bj(E.referrer), "host");
            return a && b ? a === b || a.indexOf("." + b) >= 0 || b.indexOf("." + a) >= 0 ? !0 : !1 : !1
        },
        xG = function(a) {
            if (!V(a.m,
                    O.g.cb)) return {};
            var b = a.metadata.cookie_options,
                c = b.prefix + "_ga",
                d = oG(a, b);
            Lp(function() {
                var e;
                if (X("analytics_storage")) e = {};
                else {
                    var f = {};
                    e = (f._up = "1", f[c] = a.j[O.g.tb], f[d] = sG(a), f)
                }
                return e
            }, 1);
            return !X("analytics_storage") && wG() ? uG(c, d) : {}
        },
        zG = function(a) {
            var b = tG(a) || {},
                c = a.metadata.cookie_options,
                d = c.prefix + "_ga",
                e = oG(a, c),
                f = {};
            Np(b[O.g.Hc], !!b[O.g.X]) && (f = vG(a, d, e), f.clientId && f.Wa && (yG = !0));
            b[O.g.X] && Kp(function() {
                var g = {},
                    k = kG(a);
                k && (g[d] = k);
                var m = rG(a);
                m && (g[e] = m);
                var n = Qo("FPLC", void 0,
                    void 0, O.g.U);
                n.length && (g._fplc = n[0]);
                return g
            }, b[O.g.X], b[O.g.Pb], !!b[O.g.yb]);
            return f
        },
        yG = !1;
    var AG = function(a) {
        if (!a.metadata.is_merchant_center && Ij(a.m)) {
            var b = tG(a) || {},
                c = (Np(b[O.g.Hc], !!b[O.g.X]) ? Dp(!0)._fplc : void 0) || (Qo("FPLC", void 0, void 0, O.g.U).length > 0 ? void 0 : "0");
            a.j._fplc = c
        }
    };

    function BG(a) {
        if (Qt(a) || cj()) a.j[O.g.xj] = ol() || nl();
        !Qt(a) && cj() && (a.j[O.g.Gj] = "::")
    }

    function CG(a) {
        if (S(68) && cj()) {
            ls(a);
            ms(a, "cpf", V(a.m, O.g.Na));
            var b = V(a.m, O.g.hc);
            ms(a, "cu", b === !0 ? 1 : b === !1 ? 0 : void 0);
            ms(a, "cf", V(a.m, O.g.ab));
            ms(a, "cd", getDomainLevel(V(a.m, O.g.Ra), V(a.m, O.g.vb)))
        }
    };
    var EG = function(a, b) {
            var c = Ii.grl;
            c || (c = DG(), Ii.grl = c);
            c(b) || (U(35), a.isAborted = !0)
        },
        DG = function() {
            var a = getCurrentTimestamp(),
                b = a + 864E5,
                c = 20,
                d = 5E3;
            return function(e) {
                var f = getCurrentTimestamp();
                f >= b && (b = f + 864E5, d = 5E3);
                c = Math.min(c + (f - a) / 1E3 * 5, 20);
                a = f;
                var g = !1;
                d < 1 || c < 1 || (g = !0, d--, c--);
                e && (e.Rl = d, e.Ll = c);
                return g
            }
        };
    var FG = function(a) {
        if (V(a.m, O.g.ld) !== void 0) a.copyToHitData(O.g.ld);
        else {
            var b = V(a.m, O.g.Nf),
                c, d;
            a: {
                if (yG) {
                    var e = tG(a) || {};
                    if (e && e[O.g.X])
                        for (var f = vj(Bj(a.j[O.g.Fa]), "host", !0), g = e[O.g.X], k = 0; k < g.length; k++)
                            if (g[k] instanceof RegExp) {
                                if (g[k].test(f)) {
                                    d = !0;
                                    break a
                                }
                            } else if (f.indexOf(g[k]) >= 0) {
                        d = !0;
                        break a
                    }
                }
                d = !1
            }
            if (!(c = d)) {
                var m;
                if (m = b) a: {
                    for (var n = b.include_conditions || [], p = vj(Bj(a.j[O.g.Fa]), "host", !0), q = 0; q < n.length; q++)
                        if (n[q].test(p)) {
                            m = !0;
                            break a
                        } m = !1
                }
                c = m
            }
            c && (a.j[O.g.ld] = "1", aG(4))
        }
    };
    var GG = function(a, b) {
            Ao() && (a.gcs = Bo(), b.metadata.is_consent_update && (a.gcu = "1"));
            a.gcd = Fo(b.m);
            zo(b.m) ? a.npa = "0" : a.npa = "1";
            Ko() && (a._ng = "1")
        },
        JG = function(a) {
            //console.log("JG");
            //console.log("a",a);
            //console.log("-JG-");
            if (a.metadata.is_merchant_center) return {
                url: Jj("https://www.merchant-center-analytics.goog") + "/mc/collect",
                endpoint: 20
            };
            var b = Fj(Ij(a.m), "/g/collect");
            if (b) return {
                url: b,
                endpoint: 16
            };
            if (cj()) return {
                url: "" + bj() + "/g/collect",
                endpoint: 16
            };
            var c = Rt(a),
                d = V(a.m, O.g.sb);
            return c && !pl() && d !== !1 && qE() && X(O.g.O) && X(O.g.U) ? {
                url: HG(),
                endpoint: 17
            } : {
                url: IG(),
                endpoint: 16
            }
        },
        HG = function() {
            //console.log("HGHGHG");
            var a;
            KG && rl() !== "" && (a = rl());
            return "https://" + (a ? a + "." : "") + "analytics.google.com/g/collect"
        },
        IG = function() {
            //console.log("IGIGOG");
            var a = "www";
            KG && rl() && (a = rl());
            return "https://" + a + ".google-analytics.com/g/collect"
        },
        KG = !1;
    KG = !0;
    var LG = {};
    LG[O.g.tb] = "cid";
    LG[O.g.Cg] = "gcut";
    LG[O.g.fc] = "are";
    LG[O.g.Df] = "pscdl";
    LG[O.g.If] = "_fid";
    LG[O.g.Ug] = "_geo";
    LG[O.g.hb] = "gdid";
    LG[O.g.Fc] =
        "_ng";
    LG[O.g.Nb] = "frm";
    LG[O.g.ld] = "ir";
    LG[O.g.Ta] = "ul";
    LG[O.g.hh] = "pae";
    LG[O.g.qe] = "_rdi";
    LG[O.g.Rb] = "sr";
    LG[O.g.vj] = "tid";
    LG[O.g.Sf] = "tt";
    LG[O.g.vd] = "ec_mode";
    LG[O.g.Hj] = "gtm_up";
    LG[O.g.Tf] = "uaa";
    LG[O.g.Uf] = "uab";
    LG[O.g.Vf] = "uafvl";
    LG[O.g.Wf] = "uamb";
    LG[O.g.Xf] = "uam";
    LG[O.g.Yf] = "uap";
    LG[O.g.Zf] = "uapv";
    LG[O.g.cg] = "uaw";
    LG[O.g.xj] = "ur";
    LG[O.g.Gj] = "_uip";
    LG[O.g.md] = "lps";
    LG[O.g.wf] = "gclgs", LG[O.g.yf] = "gclst", LG[O.g.xf] = "gcllp";
    var MG = {};
    MG[O.g.Vc] = "cc";
    MG[O.g.Wc] = "ci";
    MG[O.g.Xc] = "cm";
    MG[O.g.Yc] = "cn";
    MG[O.g.bd] = "cs";
    MG[O.g.dd] = "ck";
    MG[O.g.Aa] = "cu";
    MG[O.g.wa] = "dl";
    MG[O.g.Fa] = "dr";
    MG[O.g.ib] = "dt";
    MG[O.g.se] = "seg";
    MG[O.g.zb] = "sid";
    MG[O.g.te] = "sct";
    MG[O.g.Ca] = "uid";
    S(118) &&
        (MG[O.g.od] = "dp");
    var NG = {};
    NG[O.g.de] = "_et";
    NG[O.g.fb] = "edid";
    var OG = {};
    OG[O.g.Vc] = "cc";
    OG[O.g.Wc] = "ci";
    OG[O.g.Xc] = "cm";
    OG[O.g.Yc] = "cn";
    OG[O.g.bd] = "cs";
    OG[O.g.dd] = "ck";
    var PG = {},
        QG = (PG[O.g.Ga] = 1, PG),
        RG = function(a,
            b, c) {
            var d = {},
                e = {},
                f = {};
            d.v = "2";
            d.tid = a.target.destinationId;
            d.gtm = No({
                ya: a.metadata.source_canonical_id
            });
            d._p = S(129) ? Vi : eG();
            if (c && (c.Ld > 0 || c.jg) && (S(97) || (d.em = c.Gb), c.xa)) {
                var g = c.xa.Cd;
                g && !S(12) && (g = g.replace(/./g, "*"));
                g && (d.eme = g);
                d._es = c.xa.status;
                c.xa.time !== void 0 && (d._est = c.xa.time)
            }
            a.metadata.create_google_join && (d._gaz = 1);
            GG(d, a);
            Io() && (d.dma_cps = Go());
            d.dma = Ho();
            Wn(mo()) && (d.tcfd = Jo());
            aj.j && (d.tag_exp = aj.j);
            var k = a.j[O.g.hb];
            k && (d.gdid = k);
            e.en = String(a.eventName);
            a.metadata.is_first_visit &&
                (e._fv = a.metadata.is_first_visit_conversion ? 2 : 1);
            a.metadata.is_new_to_site && (e._nsi = 1);
            a.metadata.is_session_start && (e._ss = a.metadata.is_session_start_conversion ? 2 : 1);
            a.metadata.is_conversion && (e._c = 1);
            a.metadata.is_external_event && (e._ee = 1);
            if (a.metadata.is_ecommerce) {
                var m = a.j[O.g.da] || V(a.m, O.g.da);
                if (Array.isArray(m))
                    for (var n = 0; n < m.length && n < 200; n++) e["pr" + (n + 1)] = ag(m[n])
            }
            var p = a.j[O.g.fb];
            p && (e.edid = p);
            var q = function(v, t) {
                if (typeof t !== "object" || !QG[v]) {
                    var w = "ep." + v,
                        x = "epn." + v;
                    v = cb(t) ? x : w;
                    var y = cb(t) ? w : x;
                    e.hasOwnProperty(y) && delete e[y];
                    e[v] = String(t)
                }
            };
            jb(a.j, function(v, t) {
                if (t !== void 0 && !oh.hasOwnProperty(v)) {
                    t === null && (t = "");
                    var w;
                    var x = t;
                    v !== O.g.ee ? w = !1 : a.metadata.euid_mode_enabled || Qt(a) ? (d.ecid = x, w = !0) : w = void 0;
                    if (!w && v !== O.g.Hf) {
                        var y = t;
                        t === !0 && (y = "1");
                        t === !1 && (y = "0");
                        y = String(y);
                        var A;
                        if (LG[v]) A = LG[v], d[A] = y;
                        else if (MG[v]) A = MG[v], f[A] = y;
                        else if (NG[v]) A = NG[v], e[A] = y;
                        else if (v.charAt(0) === "_") d[v] = y;
                        else {
                            var B;
                            OG[v] ? B = !0 : v !== O.g.Zc ? B = !1 : (typeof t !== "object" && q(v, t), B = !0);
                            B ||
                                q(v, t)
                        }
                    }
                }
            });
            (function(v) {
                Qt(a) && typeof v === "object" && jb(v || {}, function(t, w) {
                    typeof w !== "object" && (d["sst." + t] = String(w))
                })
            })(a.j[O.g.De]);
            Sl(d, a.j[O.g.xd]);
            var r = a.j[O.g.jb] || {};
            S(81) && V(a.m, O.g.sb, void 0, 4) === !1 && (d.ngs = "1");
            jb(r, function(v, t) {
                t !== void 0 && ((t === null && (t = ""), v !== O.g.Ca || f.uid) ? b[v] !== t && (e[(cb(t) ? "upn." : "up.") + String(v)] = String(t), b[v] = t) : f.uid = String(t))
            });
            var u = JG(a);
            ig.call(this, {
                ja: d,
                Rc: f,
                Jh: e
            }, u.url, u.endpoint, Qt(a), void 0)
        };
    xa(RG, ig);
    var SG = function(a) {
            this.H = a;
            this.j = ""
        },
        TG = function(a, b) {
            a.C = b;
            return a
        },
        UG = function(a, b) {
            b = a.j + b;
            for (var c = b.indexOf("\n\n"); c !== -1;) {
                var d = a,
                    e;
                a: {
                    var f = l(b.substring(0, c).split("\n")),
                        g = f.next().value,
                        k = f.next().value;
                    if (g.indexOf("event: message") === 0 && k.indexOf("data: ") === 0) try {
                        e = JSON.parse(k.substring(k.indexOf(":") + 1));
                        break a
                    } catch (H) {}
                    e = void 0
                }
                var m = d,
                    n = e;
                if (n) {
                    var p = n.send_pixel,
                        q = n.options,
                        r = m.H;
                    if (p) {
                        var u = p || [];
                        if (Array.isArray(u))
                            for (var v = Uc(q) ? q : {}, t = l(u), w = t.next(); !w.done; w = t.next()) r(w.value,
                                v)
                    }
                    var x = n.create_iframe,
                        y = n.options,
                        A = m.C;
                    if (x && A) {
                        var B = x || [];
                        if (Array.isArray(B))
                            for (var D = Uc(y) ? y : {}, I = l(B), J = I.next(); !J.done; J = I.next()) A(J.value, D)
                    }
                }
                b = b.substring(c + 2);
                c = b.indexOf("\n\n")
            }
            a.j = b
        };

    function VG(a) {
        var b = a.search;
        return a.protocol + "//" + a.hostname + a.pathname + (b ? b + "&richsstsse" : "?richsstsse")
    };
    var WG = function(a, b) {
            return a.replace(/\$\{([^\}]+)\}/g, function(c, d) {
                return b[d] || c
            })
        },
        XG = function(a) {
            var b = {},
                c = "",
                d = a.pathname.indexOf("/g/collect");
            d >= 0 && (c = a.pathname.substring(0, d));
            b.transport_url = a.protocol + "//" + a.hostname + c;
            return b
        },
        YG = function(a, b, c) {
            console.log("=============INIT SEND==============");
            var d = 0,
                e = new C.XMLHttpRequest;
            e.withCredentials = !0;
            e.onprogress = function(f) {
                if (e.status === 200) {
                    var g = e.responseText.substring(d);
                    d = f.loaded;
                    UG(c, g)
                }
            };
            e.open(b ? "POST" : "GET", a);
            e.setAttributionReporting && e.setAttributionReporting({
                eventSourceEligible: !1,
                triggerEligible: !0
            });
            console.log("b",b);
            console.log("=============END SEND================");
            e.send(b)
        },
        $G = function(a, b, c) {
            var d = Object.assign({}, ZG);
            b && (d.body = b, d.method = "POST");
            C.fetch(a, d).then(function(e) {
                if (e.ok && e.body) {
                    var f = e.body.getReader(),
                        g = new TextDecoder;
                    return new Promise(function(k) {
                        function m() {
                            f.read().then(function(n) {
                                var p;
                                p = n.done;
                                var q = g.decode(n.value, {
                                    stream: !p
                                });
                                UG(c, q);
                                p ? k() : m()
                            }).catch(function() {
                                k()
                            })
                        }
                        m()
                    })
                }
            }).catch(function() {
                S(102) && (a += "&_z=retryFetch", b ? Bc(a, b) : Ac(a))
            })
        },
        aH = function(a, b) {
            return TG(new SG(function(c, d) {
                var e = WG(c, a);
                b && (e = e.replace("_is_sw=0",
                    b));
                var f = {};
                d.attribution_reporting && (f.attributionsrc = "");
                sc(e, void 0, void 0, f)
            }), function(c, d) {
                var e = WG(c, a),
                    f = d.dedupe_key;
                f && Fu(e, f)
            })
        },
        bH = function(a, b, c, d) {
            var e = aH(c, d);
            S(101) && Ec() ? $G(a, b, e) : YG(a, b, e)
        },
        cH = function(a, b) {
            var c = Bj(a),
                d = XG(c),
                e = VG(c);
            S(106) ? mu(e, b, d, function(f) {
                bH(e, b, d, f)
            }) : bH(e, b, d)
        },
        ZG = Object.freeze({
            cache: "no-store",
            credentials: "include",
            method: "GET",
            keepalive: !0,
            redirect: "follow"
        });
    var dH = function(a, b) {
            return a ? [a, b].join("&") : b
        },
        eH = function(a, b, c) {
            var d = a + "?" + b;
            c ? Bc(d, c) : Ac(d)
        },
        gH = function(a, b, c, d) {
            //console.log("gH");
            //console.log("a",a);
            //console.log("b",b);
            //console.log("c",c);
            //console.log("d",d);
            //console.log("-gH-");
            var e = b,
                f = Hc();
            f !== void 0 && (e += "&tfd=" + Math.round(f));
            b = e;
            var g = a + "?" + b;
            fH && (d = !vb(g, IG()) && !vb(g, HG()));
            if (d && !XF) cH(g, c);
            else {
                var k = b;
                Ec() ? Dc(a + "?" + k, c, {
                    noFallback: !0
                }) || eH(a, dH(k, "_z=failedfetch"), c) : eH(a, dH(k, "_z=nofetch"), c)
            }
        },
        hH = function(a, b) {
            function c(v) {
                n.push(v + "=" + encodeURIComponent("" + a.ja[v]))
            }
            var d = b.nn,
                e = b.on,
                f = b.im,
                g = b.Cm,
                k = b.Bm,
                m = b.bn;
            if (d || e) {
                var n = [];
                a.ja._ng &&
                    c("_ng");
                c("tid");
                c("cid");
                c("gtm");
                n.push("aip=1");
                a.Rc.uid && !k && n.push("uid=" + encodeURIComponent("" + a.Rc.uid));
                var p = function() {
                    c("dma");
                    a.ja.dma_cps != null && c("dma_cps");
                    a.ja.gcs != null && c("gcs");
                    c("gcd");
                    a.ja.npa != null && c("npa")
                };
                p();
                a.ja.frm != null && c("frm");
                d && (aj.j && n.push("tag_exp=" + aj.j), eH("https://stats.g.doubleclick.net/g/collect", "v=2&" + n.join("&")), n.join("&"));
                if (e) {
                    var q = function() {
                        var v = Hu() + "/td/ga/rul?";
                        n = [];
                        c("tid");
                        n.push("gacid=" + encodeURIComponent(String(a.ja.cid)));
                        c("gtm");
                        p();
                        c("pscdl");
                        a.ja._ng != null && c("_ng");
                        n.push("aip=1");
                        n.push("fledge=1");
                        a.ja.frm != null && c("frm");
                        aj.j && n.push("tag_exp=" + aj.j);
                        n.push("z=" + fb());
                        var t = v + n.join("&");
                        Fu(t, a.ja.tid)
                    };
                    aj.j && n.push("tag_exp=" + aj.j);
                    n.push("z=" + fb());
                    if (!g) {
                        var r = f && vb(f, "google.") && f !== "google.com" ? "https://www.%/ads/ga-audiences?v=1&t=sr&slf_rd=1&_r=4&".replace("%", f) : void 0;
                        if (r) {
                            var u = r + n.join("&");
                            sc(u)
                        }
                    }
                    S(81) && m && !XF && q()
                }
            }
        },
        fH = !1;
    var iH = function() {
        this.K = 1;
        this.P = {};
        this.H = -1;
        this.C = new bg
    };
    iH.prototype.j = function(a, b) {
        var c = this,
            d = new RG(a, this.P, b),
            e = YF(a);
        e && this.C.P(d) || this.flush();
        if (e && this.C.add(d)) {
            if (this.H < 0) {
                var f = C.setTimeout,
                    g;
                Qt(a) ? jH ? (jH = !1, g = kH) : g = lH : g = 5E3;
                this.H = f.call(C, function() {
                    c.flush()
                }, g)
            }
        } else {
            var k = eg(d, this.K++);
            gH(d.baseUrl, k.params, k.body, d.H);
            var m = a.metadata.create_dc_join,
                n = a.metadata.create_google_join,
                p = V(a.m, O.g.Ea) !== !1,
                q = zo(a.m),
                r = {
                    eventId: a.m.eventId,
                    priorityId: a.m.priorityId
                },
                u = a.j[O.g.hh],
                v = {
                    nn: m,
                    on: n,
                    im: tl(),
                    Wn: p,
                    Vn: q,
                    Cm: pl(),
                    Bm: a.metadata.euid_mode_enabled,
                    ao: r,
                    bn: u,
                    m: a.m
                };
            hH(d, v)
        }
        nw(a.m.eventId, a.eventName)
    };
    iH.prototype.add = function(a) {
        !a.metadata.euid_mode_enabled || XF || S(97) ? this.j(a) : this.aa(a)
    };
    iH.prototype.flush = function() {
        if (this.C.events.length) {
            var a = gg(this.C, this.K++);
            gH(this.C.baseUrl, a.params, a.body, this.C.C);
            this.C = new bg;
            this.H >= 0 && (C.clearTimeout(this.H), this.H = -1)
        }
    };
    iH.prototype.aa = function(a) {
        var b = this,
            c = Pt(a);
        if (S(100))
            if (zi(c)) {
                var d = mi(c, S(73));
                d ? d.then(function(k) {
                    b.j(a,
                        k)
                }, function() {
                    b.j(a)
                }) : this.j(a)
            } else {
                var e = yi(c);
                if (S(73)) {
                    var f = ki(e);
                    f ? f.then(function(k) {
                        b.j(a, k)
                    }, function() {
                        b.j(a, e)
                    }) : this.j(a, e)
                } else this.j(a, e)
            }
        else {
            var g = S(74) && !(c != null && Object.keys(c).length > 0);
            !c || g ? this.j(a) : li(c, function(k) {
                b.j(a, k)
            })
        }
    };
    var kH = Yh('', 500),
        lH = Yh('', 5E3),
        jH = !0;
    var mH = function(a, b, c) {
            c === void 0 && (c = {});
            if (b == null) return c;
            if (typeof b === "object")
                for (var d = l(Object.keys(b)), e = d.next(); !e.done; e = d.next()) {
                    var f = e.value;
                    mH(a + "." + f, b[f], c)
                } else c[a] = b;
            return c
        },
        nH = function(a) {
            for (var b = {}, c = l(a), d = c.next(); !d.done; d = c.next()) {
                var e = d.value;
                b[e] = !!X(e)
            }
            return b
        },
        pH = function(a, b) {
            var c = oH.filter(function(e) {
                return !X(e)
            });
            if (c.length) {
                var d = nH(c);
                Cl(c, function() {
                    for (var e = nH(c), f = [], g = l(c), k = g.next(); !k.done; k = g.next()) {
                        var m = k.value;
                        !d[m] && e[m] && f.push(m);
                        e[m] &&
                            (d[m] = !0)
                    }
                    if (f.length) {
                        b.metadata.is_consent_update = !0;
                        var n = f.map(function(p) {
                            return Ah[p]
                        }).join(".");
                        n && Mt(b, "gcut", n);
                        a(b)
                    }
                })
            }
        },
        qH = function(a) {
            if (S(123) && Qt(a)) {
                var b = V(a.m, O.g.Qb),
                    c;
                b === !0 && (c = "1");
                b === !1 && (c = "0");
                c && Mt(a, "rdp", c)
            }
        },
        rH = function(a) {
            S(121) && Qt(a) && V(a.m, O.g.Ud, !0) === !1 && (a.j[O.g.Ud] = 0)
        },
        sH = function(a, b) {
            if (Qt(b)) {
                var c = b.metadata.is_conversion;
                (b.eventName === "page_view" || c) && pH(a, b)
            }
        },
        tH = function(a) {
            if (Qt(a) && a.eventName === O.g.Uc && a.metadata.is_consent_update) {
                var b = a.j[O.g.Cg];
                b && (Mt(a, "gcut", b), Mt(a, "syn", 1))
            }
        },
        uH = function(a) {
            S(122) && Qt(a) && V(a.m, O.g.Ea) !== !1 && Du("join-ad-interest-group") && bb(gc.joinAdInterestGroup) && Mt(a, "flg", 1)
        },
        vH = function(a) {
            Qt(a) && (a.metadata.speculative = !1)
        },
        wH = function(a) {
            Qt(a) && (a.metadata.speculative && Mt(a, "sp", 1), a.metadata.is_syn && Mt(a, "syn", 1), a.metadata.em_event && (Mt(a, "em_event", 1), Mt(a, "sp", 1)))
        },
        xH = function(a) {
            if (Qt(a)) {
                var b = Vi;
                b && Mt(a, "tft", Number(b))
            }
        },
        yH = function(a) {
            function b(e) {
                var f = mH(O.g.Ga, e);
                jb(f, function(g, k) {
                    a.j[g] = k
                })
            }
            if (Qt(a)) {
                var c =
                    Nt(a, "ccd_add_1p_data", !1) ? 1 : 0;
                Mt(a, "ude", c);
                var d = V(a.m, O.g.Ga);
                d !== void 0 ? (b(d), a.j[O.g.vd] = "c") : b(a.metadata.user_data);
                a.metadata.user_data = void 0
            }
        },
        zH = function(a) {
            if (Qt(a)) {
                var b = Yr();
                b && Mt(a, "us_privacy", b);
                var c = to();
                c && Mt(a, "gdpr", c);
                var d = so();
                d && Mt(a, "gdpr_consent", d)
            }
        },
        AH = function(a) {
            Qt(a) && bl() && V(a.m, O.g.ia) && Mt(a, "adr", 1)
        },
        BH = function(a) {
            if (Qt(a)) {
                var b = KG ? rl() : "";
                b && Mt(a, "gcsub", b)
            }
        },
        CH = function(a) {
            if (Qt(a)) {
                V(a.m, O.g.sb, void 0, 4) === !1 && Mt(a, "ngs", 1);
                pl() && Mt(a, "ga_rd", 1);
                qE() || Mt(a,
                    "ngst", 1);
                var b = tl();
                b && Mt(a, "etld", b)
            }
        },
        DH = function(a) {},
        EH = function(a) {
            Qt(a) && bl() && Mt(a, "rnd", Er())
        },
        oH = [O.g.O, O.g.N];
    var FH = function(a, b) {
            var c;
            a: {
                var d = sG(a);
                if (d) {
                    if (qG(d, a, "FH")) {
                        c = d;
                        break a
                    }
                    U(25);
                    a.isAborted = !0
                }
                c = void 0
            }
            var e = c;
            return {
                clientId: iG(a, b),
                Wa: e
            }
        },
        
        GH = function(event_obj_data, cookie_user_value, cookie_session_value, d, e) {
            /* 
                event_obj_data
                cookie_user_value: 
                    só preenche depois do primeiro evento
                    - Ex: 1265697330.1734023336
                cookie_session_value:
                    só preenche depois do primeiro evento
                    - EX: 1734023336.1.1.1734025490.0.0.0
            */
            //console.log("event_obj_data",event_obj_data);
            //console.log("d",d);
            //console.log("e",e);
            //O.g.tb = client_id
            var f = V(event_obj_data.m, O.g.tb);
            //console.log("f",f);
            //console.log("--------------------------------");
            //O.g.Ob = is_legacy_loaded
            //O.g.jc = is_legacy_converted
            if (V(event_obj_data.m, O.g.Ob) && V(event_obj_data.m, O.g.jc)){ 
                //console.log("A - ENTROU IF");
                if(f){
                    //console.log("B - ENTROU IF");
                    gG(event_obj_data, f, 1, "GH");
                }else{
                    //console.log("C - ENTROU ELSE");
                    U(127);
                    event_obj_data.isAborted = true;
                }
            } else {
                //console.log("D - ENTROU IF");
                if(f){
                    //console.log("E - ENTROU IF");
                    g = 1;
                }else{
                    //console.log("F - ENTROU ELSE");
                    g = 8;
                }
                
                event_obj_data.metadata.is_new_to_site = false;
                if (!f) {
                    //console.log("G - ENTROU IF");
                    f = kG(event_obj_data);
                    //console.log("f",f);
                    g = 3;
                }
        
                if (!f) {
                    //console.log("H - ENTROU IF");
                    f = cookie_user_value;
                    //console.log("f",f);
                    g = 5;
                }
        
                if (!f) {
                    //console.log("I - ENTROU IF");
                    //O.g.U = analytics_storage
                    var k = X(O.g.U);
                    //console.log("k",k);
                    var m = dG();
                    //console.log("m",m);
                    if (!m.from_cookie || k) {
                        //console.log("J - ENTROU IF");
                        f = m.vid;
                        //console.log("f",f)
                    } else {
                       //console.log("K - ENTROU ELSE");
                       f = void 0;
                       //console.log("f",f)
                    }              
                    g = 6
                }
                //console.log("--------------------------------");
                //console.log("f",f);        
                if (f) {
                    //console.log("L - ENTROU IF");
                    f = "" + f;
                    //console.log("f",f)
                } else {
                    //console.log("M - ENTROU ELSE");
                    f = generateClientID();
                    //console.log("f",f)
                    g = 7;
                    event_obj_data.metadata.is_first_visit = true;
                    event_obj_data.metadata.is_new_to_site = true;
                }
                gG(event_obj_data, f, g, "GH2")
            }
        
            //ex: event_start_timestamp_ms = 1733682816603
            //ex: current_event_timestamp  = 1733682816
            var current_event_timestamp = Math.floor(event_obj_data.metadata.event_start_timestamp_ms / 1E3),
        
            p = void 0;
            event_obj_data.metadata.is_new_to_site || (p = rG(event_obj_data) || cookie_session_value);
        
            //Ex: 30
            //O.g.sd -> "session_duration"
            var session_duration = math_round(V(event_obj_data.m, O.g.sd, 30));
            session_duration = Math.min(475, session_duration);
            session_duration = Math.max(5, session_duration);
        
            //ex 10000
            //O.g.Pf -> "session_engaged_time"
            var session_engaged_time = math_round(V(event_obj_data.m, O.g.Pf, 1E4)),
                session_cookie_obj = lG(p);
        
            event_obj_data.metadata.is_first_visit = false;
            event_obj_data.metadata.is_session_start = false;
            event_obj_data.metadata.join_timer_sec = 0;
        
            if(session_cookie_obj){
                if(session_cookie_obj.Xh){
                    var max_diff_events_ts = Math.max(0, current_event_timestamp - session_cookie_obj.cf);
                    var outra_diff = session_cookie_obj.Xh - max_diff_events_ts;
                    event_obj_data.metadata.join_timer_sec = Math.max(0,outra_diff);
                }
            }
            
            var its_session_start = false;
        
            //First Visit
            //Verifica se o cookie de sessão existe
            if(!session_cookie_obj){
                its_session_start = true;
                event_obj_data.metadata.is_first_visit = true;
        
                session_cookie_obj = {
                    sessionId: String(current_event_timestamp),//session_id
                    Qc: 1,//session_number
                    Nd: false,//is_engaged_session
                    cf: current_event_timestamp,//cookie event_timestamp
                    Mc: false,//is_user_provided_data_on
                    Dd: void 0
                }
            }
        
            
            //Ex: 30 * 60 = 1800
            var session_duration_in_secs = session_duration * 60;
        
            //Ex: 1733682816 + 1800 = 1733684616
            var session_end_timestamp = session_cookie_obj.cf + session_duration_in_secs
            
            //Ex: 1733700000 > 1733684616
            if(current_event_timestamp > session_end_timestamp){
                its_session_start = true;
                session_cookie_obj.sessionId = String(current_event_timestamp);
                session_cookie_obj.Qc++;
                session_cookie_obj.Nd = false;
                session_cookie_obj.Dd = void 0;
            }
        
            
            
            if(its_session_start){
                event_obj_data.metadata.is_session_start = true;
                d.qm(event_obj_data);
            }
            else if (d.gm() > session_engaged_time || event_obj_data.eventName === O.g.ac){
                //d.gm() = tempo total de engajamento no site
                //Ex: 5884
                //O.g.ac = 'page_view'
                session_cookie_obj.Nd = true; //engaged_session = true
            }
            
            //Ca = "user_id"
            if(event_obj_data.metadata.euid_mode_enabled){
                if(V(event_obj_data.m, O.g.Ca)){
                    session_cookie_obj.Mc = true;//is_user_provided_data_on
                }else{
                    if(session_cookie_obj.Mc){//is_user_provided_data_on == true
                        if(!S(13)){
                            session_cookie_obj.Dd = void 0;//alguma coisa do user_provided_data
                            session_cookie_obj.Mc = false;//is_user_provided_data_on
                        }
                    }
                }
            }else{
                session_cookie_obj.Mc = false;//is_user_provided_data_on
            }
            
            var t = session_cookie_obj.Dd;
            if (event_obj_data.metadata.euid_mode_enabled || Qt(event_obj_data)) {
                var w = V(event_obj_data.m, O.g.ee),
                    x = w ? 1 : 8;
                w || (w = t, x = 4);
                w || (w = gp(), x = 7);
                var y = w.toString(),
                    A = x,
                    B = event_obj_data.metadata.enhanced_client_id_source;
                if (B === void 0 || A <= B) event_obj_data.j[O.g.ee] = y, event_obj_data.metadata.enhanced_client_id_source = A
            }
            e ? (event_obj_data.copyToHitData(O.g.zb, session_cookie_obj.sessionId), event_obj_data.copyToHitData(O.g.te, session_cookie_obj.Qc), event_obj_data.copyToHitData(O.g.se, session_cookie_obj.Nd ? 1 : 0)) : (event_obj_data.j[O.g.zb] =
                session_cookie_obj.sessionId, event_obj_data.j[O.g.te] = session_cookie_obj.Qc, event_obj_data.j[O.g.se] = session_cookie_obj.Nd ? 1 : 0);
            event_obj_data.metadata[O.g.Hf] = session_cookie_obj.Mc ? 1 : 0
        };

    var HH = window,
        IH = document,
        JH = function(a) {
            var b = HH._gaUserPrefs;
            if (b && b.ioo && b.ioo() || IH.documentElement.hasAttribute("data-google-analytics-opt-out") || a && HH["ga-disable-" + a] === !0) return !0;
            try {
                var c = HH.external;
                if (c && c._gaUserPrefs && c._gaUserPrefs == "oo") return !0
            } catch (p) {}
            for (var d = [], e = String(IH.cookie).split(";"), f = 0; f < e.length; f++) {
                var g = e[f].split("="),
                    k = g[0].replace(/^\s*|\s*$/g, "");
                if (k && k == "AMP_TOKEN") {
                    var m = g.slice(1).join("=").replace(/^\s*|\s*$/g, "");
                    m && (m = decodeURIComponent(m));
                    d.push(m)
                }
            }
            for (var n =
                    0; n < d.length; n++)
                if (d[n] == "$OPT_OUT") return !0;
            return IH.getElementById("__gaOptOutExtension") ? !0 : !1
        };
    var LH = function(a) {
            return !a || KH.test(a) || qh.hasOwnProperty(a)
        },
        MH = function(a) {
            var b = O.g.Rb,
                c;
            c || (c = function() {});
            a.j[b] !== void 0 && (a.j[b] = c(a.j[b]))
        },
        NH = function(a) {
            var b = a.indexOf("?"),
                c = b === -1 ? a : a.substring(0, b);
            try {
                c = decodeURIComponent(c)
            } catch (d) {}
            return b === -1 ? c : "" + c + a.substring(b)
        },
        OH = function(a) {
            V(a.m, O.g.cb) && (X(O.g.U) || V(a.m, O.g.tb) || (a.j[O.g.Hj] = !0));
            var b;
            var c;
            c = c === void 0 ? 3 : c;
            var d = C.location.href;
            if (d) {
                var e = Bj(d).search.replace("?", ""),
                    f = uj(e, "_gl", !1, !0) || "";
                b = f ? Ep(f, c) !== void 0 : !1
            } else b = !1;
            b && Qt(a) && Mt(a, "glv", 1);
            if (a.eventName !== O.g.ba) return {};
            V(a.m, O.g.cb) && gr(["aw", "dc"]);
            ir(["aw", "dc"]);
            var g = zG(a),
                k = xG(a);
            return Object.keys(g).length ? g : k
        },
        PH = function(a) {
            var b = Ab(pm(a.m, O.g.fa, 1), ".");
            b && (a.j[O.g.hb] = b);
            var c = Ab(pm(a.m, O.g.fa, 2), ".");
            c && (a.j[O.g.fb] = c)
        },
        zu = {
            Wl: "",
            yn: Number("")
        },
        QH = {},
        RH = (QH[O.g.Vc] = 1, QH[O.g.Wc] = 1, QH[O.g.Xc] = 1, QH[O.g.Yc] = 1, QH[O.g.bd] = 1, QH[O.g.dd] = 1, QH),
        KH = /^(_|ga_|google_|gtag\.|firebase_).*$/,
        SH = [bs,
            PH, Gs
        ],
        TH = function(a) {
            this.H = a;
            this.j = this.Wa = this.clientId = void 0;
            this.Ua = this.P = !1;
            this.Ic = 0;
            this.K = !1;
            this.aa = new iH;
            this.C = new $F
        };
    h = TH.prototype;
    h.Ym = function(a, b, c) {
        
        
        var d = this,
            e = Vl(this.H);
        if (e)
            if (c.eventMetadata.is_external_event && a.charAt(0) === "_") c.onFailure();
            else {
                a !== O.g.ba && a !== O.g.Ya && LH(a) && U(58);
                UH(c.j);
                var f = new YB(e, a, c);
                
                f.metadata.event_start_timestamp_ms = b;
                var g = [O.g.U],
                    k = Qt(f);
                f.metadata.is_server_side_destination = k;
                if (Nt(f, O.g.Gc, V(f.m, O.g.Gc)) || k) g.push(O.g.O), g.push(O.g.N);
                Au(function() {
                    El(function() {
                        d.Zm(f)
                    }, g)
                });
                this.Wm(a, c, f)
            }
        else c.onFailure()
    };
    h.Wm = function(a, b, c) {
        var d = Vl(this.H);
        if (S(70) && a === O.g.ba && Nt(c, "ga4_ads_linked", !1)) {
            var e = function() {
                    for (var k = l(SH), m = k.next(); !m.done; m = k.next()) {
                        var n = m.value;
                        n(f);
                        if (f.isAborted) break
                    }
                    f.metadata.speculative || f.isAborted || Bv(f)
                },
                f = new YB(d, a, b);
            f.metadata.hit_type = "page_view";
            f.metadata.speculative = !0;
            f.metadata.is_server_side_destination = c.metadata.is_server_side_destination;
            var g = [O.g.O, O.g.N];
            El(function() {
                e();
                X(g) ||
                    Dl(function(k) {
                        var m, n;
                        m = k.consentEventId;
                        n = k.consentPriorityId;
                        f.metadata.consent_updated = !0;
                        f.metadata.consent_event_id = m;
                        f.metadata.consent_priority_id = n;
                        e()
                    }, g)
            }, g)
        }
    };
    h.Zm = function(a) {
        //console.log("***********INIT**********");
        //console.log(a);
        //console.log("*************************");
        
        var b = this;
        this.j = a;
        try {
            
            VH(a);
            
            WH(a);
            
            XH(a);
            
            YH(a);
            
            S(112) && (a.isAborted = !0);
            hs(a);
            
            var c = {};
            EG(a, c);
            
            if (a.isAborted) {
                a.m.onFailure();
                cG();
                return
            }
            var d = c.Ll;
            c.Rl === 0 && aG(25);
            d === 0 && aG(26);
            
            ZH(a);
            
            $H(a);
            
            this.sl(a);
            this.C.wn(a);
            
            aI(a);
            
            bI(a);
            
            cI(a);
            this.vk(OH(a));
            var e = a.eventName === O.g.ba;
            e && (this.K = !0);
            
            dI(a);
            e && !a.isAborted &&
                this.Ic++ > 0 && aG(17);
                
            eI(a);
            GH(a, this.clientId, this.Wa, this.C, !this.Ua);
            fI(a);
            gI(a);
            hI(a);
            iI(a);
            jI(a);
            kI(a);
            lI(a);
            AG(a);
            FG(a);
            EH(a);
            DH(a);
            CH(a);
            BH(a);
            AH(a);
            zH(a);
            xH(a);
            wH(a);
            uH(a);
            tH(a);
            rH(a);
            qH(a);
            BG(a);
            CG(a);
            mI(a);
            nI(a);
            oI(a);
            js(a);
            is(a);
            pI(a);
            qI(a);
            Gs(a);
            rI(a);
            yH(a);
            vH(a);
            sI(a);
            !this.K && a.metadata.em_event && aG(18);
            bG(a);
            if (a.metadata.speculative || a.isAborted) {
                a.m.onFailure();
                cG();
                return
            }
            this.vk(FH(a, this.clientId));
            this.Ua = !0;
            this.sn(a);
            tI(a);
            sH(function(f) {
                b.bk(f)
            }, a);
            this.C.mi();
            uI(a);
            if (a.isAborted) {
                a.m.onFailure();
                cG();
                return
            }
            this.bk(a);
            //console.log("***********END***********");
            //console.log(a);
            //console.log("*************************");
            a.m.onSuccess()
        } catch (f) {
            a.m.onFailure()
        }
        cG()
    };
    h.bk = function(a) {
        this.aa.add(a)
    };
    h.vk = function(a) {
        var b = a.clientId,
            c = a.Wa;
        b && c && (this.clientId = b, this.Wa = c)
    };
    h.flush = function() {
        this.aa.flush()
    };
    h.sn = function(a) {
        var b = this;
        if (!this.P) {
            var c = X(O.g.N),
                d = X(O.g.U);
            Cl([O.g.N, O.g.U], function() {
                var e = X(O.g.N),
                    f = X(O.g.U),
                    g = !1,
                    k = {},
                    m = {};
                if (d !== f && b.j && b.Wa && b.clientId) {
                    var n = b.clientId,
                        p;
                    var q = lG(b.Wa);
                    p = q ? q.Dd : void 0;
                    if (f) {
                        var r = kG(b.j);
                        if (r) {
                            b.clientId = r;
                            var u = rG(b.j);
                            u && (b.Wa = nG(u, b.Wa,
                                b.j))
                        } else hG(b.clientId, b.j), fG(b.clientId, !0);
                        qG(b.Wa, b.j, "sn");
                        g = !0;
                        k[O.g.Tg] = n;
                        S(63) && p && (k[O.g.jl] = p)
                    } else b.Wa = void 0, b.clientId = void 0, C.gaGlobal = {}
                }
                e && !c && (g = !0, m.is_consent_update = !0, k[O.g.Cg] = Ah[O.g.N]);
                if (g) {
                    var v = py(b.H, O.g.Uc, k);
                    ry(v, a.m.eventId, {
                        eventMetadata: m
                    })
                }
                d = f;
                c = e
            });
            this.P = !0
        }
    };
    h.sl = function(a) {
        a.eventName !== O.g.Ya && this.C.rl(a)
    };
    var XH = function(a) {
            var b = E.location.protocol;
            b !== "http:" && b !== "https:" && (U(29), a.isAborted = !0)
        },
        YH = function(a) {
            gc && gc.loadPurpose === "preview" && (U(30), a.isAborted = !0)
        },
        ZH = function(a) {
            var b = {
                prefix: String(V(a.m, O.g.Na, "")),
                path: String(V(a.m, O.g.vb, "/")),
                flags: String(V(a.m, O.g.ab, "")),
                domain: String(V(a.m, O.g.Ra, "auto")),
                Fb: Number(V(a.m, O.g.Sa, 63072E3))
            };
            a.metadata.cookie_options = b
        },
        aI = function(a) {
            if (a.metadata.is_merchant_center) a.metadata.euid_mode_enabled = !1;
            else if (Nt(a, "ccd_add_1p_data", !1) || Nt(a, "ccd_add_ec_stitching", !1)) a.metadata.euid_mode_enabled = !0
        },
        bI = function(a) {
            if (a.metadata.euid_mode_enabled && Nt(a, "ccd_add_1p_data", !1)) {
                var b = a.m.C[O.g.ue];
                if (rj(b)) {
                    var c =
                        V(a.m, O.g.Ga);
                    c === null ? a.metadata.user_data_from_code = null : (b.enable_code && Uc(c) && (a.metadata.user_data_from_code = c), Uc(b.selectors) && !a.metadata.user_data_from_manual && (a.metadata.user_data_from_manual = pj(b.selectors)))
                }
            }
        },
        cI = function(a) {
            if (S(71) && !S(70) && Nt(a, "ga4_ads_linked", !1) && a.eventName === O.g.ba) {
                var b = V(a.m, O.g.ra) !== !1;
                if (b) {
                    var c = Zr(a);
                    c.Fb && (c.Fb = Math.min(c.Fb, 7776E3));
                    $r({
                        Bd: b,
                        Kd: V(a.m, O.g.sa) || {},
                        Pd: V(a.m, O.g.cb),
                        rc: c
                    })
                }
            }
        },
        mI = function(a) {
            if (!vu(C)) U(87);
            else if (Bu !== void 0) {
                U(85);
                var b =
                    tu();
                b ? V(a.m, O.g.qe) && !Qt(a) || yu(b, a) : U(86)
            }
        },
        dI = function(a) {
            a.eventName === O.g.ba && (V(a.m, O.g.Oa, !0) ? (a.m.j[O.g.fa] && (a.m.H[O.g.fa] = a.m.j[O.g.fa], a.m.j[O.g.fa] = void 0, a.j[O.g.fa] = void 0), a.eventName = O.g.ac) : a.isAborted = !0)
        },
        $H = function(a) {
            function b(c, d) {
                oh[c] || d === void 0 || (a.j[c] = d)
            }
            jb(a.m.H, b);
            jb(a.m.j, b)
        },
        fI = function(a) {
            var b = qm(a.m),
                c = function(d, e) {
                    RH[d] && (a.j[d] = e)
                };
            Uc(b[O.g.Zc]) ? jb(b[O.g.Zc], function(d, e) {
                c((O.g.Zc + "_" + d).toLowerCase(), e)
            }) : jb(b, c)
        },
        eI = PH,
        tI = function(a) {
            if (S(106) && X(O.g.U)) {
                Qt(a) &&
                    (a.metadata.is_sgtm_service_worker = !0, Qt(a) && Mt(a, "sw_exp", 1));
                a: {}
            }
        },
        pI = function(a) {
            if (a.eventName === O.g.Ya) {
                var b = V(a.m, O.g.xb);
                V(a.m, O.g.Mb)(a.j[b] || V(a.m, b));
                a.isAborted = !0
            }
        },
        gI = function(a) {
            if (!V(a.m, O.g.jc) || !V(a.m, O.g.Ob)) {
                var b = a.copyToHitData,
                    c = O.g.wa,
                    d = "",
                    e = E.location;
                if (e) {
                    var f = e.pathname || "";
                    f.charAt(0) !== "/" && (f = "/" + f);
                    var g = e.search || "";
                    if (g && g[0] === "?")
                        for (var k = g.substring(1).split("&"), m = 0; m < k.length; ++m) {
                            var n = k[m].split("=");
                            n && n.length === 2 && n[0] === "wbraid" && (g = g.replace(/([?&])wbraid=[^&]+/, "$1wbraid=" + Cb(n[1])))
                        }
                    d = e.protocol + "//" + e.hostname + f + g
                }
                b.call(a, c, d, NH);
                var p = a.copyToHitData,
                    q = O.g.Fa,
                    r;
                a: {
                    var u = Qo("_opt_expid", void 0, void 0, O.g.U)[0];
                    if (u) {
                        var v = decodeURIComponent(u).split("$");
                        if (v.length === 3) {
                            r = v[2];
                            break a
                        }
                    }
                    if (Ii.ga4_referrer_override !==
                        void 0) r = Ii.ga4_referrer_override;
                    else {
                        var t = ij("gtm.gtagReferrer." + a.target.destinationId),
                            w = E.referrer;
                        r = t ? "" + t : w
                    }
                }
                p.call(a, q, r || void 0, NH);
                a.copyToHitData(O.g.ib, E.title);
                a.copyToHitData(O.g.Ta, (gc.language || "").toLowerCase());
                var x = Qs();
                a.copyToHitData(O.g.Rb, x.width + "x" + x.height);
                S(118) && a.copyToHitData(O.g.od, void 0, NH);
                S(77) && Hr() && a.copyToHitData(O.g.md, "1")
            }
        },
        iI = function(a) {
            a.metadata.create_dc_join = !1;
            a.metadata.create_google_join = !1;
            if (!(cj() || S(6) && Qt(a) || a.metadata.is_merchant_center ||
                    V(a.m, O.g.sb) === !1) && qE() && X(O.g.O)) {
                var b = Rt(a);
                (a.metadata.is_session_start || V(a.m, O.g.Tg)) && (a.metadata.create_dc_join = !!b);
                var c = a.metadata.join_timer_sec;
                b && (c || 0) === 0 && (a.metadata.join_timer_sec = 60, a.metadata.create_google_join = !0)
            }
        },
        lI = function(a) {
            a.copyToHitData(O.g.Sf);
            for (var b = V(a.m, O.g.Jf) || [], c = 0; c < b.length; c++) {
                var d = b[c];
                if (d.rule_result) {
                    a.copyToHitData(O.g.Sf, d.traffic_type);
                    aG(3);
                    break
                }
            }
        },
        uI = function(a) {
            a.copyToHitData(O.g.Ug);
            V(a.m, O.g.qe) && (a.j[O.g.qe] = !0, Qt(a) || MH(a))
        },
        qI = function(a) {
            a.copyToHitData(O.g.Ca);
            a.copyToHitData(O.g.jb)
        },
        hI = function(a) {
            Nt(a, "google_ng") && !pl() ? a.copyToHitData(O.g.Fc, 1) : ks(a)
        },
        oI = function(a) {
            if (V(a.m, O.g.Ea) !== !1 && zo(a.m)) {
                var b = Rt(a),
                    c = V(a.m, O.g.sb);
                b && c !== !1 && qE() && X(O.g.O) && Yk(O.g.N) && $k(["ads"]).ads && Eu() && (a.j[O.g.hh] = !0)
            }
        },
        sI = function(a) {
            var b = V(a.m, O.g.Ob);
            b && aG(12);
            a.metadata.em_event && aG(14);
            var c = pk(qk());
            (b || Bk(c) || c && c.parent && c.context && c.context.source === 5) && aG(19)
        },
        VH = function(a) {
            if (JH(a.target.destinationId)) U(28), a.isAborted = !0;
            else if (S(117)) {
                var b = ok();
                if (b &&
                    Array.isArray(b.destinations))
                    for (var c = 0; c < b.destinations.length; c++)
                        if (JH(b.destinations[c])) {
                            U(125);
                            a.isAborted = !0;
                            break
                        }
            }
        },
        nI = function(a) {
            Du("attribution-reporting") && (a.j[O.g.fc] = "1")
        },
        WH = function(a) {
            if (zu.Wl.replace(/\s+/g, "").split(",").indexOf(a.eventName) >= 0) a.isAborted = !0;
            else {
                var b = Ot(a);
                b && b.blacklisted && (a.isAborted = !0)
            }
        },
        jI = function(a) {
            var b = function(c) {
                return !!c && c.conversion
            };
            a.metadata.is_conversion = b(Ot(a));
            a.metadata.is_first_visit && (a.metadata.is_first_visit_conversion = b(Ot(a,
                "first_visit")));
            a.metadata.is_session_start && (a.metadata.is_session_start_conversion = b(Ot(a, "session_start")))
        },
        kI = function(a) {
            sh.hasOwnProperty(a.eventName) && (a.metadata.is_ecommerce = !0, a.copyToHitData(O.g.da), a.copyToHitData(O.g.Aa))
        },
        rI = function(a) {
            if (S(76) && a.metadata.is_conversion && X(O.g.O) && Nt(a, "ga4_ads_linked", !1)) {
                var b = Zr(a),
                    c = Eq(b.prefix),
                    d = Rr(c);
                a.j[O.g.wf] = d.Mh;
                a.j[O.g.yf] = d.Oh;
                a.j[O.g.xf] = d.Nh
            }
        };

    function UH(a) {
        jb(a, function(c) {
            c.charAt(0) === "_" && delete a[c]
        });
        var b = a[O.g.jb] || {};
        jb(b, function(c) {
            c.charAt(0) === "_" && delete b[c]
        })
    }
    var wI = function(a) {
            if (!vI(a)) {
                var b = !1,
                    c = function() {
                        !b && vI(a) && (b = !0, vc(E, "visibilitychange", c), S(4) && vc(E, "prerenderingchange", c), U(55))
                    };
                uc(E, "visibilitychange", c);
                S(4) && uc(E, "prerenderingchange", c);
                U(54)
            }
        },
        vI = function(a) {
            if (S(4) && "prerendering" in E ? E.prerendering : E.visibilityState === "prerender") return !1;
            a();
            return !0
        };

    function xI(a, b) {
        
        wI(function() {
            var c = Vl(a);
            if (c) {
                var d = yI(c, b);
                Wm(a, d)
            }
        });
    }

    function yI(a, b) {
       
        var c = function() {};
        var d = new TH(a.id),
            e = a.prefix === "MC";
        c = function(f, g, k, m) {
            e && (m.eventMetadata.is_merchant_center = !0);
            d.Ym(g, k, m)
        };
        ek || zI(a, d, b);
        return c
    }

    function zI(a, b, c) {
        var d = b.C,
            e = {},
            f = {
                eventId: c,
                eventMetadata: (e.batch_on_navigation = !0, e)
            };
        S(48) && (f.deferrable = !0);
        d.dn(function() {
            XF = !0;
            Xm.flush();
            d.ig() >= 1E3 && gc.sendBeacon !== void 0 && Ym(O.g.Uc, {}, a.id, f);
            b.flush();
            d.wk(function() {
                XF = !1;
                d.wk()
            })
        });
    };
    var AI = yI;

    function CI(a, b, c) {
        var d = this;
    }
    CI.F = "internal.gtagConfig";

    function DI() {
        var a = {};
        return a
    };

    function FI(a, b) {}
    FI.T = "gtagSet";

    function GI() {
        var a = {};
        return a
    };

    function HI(a, b) {}
    HI.T = "injectHiddenIframe";
    var II = gA();

    function JI(a, b, c, d, e) {
        var f = this;
    }
    JI.F = "internal.injectHtml";
    var NI = {};

    function PI(a, b, c, d) {}
    var QI = {
            dl: 1,
            id: 1
        },
        RI = {};

    function SI(a, b, c, d) {}
    PI.T = "injectScript";
    SI.F = "internal.injectScript";

    function TI(a) {
        var b = !0;
        return b
    }
    TI.T = "isConsentGranted";

    function UI(a) {
        var b = !1;
        return b
    }
    UI.F = "internal.isDebugMode";

    function VI() {
        return ql()
    }
    VI.F = "internal.isDmaRegion";

    function WI(a) {
        var b = !1;
        return b
    }
    WI.F = "internal.isEntityInfrastructure";

    function XI() {
        var a = $g(function(b) {
            vA(this).log("error", b)
        });
        a.T = "JSON";
        return a
    };

    function YI(a) {
        var b = void 0;
        return hd(b)
    }
    YI.F = "internal.legacyParseUrl";

    function ZI() {
        return !1
    }
    var $I = {
        getItem: function(a) {
            var b = null;
            return b
        },
        setItem: function(a, b) {
            return !1
        },
        removeItem: function(a) {}
    };

    function aJ() {}
    aJ.T = "logToConsole";

    function bJ(a, b) {}
    bJ.F = "internal.mergeRemoteConfig";

    function cJ(a, b, c) {
        c = c === void 0 ? !0 : c;
        var d = [];
        return hd(d)
    }
    cJ.F = "internal.parseCookieValuesFromString";

    function dJ(a) {
        var b = void 0;
        if (typeof a !== "string") return;
        a && vb(a, "//") && (a = E.location.protocol + a);
        if (typeof URL === "function") {
            var c;
            a: {
                var d;
                try {
                    d = new URL(a)
                } catch (w) {
                    c = void 0;
                    break a
                }
                for (var e = {}, f = Array.from(d.searchParams), g = 0; g < f.length; g++) {
                    var k = f[g][0],
                        m = f[g][1];
                    e.hasOwnProperty(k) ? typeof e[k] === "string" ? e[k] = [e[k], m] : e[k].push(m) : e[k] = m
                }
                c = hd({
                    href: d.href,
                    origin: d.origin,
                    protocol: d.protocol,
                    username: d.username,
                    password: d.password,
                    host: d.host,
                    hostname: d.hostname,
                    port: d.port,
                    pathname: d.pathname,
                    search: d.search,
                    searchParams: e,
                    hash: d.hash
                })
            }
            return c
        }
        var n;
        try {
            n = Bj(a)
        } catch (w) {
            return
        }
        if (!n.protocol || !n.host) return;
        var p = {};
        if (n.search)
            for (var q = n.search.replace("?", "").split("&"), r = 0; r < q.length; r++) {
                var u = q[r].split("="),
                    v = u[0],
                    t = decodeURIComponent(u.splice(1).join("=")).replace(/\+/g, " ");
                p.hasOwnProperty(v) ? typeof p[v] === "string" ? p[v] = [p[v], t] : p[v].push(t) : p[v] = t
            }
        n.searchParams = p;
        n.origin = n.protocol + "//" + n.host;
        n.username = "";
        n.password =
            "";
        b = hd(n);
        return b
    }
    dJ.T = "parseUrl";

    function eJ(a) {}
    eJ.F = "internal.processAsNewEvent";

    function fJ(a, b, c) {
        var d;
        return d
    }
    fJ.F = "internal.pushToDataLayer";

    function gJ(a) {
        var b = !1;
        K(this.getName(), ["permission:!string"], [a]);
        for (var c = Array.prototype.slice.call(arguments, 0), d = 0; d < c.length; ++d) c[d] = G(c[d], this.D, 1);
        c.unshift(this);
        try {
            L.apply(null, c), b = !0
        } catch (e) {
            return !1
        }
        return b
    }
    gJ.T = "queryPermission";

    function hJ() {
        var a = "";
        return a
    }
    hJ.T = "readCharacterSet";

    function iJ() {
        return Hi.ob
    }
    iJ.F = "internal.readDataLayerName";

    function jJ() {
        var a = "";
        return a
    }
    jJ.T = "readTitle";

    function kJ(a, b) {
        var c = this;
        K(this.getName(), ["destinationId:!string", "callback:!Fn"], arguments), Hs(a, function(d) {
            b.invoke(c.D, hd(d, c.D, 1))
        });
    }
    kJ.F = "internal.registerCcdCallback";

    function lJ(a) {
        return !0
    }
    lJ.F = "internal.registerDestination";
    var mJ = ["config", "event", "get", "set"];

    function nJ(a, b, c) {}
    nJ.F = "internal.registerGtagCommandListener";

    function oJ(a, b) {
        var c = !1;
        return c
    }
    oJ.F = "internal.removeDataLayerEventListener";

    function pJ(a, b) {}
    pJ.F = "internal.removeFormData";

    function qJ() {}
    qJ.T = "resetDataLayer";

    function rJ(a, b, c) {
        var d = void 0;
        return d
    }
    rJ.F = "internal.scrubUrlParams";

    function sJ(a) {}
    sJ.F = "internal.sendAdsHit";

    function tJ(a, b, c, d) {}
    tJ.F = "internal.sendGtagEvent";

    function uJ(a, b, c) {}
    uJ.T = "sendPixel";

    function vJ(a, b) {}
    vJ.F = "internal.setAnchorHref";

    function wJ(a) {}
    wJ.F = "internal.setContainerConsentDefaults";

    function xJ(a, b, c, d) {
        var e = this;
        d = d === void 0 ? !0 : d;
        var f = !1;
        return f
    }
    xJ.T = "setCookie";

    function yJ(a) {}
    yJ.F = "internal.setCorePlatformServices";

    function zJ(a, b) {}
    zJ.F = "internal.setDataLayerValue";

    function AJ(a) {}
    AJ.T = "setDefaultConsentState";

    function BJ(a, b) {}
    BJ.F = "internal.setDelegatedConsentType";

    function CJ(a, b) {}
    CJ.F = "internal.setFormAction";

    function DJ(a, b, c) {}
    DJ.F = "internal.setInCrossContainerData";

    function EJ(a, b, c) {
        return !1
    }
    EJ.T = "setInWindow";

    function FJ(a, b, c) {}
    FJ.F = "internal.setProductSettingsParameter";

    function GJ(a, b, c) {
        K(this.getName(), ["targetId:!string", "name:!string", "value:!*"], arguments);
        for (var d = b.split("."), e = $m(a), f = 0; f < d.length - 1; f++) {
            if (e[d[f]] === void 0) e[d[f]] = {};
            else if (!Uc(e[d[f]])) throw Error("setRemoteConfigParameter failed, path contains a non-object type: " + d[f]);
            e = e[d[f]]
        }
        e[d[f]] = G(c, this.D, 1);
    }
    GJ.F = "internal.setRemoteConfigParameter";

    function HJ(a, b, c, d) {
        var e = this;
    }
    HJ.T = "sha256";

    function IJ(a, b, c) {}
    IJ.F = "internal.sortRemoteConfigParameters";

    function JJ(a, b) {
        var c = void 0;
        return c
    }
    JJ.F = "internal.subscribeToCrossContainerData";
    var KJ = {},
        LJ = {};
    KJ.getItem = function(a) {
        var b = null;
        return b
    };
    KJ.setItem = function(a, b) {};
    KJ.removeItem = function(a) {};
    KJ.clear = function() {};
    KJ.T = "templateStorage";

    function MJ(a, b) {
        var c = !1;
        return c
    }
    MJ.F = "internal.testRegex";

    function NJ(a) {
        var b;
        return b
    };

    function OJ(a) {
        var b;
        return b
    }
    OJ.F = "internal.unsiloId";

    function PJ(a, b) {
        var c;
        return c
    }
    PJ.F = "internal.unsubscribeFromCrossContainerData";

    function QJ(a) {}
    QJ.T = "updateConsentState";
    var RJ;

    function SJ(a, b, c) {
        RJ = RJ || new kh;
        RJ.add(a, b, c)
    }

    function TJ(a, b) {
        var c = RJ = RJ || new kh;
        if (c.j.hasOwnProperty(a)) throw Error("Attempting to add a private function which already exists: " + a + ".");
        if (c.contains(a)) throw Error("Attempting to add a private function with an existing API name: " + a + ".");
        c.j[a] = bb(b) ? Hg(a, b) : Ig(a, b)
    }

    function UJ() {
        return function(a) {
            var b;
            var c = RJ;
            if (c.contains(a)) b = c.get(a, this);
            else {
                var d;
                if (d = c.j.hasOwnProperty(a)) {
                    var e = !1,
                        f = this.D.j;
                    if (f) {
                        var g = f.kb();
                        if (g) {
                            g.indexOf("__cvt_") !== 0 && (e = !0);
                        }
                    } else e = !0;
                    d = e
                }
                if (d) {
                    var k = c.j.hasOwnProperty(a) ? c.j[a] : void 0;
                    b = k
                } else throw Error(a + " is not a valid API name.");
            }
            return b
        }
    };

    function VJ() {
        var a = function(c) {
                return void TJ(c.F, c)
            },
            b = function(c) {
                return void SJ(c.T, c)
            };
        b(pA);
        b(wA);
        b(KB);
        b(MB);
        b(NB);
        b(UB);
        b(WB);
        b($B);
        b(XI());
        b(bC);
        b(sF);
        b(tF);
        b(MF);
        b(NF);
        b(OF);
        b(UF);
        b(FI);
        b(HI);
        b(PI);
        b(TI);
        b(aJ);
        b(dJ);
        b(gJ);
        b(hJ);
        b(jJ);
        b(uJ);
        b(xJ);
        b(AJ);
        b(EJ);
        b(HJ);
        b(KJ);
        b(QJ);
        SJ("Math", Mg());
        SJ("Object", ih);
        SJ("TestHelper", mh());
        SJ("assertApi", Jg);
        SJ("assertThat", Kg);
        SJ("decodeUri", Og);
        SJ("decodeUriComponent", Pg);
        SJ("encodeUri", Qg);
        SJ("encodeUriComponent", Rg);
        SJ("fail", Wg);
        SJ("generateRandom",
            Xg);
        SJ("getTimestamp", Yg);
        SJ("getTimestampMillis", Yg);
        SJ("getType", Zg);
        SJ("makeInteger", ah);
        SJ("makeNumber", bh);
        SJ("makeString", ch);
        SJ("makeTableMap", dh);
        SJ("mock", gh);
        SJ("fromBase64", nF, !("atob" in C));
        SJ("localStorage", $I, !ZI());
        SJ("toBase64", NJ, !("btoa" in C));
        a(oA);
        a(sA);
        a(NA);
        a(ZA);
        a(fB);
        a(kB);
        a(zB);
        a(IB);
        a(LB);
        a(OB);
        a(PB);
        a(QB);
        a(RB);
        a(SB);
        a(TB);
        a(VB);
        a(XB);
        a(ZB);
        a(aC);
        a(cC);
        a(eC);
        a(fC);
        a(gC);
        a(hC);
        a(iC);
        a(mC);
        a(uC);
        a(vC);
        a(GC);
        a(LC);
        a(QC);
        a(ZC);
        a(dD);
        a(qD);
        a(sD);
        a(GD);
        a(HD);
        a(JD);
        a(lF);
        a(mF);
        a(oF);
        a(pF);
        a(qF);
        a(uF);
        a(vF);
        a(wF);
        a(xF);
        a(yF);
        a(zF);
        a(AF);
        a(BF);
        a(CF);
        a(DF);
        a(EF);
        a(GF);
        a(HF);
        a(IF);
        a(JF);
        a(KF);
        a(LF);
        a(PF);
        a(QF);
        a(RF);
        a(SF);
        a(TF);
        a(WF);
        a(CI);
        a(JI);
        a(SI);
        a(UI);
        a(VI);
        a(WI);
        a(YI);
        a(xB);
        a(bJ);
        a(cJ);
        a(eJ);
        a(fJ);
        a(iJ);
        a(kJ);
        a(lJ);
        a(nJ);
        a(oJ);
        a(pJ);
        a(rJ);
        a(sJ);
        a(tJ);
        a(vJ);
        a(wJ);
        a(yJ);
        a(zJ);
        a(BJ);
        a(CJ);
        a(DJ);
        a(FJ);
        a(GJ);
        a(IJ);
        a(JJ);
        a(MJ);
        a(OJ);
        a(PJ);
        TJ("internal.CrossContainerSchema", dC());
        TJ("internal.GtagSchema", DI());
        TJ("internal.IframingStateSchema", GI());
        SJ("mockObject", hh);
        return UJ()
    };
    var mA;

    function WJ() {
        mA.j.j.H = function(a, b, c) {
            Ii.SANDBOXED_JS_SEMAPHORE = Ii.SANDBOXED_JS_SEMAPHORE || 0;
            Ii.SANDBOXED_JS_SEMAPHORE++;
            try {
                return a.apply(b, c)
            } finally {
                Ii.SANDBOXED_JS_SEMAPHORE--
            }
        }
    }

    function XJ(a) {
        a && jb(a, function(b, c) {
            for (var d = 0; d < c.length; d++) {
                var e = c[d].replace(/^_*/, "");
                Yi[e] = Yi[e] || [];
                Yi[e].push(b)
            }
        })
    };

    function YJ(a) {
        ry(my("developer_id." + a, !0), 0, {})
    };
    var ZJ = Array.isArray;

    function $J(a, b) {
        return Vc(a, b || null)
    }

    function Y(a) {
        return window.encodeURIComponent(a)
    }

    function aK(a, b, c) {
        sc(a, b, c)
    }

    function bK(a, b) {
        if (!a) return !1;
        var c = vj(Bj(a), "host");
        if (!c) return !1;
        for (var d = 0; b && d < b.length; d++) {
            var e = b[d] && b[d].toLowerCase();
            if (e) {
                var f = c.length - e.length;
                f > 0 && e.charAt(0) !== "." && (f--, e = "." + e);
                if (f >= 0 && c.indexOf(e, f) === f) return !0
            }
        }
        return !1
    }

    function cK(a, b, c) {
        for (var d = {}, e = !1, f = 0; a && f < a.length; f++) a[f] && a[f].hasOwnProperty(b) && a[f].hasOwnProperty(c) && (d[a[f][b]] = a[f][c], e = !0);
        return e ? d : null
    }
    var lK = C.clearTimeout,
        mK = C.setTimeout;

    function nK(a, b, c) {
        if (Lo()) {
            b && F(b)
        } else return pc(a, b, c)
    }

    function oK() {
        return C.location.href
    }

    function pK(a, b) {
        return ij(a, b || 2)
    }

    function qK(a, b) {
        C[a] = b
    }

    function rK(a, b, c) {
        b && (C[a] === void 0 || c && !C[a]) && (C[a] = b);
        return C[a]
    }

    function sK(a, b) {
        if (Lo()) {
            b && F(b)
        } else rc(a, b)
    }
    var tK = {};
    var Z = {
        securityGroups: {}
    };

    Z.securityGroups.v = ["google"], Z.__v = function(a) {
        var b = a.vtp_name;
        if (!b || !b.replace) return !1;
        var c = pK(b.replace(/\\\./g, "."), a.vtp_dataLayerVersion || 1);
        return c !== void 0 ? c : a.vtp_defaultValue
    }, Z.__v.o = "v", Z.__v.isVendorTemplate = !0, Z.__v.priorityOverride = 0, Z.__v.isInfrastructure = !0, Z.__v.runInSiloedMode = !1;

    Z.securityGroups.read_event_data = ["google"],
        function() {
            function a(b, c) {
                return {
                    key: c
                }
            }(function(b) {
                Z.__read_event_data = b;
                Z.__read_event_data.o = "read_event_data";
                Z.__read_event_data.isVendorTemplate = !0;
                Z.__read_event_data.priorityOverride = 0;
                Z.__read_event_data.isInfrastructure = !1;
                Z.__read_event_data.runInSiloedMode = !1
            })(function(b) {
                var c = b.vtp_eventDataAccess,
                    d = b.vtp_keyPatterns || [],
                    e = b.vtp_createPermissionError;
                return {
                    assert: function(f, g) {
                        if (g != null && !z(g)) throw e(f, {
                            key: g
                        }, "Key must be a string.");
                        if (c !== "any") {
                            try {
                                if (c === "specific" && g != null && lg(g, d)) return
                            } catch (k) {
                                throw e(f, {
                                    key: g
                                }, "Invalid key filter.");
                            }
                            throw e(f, {
                                key: g
                            }, "Prohibited read from event data.");
                        }
                    },
                    M: a
                }
            })
        }();




    Z.securityGroups.read_container_data = ["google"], Z.__read_container_data = function() {
        return {
            assert: function() {},
            M: function() {
                return {}
            }
        }
    }, Z.__read_container_data.o = "read_container_data", Z.__read_container_data.isVendorTemplate = !0, Z.__read_container_data.priorityOverride = 0, Z.__read_container_data.isInfrastructure = !1, Z.__read_container_data.runInSiloedMode = !1;

    Z.securityGroups.detect_user_provided_data = ["google"],
        function() {
            function a(b, c) {
                return {
                    dataSource: c
                }
            }(function(b) {
                Z.__detect_user_provided_data = b;
                Z.__detect_user_provided_data.o = "detect_user_provided_data";
                Z.__detect_user_provided_data.isVendorTemplate = !0;
                Z.__detect_user_provided_data.priorityOverride = 0;
                Z.__detect_user_provided_data.isInfrastructure = !1;
                Z.__detect_user_provided_data.runInSiloedMode = !1
            })(function(b) {
                var c = b.vtp_createPermissionError;
                return {
                    assert: function(d, e) {
                        if (e !== "auto" && e !== "manual" &&
                            e !== "code") throw c(d, {}, "Unknown user provided data source.");
                        if (b.vtp_limitDataSources)
                            if (e !== "auto" || b.vtp_allowAutoDataSources) {
                                if (e === "manual" && !b.vtp_allowManualDataSources) throw c(d, {}, "Detection of user provided data via manually specified CSS selectors is not allowed.");
                                if (e === "code" && !b.vtp_allowCodeDataSources) throw c(d, {}, "Detection of user provided data from an in-page variable is not allowed.");
                            } else throw c(d, {}, "Automatic detection of user provided data is not allowed.");
                    },
                    M: a
                }
            })
        }();




    Z.securityGroups.gct = ["google"],
        function() {
            function a(b) {
                for (var c = [], d = 0; d < b.length; d++) try {
                    c.push(new RegExp(b[d]))
                } catch (e) {}
                return c
            }(function(b) {
                Z.__gct = b;
                Z.__gct.o = "gct";
                Z.__gct.isVendorTemplate = !0;
                Z.__gct.priorityOverride = 0;
                Z.__gct.isInfrastructure = !1;
                Z.__gct.runInSiloedMode = !0
            })(function(b) {
                var c = {},
                    d = b.vtp_sessionDuration;
                d > 0 && (c[O.g.sd] = d);
                c[O.g.ie] = b.vtp_eventSettings;
                c[O.g.Ig] = b.vtp_dynamicEventSettings;
                c[O.g.Gc] = b.vtp_googleSignals === 1;
                c[O.g.Vg] = b.vtp_foreignTld;
                c[O.g.Sg] = b.vtp_restrictDomain ===
                    1;
                c[O.g.Jf] = b.vtp_internalTrafficResults;
                var e = O.g.sa,
                    f = b.vtp_linker;
                f && f[O.g.X] && (f[O.g.X] = a(f[O.g.X]));
                c[e] = f;
                var g = O.g.Nf,
                    k = b.vtp_referralExclusionDefinition;
                k && k.include_conditions && (k.include_conditions = a(k.include_conditions));
                c[g] = k;
                var m = rk(b.vtp_trackingId);
                bn(m, c);
                xI(m, b.vtp_gtmEventId);
                F(b.vtp_gtmOnSuccess)
            })
        }();



    Z.securityGroups.get = ["google"], Z.__get = function(a) {
        var b = a.vtp_settings,
            c = b.eventParameters || {},
            d = String(a.vtp_eventName),
            e = {};
        e.eventId = a.vtp_gtmEventId;
        e.priorityId = a.vtp_gtmPriorityId;
        a.vtp_deferrable && (e.deferrable = !0);
        var f = py(String(b.streamId), d, c);
        ry(f, e.eventId, e);
        a.vtp_gtmOnSuccess()
    }, Z.__get.o = "get", Z.__get.isVendorTemplate = !0, Z.__get.priorityOverride = 0, Z.__get.isInfrastructure = !1, Z.__get.runInSiloedMode = !1;




    var uK = {
        dataLayer: jj,
        callback: function(a) {
            Xi.hasOwnProperty(a) && bb(Xi[a]) && Xi[a]();
            delete Xi[a]
        },
        bootstrap: 0,
        _spx: !1
    };

    function vK() {
        Ii[lk()] = Ii[lk()] || uK;
        vk();
        zk() || jb(Ak(), function(d, e) {
            dx(d, e.transportUrl, e.context);
            U(92)
        });
        tb(Yi, Z.securityGroups);
        var a = pk(qk()),
            b, c = a == null ? void 0 : (b = a.context) == null ? void 0 : b.source;
        c !== 2 && c !== 4 && c !== 3 || U(142);
        sf = Jf
    }
    var wK = !1;
    (function(a) {
        function b() {
            n = E.documentElement.getAttribute("data-tag-assistant-present");
            vz(n) && (m = k.Bj)
        }

        function c() {
            m && jc ? g(m) : a()
        }
        if (!C["__TAGGY_INSTALLED"]) {
            var d = !1;
            if (E.referrer) {
                var e = Bj(E.referrer);
                d = xj(e, "host") === "cct.google"
            }
            if (!d) {
                var f = Qo("googTaggyReferrer");
                d = !(!f.length || !f[0].length)
            }
            d && (C["__TAGGY_INSTALLED"] = !0, pc("https://cct.google/taggy/agent.js"))
        }
        var g = function(v) {
                var t = "GTM",
                    w = "GTM";
                Oi && (t = "OGT", w = "GTAG");
                var x = C["google.tagmanager.debugui2.queue"];
                x || (x = [], C["google.tagmanager.debugui2.queue"] = x, pc("https://" + Hi.vf + "/debug/bootstrap?id=" + Pf.ctid + "&src=" + w + "&cond=" + v + "&gtm=" + No()));
                var y = {
                    messageType: "CONTAINER_STARTING",
                    data: {
                        scriptSource: jc,
                        containerProduct: t,
                        debug: !1,
                        id: Pf.ctid,
                        targetRef: {
                            ctid: Pf.ctid,
                            isDestination: fk()
                        },
                        aliases: ik(),
                        destinations: gk()
                    }
                };
                y.data.resume = function() {
                    a()
                };
                Hi.Ok && (y.data.initialPublish = !0);
                x.push(y)
            },
            k = {
                ol: 1,
                Dj: 2,
                Rj: 3,
                Fi: 4,
                Bj: 5
            };
        k[k.ol] = "GTM_DEBUG_LEGACY_PARAM";
        k[k.Dj] = "GTM_DEBUG_PARAM";
        k[k.Rj] = "REFERRER";
        k[k.Fi] = "COOKIE";
        k[k.Bj] = "EXTENSION_PARAM";
        var m = void 0,
            n = void 0,
            p = vj(C.location, "query", !1, void 0, "gtm_debug");
        vz(p) && (m = k.Dj);
        if (!m && E.referrer) {
            var q = Bj(E.referrer);
            xj(q, "host") === "tagassistant.google.com" && (m = k.Rj)
        }
        if (!m) {
            var r = Qo("__TAG_ASSISTANT");
            r.length && r[0].length && (m = k.Fi)
        }
        m || b();
        if (!m && wz(n)) {
            var u = !1;
            uc(E, "TADebugSignal", function() {
                u || (u = !0, b(), c())
            }, !1);
            C.setTimeout(function() {
                u || (u = !0, b(), c())
            }, 200)
        } else c()
    })(function() {
        try {
            var a;
            if (!(a = wK)) {
                var b;
                a: {
                    for (var c = ak(), d = l(hk()), e = d.next(); !e.done; e = d.next())
                        if (c.injectedFirstPartyContainers[e.value]) {
                            b = !0;
                            break a
                        } b = !1
                }
                a = !b
            }
            if (a) {
                tk();
                if (S(80)) {}
                Ya[10] = !0;
                fk();
                if (!Hl) {
                    Hl = !0;
                    for (var f = Il.length - 1; f >= 0; f--) Il[f]();
                    Il = []
                }
                no();
                Rl();
                var g = nk();
                if (ak().canonical[g]) {
                    var k = Ii.zones;
                    k && k.unregisterChild(hk());
                    Pw().removeExternalRestrictions(nk());
                } else {
                    Cu();
                    aj.j = "101823848~101925629";
                    aj.K = "";
                    aj.Ua = "ad_storage|analytics_storage|ad_user_data|ad_personalization";
                    aj.aa = "ad_storage|analytics_storage|ad_user_data";
                    aj.P = "4a90";
                    aj.P = "4al0";
                    $w();
                    for (var m = data.resource || {}, n = m.macros || [], p = 0; p < n.length; p++) hf.push(n[p]);
                    for (var q = m.tags || [], r = 0; r < q.length; r++) lf.push(q[r]);
                    for (var u = m.predicates || [], v = 0; v < u.length; v++) kf.push(u[v]);
                    for (var t =
                            m.rules || [], w = 0; w < t.length; w++) {
                        for (var x = t[w], y = {}, A = 0; A < x.length; A++) {
                            var B = x[A][0];
                            y[B] = Array.prototype.slice.call(x[A], 1);
                            B !== "if" && B !== "unless" || rf(y[B])
                        }
                        jf.push(y)
                    }
                    nf = Z;
                    of = aA;
                    Lf = new Sf;
                    var D = data.sandboxed_scripts,
                        I = data.security_groups;
                    a: {
                        var J = data.runtime || [],
                            H = data.runtime_lines;mA = new De;WJ();gf = lA();
                        var W = mA,
                            N = VJ(),
                            aa = new $c("require", N);aa.Ia();W.j.j.set("require", aa);
                        for (var da = [], T = 0; T < J.length; T++) {
                            var R = J[T];
                            if (!Array.isArray(R) || R.length < 3) {
                                if (R.length === 0) continue;
                                break a
                            }
                            H && H[T] &&
                                H[T].length && Cf(R, H[T]);
                            try {
                                mA.execute(R), S(92) && Qj && R[0] === 50 && da.push(R[1])
                            } catch (co) {}
                        }
                        S(92) && (tf = da)
                    }
                    if (D && D.length)
                        for (var M = ["sandboxedScripts"], ia = 0; ia < D.length; ia++) {
                            var la = D[ia].replace(/^_*/, "");
                            Yi[la] = M
                        }
                    XJ(I);
                    vK();
                    if (!Si)
                        for (var ea = ql() ? dj(aj.aa) : dj(aj.Ua), ua = 0; ua < ul.length; ua++) {
                            var Ma = ul[ua],
                                Da = Ma,
                                Sa = ea[Ma] ? "granted" : "denied";
                            Qk().implicit(Da, Sa)
                        }
                    uz();
                    ex = !1;
                    fx = 0;
                    if (E.readyState === "interactive" && !E.createEventObject || E.readyState === "complete") hx();
                    else {
                        uc(E, "DOMContentLoaded", hx);
                        uc(E,
                            "readystatechange", hx);
                        if (E.createEventObject && E.documentElement.doScroll) {
                            var gb = !0;
                            try {
                                gb = !C.frameElement
                            } catch (co) {}
                            gb && ix()
                        }
                        uc(C, "load", hx)
                    }
                    $y = !1;
                    E.readyState === "complete" ? bz() : uc(C, "load", bz);
                    Qj && (Fm(Sm), C.setInterval(Rm, 864E5), Fm(dA), Fm(Ix), Fm(Ev), Fm(Vm), Fm(iA), Fm(Tx), S(92) && (Fm(Nx), Fm(Ox), Fm(Px)));
                    if (Rj) {
                        Pk();
                        lm();
                        var fe, Tf = Bj(C.location.href);
                        (fe = Tf.hostname + Tf.pathname) && Hk("dl", encodeURIComponent(fe));
                        var eo;
                        var yy = Pf.ctid;
                        if (yy) {
                            var xK = dk.ze ? 1 : 0,
                                xh, zy = pk(qk());
                            xh = zy && zy.context;
                            eo = yy + ";" + Pf.canonicalContainerId + ";" + (xh && xh.fromContainerExecution ? 1 : 0) + ";" + (xh && xh.source || 0) + ";" + xK
                        } else eo = void 0;
                        var Ay = eo;
                        Ay && Hk("tdp", Ay);
                        var By = Mn(!0);
                        By !== void 0 && Hk("frm", String(By));
                        var fo;
                        var yh = pk(qk());
                        if (yh) {
                            for (; yh.parent;) {
                                var Cy = pk(yh.parent);
                                if (!Cy) break;
                                yh = Cy
                            }
                            fo = yh
                        } else fo = void 0;
                        var Uf = fo;
                        if (!Uf) U(144);
                        else if (Uf.canonicalContainerId) {
                            var go;
                            a: {
                                var Dy, Ey = (Dy = Uf.scriptElement) == null ? void 0 : Dy.src;
                                if (Ey) {
                                    var Uj;
                                    try {
                                        var Fy;
                                        Uj = (Fy = Jc()) == null ? void 0 : Fy.getEntriesByType("resource")
                                    } catch (co) {}
                                    if (Uj) {
                                        for (var ho = {}, Vj = 0; Vj < Uj.length; ++Vj) {
                                            var Gy = Uj[Vj],
                                                io = Gy.initiatorType;
                                            if (io === "script" && Gy.name === Ey) {
                                                go = {
                                                    hn: Vj,
                                                    jn: ho
                                                };
                                                break a
                                            }
                                            ho[io] = 1 + (ho[io] || 0)
                                        }
                                        U(146)
                                    } else U(145)
                                }
                                go = void 0
                            }
                            var jo = go;
                            jo && (Hk("rtg", String(Uf.canonicalContainerId)), Hk("rlo", String(jo.hn)), Hk("slo", String(jo.jn.script || "0")), Hk("hlo", Uf.htmlLoadOrder || "-1"), Hk("lst", String(Uf.loadScriptType ||
                                "0")))
                        }
                        var ko;
                        var Wj = ok();
                        if (Wj) {
                            var Hy;
                            ko = Wj.canonicalContainerId || "_" + (Wj.scriptContainerId || ((Hy = Wj.destinations) == null ? void 0 : Hy[0]))
                        } else ko = void 0;
                        var Iy = ko;
                        Iy && Hk("pcid", Iy);
                        S(34) && (Hk("bt", String(aj.H ? 2 : Qi ? 1 : 0)), Hk("ct", String(aj.H ? 0 : Qi ? 1 : Lo() ? 2 : 3)))
                    }
                    Rz();
                    ll(1);
                    vB();
                    Wi = getCurrentTimestamp();
                    uK.bootstrap = Wi;
                    if (S(80)) {}
                    S(108) && (typeof C.name === "string" && vb(C.name, "web-pixel-sandbox-CUSTOM") && Kc() ? YJ("dMDg0Yz") : C.Shopify && Kc() && YJ("dNTU0Yz"))
                }
            }
        } catch (co) {
            if (ll(4), Qj) {
                var yK = Mm(!0, !0);
                sc(yK)
            }
        }
    });

})()
