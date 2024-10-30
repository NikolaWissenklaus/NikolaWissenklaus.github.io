// Copyright 2012 Google Inc. All rights reserved.

(function() {

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




    var h, aa = function(a) {
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
        ba = typeof Object.defineProperties == "function" ? Object.defineProperty : function(a, b, c) {
            if (a == Array.prototype || a == Object.prototype) return a;
            a[b] = c.value;
            return a
        },
        ca = function(a) {
            for (var b = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global], c = 0; c < b.length; ++c) {
                var d = b[c];
                if (d && d.Math == Math) return d
            }
            throw Error("Cannot find global object");
        },
        fa = ca(this),
        ha = function(a, b) {
            if (b) a: {
                for (var c = fa, d = a.split("."), e = 0; e < d.length - 1; e++) {
                    var f = d[e];
                    if (!(f in c)) break a;
                    c = c[f]
                }
                var g = d[d.length - 1],
                    k = c[g],
                    m = b(k);m != k && m != null && ba(c, g, {
                    configurable: !0,
                    writable: !0,
                    value: m
                })
            }
        };
    ha("Symbol", function(a) {
        if (a) return a;
        var b = function(f, g) {
            this.j = f;
            ba(this, "description", {
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
    var ka = function(a) {
            return ja(a, a)
        },
        ja = function(a, b) {
            a.raw = b;
            Object.freeze && (Object.freeze(a), Object.freeze(b));
            return a
        },
        l = function(a) {
            var b = typeof Symbol != "undefined" && Symbol.iterator && a[Symbol.iterator];
            if (b) return b.call(a);
            if (typeof a.length == "number") return {
                next: aa(a)
            };
            throw Error(String(a) + " is not an iterable or ArrayLike");
        },
        ma = function(a) {
            for (var b, c = []; !(b = a.next()).done;) c.push(b.value);
            return c
        },
        na = function(a) {
            return a instanceof Array ? a : ma(l(a))
        },
        oa = typeof Object.assign == "function" ? Object.assign :
        function(a, b) {
            for (var c = 1; c < arguments.length; c++) {
                var d = arguments[c];
                if (d)
                    for (var e in d) Object.prototype.hasOwnProperty.call(d, e) && (a[e] = d[e])
            }
            return a
        };
    ha("Object.assign", function(a) {
        return a || oa
    });
    var pa = typeof Object.create == "function" ? Object.create : function(a) {
            var b = function() {};
            b.prototype = a;
            return new b
        },
        qa;
    if (typeof Object.setPrototypeOf == "function") qa = Object.setPrototypeOf;
    else {
        var ra;
        a: {
            var sa = {
                    a: !0
                },
                ta = {};
            try {
                ta.__proto__ = sa;
                ra = ta.a;
                break a
            } catch (a) {}
            ra = !1
        }
        qa = ra ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
            return a
        } : null
    }
    var va = qa,
        wa = function(a, b) {
            a.prototype = pa(b.prototype);
            a.prototype.constructor = a;
            if (va) va(a, b);
            else
                for (var c in b)
                    if (c != "prototype")
                        if (Object.defineProperties) {
                            var d = Object.getOwnPropertyDescriptor(b, c);
                            d && Object.defineProperty(a, c, d)
                        } else a[c] = b[c];
            a.ko = b.prototype
        },
        xa = function() {
            for (var a = Number(this), b = [], c = a; c < arguments.length; c++) b[c - a] = arguments[c];
            return b
        };
    /*

     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */
    var ya = this || self;
    var za = function(a, b) {
        this.type = a;
        this.data = b
    };
    var Aa = function() {
        this.map = {};
        this.j = {}
    };
    Aa.prototype.get = function(a) {
        return this.map["dust." + a]
    };
    Aa.prototype.set = function(a, b) {
        var c = "dust." + a;
        this.j.hasOwnProperty(c) || (this.map[c] = b)
    };
    Aa.prototype.has = function(a) {
        return this.map.hasOwnProperty("dust." + a)
    };
    Aa.prototype.remove = function(a) {
        var b = "dust." + a;
        this.j.hasOwnProperty(b) || delete this.map[b]
    };
    var Ba = function(a, b) {
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
    Aa.prototype.ka = function() {
        return Ba(this, 1)
    };
    Aa.prototype.Vb = function() {
        return Ba(this, 2)
    };
    Aa.prototype.Cb = function() {
        return Ba(this, 3)
    };
    var Ca = function() {};
    Ca.prototype.reset = function() {};
    var Ea = function(a, b) {
        this.K = a;
        this.parent = b;
        this.j = this.C = void 0;
        this.sc = !1;
        this.H = function(c, d, e) {
            return c.apply(d, e)
        };
        this.values = new Aa
    };
    Ea.prototype.add = function(a, b) {
        Fa(this, a, b, !1)
    };
    var Fa = function(a, b, c, d) {
        if (!a.sc)
            if (d) {
                var e = a.values;
                e.set(b, c);
                e.j["dust." + b] = !0
            } else a.values.set(b, c)
    };
    Ea.prototype.set = function(a, b) {
        this.sc || (!this.values.has(a) && this.parent && this.parent.has(a) ? this.parent.set(a, b) : this.values.set(a, b))
    };
    Ea.prototype.get = function(a) {
        return this.values.has(a) ? this.values.get(a) : this.parent ? this.parent.get(a) : void 0
    };
    Ea.prototype.has = function(a) {
        return !!this.values.has(a) || !(!this.parent || !this.parent.has(a))
    };
    var Ga = function(a) {
        var b = new Ea(a.K, a);
        a.C && (b.C = a.C);
        b.H = a.H;
        b.j = a.j;
        return b
    };
    Ea.prototype.Fd = function() {
        return this.K
    };
    Ea.prototype.Ga = function() {
        this.sc = !0
    };

    function Ha(a, b) {
        for (var c, d = l(b), e = d.next(); !e.done && !(c = Ia(a, e.value), c instanceof za); e = d.next());
        return c
    }

    function Ia(a, b) {
        try {
            var c = l(b),
                d = c.next().value,
                e = ma(c),
                f = a.get(String(d));
            if (!f || typeof f.invoke !== "function") throw Error("Attempting to execute non-function " + b[0] + ".");
            return f.invoke.apply(f, [a].concat(na(e)))
        } catch (k) {
            var g = a.C;
            g && g(k, b.context ? {
                id: b[0],
                line: b.context.line
            } : null);
            throw k;
        }
    };
    var Ja = function() {
        this.C = new Ca;
        this.j = new Ea(this.C)
    };
    h = Ja.prototype;
    h.Fd = function() {
        return this.C
    };
    h.execute = function(a) {
        return this.ni([a].concat(na(xa.apply(1, arguments))))
    };
    h.ni = function() {
        for (var a, b = l(xa.apply(0, arguments)), c = b.next(); !c.done; c = b.next()) a = Ia(this.j, c.value);
        return a
    };
    h.jl = function(a) {
        var b = xa.apply(1, arguments),
            c = Ga(this.j);
        c.j = a;
        for (var d, e = l(b), f = e.next(); !f.done; f = e.next()) d = Ia(c, f.value);
        return d
    };
    h.Ga = function() {
        this.j.Ga()
    };
    var Ka = function() {
        this.na = !1;
        this.T = new Aa
    };
    h = Ka.prototype;
    h.get = function(a) {
        return this.T.get(a)
    };
    h.set = function(a, b) {
        this.na || this.T.set(a, b)
    };
    h.has = function(a) {
        return this.T.has(a)
    };
    h.remove = function(a) {
        this.na || this.T.remove(a)
    };
    h.ka = function() {
        return this.T.ka()
    };
    h.Vb = function() {
        return this.T.Vb()
    };
    h.Cb = function() {
        return this.T.Cb()
    };
    h.Ga = function() {
        this.na = !0
    };
    h.sc = function() {
        return this.na
    };

    function La() {
        for (var a = Na, b = {}, c = 0; c < a.length; ++c) b[a[c]] = c;
        return b
    }

    function Oa() {
        var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        a += a.toLowerCase() + "0123456789-_";
        return a + "."
    }
    var Na, Pa;

    function Qa(a) {
        Na = Na || Oa();
        Pa = Pa || La();
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
            b.push(Na[m], Na[n], Na[p], Na[q])
        }
        return b.join("")
    }

    function Ra(a) {
        function b(m) {
            for (; d < a.length;) {
                var n = a.charAt(d++),
                    p = Pa[n];
                if (p != null) return p;
                if (!/^[\s\xa0]*$/.test(n)) throw Error("Unknown base64 encoding at char: " + n);
            }
            return m
        }
        Na = Na || Oa();
        Pa = Pa || La();
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
    var Ta = {};

    function Ua(a, b) {
        Ta[a] = Ta[a] || [];
        Ta[a][b] = !0
    }

    function Va(a) {
        var b = Ta[a];
        if (!b || b.length === 0) return "";
        for (var c = [], d = 0, e = 0; e < b.length; e++) e % 8 === 0 && e > 0 && (c.push(String.fromCharCode(d)), d = 0), b[e] && (d |= 1 << e % 8);
        d > 0 && c.push(String.fromCharCode(d));
        return Qa(c.join("")).replace(/\.+$/, "")
    }

    function Wa() {
        for (var a = [], b = Ta.fdr || [], c = 0; c < b.length; c++) b[c] && a.push(c);
        return a.length > 0 ? a : void 0
    };
    var Xa = [],
        Ya = {};

    function Za(a) {
        return Xa[a] === void 0 ? !1 : Xa[a]
    };

    function $a() {}

    function ab(a) {
        return typeof a === "function"
    }

    function z(a) {
        return typeof a === "string"
    }

    function bb(a) {
        return typeof a === "number" && !isNaN(a)
    }

    function cb(a) {
        return Array.isArray(a) ? a : [a]
    }

    function db(a, b) {
        if (a && Array.isArray(a))
            for (var c = 0; c < a.length; c++)
                if (a[c] && b(a[c])) return a[c]
    }

    function eb(a, b) {
        if (!bb(a) || !bb(b) || a > b) a = 0, b = 2147483647;
        return Math.floor(Math.random() * (b - a + 1) + a)
    }

    function gb(a, b) {
        for (var c = new hb, d = 0; d < a.length; d++) c.set(a[d], !0);
        for (var e = 0; e < b.length; e++)
            if (c.get(b[e])) return !0;
        return !1
    }

    function ib(a, b) {
        for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(c, a[c])
    }

    function jb(a) {
        return !!a && (Object.prototype.toString.call(a) === "[object Arguments]" || Object.prototype.hasOwnProperty.call(a, "callee"))
    }

    function kb(a) {
        return Math.round(Number(a)) || 0
    }

    function lb(a) {
        return "false" === String(a).toLowerCase() ? !1 : !!a
    }

    function mb(a) {
        var b = [];
        if (Array.isArray(a))
            for (var c = 0; c < a.length; c++) b.push(String(a[c]));
        return b
    }

    function nb(a) {
        return a ? a.replace(/^\s+|\s+$/g, "") : ""
    }

    function ob() {
        return new Date(Date.now())
    }

    function pb() {
        return ob().getTime()
    }
    var hb = function() {
        this.prefix = "gtm.";
        this.values = {}
    };
    hb.prototype.set = function(a, b) {
        this.values[this.prefix + a] = b
    };
    hb.prototype.get = function(a) {
        return this.values[this.prefix + a]
    };
    hb.prototype.contains = function(a) {
        return this.get(a) !== void 0
    };

    function qb(a, b, c) {
        return a && a.hasOwnProperty(b) ? a[b] : c
    }

    function rb(a) {
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

    function sb(a, b) {
        for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c])
    }

    function tb(a, b) {
        for (var c = [], d = 0; d < a.length; d++) c.push(a[d]), c.push.apply(c, b[a[d]] || []);
        return c
    }

    function ub(a, b) {
        return a.length >= b.length && a.substring(0, b.length) === b
    }

    function vb(a, b) {
        return a.length >= b.length && a.substring(a.length - b.length, a.length) === b
    }

    function wb(a, b) {
        var c = C;
        b = b || [];
        for (var d = c, e = 0; e < a.length - 1; e++) {
            if (!d.hasOwnProperty(a[e])) return;
            d = d[a[e]];
            if (b.indexOf(d) >= 0) return
        }
        return d
    }

    function xb(a, b) {
        for (var c = {}, d = c, e = a.split("."), f = 0; f < e.length - 1; f++) d = d[e[f]] = {};
        d[e[e.length - 1]] = b;
        return c
    }
    var yb = /^\w{1,9}$/;

    function zb(a, b) {
        a = a || {};
        b = b || ",";
        var c = [];
        ib(a, function(d, e) {
            yb.test(d) && e && c.push(d)
        });
        return c.join(b)
    }

    function Ab(a, b) {
        function c() {
            e && ++d === b && (e(), e = null, c.done = !0)
        }
        var d = 0,
            e = a;
        c.done = !1;
        return c
    }

    function Bb(a) {
        if (!a) return a;
        var b = a;
        if (Za(3)) try {
            b = decodeURIComponent(a)
        } catch (d) {}
        var c = b.split(",");
        return c.length === 2 && c[0] === c[1] ? c[0] : a
    }

    function Cb(a, b, c) {
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
    var Db = globalThis.trustedTypes,
        Eb;

    function Fb() {
        var a = null;
        if (!Db) return a;
        try {
            var b = function(c) {
                return c
            };
            a = Db.createPolicy("goog#html", {
                createHTML: b,
                createScript: b,
                createScriptURL: b
            })
        } catch (c) {}
        return a
    }

    function Gb() {
        Eb === void 0 && (Eb = Fb());
        return Eb
    };
    var Hb = function(a) {
        this.j = a
    };
    Hb.prototype.toString = function() {
        return this.j + ""
    };

    function Ib(a) {
        var b = a,
            c = Gb();
        return new Hb(c ? c.createScriptURL(b) : b)
    }

    function Jb(a) {
        if (a instanceof Hb) return a.j;
        throw Error("");
    };
    var Kb = ka([""]),
        Lb = ja(["\x00"], ["\\0"]),
        Mb = ja(["\n"], ["\\n"]),
        Nb = ja(["\x00"], ["\\u0000"]);

    function Ob(a) {
        return a.toString().indexOf("`") === -1
    }
    Ob(function(a) {
        return a(Kb)
    }) || Ob(function(a) {
        return a(Lb)
    }) || Ob(function(a) {
        return a(Mb)
    }) || Ob(function(a) {
        return a(Nb)
    });
    var Pb = function(a) {
        this.j = a
    };
    Pb.prototype.toString = function() {
        return this.j
    };
    var Qb = new Pb("about:invalid#zClosurez");
    var Rb = function(a) {
        this.Cm = a
    };

    function Sb(a) {
        return new Rb(function(b) {
            return b.substr(0, a.length + 1).toLowerCase() === a + ":"
        })
    }
    var Tb = [Sb("data"), Sb("http"), Sb("https"), Sb("mailto"), Sb("ftp"), new Rb(function(a) {
        return /^[^:]*([/?#]|$)/.test(a)
    })];

    function Ub(a, b) {
        b = b === void 0 ? Tb : b;
        if (a instanceof Pb) return a;
        for (var c = 0; c < b.length; ++c) {
            var d = b[c];
            if (d instanceof Rb && d.Cm(a)) return new Pb(a)
        }
    }

    function Vb(a) {
        var b;
        b = b === void 0 ? Tb : b;
        return Ub(a, b) || Qb
    }
    var Wb = /^\s*(?!javascript:)(?:[\w+.-]+:|[^:/?#]*(?:[/?#]|$))/i;

    function Xb(a) {
        var b;
        if (a instanceof Pb)
            if (a instanceof Pb) b = a.j;
            else throw Error("");
        else b = Wb.test(a) ? a : void 0;
        return b
    };
    var Zb = function() {
        this.j = Yb[0].toLowerCase()
    };
    Zb.prototype.toString = function() {
        return this.j
    };
    var $b = function(a) {
        this.j = a
    };
    $b.prototype.toString = function() {
        return this.j + ""
    };

    function ac(a, b) {
        var c = [new Zb];
        if (c.length === 0) throw Error("");
        var d = c.map(function(f) {
                var g;
                if (f instanceof Zb) g = f.j;
                else throw Error("");
                return g
            }),
            e = b.toLowerCase();
        if (d.every(function(f) {
                return e.indexOf(f) !== 0
            })) throw Error('Attribute "' + b + '" does not match any of the allowed prefixes.');
        a.setAttribute(b, "true")
    };

    function bc(a, b) {
        var c = Xb(b);
        c !== void 0 && (a.action = c)
    };
    var cc = Array.prototype.indexOf ? function(a, b) {
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

    function dc(a) {
        return a === null ? "null" : a === void 0 ? "undefined" : a
    };
    var C = window,
        ec = window.history,
        E = document,
        fc = navigator;

    function gc() {
        var a;
        try {
            a = fc.serviceWorker
        } catch (b) {
            return
        }
        return a
    }
    var hc = E.currentScript,
        ic = hc && hc.src;

    function jc(a, b) {
        var c = C[a];
        C[a] = c === void 0 ? b : c;
        return C[a]
    }

    function kc(a) {
        return (fc.userAgent || "").indexOf(a) !== -1
    }
    var lc = {
            async: 1,
            nonce: 1,
            onerror: 1,
            onload: 1,
            src: 1,
            type: 1
        },
        mc = {
            onload: 1,
            src: 1,
            width: 1,
            height: 1,
            style: 1
        };

    function nc(a, b, c) {
        b && ib(b, function(d, e) {
            d = d.toLowerCase();
            c.hasOwnProperty(d) || a.setAttribute(d, e)
        })
    }

    function oc(a, b, c, d, e) {
        var f = E.createElement("script");
        nc(f, d, lc);
        f.type = "text/javascript";
        f.async = d && d.async === !1 ? !1 : !0;
        var g;
        g = Ib(dc(a));
        f.src = Jb(g);
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

    function pc() {
        if (ic) {
            var a = ic.toLowerCase();
            if (a.indexOf("https://") === 0) return 2;
            if (a.indexOf("http://") === 0) return 3
        }
        return 1
    }

    function qc(a, b, c, d, e) {
        var f;
        f = f === void 0 ? !0 : f;
        var g = e,
            k = !1;
        g || (g = E.createElement("iframe"), k = !0);
        nc(g, c, mc);
        d && ib(d, function(n, p) {
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
    var rc = function(a, b, c, d) {
        var e = new Image(1, 1);
        nc(e, d, {});
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

    function sc(a, b, c, d) {
        rc(a, b, c, d)
    }

    function tc(a, b, c, d) {
        a.addEventListener ? a.addEventListener(b, c, !!d) : a.attachEvent && a.attachEvent("on" + b, c)
    }

    function uc(a, b, c) {
        a.removeEventListener ? a.removeEventListener(b, c, !1) : a.detachEvent && a.detachEvent("on" + b, c)
    }

    function G(a) {
        C.setTimeout(a, 0)
    }

    function vc(a, b) {
        return a && b && a.attributes && a.attributes[b] ? a.attributes[b].value : null
    }

    function wc(a) {
        var b = a.innerText || a.textContent || "";
        b && b !== " " && (b = b.replace(/^[\s\xa0]+/g, ""), b = b.replace(/[\s\xa0]+$/g, ""));
        b && (b = b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g, " "));
        return b
    }

    function xc(a) {
        var b = E.createElement("div"),
            c = b,
            d, e = dc("A<div>" + a + "</div>"),
            f = Gb();
        d = new $b(f ? f.createHTML(e) : e);
        if (c.nodeType === 1 && /^(script|style)$/i.test(c.tagName)) throw Error("");
        var g;
        if (d instanceof $b) g = d.j;
        else throw Error("");
        c.innerHTML = g;
        b = b.lastChild;
        for (var k = []; b && b.firstChild;) k.push(b.removeChild(b.firstChild));
        return k
    }

    function yc(a, b, c) {
        c = c || 100;
        for (var d = {}, e = 0; e < b.length; e++) d[b[e]] = !0;
        for (var f = a, g = 0; f && g <= c; g++) {
            if (d[String(f.tagName).toLowerCase()]) return f;
            f = f.parentElement
        }
        return null
    }

    function zc(a) {
        var b;
        try {
            b = fc.sendBeacon && fc.sendBeacon(a)
        } catch (c) {
            Ua("TAGGING", 15)
        }
        b || rc(a)
    }

    function Ac(a, b) {
        try {
            return fc.sendBeacon(a, b)
        } catch (c) {
            Ua("TAGGING", 15)
        }
        return !1
    }
    var Bc = {
        cache: "no-store",
        credentials: "include",
        keepalive: !0,
        method: "POST",
        mode: "no-cors",
        redirect: "follow"
    };

    function Cc(a, b, c) {
        if (Dc()) {
            var d = Object.assign({}, Bc);
            b && (d.body = b);
            c && (c.attributionReporting && (d.attributionReporting = c.attributionReporting), c.browsingTopics && (d.browsingTopics = c.browsingTopics));
            try {
                var e = C.fetch(a, d);
                e && e.catch($a);
                return !0
            } catch (f) {}
        }
        if (c && c.noFallback) return !1;
        if (b) return Ac(a, b);
        zc(a);
        return !0
    }

    function Dc() {
        return typeof C.fetch === "function"
    }

    function Ec(a, b) {
        var c = a[b];
        c && typeof c.animVal === "string" && (c = c.animVal);
        return c
    }

    function Fc() {
        var a = C.performance;
        if (a && ab(a.now)) return a.now()
    }

    function Hc() {
        return C.performance || void 0
    };

    function Ic(a, b) {
        return this.evaluate(a) && this.evaluate(b)
    }

    function Jc(a, b) {
        return this.evaluate(a) === this.evaluate(b)
    }

    function Kc(a, b) {
        return this.evaluate(a) || this.evaluate(b)
    }

    function Lc(a, b) {
        a = this.evaluate(a);
        b = this.evaluate(b);
        return String(a).indexOf(String(b)) > -1
    }

    function Mc(a, b) {
        var c = String(this.evaluate(a)),
            d = String(this.evaluate(b));
        return c.substring(0, d.length) === d
    }

    function Nc(a, b) {
        a = this.evaluate(a);
        b = this.evaluate(b);
        switch (a) {
            case "pageLocation":
                var c = C.location.href;
                b instanceof Ka && b.get("stripProtocol") && (c = c.replace(/^https?:\/\//, ""));
                return c
        }
    };
    /*
     jQuery (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license.
    */
    var Oc = /\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,
        Pc = function(a) {
            if (a == null) return String(a);
            var b = Oc.exec(Object.prototype.toString.call(Object(a)));
            return b ? b[1].toLowerCase() : "object"
        },
        Qc = function(a, b) {
            return Object.prototype.hasOwnProperty.call(Object(a), b)
        },
        Rc = function(a) {
            if (!a || Pc(a) != "object" || a.nodeType || a == a.window) return !1;
            try {
                if (a.constructor && !Qc(a, "constructor") && !Qc(a.constructor.prototype, "isPrototypeOf")) return !1
            } catch (c) {
                return !1
            }
            for (var b in a);
            return b === void 0 ||
                Qc(a, b)
        },
        Sc = function(a, b) {
            var c = b || (Pc(a) == "array" ? [] : {}),
                d;
            for (d in a)
                if (Qc(a, d)) {
                    var e = a[d];
                    Pc(e) == "array" ? (Pc(c[d]) != "array" && (c[d] = []), c[d] = Sc(e, c[d])) : Rc(e) ? (Rc(c[d]) || (c[d] = {}), c[d] = Sc(e, c[d])) : c[d] = e
                } return c
        };

    function Tc(a) {
        if (a == void 0 || Array.isArray(a) || Rc(a)) return !0;
        switch (typeof a) {
            case "boolean":
            case "number":
            case "string":
            case "function":
                return !0
        }
        return !1
    }

    function Uc(a) {
        return typeof a === "number" && a >= 0 && isFinite(a) && a % 1 === 0 || typeof a === "string" && a[0] !== "-" && a === "" + parseInt(a)
    };
    var Vc = function(a) {
        a = a === void 0 ? [] : a;
        this.T = new Aa;
        this.values = [];
        this.na = !1;
        for (var b in a) a.hasOwnProperty(b) && (Uc(b) ? this.values[Number(b)] = a[Number(b)] : this.T.set(b, a[b]))
    };
    h = Vc.prototype;
    h.toString = function(a) {
        if (a && a.indexOf(this) >= 0) return "";
        for (var b = [], c = 0; c < this.values.length; c++) {
            var d = this.values[c];
            d === null || d === void 0 ? b.push("") : d instanceof Vc ? (a = a || [], a.push(this), b.push(d.toString(a)), a.pop()) : b.push(String(d))
        }
        return b.join(",")
    };
    h.set = function(a, b) {
        if (!this.na)
            if (a === "length") {
                if (!Uc(b)) throw Error("RangeError: Length property must be a valid integer.");
                this.values.length = Number(b)
            } else Uc(a) ? this.values[Number(a)] = b : this.T.set(a, b)
    };
    h.get = function(a) {
        return a === "length" ? this.length() : Uc(a) ? this.values[Number(a)] : this.T.get(a)
    };
    h.length = function() {
        return this.values.length
    };
    h.ka = function() {
        for (var a = this.T.ka(), b = 0; b < this.values.length; b++) this.values.hasOwnProperty(b) && a.push(String(b));
        return a
    };
    h.Vb = function() {
        for (var a = this.T.Vb(), b = 0; b < this.values.length; b++) this.values.hasOwnProperty(b) && a.push(this.values[b]);
        return a
    };
    h.Cb = function() {
        for (var a = this.T.Cb(), b = 0; b < this.values.length; b++) this.values.hasOwnProperty(b) && a.push([String(b), this.values[b]]);
        return a
    };
    h.remove = function(a) {
        Uc(a) ? delete this.values[Number(a)] : this.na || this.T.remove(a)
    };
    h.pop = function() {
        return this.values.pop()
    };
    h.push = function() {
        return this.values.push.apply(this.values, na(xa.apply(0, arguments)))
    };
    h.shift = function() {
        return this.values.shift()
    };
    h.splice = function(a, b) {
        var c = xa.apply(2, arguments);
        return b === void 0 && c.length === 0 ? new Vc(this.values.splice(a)) : new Vc(this.values.splice.apply(this.values, [a, b || 0].concat(na(c))))
    };
    h.unshift = function() {
        return this.values.unshift.apply(this.values, na(xa.apply(0, arguments)))
    };
    h.has = function(a) {
        return Uc(a) && this.values.hasOwnProperty(a) || this.T.has(a)
    };
    h.Ga = function() {
        this.na = !0;
        Object.freeze(this.values)
    };
    h.sc = function() {
        return this.na
    };

    function Wc(a) {
        for (var b = [], c = 0; c < a.length(); c++) a.has(c) && (b[c] = a.get(c));
        return b
    };
    var Xc = function(a, b) {
        this.functionName = a;
        this.Ed = b;
        this.T = new Aa;
        this.na = !1
    };
    h = Xc.prototype;
    h.toString = function() {
        return this.functionName
    };
    h.getName = function() {
        return this.functionName
    };
    h.invoke = function(a) {
        return this.Ed.call.apply(this.Ed, [new Yc(this, a)].concat(na(xa.apply(1, arguments))))
    };
    h.nb = function(a) {
        var b = xa.apply(1, arguments);
        try {
            return this.invoke.apply(this, [a].concat(na(b)))
        } catch (c) {}
    };
    h.get = function(a) {
        return this.T.get(a)
    };
    h.set = function(a, b) {
        this.na || this.T.set(a, b)
    };
    h.has = function(a) {
        return this.T.has(a)
    };
    h.remove = function(a) {
        this.na || this.T.remove(a)
    };
    h.ka = function() {
        return this.T.ka()
    };
    h.Vb = function() {
        return this.T.Vb()
    };
    h.Cb = function() {
        return this.T.Cb()
    };
    h.Ga = function() {
        this.na = !0
    };
    h.sc = function() {
        return this.na
    };
    var Yc = function(a, b) {
        this.Ed = a;
        this.D = b
    };
    Yc.prototype.evaluate = function(a) {
        var b = this.D;
        return Array.isArray(a) ? Ia(b, a) : a
    };
    Yc.prototype.getName = function() {
        return this.Ed.getName()
    };
    Yc.prototype.Fd = function() {
        return this.D.Fd()
    };
    var Zc = function() {
        this.map = new Map
    };
    Zc.prototype.set = function(a, b) {
        this.map.set(a, b)
    };
    Zc.prototype.get = function(a) {
        return this.map.get(a)
    };
    var $c = function() {
        this.keys = [];
        this.values = []
    };
    $c.prototype.set = function(a, b) {
        this.keys.push(a);
        this.values.push(b)
    };
    $c.prototype.get = function(a) {
        var b = this.keys.indexOf(a);
        if (b > -1) return this.values[b]
    };

    function ad() {
        try {
            return Map ? new Zc : new $c
        } catch (a) {
            return new $c
        }
    };
    var bd = function(a) {
        if (a instanceof bd) return a;
        if (Tc(a)) throw Error("Type of given value has an equivalent Pixie type.");
        this.value = a
    };
    bd.prototype.getValue = function() {
        return this.value
    };
    bd.prototype.toString = function() {
        return String(this.value)
    };
    var dd = function(a) {
        this.promise = a;
        this.na = !1;
        this.T = new Aa;
        this.T.set("then", cd(this));
        this.T.set("catch", cd(this, !0));
        this.T.set("finally", cd(this, !1, !0))
    };
    h = dd.prototype;
    h.get = function(a) {
        return this.T.get(a)
    };
    h.set = function(a, b) {
        this.na || this.T.set(a, b)
    };
    h.has = function(a) {
        return this.T.has(a)
    };
    h.remove = function(a) {
        this.na || this.T.remove(a)
    };
    h.ka = function() {
        return this.T.ka()
    };
    h.Vb = function() {
        return this.T.Vb()
    };
    h.Cb = function() {
        return this.T.Cb()
    };
    var cd = function(a, b, c) {
        b = b === void 0 ? !1 : b;
        c = c === void 0 ? !1 : c;
        return new Xc("", function(d, e) {
            b && (e = d, d = void 0);
            c && (e = d);
            d instanceof Xc || (d = void 0);
            e instanceof Xc || (e = void 0);
            var f = Ga(this.D),
                g = function(m) {
                    return function(n) {
                        return c ? (m.invoke(f), a.promise) : m.invoke(f, n)
                    }
                },
                k = a.promise.then(d && g(d), e && g(e));
            return new dd(k)
        })
    };
    dd.prototype.Ga = function() {
        this.na = !0
    };
    dd.prototype.sc = function() {
        return this.na
    };

    function H(a, b, c) {
        var d = ad(),
            e = function(g, k) {
                for (var m = g.ka(), n = 0; n < m.length; n++) k[m[n]] = f(g.get(m[n]))
            },
            f = function(g) {
                var k = d.get(g);
                if (k) return k;
                if (g instanceof Vc) {
                    var m = [];
                    d.set(g, m);
                    for (var n = g.ka(), p = 0; p < n.length; p++) m[n[p]] = f(g.get(n[p]));
                    return m
                }
                if (g instanceof dd) return g.promise;
                if (g instanceof Ka) {
                    var q = {};
                    d.set(g, q);
                    e(g, q);
                    return q
                }
                if (g instanceof Xc) {
                    var r = function() {
                        for (var v = xa.apply(0, arguments), t = 0; t < v.length; t++) v[t] = ed(v[t], b, c);
                        var w = new Ea(b ? b.Fd() : new Ca);
                        b && (w.j = b.j);
                        return f(g.invoke.apply(g,
                            [w].concat(na(v))))
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
                if (g instanceof bd && u) return g.getValue();
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

    function ed(a, b, c) {
        var d = ad(),
            e = function(g, k) {
                for (var m in g) g.hasOwnProperty(m) && k.set(m, f(g[m]))
            },
            f = function(g) {
                var k = d.get(g);
                if (k) return k;
                if (Array.isArray(g) || jb(g)) {
                    var m = new Vc([]);
                    d.set(g, m);
                    for (var n in g) g.hasOwnProperty(n) && m.set(n, f(g[n]));
                    return m
                }
                if (Rc(g)) {
                    var p = new Ka;
                    d.set(g, p);
                    e(g, p);
                    return p
                }
                if (typeof g === "function") {
                    var q = new Xc("", function() {
                        for (var x = xa.apply(0, arguments), y = 0; y < x.length; y++) x[y] = H(this.evaluate(x[y]), b, c);
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
                if (g !== void 0 && w) return new bd(g)
            };
        return f(a)
    };

    function fd() {
        var a = !1;
        return a
    };
    var gd = {
        supportedMethods: "concat every filter forEach hasOwnProperty indexOf join lastIndexOf map pop push reduce reduceRight reverse shift slice some sort splice unshift toString".split(" "),
        concat: function(a) {
            for (var b = [], c = 0; c < this.length(); c++) b.push(this.get(c));
            for (var d = 1; d < arguments.length; d++)
                if (arguments[d] instanceof Vc)
                    for (var e = arguments[d], f = 0; f < e.length(); f++) b.push(e.get(f));
                else b.push(arguments[d]);
            return new Vc(b)
        },
        every: function(a, b) {
            for (var c = this.length(), d = 0; d < this.length() &&
                d < c; d++)
                if (this.has(d) && !b.invoke(a, this.get(d), d, this)) return !1;
            return !0
        },
        filter: function(a, b) {
            for (var c = this.length(), d = [], e = 0; e < this.length() && e < c; e++) this.has(e) && b.invoke(a, this.get(e), e, this) && d.push(this.get(e));
            return new Vc(d)
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
            return new Vc(d)
        },
        pop: function() {
            return this.pop()
        },
        push: function(a) {
            return this.push.apply(this,
                na(xa.apply(1, arguments)))
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
            for (var a = Wc(this), b = a.length - 1, c = 0; b >= 0; b--, c++) a.hasOwnProperty(b) ? this.set(c, a[b]) : this.remove(c);
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
            return new Vc(e)
        },
        some: function(a, b) {
            for (var c = this.length(), d = 0; d < this.length() && d < c; d++)
                if (this.has(d) && b.invoke(a, this.get(d), d, this)) return !0;
            return !1
        },
        sort: function(a, b) {
            var c = Wc(this);
            b === void 0 ? c.sort() : c.sort(function(e, f) {
                return Number(b.invoke(a, e, f))
            });
            for (var d = 0; d < c.length; d++) c.hasOwnProperty(d) ? this.set(d, c[d]) : this.remove(d);
            return this
        },
        splice: function(a, b, c) {
            return this.splice.apply(this,
                [b, c].concat(na(xa.apply(3, arguments))))
        },
        toString: function() {
            return this.toString()
        },
        unshift: function(a) {
            return this.unshift.apply(this, na(xa.apply(1, arguments)))
        }
    };
    var hd = function(a) {
        var b;
        b = Error.call(this, a);
        this.message = b.message;
        "stack" in b && (this.stack = b.stack)
    };
    wa(hd, Error);
    var id = {
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
        jd = new za("break"),
        kd = new za("continue");

    function ld(a, b) {
        return this.evaluate(a) + this.evaluate(b)
    }

    function md(a, b) {
        return this.evaluate(a) && this.evaluate(b)
    }

    function nd(a, b, c) {
        a = this.evaluate(a);
        b = this.evaluate(b);
        c = this.evaluate(c);
        if (!(c instanceof Vc)) throw Error("Error: Non-List argument given to Apply instruction.");
        if (a === null || a === void 0) {
            var d = "TypeError: Can't read property " + b + " of " + a + ".";
            if (fd()) throw new hd(d);
            throw Error(d);
        }
        var e = typeof a === "number";
        if (typeof a === "boolean" || e) {
            if (b === "toString") {
                if (e && c.length()) {
                    var f = H(c.get(0));
                    try {
                        return a.toString(f)
                    } catch (y) {}
                }
                return a.toString()
            }
            var g = "TypeError: " + a + "." + b + " is not a function.";
            if (fd()) throw new hd(g);
            throw Error(g);
        }
        if (typeof a === "string") {
            if (id.hasOwnProperty(b)) {
                var k = 2;
                k = 1;
                var m = H(c, void 0, k);
                return ed(a[b].apply(a, m), this.D)
            }
            var n = "TypeError: " + b + " is not a function";
            if (fd()) throw new hd(n);
            throw Error(n);
        }
        if (a instanceof Vc) {
            if (a.has(b)) {
                var p = a.get(String(b));
                if (p instanceof Xc) {
                    var q = Wc(c);
                    return p.invoke.apply(p, [this.D].concat(na(q)))
                }
                var r =
                    "TypeError: " + b + " is not a function";
                if (fd()) throw new hd(r);
                throw Error(r);
            }
            if (gd.supportedMethods.indexOf(b) >= 0) {
                var u = Wc(c);
                return gd[b].call.apply(gd[b], [a, this.D].concat(na(u)))
            }
        }
        if (a instanceof Xc || a instanceof Ka || a instanceof dd) {
            if (a.has(b)) {
                var v = a.get(b);
                if (v instanceof Xc) {
                    var t = Wc(c);
                    return v.invoke.apply(v, [this.D].concat(na(t)))
                }
                var w = "TypeError: " + b + " is not a function";
                if (fd()) throw new hd(w);
                throw Error(w);
            }
            if (b === "toString") return a instanceof Xc ? a.getName() : a.toString();
            if (b ===
                "hasOwnProperty") return a.has(c.get(0))
        }
        if (a instanceof bd && b === "toString") return a.toString();
        var x = "TypeError: Object has no '" + b + "' property.";
        if (fd()) throw new hd(x);
        throw Error(x);
    }

    function od(a, b) {
        a = this.evaluate(a);
        if (typeof a !== "string") throw Error("Invalid key name given for assignment.");
        var c = this.D;
        if (!c.has(a)) throw Error("Attempting to assign to undefined value " + b);
        var d = this.evaluate(b);
        c.set(a, d);
        return d
    }

    function pd() {
        var a = xa.apply(0, arguments),
            b = Ga(this.D),
            c = Ha(b, a);
        if (c instanceof za) return c
    }

    function qd() {
        return jd
    }

    function rd(a) {
        for (var b = this.evaluate(a), c = 0; c < b.length; c++) {
            var d = this.evaluate(b[c]);
            if (d instanceof za) return d
        }
    }

    function sd() {
        for (var a = this.D, b = 0; b < arguments.length - 1; b += 2) {
            var c = arguments[b];
            if (typeof c === "string") {
                var d = this.evaluate(arguments[b + 1]);
                Fa(a, c, d, !0)
            }
        }
    }

    function td() {
        return kd
    }

    function ud(a, b) {
        return new za(a, this.evaluate(b))
    }

    function vd(a, b) {
        var c = xa.apply(2, arguments),
            d = new Vc;
        b = this.evaluate(b);
        for (var e = 0; e < b.length; e++) d.push(b[e]);
        var f = [51, a, d].concat(na(c));
        this.D.add(a, this.evaluate(f))
    }

    function wd(a, b) {
        return this.evaluate(a) / this.evaluate(b)
    }

    function xd(a, b) {
        a = this.evaluate(a);
        b = this.evaluate(b);
        var c = a instanceof bd,
            d = b instanceof bd;
        return c || d ? c && d ? a.getValue() === b.getValue() : !1 : a == b
    }

    function yd() {
        for (var a, b = 0; b < arguments.length; b++) a = this.evaluate(arguments[b]);
        return a
    }

    function zd(a, b, c, d) {
        for (var e = 0; e < b(); e++) {
            var f = a(c(e)),
                g = Ha(f, d);
            if (g instanceof za) {
                if (g.type === "break") break;
                if (g.type === "return") return g
            }
        }
    }

    function Ad(a, b, c) {
        if (typeof b === "string") return zd(a, function() {
            return b.length
        }, function(f) {
            return f
        }, c);
        if (b instanceof Ka || b instanceof dd || b instanceof Vc || b instanceof Xc) {
            var d = b.ka(),
                e = d.length;
            return zd(a, function() {
                return e
            }, function(f) {
                return d[f]
            }, c)
        }
    }

    function Bd(a, b, c) {
        a = this.evaluate(a);
        b = this.evaluate(b);
        c = this.evaluate(c);
        var d = this.D;
        return Ad(function(e) {
            d.set(a, e);
            return d
        }, b, c)
    }

    function Cd(a, b, c) {
        a = this.evaluate(a);
        b = this.evaluate(b);
        c = this.evaluate(c);
        var d = this.D;
        return Ad(function(e) {
            var f = Ga(d);
            Fa(f, a, e, !0);
            return f
        }, b, c)
    }

    function Dd(a, b, c) {
        a = this.evaluate(a);
        b = this.evaluate(b);
        c = this.evaluate(c);
        var d = this.D;
        return Ad(function(e) {
            var f = Ga(d);
            f.add(a, e);
            return f
        }, b, c)
    }

    function Ed(a, b, c) {
        a = this.evaluate(a);
        b = this.evaluate(b);
        c = this.evaluate(c);
        var d = this.D;
        return Fd(function(e) {
            d.set(a, e);
            return d
        }, b, c)
    }

    function Gd(a, b, c) {
        a = this.evaluate(a);
        b = this.evaluate(b);
        c = this.evaluate(c);
        var d = this.D;
        return Fd(function(e) {
            var f = Ga(d);
            Fa(f, a, e, !0);
            return f
        }, b, c)
    }

    function Hd(a, b, c) {
        a = this.evaluate(a);
        b = this.evaluate(b);
        c = this.evaluate(c);
        var d = this.D;
        return Fd(function(e) {
            var f = Ga(d);
            f.add(a, e);
            return f
        }, b, c)
    }

    function Fd(a, b, c) {
        if (typeof b === "string") return zd(a, function() {
            return b.length
        }, function(d) {
            return b[d]
        }, c);
        if (b instanceof Vc) return zd(a, function() {
            return b.length()
        }, function(d) {
            return b.get(d)
        }, c);
        if (fd()) throw new hd("The value is not iterable.");
        throw new TypeError("The value is not iterable.");
    }

    function Id(a, b, c, d) {
        function e(p, q) {
            for (var r = 0; r < f.length(); r++) {
                var u = f.get(r);
                q.add(u, p.get(u))
            }
        }
        var f = this.evaluate(a);
        if (!(f instanceof Vc)) throw Error("TypeError: Non-List argument given to ForLet instruction.");
        var g = this.D;
        d = this.evaluate(d);
        var k = Ga(g);
        for (e(g, k); Ia(k, b);) {
            var m = Ha(k, d);
            if (m instanceof za) {
                if (m.type === "break") break;
                if (m.type === "return") return m
            }
            var n = Ga(g);
            e(k, n);
            Ia(n, c);
            k = n
        }
    }

    function Jd(a, b) {
        var c = xa.apply(2, arguments),
            d = this.D,
            e = this.evaluate(b);
        if (!(e instanceof Vc)) throw Error("Error: non-List value given for Fn argument names.");
        return new Xc(a, function() {
            return function() {
                var f = xa.apply(0, arguments),
                    g = Ga(d);
                g.j === void 0 && (g.j = this.D.j);
                for (var k = 0; k < f.length; k++)
                    if (f[k] = this.evaluate(f[k]), f[k] instanceof za) return f[k];
                for (var m = e.get("length"), n = 0; n < m; n++) n < f.length ? g.add(e.get(n), f[n]) : g.add(e.get(n), void 0);
                g.add("arguments", new Vc(f));
                var p = Ha(g, c);
                if (p instanceof za) return p.type === "return" ? p.data : p
            }
        }())
    }

    function Kd(a) {
        a = this.evaluate(a);
        var b = this.D;
        if (Ld && !b.has(a)) throw new ReferenceError(a + " is not defined.");
        return b.get(a)
    }

    function Md(a, b) {
        var c;
        a = this.evaluate(a);
        b = this.evaluate(b);
        if (a === void 0 || a === null) {
            var d = "TypeError: Cannot read properties of " + a + " (reading '" + b + "')";
            if (fd()) throw new hd(d);
            throw Error(d);
        }
        if (a instanceof Ka || a instanceof dd || a instanceof Vc || a instanceof Xc) c = a.get(b);
        else if (typeof a === "string") b === "length" ? c = a.length : Uc(b) && (c = a[b]);
        else if (a instanceof bd) return;
        return c
    }

    function Nd(a, b) {
        return this.evaluate(a) > this.evaluate(b)
    }

    function Od(a, b) {
        return this.evaluate(a) >= this.evaluate(b)
    }

    function Pd(a, b) {
        a = this.evaluate(a);
        b = this.evaluate(b);
        a instanceof bd && (a = a.getValue());
        b instanceof bd && (b = b.getValue());
        return a === b
    }

    function Qd(a, b) {
        return !Pd.call(this, a, b)
    }

    function Rd(a, b, c) {
        var d = [];
        this.evaluate(a) ? d = this.evaluate(b) : c && (d = this.evaluate(c));
        var e = Ha(this.D, d);
        if (e instanceof za) return e
    }
    var Ld = !1;

    function Sd(a, b) {
        return this.evaluate(a) < this.evaluate(b)
    }

    function Td(a, b) {
        return this.evaluate(a) <= this.evaluate(b)
    }

    function Ud() {
        for (var a = new Vc, b = 0; b < arguments.length; b++) {
            var c = this.evaluate(arguments[b]);
            a.push(c)
        }
        return a
    }

    function Vd() {
        for (var a = new Ka, b = 0; b < arguments.length - 1; b += 2) {
            var c = this.evaluate(arguments[b]) + "",
                d = this.evaluate(arguments[b + 1]);
            a.set(c, d)
        }
        return a
    }

    function Wd(a, b) {
        return this.evaluate(a) % this.evaluate(b)
    }

    function Xd(a, b) {
        return this.evaluate(a) * this.evaluate(b)
    }

    function Yd(a) {
        return -this.evaluate(a)
    }

    function Zd(a) {
        return !this.evaluate(a)
    }

    function $d(a, b) {
        return !xd.call(this, a, b)
    }

    function ae() {
        return null
    }

    function be(a, b) {
        return this.evaluate(a) || this.evaluate(b)
    }

    function ce(a, b) {
        var c = this.evaluate(a);
        this.evaluate(b);
        return c
    }

    function ee(a) {
        return this.evaluate(a)
    }

    function fe() {
        return xa.apply(0, arguments)
    }

    function ge(a) {
        return new za("return", this.evaluate(a))
    }

    function he(a, b, c) {
        a = this.evaluate(a);
        b = this.evaluate(b);
        c = this.evaluate(c);
        if (a === null || a === void 0) {
            var d = "TypeError: Can't set property " + b + " of " + a + ".";
            if (fd()) throw new hd(d);
            throw Error(d);
        }(a instanceof Xc || a instanceof Vc || a instanceof Ka) && a.set(String(b), c);
        return c
    }

    function ie(a, b) {
        return this.evaluate(a) - this.evaluate(b)
    }

    function je(a, b, c) {
        a = this.evaluate(a);
        var d = this.evaluate(b),
            e = this.evaluate(c);
        if (!Array.isArray(d) || !Array.isArray(e)) throw Error("Error: Malformed switch instruction.");
        for (var f, g = !1, k = 0; k < d.length; k++)
            if (g || a === this.evaluate(d[k]))
                if (f = this.evaluate(e[k]), f instanceof za) {
                    var m = f.type;
                    if (m === "break") return;
                    if (m === "return" || m === "continue") return f
                } else g = !0;
        if (e.length === d.length + 1 && (f = this.evaluate(e[e.length - 1]), f instanceof za && (f.type === "return" || f.type === "continue"))) return f
    }

    function ke(a, b, c) {
        return this.evaluate(a) ? this.evaluate(b) : this.evaluate(c)
    }

    function le(a) {
        a = this.evaluate(a);
        return a instanceof Xc ? "function" : typeof a
    }

    function me() {
        for (var a = this.D, b = 0; b < arguments.length; b++) {
            var c = arguments[b];
            typeof c !== "string" || a.add(c, void 0)
        }
    }

    function ne(a, b, c, d) {
        var e = this.evaluate(d);
        if (this.evaluate(c)) {
            var f = Ha(this.D, e);
            if (f instanceof za) {
                if (f.type === "break") return;
                if (f.type === "return") return f
            }
        }
        for (; this.evaluate(a);) {
            var g = Ha(this.D, e);
            if (g instanceof za) {
                if (g.type === "break") break;
                if (g.type === "return") return g
            }
            this.evaluate(b)
        }
    }

    function oe(a) {
        return ~Number(this.evaluate(a))
    }

    function pe(a, b) {
        return Number(this.evaluate(a)) << Number(this.evaluate(b))
    }

    function qe(a, b) {
        return Number(this.evaluate(a)) >> Number(this.evaluate(b))
    }

    function re(a, b) {
        return Number(this.evaluate(a)) >>> Number(this.evaluate(b))
    }

    function se(a, b) {
        return Number(this.evaluate(a)) & Number(this.evaluate(b))
    }

    function te(a, b) {
        return Number(this.evaluate(a)) ^ Number(this.evaluate(b))
    }

    function ue(a, b) {
        return Number(this.evaluate(a)) | Number(this.evaluate(b))
    }

    function ve() {}

    function we(a, b, c, d, e) {
        var f = !0;
        try {
            var g = this.evaluate(c);
            if (g instanceof za) return g
        } catch (r) {
            if (!(r instanceof hd && a)) throw f = r instanceof hd, r;
            var k = Ga(this.D),
                m = new bd(r);
            k.add(b, m);
            var n = this.evaluate(d),
                p = Ha(k, n);
            if (p instanceof za) return p
        } finally {
            if (f && e !== void 0) {
                var q = this.evaluate(e);
                if (q instanceof za) return q
            }
        }
    };
    var ye = function() {
        this.j = new Ja;
        xe(this)
    };
    ye.prototype.execute = function(a) {
        return this.j.ni(a)
    };
    var xe = function(a) {
        var b = function(c, d) {
            var e = new Xc(String(c), d);
            e.Ga();
            a.j.j.set(String(c), e)
        };
        b("map", Vd);
        b("and", Ic);
        b("contains", Lc);
        b("equals", Jc);
        b("or", Kc);
        b("startsWith", Mc);
        b("variable", Nc)
    };
    var Ae = function() {
        this.C = !1;
        this.j = new Ja;
        ze(this);
        this.C = !0
    };
    Ae.prototype.execute = function(a) {
        return Be(this.j.ni(a))
    };
    var Ce = function(a, b, c) {
        return Be(a.j.jl(b, c))
    };
    Ae.prototype.Ga = function() {
        this.j.Ga()
    };
    var ze = function(a) {
        var b = function(c, d) {
            var e = String(c),
                f = new Xc(e, d);
            f.Ga();
            a.j.j.set(e, f)
        };
        b(0, ld);
        b(1, md);
        b(2, nd);
        b(3, od);
        b(56, se);
        b(57, pe);
        b(58, oe);
        b(59, ue);
        b(60, qe);
        b(61, re);
        b(62, te);
        b(53, pd);
        b(4, qd);
        b(5, rd);
        b(52, sd);
        b(6, td);
        b(49, ud);
        b(7, Ud);
        b(8, Vd);
        b(9, rd);
        b(50, vd);
        b(10, wd);
        b(12, xd);
        b(13, yd);
        b(51, Jd);
        b(47, Bd);
        b(54, Cd);
        b(55, Dd);
        b(63, Id);
        b(64, Ed);
        b(65, Gd);
        b(66, Hd);
        b(15, Kd);
        b(16, Md);
        b(17, Md);
        b(18, Nd);
        b(19, Od);
        b(20, Pd);
        b(21, Qd);
        b(22, Rd);
        b(23, Sd);
        b(24, Td);
        b(25, Wd);
        b(26, Xd);
        b(27, Yd);
        b(28, Zd);
        b(29,
            $d);
        b(45, ae);
        b(30, be);
        b(32, ce);
        b(33, ce);
        b(34, ee);
        b(35, ee);
        b(46, fe);
        b(36, ge);
        b(43, he);
        b(37, ie);
        b(38, je);
        b(39, ke);
        b(67, we);
        b(40, le);
        b(44, ve);
        b(41, me);
        b(42, ne)
    };
    Ae.prototype.Fd = function() {
        return this.j.Fd()
    };

    function Be(a) {
        if (a instanceof za || a instanceof Xc || a instanceof Vc || a instanceof Ka || a instanceof dd || a instanceof bd || a === null || a === void 0 || typeof a === "string" || typeof a === "number" || typeof a === "boolean") return a
    };
    var De = function(a) {
        this.message = a
    };

    function Ee(a) {
        var b = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [a];
        return b === void 0 ? new De("Value " + a + " can not be encoded in web-safe base64 dictionary.") : b
    };

    function Fe(a) {
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
    var Ge = /^[1-9a-zA-Z_-][1-9a-c][1-9a-v]\d$/;

    function He(a, b) {
        for (var c = "", d = !0; a > 7;) {
            var e = a & 31;
            a >>= 5;
            d ? d = !1 : e |= 32;
            c = "" + Ee(e) + c
        }
        a <<= 2;
        d || (a |= 32);
        return c = "" + Ee(a | b) + c
    };
    var Ie = function() {
        function a(b) {
            return {
                toString: function() {
                    return b
                }
            }
        }
        return {
            Hk: a("consent"),
            zi: a("convert_case_to"),
            Ai: a("convert_false_to"),
            Bi: a("convert_null_to"),
            Ci: a("convert_true_to"),
            Di: a("convert_undefined_to"),
            zn: a("debug_mode_metadata"),
            oa: a("function"),
            rh: a("instance_name"),
            nl: a("live_only"),
            ol: a("malware_disabled"),
            METADATA: a("metadata"),
            rl: a("original_activity_id"),
            Jn: a("original_vendor_template_id"),
            In: a("once_on_load"),
            ql: a("once_per_event"),
            Gj: a("once_per_load"),
            Ln: a("priority_override"),
            Mn: a("respected_consent_types"),
            Oj: a("setup_tags"),
            Fe: a("tag_id"),
            Tj: a("teardown_tags")
        }
    }();
    var ef;
    var ff = [],
        gf = [],
        hf = [],
        jf = [],
        kf = [],
        lf = {},
        mf, nf;

    function of(a) {
        nf = nf || a
    }

    function pf(a) {}
    var qf, rf = [],
        sf = [];

    function tf(a, b) {
        var c = {};
        c[Ie.oa] = "__" + a;
        for (var d in b) b.hasOwnProperty(d) && (c["vtp_" + d] = b[d]);
        return c
    }

    function uf(a, b, c) {
        try {
            return mf(vf(a, b, c))
        } catch (d) {
            JSON.stringify(a)
        }
        return 2
    }

    function wf(a) {
        var b = a[Ie.oa];
        if (!b) throw Error("Error: No function name given for function call.");
        return !!lf[b]
    }
    var vf = function(a, b, c) {
            c = c || [];
            var d = {},
                e;
            
            for (e in a) a.hasOwnProperty(e) && (d[e] = xf(a[e], b, c));
            return d
        },
        xf = function(a, b, c) {
            
            if (Array.isArray(a)) {
                var d;
                switch (a[0]) {
                    case "function_id":
                        return a[1];
                    case "list":
                        d = [];
                        for (var e = 1; e < a.length; e++) d.push(xf(a[e], b, c));
                        return d;
                    case "macro":
                        var f = a[1];
                        if (c[f]) return;
                        var g = ff[f];
                        if (!g || b.isBlocked(g)) return;
                        c[f] = !0;
                        var k = String(g[Ie.rh]);
                        try {
                            var m = vf(g, b, c);
                            m.vtp_gtmEventId = b.id;
                            b.priorityId && (m.vtp_gtmPriorityId = b.priorityId);
                            d = yf(m, {
                                event: b,
                                index: f,
                                type: 2,
                                name: k
                            });
                            qf && (d = qf.Hl(d, m))
                        } catch (y) {
                            b.logMacroError && b.logMacroError(y, Number(f), k), d = !1
                        }
                        c[f] = !1;
                        return d;
                    case "map":
                        d = {};
                        for (var n = 1; n < a.length; n += 2) d[xf(a[n], b, c)] = xf(a[n + 1], b, c);
                        return d;
                    case "template":
                        d = [];
                        for (var p = !1, q = 1; q < a.length; q++) {
                            var r = xf(a[q], b, c);
                            nf && (p = p || nf.zm(r));
                            d.push(r)
                        }
                        return nf && p ? nf.Ml(d) : d.join("");
                    case "escape":
                        d = xf(a[1], b, c);
                        if (nf && Array.isArray(a[1]) && a[1][0] === "macro" && nf.Am(a)) return nf.Tm(d);
                        d = String(d);
                        for (var u = 2; u < a.length; u++) Qe[a[u]] && (d = Qe[a[u]](d));
                        return d;
                    case "tag":
                        var v = a[1];
                        if (!jf[v]) throw Error("Unable to resolve tag reference " + v + ".");
                        return {
                            Zj: a[2], index: v
                        };
                    case "zb":
                        var t = {
                            arg0: a[2],
                            arg1: a[3],
                            ignore_case: a[5]
                        };
                        t[Ie.oa] = a[1];
                        var w = uf(t, b, c),
                            x = !!a[4];
                        return x || w !== 2 ? x !== (w === 1) : null;
                    default:
                        throw Error("Attempting to expand unknown Value type: " + a[0] + ".");
                }
            }
            return a
        },
        yf = function(a, b) {
            var c = a[Ie.oa],
                d = b && b.event;
            if (!c) throw Error("Error: No function name given for function call.");
            var e = lf[c],
                f = b && b.type === 2 && (d == null ? void 0 : d.reportMacroDiscrepancy) &&
                e && rf.indexOf(c) !== -1,
                g = {},
                k = {},
                m;
            for (m in a) a.hasOwnProperty(m) && ub(m, "vtp_") && (e && (g[m] = a[m]), !e || f) && (k[m.substring(4)] = a[m]);
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
                                    r = ff[q];
                                    break;
                                case 1:
                                    r = jf[q];
                                    break;
                                default:
                                    n = "";
                                    break a
                            }
                            var u = r && r[Ie.rh];
                            n = u ? String(u) : ""
                        }
                    }
                    b.name = n
                }
                e && (g.vtp_gtmEntityIndex = b.index, g.vtp_gtmEntityName = b.name)
            }
            var v, t, w;
            if (f && sf.indexOf(c) === -1) {
                sf.push(c);
                var x = pb();
                v = e(g);
                var y = pb() - x,
                    A = pb();
                t = ef(c, k, b);
                w = y - (pb() - A)
            } else if (e && (v = e(g)), !e || f) t = ef(c, k, b);
            f && d && (d.reportMacroDiscrepancy(d.id, c, void 0, !0), Tc(v) ? (Array.isArray(v) ? Array.isArray(t) : Rc(v) ? Rc(t) : typeof v === "function" ? typeof t === "function" : v === t) || d.reportMacroDiscrepancy(d.id, c) : v !== t && d.reportMacroDiscrepancy(d.id, c), w !== void 0 && d.reportMacroDiscrepancy(d.id, c, w));
            return e ? v : t
        };
    var zf = function(a, b, c) {
        var d;
        d = Error.call(this, c);
        this.message = d.message;
        "stack" in d && (this.stack = d.stack);
        this.permissionId = a;
        this.parameters = b;
        this.name = "PermissionError"
    };
    wa(zf, Error);
    zf.prototype.getMessage = function() {
        return this.message
    };

    function Af(a, b) {
        if (Array.isArray(a)) {
            Object.defineProperty(a, "context", {
                value: {
                    line: b[0]
                }
            });
            for (var c = 1; c < a.length; c++) Af(a[c], b[c])
        }
    };
    var Bf = function(a, b) {
        var c;
        c = Error.call(this, "Wrapped error for Dust debugging. Original error message: " + a.message);
        this.message = c.message;
        "stack" in c && (this.stack = c.stack);
        this.Nm = a;
        this.j = [];
        this.C = b
    };
    wa(Bf, Error);

    function Cf() {
        return function(a, b) {
            a instanceof Bf || (a = new Bf(a, Df));
            b && a instanceof Bf && a.j.push(b);
            throw a;
        }
    }

    function Df(a) {
        if (!a.length) return a;
        a.push({
            id: "main",
            line: 0
        });
        for (var b = a.length - 1; b > 0; b--) bb(a[b].id) && a.splice(b++, 1);
        for (var c = a.length - 1; c > 0; c--) a[c].line = a[c - 1].line;
        a.splice(0, 1);
        return a
    };

    function Ef(a) {
        function b(r) {
            for (var u = 0; u < r.length; u++) d[r[u]] = !0
        }
        for (var c = [], d = [], e = Ff(a), f = 0; f < gf.length; f++) {
            var g = gf[f],
                k = Gf(g, e);
            if (k) {
                for (var m = g.add || [], n = 0; n < m.length; n++) c[m[n]] = !0;
                b(g.block || [])
            } else k === null && b(g.block || []);
        }
        for (var p = [], q = 0; q < jf.length; q++) c[q] && !d[q] && (p[q] = !0);
        return p
    }

    function Gf(a, b) {
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

    function Ff(a) {
        var b = [];
        return function(c) {
            b[c] === void 0 && (b[c] = uf(hf[c], a));
            return b[c]
        }
    };
    var Hf = {
        Hl: function(a, b) {
            b[Ie.zi] && typeof a === "string" && (a = b[Ie.zi] === 1 ? a.toLowerCase() : a.toUpperCase());
            b.hasOwnProperty(Ie.Bi) && a === null && (a = b[Ie.Bi]);
            b.hasOwnProperty(Ie.Di) && a === void 0 && (a = b[Ie.Di]);
            b.hasOwnProperty(Ie.Ci) && a === !0 && (a = b[Ie.Ci]);
            b.hasOwnProperty(Ie.Ai) && a === !1 && (a = b[Ie.Ai]);
            return a
        }
    };
    var If = function() {
            this.j = {}
        },
        Kf = function(a, b) {
            var c = Jf.j,
                d;
            (d = c.j)[a] != null || (d[a] = []);
            c.j[a].push(function() {
                return b.apply(null, na(xa.apply(0, arguments)))
            })
        };

    function Lf(a, b, c, d) {
        if (a)
            for (var e = 0; e < a.length; e++) {
                var f = void 0,
                    g = "A policy function denied the permission request";
                try {
                    f = a[e](b, c, d), g += "."
                } catch (k) {
                    g = typeof k === "string" ? g + (": " + k) : k instanceof Error ? g + (": " + k.message) : g + "."
                }
                if (!f) throw new zf(c, d, g);
            }
    }

    function Mf(a, b, c) {
        return function() {
            var d = arguments[0];
            if (d) {
                var e = a.j[d],
                    f = a.j.all;
                if (e || f) {
                    var g = c.apply(void 0, Array.prototype.slice.call(arguments, 0));
                    Lf(e, b, d, g);
                    Lf(f, b, d, g)
                }
            }
        }
    };
    var Qf = function() {
            var a = data.permissions || {},
                b = Nf.ctid,
                c = this;
            this.C = {};
            this.j = new If;
            var d = {},
                e = {},
                f = Mf(this.j, b, function() {
                    var g = arguments[0];
                    return g && d[g] ? d[g].apply(void 0, Array.prototype.slice.call(arguments, 0)) : {}
                });
            ib(a, function(g, k) {
                function m(p) {
                    var q = xa.apply(1, arguments);
                    if (!n[p]) throw Of(p, {}, "The requested additional permission " + p + " is not configured.");
                    f.apply(null, [p].concat(na(q)))
                }
                var n = {};
                ib(k, function(p, q) {
                    var r = Pf(p, q);
                    n[p] = r.assert;
                    d[p] || (d[p] = r.M);
                    r.Vj && !e[p] && (e[p] = r.Vj)
                });
                c.C[g] = function(p, q) {
                    var r = n[p];
                    if (!r) throw Of(p, {}, "The requested permission " + p + " is not configured.");
                    var u = Array.prototype.slice.call(arguments, 0);
                    r.apply(void 0, u);
                    f.apply(void 0, u);
                    var v = e[p];
                    v && v.apply(null, [m].concat(na(u.slice(1))))
                }
            })
        },
        Rf = function(a) {
            return Jf.C[a] || function() {}
        };

    function Pf(a, b) {
        var c = tf(a, b);
        c.vtp_permissionName = a;
        c.vtp_createPermissionError = Of;
        try {
            return yf(c)
        } catch (d) {
            return {
                assert: function(e) {
                    throw new zf(e, {}, "Permission " + e + " is unknown.");
                },
                M: function() {
                    throw new zf(a, {}, "Permission " + a + " is unknown.");
                }
            }
        }
    }

    function Of(a, b, c) {
        return new zf(a, b, c)
    };
    var Sf = !1;
    var Tf = {};
    Tf.yk = lb('');
    Tf.Ql = lb('');
    var Yf = function(a) {
            var b = {},
                c = 0;
            ib(a, function(e, f) {
                if (f != null) {
                    var g = ("" + f).replace(/~/g, "~~");
                    if (Vf.hasOwnProperty(e)) b[Vf[e]] = g;
                    else if (Wf.hasOwnProperty(e)) {
                        var k = Wf[e];
                        b.hasOwnProperty(k) || (b[k] = g)
                    } else if (e === "category")
                        for (var m = g.split("/", 5), n = 0; n < m.length; n++) {
                            var p = b,
                                q = Xf[n],
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
            ib(b, function(e, f) {
                d.push("" + e + f)
            });
            return d.join("~")
        },
        Vf = {
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
        Wf = {
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
        Xf = ["ca",
            "c2", "c3", "c4", "c5"
        ];
    var Zf = function() {
        this.events = [];
        this.j = "";
        this.ja = {};
        this.baseUrl = "";
        this.H = 0;
        this.K = this.C = !1;
    };
    Zf.prototype.add = function(a) {
        return this.P(a) ? (this.events.push(a), this.j = a.C, this.ja = a.ja, this.baseUrl = a.baseUrl, this.H += a.K, this.C = a.H, !0) : !1
    };
    Zf.prototype.P = function(a) {
        return this.events.length ? this.events.length >= 20 || a.K + this.H >= 16384 ? !1 : this.baseUrl ===
            a.baseUrl && this.C === a.H && this.aa(a) : !0
    };
    Zf.prototype.aa = function(a) {
        var b = this;
        if (!this.K) return this.j === a.C;
        var c = Object.keys(this.ja);
        return c.length === Object.keys(a.ja).length && c.every(function(d) {
            return a.ja.hasOwnProperty(d) && String(b.ja[d]) === String(a.ja[d])
        })
    };
    var $f = {},
        ag = ($f.uaa = !0, $f.uab = !0, $f.uafvl = !0, $f.uamb = !0, $f.uam = !0, $f.uap = !0, $f.uapv = !0, $f.uaw = !0, $f);
    var dg = function(a, b) {
            var c = a.events;
            if (c.length === 1) return bg(c[0], b);
            var d = [];
            a.j && d.push(a.j);
            for (var e = {}, f = 0; f < c.length; f++) ib(c[f].Rc, function(u, v) {
                v != null && (e[u] = e[u] || {}, e[u][String(v)] = e[u][String(v)] + 1 || 1)
            });
            var g = {};
            ib(e, function(u, v) {
                var t, w = -1,
                    x = 0;
                ib(v, function(y, A) {
                    x += A;
                    var B = (y.length + u.length + 2) * (A - 1);
                    B > w && (t = y, w = B)
                });
                x === c.length && (g[u] = t)
            });
            cg(g, d);
            b && d.push("_s=" + b);
            for (var k = d.join("&"), m = [], n = {}, p = 0; p < c.length; n = {
                    Zh: void 0
                }, p++) {
                var q = [];
                n.Zh = {};
                ib(c[p].Rc, function(u) {
                    return function(v,
                        t) {
                        g[v] !== "" + t && (u.Zh[v] = t)
                    }
                }(n));
                c[p].j && q.push(c[p].j);
                cg(n.Zh, q);
                m.push(q.join("&"))
            }
            var r = m.join("\r\n");
            return {
                params: k,
                body: r
            }
        },
        bg = function(a, b) {
            var c = [];
            a.C && c.push(a.C);
            b && c.push("_s=" + b);
            cg(a.Rc, c);
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
        cg = function(a, b) {
            ib(a, function(c, d) {
                d != null && b.push(encodeURIComponent(c) + "=" + encodeURIComponent(d))
            })
        };
    var eg = function(a) {
            var b = [];
            ib(a, function(c, d) {
                d != null && b.push(encodeURIComponent(c) + "=" + encodeURIComponent(String(d)))
            });
            return b.join("&")
        },
        fg = function(a, b, c, d, e) {
            this.baseUrl = b;
            this.endpoint = c;
            this.ja = a.ja;
            this.Rc = a.Rc;
            this.Jh = a.Jh;
            this.H = d;
            this.C = eg(a.ja);
            this.j = eg(a.Jh);
            this.K = this.j.length;
            if (e && this.K > 16384) throw Error("EVENT_TOO_LARGE");
        };
    var ig = function(a, b) {
            for (var c = 0; c < b.length; c++) {
                var d = a,
                    e = b[c];
                if (!gg.exec(e)) throw Error("Invalid key wildcard");
                var f = e.indexOf(".*"),
                    g = f !== -1 && f === e.length - 2,
                    k = g ? e.slice(0, e.length - 2) : e,
                    m;
                a: if (d.length === 0) m = !1;
                    else {
                        for (var n = d.split("."), p = 0; p < n.length; p++)
                            if (!hg.exec(n[p])) {
                                m = !1;
                                break a
                            } m = !0
                    }
                if (!m || k.length > d.length || !g && d.length !== e.length ? 0 : g ? ub(d, k) && (d === k || d.charAt(k.length) === ".") : d === k) return !0
            }
            return !1
        },
        hg = /^[a-z$_][\w$]*$/i,
        gg = /^(?:[a-z_$][a-z_$0-9]*\.)*[a-z_$][a-z_$0-9]*(?:\.\*)?$/i;
    var jg = ["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"];

    function kg(a, b) {
        var c = String(a),
            d = String(b),
            e = c.length - d.length;
        return e >= 0 && c.indexOf(d, e) === e
    }
    var lg = new hb;

    function mg(a, b, c) {
        var d = c ? "i" : void 0;
        try {
            var e = String(b) + String(d),
                f = lg.get(e);
            f || (f = new RegExp(b, d), lg.set(e, f));
            return f.test(a)
        } catch (g) {
            return !1
        }
    }

    function ng(a, b) {
        return String(a).indexOf(String(b)) >= 0
    }

    function og(a, b) {
        return String(a) === String(b)
    }

    function pg(a, b) {
        return Number(a) >= Number(b)
    }

    function qg(a, b) {
        return Number(a) <= Number(b)
    }

    function rg(a, b) {
        return Number(a) > Number(b)
    }

    function sg(a, b) {
        return Number(a) < Number(b)
    }

    function tg(a, b) {
        return ub(String(a), String(b))
    };
    var Ag = /^([a-z][a-z0-9]*):(!|\?)(\*|string|boolean|number|Fn|PixieMap|List|OpaqueValue)$/i,
        Bg = {
            Fn: "function",
            PixieMap: "Object",
            List: "Array"
        };

    function K(a, b, c) {
        for (var d = 0; d < b.length; d++) {
            var e = Ag.exec(b[d]);
            if (!e) throw Error("Internal Error in " + a);
            var f = e[1],
                g = e[2] === "!",
                k = e[3],
                m = c[d];
            if (m == null) {
                if (g) throw Error("Error in " + a + ". Required argument " + f + " not supplied.");
            } else if (k !== "*") {
                var n = typeof m;
                m instanceof Xc ? n = "Fn" : m instanceof Vc ? n = "List" : m instanceof Ka ? n = "PixieMap" : m instanceof dd ? n = "PixiePromise" : m instanceof bd && (n = "OpaqueValue");
                if (n !== k) throw Error("Error in " + a + ". Argument " + f + " has type " + ((Bg[n] || n) + ", which does not match required type ") +
                    ((Bg[k] || k) + "."));
            }
        }
    };

    function Cg(a) {
        return "" + a
    }

    function Dg(a, b) {
        var c = [];
        return c
    };

    function Eg(a, b) {
        var c = new Xc(a, function() {
            for (var d = Array.prototype.slice.call(arguments, 0), e = 0; e < d.length; e++) d[e] = this.evaluate(d[e]);
            try {
                return b.apply(this, d)
            } catch (g) {
                if (fd()) throw new hd(g.message);
                throw g;
            }
        });
        c.Ga();
        return c
    }

    function Fg(a, b) {
        var c = new Ka,
            d;
        for (d in b)
            if (b.hasOwnProperty(d)) {
                var e = b[d];
                ab(e) ? c.set(d, Eg(a + "_" + d, e)) : Rc(e) ? c.set(d, Fg(a + "_" + d, e)) : (bb(e) || z(e) || typeof e === "boolean") && c.set(d, e)
            } c.Ga();
        return c
    };

    function Gg(a, b) {
        K(this.getName(), ["apiName:!string", "message:?string"], arguments);
        var c = {},
            d = new Ka;
        return d = Fg("AssertApiSubject", c)
    };

    function Hg(a, b) {
        K(this.getName(), ["actual:?*", "message:?string"], arguments);
        if (a instanceof dd) throw Error("Argument actual cannot have type Promise. Assertions on asynchronous code aren't supported.");
        var c = {},
            d = new Ka;
        return d = Fg("AssertThatSubject", c)
    };

    function Ig(a) {
        return function() {
            for (var b = [], c = this.D, d = 0; d < arguments.length; ++d) b.push(H(arguments[d], c));
            return ed(a.apply(null, b))
        }
    }

    function Jg() {
        for (var a = Math, b = Kg, c = {}, d = 0; d < b.length; d++) {
            var e = b[d];
            a.hasOwnProperty(e) && (c[e] = Ig(a[e].bind(a)))
        }
        return c
    };

    function Lg(a) {
        var b;
        return b
    };

    function Mg(a) {
        var b;
        K(this.getName(), ["uri:!string"], arguments);
        try {
            b = decodeURIComponent(a)
        } catch (c) {}
        return b
    };

    function Ng(a) {
        try {
            return encodeURI(a)
        } catch (b) {}
    };

    function Og(a) {
        try {
            return encodeURIComponent(a)
        } catch (b) {}
    };
    var Pg = function(a, b) {
            for (var c = 0; c < b.length; c++) {
                if (a === void 0) return;
                a = a[b[c]]
            }
            return a
        },
        Qg = function(a, b) {
            var c = b.preHit;
            if (c) {
                var d = a[0];
                switch (d) {
                    case "hitData":
                        return a.length < 2 ? void 0 : Pg(c.getHitData(a[1]), a.slice(2));
                    case "metadata":
                        return a.length < 2 ? void 0 : Pg(c.getMetadata(a[1]), a.slice(2));
                    case "eventName":
                        return c.getEventName();
                    case "destinationId":
                        return c.getDestinationId();
                    default:
                        throw Error(d + " is not a valid field that can be accessed\n                      from PreHit data.");
                }
            }
        },
        Sg = function(a, b) {
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
                                    c = Qg(e, b);
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
                if (a.booleanExpressionValue !== void 0) return Rg(a.booleanExpressionValue, b);
                if (a.booleanValue !== void 0) return !!a.booleanValue;
                if (a.stringValue !== void 0) return String(a.stringValue);
                if (a.integerValue !== void 0) return Number(a.integerValue);
                if (a.doubleValue !== void 0) return Number(a.doubleValue);
                throw Error("Unknown field used for variable of type ExpressionValue:" + a);
            }
        },
        Rg = function(a, b) {
            var c = a.args;
            if (!Array.isArray(c) || c.length === 0) throw Error('Invalid boolean expression format. Expected "args":' + c + " property to\n         be non-empty array.");
            var d = function(g) {
                return Sg(g, b)
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
                    return mg(d(c[0]), d(c[1]), !1);
                case 5:
                    return og(d(c[0]), d(c[1]));
                case 6:
                    return tg(d(c[0]), d(c[1]));
                case 7:
                    return kg(d(c[0]), d(c[1]));
                case 8:
                    return ng(d(c[0]), d(c[1]));
                case 9:
                    return sg(d(c[0]), d(c[1]));
                case 10:
                    return qg(d(c[0]), d(c[1]));
                case 11:
                    return rg(d(c[0]), d(c[1]));
                case 12:
                    return pg(d(c[0]), d(c[1]));
                default:
                    throw Error('Invalid boolean expression format. Expected "type" property tobe a positive integer which is less than 13.');
            }
        };

    function Tg(a) {
        K(this.getName(), ["message:?string"], arguments);
    };

    function Ug(a, b) {
        K(this.getName(), ["min:!number", "max:!number"], arguments);
        return eb(a, b)
    };

    function Vg() {
        return (new Date).getTime()
    };

    function Wg(a) {
        if (a === null) return "null";
        if (a instanceof Vc) return "array";
        if (a instanceof Xc) return "function";
        if (a instanceof bd) {
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

    function Xg(a) {
        function b(c) {
            return function(d) {
                try {
                    return c(d)
                } catch (e) {
                    (Sf || Tf.yk) && a.call(this, e.message)
                }
            }
        }
        return {
            parse: b(function(c) {
                return ed(JSON.parse(c))
            }),
            stringify: b(function(c) {
                return JSON.stringify(H(c))
            })
        }
    };

    function Yg(a) {
        return kb(H(a, this.D))
    };

    function Zg(a) {
        return Number(H(a, this.D))
    };

    function $g(a) {
        return a === null ? "null" : a === void 0 ? "undefined" : a.toString()
    };

    function ah(a, b, c) {
        var d = null,
            e = !1;
        return e ? d : null
    };
    var Kg = "floor ceil round max min abs pow sqrt".split(" ");

    function bh() {
        var a = {};
        return {
            Zl: function(b) {
                return a.hasOwnProperty(b) ? a[b] : void 0
            },
            uk: function(b, c) {
                a[b] = c
            },
            reset: function() {
                a = {}
            }
        }
    }

    function ch(a, b) {
        return function() {
            var c = Array.prototype.slice.call(xa.apply(0, arguments), 0);
            c.unshift(b);
            return Xc.prototype.invoke.apply(a, c)
        }
    }

    function dh(a, b) {
        K(this.getName(), ["apiName:!string", "mock:?*"], arguments);
    }

    function eh(a, b) {
        K(this.getName(), ["apiName:!string", "mock:!PixieMap"], arguments);
    };
    var fh = {};
    var gh = function(a) {
        var b = new Ka;
        if (a instanceof Vc)
            for (var c = a.ka(), d = 0; d < c.length; d++) {
                var e = c[d];
                a.has(e) && b.set(e, a.get(e))
            } else if (a instanceof Xc)
                for (var f = a.ka(), g = 0; g < f.length; g++) {
                    var k = f[g];
                    b.set(k, a.get(k))
                } else
                    for (var m = 0; m < a.length; m++) b.set(m, a[m]);
        return b
    };
    fh.keys = function(a) {
        K(this.getName(), ["input:!*"], arguments);
        if (a instanceof Vc || a instanceof Xc || typeof a === "string") a = gh(a);
        if (a instanceof Ka || a instanceof dd) return new Vc(a.ka());
        return new Vc
    };
    fh.values = function(a) {
        K(this.getName(), ["input:!*"], arguments);
        if (a instanceof Vc || a instanceof Xc || typeof a === "string") a = gh(a);
        if (a instanceof Ka || a instanceof dd) return new Vc(a.Vb());
        return new Vc
    };
    fh.entries = function(a) {
        K(this.getName(), ["input:!*"], arguments);
        if (a instanceof Vc || a instanceof Xc || typeof a === "string") a = gh(a);
        if (a instanceof Ka || a instanceof dd) return new Vc(a.Cb().map(function(b) {
            return new Vc(b)
        }));
        return new Vc
    };
    fh.freeze = function(a) {
        (a instanceof Ka || a instanceof dd || a instanceof Vc || a instanceof Xc) && a.Ga();
        return a
    };
    fh.delete = function(a, b) {
        if (a instanceof Ka && !a.sc()) return a.remove(b), !0;
        return !1
    };

    function L(a, b) {
        var c = xa.apply(2, arguments),
            d = a.D.j;
        if (!d) throw Error("Missing program state.");
        if (d.Zm) {
            try {
                d.Wj.apply(null, [b].concat(na(c)))
            } catch (e) {
                throw Ua("TAGGING", 21), e;
            }
            return
        }
        d.Wj.apply(null, [b].concat(na(c)))
    };
    var hh = function() {
        this.C = {};
        this.j = {};
        this.H = !0;
    };
    hh.prototype.get = function(a, b) {
        var c = this.contains(a) ? this.C[a] : void 0;
        return c
    };
    hh.prototype.contains = function(a) {
        return this.C.hasOwnProperty(a)
    };
    hh.prototype.add = function(a, b, c) {
        if (this.contains(a)) throw Error("Attempting to add a function which already exists: " + a + ".");
        if (this.j.hasOwnProperty(a)) throw Error("Attempting to add an API with an existing private API name: " + a + ".");
        this.C[a] = c ? void 0 : ab(b) ? Eg(a, b) : Fg(a, b)
    };

    function ih(a, b) {
        var c = void 0;
        return c
    };

    function jh() {
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
                Fi: "app_remove",
                Gi: "app_store_refund",
                Hi: "app_store_subscription_cancel",
                Ii: "app_store_subscription_convert",
                Ji: "app_store_subscription_renew",
                Kk: "consent_update",
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
                La: "purchase",
                zc: "refund",
                Qa: "view_item",
                zg: "add_to_wishlist",
                Lk: "exception",
                Ki: "first_open",
                Li: "first_visit",
                ba: "gtag.config",
                Ya: "gtag.get",
                Mi: "in_app_purchase",
                ac: "page_view",
                Mk: "screen_view",
                Ni: "session_start",
                Nk: "timing_complete",
                Ok: "track_social",
                Uc: "user_engagement",
                Pk: "user_id_update",
                Rd: "gclid_link_decoration_source",
                Sd: "gclid_storage_source",
                rb: "gclgb",
                Za: "gclid",
                wf: "gclgs",
                xf: "gcllp",
                yf: "gclst",
                ia: "ads_data_redaction",
                Oi: "gad_source",
                Pi: "gad_source_src",
                Td: "gclid_url",
                Qi: "gclsrc",
                Ag: "gbraid",
                zf: "wbraid",
                la: "allow_ad_personalization_signals",
                Af: "allow_custom_scripts",
                Ud: "allow_direct_google_requests",
                Bf: "allow_display_features",
                Vd: "allow_enhanced_conversions",
                sb: "allow_google_signals",
                Da: "allow_interest_groups",
                Qk: "app_id",
                Rk: "app_installer_id",
                Sk: "app_name",
                Tk: "app_version",
                Lb: "auid",
                Ri: "auto_detection_enabled",
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
                Si: "rnd",
                Cg: "consent_update_type",
                Ti: "content_group",
                Ui: "content_type",
                eb: "conversion_cookie_prefix",
                ed: "conversion_id",
                ra: "conversion_linker",
                Vi: "conversion_linker_disabled",
                fc: "conversion_api",
                Df: "cookie_deprecation",
                Ra: "cookie_domain",
                Sa: "cookie_expires",
                ab: "cookie_flags",
                Ac: "cookie_name",
                vb: "cookie_path",
                Ma: "cookie_prefix",
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
                Wi: "disable_merchant_reported_purchases",
                gd: "dc_custom_params",
                Xi: "dc_natural_search",
                Ig: "dynamic_event_settings",
                Jg: "affiliation",
                ce: "checkout_option",
                Ef: "checkout_step",
                Kg: "coupon",
                hd: "item_list_name",
                Ff: "list_name",
                Yi: "promotions",
                jd: "shipping",
                Gf: "tax",
                de: "engagement_time_msec",
                ee: "enhanced_client_id",
                fe: "enhanced_conversions",
                Lg: "enhanced_conversions_automatic_settings",
                he: "estimated_delivery_date",
                Hf: "euid_logged_in_state",
                kd: "event_callback",
                Uk: "event_category",
                fb: "event_developer_id_string",
                Vk: "event_label",
                Cc: "event",
                ie: "event_settings",
                je: "event_timeout",
                Wk: "description",
                Xk: "fatal",
                Zi: "experiments",
                If: "firebase_id",
                Dc: "first_party_collection",
                ke: "_x_20",
                wb: "_x_19",
                aj: "fledge_drop_reason",
                Mg: "fledge",
                Ng: "flight_error_code",
                Og: "flight_error_message",
                bj: "fl_activity_category",
                cj: "fl_activity_group",
                Pg: "fl_advertiser_id",
                dj: "fl_ar_dedupe",
                Qg: "match_id",
                ej: "fl_random_number",
                fj: "tran",
                gj: "u",
                me: "gac_gclid",
                Ec: "gac_wbraid",
                Rg: "gac_wbraid_multiple_conversions",
                Sg: "ga_restrict_domain",
                Tg: "ga_temp_client_id",
                Yk: "ga_temp_ecid",
                ic: "gdpr_applies",
                Ug: "geo_granularity",
                Mb: "value_callback",
                xb: "value_key",
                Fc: "_google_ng",
                Gc: "google_signals",
                Vg: "google_tld",
                ne: "groups",
                Wg: "gsa_experiment_id",
                ij: "gtm_up",
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
                Zk: "name",
                nd: "new_customer",
                Yg: "non_interaction",
                jj: "optimize_id",
                Zg: "page_hostname",
                od: "page_path",
                Ea: "page_referrer",
                ib: "page_title",
                ah: "passengers",
                bh: "phone_conversion_callback",
                kj: "phone_conversion_country_code",
                eh: "phone_conversion_css_class",
                lj: "phone_conversion_ids",
                fh: "phone_conversion_number",
                gh: "phone_conversion_options",
                hh: "_protected_audience_enabled",
                pd: "quantity",
                qe: "redact_device_info",
                Nf: "referral_exclusion_definition",
                Qb: "restricted_data_processing",
                mj: "retoken",
                al: "sample_rate",
                Of: "screen_name",
                Rb: "screen_resolution",
                nj: "_script_source",
                oj: "search_term",
                Na: "send_page_view",
                kc: "send_to",
                rd: "server_container_url",
                sd: "session_duration",
                se: "session_engaged",
                Pf: "session_engaged_time",
                zb: "session_id",
                te: "session_number",
                Qf: "_shared_user_id",
                ud: "delivery_postal_code",
                bl: "temporary_client_id",
                Rf: "topmost_url",
                pj: "tracking_id",
                Sf: "traffic_type",
                Ba: "transaction_id",
                Sb: "transport_url",
                ih: "trip_type",
                nc: "update",
                cb: "url_passthrough",
                qj: "uptgs",
                Tf: "_user_agent_architecture",
                Uf: "_user_agent_bitness",
                Vf: "_user_agent_full_version_list",
                Wf: "_user_agent_mobile",
                Xf: "_user_agent_model",
                Yf: "_user_agent_platform",
                Zf: "_user_agent_platform_version",
                cg: "_user_agent_wow64",
                Fa: "user_data",
                jh: "user_data_auto_latency",
                kh: "user_data_auto_meta",
                lh: "user_data_auto_multi",
                mh: "user_data_auto_selectors",
                nh: "user_data_auto_status",
                vd: "user_data_mode",
                ue: "user_data_settings",
                Ca: "user_id",
                jb: "user_properties",
                rj: "_user_region",
                wd: "us_privacy_string",
                ma: "value",
                oh: "wbraid_multiple_conversions",
                xd: "_fpm_parameters",
                yj: "_host_name",
                zj: "_in_page_command",
                Aj: "_ip_override",
                Bj: "_is_passthrough_cid",
                Tb: "non_personalized_ads",
                De: "_sst_parameters",
                ub: "conversion_label",
                wa: "page_location",
                hb: "global_developer_id_string",
                mc: "tc_privacy_string"
            }
        },
        kh = {},
        lh = Object.freeze((kh[O.g.la] = 1, kh[O.g.Bf] = 1, kh[O.g.Vd] = 1, kh[O.g.sb] = 1, kh[O.g.da] = 1, kh[O.g.Ra] =
            1, kh[O.g.Sa] = 1, kh[O.g.ab] = 1, kh[O.g.Ac] = 1, kh[O.g.vb] = 1, kh[O.g.Ma] = 1, kh[O.g.hc] = 1, kh[O.g.fd] = 1, kh[O.g.fa] = 1, kh[O.g.Ig] = 1, kh[O.g.kd] = 1, kh[O.g.ie] = 1, kh[O.g.je] = 1, kh[O.g.Dc] = 1, kh[O.g.Sg] = 1, kh[O.g.Gc] = 1, kh[O.g.Vg] = 1, kh[O.g.ne] = 1, kh[O.g.Jf] = 1, kh[O.g.jc] = 1, kh[O.g.Ob] = 1, kh[O.g.sa] = 1, kh[O.g.Nf] = 1, kh[O.g.Qb] = 1, kh[O.g.Na] = 1, kh[O.g.kc] = 1, kh[O.g.rd] = 1, kh[O.g.sd] = 1, kh[O.g.Pf] = 1, kh[O.g.ud] = 1, kh[O.g.Sb] = 1, kh[O.g.nc] = 1, kh[O.g.ue] = 1, kh[O.g.jb] = 1, kh[O.g.De] = 1, kh));
    Object.freeze([O.g.wa, O.g.Ea, O.g.ib, O.g.Ta, O.g.Of, O.g.Ca, O.g.If, O.g.Ti]);
    var mh = {},
        nh = Object.freeze((mh[O.g.Fi] = 1, mh[O.g.Gi] = 1, mh[O.g.Hi] = 1, mh[O.g.Ii] = 1, mh[O.g.Ji] = 1, mh[O.g.Ki] = 1, mh[O.g.Li] = 1, mh[O.g.Mi] = 1, mh[O.g.Ni] = 1, mh[O.g.Uc] = 1, mh)),
        oh = {},
        ph = Object.freeze((oh[O.g.wg] = 1, oh[O.g.xg] = 1, oh[O.g.wc] = 1, oh[O.g.xc] = 1, oh[O.g.yg] = 1, oh[O.g.Zb] = 1, oh[O.g.yc] = 1, oh[O.g.pb] = 1, oh[O.g.Kb] = 1, oh[O.g.qb] = 1, oh[O.g.La] = 1, oh[O.g.zc] = 1, oh[O.g.Qa] = 1, oh[O.g.zg] = 1, oh)),
        qh = Object.freeze([O.g.la, O.g.Ud, O.g.sb, O.g.hc, O.g.Dc, O.g.ld, O.g.Na, O.g.nc]),
        rh = Object.freeze([].concat(na(qh))),
        sh = Object.freeze([O.g.Sa,
            O.g.je, O.g.sd, O.g.Pf, O.g.de
        ]),
        th = Object.freeze([].concat(na(sh))),
        uh = {},
        vh = (uh[O.g.O] = "1", uh[O.g.U] = "2", uh[O.g.N] = "3", uh[O.g.za] = "4", uh),
        yh = {},
        zh = Object.freeze((yh[O.g.Rd] = 1, yh[O.g.Sd] = 1, yh[O.g.la] = 1, yh[O.g.Ud] = 1, yh[O.g.Vd] = 1, yh[O.g.Da] = 1, yh[O.g.bc] = 1, yh[O.g.Cf] = 1, yh[O.g.Wd] = 1, yh[O.g.Xd] = 1, yh[O.g.Yd] = 1, yh[O.g.da] = 1, yh[O.g.Zd] = 1, yh[O.g.eb] = 1, yh[O.g.ra] = 1, yh[O.g.Ra] = 1, yh[O.g.Sa] = 1, yh[O.g.ab] = 1, yh[O.g.Ma] = 1, yh[O.g.Aa] = 1, yh[O.g.Dg] = 1, yh[O.g.ae] = 1, yh[O.g.Eg] = 1, yh[O.g.Fg] = 1, yh[O.g.fa] = 1, yh[O.g.Wi] = 1, yh[O.g.fe] =
            1, yh[O.g.he] = 1, yh[O.g.If] = 1, yh[O.g.Dc] = 1, yh[O.g.jc] = 1, yh[O.g.Ob] = 1, yh[O.g.Ta] = 1, yh[O.g.Kf] = 1, yh[O.g.Lf] = 1, yh[O.g.Mf] = 1, yh[O.g.nd] = 1, yh[O.g.wa] = 1, yh[O.g.Ea] = 1, yh[O.g.bh] = 1, yh[O.g.eh] = 1, yh[O.g.fh] = 1, yh[O.g.gh] = 1, yh[O.g.Qb] = 1, yh[O.g.Na] = 1, yh[O.g.kc] = 1, yh[O.g.rd] = 1, yh[O.g.ud] = 1, yh[O.g.Ba] = 1, yh[O.g.Sb] = 1, yh[O.g.nc] = 1, yh[O.g.cb] = 1, yh[O.g.Fa] = 1, yh[O.g.Ca] = 1, yh[O.g.ma] = 1, yh)),
        Ah = {},
        Bh = Object.freeze((Ah.search = "s", Ah.youtube = "y", Ah.playstore = "p", Ah.shopping = "h", Ah.ads = "a", Ah.maps = "m", Ah));
    Object.freeze(O.g);
    var Ch = {},
        Dh = (Ch[O.g.Yb] = "gcu", Ch[O.g.rb] = "gclgb", Ch[O.g.Za] = "gclaw", Ch[O.g.wf] = "gclgs", Ch[O.g.xf] = "gcllp", Ch[O.g.yf] = "gclst", Ch[O.g.Lb] = "auid", Ch[O.g.Wd] = "dscnt", Ch[O.g.Xd] = "fcntr", Ch[O.g.Yd] = "flng", Ch[O.g.Zd] = "mid", Ch[O.g.Bg] = "bttype", Ch[O.g.ub] = "label", Ch[O.g.fc] = "capi", Ch[O.g.Df] = "pscdl", Ch[O.g.Aa] = "currency_code", Ch[O.g.Dg] = "clobs", Ch[O.g.ae] = "vdltv", Ch[O.g.Eg] = "clolo", Ch[O.g.Fg] = "clolb", Ch[O.g.Hg] = "_dbg", Ch[O.g.he] = "oedeld", Ch[O.g.fb] = "edid", Ch[O.g.aj] = "fdr", Ch[O.g.Mg] = "fledge", Ch[O.g.me] = "gac",
            Ch[O.g.Ec] = "gacgb", Ch[O.g.Rg] = "gacmcov", Ch[O.g.ic] = "gdpr", Ch[O.g.hb] = "gdid", Ch[O.g.Fc] = "_ng", Ch[O.g.Wg] = "gsaexp", Ch[O.g.Nb] = "frm", Ch[O.g.oe] = "gtm_up", Ch[O.g.md] = "lps", Ch[O.g.pe] = "did", Ch[O.g.Kf] = "fcntr", Ch[O.g.Lf] = "flng", Ch[O.g.Mf] = "mid", Ch[O.g.nd] = void 0, Ch[O.g.ib] = "tiba", Ch[O.g.Qb] = "rdp", Ch[O.g.zb] = "ecsid", Ch[O.g.Qf] = "ga_uid", Ch[O.g.ud] = "delopc", Ch[O.g.mc] = "gdpr_consent", Ch[O.g.Ba] = "oid", Ch[O.g.qj] = "uptgs", Ch[O.g.Tf] = "uaa", Ch[O.g.Uf] = "uab", Ch[O.g.Vf] = "uafvl", Ch[O.g.Wf] = "uamb", Ch[O.g.Xf] = "uam", Ch[O.g.Yf] =
            "uap", Ch[O.g.Zf] = "uapv", Ch[O.g.cg] = "uaw", Ch[O.g.jh] = "ec_lat", Ch[O.g.kh] = "ec_meta", Ch[O.g.lh] = "ec_m", Ch[O.g.mh] = "ec_sel", Ch[O.g.nh] = "ec_s", Ch[O.g.vd] = "ec_mode", Ch[O.g.Ca] = "userId", Ch[O.g.wd] = "us_privacy", Ch[O.g.ma] = "value", Ch[O.g.oh] = "mcov", Ch[O.g.yj] = "hn", Ch[O.g.zj] = "gtm_ee", Ch[O.g.Tb] = "npa", Ch[O.g.ed] = null, Ch[O.g.Rb] = null, Ch[O.g.Ta] = null, Ch[O.g.da] = null, Ch[O.g.wa] = null, Ch[O.g.Ea] = null, Ch[O.g.Rf] = null, Ch[O.g.xd] = null, Ch[O.g.Rd] = null, Ch[O.g.Sd] = null, Ch);

    function Eh(a, b) {
        if (a) {
            var c = a.split("x");
            c.length === 2 && (Fh(b, "u_w", c[0]), Fh(b, "u_h", c[1]))
        }
    }

    function Gh(a, b) {
        a && (a.length === 2 ? Fh(b, "hl", a) : a.length === 5 && (Fh(b, "hl", a.substring(0, 2)), Fh(b, "gl", a.substring(3, 5))))
    }

    function Hh(a) {
        var b = Ih;
        b = b === void 0 ? Jh : b;
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
                q && (r.push(Kh(q.value)), r.push(Kh(q.quantity)), r.push(Kh(q.item_id)), r.push(Kh(q.start_date)), r.push(Kh(q.end_date)), n.push("(" + r.join("*") + ")"))
            }
            k = n.length > 0 ? n.join("") : ""
        } else k = "";
        return k
    }

    function Jh(a) {
        return Lh(a.item_id, a.id, a.item_name)
    }

    function Lh() {
        for (var a = l(xa.apply(0, arguments)), b = a.next(); !b.done; b = a.next()) {
            var c = b.value;
            if (c !== null && c !== void 0) return c
        }
    }

    function Mh(a) {
        if (a && a.length) {
            for (var b = [], c = 0; c < a.length; ++c) {
                var d = a[c];
                d && d.estimated_delivery_date ? b.push("" + d.estimated_delivery_date) : b.push("")
            }
            return b.join(",")
        }
    }

    function Fh(a, b, c) {
        c === void 0 || c === null || c === "" && !ag[b] || (a[b] = c)
    }

    function Kh(a) {
        return typeof a !== "number" && typeof a !== "string" ? "" : a.toString()
    };

    function Nh(a) {
        return Oh ? E.querySelectorAll(a) : null
    }

    function Ph(a, b) {
        if (!Oh) return null;
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
    var Qh = !1;
    if (E.querySelectorAll) try {
        var Rh = E.querySelectorAll(":root");
        Rh && Rh.length == 1 && Rh[0] == E.documentElement && (Qh = !0)
    } catch (a) {}
    var Oh = Qh;

    function Sh(a) {
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
    var Th = /^[0-9A-Fa-f]{64}$/;

    function Uh(a) {
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

    function Vh(a) {
        if (a === "" || a === "e0") return Promise.resolve(a);
        var b;
        if ((b = C.crypto) == null ? 0 : b.subtle) {
            if (Th.test(a)) return Promise.resolve(a);
            try {
                var c = Uh(a);
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

    function Wh(a, b) {
        if (a === "") return b;
        var c = Number(a);
        return isNaN(c) ? b : c
    };
    var Xh = [];

    function Yh(a) {
        switch (a) {
            case 0:
                return 0;
            case 44:
                return 1;
            case 45:
                return 2;
            case 46:
                return 8;
            case 51:
                return 3;
            case 65:
                return 4;
            case 89:
                return 5;
            case 105:
                return 6;
            case 106:
                return 10;
            case 107:
                return 7
        }
    }

    function Zh(a, b) {
        Xh[a] = b;
        var c = Yh(a);
        c !== void 0 && (Xa[c] = b)
    }

    function P(a) {
        Zh(a, !0)
    }
    P(33);
    P(29);
    P(30);
    P(31);
    P(32);
    P(47);
    P(80);
    P(16);
    P(115);
    P(15);
    P(121);
    P(114);
    P(66);
    P(90);
    P(6);
    P(48);
    P(4);
    P(77);
    P(84);
    P(110);
    P(75);
    P(70);

    P(88);
    P(126);
    P(101);

    P(122);
    P(89);
    P(5);
    $h(19, 18);
    P(105);
    Ya[1] = Wh('1', 6E4);
    Ya[3] = Wh('10', 1);
    Ya[2] = Wh('', 50);
    P(25);
    P(13);
    P(69);
    P(111);
    var ai = !1;
    P(8);
    P(93);
    P(59);
    P(24);
    P(50);
    P(107);
    P(96);
    P(22);
    P(51);
    P(76);
    P(62);
    P(106);
    P(109);
    P(72);
    P(74);
    P(86);
    P(54);
    P(52);
    P(97);

    function Q(a) {
        return !!Xh[a]
    }

    function $h(a, b) {
        for (var c = !1, d = !1, e = 0; c === d;)
            if (c = ((Math.random() * 4294967296 | 0) & 1) === 0, d = ((Math.random() * 4294967296 | 0) & 1) === 0, e++, e > 30) return;
        c ? P(b) : P(a)
    }

    function S(a) {
        Ua("GTM", a)
    };
    var fi = function(a) {
            var b = Q(100);
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
                xk: t,
                qg: w,
                zk: e,
                Pl: "tv.1~${" + (t + "|encrypt}"),
                encryptionKeyString: ei()
            } : {
                xk: t,
                qg: w,
                zk: e
            }
        },
        ci = function(a) {
            return gi.indexOf(a) !== -1
        },
        ei = function() {
            return '{\x22keys\x22:[{\x22id\x22:\x22190bf4ca-5945-425e-b8a7-ae5a96e91748\x22,\x22hpkePublicKey\x22:{\x22version\x22:0,\x22params\x22:{\x22kem\x22:\x22DHKEM_P256_HKDF_SHA256\x22,\x22kdf\x22:\x22HKDF_SHA256\x22,\x22aead\x22:\x22AES_128_GCM\x22},\x22publicKey\x22:\x22BIUekfjYPHbdXnQMCtNcsh4Yviso1P1ZeWeskKVMbRopHZMyjyW3rZ3nK9wyWoDqc71w1hJ/f3xfy9fbJyFqfoI\x3d\x22}},{\x22id\x22:\x2226062f3d-8a31-475a-b268-29d80ad5871b\x22,\x22hpkePublicKey\x22:{\x22version\x22:0,\x22params\x22:{\x22kem\x22:\x22DHKEM_P256_HKDF_SHA256\x22,\x22kdf\x22:\x22HKDF_SHA256\x22,\x22aead\x22:\x22AES_128_GCM\x22},\x22publicKey\x22:\x22BPge0ASSl0Vsmjb/vC5xwBReRHuXC+iSpybULXt+KmidBKSVTfOsBRB2RO5azbGxMrSctb7jJPvO0DSOdtgeVSM\x3d\x22}},{\x22id\x22:\x223195ca8f-230e-4b9c-8395-6e2a09855d78\x22,\x22hpkePublicKey\x22:{\x22version\x22:0,\x22params\x22:{\x22kem\x22:\x22DHKEM_P256_HKDF_SHA256\x22,\x22kdf\x22:\x22HKDF_SHA256\x22,\x22aead\x22:\x22AES_128_GCM\x22},\x22publicKey\x22:\x22BMPRaf5Dcar6lWzt+dbRDMTddEccv7oRCx9El3m0RxMAYrRhW5KbZsz1umXbmlDr2Hb5ZQQS+LB04tFzWCFmzCQ\x3d\x22}},{\x22id\x22:\x2274e9f0c0-fe59-444d-a4a1-09a38ea7b363\x22,\x22hpkePublicKey\x22:{\x22version\x22:0,\x22params\x22:{\x22kem\x22:\x22DHKEM_P256_HKDF_SHA256\x22,\x22kdf\x22:\x22HKDF_SHA256\x22,\x22aead\x22:\x22AES_128_GCM\x22},\x22publicKey\x22:\x22BOAEkRKXnopnS111e+dKFQFBwoiThJ2EIpDYBGUuUXCGZuCLKs0NOY8/U5OgMRD3PA2A1fUy1r/DNLmPpa+dCm0\x3d\x22}},{\x22id\x22:\x22e4eb87d1-580a-474b-b828-7d1430c24d76\x22,\x22hpkePublicKey\x22:{\x22version\x22:0,\x22params\x22:{\x22kem\x22:\x22DHKEM_P256_HKDF_SHA256\x22,\x22kdf\x22:\x22HKDF_SHA256\x22,\x22aead\x22:\x22AES_128_GCM\x22},\x22publicKey\x22:\x22BD9PSk8SwGyRhx9d9vrA7jo8ET5ifu/LVUS/rdktafm79d3uyUez3wfOGSmw0CMOx6fe77VFU39eu7HHay6mDmk\x3d\x22}}]}'
        },
        ii = function(a) {
            if (C.Promise) {
                var b = void 0;
                return b
            }
        },
        ki = function(a, b) {
            if (C.Promise) try {
                var c = new Promise(function(d) {
                    ji(a, d)
                });
                return c
            } catch (d) {}
        },
        li = function(a) {
            if (C.Promise) try {
                return new Promise(function(b) {
                    ji(a, function(c) {
                        b(c)
                    })
                })
            } catch (b) {}
        },
        mi = function(a) {
            for (var b = a.jf, c = a.time, d = ["tv.1"], e = 0, f = !1, g = 0; g < b.length; ++g) {
                var k = b[g].name,
                    m = b[g].value,
                    n = b[g].index,
                    p = bi[k];
                p && m && (!ci(k) || /^e\d+$/.test(m) || di.test(m) || Th.test(m)) && (n !== void 0 && (p += n), d.push(p + "." + m), e++)
            }
            b.length === 1 && b[0].name === "error_code" && (e = 0, f = !0);
            return {
                Gb: encodeURIComponent(d.join("~")),
                Ld: e,
                time: c,
                jg: f
            }
        },
        ji = function(a, b) {
            ni(a, function(c) {
                b(mi(c))
            })
        },
        vi = function(a) {
            function b(r, u, v, t) {
                var w = oi(r);
                w !== "" && (Th.test(w) ? k.push({
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
                    v = cb(r);
                    for (var t = 0; t < v.length; ++t) {
                        var w = oi(v[t]),
                            x = Th.test(w);
                        u && !x && S(89);
                        !u && x && S(88)
                    }
                }
            }

            function d(r, u) {
                var v = r[u];
                c(v, !1);
                var t = pi[u];
                r[t] && (r[u] && S(90), v = r[t], c(v, !0));
                return v
            }

            function e(r, u, v) {
                for (var t = cb(d(r, u)), w = 0; w < t.length; ++w) b(t[w],
                    u, v)
            }

            function f(r, u, v, t) {
                var w = d(r, u);
                b(w, u, v, t)
            }

            function g(r) {
                return function(u) {
                    S(64);
                    return r(u)
                }
            }
            var k = [];
            if (C.location.protocol !== "https:") return k.push({
                name: "error_code",
                value: "e3",
                index: void 0
            }), k;
            e(a, "email", qi);
            e(a, "phone_number", ri);
            e(a, "first_name", g(si));
            e(a, "last_name", g(si));
            var m = a.home_address || {};
            e(m, "street", g(ti));
            e(m, "city", g(ti));
            e(m, "postal_code", g(ui));
            e(m, "region", g(ti));
            e(m, "country", g(ui));
            for (var n = cb(a.address || {}), p = 0; p < n.length; p++) {
                var q = n[p];
                f(q, "first_name", si, p);
                f(q, "last_name", si, p);
                f(q, "street", ti, p);
                f(q, "city", ti, p);
                f(q, "postal_code", ui, p);
                f(q, "region", ti, p);
                f(q, "country", ui, p)
            }
            return k
        },
        wi = function(a) {
            var b = a ? vi(a) : [];
            return mi({
                jf: b
            })
        },
        xi = function(a) {
            return a && a != null && Object.keys(a).length > 0 && C.Promise ? vi(a).some(function(b) {
                return b.value && ci(b.name) && !Th.test(b.value)
            }) : !1
        },
        ni = function(a, b) {
            var c = vi(a);
            yi(c, b)
        },
        oi = function(a) {
            return a == null ? "" : z(a) ? nb(String(a)) : "e0"
        },
        ui = function(a) {
            return a.replace(zi, "")
        },
        si = function(a) {
            return ti(a.replace(/\s/g,
                ""))
        },
        ti = function(a) {
            return nb(a.replace(Ai, "").toLowerCase())
        },
        ri = function(a) {
            a = a.replace(/[\s-()/.]/g, "");
            a.charAt(0) !== "+" && (a = "+" + a);
            return Bi.test(a) ? a : "e0"
        },
        qi = function(a) {
            var b = a.toLowerCase().split("@");
            if (b.length === 2) {
                var c = b[0];
                /^(gmail|googlemail)\./.test(b[1]) && (c = c.replace(/\./g, ""));
                c = c + "@" + b[1];
                if (Ci.test(c)) return c
            }
            return "e0"
        },
        yi = function(a, b) {
            var c = !1;
            if (c = Q(54) ? !a.some(function(e) {
                    return e.value && ci(e.name)
                }) : a.some(function(e) {
                    e.value && ci(e.name)
                })) b({
                jf: a
            });
            else if (C.Promise) {
                var d;
                if (Q(53) || Q(82)) d = Fc();
                Promise.all(a.map(function(e) {
                    return e.value && ci(e.name) ? Vh(e.value).then(function(f) {
                        e.value = f
                    }) : Promise.resolve()
                })).then(function() {
                    var e = {
                        jf: a
                    };
                    if (d !== void 0) {
                        var f = Fc();
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
        Ai = /[0-9`~!@#$%^&*()_\-+=:;<>,.?|/\\[\]]/g,
        Ci = /^\S+@\S+\.\S+$/,
        Bi = /^\+\d{10,15}$/,
        zi = /[.~]/g,
        di = /^[0-9A-Za-z_-]{43}$/,
        Di = {},
        bi = (Di.email = "em", Di.phone_number = "pn", Di.first_name = "fn", Di.last_name = "ln", Di.street =
            "sa", Di.city = "ct", Di.region = "rg", Di.country = "co", Di.postal_code = "pc", Di.error_code = "ec", Di),
        Ei = {},
        pi = (Ei.email = "sha256_email_address", Ei.phone_number = "sha256_phone_number", Ei.first_name = "sha256_first_name", Ei.last_name = "sha256_last_name", Ei.street = "sha256_street", Ei);
    var gi = Object.freeze(["email", "phone_number", "first_name", "last_name", "street"]);
    var Fi = {},
        Gi = C.google_tag_manager = C.google_tag_manager || {};
    Fi.th = "4as0";
    Fi.Ce = Number("0") || 0;
    Fi.ob = "dataLayer";
    Fi.yn = "ChAI8I+CuQYQ8/+x15qckJ4PEiUAhuhuvrocEoOxidOpZFWhwIWGCDn5M4gNcBJSbx4JPGqqkLnXGgK6hQ\x3d\x3d";
    var Hi = {
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
        Ii = {
            __paused: 1,
            __tg: 1
        },
        Ji;
    for (Ji in Hi) Hi.hasOwnProperty(Ji) && (Ii[Ji] = 1);
    var Ki = lb("true"),
        Li = !1,
        Mi, Ni = !1;
    Ni = !0;
    Mi = Ni;
    var Oi, Pi = !1;
    Oi = Pi;
    var Qi, Ri = !1;
    Qi = Ri;
    Fi.vf = "www.googletagmanager.com";
    var Si = "" + Fi.vf + (Mi ? "/gtag/js" : "/gtm.js"),
        Ti = null,
        Ui = null,
        Vi = {},
        Wi = {};

    function Xi() {
        var a = Gi.sequence || 1;
        Gi.sequence = a + 1;
        return a
    }
    Fi.Ik = "true";
    var Yi = "";
    Fi.uh = Yi;
    var Zi = new function() {
        this.j = "";
        this.H = !1;
        this.C = 0;
        this.P = this.aa = this.Ua = this.K = ""
    };

    function $i() {
        var a = Zi.K.length;
        return Zi.K[a - 1] === "/" ? Zi.K.substring(0, a - 1) : Zi.K
    }

    function aj() {
        return Zi.H && Zi.C !== 1
    }

    function bj(a) {
        for (var b = {}, c = l(a.split("|")), d = c.next(); !d.done; d = c.next()) b[d.value] = !0;
        return b
    }
    var cj = new hb,
        dj = {},
        ej = {},
        hj = {
            name: Fi.ob,
            set: function(a, b) {
                Sc(xb(a, b), dj);
                fj()
            },
            get: function(a) {
                return gj(a, 2)
            },
            reset: function() {
                cj = new hb;
                dj = {};
                fj()
            }
        };

    function gj(a, b) {
        return b != 2 ? cj.get(a) : ij(a)
    }

    function ij(a, b) {
        var c = a.split(".");
        b = b || [];
        for (var d = dj, e = 0; e < c.length; e++) {
            if (d === null) return !1;
            if (d === void 0) break;
            d = d[c[e]];
            if (b.indexOf(d) !== -1) return
        }
        return d
    }

    function jj(a, b) {
        ej.hasOwnProperty(a) || (cj.set(a, b), Sc(xb(a, b), dj), fj())
    }

    function kj() {
        for (var a = ["gtm.allowlist", "gtm.blocklist", "gtm.whitelist", "gtm.blacklist", "tagTypeBlacklist"], b = 0; b < a.length; b++) {
            var c = a[b],
                d = gj(c, 1);
            if (Array.isArray(d) || Rc(d)) d = Sc(d);
            ej[c] = d
        }
    }

    function fj(a) {
        ib(ej, function(b, c) {
            cj.set(b, c);
            Sc(xb(b), dj);
            Sc(xb(b, c), dj);
            a && delete ej[b]
        })
    }

    function lj(a, b) {
        var c, d = (b === void 0 ? 2 : b) !== 1 ? ij(a) : cj.get(a);
        Pc(d) === "array" || Pc(d) === "object" ? c = Sc(d) : c = d;
        return c
    };
    var mj = function(a, b, c) {
            if (!c) return !1;
            var d = c.selector_type,
                e = String(c.value),
                f = Q(109),
                g;
            if (f || d === "js_variable")
                for (var k = e.replace(/\["?'?/g, ".").replace(/"?'?\]/g, "").split(","), m = 0; m < k.length; m++) {
                    var n = k[m].trim();
                    if (n && !ub(n, "#") && !ub(n, ".")) {
                        if (ub(n, "dataLayer.")) g = gj(n.substring(10));
                        else {
                            var p = n.split(".");
                            g = C[p.shift()];
                            for (var q = 0; q < p.length; q++) g = g && g[p[q]]
                        }
                        if (g !== void 0) break
                    }
                }
            if ((f && g === void 0 || !f && d === "css_selector") && Oh) try {
                var r = Nh(e);
                if (r && r.length > 0) {
                    g = [];
                    for (var u = 0; u < r.length &&
                        u < (b === "email" || b === "phone_number" ? 5 : 1); u++) g.push(wc(r[u]) || nb(r[u].value));
                    g = g.length === 1 ? g[0] : g
                }
            } catch (v) {
                S(149)
            }
            return g ? (a[b] = g, !0) : !1
        },
        nj = function(a) {
            if (a) {
                var b = {},
                    c = !1;
                c = mj(b, "email", a.email) || c;
                c = mj(b, "phone_number", a.phone) || c;
                b.address = [];
                for (var d = a.name_and_address || [], e = 0; e < d.length; e++) {
                    var f = {};
                    c = mj(f, "first_name", d[e].first_name) || c;
                    c = mj(f, "last_name", d[e].last_name) || c;
                    c = mj(f, "street", d[e].street) || c;
                    c = mj(f, "city", d[e].city) || c;
                    c = mj(f, "region", d[e].region) || c;
                    c = mj(f, "country", d[e].country) ||
                        c;
                    c = mj(f, "postal_code", d[e].postal_code) || c;
                    b.address.push(f)
                }
                return c ? b : void 0
            }
        },
        oj = function(a, b) {
            switch (a.enhanced_conversions_mode) {
                case "manual":
                    if (b && Rc(b)) return b;
                    var c = a.enhanced_conversions_manual_var;
                    if (c !== void 0) return c;
                    var d = C.enhanced_conversion_data;
                    d && S(154);
                    return d;
                case "automatic":
                    return nj(a[O.g.Lg])
            }
        },
        pj = function(a) {
            return Rc(a) ? !!a.enable_code : !1
        };
    var qj = /:[0-9]+$/,
        rj = /^\d+\.fls\.doubleclick\.net$/;

    function sj(a, b, c, d) {
        for (var e = [], f = l(a.split("&")), g = f.next(); !g.done; g = f.next()) {
            var k = l(g.value.split("=")),
                m = k.next().value,
                n = ma(k);
            if (decodeURIComponent(m.replace(/\+/g, " ")) === b) {
                var p = n.join("=");
                if (!c) return d ? p : decodeURIComponent(p.replace(/\+/g, " "));
                e.push(d ? p : decodeURIComponent(p.replace(/\+/g, " ")))
            }
        }
        return c ? e : void 0
    }

    function tj(a, b, c, d, e) {
        b && (b = String(b).toLowerCase());
        if (b === "protocol" || b === "port") a.protocol = uj(a.protocol) || uj(C.location.protocol);
        b === "port" ? a.port = String(Number(a.hostname ? a.port : C.location.port) || (a.protocol === "http" ? 80 : a.protocol === "https" ? 443 : "")) : b === "host" && (a.hostname = (a.hostname || C.location.hostname).replace(qj, "").toLowerCase());
        return vj(a, b, c, d, e)
    }

    function vj(a, b, c, d, e) {
        var f, g = uj(a.protocol);
        b && (b = String(b).toLowerCase());
        switch (b) {
            case "url_no_fragment":
                f = wj(a);
                break;
            case "protocol":
                f = g;
                break;
            case "host":
                f = a.hostname.replace(qj, "").toLowerCase();
                if (c) {
                    var k = /^www\d*\./.exec(f);
                    k && k[0] && (f = f.substring(k[0].length))
                }
                break;
            case "port":
                f = String(Number(a.port) || (g === "http" ? 80 : g === "https" ? 443 : ""));
                break;
            case "path":
                a.pathname || a.hostname || Ua("TAGGING", 1);
                f = a.pathname.substring(0, 1) === "/" ? a.pathname : "/" + a.pathname;
                var m = f.split("/");
                (d || []).indexOf(m[m.length -
                    1]) >= 0 && (m[m.length - 1] = "");
                f = m.join("/");
                break;
            case "query":
                f = a.search.replace("?", "");
                e && (f = sj(f, e, !1));
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

    function uj(a) {
        return a ? a.replace(":", "").toLowerCase() : ""
    }

    function wj(a) {
        var b = "";
        if (a && a.href) {
            var c = a.href.indexOf("#");
            b = c < 0 ? a.href : a.href.substring(0, c)
        }
        return b
    }
    var xj = {},
        yj = 0;

    function zj(a) {
        var b = xj[a];
        if (!b) {
            var c = E.createElement("a");
            a && (c.href = a);
            var d = c.pathname;
            d[0] !== "/" && (a || Ua("TAGGING", 1), d = "/" + d);
            var e = c.hostname.replace(qj, "");
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
            yj < 5 && (xj[a] = b, yj++)
        }
        return b
    }

    function Aj(a) {
        var b = zj(C.location.href),
            c = tj(b, "host", !1);
        if (c && c.match(rj)) {
            var d = tj(b, "path");
            if (d) {
                var e = d.split(a + "=");
                if (e.length > 1) return e[1].split(";")[0].split("?")[0]
            }
        }
    }

    function Bj(a) {
        for (var b = 0; b < 3; ++b) try {
            var c = decodeURIComponent(a).replace(/\+/g, " ");
            if (c === a) break;
            a = c
        } catch (d) {
            return ""
        }
        return a
    };
    var Cj = {
        "https://www.google.com": "/g",
        "https://www.googleadservices.com": "/as",
        "https://pagead2.googlesyndication.com": "/gs"
    };

    function Dj(a, b) {
        if (a) {
            var c = "" + a;
            c.indexOf("http://") !== 0 && c.indexOf("https://") !== 0 && (c = "https://" + c);
            c[c.length - 1] === "/" && (c = c.substring(0, c.length - 1));
            return zj("" + c + b).href
        }
    }

    function Ej(a, b) {
        if (aj() || Oi) return Dj(a, b)
    }

    function Fj() {
        return !!Fi.uh && Fi.uh.split("@@").join("") !== "SGTM_TOKEN"
    }

    function Gj(a) {
        for (var b = l([O.g.rd, O.g.Sb]), c = b.next(); !c.done; c = b.next()) {
            var d = U(a, c.value);
            if (d) return d
        }
    }

    function Hj(a, b) {
        return aj() ? "" + $i() + (b ? Cj[a] || "" : "") : a
    };

    function Ij(a) {
        var b = String(a[Ie.oa] || "").replace(/_/g, "");
        return ub(b, "cvt") ? "cvt" : b
    }
    var Jj = C.location.search.indexOf("?gtm_latency=") >= 0 || C.location.search.indexOf("&gtm_latency=") >= 0;
    var Kj = {
            sampleRate: "0.005000",
            Ek: "",
            wn: "0.01"
        },
        Lj = Math.random(),
        Mj;
    if (!(Mj = Jj)) {
        var Nj = Kj.sampleRate;
        Mj = Lj < Number(Nj)
    }
    var Oj = Mj,
        Pj = (ic == null ? void 0 : ic.includes("gtm_debug=d")) || Jj || Lj >= 1 - Number(Kj.wn);
    var Qj = /gtag[.\/]js/,
        Uj = /gtm[.\/]js/,
        Vj = !1;

    function Wj(a) {
        if (Vj) return "1";
        var b = a.scriptSource;
        if (b) {
            if (Qj.test(b)) return "3";
            if (Uj.test(b)) return "2"
        }
        return "0"
    }

    function Xj(a, b) {
        var c = Yj();
        c.pending || (c.pending = []);
        db(c.pending, function(d) {
            return d.target.ctid === a.ctid && d.target.isDestination === a.isDestination
        }) || c.pending.push({
            target: a,
            onLoad: b
        })
    }

    function Zj() {
        var a = C.google_tags_first_party;
        Array.isArray(a) || (a = []);
        for (var b = {}, c = l(a), d = c.next(); !d.done; d = c.next()) b[d.value] = !0;
        return Object.freeze(b)
    }
    var ak = function() {
        this.container = {};
        this.destination = {};
        this.canonical = {};
        this.pending = [];
        this.siloed = [];
        this.injectedFirstPartyContainers = {};
        this.injectedFirstPartyContainers = Zj()
    };

    function Yj() {
        var a = jc("google_tag_data", {}),
            b = a.tidr;
        b && typeof b === "object" || (b = new ak, a.tidr = b);
        var c = b;
        c.container || (c.container = {});
        c.destination || (c.destination = {});
        c.canonical || (c.canonical = {});
        c.pending || (c.pending = []);
        c.siloed || (c.siloed = []);
        c.injectedFirstPartyContainers || (c.injectedFirstPartyContainers = Zj());
        return c
    };
    var bk = {},
        ck = !1,
        Nf = {
            ctid: "G-TR5E2D5Y8N",
            canonicalContainerId: "191473170",
            jk: "G-TR5E2D5Y8N|GT-WRCZP569",
            kk: "G-TR5E2D5Y8N"
        };
    bk.ze = lb("");

    function dk() {
        var a = ek();
        return ck ? a.map(fk) : a
    }

    function gk() {
        var a = hk();
        return ck ? a.map(fk) : a
    }

    function ik() {
        return jk(Nf.ctid)
    }

    function kk() {
        return jk(Nf.canonicalContainerId || "_" + Nf.ctid)
    }

    function ek() {
        return Nf.jk ? Nf.jk.split("|") : [Nf.ctid]
    }

    function hk() {
        return Nf.kk ? Nf.kk.split("|") : []
    }

    function lk() {
        var a = mk(nk()),
            b = a && a.parent;
        if (b) return mk(b)
    }

    function mk(a) {
        var b = Yj();
        return a.isDestination ? b.destination[a.ctid] : b.container[a.ctid]
    }

    function jk(a) {
        return ck ? fk(a) : a
    }

    function fk(a) {
        return "siloed_" + a
    }

    function ok(a) {
        return ck ? pk(a) : a
    }

    function pk(a) {
        a = String(a);
        return ub(a, "siloed_") ? a.substring(7) : a
    }

    function qk() {
        var a = !1;
        if (a) {
            var b = Yj();
            if (b.siloed) {
                for (var c = [], d = ek().map(fk), e = hk().map(fk), f = {}, g = 0; g < b.siloed.length; f = {
                        hg: void 0
                    }, g++) f.hg = b.siloed[g], !ck && db(f.hg.isDestination ? e : d, function(k) {
                    return function(m) {
                        return m === k.hg.ctid
                    }
                }(f)) ? ck = !0 : c.push(f.hg);
                b.siloed = c
            }
        }
    }

    function rk() {
        var a = Yj();
        if (a.pending) {
            for (var b, c = [], d = !1, e = dk(), f = gk(), g = {}, k = 0; k < a.pending.length; g = {
                    ff: void 0
                }, k++) g.ff = a.pending[k], db(g.ff.target.isDestination ? f : e, function(m) {
                return function(n) {
                    return n === m.ff.target.ctid
                }
            }(g)) ? d || (b = g.ff.onLoad, d = !0) : c.push(g.ff);
            a.pending = c;
            if (b) try {
                b(kk())
            } catch (m) {}
        }
    }

    function sk() {
        for (var a = Nf.ctid, b = dk(), c = gk(), d = function(n, p) {
                var q = {
                    canonicalContainerId: Nf.canonicalContainerId,
                    scriptContainerId: a,
                    state: 2,
                    containers: b.slice(),
                    destinations: c.slice()
                };
                hc && (q.scriptElement = hc);
                ic && (q.scriptSource = ic);
                if (lk() === void 0) {
                    var r;
                    a: {
                        if ((q.scriptContainerId || "").indexOf("GTM-") >= 0) {
                            var u;
                            b: {
                                if (q.scriptSource) {
                                    for (var v = Zi.H, t = zj(q.scriptSource), w = v ? t.pathname : "" + t.hostname + t.pathname, x = E.scripts, y = "", A = 0; A < x.length; ++A) {
                                        var B = x[A];
                                        if (!(B.innerHTML.length === 0 || !v && B.innerHTML.indexOf(q.scriptContainerId ||
                                                "SHOULD_NOT_BE_SET") < 0 || B.innerHTML.indexOf(w) < 0)) {
                                            if (B.innerHTML.indexOf("(function(w,d,s,l,i)") >= 0) {
                                                u = String(A);
                                                break b
                                            }
                                            y = String(A)
                                        }
                                    }
                                    if (y) {
                                        u = y;
                                        break b
                                    }
                                }
                                u = void 0
                            }
                            var D = u;
                            if (D) {
                                Vj = !0;
                                r = D;
                                break a
                            }
                        }
                        var I = [].slice.call(document.scripts);r = q.scriptElement ? String(I.indexOf(q.scriptElement)) : "-1"
                    }
                    q.htmlLoadOrder = r;
                    q.loadScriptType = Wj(q)
                }
                var J = p ? e.destination : e.container,
                    F = J[n];
                F ? (p && F.state === 0 && S(93), Object.assign(F, q)) : J[n] = q
            }, e = Yj(), f = l(b), g = f.next(); !g.done; g = f.next()) d(g.value, !1);
        for (var k = l(c), m =
                k.next(); !m.done; m = k.next()) d(m.value, !0);
        e.canonical[kk()] = {};
        rk()
    }

    function tk(a) {
        return !!Yj().container[a]
    }

    function uk(a) {
        var b = Yj().destination[a];
        return !!b && !!b.state
    }

    function nk() {
        return {
            ctid: ik(),
            isDestination: bk.ze
        }
    }

    function vk(a) {
        var b = Yj();
        (b.siloed = b.siloed || []).push(a)
    }

    function wk() {
        var a = Yj().container,
            b;
        for (b in a)
            if (a.hasOwnProperty(b) && a[b].state === 1) return !0;
        return !1
    }

    function xk() {
        var a = {};
        ib(Yj().destination, function(b, c) {
            c.state === 0 && (a[pk(b)] = c)
        });
        return a
    }

    function yk(a) {
        return !!(a && a.parent && a.context && a.context.source === 1 && a.parent.ctid.indexOf("GTM-") !== 0)
    }
    var zk = "/td?id=" + Nf.ctid,
        Ak = ["v", "t", "pid", "dl", "tdp"],
        Bk = ["mcc"],
        Ck = {},
        Dk = {};

    function Ek(a, b, c) {
        Dk[a] = b;
        (c === void 0 || c) && Fk(a)
    }

    function Fk(a, b) {
        if (Ck[a] === void 0 || (b === void 0 ? 0 : b)) Ck[a] = !0
    }

    function Gk(a) {
        a = a === void 0 ? !1 : a;
        var b = Object.keys(Ck).filter(function(c) {
            return Ck[c] === !0 && Dk[c] !== void 0 && (a || !Bk.includes(c))
        }).map(function(c) {
            var d = Dk[c];
            typeof d === "function" && (d = d());
            return d ? "&" + c + "=" + d : ""
        }).join("");
        return "" + Hj("https://www.googletagmanager.com") + zk + ("" + b + "&z=0")
    }

    function Hk() {
        Object.keys(Ck).forEach(function(a) {
            Ak.indexOf(a) < 0 && (Ck[a] = !1)
        })
    }

    function Ik(a) {
        a = a === void 0 ? !1 : a;
        if (Pj && Nf.ctid) {
            var b = Gk(a);
            a ? Cc(b) : rc(b);
            Hk()
        }
    }

    function Jk() {
        Object.keys(Ck).filter(function(a) {
            return Ck[a] && !Ak.includes(a)
        }).length > 0 && Ik(!0)
    }
    var Kk = eb();

    function Lk() {
        Kk = eb()
    }

    function Mk() {
        Ek("v", "3");
        Ek("t", "t");
        Ek("pid", function() {
            return String(Kk)
        });
        tc(C, "pagehide", Jk);
        C.setInterval(Lk, 864E5)
    }

    function Nk() {
        var a = jc("google_tag_data", {});
        return a.ics = a.ics || new Ok
    }
    var Ok = function() {
        this.entries = {};
        this.waitPeriodTimedOut = this.wasSetLate = this.accessedAny = this.accessedDefault = this.usedImplicit = this.usedUpdate = this.usedDefault = this.usedDeclare = this.active = !1;
        this.j = []
    };
    Ok.prototype.default = function(a, b, c, d, e, f, g) {
        this.usedDefault || this.usedDeclare || !this.accessedDefault && !this.accessedAny || (this.wasSetLate = !0);
        this.usedDefault = this.active = !0;
        Ua("TAGGING", 19);
        b == null ? Ua("TAGGING", 18) : Pk(this, a, b === "granted", c, d, e, f, g)
    };
    Ok.prototype.waitForUpdate = function(a, b, c) {
        for (var d = 0; d < a.length; d++) Pk(this, a[d], void 0, void 0, "", "", b, c)
    };
    var Pk = function(a, b, c, d, e, f, g, k) {
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
                m[b] === u && u.quiet && (Ua("TAGGING", 2), a.waitPeriodTimedOut = !0, a.clearTimeout(b, void 0, k),
                    a.notifyListeners())
            }, g)
        }
    };
    h = Ok.prototype;
    h.clearTimeout = function(a, b, c) {
        var d = [a],
            e = c.delegatedConsentTypes,
            f;
        for (f in e) e.hasOwnProperty(f) && e[f] === a && d.push(f);
        var g = this.entries[a] || {},
            k = this.getConsentState(a, c);
        if (g.quiet) {
            g.quiet = !1;
            for (var m = l(d), n = m.next(); !n.done; n = m.next()) Qk(this, n.value)
        } else if (b !== void 0 && k !== b)
            for (var p = l(d), q = p.next(); !q.done; q = p.next()) Qk(this, q.value)
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
    var Qk = function(a, b) {
        for (var c = 0; c < a.j.length; ++c) {
            var d = a.j[c];
            Array.isArray(d.consentTypes) && d.consentTypes.indexOf(b) !== -1 && (d.lk = !0)
        }
    };
    Ok.prototype.notifyListeners = function(a, b) {
        for (var c = 0; c < this.j.length; ++c) {
            var d = this.j[c];
            if (d.lk) {
                d.lk = !1;
                try {
                    d.Ed({
                        consentEventId: a,
                        consentPriorityId: b
                    })
                } catch (e) {}
            }
        }
    };
    var Rk = !1,
        Sk = !1,
        Tk = {},
        Uk = {
            delegatedConsentTypes: {},
            corePlatformServices: {},
            usedCorePlatformServices: !1,
            selectedAllCorePlatformServices: !1,
            containerScopedDefaults: (Tk.ad_storage = 1, Tk.analytics_storage = 1, Tk.ad_user_data = 1, Tk.ad_personalization = 1, Tk),
            usedContainerScopedDefaults: !1
        };

    function Vk(a) {
        var b = Nk();
        b.accessedAny = !0;
        return (z(a) ? [a] : a).every(function(c) {
            switch (b.getConsentState(c, Uk)) {
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

    function Wk(a) {
        var b = Nk();
        b.accessedAny = !0;
        return b.getConsentState(a, Uk)
    }

    function Xk(a) {
        for (var b = {}, c = l(a), d = c.next(); !d.done; d = c.next()) {
            var e = d.value;
            b[e] = Uk.corePlatformServices[e] !== !1
        }
        return b
    }

    function Yk(a) {
        var b = Nk();
        b.accessedAny = !0;
        return !(b.entries[a] || {}).quiet
    }

    function Zk() {
        if (!Za(9)) return !1;
        var a = Nk();
        a.accessedAny = !0;
        if (a.active) return !0;
        if (!Uk.usedContainerScopedDefaults) return !1;
        for (var b = l(Object.keys(Uk.containerScopedDefaults)), c = b.next(); !c.done; c = b.next())
            if (Uk.containerScopedDefaults[c.value] !== 1) return !0;
        return !1
    }

    function $k(a, b) {
        Nk().addListener(a, b)
    }

    function al(a, b) {
        Nk().notifyListeners(a, b)
    }

    function bl(a, b) {
        function c() {
            for (var e = 0; e < b.length; e++)
                if (!Yk(b[e])) return !0;
            return !1
        }
        if (c()) {
            var d = !1;
            $k(b, function(e) {
                d || c() || (d = !0, a(e))
            })
        } else a({})
    }

    function cl(a, b) {
        function c() {
            for (var k = [], m = 0; m < e.length; m++) {
                var n = e[m];
                Vk(n) && !f[n] && k.push(n)
            }
            return k
        }

        function d(k) {
            for (var m = 0; m < k.length; m++) f[k[m]] = !0
        }
        var e = z(b) ? [b] : b,
            f = {},
            g = c();
        g.length !== e.length && (d(g), $k(e, function(k) {
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
    var dl = ["ad_storage", "analytics_storage", "ad_user_data", "ad_personalization"],
        el = !1,
        fl = !1;

    function gl() {
        !fl && el && (dl.some(function(a) {
            return Uk.containerScopedDefaults[a] !== 1
        }) || hl("mbc"));
        fl = !0
    }

    function hl(a) {
        Pj && (Ek(a, "1"), Ik())
    }

    function il(a) {
        Ua("HEALTH", a)
    };
    var jl;
    try {
        jl = JSON.parse(Ra("eyIwIjoiQlIiLCIxIjoiQlItU1AiLCIyIjpmYWxzZSwiMyI6Imdvb2dsZS5jb20uYnIiLCI0IjoiIiwiNSI6ZmFsc2UsIjYiOmZhbHNlLCI3IjoiYWRfc3RvcmFnZXxhbmFseXRpY3Nfc3RvcmFnZXxhZF91c2VyX2RhdGF8YWRfcGVyc29uYWxpemF0aW9uIn0"))
    } catch (a) {
        S(123), il(2), jl = {}
    }

    function kl() {
        return jl["0"] || ""
    }

    function ll() {
        return jl["1"] || ""
    }

    function ml() {
        var a = !1;
        a = !!jl["2"];
        return a
    }

    function nl() {
        return jl["6"] !== !1
    }

    function ol() {
        var a = "";
        a = jl["4"] || "";
        return a
    }

    function pl() {
        var a = !1;
        a = !!jl["5"];
        return a
    }

    function ql() {
        var a = "";
        a = jl["3"] || "";
        return a
    }
    var rl = [O.g.O, O.g.U, O.g.N, O.g.za],
        sl, tl;

    function ul(a) {
        for (var b = a[O.g.Jb], c = Array.isArray(b) ? b : [b], d = {
                Ue: 0
            }; d.Ue < c.length; d = {
                Ue: d.Ue
            }, ++d.Ue) ib(a, function(e) {
            return function(f, g) {
                if (f !== O.g.Jb) {
                    var k = c[e.Ue],
                        m = kl(),
                        n = ll();
                    Sk = !0;
                    Rk && Ua("TAGGING", 20);
                    Nk().declare(f, g, k, m, n)
                }
            }
        }(d))
    }

    function vl(a) {
        gl();
        !tl && sl && hl("crc");
        tl = !0;
        var b = a[O.g.Jb];
        b && S(40);
        var c = a[O.g.tf];
        c && S(41);
        for (var d = Array.isArray(b) ? b : [b], e = {
                Ve: 0
            }; e.Ve < d.length; e = {
                Ve: e.Ve
            }, ++e.Ve) ib(a, function(f) {
            return function(g, k) {
                if (g !== O.g.Jb && g !== O.g.tf) {
                    var m = d[f.Ve],
                        n = Number(c),
                        p = kl(),
                        q = ll();
                    n = n === void 0 ? 0 : n;
                    Rk = !0;
                    Sk && Ua("TAGGING", 20);
                    Nk().default(g, k, m, p, q, n, Uk)
                }
            }
        }(e))
    }

    function wl(a) {
        Uk.usedContainerScopedDefaults = !0;
        var b = a[O.g.Jb];
        if (b) {
            var c = Array.isArray(b) ? b : [b];
            if (!c.includes(ll()) && !c.includes(kl())) return
        }
        ib(a, function(d, e) {
            switch (d) {
                case "ad_storage":
                case "analytics_storage":
                case "ad_user_data":
                case "ad_personalization":
                    break;
                default:
                    return
            }
            Uk.usedContainerScopedDefaults = !0;
            Uk.containerScopedDefaults[d] = e === "granted" ? 3 : 2
        })
    }

    function xl(a, b) {
        gl();
        sl = !0;
        ib(a, function(c, d) {
            Rk = !0;
            Sk && Ua("TAGGING", 20);
            Nk().update(c, d, Uk)
        });
        al(b.eventId, b.priorityId)
    }

    function yl(a) {
        a.hasOwnProperty("all") && (Uk.selectedAllCorePlatformServices = !0, ib(Bh, function(b) {
            Uk.corePlatformServices[b] = a.all === "granted";
            Uk.usedCorePlatformServices = !0
        }));
        ib(a, function(b, c) {
            b !== "all" && (Uk.corePlatformServices[b] = c === "granted", Uk.usedCorePlatformServices = !0)
        })
    }

    function V(a) {
        Array.isArray(a) || (a = [a]);
        return a.every(function(b) {
            return Vk(b)
        })
    }

    function zl(a, b) {
        $k(a, b)
    }

    function Al(a, b) {
        cl(a, b)
    }

    function Bl(a, b) {
        bl(a, b)
    }

    function Cl() {
        var a = [O.g.O, O.g.za, O.g.N];
        Nk().waitForUpdate(a, 500, Uk)
    }

    function Dl(a) {
        for (var b = l(a), c = b.next(); !c.done; c = b.next()) {
            var d = c.value;
            Nk().clearTimeout(d, void 0, Uk)
        }
        al()
    }
    var El = !1,
        Fl = [];
    var Gl = {
            Nj: "service_worker_endpoint",
            vh: "shared_user_id",
            wh: "shared_user_id_requested",
            Ee: "shared_user_id_source",
            uf: "cookie_deprecation_label"
        },
        Hl;

    function Il(a) {
        if (!Hl) {
            Hl = {};
            for (var b = l(Object.keys(Gl)), c = b.next(); !c.done; c = b.next()) Hl[Gl[c.value]] = !0
        }
        return !!Hl[a]
    }

    function Jl(a, b) {
        b = b === void 0 ? !1 : b;
        if (Il(a)) {
            var c, d, e = (d = (c = jc("google_tag_data", {})).xcd) != null ? d : c.xcd = {};
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

    function Kl(a, b) {
        var c = Jl(a, !0);
        c && c.set(b)
    }

    function Ll(a) {
        var b;
        return (b = Jl(a)) == null ? void 0 : b.get()
    }

    function Ml(a, b) {
        if (typeof b === "function") {
            var c;
            return (c = Jl(a, !0)) == null ? void 0 : c.subscribe(b)
        }
    }

    function Nl(a, b) {
        var c = Jl(a);
        return c ? c.unsubscribe(b) : !1
    };

    function Ol() {
        if (Gi.pscdl !== void 0) Ll(Gl.uf) === void 0 && Kl(Gl.uf, Gi.pscdl);
        else {
            var a = function(c) {
                    Gi.pscdl = c;
                    Kl(Gl.uf, c)
                },
                b = function() {
                    a("error")
                };
            try {
                fc.cookieDeprecationLabel ? (a("pending"), fc.cookieDeprecationLabel.getValue().then(a).catch(b)) : a("noapi")
            } catch (c) {
                b(c)
            }
        }
    };

    function Pl(a, b) {
        b && ib(b, function(c, d) {
            typeof d !== "object" && d !== void 0 && (a["1p." + c] = String(d))
        })
    };
    var Ql = /[A-Z]+/,
        Rl = /\s/;

    function Sl(a, b) {
        
        if (z(a)) {
            a = nb(a);
            var c = a.indexOf("-");
            if (!(c < 0)) {
                var d = a.substring(0, c);
                if (Ql.test(d)) {
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
                            if (!f[m] || Rl.test(f[m]) && (d !== "AW" || m !== 1)) return
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

    function Tl(a, b) {
        for (var c = {}, d = 0; d < a.length; ++d) {
            var e = Sl(a[d], b);
            e && (c[e.id] = e)
        }
        Ul(c);
        var f = [];
        ib(c, function(g, k) {
            f.push(k)
        });
        return f
    }

    function Ul(a) {
        var b = [],
            c;
        for (c in a)
            if (a.hasOwnProperty(c)) {
                var d = a[c];
                d.prefix === "AW" && d.ids[Vl[2]] && b.push(d.destinationId)
            } for (var e = 0; e < b.length; ++e) delete a[b[e]]
    }
    var Wl = {},
        Vl = (Wl[0] = 0, Wl[1] = 0, Wl[2] = 1, Wl[3] = 0, Wl[4] = 1, Wl[5] = 2, Wl[6] = 0, Wl[7] = 0, Wl[8] = 0, Wl);
    var Xl = Number('') || 500,
        Yl = {},
        Zl = {},
        $l = {
            initialized: 11,
            complete: 12,
            interactive: 13
        },
        am = {},
        bm = Object.freeze((am[O.g.Na] = !0, am)),
        cm = E.location.search.indexOf("?gtm_diagnostics=") >= 0 || E.location.search.indexOf("&gtm_diagnostics=") >= 0,
        dm = void 0;

    function em(a, b) {
        if (b.length && Pj) {
            var c;
            (c = Yl)[a] != null || (c[a] = []);
            Zl[a] != null || (Zl[a] = []);
            var d = b.filter(function(e) {
                return !Zl[a].includes(e)
            });
            Yl[a].push.apply(Yl[a], na(d));
            Zl[a].push.apply(Zl[a], na(d));
            !dm && d.length > 0 && (Fk("tdc", !0), dm = C.setTimeout(function() {
                Ik();
                Yl = {};
                dm = void 0
            }, Xl))
        }
    }

    function fm(a, b, c) {
        
        if (Pj && a === "config") {
            var d, e = (d = Sl(b)) == null ? void 0 : d.ids;
            if (!(e && e.length > 1)) {
                var f, g = jc("google_tag_data", {});
                g.td || (g.td = {});
                f = g.td;
                var k = Sc(c.K);
                Sc(c.j, k);
                var m = [],
                    n;
                for (n in f)
                    if (f.hasOwnProperty(n)) {
                        var p = gm(f[n], k);
                        p.length && (cm && console.log(p), m.push(n))
                    } m.length && (em(b, m), Ua("TAGGING", $l[E.readyState] || 14));
                f[b] = k
            }
        }
    }

    function hm(a, b) {
        var c = {},
            d;
        for (d in b) b.hasOwnProperty(d) && (c[d] = !0);
        for (var e in a) a.hasOwnProperty(e) && (c[e] = !0);
        return c
    }

    function gm(a, b, c, d) {
        c = c === void 0 ? {} : c;
        d = d === void 0 ? "" : d;
        if (a === b) return [];
        var e = function(r, u) {
                var v;
                Pc(u) === "object" ? v = u[r] : Pc(u) === "array" && (v = u[r]);
                return v === void 0 ? bm[r] : v
            },
            f = hm(a, b),
            g;
        for (g in f)
            if (f.hasOwnProperty(g)) {
                var k = (d ? d + "." : "") + g,
                    m = e(g, a),
                    n = e(g, b),
                    p = Pc(m) === "object" || Pc(m) === "array",
                    q = Pc(n) === "object" || Pc(n) === "array";
                if (p && q) gm(m, n, c, k);
                else if (p || q || m !== n) c[k] = !0
            } return Object.keys(c)
    }

    function im() {
        Ek("tdc", function() {
            dm && (C.clearTimeout(dm), dm = void 0);
            var a = [],
                b;
            for (b in Yl) Yl.hasOwnProperty(b) && a.push(b + "*" + Yl[b].join("."));
            return a.length ? a.join("!") : void 0
        }, !1)
    };
    var jm = function(a, b, c, d, e, f, g, k, m, n, p) {
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
        km = function(a, b) {
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
        U = function(a, b, c, d) {
            for (var e = l(km(a, d === void 0 ? 3 :
                    d)), f = e.next(); !f.done; f = e.next()) {
                var g = f.value;
                if (g[b] !== void 0) return g[b]
            }
            return c
        },
        lm = function(a) {
            for (var b = {}, c = km(a, 4), d = l(c), e = d.next(); !e.done; e = d.next())
                for (var f = Object.keys(e.value), g = l(f), k = g.next(); !k.done; k = g.next()) b[k.value] = 1;
            return Object.keys(b)
        },
        mm = function(a, b, c) {
            function d(n) {
                Rc(n) && ib(n, function(p, q) {
                    f = !0;
                    e[p] = q
                })
            }
            var e = {},
                f = !1,
                g = km(a, c === void 0 ? 3 : c);
            g.reverse();
            for (var k = l(g), m = k.next(); !m.done; m = k.next()) d(m.value[b]);
            return f ? e : void 0
        },
        nm = function(a) {
            for (var b = [O.g.Zc, O.g.Vc,
                    O.g.Wc, O.g.Xc, O.g.Yc, O.g.bd, O.g.dd
                ], c = km(a, 3), d = l(c), e = d.next(); !e.done; e = d.next()) {
                for (var f = e.value, g = {}, k = !1, m = l(b), n = m.next(); !n.done; n = m.next()) {
                    var p = n.value;
                    f[p] !== void 0 && (g[p] = f[p], k = !0)
                }
                var q = k ? g : void 0;
                if (q) return q
            }
            return {}
        },
        om = function(a, b) {
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
        pm = function(a, b) {
            a.C = b;
            return a
        },
        qm = function(a, b) {
            a.P = b;
            return a
        },
        rm = function(a, b) {
            a.j = b;
            return a
        },
        sm = function(a, b) {
            a.H = b;
            return a
        },
        tm = function(a, b) {
            a.aa = b;
            return a
        },
        um = function(a, b) {
            a.K = b;
            return a
        },
        vm = function(a, b) {
            a.eventMetadata = b || {};
            return a
        },
        wm = function(a, b) {
            a.onSuccess = b;
            return a
        },
        xm = function(a, b) {
            a.onFailure = b;
            return a
        },
        ym = function(a, b) {
            a.isGtmEvent = b;
            return a
        },
        zm = function(a) {
            return new jm(a.eventId, a.priorityId, a.C, a.P, a.j, a.H, a.K, a.eventMetadata, a.onSuccess, a.onFailure, a.isGtmEvent)
        };
    var Am = {
            Dk: Number("5"),
            lo: Number("")
        },
        Bm = [];

    function Cm(a) {
        Bm.push(a)
    }
    var Dm = "?id=" + Nf.ctid,
        Em = void 0,
        Fm = {},
        Gm = void 0,
        Hm = new function() {
            var a = 5;
            Am.Dk > 0 && (a = Am.Dk);
            this.C = a;
            this.j = 0;
            this.H = []
        },
        Im = 1E3;

    function Jm(a, b) {
        var c = Em;
        if (c === void 0)
            if (b) c = Xi();
            else return "";
        for (var d = [Hj("https://www.googletagmanager.com"), "/a", Dm], e = l(Bm), f = e.next(); !f.done; f = e.next())
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

    function Km() {
        Gm && (C.clearTimeout(Gm), Gm = void 0);
        if (Em !== void 0 && Lm) {
            var a;
            (a = Fm[Em]) || (a = Hm.j < Hm.C ? !1 : pb() - Hm.H[Hm.j % Hm.C] < 1E3);
            if (a || Im-- <= 0) S(1), Fm[Em] = !0;
            else {
                var b = Hm.j++ % Hm.C;
                Hm.H[b] = pb();
                var c = Jm(!0);
                rc(c);
                Lm = !1
            }
        }
    }
    var Lm = !1;

    function Mm(a) {
        Fm[a] || (a !== Em && (Km(), Em = a), Lm = !0, Gm || (Gm = C.setTimeout(Km, 500)), Jm().length >= 2022 && Km())
    }
    var Nm = eb();

    function Om() {
        Nm = eb()
    }

    function Pm() {
        return [
            ["v", "3"],
            ["t", "t"],
            ["pid", String(Nm)]
        ]
    }
    var Qm = {};

    function Rm(a, b, c) {
        Oj && a !== void 0 && (Qm[a] = Qm[a] || [], Qm[a].push(c + b), Mm(a))
    }

    function Sm(a) {
        var b = a.eventId,
            c = a.Tc,
            d = [],
            e = Qm[b] || [];
        e.length && d.push(["epr", e.join(".")]);
        c && delete Qm[b];
        return d
    };

    function Tm(a, b) {
        var c = Sl(jk(a), !0);
        c && Um.register(c, b)
    }

    function Vm(a, b, c, d) {
        var e = Sl(c, d.isGtmEvent);
        e && (Q(49) && Li && (d.deferrable = !0), Um.push("event", [b, a], e, d))
    }

    function Wm(a, b, c, d) {
        var e = Sl(c, d.isGtmEvent);
        e && Um.push("get", [a, b], e, d)
    }

    function Xm(a) {
        var b = Sl(jk(a), !0),
            c;
        b ? c = Ym(Um, b).j : c = {};
        return c
    }

    function Zm(a, b) {
        var c = Sl(jk(a), !0);
        if (c) {
            var d = Um,
                e = Sc(b, null);
            Sc(Ym(d, c).j, e);
            Ym(d, c).j = e
        }
    }
    var $m = function() {
            this.P = {};
            this.j = {};
            this.C = {};
            this.aa = null;
            this.K = {};
            this.H = !1;
            this.status = 1
        },
        an = function(a, b, c, d) {
            this.C = pb();
            this.j = b;
            this.args = c;
            this.messageContext = d;
            this.type = a
        },
        bn = function() {
            this.destinations = {};
            this.j = {};
            this.commands = []
        },
        Ym = function(a, b) {
            var c = b.destinationId;
            return a.destinations[c] = a.destinations[c] || new $m
        },
        cn = function(a, b, c, d) {
            
            if (d.j) {
                var e = Ym(a, d.j),
                    f = e.aa;
                if (f) {
                    var g = Sc(c, null),
                        k = Sc(e.P[d.j.id], null),
                        m = Sc(e.K, null),
                        n = Sc(e.j, null),
                        p = Sc(a.j, null),
                        q = {};
                    if (Oj) try {
                        q = Sc(dj)
                    } catch (t) {
                        S(72)
                    }
                    var r =
                        d.j.prefix,
                        u = function(t) {
                            Rm(d.messageContext.eventId, r, t)
                        },
                        v = zm(ym(xm(wm(vm(tm(sm(um(rm(qm(pm(new om(d.messageContext.eventId, d.messageContext.priorityId), g), k), m), n), p), q), d.messageContext.eventMetadata), function() {
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
                        Rm(d.messageContext.eventId, r, "1"), fm(d.type, d.j.id, v),
                            f(d.j.id, b, d.C, v)
                    } catch (t) {
                        Rm(d.messageContext.eventId, r, "4")
                    }
                }
            }
        };
    bn.prototype.register = function(a, b, c) {
        console.log("register");
        console.log("a",a);
        var d = Ym(this, a);
        console.log("d",d);
        console.log("---------------------");
        d.status !== 3 && (d.aa = b, d.status = 3, c && (Sc(d.j, c), d.j = c), this.flush())
    };
    bn.prototype.push = function(a, b, c, d) {
        console.log("push");
        console.log("a",a);
        console.log("b",b);
        console.log("c",c);
        console.log("d",d);
        console.log("---------------------");
        c !== void 0 && (Ym(this, c).status === 1 && (Ym(this, c).status = 2, this.push("require", [{}], c, {})), Ym(this, c).H && (d.deferrable = !1));
        this.commands.push(new an(a, c, b, d));
        d.deferrable || this.flush()
    };
    bn.prototype.flush = function(a) {
        console.log("flush");
        
        for (var b = this, c = [], d = !1, e = {}; this.commands.length; e = {
                Jc: void 0,
                Kh: void 0
            }) {
            var f = this.commands[0],
                g = f.j;
            if (f.messageContext.deferrable) !g || Ym(this, g).H ? (f.messageContext.deferrable = !1, this.commands.push(f)) : c.push(f), this.commands.shift();
            else {
                
                switch (f.type) {
                    case "require":
                        if (Ym(this, g).status !== 3 && !a) {
                            this.commands.push.apply(this.commands, c);
                            return
                        }
                        break;
                    case "set":
                        ib(f.args[0], function(r, u) {
                            Sc(xb(r, u), b.j)
                        });
                        break;
                    case "config":
                        var k = Ym(this, g);
                        e.Jc = {};
                        ib(f.args[0],
                            function(r) {
                                return function(u, v) {
                                    Sc(xb(u, v), r.Jc)
                                }
                            }(e));
                        var m = !!e.Jc[O.g.nc];
                        delete e.Jc[O.g.nc];
                        var n = g.destinationId === g.id;
                        m || (n ? k.K = {} : k.P[g.id] = {});
                        console.log("CONFIG");
                        console.log("this",this);
                        console.log("O.g.ba",O.g.ba);
                        console.log("e.Jc",c);
                        console.log("f",f);
                        console.log("---------------------");
                        k.H && m || cn(this, O.g.ba, e.Jc, f);
                        k.H = !0;
                        n ? Sc(e.Jc, k.K) : (Sc(e.Jc, k.P[g.id]), S(70));
                        d = !0;
                        break;
                    case "event":
                        e.Kh = {};
                        ib(f.args[0], function(r) {
                            return function(u, v) {
                                Sc(xb(u, v), r.Kh)
                            }
                        }(e));
                        console.log("EVENT");
                        console.log("this",this);
                        console.log("f.args[1]",f.args[1]);
                        console.log("e.Kh",e.Kh);
                        console.log("f",f);
                        console.log("---------------------");
                        cn(this, f.args[1], e.Kh, f);
                        break;
                    case "get":
                        var p = {},
                            q = (p[O.g.xb] = f.args[0], p[O.g.Mb] = f.args[1], p);
                        console.log("----------------------------");
                        console.log("this, O.g.Ya, q, f",this, O.g.Ya, q, f);
                        cn(this, O.g.Ya, q, f)
                }
                this.commands.shift();
                dn(this, f)
            }
        }
        this.commands.push.apply(this.commands,
            c);
        d && this.flush()
    };
    var dn = function(a, b) {
            if (b.type !== "require")
                if (b.j)
                    for (var c = Ym(a, b.j).C[b.type] || [], d = 0; d < c.length; d++) c[d]();
                else
                    for (var e in a.destinations)
                        if (a.destinations.hasOwnProperty(e)) {
                            var f = a.destinations[e];
                            if (f && f.C)
                                for (var g = f.C[b.type] || [], k = 0; k < g.length; k++) g[k]()
                        }
        },
        Um = new bn;
    var en = function(a, b) {
            var c = function() {};
            c.prototype = a.prototype;
            var d = new c;
            a.apply(d, Array.prototype.slice.call(arguments, 1));
            return d
        },
        fn = function(a) {
            var b = a;
            return function() {
                if (b) {
                    var c = b;
                    b = null;
                    c()
                }
            }
        };
    var gn = function(a, b, c) {
            a.addEventListener && a.addEventListener(b, c, !1)
        },
        hn = function(a, b, c) {
            a.removeEventListener && a.removeEventListener(b, c, !1)
        };
    var jn, kn;
    a: {
        for (var ln = ["CLOSURE_FLAGS"], mn = ya, nn = 0; nn < ln.length; nn++)
            if (mn = mn[ln[nn]], mn == null) {
                kn = null;
                break a
            } kn = mn
    }
    var on = kn && kn[610401301];
    jn = on != null ? on : !1;

    function pn() {
        var a = ya.navigator;
        if (a) {
            var b = a.userAgent;
            if (b) return b
        }
        return ""
    }
    var qn, rn = ya.navigator;
    qn = rn ? rn.userAgentData || null : null;

    function sn(a) {
        return jn ? qn ? qn.brands.some(function(b) {
            var c;
            return (c = b.brand) && c.indexOf(a) != -1
        }) : !1 : !1
    }

    function tn(a) {
        return pn().indexOf(a) != -1
    };

    function un() {
        return jn ? !!qn && qn.brands.length > 0 : !1
    }

    function vn() {
        return un() ? !1 : tn("Opera")
    }

    function wn() {
        return tn("Firefox") || tn("FxiOS")
    }

    function xn() {
        return un() ? sn("Chromium") : (tn("Chrome") || tn("CriOS")) && !(un() ? 0 : tn("Edge")) || tn("Silk")
    };

    function yn() {
        return jn ? !!qn && !!qn.platform : !1
    }

    function zn() {
        return tn("iPhone") && !tn("iPod") && !tn("iPad")
    }

    function An() {
        zn() || tn("iPad") || tn("iPod")
    };
    var Bn = function(a) {
        Bn[" "](a);
        return a
    };
    Bn[" "] = function() {};
    vn();
    un() || tn("Trident") || tn("MSIE");
    tn("Edge");
    !tn("Gecko") || pn().toLowerCase().indexOf("webkit") != -1 && !tn("Edge") || tn("Trident") || tn("MSIE") || tn("Edge");
    pn().toLowerCase().indexOf("webkit") != -1 && !tn("Edge") && tn("Mobile");
    yn() || tn("Macintosh");
    yn() || tn("Windows");
    (yn() ? qn.platform === "Linux" : tn("Linux")) || yn() || tn("CrOS");
    yn() || tn("Android");
    zn();
    tn("iPad");
    tn("iPod");
    An();
    pn().toLowerCase().indexOf("kaios");
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
    var Hn = function(a) {
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
        In = function(a, b) {
            if (a)
                for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a)
        },
        Jn = function(a) {
            if (C.top == C) return 0;
            if (a === void 0 ? 0 : a) {
                var b = C.location.ancestorOrigins;
                if (b) return b[b.length - 1] == C.location.origin ? 1 : 2
            }
            return Hn(C.top) ? 1 : 2
        },
        Kn = function(a) {
            a = a === void 0 ? document : a;
            return a.createElement("img")
        },
        Ln = function() {
            for (var a = C, b = a; a && a != a.parent;) a =
                a.parent, Hn(a) && (b = a);
            return b
        };

    function Mn(a, b, c, d) {
        d = d === void 0 ? !1 : d;
        a.google_image_requests || (a.google_image_requests = []);
        var e = Kn(a.document);
        if (c) {
            var f = function() {
                if (c) {
                    var g = a.google_image_requests,
                        k = cc(g, e);
                    k >= 0 && Array.prototype.splice.call(g, k, 1)
                }
                hn(e, "load", f);
                hn(e, "error", f)
            };
            gn(e, "load", f);
            gn(e, "error", f)
        }
        d && (e.attributionSrc = "");
        e.src = b;
        a.google_image_requests.push(e)
    }
    var On = function(a) {
            var b;
            b = b === void 0 ? !1 : b;
            var c = "https://pagead2.googlesyndication.com/pagead/gen_204?id=tcfe";
            In(a, function(d, e) {
                if (d || d === 0) c += "&" + e + "=" + encodeURIComponent("" + d)
            });
            Nn(c, b)
        },
        Nn = function(a, b) {
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
            } else Mn(c, a, b === void 0 ? !1 : b, d === void 0 ? !1 : d)
        };
    var Pn = function() {
        this.P = this.P;
        this.C = this.C
    };
    Pn.prototype.P = !1;
    Pn.prototype.dispose = function() {
        this.P || (this.P = !0, this.Ua())
    };
    Pn.prototype[Symbol.dispose] = function() {
        this.dispose()
    };
    Pn.prototype.addOnDisposeCallback = function(a, b) {
        this.P ? b !== void 0 ? a.call(b) : a() : (this.C || (this.C = []), b && (a = a.bind(b)), this.C.push(a))
    };
    Pn.prototype.Ua = function() {
        if (this.C)
            for (; this.C.length;) this.C.shift()()
    };
    var Qn = function(a) {
            a.addtlConsent !== void 0 && typeof a.addtlConsent !== "string" && (a.addtlConsent = void 0);
            a.gdprApplies !== void 0 && typeof a.gdprApplies !== "boolean" && (a.gdprApplies = void 0);
            return a.tcString !== void 0 && typeof a.tcString !== "string" || a.listenerId !== void 0 && typeof a.listenerId !== "number" ? 2 : a.cmpStatus && a.cmpStatus !== "error" ? 0 : 3
        },
        Rn = function(a, b) {
            b = b === void 0 ? {} : b;
            Pn.call(this);
            this.H = a;
            this.j = null;
            this.aa = {};
            this.dg = 0;
            var c;
            this.xe = (c = b.rn) != null ? c : 500;
            var d;
            this.Ic = (d = b.Tn) != null ? d : !1;
            this.K =
                null
        };
    wa(Rn, Pn);
    Rn.prototype.Ua = function() {
        this.aa = {};
        this.K && (hn(this.H, "message", this.K), delete this.K);
        delete this.aa;
        delete this.H;
        delete this.j;
        Pn.prototype.Ua.call(this)
    };
    var Tn = function(a) {
        return typeof a.H.__tcfapi === "function" || Sn(a) != null
    };
    Rn.prototype.addEventListener = function(a) {
        var b = this,
            c = {
                internalBlockOnErrors: this.Ic
            },
            d = fn(function() {
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
            g ? (c = g, c.internalErrorState = Qn(c), c.internalBlockOnErrors = b.Ic, k && c.internalErrorState === 0 || (c.tcString = "tcunavailable", k || (c.internalErrorState = 3))) : (c.tcString = "tcunavailable", c.internalErrorState = 3);
            a(c)
        };
        try {
            Un(this, "addEventListener", f)
        } catch (g) {
            c.tcString =
                "tcunavailable", c.internalErrorState = 3, e && (clearTimeout(e), e = 0), d()
        }
    };
    Rn.prototype.removeEventListener = function(a) {
        a && a.listenerId && Un(this, "removeEventListener", null, a.listenerId)
    };
    var Wn = function(a, b, c) {
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
                    var n = Vn(a.vendor.consents, d === void 0 ? "755" : d);
                    m = n && b === "1" && a.purposeOneTreatment && a.publisherCC === "CH" ? !0 : n && Vn(a.purpose.consents, b)
                } else m = !0;
            else m = k === 1 ? a.purpose && a.vendor ? Vn(a.purpose.legitimateInterests,
                b) && Vn(a.vendor.legitimateInterests, d === void 0 ? "755" : d) : !0 : !0;
            return m
        },
        Vn = function(a, b) {
            return !(!a || !a[b])
        },
        Un = function(a, b, c, d) {
            c || (c = function() {});
            if (typeof a.H.__tcfapi === "function") {
                var e = a.H.__tcfapi;
                e(b, 2, c, d)
            } else if (Sn(a)) {
                Xn(a);
                var f = ++a.dg;
                a.aa[f] = c;
                if (a.j) {
                    var g = {};
                    a.j.postMessage((g.__tcfapiCall = {
                        command: b,
                        version: 2,
                        callId: f,
                        parameter: d
                    }, g), "*")
                }
            } else c({}, !1)
        },
        Sn = function(a) {
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
        Xn = function(a) {
            a.K || (a.K = function(b) {
                try {
                    var c;
                    c = (typeof b.data === "string" ? JSON.parse(b.data) : b.data).__tcfapiReturn;
                    a.aa[c.callId](c.returnValue, c.success)
                } catch (d) {}
            }, gn(a.H, "message", a.K))
        },
        Yn = function(a) {
            if (a.gdprApplies === !1) return !0;
            a.internalErrorState === void 0 && (a.internalErrorState = Qn(a));
            return a.cmpStatus === "error" || a.internalErrorState !== 0 ? a.internalBlockOnErrors ?
                (On({
                    e: String(a.internalErrorState)
                }), !1) : !0 : a.cmpStatus !== "loaded" || a.eventStatus !== "tcloaded" && a.eventStatus !== "useractioncomplete" ? !1 : !0
        };
    var Zn = {
        1: 0,
        3: 0,
        4: 0,
        7: 3,
        9: 3,
        10: 3
    };

    function $n() {
        var a = Gi.tcf || {};
        return Gi.tcf = a
    }
    var jo = function() {
        return new Rn(C, {
            rn: -1
        })
    };

    function ko() {
        var a = $n(),
            b = jo();
        Tn(b) && !lo() && !mo() && S(124);
        if (!a.active && Tn(b)) {
            lo() && (a.active = !0, a.uc = {}, a.cmpId = 0, a.tcfPolicyVersion = 0, Nk().active = !0, a.tcString = "tcunavailable");
            Cl();
            try {
                b.addEventListener(function(c) {
                    if (c.internalErrorState !== 0) no(a), Dl([O.g.O, O.g.za, O.g.N]), Nk().active = !0;
                    else if (a.gdprApplies = c.gdprApplies, a.cmpId = c.cmpId, a.enableAdvertiserConsentMode = c.enableAdvertiserConsentMode, mo() && (a.active = !0), !oo(c) || lo() || mo()) {
                        a.tcfPolicyVersion = c.tcfPolicyVersion;
                        var d;
                        if (c.gdprApplies ===
                            !1) {
                            var e = {},
                                f;
                            for (f in Zn) Zn.hasOwnProperty(f) && (e[f] = !0);
                            d = e;
                            b.removeEventListener(c)
                        } else if (oo(c)) {
                            var g = {},
                                k;
                            for (k in Zn)
                                if (Zn.hasOwnProperty(k))
                                    if (k === "1") {
                                        var m, n = c,
                                            p = {
                                                Yl: !0
                                            };
                                        p = p === void 0 ? {} : p;
                                        m = Yn(n) ? n.gdprApplies === !1 ? !0 : n.tcString === "tcunavailable" ? !p.gk : (p.gk || n.gdprApplies !== void 0 || p.Yl) && (p.gk || typeof n.tcString === "string" && n.tcString.length) ? Wn(n, "1", 0) : !0 : !1;
                                        g["1"] = m
                                    } else g[k] = Wn(c, k, Zn[k]);
                            d = g
                        }
                        if (d) {
                            a.tcString = c.tcString || "tcempty";
                            a.uc = d;
                            var q = {},
                                r = (q[O.g.O] = a.uc["1"] ? "granted" :
                                    "denied", q);
                            a.gdprApplies !== !0 ? (Dl([O.g.O, O.g.za, O.g.N]), Nk().active = !0) : (r[O.g.za] = a.uc["3"] && a.uc["4"] ? "granted" : "denied", typeof a.tcfPolicyVersion === "number" && a.tcfPolicyVersion >= 4 ? r[O.g.N] = a.uc["1"] && a.uc["7"] ? "granted" : "denied" : Dl([O.g.N]), xl(r, {
                                eventId: 0
                            }, {
                                gdprApplies: a ? a.gdprApplies : void 0,
                                tcString: po() || ""
                            }))
                        }
                    } else Dl([O.g.O, O.g.za, O.g.N])
                })
            } catch (c) {
                no(a), Dl([O.g.O, O.g.za, O.g.N]), Nk().active = !0
            }
        }
    }

    function no(a) {
        a.type = "e";
        a.tcString = "tcunavailable"
    }

    function oo(a) {
        return a.eventStatus === "tcloaded" || a.eventStatus === "useractioncomplete" || a.eventStatus === "cmpuishown"
    }

    function lo() {
        return C.gtag_enable_tcf_support === !0
    }

    function mo() {
        return $n().enableAdvertiserConsentMode === !0
    }

    function po() {
        var a = $n();
        if (a.active) return a.tcString
    }

    function qo() {
        var a = $n();
        if (a.active && a.gdprApplies !== void 0) return a.gdprApplies ? "1" : "0"
    }

    function ro(a) {
        if (!Zn.hasOwnProperty(String(a))) return !0;
        var b = $n();
        return b.active && b.uc ? !!b.uc[String(a)] : !0
    }
    var so = [O.g.O, O.g.U, O.g.N, O.g.za],
        to = {},
        uo = (to[O.g.O] = 1, to[O.g.U] = 2, to);

    function vo(a) {
        if (a === void 0) return 0;
        switch (U(a, O.g.la)) {
            case void 0:
                return 1;
            case !1:
                return 3;
            default:
                return 2
        }
    }

    function wo(a) {
        if (ll() === "US-CO" && fc.globalPrivacyControl === !0) return !1;
        var b = vo(a);
        if (b === 3) return !1;
        switch (Wk(O.g.za)) {
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

    function xo() {
        return Zk() || !Vk(O.g.O) || !Vk(O.g.U)
    }

    function yo() {
        var a = {},
            b;
        for (b in uo) uo.hasOwnProperty(b) && (a[uo[b]] = Wk(b));
        return "G1" + Fe(a[1] || 0) + Fe(a[2] || 0)
    }
    var zo = {},
        Ao = (zo[O.g.O] = 0, zo[O.g.U] = 1, zo[O.g.N] = 2, zo[O.g.za] = 3, zo);

    function Bo(a) {
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

    function Co(a) {
        for (var b = "1", c = 0; c < so.length; c++) {
            var d = b,
                e, f = so[c],
                g = Uk.delegatedConsentTypes[f];
            e = g === void 0 ? 0 : Ao.hasOwnProperty(g) ? 12 | Ao[g] : 8;
            var k = Nk();
            k.accessedAny = !0;
            var m = k.entries[f] || {};
            e = e << 2 | Bo(m.implicit);
            b = d + ("" + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [e] + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [Bo(m.declare) << 4 | Bo(m.default) << 2 | Bo(m.update)])
        }
        var n = b,
            p = (ll() === "US-CO" && fc.globalPrivacyControl === !0 ? 1 : 0) << 3,
            q = (Zk() ? 1 : 0) << 2,
            r = vo(a);
        b =
            n + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [p | q | r];
        return b += "" + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [Uk.containerScopedDefaults.ad_storage << 4 | Uk.containerScopedDefaults.analytics_storage << 2 | Uk.containerScopedDefaults.ad_user_data] + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [(Uk.usedContainerScopedDefaults ? 1 : 0) << 2 | Uk.containerScopedDefaults.ad_personalization]
    }

    function Do() {
        if (!Vk(O.g.N)) return "-";
        for (var a = Object.keys(Bh), b = Xk(a), c = "", d = l(a), e = d.next(); !e.done; e = d.next()) {
            var f = e.value;
            b[f] && (c += Bh[f])
        }(Uk.usedCorePlatformServices ? Uk.selectedAllCorePlatformServices : 1) && (c += "o");
        return c || "-"
    }

    function Eo() {
        return nl() || (lo() || mo()) && qo() === "1" ? "1" : "0"
    }

    function Fo() {
        return (nl() ? !0 : !(!lo() && !mo()) && qo() === "1") || !Vk(O.g.N)
    }

    function Go() {
        var a = "0",
            b = "0",
            c;
        var d = $n();
        c = d.active ? d.cmpId : void 0;
        typeof c === "number" && c >= 0 && c <= 4095 && (a = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [c >> 6 & 63], b = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [c & 63]);
        var e = "0",
            f;
        var g = $n();
        f = g.active ? g.tcfPolicyVersion : void 0;
        typeof f === "number" && f >= 0 && f <= 63 && (e = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [f]);
        var k = 0;
        nl() && (k |= 1);
        qo() === "1" && (k |= 2);
        lo() && (k |= 4);
        var m;
        var n = $n();
        m = n.enableAdvertiserConsentMode !==
            void 0 ? n.enableAdvertiserConsentMode ? "1" : "0" : void 0;
        m === "1" && (k |= 8);
        Nk().waitPeriodTimedOut && (k |= 16);
        return "1" + a + b + e + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [k]
    }

    function Ho() {
        return ll() === "US-CO"
    };

    function Io() {
        var a = !1;
        return a
    };
    var Jo = {
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

    function Ko(a) {
        a = a === void 0 ? {} : a;
        var b = Nf.ctid.split("-")[0].toUpperCase(),
            c = {};
        c.ctid = Nf.ctid;
        c.Ym = Fi.Ce;
        c.fn = Fi.th;
        c.Dm = bk.ze ? 2 : 1;
        c.mn = a.tk;
        c.Je = Nf.canonicalContainerId;
        c.Je !== a.ya && (c.ya = a.ya);
        var d = lk();
        c.Om = d ? d.canonicalContainerId : void 0;
        Mi ? (c.og = Jo[b], c.og || (c.og = 0)) : c.og = Qi ? 13 : 10;
        Zi.H ? (c.mg = 0, c.Dl = 2) : Oi ? c.mg = 1 : Io() ? c.mg = 2 : c.mg = 3;
        var e = {};
        e[6] = ck;
        Zi.C === 2 ? e[7] = !0 : Zi.C === 1 && (e[2] = !0);
        if (Q(77) && ic) {
            var f = tj(zj(ic), "host");
            f && (e[8] = f.match(/^(www\.)?googletagmanager\.com$/) === null)
        }
        c.Gl = e;
        var g =
            a.fg,
            k;
        var m = c.og,
            n = c.mg;
        m === void 0 ? k = "" : (n || (n = 0), k = "" + He(1, 1) + Ee(m << 2 | n));
        var p = c.Dl,
            q = "4" + k + (p ? "" + He(2, 1) + Ee(p) : ""),
            r, u = c.fn;
        r = u && Ge.test(u) ? "" + He(3, 2) + u : "";
        var v, t = c.Ym;
        v = t ? "" + He(4, 1) + Ee(t) : "";
        var w;
        var x = c.ctid;
        if (x && g) {
            var y = x.split("-"),
                A = y[0].toUpperCase();
            if (A !== "GTM" && A !== "OPT") w = "";
            else {
                var B = y[1];
                w = "" + He(5, 3) + Ee(1 + B.length) + (c.Dm || 0) + B
            }
        } else w = "";
        var D = c.mn,
            I = c.Je,
            J = c.ya,
            F = c.io,
            Z = q + r + v + w + (D ? "" + He(6, 1) + Ee(D) : "") + (I ? "" + He(7, 3) + Ee(I.length) + I : "") + (J ? "" + He(8, 3) + Ee(J.length) + J : "") + (F ? "" + He(9,
                3) + Ee(F.length) + F : ""),
            N;
        var W = c.Gl;
        W = W === void 0 ? {} : W;
        for (var da = [], T = l(Object.keys(W)), R = T.next(); !R.done; R = T.next()) {
            var M = R.value;
            da[Number(M)] = W[M]
        }
        if (da.length) {
            var ia = He(10, 3),
                la;
            if (da.length === 0) la = Ee(0);
            else {
                for (var ea = [], ua = 0, Ma = !1, Da = 0; Da < da.length; Da++) {
                    Ma = !0;
                    var Sa = Da % 6;
                    da[Da] && (ua |= 1 << Sa);
                    Sa === 5 && (ea.push(Ee(ua)), ua = 0, Ma = !1)
                }
                Ma && ea.push(Ee(ua));
                la = ea.join("")
            }
            var fb = la;
            N = "" + ia + Ee(fb.length) + fb
        } else N = "";
        var Gc = c.Om;
        return Z + N + (Gc ? "" + He(11, 3) + Ee(Gc.length) + Gc : "")
    };

    function Lo(a) {
        var b = 1,
            c, d, e;
        if (a)
            for (b = 0, d = a.length - 1; d >= 0; d--) e = a.charCodeAt(d), b = (b << 6 & 268435455) + e + (e << 14), c = b & 266338304, b = c !== 0 ? b ^ c >> 21 : b;
        return b
    };

    function Mo(a) {
        return a.origin !== "null"
    };

    function No(a, b, c, d) {
        var e;
        if (Oo(d)) {
            for (var f = [], g = String(b || Po()).split(";"), k = 0; k < g.length; k++) {
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

    function Qo(a, b, c, d, e) {
        if (Oo(e)) {
            var f = Ro(a, d, e);
            if (f.length === 1) return f[0].id;
            if (f.length !== 0) {
                f = So(f, function(g) {
                    return g.Ol
                }, b);
                if (f.length === 1) return f[0].id;
                f = So(f, function(g) {
                    return g.Qm
                }, c);
                return f[0] ? f[0].id : void 0
            }
        }
    }

    function To(a, b, c, d) {
        var e = Po(),
            f = window;
        Mo(f) && (f.document.cookie = a);
        var g = Po();
        return e !== g || c !== void 0 && No(b, g, !1, d).indexOf(c) >= 0
    }

    function Uo(a, b, c, d) {
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
        if (!Oo(c.Hb)) return 2;
        var g;
        b == null ? g = a + "=deleted; expires=" + (new Date(0)).toUTCString() : (c.encode && (b = encodeURIComponent(b)), b = Vo(b), g = a + "=" + b);
        var k = {};
        g = e(g, "path", c.path);
        var m;
        c.expires instanceof Date ? m = c.expires.toUTCString() : c.expires != null && (m = "" + c.expires);
        g = e(g, "expires", m);
        g = e(g, "max-age", c.Hm);
        g = e(g, "samesite", c.gn);
        c.secure &&
            (g = f(g, "secure"));
        var n = c.domain;
        if (n && n.toLowerCase() === "auto") {
            for (var p = Wo(), q = void 0, r = !1, u = 0; u < p.length; ++u) {
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
                if (!Xo(v, c.path) && To(t, a, b, c.Hb)) return 0
            }
            if (q && !r) throw q;
            return 1
        }
        n && n.toLowerCase() !== "none" && (g = e(g, "domain", n));
        g = f(g, c.flags);
        d && d(a, k);
        return Xo(n, c.path) ? 1 : To(g, a, b, c.Hb) ? 0 : 1
    }

    function Yo(a, b, c) {
        c.path == null && (c.path = "/");
        c.domain || (c.domain = "auto");
        return Uo(a, b, c)
    }

    function So(a, b, c) {
        for (var d = [], e = [], f, g = 0; g < a.length; g++) {
            var k = a[g],
                m = b(k);
            m === c ? d.push(k) : f === void 0 || m < f ? (e = [k], f = m) : m === f && e.push(k)
        }
        return d.length > 0 ? d : e
    }

    function Ro(a, b, c) {
        for (var d = [], e = No(a, void 0, void 0, c), f = 0; f < e.length; f++) {
            var g = e[f].split("."),
                k = g.shift();
            if (!b || !k || b.indexOf(k) !== -1) {
                var m = g.shift();
                if (m) {
                    var n = m.split("-");
                    d.push({
                        id: g.join("."),
                        Ol: Number(n[0]) || 1,
                        Qm: Number(n[1]) || 1
                    })
                }
            }
        }
        return d
    }

    function Vo(a) {
        a && a.length > 1200 && (a = a.substring(0, 1200));
        return a
    }
    var Zo = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,
        $o = /(^|\.)doubleclick\.net$/i;

    function Xo(a, b) {
        return a !== void 0 && ($o.test(window.document.location.hostname) || b === "/" && Zo.test(a))
    }

    function ap(a) {
        if (!a) return 1;
        var b = a;
        Za(8) && a === "none" && (b = window.document.location.hostname);
        b = b.indexOf(".") === 0 ? b.substring(1) : b;
        return b.split(".").length
    }

    function bp(a) {
        if (!a || a === "/") return 1;
        a[0] !== "/" && (a = "/" + a);
        a[a.length - 1] !== "/" && (a += "/");
        return a.split("/").length - 1
    }

    function cp(a, b) {
        var c = "" + ap(a),
            d = bp(b);
        d > 1 && (c += "-" + d);
        return c
    }
    var Po = function() {
            return Mo(window) ? window.document.cookie : ""
        },
        Oo = function(a) {
            return a && Za(9) ? (Array.isArray(a) ? a : [a]).every(function(b) {
                return Yk(b) && Vk(b)
            }) : !0
        },
        Wo = function() {
            var a = [],
                b = window.document.location.hostname.split(".");
            if (b.length === 4) {
                var c = b[b.length - 1];
                if (Number(c).toString() === c) return ["none"]
            }
            for (var d = b.length - 2; d >= 0; d--) a.push(b.slice(d).join("."));
            var e = window.document.location.hostname;
            $o.test(e) || Zo.test(e) || a.push("none");
            return a
        };

    function dp(a) {
        var b = Math.round(Math.random() * 2147483647);
        return a ? String(b ^ Lo(a) & 2147483647) : String(b)
    }

    function ep(a) {
        return [dp(a), Math.round(pb() / 1E3)].join(".")
    }

    function fp(a, b, c, d, e) {
        var f = ap(b);
        return Qo(a, f, bp(c), d, e)
    }

    function gp(a, b, c, d) {
        return [b, cp(c, d), a].join(".")
    };

    function hp(a, b, c, d) {
        var e, f = Number(a.Fb != null ? a.Fb : void 0);
        f !== 0 && (e = new Date((b || pb()) + 1E3 * (f || 7776E3)));
        return {
            path: a.path,
            domain: a.domain,
            flags: a.flags,
            encode: !!c,
            expires: e,
            Hb: d
        }
    };
    var ip;

    function jp() {
        function a(g) {
            c(g.target || g.srcElement || {})
        }

        function b(g) {
            d(g.target || g.srcElement || {})
        }
        var c = kp,
            d = lp,
            e = mp();
        if (!e.init) {
            tc(E, "mousedown", a);
            tc(E, "keyup", a);
            tc(E, "submit", b);
            var f = HTMLFormElement.prototype.submit;
            HTMLFormElement.prototype.submit = function() {
                d(this);
                f.call(this)
            };
            e.init = !0
        }
    }

    function np(a, b, c, d, e) {
        var f = {
            callback: a,
            domains: b,
            fragment: c === 2,
            placement: c,
            forms: d,
            sameHost: e
        };
        mp().decorators.push(f)
    }

    function op(a, b, c) {
        for (var d = mp().decorators, e = {}, f = 0; f < d.length; ++f) {
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
                r === b && sb(e, g.callback())
            }
        }
        return e
    }

    function mp() {
        var a = jc("google_tag_data", {}),
            b = a.gl;
        b && b.decorators || (b = {
            decorators: []
        }, a.gl = b);
        return b
    };
    var pp = /(.*?)\*(.*?)\*(.*)/,
        qp = /^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,
        rp = /^(?:www\.|m\.|amp\.)+/,
        sp = /([^?#]+)(\?[^#]*)?(#.*)?/;

    function tp(a) {
        var b = sp.exec(a);
        if (b) return {
            ei: b[1],
            query: b[2],
            fragment: b[3]
        }
    }

    function up(a) {
        return new RegExp("(.*?)(^|&)" + a + "=([^&]*)&?(.*)")
    }

    function vp(a, b) {
        var c = [fc.userAgent, (new Date).getTimezoneOffset(), fc.userLanguage || fc.language, Math.floor(pb() / 60 / 1E3) - (b === void 0 ? 0 : b), a].join("*"),
            d;
        if (!(d = ip)) {
            for (var e = Array(256), f = 0; f < 256; f++) {
                for (var g = f, k = 0; k < 8; k++) g = g & 1 ? g >>> 1 ^ 3988292384 : g >>> 1;
                e[f] = g
            }
            d = e
        }
        ip = d;
        for (var m = 4294967295, n = 0; n < c.length; n++) m = m >>> 8 ^ ip[(m ^ c.charCodeAt(n)) & 255];
        return ((m ^ -1) >>> 0).toString(36)
    }

    function wp(a) {
        return function(b) {
            var c = zj(C.location.href),
                d = c.search.replace("?", ""),
                e = sj(d, "_gl", !1, !0) || "";
            b.query = xp(e) || {};
            var f = tj(c, "fragment"),
                g;
            var k = -1;
            if (ub(f, "_gl=")) k = 4;
            else {
                var m = f.indexOf("&_gl=");
                m > 0 && (k = m + 3 + 2)
            }
            if (k < 0) g = void 0;
            else {
                var n = f.indexOf("&", k);
                g = n < 0 ? f.substring(k) : f.substring(k, n)
            }
            b.fragment = xp(g || "") || {};
            a && yp(c, d, f)
        }
    }

    function zp(a, b) {
        var c = up(a).exec(b),
            d = b;
        if (c) {
            var e = c[2],
                f = c[4];
            d = c[1];
            f && (d = d + e + f)
        }
        return d
    }

    function yp(a, b, c) {
        function d(g, k) {
            var m = zp("_gl", g);
            m.length && (m = k + m);
            return m
        }
        if (ec && ec.replaceState) {
            var e = up("_gl");
            if (e.test(b) || e.test(c)) {
                var f = tj(a, "path");
                b = d(b, "?");
                c = d(c, "#");
                ec.replaceState({}, "", "" + f + b + c)
            }
        }
    }

    function Ap(a, b) {
        var c = wp(!!b),
            d = mp();
        d.data || (d.data = {
            query: {},
            fragment: {}
        }, c(d.data));
        var e = {},
            f = d.data;
        f && (sb(e, f.query), a && sb(e, f.fragment));
        return e
    }
    var xp = function(a) {
        try {
            var b = Bp(a, 3);
            if (b !== void 0) {
                for (var c = {}, d = b ? b.split("*") : [], e = 0; e + 1 < d.length; e += 2) {
                    var f = d[e],
                        g = Ra(d[e + 1]);
                    c[f] = g
                }
                Ua("TAGGING", 6);
                return c
            }
        } catch (k) {
            Ua("TAGGING", 8)
        }
    };

    function Bp(a, b) {
        if (a) {
            var c;
            a: {
                for (var d = a, e = 0; e < 3; ++e) {
                    var f = pp.exec(d);
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
                        if (n === vp(k, p)) {
                            m = !0;
                            break a
                        } m = !1
                }
                if (m) return k;
                Ua("TAGGING", 7)
            }
        }
    }

    function Cp(a, b, c, d, e) {
        function f(p) {
            p = zp(a, p);
            var q = p.charAt(p.length - 1);
            p && q !== "&" && (p += "&");
            return p + n
        }
        d = d === void 0 ? !1 : d;
        e = e === void 0 ? !1 : e;
        var g = tp(c);
        if (!g) return "";
        var k = g.query || "",
            m = g.fragment || "",
            n = a + "=" + b;
        d ? m.substring(1).length !== 0 && e || (m = "#" + f(m.substring(1))) : k = "?" + f(k.substring(1));
        return "" + g.ei + k + m
    }

    function Dp(a, b) {
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
                        x !== void 0 && x === x && x !== null && x.toString() !== "[object Object]" && (t.push(w), t.push(Qa(String(x))))
                    } var y = t.join("*");
                v = ["1", vp(y), y].join("*");
                d ? (Za(4) || Za(1) || !p) && Ep("_gl", v, a, p, q) : Fp("_gl", v, a, p, q)
            }
        }
        var d = (a.tagName || "").toUpperCase() === "FORM",
            e = op(b, 1, d),
            f = op(b, 2, d),
            g = op(b, 4, d),
            k = op(b, 3, d);
        c(e, !1, !1);
        c(f, !0, !1);
        Za(1) && c(g, !0, !0);
        for (var m in k) k.hasOwnProperty(m) &&
            Gp(m, k[m], a)
    }

    function Gp(a, b, c) {
        c.tagName.toLowerCase() === "a" ? Fp(a, b, c) : c.tagName.toLowerCase() === "form" && Ep(a, b, c)
    }

    function Fp(a, b, c, d, e) {
        d = d === void 0 ? !1 : d;
        e = e === void 0 ? !1 : e;
        var f;
        if (f = c.href) {
            var g;
            if (!(g = !Za(5) || d)) {
                var k = C.location.href,
                    m = tp(c.href),
                    n = tp(k);
                g = !(m && n && m.ei === n.ei && m.query === n.query && m.fragment)
            }
            f = g
        }
        if (f) {
            var p = Cp(a, b, c.href, d, e);
            Wb.test(p) && (c.href = p)
        }
    }

    function Ep(a, b, c, d, e) {
        d = d === void 0 ? !1 : d;
        e = e === void 0 ? !1 : e;
        if (c && c.action) {
            var f = (c.method || "").toLowerCase();
            if (f !== "get" || d) {
                if (f === "get" || f === "post") {
                    var g = Cp(a, b, c.action, d, e);
                    Wb.test(g) && (c.action = g)
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

    function kp(a) {
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
                f !== "http:" && f !== "https:" || Dp(e, e.hostname)
            }
        } catch (g) {}
    }

    function lp(a) {
        try {
            if (a.action) {
                var b = tj(zj(a.action), "host");
                Dp(a, b)
            }
        } catch (c) {}
    }

    function Hp(a, b, c, d) {
        jp();
        var e = c === "fragment" ? 2 : 1;
        d = !!d;
        np(a, b, e, d, !1);
        e === 2 && Ua("TAGGING", 23);
        d && Ua("TAGGING", 24)
    }

    function Ip(a, b) {
        jp();
        np(a, [vj(C.location, "host", !0)], b, !0, !0)
    }

    function Jp() {
        var a = E.location.hostname,
            b = qp.exec(E.referrer);
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
        var k = a.replace(rp, ""),
            m = e.replace(rp, "");
        return k === m || vb(k, "." + m)
    }

    function Kp(a, b) {
        return a === !1 ? !1 : a || b || Jp()
    };
    var Lp = ["1"],
        Mp = {},
        Np = {};

    function Op(a, b) {
        b = b === void 0 ? !0 : b;
        var c = Pp(a.prefix);
        if (!Mp[c])
            if (Qp(c, a.path, a.domain)) {
                var d = Np[Pp(a.prefix)];
                Rp(a, d ? d.id : void 0, d ? d.Yh : void 0)
            } else {
                var e = Aj("auiddc");
                if (e) Ua("TAGGING", 17), Mp[c] = e;
                else if (b) {
                    var f = Pp(a.prefix),
                        g = ep();
                    Sp(f, g, a);
                    Qp(c, a.path, a.domain)
                }
            }
    }

    function Rp(a, b, c) {
        var d = Pp(a.prefix),
            e = Mp[d];
        if (e) {
            var f = e.split(".");
            if (f.length === 2) {
                var g = Number(f[1]) || 0;
                if (g) {
                    var k = e;
                    b && (k = e + "." + b + "." + (c ? c : Math.floor(pb() / 1E3)));
                    Sp(d, k, a, g * 1E3)
                }
            }
        }
    }

    function Sp(a, b, c, d) {
        var e = gp(b, "1", c.domain, c.path),
            f = hp(c, d);
        f.Hb = Tp();
        Yo(a, e, f)
    }

    function Qp(a, b, c) {
        var d = fp(a, b, c, Lp, Tp());
        if (!d) return !1;
        Up(a, d);
        return !0
    }

    function Up(a, b) {
        var c = b.split(".");
        c.length === 5 ? (Mp[a] = c.slice(0, 2).join("."), Np[a] = {
            id: c.slice(2, 4).join("."),
            Yh: Number(c[4]) || 0
        }) : c.length === 3 ? Np[a] = {
            id: c.slice(0, 2).join("."),
            Yh: Number(c[2]) || 0
        } : Mp[a] = b
    }

    function Pp(a) {
        return (a || "_gcl") + "_au"
    }

    function Vp(a) {
        function b() {
            Vk(c) && a()
        }
        var c = Tp();
        bl(function() {
            b();
            Vk(c) || cl(b, c)
        }, c)
    }

    function Wp(a) {
        var b = Ap(!0),
            c = Pp(a.prefix);
        Vp(function() {
            var d = b[c];
            if (d) {
                Up(c, d);
                var e = Number(Mp[c].split(".")[1]) * 1E3;
                if (e) {
                    Ua("TAGGING", 16);
                    var f = hp(a, e);
                    f.Hb = Tp();
                    var g = gp(d, "1", a.domain, a.path);
                    Yo(c, g, f)
                }
            }
        })
    }

    function Xp(a, b, c, d, e) {
        e = e || {};
        var f = function() {
            var g = {},
                k = fp(a, e.path, e.domain, Lp, Tp());
            k && (g[a] = k);
            return g
        };
        Vp(function() {
            Hp(f, b, c, d)
        })
    }

    function Tp() {
        return ["ad_storage", "ad_user_data"]
    };
    var Yp = {},
        Zp = (Yp.k = {
            Ka: /^[\w-]+$/
        }, Yp.b = {
            Ka: /^[\w-]+$/,
            li: !0
        }, Yp.i = {
            Ka: /^[1-9]\d*$/
        }, Yp.u = {
            Ka: /^[1-9]\d*$/
        }, Yp);
    var $p = {},
        cq = ($p[5] = {
            Fk: {
                2: aq
            },
            Ch: ["k", "i", "b", "u"]
        }, $p[4] = {
            Fk: {
                2: aq,
                GCL: bq
            },
            Ch: ["k", "i", "b"]
        }, $p);

    function dq(a) {
        var b = cq[5];
        if (b) {
            var c = a.split(".")[0];
            if (c) {
                var d = b.Fk[c];
                if (d) return d(a, 5)
            }
        }
    }

    function aq(a, b) {
        var c = a.split(".");
        if (c.length === 3) {
            var d = {},
                e = cq[b];
            if (e) {
                for (var f = e.Ch, g = l(c[2].split("$")), k = g.next(); !k.done; k = g.next()) {
                    var m = k.value,
                        n = m[0];
                    if (f.indexOf(n) !== -1) try {
                        var p = decodeURIComponent(m.substring(1)),
                            q = Zp[n];
                        q && (q.li ? (d[n] = d[n] || [], d[n].push(p)) : d[n] = p)
                    } catch (r) {}
                }
                return d
            }
        }
    }

    function eq(a, b) {
        var c = cq[5];
        if (c) {
            for (var d = [], e = l(c.Ch), f = e.next(); !f.done; f = e.next()) {
                var g = f.value,
                    k = Zp[g];
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

    function bq(a) {
        var b = a.split(".");
        b.shift();
        var c = b.shift(),
            d = b.shift(),
            e = {};
        return e.k = d, e.i = c, e.b = b, e
    };
    var fq = new Map([
        [5, "ad_storage"],
        [4, ["ad_storage", "ad_user_data"]]
    ]);

    function gq(a) {
        if (cq[5]) {
            for (var b = [], c = No(a, void 0, void 0, fq.get(5)), d = l(c), e = d.next(); !e.done; e = d.next()) {
                var f = dq(e.value);
                f && (hq(f), b.push(f))
            }
            return b
        }
    }

    function iq(a, b, c, d) {
        c = c || {};
        var e = cp(c.domain, c.path),
            f = eq(b, e);
        if (f) {
            var g = hp(c, d, void 0, fq.get(5));
            Yo(a, f, g)
        }
    }

    function jq(a, b) {
        var c = b.Ka;
        return typeof c === "function" ? c(a) : c.test(a)
    }

    function hq(a) {
        for (var b = l(Object.keys(a)), c = b.next(), d = {}; !c.done; d = {
                Le: void 0
            }, c = b.next()) {
            var e = c.value,
                f = a[e];
            d.Le = Zp[e];
            d.Le ? d.Le.li ? a[e] = Array.isArray(f) ? f.filter(function(g) {
                return function(k) {
                    return jq(k, g.Le)
                }
            }(d)) : void 0 : typeof f === "string" && jq(f, d.Le) || (a[e] = void 0) : a[e] = void 0
        }
    };

    function kq(a) {
        for (var b = [], c = E.cookie.split(";"), d = new RegExp("^\\s*" + (a || "_gac") + "_(UA-\\d+-\\d+)=\\s*(.+?)\\s*$"), e = 0; e < c.length; e++) {
            var f = c[e].match(d);
            f && b.push({
                ri: f[1],
                value: f[2],
                timestamp: Number(f[2].split(".")[1]) || 0
            })
        }
        b.sort(function(g, k) {
            return k.timestamp - g.timestamp
        });
        return b
    }

    function lq(a, b) {
        var c = kq(a),
            d = {};
        if (!c || !c.length) return d;
        for (var e = 0; e < c.length; e++) {
            var f = c[e].value.split(".");
            if (!(f[0] !== "1" || b && f.length < 3 || !b && f.length !== 3) && Number(f[1])) {
                d[c[e].ri] || (d[c[e].ri] = []);
                var g = {
                    version: f[0],
                    timestamp: Number(f[1]) * 1E3,
                    W: f[2]
                };
                b && f.length > 3 && (g.labels = f.slice(3));
                d[c[e].ri].push(g)
            }
        }
        return d
    };
    var mq = ["ad_storage", "ad_user_data"];

    function nq() {
        var a = oq();
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

    function oq() {
        if (!Vk(mq)) return {
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
            pq(a)
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

    function pq(a) {
        if (a && typeof a === "object")
            if ("expires" in a && "value" in a) {
                var b;
                typeof a.expires === "number" ? b = a.expires : b = typeof a.expires === "string" ? Number(a.expires) : NaN;
                !isNaN(b) && Date.now() <= b || (a.value = null, a.error = 9)
            } else
                for (var c = l(Object.keys(a)), d = c.next(); !d.done; d = c.next()) pq(a[d.value])
    };
    var qq = /^\w+$/,
        rq = /^[\w-]+$/,
        sq = {},
        tq = (sq.aw = "_aw", sq.dc = "_dc", sq.gf = "_gf", sq.gp = "_gp", sq.gs = "_gs", sq.ha = "_ha", sq.ag = "_ag", sq.gb = "_gb", sq);

    function uq() {
        return ["ad_storage", "ad_user_data"]
    }

    function vq(a) {
        return !Za(9) || Vk(a)
    }

    function wq(a, b) {
        function c() {
            var d = vq(b);
            d && a();
            return d
        }
        bl(function() {
            c() || cl(c, b)
        }, b)
    }

    function xq(a) {
        return yq(a).map(function(b) {
            return b.W
        })
    }

    function zq(a) {
        return Aq(a).filter(function(b) {
            return b.W
        }).map(function(b) {
            return b.W
        })
    }

    function Aq(a) {
        var b = Bq(a.prefix),
            c = Cq("gb", b),
            d = Cq("ag", b);
        if (!d || !c) return [];
        var e = function(k) {
                return function(m) {
                    m.type = k;
                    return m
                }
            },
            f = yq(c).map(e("gb")),
            g = Dq(d).map(e("ag"));
        return f.concat(g).sort(function(k, m) {
            return m.timestamp - k.timestamp
        })
    }

    function Eq(a, b, c, d, e, f) {
        var g = db(a, function(k) {
            return k.W === c
        });
        g ? (g.timestamp < d && (g.timestamp = d, g.Jd = f), g.labels = Fq(g.labels || [], e || [])) : a.push({
            version: b,
            W: c,
            timestamp: d,
            labels: e,
            Jd: f
        })
    }

    function Dq(a) {
        for (var b = gq(a) || [], c = [], d = l(b), e = d.next(); !e.done; e = d.next()) {
            var f = e.value,
                g = f,
                k = g.k,
                m = g.b,
                n = Gq(f);
            if (n) {
                var p = void 0;
                Za(10) && (p = f.u);
                Eq(c, "2", k, n, m || [], p)
            }
        }
        return c.sort(function(q, r) {
            return r.timestamp - q.timestamp
        })
    }

    function yq(a) {
        for (var b = [], c = No(a, E.cookie, void 0, uq()), d = l(c), e = d.next(); !e.done; e = d.next()) {
            var f = Hq(e.value);
            if (f != null) {
                var g = f;
                Eq(b, g.version, g.W, g.timestamp, g.labels)
            }
        }
        b.sort(function(k, m) {
            return m.timestamp - k.timestamp
        });
        return Iq(b)
    }

    function Jq(a, b) {
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

    function Kq(a, b) {
        var c = db(a, function(d) {
            return d.W === b.W
        });
        c ? (c.timestamp < b.timestamp && (c.timestamp = b.timestamp, c.Jd = b.Jd), c.Pa = c.Pa ? b.Pa ? c.timestamp < b.timestamp ? b.Pa : c.Pa : c.Pa || 0 : b.Pa || 0, c.labels = Jq(c.labels || [], b.labels || []), c.Sc = Jq(c.Sc || [], b.Sc || [])) : a.push(b)
    }

    function Lq() {
        var a = nq();
        if (!a || a.error || !a.value || typeof a.value !== "object") return null;
        var b = a.value;
        try {
            if (!("value" in b && b.value) || typeof b.value !== "object") return null;
            var c = b.value,
                d = c.value;
            return d && d.match(rq) ? {
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

    function Mq(a) {
        for (var b = [], c = No(a, E.cookie, void 0, uq()), d = l(c), e = d.next(); !e.done; e = d.next()) {
            var f = Hq(e.value);
            f != null && (f.Jd = void 0, f.Pa = 0, f.Sc = [1], Kq(b, f))
        }
        var g = Lq();
        g && (g.Jd = void 0, g.Pa = g.Pa || 0, g.Sc = g.Sc || [2], Kq(b, g));
        b.sort(function(k, m) {
            return m.timestamp - k.timestamp
        });
        return Iq(b)
    }

    function Fq(a, b) {
        if (!a.length) return b;
        if (!b.length) return a;
        var c = {};
        return a.concat(b).filter(function(d) {
            return c.hasOwnProperty(d) ? !1 : c[d] = !0
        })
    }

    function Bq(a) {
        return a && typeof a === "string" && a.match(qq) ? a : "_gcl"
    }

    function Nq(a, b, c) {
        var d = zj(a),
            e = tj(d, "query", !1, void 0, "gclsrc"),
            f = {
                value: tj(d, "query", !1, void 0, "gclid"),
                Pa: c ? 4 : 2
            };
        if (b && (!f.value || !e)) {
            var g = d.hash.replace("#", "");
            f.value || (f.value = sj(g, "gclid", !1), f.Pa = 3);
            e || (e = sj(g, "gclsrc", !1))
        }
        return !f.value || e !== void 0 && e !== "aw" && e !== "aw.ds" ? [] : [f]
    }

    function Oq(a, b) {
        var c = zj(a),
            d = tj(c, "query", !1, void 0, "gclid"),
            e = tj(c, "query", !1, void 0, "gclsrc"),
            f = tj(c, "query", !1, void 0, "wbraid");
        f = Bb(f);
        var g = tj(c, "query", !1, void 0, "gbraid"),
            k = tj(c, "query", !1, void 0, "gad_source"),
            m = tj(c, "query", !1, void 0, "dclid");
        if (b && !(d && e && f && g)) {
            var n = c.hash.replace("#", "");
            d = d || sj(n, "gclid", !1);
            e = e || sj(n, "gclsrc", !1);
            f = f || sj(n, "wbraid", !1);
            g = g || sj(n, "gbraid", !1);
            k = k || sj(n, "gad_source", !1)
        }
        return Pq(d, e, m, f, g, k)
    }

    function Qq() {
        return Oq(C.location.href, !0)
    }

    function Pq(a, b, c, d, e, f) {
        var g = {},
            k = function(m, n) {
                g[n] || (g[n] = []);
                g[n].push(m)
            };
        g.gclid = a;
        g.gclsrc = b;
        g.dclid = c;
        if (a !== void 0 && a.match(rq)) switch (b) {
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
        d !== void 0 && rq.test(d) && (g.wbraid = d, k(d, "gb"));
        e !== void 0 && rq.test(e) && (g.gbraid = e, k(e, "ag"));
        f !== void 0 && rq.test(f) && (g.gad_source = f, k(f, "gs"));
        return g
    }

    function Rq(a) {
        var b = Qq();
        if (Za(6)) {
            for (var c = !0, d = l(Object.keys(b)), e = d.next(); !e.done; e = d.next())
                if (b[e.value] !== void 0) {
                    c = !1;
                    break
                } c && (b = Oq(C.document.referrer, !1), b.gad_source = void 0)
        }
        Sq(b, !1, a)
    }

    function Tq(a) {
        Rq(a);
        var b = Nq(C.location.href, !0, !1);
        Za(6) && !b.length && (b = Nq(C.document.referrer, !1, !0));
        if (b.length) {
            var c = b[0];
            a = a || {};
            var d = pb(),
                e = hp(a, d, !0),
                f = uq(),
                g = function() {
                    if (vq(f) && e.expires !== void 0) {
                        var k = {
                                value: {
                                    value: c.value,
                                    creationTimeMs: d,
                                    linkDecorationSource: c.Pa
                                },
                                expires: Number(e.expires)
                            },
                            m = oq();
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
            bl(function() {
                g();
                vq(f) || cl(g, f)
            }, f)
        }
    }

    function Sq(a, b, c, d, e) {
        c = c || {};
        e = e || [];
        var f = Bq(c.prefix),
            g = d || pb(),
            k = Math.round(g / 1E3),
            m = uq(),
            n = !1,
            p = !1,
            q = function() {
                if (vq(m)) {
                    var r = hp(c, g, !0);
                    r.Hb = m;
                    for (var u = function(F, Z) {
                            var N = Cq(F, f);
                            N && (Yo(N, Z, r), F !== "gb" && (n = !0))
                        }, v = function(F) {
                            var Z = ["GCL", k, F];
                            e.length > 0 && Z.push(e.join("."));
                            return Z.join(".")
                        }, t = l(["aw", "dc", "gf", "ha", "gp"]), w = t.next(); !w.done; w = t.next()) {
                        var x = w.value;
                        a[x] && u(x, v(a[x][0]))
                    }
                    if (!n && a.gb) {
                        var y = a.gb[0],
                            A = Cq("gb", f);
                        !b && yq(A).some(function(F) {
                            return F.W === y && F.labels && F.labels.length >
                                0
                        }) || u("gb", v(y))
                    }
                }
                if (!p && a.gbraid && vq("ad_storage") && (p = !0, !n)) {
                    var B = a.gbraid,
                        D = Cq("ag", f);
                    if (b || !Dq(D).some(function(F) {
                            return F.W === B && F.labels && F.labels.length > 0
                        })) {
                        var I = {},
                            J = (I.k = B, I.i = "" + k, I.b = e, I);
                        iq(D, J, c, g)
                    }
                }
                Uq(a, f, g, c)
            };
        bl(function() {
            q();
            vq(m) || cl(q, m)
        }, m)
    }

    function Uq(a, b, c, d) {
        if (a.gad_source !== void 0 && vq("ad_storage")) {
            var e = a.gad_source,
                f = Cq("gs", b);
            if (f) {
                var g = Math.round((pb() - (Fc() || 0)) / 1E3),
                    k;
                if (Za(10)) {
                    var m, n = String,
                        p = C.location.hostname,
                        q = C.location.pathname,
                        r = p = Bj(p);
                    r.split(".").length > 2 && (r = r.replace(/^(www[0-9]*|web|ftp|wap|home|m|w|amp|mobile)\./, ""));
                    p = r;
                    q = Bj(q);
                    var u = q.split(";")[0];
                    u = u.replace(/\/(ar|slp|web|index)?\/?$/, "");
                    m = n(Lo(("" + p + u).toLowerCase()));
                    var v = {};
                    k = (v.k = e, v.i = "" + g, v.u = m, v)
                } else {
                    var t = {};
                    k = (t.k = e, t.i = "" + g, t)
                }
                iq(f, k,
                    d, c)
            }
        }
    }

    function Vq(a, b) {
        var c = Ap(!0);
        wq(function() {
            for (var d = Bq(b.prefix), e = 0; e < a.length; ++e) {
                var f = a[e];
                if (tq[f] !== void 0) {
                    var g = Cq(f, d),
                        k = c[g];
                    if (k) {
                        var m = Math.min(Wq(k), pb()),
                            n;
                        b: {
                            for (var p = m, q = No(g, E.cookie, void 0, uq()), r = 0; r < q.length; ++r)
                                if (Wq(q[r]) > p) {
                                    n = !0;
                                    break b
                                } n = !1
                        }
                        if (!n) {
                            var u = hp(b, m, !0);
                            u.Hb = uq();
                            Yo(g, k, u)
                        }
                    }
                }
            }
            Sq(Pq(c.gclid, c.gclsrc), !1, b)
        }, uq())
    }

    function Xq(a) {
        var b = ["ag"],
            c = Ap(!0),
            d = Bq(a.prefix);
        wq(function() {
            for (var e = 0; e < b.length; ++e) {
                var f = Cq(b[e], d);
                if (f) {
                    var g = c[f];
                    if (g) {
                        var k = dq(g);
                        if (k) {
                            var m = Gq(k);
                            m || (m = pb());
                            var n;
                            a: {
                                for (var p = m, q = gq(f), r = 0; r < q.length; ++r)
                                    if (Gq(q[r]) > p) {
                                        n = !0;
                                        break a
                                    } n = !1
                            }
                            if (n) break;
                            k.i = "" + Math.round(m / 1E3);
                            iq(f, k, a, m)
                        }
                    }
                }
            }
        }, ["ad_storage"])
    }

    function Cq(a, b) {
        var c = tq[a];
        if (c !== void 0) return b + c
    }

    function Wq(a) {
        return Yq(a.split(".")).length !== 0 ? (Number(a.split(".")[1]) || 0) * 1E3 : 0
    }

    function Gq(a) {
        return a ? (Number(a.i) || 0) * 1E3 : 0
    }

    function Hq(a) {
        var b = Yq(a.split("."));
        return b.length === 0 ? null : {
            version: b[0],
            W: b[2],
            timestamp: (Number(b[1]) || 0) * 1E3,
            labels: b.slice(3)
        }
    }

    function Yq(a) {
        return a.length < 3 || a[0] !== "GCL" && a[0] !== "1" || !/^\d+$/.test(a[1]) || !rq.test(a[2]) ? [] : a
    }

    function Zq(a, b, c, d, e) {
        if (Array.isArray(b) && Mo(C)) {
            var f = Bq(e),
                g = function() {
                    for (var k = {}, m = 0; m < a.length; ++m) {
                        var n = Cq(a[m], f);
                        if (n) {
                            var p = No(n, E.cookie, void 0, uq());
                            p.length && (k[n] = p.sort()[p.length - 1])
                        }
                    }
                    return k
                };
            wq(function() {
                Hp(g, b, c, d)
            }, uq())
        }
    }

    function $q(a, b, c, d) {
        if (Array.isArray(a) && Mo(C)) {
            var e = ["ag"],
                f = Bq(d),
                g = function() {
                    for (var k = {}, m = 0; m < e.length; ++m) {
                        var n = Cq(e[m], f);
                        if (!n) return {};
                        var p = gq(n);
                        if (p.length) {
                            var q = p.sort(function(r, u) {
                                return Gq(u) - Gq(r)
                            })[0];
                            k[n] = eq(q)
                        }
                    }
                    return k
                };
            wq(function() {
                Hp(g, a, b, c)
            }, ["ad_storage"])
        }
    }

    function Iq(a) {
        return a.filter(function(b) {
            return rq.test(b.W)
        })
    }

    function ar(a, b) {
        if (Mo(C)) {
            for (var c = Bq(b.prefix), d = {}, e = 0; e < a.length; e++) tq[a[e]] && (d[a[e]] = tq[a[e]]);
            wq(function() {
                ib(d, function(f, g) {
                    var k = No(c + g, E.cookie, void 0, uq());
                    k.sort(function(u, v) {
                        return Wq(v) - Wq(u)
                    });
                    if (k.length) {
                        var m = k[0],
                            n = Wq(m),
                            p = Yq(m.split(".")).length !== 0 ? m.split(".").slice(3) : [],
                            q = {},
                            r;
                        r = Yq(m.split(".")).length !== 0 ? m.split(".")[2] : void 0;
                        q[f] = [r];
                        Sq(q, !0, b, n, p)
                    }
                })
            }, uq())
        }
    }

    function br(a) {
        var b = ["ag"],
            c = ["gbraid"];
        wq(function() {
            for (var d = Bq(a.prefix), e = 0; e < b.length; ++e) {
                var f = Cq(b[e], d);
                if (!f) break;
                var g = gq(f);
                if (g.length) {
                    var k = g.sort(function(q, r) {
                            return Gq(r) - Gq(q)
                        })[0],
                        m = Gq(k),
                        n = k.b,
                        p = {};
                    p[c[e]] = k.k;
                    Sq(p, !0, a, m, n)
                }
            }
        }, ["ad_storage"])
    }

    function cr(a, b) {
        for (var c = 0; c < b.length; ++c)
            if (a[b[c]]) return !0;
        return !1
    }

    function dr(a) {
        function b(k, m, n) {
            n && (k[m] = n)
        }
        if (Zk()) {
            var c = Qq(),
                d;
            a.includes("gad_source") && (d = c.gad_source !== void 0 ? c.gad_source : Ap(!1)._gs);
            if (cr(c, a) || d) {
                var e = {};
                b(e, "gclid", c.gclid);
                b(e, "dclid", c.dclid);
                b(e, "gclsrc", c.gclsrc);
                b(e, "wbraid", c.wbraid);
                b(e, "gbraid", c.gbraid);
                Ip(function() {
                    return e
                }, 3);
                var f = {},
                    g = (f._up = "1", f);
                b(g, "_gs", d);
                Ip(function() {
                    return g
                }, 1)
            }
        }
    }

    function er(a) {
        if (!Za(1)) return null;
        var b = Ap(!0).gad_source;
        if (b != null) return C.location.hash = "", b;
        if (Za(2)) {
            var c = zj(C.location.href);
            b = tj(c, "query", !1, void 0, "gad_source");
            if (b != null) return b;
            var d = Qq();
            if (cr(d, a)) return "0"
        }
        return null
    }

    function fr(a) {
        var b = er(a);
        b != null && Ip(function() {
            var c = {};
            return c.gad_source = b, c
        }, 4)
    }

    function gr(a, b, c) {
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

    function hr(a, b, c, d) {
        var e = [];
        c = c || {};
        if (!vq(uq())) return e;
        var f = yq(a),
            g = gr(e, f, b);
        if (g.length && !d)
            for (var k = l(g), m = k.next(); !m.done; m = k.next()) {
                var n = m.value,
                    p = n.timestamp,
                    q = [n.version, Math.round(p / 1E3), n.W].concat(n.labels || [], [b]).join("."),
                    r = hp(c, p, !0);
                r.Hb = uq();
                Yo(a, q, r)
            }
        return e
    }

    function ir(a, b) {
        var c = [];
        b = b || {};
        var d = Aq(b),
            e = gr(c, d, a);
        if (e.length)
            for (var f = l(e), g = f.next(); !g.done; g = f.next()) {
                var k = g.value,
                    m = Bq(b.prefix),
                    n = Cq(k.type, m);
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
                    iq(n, x, b, v)
                } else if (k.type === "gb") {
                    var y = [q, t, r].concat(u || [], [a]).join("."),
                        A = hp(b, v, !0);
                    A.Hb = uq();
                    Yo(n, y, A)
                }
            }
        return c
    }

    function jr(a, b) {
        var c = Bq(b),
            d = Cq(a, c);
        if (!d) return 0;
        var e;
        e = a === "ag" ? Dq(d) : yq(d);
        for (var f = 0, g = 0; g < e.length; g++) f = Math.max(f, e[g].timestamp);
        return f
    }

    function kr(a) {
        for (var b = 0, c = l(Object.keys(a)), d = c.next(); !d.done; d = c.next())
            for (var e = a[d.value], f = 0; f < e.length; f++) b = Math.max(b, Number(e[f].timestamp));
        return b
    }

    function lr(a) {
        var b = Math.max(jr("aw", a), kr(vq(uq()) ? lq() : {})),
            c = Math.max(jr("gb", a), kr(vq(uq()) ? lq("_gac_gb", !0) : {}));
        c = Math.max(c, jr("ag", a));
        return c > b
    };
    var mr = function(a, b) {
            var c = Gi.ads_pageview = Gi.ads_pageview || {};
            if (c[a]) return !1;
            (b === void 0 ? 0 : b) || (c[a] = !0);
            return !0
        },
        nr = function(a) {
            var b = zj(a);
            return Cb("gclid dclid gbraid wbraid gclaw gcldc gclha gclgf gclgb _gl".split(" "), b, "0")
        },
        vr = function(a, b, c, d, e) {
            var f = Bq(a.prefix);
            if (mr(f, !0)) {
                var g = Qq(),
                    k = [],
                    m = g.gclid,
                    n = g.dclid,
                    p = g.gclsrc || "aw",
                    q = or(),
                    r = q.Re,
                    u = q.bk;
                !m || p !== "aw.ds" && p !== "aw" && p !== "ds" && p !== "3p.ds" || k.push({
                    W: m,
                    Se: p
                });
                n && k.push({
                    W: n,
                    Se: "ds"
                });
                k.length === 2 && S(147);
                k.length === 0 && g.wbraid &&
                    k.push({
                        W: g.wbraid,
                        Se: "gb"
                    });
                k.length === 0 && p === "aw.ds" && k.push({
                    W: "",
                    Se: "aw.ds"
                });
                pr(function() {
                    var v = V(qr());
                    if (v) {
                        Op(a);
                        var t = [],
                            w = v ? Mp[Pp(a.prefix)] : void 0;
                        w && t.push("auid=" + w);
                        if (V(O.g.N)) {
                            e && t.push("userId=" + e);
                            var x = Ll(Gl.vh);
                            if (x === void 0) Kl(Gl.wh, !0);
                            else {
                                var y = Ll(Gl.Ee);
                                t.push("ga_uid=" + y + "." + x)
                            }
                        }
                        var A = E.referrer ? tj(zj(E.referrer), "host") : "",
                            B = v || !d ? k : [];
                        B.length === 0 && (rr.test(A) || sr.test(A)) && B.push({
                            W: "",
                            Se: ""
                        });
                        if (B.length !== 0 || r !== void 0) {
                            A && t.push("ref=" + encodeURIComponent(A));
                            var D =
                                tr();
                            t.push("url=" + encodeURIComponent(D));
                            t.push("tft=" + pb());
                            var I = Fc();
                            I !== void 0 && t.push("tfd=" + Math.round(I));
                            var J = Jn(!0);
                            t.push("frm=" + J);
                            r !== void 0 && t.push("gad_source=" + encodeURIComponent(r));
                            u !== void 0 && t.push("gad_source_src=" + encodeURIComponent(u.toString()));
                            if (!c) {
                                var F = {};
                                c = zm(pm(new om(0), (F[O.g.la] = Um.j[O.g.la], F)))
                            }
                            t.push("gtm=" + Ko({
                                ya: b
                            }));
                            xo() && t.push("gcs=" + yo());
                            t.push("gcd=" + Co(c));
                            Fo() && t.push("dma_cps=" + Do());
                            t.push("dma=" + Eo());
                            wo(c) ? t.push("npa=0") : t.push("npa=1");
                            Ho() &&
                                t.push("_ng=1");
                            Tn(jo()) && t.push("tcfd=" + Go());
                            var Z = qo();
                            Z && t.push("gdpr=" + Z);
                            var N = po();
                            N && t.push("gdpr_consent=" + N);
                            Q(18) && t.push("apve=0");
                            Q(93) && Ap(!1)._up && t.push("gtm_up=1");
                            Zi.j && t.push("tag_exp=" + Zi.j);
                            if (B.length > 0)
                                for (var W = 0; W < B.length; W++) {
                                    var da = B[W],
                                        T = da.W,
                                        R = da.Se;
                                    if (!ur(a.prefix, R + "." + T, w !== void 0)) {
                                        var M = 'https://adservice.google.com/pagead/regclk?' + t.join("&");
                                        T !== "" ? M = R === "gb" ? M + "&wbraid=" + T : M + "&gclid=" + T + "&gclsrc=" + R : R === "aw.ds" && (M += "&gclsrc=aw.ds");
                                        zc(M)
                                    }
                                } else if (r !== void 0 && !ur(a.prefix,
                                        "gad", w !== void 0)) {
                                    var ia = 'https://adservice.google.com/pagead/regclk?' + t.join("&");
                                    zc(ia)
                                }
                        }
                    }
                })
            }
        },
        ur = function(a, b, c) {
            var d = Gi.joined_auid = Gi.joined_auid || {},
                e = (c ? a || "_gcl" : "") + "." + b;
            if (d[e]) return !0;
            d[e] = !0;
            return !1
        },
        or = function() {
            var a = zj(C.location.href),
                b = void 0,
                c = void 0,
                d = tj(a, "query", !1, void 0, "gad_source"),
                e, f = a.hash.replace("#", "").match(wr);
            e = f ? f[1] : void 0;
            d && e ? (b = d, c = 1) : d ? (b = d, c = 2) : e && (b = e, c = 3);
            return {
                Re: b,
                bk: c
            }
        },
        tr = function() {
            var a = Jn(!1) === 1 ? C.top.location.href : C.location.href;
            return a = a.replace(/[\?#].*$/,
                "")
        },
        xr = function(a) {
            var b = [];
            ib(a, function(c, d) {
                d = Iq(d);
                for (var e = [], f = 0; f < d.length; f++) e.push(d[f].W);
                e.length && b.push(c + ":" + e.join(","))
            });
            return b.join(";")
        },
        zr = function(a, b) {
            return yr("dc", a, b)
        },
        Ar = function(a, b) {
            return yr("aw", a, b)
        },
        yr = function(a, b, c) {
            if (a === "aw" || a === "dc" || a === "gb") {
                var d = Aj("gcl" + a);
                if (d) return d.split(".")
            }
            var e = Bq(b);
            if (e === "_gcl") {
                var f = !V(qr()) && c,
                    g;
                g = Qq()[a] || [];
                if (g.length > 0) return f ? ["0"] : g
            }
            var k = Cq(a, e);
            return k ? xq(k) : []
        },
        pr = function(a) {
            var b = qr();
            Bl(function() {
                a();
                V(b) || cl(a, b)
            }, b)
        },
        qr = function() {
            return [O.g.O, O.g.N]
        },
        rr = /^(?:www\.)?google(?:\.com?)?(?:\.[a-z]{2}t?)?$/,
        sr = /^www\.googleadservices\.com$/,
        wr = /^gad_source[_=](\d+)$/;

    function Br() {
        Gi.dedupe_gclid || (Gi.dedupe_gclid = ep());
        return Gi.dedupe_gclid
    };
    var Cr = /^(www\.)?google(\.com?)?(\.[a-z]{2}t?)?$/,
        Dr = /^www.googleadservices.com$/;

    function Er(a) {
        a || (a = Fr());
        return a.vn ? !1 : a.lm || a.mm || a.sm || a.om || a.Re || a.Xl || a.qm || a.bm ? !0 : !1
    }

    function Fr() {
        var a = {},
            b = Ap(!0);
        a.vn = !!b._up;
        var c = Qq();
        a.lm = c.aw !== void 0;
        a.mm = c.dc !== void 0;
        a.sm = c.wbraid !== void 0;
        a.om = c.gbraid !== void 0;
        a.qm = c.gclsrc === "aw.ds";
        a.Re = or().Re;
        var d = E.referrer ? tj(zj(E.referrer), "host") : "";
        a.bm = Cr.test(d);
        a.Xl = Dr.test(d);
        return a
    };
    var Gr = RegExp("^UA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*(?:%3BUA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*)*$"),
        Hr = /^~?[\w-]+(?:\.~?[\w-]+)*$/,
        Ir = /^\d+\.fls\.doubleclick\.net$/,
        Jr = /;gac=([^;?]+)/,
        Kr = /;gacgb=([^;?]+)/;

    function Lr(a, b) {
        if (Ir.test(E.location.host)) {
            var c = E.location.href.match(b);
            return c && c.length === 2 && c[1].match(Gr) ? decodeURIComponent(c[1]) : ""
        }
        for (var d = [], e = l(Object.keys(a)), f = e.next(); !f.done; f = e.next()) {
            for (var g = f.value, k = [], m = a[g], n = 0; n < m.length; n++) k.push(m[n].W);
            d.push(g + ":" + k.join(","))
        }
        return d.length > 0 ? d.join(";") : ""
    }

    function Mr(a, b, c) {
        for (var d = vq(uq()) ? lq("_gac_gb", !0) : {}, e = [], f = !1, g = l(Object.keys(d)), k = g.next(); !k.done; k = g.next()) {
            var m = k.value,
                n = hr("_gac_gb_" + m, a, b, c);
            f = f || n.length !== 0 && n.some(function(p) {
                return p === 1
            });
            e.push(m + ":" + n.join(","))
        }
        return {
            Wl: f ? e.join(";") : "",
            Vl: Lr(d, Kr)
        }
    }

    function Nr(a) {
        var b = E.location.href.match(new RegExp(";" + a + "=([^;?]+)"));
        return b && b.length === 2 && b[1].match(Hr) ? b[1] : void 0
    }

    function Or(a) {
        var b = Za(10),
            c = {},
            d, e, f;
        Ir.test(E.location.host) && (d = Nr("gclgs"), e = Nr("gclst"), b && (f = Nr("gcllp")));
        if (d && e && (!b || f)) c.Mh = d, c.Oh = e, c.Nh = f;
        else {
            var g = pb(),
                k = Dq((a || "_gcl") + "_gs"),
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

    function Pr(a, b, c, d) {
        d = d === void 0 ? !1 : d;
        if (Ir.test(E.location.host)) {
            var e = Nr(c);
            if (e) return [{
                W: e
            }]
        } else {
            if (b === "gclid") {
                var f = (a || "_gcl") + "_aw";
                return d ? Mq(f) : yq(f)
            }
            if (b === "wbraid") return yq((a || "_gcl") + "_gb");
            if (b === "braids") return Aq({
                prefix: a
            })
        }
        return []
    }

    function Qr(a) {
        return Pr(a, "gclid", "gclaw").map(function(b) {
            return b.W
        }).join(".")
    }

    function Rr(a) {
        var b = Pr(a, "gclid", "gclaw", !0),
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
            dk: d,
            ek: e
        }
    }

    function Sr(a) {
        return Pr(a, "braids", "gclgb").map(function(b) {
            return b.W
        }).join(".")
    }

    function Tr(a) {
        return Ir.test(E.location.host) ? !(Nr("gclaw") || Nr("gac")) : lr(a)
    }

    function Ur(a, b, c) {
        var d;
        d = c ? ir(a, b) : hr((b && b.prefix || "_gcl") + "_gb", a, b);
        return d.length === 0 || d.every(function(e) {
            return e === 0
        }) ? "" : d.join(".")
    };

    function Vr() {
        var a = C.__uspapi;
        if (ab(a)) {
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
    var Zr = function(a) {
            if (a.eventName === O.g.ba && a.metadata.hit_type === "page_view")
                if (Q(19)) {
                    a.metadata.redact_click_ids = U(a.m, O.g.ia) != null && U(a.m, O.g.ia) !== !1 && !V([O.g.O, O.g.N]);
                    var b = Wr(a),
                        c = U(a.m, O.g.ra) !== !1;
                    c || (a.j[O.g.Vi] = "1");
                    var d = Bq(b.prefix),
                        e = a.metadata.is_server_side_destination;
                    if (!a.metadata.consent_updated && !a.metadata.user_id_updated) {
                        var f = U(a.m, O.g.cb),
                            g = U(a.m, O.g.sa) || {};
                        Xr({
                            Bd: c,
                            Kd: g,
                            Pd: f,
                            rc: b
                        });
                        if (!e && !mr(d)) {
                            a.isAborted = !0;
                            return
                        }
                    }
                    if (e) a.isAborted = !0;
                    else {
                        a.j[O.g.Cc] = O.g.ac;
                        if (a.metadata.consent_updated) a.j[O.g.Cc] =
                            O.g.Kk, a.j[O.g.Yb] = "1";
                        else if (a.metadata.user_id_updated) a.j[O.g.Cc] = O.g.Pk;
                        else {
                            var k = Qq();
                            a.j[O.g.Td] = k.gclid;
                            a.j[O.g.be] = k.dclid;
                            a.j[O.g.Qi] = k.gclsrc;
                            a.j[O.g.Td] || a.j[O.g.be] || (a.j[O.g.zf] = k.wbraid, a.j[O.g.Ag] = k.gbraid);
                            a.j[O.g.Ea] = E.referrer ? tj(zj(E.referrer), "host") : "";
                            a.j[O.g.wa] = tr();
                            if (Q(22) && ic) {
                                var m = tj(zj(ic), "host");
                                m && (a.j[O.g.nj] = m)
                            }
                            var n = or(),
                                p = n.bk;
                            a.j[O.g.Oi] = n.Re;
                            a.j[O.g.Pi] = p;
                            a.j[O.g.Nb] = Jn(!0);
                            var q = Fr();
                            Er(q) && (a.j[O.g.md] = "1");
                            a.j[O.g.Si] = Br();
                            Ap(!1)._up === "1" && (a.j[O.g.ij] =
                                "1")
                        }
                        el = !0;
                        var r = V([O.g.O, O.g.N]);
                        r && (Q(23) && (a.j[O.g.ib] = Yr()), c && (Op(b), a.j[O.g.Lb] = Mp[Pp(b.prefix)]));
                        a.j[O.g.rb] = void 0;
                        a.j[O.g.Za] = void 0;
                        if (!a.j[O.g.Td] && !a.j[O.g.be] && Tr(d)) {
                            var u = zq(b);
                            u.length > 0 && (a.j[O.g.rb] = u.join("."))
                        } else if (!a.j[O.g.zf] && r) {
                            var v = xq(d + "_aw");
                            v.length > 0 && (a.j[O.g.Za] = v.join("."))
                        }
                        a.m.isGtmEvent && (a.m.j[O.g.la] = Um.j[O.g.la]);
                        wo(a.m) ? a.j[O.g.Tb] = !1 : a.j[O.g.Tb] = !0;
                        a.metadata.add_tag_timing = !0;
                        var t = Vr();
                        t !== void 0 && (a.j[O.g.wd] = t || "error");
                        var w = qo();
                        w && (a.j[O.g.ic] = w);
                        var x = po();
                        x && (a.j[O.g.mc] = x);
                        a.metadata.speculative = !1
                    }
                } else a.isAborted = !0
        },
        Wr = function(a) {
            var b = {
                prefix: U(a.m, O.g.eb) || U(a.m, O.g.Ma),
                domain: U(a.m, O.g.Ra),
                Fb: U(a.m, O.g.Sa),
                flags: U(a.m, O.g.ab)
            };
            a.m.isGtmEvent && (b.path = U(a.m, O.g.vb));
            return b
        },
        $r = function(a, b) {
            var c, d, e, f, g, k, m, n;
            c = a.Bd;
            d = a.Kd;
            e = a.Pd;
            f = a.ya;
            g = a.m;
            k = a.Md;
            m = a.Vn;
            n = a.Bk;
            Xr({
                Bd: c,
                Kd: d,
                Pd: e,
                rc: b
            });
            c && m !== !0 && (n != null ? n = String(n) : n = void 0, vr(b, f, g, k, n))
        },
        Xr = function(a) {
            var b, c, d, e;
            b = a.Bd;
            c = a.Kd;
            d = a.Pd;
            e = a.rc;
            b && (Kp(c[O.g.Hc], !!c[O.g.X]) &&
                (Vq(as, e), Xq(e), Wp(e)), Q(85) || Q(112) ? Tq(e) : Rq(e), ar(as, e), br(e));
            c[O.g.X] && (Zq(as, c[O.g.X], c[O.g.Pb], !!c[O.g.yb], e.prefix), $q(c[O.g.X], c[O.g.Pb], !!c[O.g.yb], e.prefix), Xp(Pp(e.prefix), c[O.g.X], c[O.g.Pb], !!c[O.g.yb], e), Xp("FPAU", c[O.g.X], c[O.g.Pb], !!c[O.g.yb], e));
            d && (Q(73) ? dr(bs) : dr(cs));
            fr(cs)
        },
        ds = function(a, b, c, d) {
            var e, f, g;
            e = a.Ck;
            f = a.callback;
            g = a.ik;
            if (typeof f === "function")
                if (e === O.g.Za && g === void 0) {
                    var k = d(b.prefix, c);
                    k.length === 0 ? f(void 0) : k.length === 1 ? f(k[0]) : f(k)
                } else e === O.g.Lb ? (S(65), Op(b,
                    !1), f(Mp[Pp(b.prefix)])) : f(g)
        },
        as = ["aw", "dc", "gb"],
        cs = ["aw", "dc", "gb", "ag"],
        bs = ["aw", "dc", "gb", "ag", "gad_source"];

    function es(a) {
        var b = U(a.m, O.g.Ob),
            c = U(a.m, O.g.jc);
        b && !c ? (a.eventName !== O.g.ba && a.eventName !== O.g.Uc && S(131), a.isAborted = !0) : !b && c && (S(132), a.isAborted = !0)
    }

    function fs(a) {
        var b = V(O.g.O) ? Gi.pscdl : "denied";
        b != null && (a.j[O.g.Df] = b)
    }

    function gs(a) {
        var b = Jn(!0);
        a.j[O.g.Nb] = b
    }

    function hs(a) {
        Ho() && (a.j[O.g.Fc] = 1)
    }

    function Yr() {
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

    function is(a) {
        js(a, "ce", U(a.m, O.g.Sa))
    }

    function js(a, b, c) {
        a.j[O.g.xd] || (a.j[O.g.xd] = {});
        a.j[O.g.xd][b] = c
    };

    function ps(a, b, c, d) {
        var e = pc(),
            f;
        if (e === 1) a: {
            var g = Si;g = g.toLowerCase();
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

    function Bs(a) {
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
                return U(a.m, b)
            },
            Ub: function() {
                return a
            },
            getHitKeys: function() {
                return Object.keys(a.j)
            }
        }
    };
    var Ds = function(a) {
            var b = Cs[a.target.destinationId];
            if (!a.isAborted && b)
                for (var c = Bs(a), d = 0; d < b.length; ++d) {
                    try {
                        b[d](c)
                    } catch (e) {
                        a.isAborted = !0
                    }
                    if (a.isAborted) break
                }
        },
        Es = function(a, b) {
            var c = Cs[a];
            c || (c = Cs[a] = []);
            c.push(b)
        },
        Cs = {};
    var Is, Js = !1;

    function Ks() {
        Js = !0;
        Is = Is || {}
    }

    function Ls(a) {
        Js || Ks();
        return Is[a]
    }

    function Ms() {
        var a = C.screen;
        return {
            width: a ? a.width : 0,
            height: a ? a.height : 0
        }
    }

    function Ns(a) {
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
    var Xs = function(a) {
            return a.tagName + ":" + a.isVisible + ":" + a.Z.length + ":" + Ws.test(a.Z)
        },
        kt = function(a) {
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
            var b = Ys(a),
                c = Zs[b];
            if (c && pb() - c.timestamp < 200) return c.result;
            var d = $s(),
                e = d.status,
                f = [],
                g, k, m = [];
            if (!Q(28)) {
                if (a.Bb && a.Bb.email) {
                    var n = at(d.elements);
                    f = bt(n, a && a.Me);
                    g = ct(f);
                    n.length > 10 && (e = "3")
                }!a.pg && g && (f = [g]);
                for (var p = 0; p < f.length; p++) m.push(dt(f[p], !!a.Hd, !!a.Id));
                m = m.slice(0, 10)
            } else if (a.Bb) {}
            g && (k = dt(g, !!a.Hd, !!a.Id));
            var D = {
                elements: m,
                hi: k,
                status: e
            };
            Zs[b] = {
                timestamp: pb(),
                result: D
            };
            return D
        },
        jt = function(a, b, c) {
            var d = a.element,
                e = {
                    Z: a.Z,
                    type: a.qa,
                    tagName: d.tagName
                };
            b && (e.querySelector = lt(d));
            c && (e.isVisible = !Ns(d));
            return e
        },
        dt = function(a, b, c) {
            return jt({
                element: a.element,
                Z: a.Z,
                qa: it.vc
            }, b, c)
        },
        Ys = function(a) {
            var b = !(a == null || !a.Hd) + "." + !(a == null || !a.Id);
            a && a.Me && a.Me.length && (b += "." + a.Me.join("."));
            a && a.Bb && (b += "." + a.Bb.email + "." + a.Bb.phone + "." + a.Bb.address);
            return b
        },
        ct = function(a) {
            if (a.length !== 0) {
                var b;
                b = mt(a, function(c) {
                    return !nt.test(c.Z)
                });
                b = mt(b, function(c) {
                    return c.element.tagName.toUpperCase() === "INPUT"
                });
                b = mt(b, function(c) {
                    return !Ns(c.element)
                });
                return b[0]
            }
        },
        bt = function(a, b) {
            if (!b || b.length === 0) return a;
            for (var c = [], d = 0; d < a.length; d++) {
                for (var e = !0, f = 0; f < b.length; f++) {
                    var g = b[f];
                    if (g && Ph(a[d].element, g)) {
                        e = !1;
                        break
                    }
                }
                e && c.push(a[d])
            }
            return c
        },
        mt = function(a, b) {
            if (a.length <= 1) return a;
            var c = a.filter(b);
            return c.length === 0 ? a : c
        },
        lt = function(a) {
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
                        d = lt(a.parentElement) + ">:nth-child(" + e.toString() + ")"
                    } else d = "";
                    c = d
                }
                b = c
            }
            return b
        },
        at = function(a) {
            for (var b = [], c = 0; c < a.length; c++) {
                var d = a[c],
                    e = d.textContent;
                d.tagName.toUpperCase() === "INPUT" && d.value && (e = d.value);
                if (e) {
                    var f = e.match(ot);
                    if (f) {
                        var g = f[0],
                            k;
                        if (C.location) {
                            var m = vj(C.location, "host", !0);
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
        $s = function() {
            var a = [],
                b = E.body;
            if (!b) return {
                elements: a,
                status: "4"
            };
            for (var c = b.querySelectorAll("*"), d = 0; d < c.length && d < 1E4; d++) {
                var e = c[d];
                if (!(pt.indexOf(e.tagName.toUpperCase()) >= 0) && e.children instanceof HTMLCollection) {
                    for (var f = !1, g = 0; g < e.childElementCount && g < 1E4; g++)
                        if (!(qt.indexOf(e.children[g].tagName.toUpperCase()) >= 0)) {
                            f = !0;
                            break
                        }(!f || Q(28) && rt.indexOf(e.tagName) !== -1) && a.push(e)
                }
            }
            return {
                elements: a,
                status: c.length > 1E4 ? "2" : "1"
            }
        },
        st = !1;
    var ot = /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i,
        Ws = /@(gmail|googlemail)\./i,
        nt = /support|noreply/i,
        pt = "SCRIPT STYLE IMG SVG PATH BR NOSCRIPT TEXTAREA".split(" "),
        qt = ["BR"],
        it = {
            vc: "1",
            Be: "2",
            we: "3",
            ye: "4",
            ug: "5",
            sh: "6",
            eg: "7"
        },
        Zs = {},
        rt = ["INPUT", "SELECT"];
    var It = function(a, b, c) {
            a.j[O.g.De] || (a.j[O.g.De] = {});
            a.j[O.g.De][b] = c
        },
        Kt = function(a, b) {
            var c = Jt(a, O.g.ie, a.m.C[O.g.ie]);
            if (c && c[b || a.eventName] !== void 0) return c[b || a.eventName]
        },
        Lt = function(a) {
            var b = a.metadata.user_data;
            if (Rc(b)) return b
        },
        Mt = function(a) {
            if (a.metadata.is_merchant_center || !Gj(a.m)) return !1;
            if (!U(a.m, O.g.rd)) {
                var b = U(a.m, O.g.Dc);
                return b === !0 || b === "true"
            }
            return !0
        },
        Nt = function(a) {
            return Jt(a, O.g.Gc, U(a.m, O.g.Gc)) || !!Jt(a, "google_ng", !1)
        };
    var Jf;
    var Ot = Number('') || 5,
        Pt = Number('') || 50,
        Qt = eb();
    var Vt = {
        xl: Number('') || 500,
        il: Number('') || 5E3,
        Dj: Number('20') || 10,
        Jk: Number('') || 5E3
    };

    function Wt(a) {
        return a.performance && a.performance.now() || Date.now()
    }
    var Xt = function(a, b) {
        var c;
        return c
    };
    var Yt;

    function eu() {
        var a = Mf(Jf.j, "", function() {
            return {}
        });
        try {
            return a("internal_sw_allowed"), !0
        } catch (b) {
            return !1
        }
    }

    function fu(a, b, c) {
        c = c === void 0 ? !1 : c;
    }
    var gu = function(a, b, c, d) {};

    function hu(a, b, c, d, e) {}

    function iu(a, b, c, d) {}
    var ju = function(a) {
        for (var b = [], c = 0, d = 0; d < a.length; d++) {
            var e = a.charCodeAt(d);
            e < 128 ? b[c++] = e : (e < 2048 ? b[c++] = e >> 6 | 192 : ((e & 64512) == 55296 && d + 1 < a.length && (a.charCodeAt(d + 1) & 64512) == 56320 ? (e = 65536 + ((e & 1023) << 10) + (a.charCodeAt(++d) & 1023), b[c++] = e >> 18 | 240, b[c++] = e >> 12 & 63 | 128) : b[c++] = e >> 12 | 224, b[c++] = e >> 6 & 63 | 128), b[c++] = e & 63 | 128)
        }
        return b
    };
    wn();
    zn() || tn("iPod");
    tn("iPad");
    !tn("Android") || xn() || wn() || vn() || tn("Silk");
    xn();
    !tn("Safari") || xn() || (un() ? 0 : tn("Coast")) || vn() || (un() ? 0 : tn("Edge")) || (un() ? sn("Microsoft Edge") : tn("Edg/")) || (un() ? sn("Opera") : tn("OPR")) || wn() || tn("Silk") || tn("Android") || An();
    var ku = {},
        lu = null,
        mu = function(a) {
            for (var b = [], c = 0, d = 0; d < a.length; d++) {
                var e = a.charCodeAt(d);
                e > 255 && (b[c++] = e & 255, e >>= 8);
                b[c++] = e
            }
            var f = 4;
            f === void 0 && (f = 0);
            if (!lu) {
                lu = {};
                for (var g = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), k = ["+/=", "+/", "-_=", "-_.", "-_"], m = 0; m < 5; m++) {
                    var n = g.concat(k[m].split(""));
                    ku[m] = n;
                    for (var p = 0; p < n.length; p++) {
                        var q = n[p];
                        lu[q] === void 0 && (lu[q] = p)
                    }
                }
            }
            for (var r = ku[f], u = Array(Math.floor(b.length / 3)), v = r[64] || "", t = 0, w = 0; t < b.length - 2; t += 3) {
                var x = b[t],
                    y = b[t + 1],
                    A = b[t + 2],
                    B = r[x >> 2],
                    D = r[(x & 3) << 4 | y >> 4],
                    I = r[(y & 15) << 2 | A >> 6],
                    J = r[A & 63];
                u[w++] = "" + B + D + I + J
            }
            var F = 0,
                Z = v;
            switch (b.length - t) {
                case 2:
                    F = b[t + 1], Z = r[(F & 15) << 2] || v;
                case 1:
                    var N = b[t];
                    u[w] = "" + r[N >> 2] + r[(N & 3) << 4 | F >> 4] + Z + v
            }
            return u.join("")
        };
    var nu = "platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(" ");

    function ou(a) {
        var b;
        return (b = a.google_tag_data) != null ? b : a.google_tag_data = {}
    }

    function pu() {
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

    function qu() {
        var a, b;
        return (b = (a = C.google_tag_data) == null ? void 0 : a.uach_promise) != null ? b : null
    }

    function ru(a) {
        var b, c;
        return typeof((b = a.navigator) == null ? void 0 : (c = b.userAgentData) == null ? void 0 : c.getHighEntropyValues) === "function"
    }

    function su() {
        var a = C;
        if (!ru(a)) return null;
        var b = ou(a);
        if (b.uach_promise) return b.uach_promise;
        var c = a.navigator.userAgentData.getHighEntropyValues(nu).then(function(d) {
            b.uach != null || (b.uach = d);
            return d
        });
        return b.uach_promise = c
    };
    var tu = function(a, b) {
            a && (b.j[O.g.Tf] = a.architecture, b.j[O.g.Uf] = a.bitness, a.fullVersionList && (b.j[O.g.Vf] = a.fullVersionList.map(function(c) {
                return encodeURIComponent(c.brand || "") + ";" + encodeURIComponent(c.version || "")
            }).join("|")), b.j[O.g.Wf] = a.mobile ? "1" : "0", b.j[O.g.Xf] = a.model, b.j[O.g.Yf] = a.platform, b.j[O.g.Zf] = a.platformVersion, b.j[O.g.cg] = a.wow64 ? "1" : "0")
        },
        vu = function(a) {
            var b = uu.un,
                c = function(g, k) {
                    try {
                        a(g, k)
                    } catch (m) {}
                },
                d = pu();
            if (d) c(d);
            else {
                var e = qu();
                if (e) {
                    b = Math.min(Math.max(isFinite(b) ? b :
                        0, 0), 1E3);
                    var f = C.setTimeout(function() {
                        c.Ze || (c.Ze = !0, S(106), c(null, Error("Timeout")))
                    }, b);
                    e.then(function(g) {
                        c.Ze || (c.Ze = !0, S(104), C.clearTimeout(f), c(g))
                    }).catch(function(g) {
                        c.Ze || (c.Ze = !0, S(105), C.clearTimeout(f), c(null, g))
                    })
                } else c(null)
            }
        },
        xu = function() {
            if (ru(C) && (wu = pb(), !qu())) {
                var a = su();
                a && (a.then(function() {
                    S(95)
                }), a.catch(function() {
                    S(96)
                }))
            }
        },
        wu;

    function yu(a) {
        var b;
        b = b === void 0 ? document : b;
        var c;
        return !((c = b.featurePolicy) == null || !c.allowedFeatures().includes(a))
    };

    function zu() {
        return yu("join-ad-interest-group") && ab(fc.joinAdInterestGroup)
    }

    function Au(a, b) {
        var c = Ya[3] === void 0 ? 1 : Ya[3],
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
            m = ((k == null ? void 0 : k.length) || 0) >= (Ya[2] === void 0 ? 50 : Ya[2]),
            n;
        if (n = e.length >= 1) {
            var p = Number(e[e.length - 1].dataset.loadTime);
            p !== void 0 && pb() - p < (Ya[1] === void 0 ? 6E4 : Ya[1]) ? (Ua("TAGGING",
                9), n = !0) : n = !1
        }
        if (!n) {
            if (c === 1)
                if (e.length >= 1) Bu(e[0]);
                else {
                    if (m) {
                        Ua("TAGGING", 10);
                        return
                    }
                }
            else e.length >= c ? Bu(e[0]) : m && Bu(k[0]);
            qc(a, void 0, {
                allow: "join-ad-interest-group"
            }, {
                taggingId: b,
                loadTime: pb()
            })
        }
    }

    function Bu(a) {
        try {
            a.parentNode.removeChild(a)
        } catch (b) {}
    }

    function Cu() {
        return "https://td.doubleclick.net"
    };

    function Du(a) {
        var b = a.location.href;
        if (a === a.top) return {
            url: b,
            Bm: !0
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
            Bm: c
        }
    };
    var vv = function(a, b) {
            var c = {},
                d = function(f, g) {
                    var k;
                    k = g === !0 ? "1" : g === !1 ? "0" : encodeURIComponent(String(g));
                    c[f] = k
                };
            ib(a.j, function(f, g) {
                var k = uv[f];
                k && g !== void 0 && g !== "" && (!a.metadata.redact_click_ids || f !== O.g.Td && f !== O.g.be && f !== O.g.zf && f !== O.g.Ag || (g = "0"), d(k, g))
            });
            d("gtm", Ko({
                ya: a.metadata.source_canonical_id
            }));
            xo() && d("gcs", yo());
            d("gcd", Co(a.m));
            Fo() && d("dma_cps", Do());
            d("dma", Eo());
            Tn(jo()) && d("tcfd", Go());
            Zi.j && d("tag_exp", Zi.j);
            if (a.metadata.add_tag_timing) {
                d("tft", pb());
                var e = Fc();
                e !== void 0 &&
                    d("tfd", Math.round(e))
            }
            Q(19) && d("apve", "1");
            Q(20) && d("apvf", Dc() ? Q(21) ? "f" : "sb" : "nf");
            b(c)
        },
        wv = function(a) {
            vv(a, function(b) {
                if (a.metadata.hit_type === "page_view") {
                    var c = [];
                    ib(b, function(e, f) {
                        c.push(e + "=" + f)
                    });
                    var d = Hj(V([O.g.O, O.g.N]) ? "https://www.google.com" : "https://pagead2.googlesyndication.com", !0) + "/ccm/collect?" + c.join("&");
                    Q(20) && Q(21) && Dc() ? Cc(d, void 0, {
                        noFallback: !0
                    }) : zc(d);
                    if (ab(a.m.onSuccess)) a.m.onSuccess()
                }
            })
        },
        xv = {},
        uv = (xv[O.g.Yb] = "gcu", xv[O.g.rb] = "gclgb", xv[O.g.Za] = "gclaw", xv[O.g.Oi] =
            "gad_source", xv[O.g.Pi] = "gad_source_src", xv[O.g.Td] = "gclid", xv[O.g.Qi] = "gclsrc", xv[O.g.Ag] = "gbraid", xv[O.g.zf] = "wbraid", xv[O.g.Lb] = "auid", xv[O.g.Si] = "rnd", xv[O.g.Vi] = "ncl", xv[O.g.Gg] = "gcldc", xv[O.g.be] = "dclid", xv[O.g.fb] = "edid", xv[O.g.Cc] = "en", xv[O.g.ic] = "gdpr", xv[O.g.hb] = "gdid", xv[O.g.Fc] = "_ng", xv[O.g.ij] = "gtm_up", xv[O.g.Nb] = "frm", xv[O.g.md] = "lps", xv[O.g.pe] = "did", xv[O.g.wa] = "dl", xv[O.g.Ea] = "dr", xv[O.g.ib] = "dt", xv[O.g.nj] = "scrsrc", xv[O.g.Qf] = "ga_uid", xv[O.g.mc] = "gdpr_consent", xv[O.g.Ca] = "uid", xv[O.g.wd] =
            "us_privacy", xv[O.g.Tb] = "npa", xv);
    var yv = {
        J: {
            ui: "ads_conversion_hit",
            Qd: "container_execute_start",
            xi: "container_setup_end",
            rg: "container_setup_start",
            vi: "container_blocking_end",
            wi: "container_execute_end",
            yi: "container_yield_end",
            sg: "container_yield_start",
            tj: "event_execute_end",
            sj: "event_evaluation_end",
            ph: "event_evaluation_start",
            uj: "event_setup_end",
            ve: "event_setup_start",
            wj: "ga4_conversion_hit",
            Ae: "page_load",
            Kn: "pageview",
            oc: "snippet_load",
            Pj: "tag_callback_error",
            Qj: "tag_callback_failure",
            Rj: "tag_callback_success",
            Sj: "tag_execute_end",
            yd: "tag_execute_start"
        }
    };

    function zv() {
        function a(c, d) {
            var e = Va(d);
            e && b.push([c, e])
        }
        var b = [];
        a("u", "GTM");
        a("ut", "TAGGING");
        a("h", "HEALTH");
        return b
    };
    var Av = !1;

    function iw(a, b) {}

    function jw(a, b) {}

    function kw(a, b) {}

    function lw(a, b) {}

    function mw() {
        var a = {};
        return a
    }

    function aw(a) {
        a = a === void 0 ? !0 : a;
        var b = {};
        return b
    }

    function nw() {}

    function ow(a, b) {}

    function pw(a, b, c) {}

    function qw() {}

    function rw(a, b) {
        var c = C,
            d, e = c.GooglebQhCsO;
        e || (e = {}, c.GooglebQhCsO = e);
        d = e;
        if (d[a]) return !1;
        d[a] = [];
        d[a][0] = b;
        return !0
    };

    function sw(a, b, c, d) {
        var e = En(a, "fmt");
        if (b) {
            var f = En(a, "random"),
                g = En(a, "label") || "";
            if (!f) return !1;
            var k = mu(decodeURIComponent(g.replace(/\+/g, " ")) + ":" + decodeURIComponent(f.replace(/\+/g, " ")));
            if (!rw(k, b)) return !1
        }
        e && Number(e) !== 4 && (a = Gn(a, "rfmt", e));
        var m = Gn(a, "fmt", 4);
        oc(m, function() {
            C.google_noFurtherRedirects && b && (C.google_noFurtherRedirects = null, b())
        }, c, d, E.getElementsByTagName("script")[0].parentElement || void 0);
        return !0
    };

    function Iw(a, b) {
        if (data.entities) {
            var c = data.entities[a];
            if (c) return c[b]
        }
    };

    function Jw(a, b, c) {
        c = c === void 0 ? !1 : c;
        Kw().addRestriction(0, a, b, c)
    }

    function Lw(a, b, c) {
        c = c === void 0 ? !1 : c;
        Kw().addRestriction(1, a, b, c)
    }

    function Mw() {
        var a = kk();
        return Kw().getRestrictions(1, a)
    }
    var Nw = function() {
            this.container = {};
            this.j = {}
        },
        Ow = function(a, b) {
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
    Nw.prototype.addRestriction = function(a, b, c, d) {
        d = d === void 0 ? !1 : d;
        if (!d || !this.j[b]) {
            var e = Ow(this, b);
            a === 0 ? d ? e._entity.external.push(c) : e._entity.internal.push(c) : a === 1 && (d ? e._event.external.push(c) : e._event.internal.push(c))
        }
    };
    Nw.prototype.getRestrictions = function(a, b) {
        var c = Ow(this, b);
        if (a === 0) {
            var d, e;
            return [].concat(na((c == null ? void 0 : (d = c._entity) == null ? void 0 : d.internal) || []), na((c == null ? void 0 : (e = c._entity) == null ? void 0 : e.external) || []))
        }
        if (a === 1) {
            var f, g;
            return [].concat(na((c == null ? void 0 : (f = c._event) == null ? void 0 : f.internal) || []), na((c == null ? void 0 : (g = c._event) == null ? void 0 : g.external) || []))
        }
        return []
    };
    Nw.prototype.getExternalRestrictions = function(a, b) {
        var c = Ow(this, b),
            d, e;
        return a === 0 ? (c == null ? void 0 : (d = c._entity) == null ? void 0 : d.external) || [] : (c == null ? void 0 : (e = c._event) == null ? void 0 : e.external) || []
    };
    Nw.prototype.removeExternalRestrictions = function(a) {
        var b = Ow(this, a);
        b._event && (b._event.external = []);
        b._entity && (b._entity.external = []);
        this.j[a] = !0
    };

    function Kw() {
        var a = Gi.r;
        a || (a = new Nw, Gi.r = a);
        return a
    };
    var Pw = new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),
        Qw = {
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
        Rw = {
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
        Sw = "google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" ");

    function Tw() {
        var a = gj("gtm.allowlist") || gj("gtm.whitelist");
        a && S(9);
        Mi && (a = ["google", "gtagfl", "lcl", "zone"]);
        Pw.test(C.location && C.location.hostname) && (Mi ? S(116) : (S(117), Uw && (a = [], window.console && window.console.log && window.console.log("GTM blocked. See go/13687728."))));
        var b = a && tb(mb(a), Qw),
            c = gj("gtm.blocklist") || gj("gtm.blacklist");
        c || (c = gj("tagTypeBlacklist")) && S(3);
        c ? S(8) : c = [];
        Pw.test(C.location && C.location.hostname) && (c = mb(c), c.push("nonGooglePixels", "nonGoogleScripts", "sandboxedScripts"));
        mb(c).indexOf("google") >= 0 && S(2);
        var d = c && tb(mb(c), Rw),
            e = {};
        return function(f) {
            var g = f && f[Ie.oa];
            if (!g || typeof g !== "string") return !0;
            g = g.replace(/^_*/, "");
            if (e[g] !== void 0) return e[g];
            var k = Wi[g] || [],
                m = !0;
            if (a) {
                var n;
                if (n = m) a: {
                    if (b.indexOf(g) < 0)
                        if (k && k.length > 0)
                            for (var p = 0; p < k.length; p++) {
                                if (b.indexOf(k[p]) < 0) {
                                    S(11);
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
                    var u = gb(d, k || []);
                    u && S(10);
                    q = u
                }
            }
            var v = !m || q;
            v || !(k.indexOf("sandboxedScripts") >= 0) || b && b.indexOf("sandboxedScripts") !==
                -1 || (v = gb(d, Sw));
            return e[g] = v
        }
    }
    var Uw = !1;
    Uw = !0;

    function Vw() {
        ck && Jw(kk(), function(a) {
            var b = tf(a.entityId),
                c;
            if (wf(b)) {
                var d = b[Ie.oa];
                if (!d) throw Error("Error: No function name given for function call.");
                var e = lf[d];
                c = !!e && !!e.runInSiloedMode
            } else c = !!Iw(b[Ie.oa], 4);
            return c
        })
    }

    function Ww(a, b, c, d, e) {
        if (!Xw()) {
            var f = d.siloed ? fk(a) : a;
            if (!tk(f)) {
                var g = Yw(a),
                    k = ub(a, "GTM-"),
                    m = Fj(),
                    n = c ? "/gtag/js" : "/gtm.js",
                    p = Ej(b, n + g);
                if (!p) {
                    var q = Fi.vf + n;
                    m && ic && k ? (q = ic.replace(/^(?:https?:\/\/)?/i, "").split(/[?#]/)[0], p = ps("https://", "http://", q + g)) : p = aj() ? $i() + "/" + g : ps("https://", "http://", q + g)
                }
                d.siloed && vk({
                    ctid: f,
                    isDestination: !1
                });
                var r = nk();
                Yj().container[f] = {
                    state: 1,
                    context: d,
                    parent: r
                };
                Xj({
                    ctid: f,
                    isDestination: !1
                }, e);
                oc(p)
            }
        }
    }

    function Zw(a, b, c, d) {
        if (!Xw()) {
            var e = c.siloed ? fk(a) : a;
            if (!uk(e))
                if (!c.siloed && wk()) Yj().destination[e] = {
                    state: 0,
                    transportUrl: b,
                    context: c,
                    parent: nk()
                }, Xj({
                    ctid: e,
                    isDestination: !0
                }, d), S(91);
                else {
                    var f = "/gtag/destination" + Yw(a, !0),
                        g = Ej(b, f);
                    g || (aj() ? (f = "/gtd" + Yw(a, !0), g = $i() + f) : g = ps("https://", "http://", Fi.vf + f));
                    c.siloed && vk({
                        ctid: e,
                        isDestination: !0
                    });
                    Yj().destination[e] = {
                        state: 1,
                        context: c,
                        parent: nk()
                    };
                    Xj({
                        ctid: e,
                        isDestination: !0
                    }, d);
                    oc(g)
                }
        }
    }

    function Yw(a, b) {
        b = b === void 0 ? !1 : b;
        var c = "?id=" + encodeURIComponent(a) + "&l=" + Fi.ob;
        if (!ub(a, "GTM-") || b) c += "&cx=c";
        Q(78) && (c += "&gtm=" + Ko());
        Fj() && (c += "&sign=" + Fi.uh);
        var d = Zi.C;
        d === 1 ? c += "&fps=fc" : d === 2 && (c += "&fps=fe");
        return c
    }

    function Xw() {
        if (Io()) {
            return !0
        }
        return !1
    };
    var $w = !1,
        ax = 0,
        bx = [];

    function cx(a) {
        if (!$w) {
            var b = E.createEventObject,
                c = E.readyState === "complete",
                d = E.readyState === "interactive";
            if (!a || a.type !== "readystatechange" || c || !b && d) {
                $w = !0;
                for (var e = 0; e < bx.length; e++) G(bx[e])
            }
            bx.push = function() {
                for (var f = xa.apply(0, arguments), g = 0; g < f.length; g++) G(f[g]);
                return 0
            }
        }
    }

    function dx() {
        if (!$w && ax < 140) {
            ax++;
            try {
                var a, b;
                (b = (a = E.documentElement).doScroll) == null || b.call(a, "left");
                cx()
            } catch (c) {
                C.setTimeout(dx, 50)
            }
        }
    }

    function ex(a) {
        $w ? a() : bx.push(a)
    };

    function gx(a, b, c) {
        return {
            entityType: a,
            indexInOriginContainer: b,
            nameInOriginContainer: c,
            originContainerId: ik()
        }
    };
    var ix = function(a, b) {
            this.j = !1;
            this.K = [];
            this.eventData = {
                tags: []
            };
            this.P = !1;
            this.C = this.H = 0;
            hx(this, a, b)
        },
        jx = function(a, b, c, d) {
            if (Ii.hasOwnProperty(b) || b === "__zone") return -1;
            var e = {};
            Rc(d) && (e = Sc(d, e));
            e.id = c;
            e.status = "timeout";
            return a.eventData.tags.push(e) - 1
        },
        kx = function(a, b, c, d) {
            var e = a.eventData.tags[b];
            e && (e.status = c, e.executionTime = d)
        },
        lx = function(a) {
            if (!a.j) {
                for (var b = a.K, c = 0; c < b.length; c++) b[c]();
                a.j = !0;
                a.K.length = 0
            }
        },
        hx = function(a, b, c) {
            b !== void 0 && a.Ge(b);
            c && C.setTimeout(function() {
                    lx(a)
                },
                Number(c))
        };
    ix.prototype.Ge = function(a) {
        var b = this,
            c = rb(function() {
                G(function() {
                    a(ik(), b.eventData)
                })
            });
        this.j ? c() : this.K.push(c)
    };
    var mx = function(a) {
            a.H++;
            return rb(function() {
                a.C++;
                a.P && a.C >= a.H && lx(a)
            })
        },
        nx = function(a) {
            a.P = !0;
            a.C >= a.H && lx(a)
        };
    var ox = {};

    function px() {
        return C[qx()]
    }

    function qx() {
        return C.GoogleAnalyticsObject || "ga"
    }

    function tx() {
        var a = ik();
    }

    function ux(a, b) {
        return function() {
            var c = px(),
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
    var zx = ["es", "1"],
        Ax = {},
        Bx = {};

    function Cx(a, b) {
        if (Oj) {
            var c;
            c = b.match(/^(gtm|gtag)\./) ? encodeURIComponent(b) : "*";
            Ax[a] = [
                ["e", c],
                ["eid", a]
            ];
            Mm(a)
        }
    }

    function Dx(a) {
        var b = a.eventId,
            c = a.Tc;
        if (!Ax[b]) return [];
        var d = [];
        Bx[b] || d.push(zx);
        d.push.apply(d, na(Ax[b]));
        c && (Bx[b] = !0);
        return d
    };
    var Ex = {},
        Fx = {},
        Gx = {};

    function Hx(a, b, c, d) {
        Oj && Q(90) && ((d === void 0 ? 0 : d) ? (Gx[b] = Gx[b] || 0, ++Gx[b]) : c !== void 0 ? (Fx[a] = Fx[a] || {}, Fx[a][b] = Math.round(c)) : (Ex[a] = Ex[a] || {}, Ex[a][b] = (Ex[a][b] || 0) + 1))
    }

    function Ix(a) {
        var b = a.eventId,
            c = a.Tc,
            d = Ex[b] || {},
            e = [],
            f;
        for (f in d) d.hasOwnProperty(f) && e.push("" + f + d[f]);
        c && delete Ex[b];
        return e.length ? [
            ["md", e.join(".")]
        ] : []
    }

    function Jx(a) {
        var b = a.eventId,
            c = a.Tc,
            d = Fx[b] || {},
            e = [],
            f;
        for (f in d) d.hasOwnProperty(f) && e.push("" + f + d[f]);
        c && delete Fx[b];
        return e.length ? [
            ["mtd", e.join(".")]
        ] : []
    }

    function Kx() {
        for (var a = [], b = l(Object.keys(Gx)), c = b.next(); !c.done; c = b.next()) {
            var d = c.value;
            a.push("" + d + Gx[d])
        }
        return a.length ? [
            ["mec", a.join(".")]
        ] : []
    };
    var Lx = {},
        Mx = {};

    function Nx(a, b, c) {
        if (Oj && b) {
            var d = Ij(b);
            Lx[a] = Lx[a] || [];
            Lx[a].push(c + d);
            var e = (wf(b) ? "1" : "2") + d;
            Mx[a] = Mx[a] || [];
            Mx[a].push(e);
            Mm(a)
        }
    }

    function Ox(a) {
        var b = a.eventId,
            c = a.Tc,
            d = [],
            e = Lx[b] || [];
        e.length && d.push(["tr", e.join(".")]);
        var f = Mx[b] || [];
        f.length && d.push(["ti", f.join(".")]);
        c && (delete Lx[b], delete Mx[b]);
        return d
    };

    function Px(a, b, c, d) {
        var e = jf[a],
            f = Qx(a, b, c, d);
        if (!f) return null;
        var g = xf(e[Ie.Oj], c, []);
        if (g && g.length) {
            var k = g[0];
            f = Px(k.index, {
                onSuccess: f,
                onFailure: k.Zj === 1 ? b.terminate : f,
                terminate: b.terminate
            }, c, d)
        }
        return f
    }

    function Qx(a, b, c, d) {
        function e() {
            function w() {
                il(3);
                var J = pb() - I;
                Nx(c.id, f, "7");
                kx(c.qc, B, "exception", J);
                Q(79) && pw(c, f, yv.J.Pj);
                D || (D = !0, k())
            }
            if (f[Ie.ol]) k();
            else {
                var x = vf(f, c, []),
                    y = x[Ie.Hk];
                if (y != null)
                    for (var A = 0; A < y.length; A++)
                        if (!V(y[A])) {
                            k();
                            return
                        } var B = jx(c.qc, String(f[Ie.oa]), Number(f[Ie.Fe]), x[Ie.METADATA]),
                    D = !1;
                x.vtp_gtmOnSuccess = function() {
                    if (!D) {
                        D = !0;
                        var J = pb() - I;
                        Nx(c.id, jf[a], "5");
                        kx(c.qc, B, "success", J);
                        Q(79) && pw(c, f, yv.J.Rj);
                        g()
                    }
                };
                x.vtp_gtmOnFailure = function() {
                    if (!D) {
                        D = !0;
                        var J = pb() -
                            I;
                        Nx(c.id, jf[a], "6");
                        kx(c.qc, B, "failure", J);
                        Q(79) && pw(c, f, yv.J.Qj);
                        k()
                    }
                };
                x.vtp_gtmTagId = f.tag_id;
                x.vtp_gtmEventId = c.id;
                c.priorityId && (x.vtp_gtmPriorityId = c.priorityId);
                Nx(c.id, f, "1");
                Q(79) && ow(c, f);
                var I = pb();
                try {
                    yf(x, {
                        event: c,
                        index: a,
                        type: 1
                    })
                } catch (J) {
                    w(J)
                }
                Q(79) && pw(c, f, yv.J.Sj)
            }
        }
        var f = jf[a],
            g = b.onSuccess,
            k = b.onFailure,
            m = b.terminate;
        if (c.isBlocked(f)) return null;
        var n = xf(f[Ie.Tj], c, []);
        if (n && n.length) {
            var p = n[0],
                q = Px(p.index, {
                    onSuccess: g,
                    onFailure: k,
                    terminate: m
                }, c, d);
            if (!q) return null;
            g = q;
            k = p.Zj ===
                2 ? m : q
        }
        if (f[Ie.Gj] || f[Ie.ql]) {
            var r = f[Ie.Gj] ? kf : c.nn,
                u = g,
                v = k;
            if (!r[a]) {
                var t = Rx(a, r, rb(e));
                g = t.onSuccess;
                k = t.onFailure
            }
            return function() {
                r[a](u, v)
            }
        }
        return e
    }

    function Rx(a, b, c) {
        var d = [],
            e = [];
        b[a] = Sx(d, e, c);
        return {
            onSuccess: function() {
                b[a] = Tx;
                for (var f = 0; f < d.length; f++) d[f]()
            },
            onFailure: function() {
                b[a] = Ux;
                for (var f = 0; f < e.length; f++) e[f]()
            }
        }
    }

    function Sx(a, b, c) {
        return function(d, e) {
            a.push(d);
            b.push(e);
            c()
        }
    }

    function Tx(a) {
        a()
    }

    function Ux(a, b) {
        b()
    };
    var Xx = function(a, b) {
        for (var c = [], d = 0; d < jf.length; d++)
            if (a[d]) {
                var e = jf[d];
                var f = mx(b.qc);
                try {
                    var g = Px(d, {
                        onSuccess: f,
                        onFailure: f,
                        terminate: f
                    }, b, d);
                    if (g) {
                        var k = e[Ie.oa];
                        if (!k) throw Error("Error: No function name given for function call.");
                        var m = lf[k];
                        c.push({
                            wk: d,
                            mk: (m ? m.priorityOverride || 0 : 0) || Iw(e[Ie.oa], 1) || 0,
                            execute: g
                        })
                    } else Vx(d, b), f()
                } catch (p) {
                    f()
                }
            } c.sort(Wx);
        for (var n = 0; n < c.length; n++) c[n].execute();
        return c.length >
            0
    };

    function Wx(a, b) {
        var c, d = b.mk,
            e = a.mk;
        c = d > e ? 1 : d < e ? -1 : 0;
        var f;
        if (c !== 0) f = c;
        else {
            var g = a.wk,
                k = b.wk;
            f = g > k ? 1 : g < k ? -1 : 0
        }
        return f
    }

    function Vx(a, b) {
        if (Oj) {
            var c = function(d) {
                var e = b.isBlocked(jf[d]) ? "3" : "4",
                    f = xf(jf[d][Ie.Oj], b, []);
                f && f.length && c(f[0].index);
                Nx(b.id, jf[d], e);
                var g = xf(jf[d][Ie.Tj], b, []);
                g && g.length && c(g[0].index)
            };
            c(a)
        }
    }
    var $x = !1,
        Yx;

    function by(a) {
        var b = a["gtm.uniqueEventId"],
            c = a["gtm.priorityId"],
            d = a.event;
        if (Q(79)) {}
        if (d === "gtm.js") {
            if ($x) return !1;
            $x = !0
        }
        var e = !1,
            f = Mw(),
            g = Sc(a, null);
        if (!f.every(function(u) {
                return u({
                    originalEventData: g
                })
            })) {
            if (d !== "gtm.js" && d !== "gtm.init" && d !== "gtm.init_consent") return !1;
            e = !0
        }
        Cx(b, d);
        var k = a.eventCallback,
            m = a.eventTimeout,
            n = {
                id: b,
                priorityId: c,
                name: d,
                isBlocked: cy(g, e),
                nn: [],
                logMacroError: function() {
                    S(6);
                    il(0)
                },
                cachedModelValues: dy(),
                qc: new ix(function() {
                    if (Q(79)) {}
                    k &&
                        k.apply(k, Array.prototype.slice.call(arguments, 0))
                }, m),
                originalEventData: g
            };
        Q(90) && Oj && (n.reportMacroDiscrepancy = Hx);
        Q(79) && kw(n.id, n.name);
        var p = Ef(n);
        Q(79) && lw(n.id, n.name);
        e && (p = ey(p));
        if (Q(79)) {}
        var q = Xx(p, n),
            r = !1;
        nx(n.qc);
        d !== "gtm.js" && d !== "gtm.sync" || tx();
        return fy(p, q) || r
    }

    function dy() {
        var a = {};
        a.event = lj("event", 1);
        a.ecommerce = lj("ecommerce", 1);
        a.gtm = lj("gtm");
        a.eventModel = lj("eventModel");
        return a
    }

    function cy(a, b) {
        var c = Tw();
        return function(d) {
            if (c(d)) return !0;
            var e = d && d[Ie.oa];
            if (!e || typeof e !== "string") return !0;
            e = e.replace(/^_*/, "");
            var f, g = kk();
            f = Kw().getRestrictions(0, g);
            var k = a;
            b && (k = Sc(a, null), k["gtm.uniqueEventId"] = Number.MAX_SAFE_INTEGER);
            for (var m = Wi[e] || [], n = l(f), p = n.next(); !p.done; p = n.next()) {
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

    function ey(a) {
        for (var b = [], c = 0; c < a.length; c++)
            if (a[c]) {
                var d = String(jf[c][Ie.oa]);
                if (Hi[d] || jf[c][Ie.rl] !== void 0 || Iw(d, 2)) b[c] = !0
            } return b
    }

    function fy(a, b) {
        if (!b) return b;
        for (var c = 0; c < a.length; c++)
            if (a[c] && jf[c] && !Ii[String(jf[c][Ie.oa])]) return !0;
        return !1
    }
    var gy = 0;

    function hy(a, b) {
        return arguments.length === 1 ? iy("set", a) : iy("set", a, b)
    }

    function jy(a, b) {
        return arguments.length === 1 ? iy("config", a) : iy("config", a, b)
    }

    function ky(a, b, c) {
        c = c || {};
        c[O.g.kc] = a;
        return iy("event", b, c)
    }

    function iy() {
        return arguments
    };
    var ly = function() {
        this.messages = [];
        this.j = []
    };
    ly.prototype.enqueue = function(a, b, c) {
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
    ly.prototype.listen = function(a) {
        this.j.push(a)
    };
    ly.prototype.get = function() {
        for (var a = {}, b = 0; b < this.messages.length; b++) {
            var c = this.messages[b],
                d = a[c.notBeforeEventId];
            d || (d = [], a[c.notBeforeEventId] = d);
            d.push(c)
        }
        return a
    };
    ly.prototype.prune = function(a) {
        for (var b = [], c = [], d = 0; d < this.messages.length; d++) {
            var e = this.messages[d];
            e.notBeforeEventId === a ? b.push(e) : c.push(e)
        }
        this.messages = c;
        return b
    };

    function my(a, b, c) {
        c.eventMetadata = c.eventMetadata || {};
        c.eventMetadata.source_canonical_id = Nf.canonicalContainerId;
        ny().enqueue(a, b, c)
    }

    function oy() {
        var a = py;
        ny().listen(a)
    }

    function ny() {
        var a = Gi.mb;
        a || (a = new ly, Gi.mb = a);
        return a
    };
    var qy = {},
        ry = {};

    function sy(a, b) {
        for (var c = [], d = [], e = {}, f = 0; f < a.length; e = {
                gi: void 0,
                Qh: void 0
            }, f++) {
            var g = a[f];
            if (g.indexOf("-") >= 0) {
                if (e.gi = Sl(g, b), e.gi) {
                    var k = gk();
                    db(k, function(r) {
                        return function(u) {
                            return r.gi.destinationId === u
                        }
                    }(e)) ? c.push(g) : d.push(g)
                }
            } else {
                var m = qy[g] || [];
                e.Qh = {};
                m.forEach(function(r) {
                    return function(u) {
                        r.Qh[u] = !0
                    }
                }(e));
                for (var n = dk(), p = 0; p < n.length; p++)
                    if (e.Qh[n[p]]) {
                        c = c.concat(gk());
                        break
                    } var q = ry[g] || [];
                q.length && (c = c.concat(q))
            }
        }
        return {
            Fm: c,
            Im: d
        }
    }

    function Cy(a) {
        ib(qy, function(b, c) {
            var d = c.indexOf(a);
            d >= 0 && c.splice(d, 1)
        })
    }

    function Dy(a) {
        ib(ry, function(b, c) {
            var d = c.indexOf(a);
            d >= 0 && c.splice(d, 1)
        })
    }
    var Ey = "HA GF G UA AW DC MC".split(" "),
        Fy = !1,
        Gy = !1,
        Hy = !1,
        Iy = !1;

    function Jy(a, b) {
        a.hasOwnProperty("gtm.uniqueEventId") || Object.defineProperty(a, "gtm.uniqueEventId", {
            value: Xi()
        });
        b.eventId = a["gtm.uniqueEventId"];
        b.priorityId = a["gtm.priorityId"];
        return {
            eventId: b.eventId,
            priorityId: b.priorityId
        }
    }
    var Ky = void 0,
        Ly = void 0;

    function My(a, b, c) {
        var d = Sc(a, null);
        d.eventId = void 0;
        d.inheritParentConfig = void 0;
        Object.keys(b).some(function(f) {
            return b[f] !== void 0
        }) && S(136);
        var e = Sc(b, null);
        Sc(c, e);
        my(jy(dk()[0], e), a.eventId, d)
    }

    function Ny(a) {
        for (var b = l([O.g.rd, O.g.Sb]), c = b.next(); !c.done; c = b.next()) {
            var d = c.value,
                e = a && a[d] || Um.j[d];
            if (e) return e
        }
    }
    var Oy = [O.g.rd, O.g.Sb, O.g.Dc, O.g.tb, O.g.zb, O.g.Ca, O.g.sa, O.g.Ma, O.g.Ra, O.g.vb],
        Py = {
            config: function(a, b) {
                var c = Jy(a, b);
                if (!(a.length < 2) && z(a[1])) {
                    var d = {};
                    if (a.length > 2) {
                        if (a[2] !== void 0 && !Rc(a[2]) || a.length > 3) return;
                        d = a[2]
                    }
                    var e = Sl(a[1], b.isGtmEvent);
                    if (e) {
                        var f, g, k;
                        a: {
                            if (!bk.ze) {
                                var m = mk(nk());
                                if (yk(m)) {
                                    var n = m.parent,
                                        p = n.isDestination;
                                    k = {
                                        Pm: mk(n),
                                        Em: p
                                    };
                                    break a
                                }
                            }
                            k = void 0
                        }
                        var q = k;
                        q && (f = q.Pm, g = q.Em);
                        Cx(c.eventId, "gtag.config");
                        var r = e.destinationId,
                            u = e.id !== r;
                        if (u ? gk().indexOf(r) === -1 : dk().indexOf(r) ===
                            -1) {
                            if (!b.inheritParentConfig && !d[O.g.Ob]) {
                                var v = Ny(d);
                                if (u) Zw(r, v, {
                                    source: 2,
                                    fromContainerExecution: b.fromContainerExecution
                                });
                                else if (f !== void 0 && f.containers.indexOf(r) !== -1) {
                                    var t = d;
                                    Ky ? My(b, t, Ky) : Ly || (Ly = Sc(t, null))
                                } else Ww(r, v, !0, {
                                    source: 2,
                                    fromContainerExecution: b.fromContainerExecution
                                })
                            }
                        } else {
                            if (f && (S(128), g && S(130), b.inheritParentConfig)) {
                                var w;
                                var x = d;
                                Ly ? (My(b, Ly, x), w = !1) : (!x[O.g.nc] && Ki && Ky || (Ky = Sc(x, null)), w = !0);
                                w && f.containers && f.containers.join(",");
                                return
                            }
                            var y = d;
                            if (!Hy && (Hy = !0, Gy))
                                for (var A =
                                        l(Oy), B = A.next(); !B.done; B = A.next())
                                    if (y.hasOwnProperty(B.value)) {
                                        hl("erc");
                                        break
                                    } Pj && !ck && (gy === 1 && (Ck.mcc = !1), gy = 2);
                            el = !0;
                            if (Ki && !u && !d[O.g.nc]) {
                                var D = Iy;
                                Iy = !0;
                                if (D) return
                            }
                            Fy || S(43);
                            if (!b.noTargetGroup)
                                if (u) {
                                    Dy(e.id);
                                    var I = e.id,
                                        J = d[O.g.ne] || "default";
                                    J = String(J).split(",");
                                    for (var F = 0; F < J.length; F++) {
                                        var Z = ry[J[F]] || [];
                                        ry[J[F]] = Z;
                                        Z.indexOf(I) < 0 && Z.push(I)
                                    }
                                } else {
                                    Cy(e.id);
                                    var N = e.id,
                                        W = d[O.g.ne] || "default";
                                    W = W.toString().split(",");
                                    for (var da = 0; da < W.length; da++) {
                                        var T = qy[W[da]] || [];
                                        qy[W[da]] = T;
                                        T.indexOf(N) <
                                            0 && T.push(N)
                                    }
                                } delete d[O.g.ne];
                            var R = b.eventMetadata || {};
                            R.hasOwnProperty("is_external_event") || (R.is_external_event = !b.fromContainerExecution);
                            b.eventMetadata = R;
                            delete d[O.g.kd];
                            for (var M = u ? [e.id] : gk(), ia = 0; ia < M.length; ia++) {
                                var la = d,
                                    ea = M[ia],
                                    ua = Sc(b, null),
                                    Ma = Sl(ea, ua.isGtmEvent);
                                Ma && Um.push("config", [la], Ma, ua)
                            }
                        }
                    }
                }
            },
            consent: function(a, b) {
                if (a.length === 3) {
                    S(39);
                    var c = Jy(a, b),
                        d = a[1],
                        e = a[2];
                    b.fromContainerExecution || (e[O.g.N] && S(139), e[O.g.za] && S(140));
                    d === "default" ? vl(e) : d === "update" ? xl(e, c) : d ===
                        "declare" && b.fromContainerExecution && ul(e)
                }
            },
            event: function(a, b) {
                var c = a[1];
                if (!(a.length < 2) && z(c)) {
                    var d = void 0;
                    if (a.length > 2) {
                        if (!Rc(a[2]) && a[2] !== void 0 || a.length > 3) return;
                        d = a[2]
                    }
                    var e = d,
                        f = {},
                        g = (f.event = c, f);
                    e && (g.eventModel = Sc(e, null), e[O.g.kd] && (g.eventCallback = e[O.g.kd]), e[O.g.je] && (g.eventTimeout = e[O.g.je]));
                    var k = Jy(a, b),
                        m = k.eventId,
                        n = k.priorityId;
                    g["gtm.uniqueEventId"] = m;
                    n && (g["gtm.priorityId"] = n);
                    if (c === "optimize.callback") return g.eventModel = g.eventModel || {}, g;
                    var p;
                    var q = d,
                        r = q && q[O.g.kc];
                    r === void 0 && (r = gj(O.g.kc, 2), r === void 0 && (r = "default"));
                    if (z(r) || Array.isArray(r)) {
                        var u;
                        u = b.isGtmEvent ? z(r) ? [r] : r : r.toString().replace(/\s+/g, "").split(",");
                        var v = sy(u, b.isGtmEvent),
                            t = v.Fm,
                            w = v.Im;
                        if (w.length)
                            for (var x = Ny(q), y = 0; y < w.length; y++) {
                                var A = Sl(w[y], b.isGtmEvent);
                                A && Zw(A.destinationId, x, {
                                    source: 3,
                                    fromContainerExecution: b.fromContainerExecution
                                })
                            }
                        p = Tl(t, b.isGtmEvent)
                    } else p = void 0;
                    var B = p;
                    if (B) {
                        var D;
                        !B.length || ((D = b.eventMetadata) == null ? 0 : D.em_event) || (Gy = !0);
                        Cx(m, c);
                        for (var I = [], J = 0; J < B.length; J++) {
                            var F =
                                B[J],
                                Z = Sc(b, null);
                            if (Ey.indexOf(ok(F.prefix)) !== -1) {
                                var N = Sc(d, null),
                                    W = Z.eventMetadata || {};
                                W.hasOwnProperty("is_external_event") || (W.is_external_event = !Z.fromContainerExecution);
                                Z.eventMetadata = W;
                                delete N[O.g.kd];
                                Vm(c, N, F.id, Z);
                                Pj && !ck && gy === 0 && (Ek("mcc", "1"), gy = 1);
                                el = !0
                            }
                            I.push(F.id)
                        }
                        g.eventModel = g.eventModel || {};
                        B.length > 0 ? g.eventModel[O.g.kc] = I.join() : delete g.eventModel[O.g.kc];
                        Fy || S(43);
                        b.noGtmEvent === void 0 && b.eventMetadata && b.eventMetadata.syn_or_mod && (b.noGtmEvent = !0);
                        g.eventModel[O.g.jc] &&
                            (b.noGtmEvent = !0);
                        return b.noGtmEvent ? void 0 : g
                    }
                }
            },
            get: function(a, b) {
                S(53);
                if (a.length === 4 && z(a[1]) && z(a[2]) && ab(a[3])) {
                    var c = Sl(a[1], b.isGtmEvent),
                        d = String(a[2]),
                        e = a[3];
                    if (c) {
                        Fy || S(43);
                        var f = Ny();
                        if (!db(gk(), function(k) {
                                return c.destinationId === k
                            })) Zw(c.destinationId, f, {
                            source: 4,
                            fromContainerExecution: b.fromContainerExecution
                        });
                        else if (Ey.indexOf(ok(c.prefix)) !== -1) {
                            el = !0;
                            Jy(a, b);
                            var g = {};
                            Sc((g[O.g.xb] = d, g[O.g.Mb] = e, g), null);
                            Wm(d, function(k) {
                                G(function() {
                                    e(k)
                                })
                            }, c.id, b)
                        }
                    }
                }
            },
            js: function(a, b) {
                if (a.length ===
                    2 && a[1].getTime) {
                    Fy = !0;
                    var c = Jy(a, b),
                        d = c.eventId,
                        e = c.priorityId,
                        f = {};
                    return f.event = "gtm.js", f["gtm.start"] = a[1].getTime(), f["gtm.uniqueEventId"] = d, f["gtm.priorityId"] = e, f
                }
            },
            policy: function(a) {
                if (a.length === 3 && z(a[1]) && ab(a[2])) {
                    if (Kf(a[1], a[2]), S(74), a[1] === "all") {
                        S(75);
                        var b = !1;
                        try {
                            b = a[2](ik(), "unknown", {})
                        } catch (c) {}
                        b || S(76)
                    }
                } else S(73)
            },
            set: function(a, b) {
                var c = void 0;
                a.length === 2 && Rc(a[1]) ? c = Sc(a[1], null) : a.length === 3 && z(a[1]) && (c = {}, Rc(a[2]) || Array.isArray(a[2]) ? c[a[1]] = Sc(a[2], null) : c[a[1]] =
                    a[2]);
                if (c) {
                    var d = Jy(a, b),
                        e = d.eventId,
                        f = d.priorityId;
                    Sc(c, null);
                    var g = Sc(c, null);
                    Um.push("set", [g], void 0, b);
                    c["gtm.uniqueEventId"] = e;
                    f && (c["gtm.priorityId"] = f);
                    delete c.event;
                    b.overwriteModelFields = !0;
                    return c
                }
            }
        },
        Qy = {
            policy: !0
        };
    var Sy = function(a) {
        if (Ry(a)) return a;
        this.value = a
    };
    Sy.prototype.getUntrustedMessageValue = function() {
        return this.value
    };
    var Ry = function(a) {
        return !a || Pc(a) !== "object" || Rc(a) ? !1 : "getUntrustedMessageValue" in a
    };
    Sy.prototype.getUntrustedMessageValue = Sy.prototype.getUntrustedMessageValue;
    var Ty = !1,
        Uy = [];

    function Vy() {
        if (!Ty) {
            Ty = !0;
            for (var a = 0; a < Uy.length; a++) G(Uy[a])
        }
    }

    function Wy(a) {
        Ty ? G(a) : Uy.push(a)
    };
    var Xy = 0,
        Yy = {},
        Zy = [],
        $y = [],
        az = !1,
        bz = !1;

    function cz(a, b) {
        return a.messageContext.eventId - b.messageContext.eventId || a.messageContext.priorityId - b.messageContext.priorityId
    }

    function dz(a, b, c) {
        a.eventCallback = b;
        c && (a.eventTimeout = c);
        return ez(a)
    }

    function fz(a, b) {
        if (!bb(b) || b < 0) b = 0;
        var c = Gi[Fi.ob],
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

    function gz(a, b) {
        var c = a._clear || b.overwriteModelFields;
        ib(a, function(e, f) {
            e !== "_clear" && (c && jj(e), jj(e, f))
        });
        Ti || (Ti = a["gtm.start"]);
        var d = a["gtm.uniqueEventId"];
        if (!a.event) return !1;
        typeof d !== "number" && (d = Xi(), a["gtm.uniqueEventId"] = d, jj("gtm.uniqueEventId", d));
        return by(a)
    }

    function hz(a) {
        if (a == null || typeof a !== "object") return !1;
        if (a.event) return !0;
        if (jb(a)) {
            var b = a[0];
            if (b === "config" || b === "event" || b === "js" || b === "get") return !0
        }
        return !1
    }

    function iz() {
        var a;
        if ($y.length) a = $y.shift();
        else if (Zy.length) a = Zy.shift();
        else return;
        var b;
        var c = a;
        if (az || !hz(c.message)) b = c;
        else {
            az = !0;
            var d = c.message["gtm.uniqueEventId"];
            typeof d !== "number" && (d = c.message["gtm.uniqueEventId"] = Xi());
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
            Zy.unshift(k, c);
            Pj && Ik();
            b = f
        }
        return b
    }

    function jz() {
        for (var a = !1, b; !bz && (b = iz());) {
            bz = !0;
            delete dj.eventModel;
            fj();
            var c = b,
                d = c.message,
                e = c.messageContext;
            if (d == null) bz = !1;
            else {
                e.fromContainerExecution && kj();
                try {
                    if (ab(d)) try {
                        d.call(hj)
                    } catch (v) {} else if (Array.isArray(d)) {
                        if (z(d[0])) {
                            var f = d[0].split("."),
                                g = f.pop(),
                                k = d.slice(1),
                                m = gj(f.join("."), 2);
                            if (m != null) try {
                                m[g].apply(m, k)
                            } catch (v) {}
                        }
                    } else {
                        var n = void 0;
                        if (jb(d)) a: {
                            if (d.length && z(d[0])) {
                                var p = Py[d[0]];
                                if (p && (!e.fromContainerExecution || !Qy[d[0]])) {
                                    n = p(d, e);
                                    break a
                                }
                            }
                            n = void 0
                        }
                        else n = d;
                        n && (a = gz(n, e) || a)
                    }
                } finally {
                    e.fromContainerExecution && fj(!0);
                    var q = d["gtm.uniqueEventId"];
                    if (typeof q === "number") {
                        for (var r = Yy[String(q)] || [], u = 0; u < r.length; u++) $y.push(kz(r[u]));
                        r.length && $y.sort(cz);
                        delete Yy[String(q)];
                        q > Xy && (Xy = q)
                    }
                    bz = !1
                }
            }
        }
        return !a
    }

    function lz() {
        if (Q(79)) {
            var a = mz();
        }
        var b = jz();
        if (Q(79)) {}
        try {
            var c = ik(),
                d = C[Fi.ob].hide;
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

    function py(a) {
        if (Xy < a.notBeforeEventId) {
            var b = String(a.notBeforeEventId);
            Yy[b] = Yy[b] || [];
            Yy[b].push(a)
        } else $y.push(kz(a)), $y.sort(cz), G(function() {
            bz || jz()
        })
    }

    function kz(a) {
        return {
            message: a.message,
            messageContext: a.messageContext
        }
    }

    function nz() {
        function a(f) {
            var g = {};
            if (Ry(f)) {
                var k = f;
                f = Ry(k) ? k.getUntrustedMessageValue() : void 0;
                g.fromContainerExecution = !0
            }
            return {
                message: f,
                messageContext: g
            }
        }
        var b = jc(Fi.ob, []),
            c = Gi[Fi.ob] = Gi[Fi.ob] || {};
        c.pruned === !0 && S(83);
        Yy = ny().get();
        oy();
        ex(function() {
            if (!c.gtmDom) {
                c.gtmDom = !0;
                var f = {};
                b.push((f.event = "gtm.dom", f))
            }
        });
        Wy(function() {
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
            if (Gi.SANDBOXED_JS_SEMAPHORE >
                0) {
                f = [];
                for (var g = 0; g < arguments.length; g++) f[g] = new Sy(arguments[g])
            } else f = [].slice.call(arguments, 0);
            var k = f.map(function(q) {
                return a(q)
            });
            Zy.push.apply(Zy, k);
            var m = d.apply(b, f),
                n = Math.max(100, Number("1000") || 300);
            if (this.length > n)
                for (S(4), c.pruned = !0; this.length > n;) this.shift();
            var p = typeof m !== "boolean" || m;
            return jz() && p
        };
        var e = b.slice(0).map(function(f) {
            return a(f)
        });
        Zy.push.apply(Zy, e);
        if (mz()) {
            if (Q(79)) {}
            G(lz)
        }
    }
    var mz = function() {
            var a = !0;
            return a
        },
        ez = function(a) {
            return C[Fi.ob].push(a)
        };

    function oz(a) {
        if (a == null || a.length === 0) return !1;
        var b = Number(a),
            c = pb();
        return b < c + 3E5 && b > c - 9E5
    }

    function pz(a) {
        return a && a.indexOf("pending:") === 0 ? oz(a.substr(8)) : !1
    };

    function Kz() {};
    var Lz = function() {};
    Lz.prototype.toString = function() {
        return "undefined"
    };
    var Mz = new Lz;

    function Tz(a, b) {
        function c(g) {
            var k = zj(g),
                m = tj(k, "protocol"),
                n = tj(k, "host", !0),
                p = tj(k, "port"),
                q = tj(k, "path").toLowerCase().replace(/\/$/, "");
            if (m === void 0 || m === "http" && p === "80" || m === "https" && p === "443") m = "web", p = "default";
            return [m, n, p, q]
        }
        for (var d = c(String(a)), e = c(String(b)), f = 0; f < d.length; f++)
            if (d[f] !== e[f]) return !1;
        return !0
    }

    function Uz(a) {
        return Vz(a) ? 1 : 0
    }

    function Vz(a) {
        var b = a.arg0,
            c = a.arg1;
        if (a.any_of && Array.isArray(c)) {
            for (var d = 0; d < c.length; d++) {
                var e = Sc(a, {});
                Sc({
                    arg1: c[d],
                    any_of: void 0
                }, e);
                if (Uz(e)) return !0
            }
            return !1
        }
        switch (a["function"]) {
            case "_cn":
                return ng(b, c);
            case "_css":
                var f;
                a: {
                    if (b) try {
                        for (var g = 0; g < jg.length; g++) {
                            var k = jg[g];
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
                return kg(b, c);
            case "_eq":
                return og(b, c);
            case "_ge":
                return pg(b, c);
            case "_gt":
                return rg(b, c);
            case "_lc":
                return String(b).split(",").indexOf(String(c)) >=
                    0;
            case "_le":
                return qg(b, c);
            case "_lt":
                return sg(b, c);
            case "_re":
                return mg(b, c, a.ignore_case);
            case "_sw":
                return tg(b, c);
            case "_um":
                return Tz(b, c)
        }
        return !1
    };

    function Wz() {
        var a;
        a = a === void 0 ? "" : a;
        var b, c;
        return ((b = data) == null ? 0 : (c = b.blob) == null ? 0 : c.hasOwnProperty(1)) ? String(data.blob[1]) : a
    };

    function Xz() {
        var a = [
            ["cv", Q(111) ? Wz() : "1"],
            ["rv", Fi.th],
            ["tc", jf.filter(function(b) {
                return b
            }).length]
        ];
        Fi.Ce && a.push(["x", Fi.Ce]);
        Zi.j && a.push(["tag_exp", Zi.j]);
        return a
    };
    var Yz = {},
        Zz = {};

    function $z() {
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

    function aA(a, b, c, d) {
        if (Oj) {
            var e = String(c) + b;
            Yz[a] = Yz[a] || [];
            Yz[a].push(e);
            Zz[a] = Zz[a] || [];
            Zz[a].push(d + b)
        }
    }

    function bA(a) {
        var b = a.eventId,
            c = a.Tc,
            d = [],
            e = Yz[b] || [];
        e.length && d.push(["hf", e.join(".")]);
        var f = Zz[b] || [];
        f.length && d.push(["ht", f.join(".")]);
        c && (delete Yz[b], delete Zz[b]);
        return d
    };

    function cA() {
        return !1
    }

    function dA() {
        var a = {};
        return function(b, c, d) {}
    };

    function eA() {
        var a = fA;
        return function(b, c, d) {
            var e = d && d.event;
            b === "__html" && Q(83) || gA(c);
            var f = ub(b, "__cvt_") ? void 0 : 1,
                g = new Ka;
            ib(c, function(r, u) {
                var v = ed(u, void 0, f);
                v === void 0 && u !== void 0 && S(44);
                g.set(r, v)
            });
            a.j.j.C = Cf();
            var k = {
                Wj: Rf(b),
                eventId: e == null ? void 0 : e.id,
                priorityId: e !== void 0 ? e.priorityId : void 0,
                Ge: e !== void 0 ? function(r) {
                    e.qc.Ge(r)
                } : void 0,
                kb: function() {
                    return b
                },
                log: function() {},
                Ul: {
                    index: d == null ? void 0 : d.index,
                    type: d == null ? void 0 : d.type,
                    name: d == null ? void 0 : d.name
                },
                Zm: !!Iw(b, 3),
                originalEventData: e ==
                    null ? void 0 : e.originalEventData
            };
            e && e.cachedModelValues && (k.cachedModelValues = {
                gtm: e.cachedModelValues.gtm,
                ecommerce: e.cachedModelValues.ecommerce
            });
            if (cA()) {
                var m = dA(),
                    n, p;
                k.Xa = {
                    oi: [],
                    He: {},
                    Db: function(r, u, v) {
                        u === 1 && (n = r);
                        u === 7 && (p = v);
                        m(r, u, v)
                    },
                    ng: bh()
                };
                k.log = function(r) {
                    var u = xa.apply(1, arguments);
                    n && m(n, 4, {
                        level: r,
                        source: p,
                        message: u
                    })
                }
            }
            var q = Ce(a, k, [b, g]);
            a.j.j.C = void 0;
            q instanceof za && q.type === "return" && (q = q.data);
            return H(q, void 0, f)
        }
    }

    function gA(a) {
        var b = a.gtmOnSuccess,
            c = a.gtmOnFailure;
        ab(b) && (a.gtmOnSuccess = function() {
            G(b)
        });
        ab(c) && (a.gtmOnFailure = function() {
            G(c)
        })
    };

    function hA(a) {}
    hA.F = "internal.addAdsClickIds";

    function iA(a, b) {
        var c = this;
    }
    iA.R = "addConsentListener";
    var jA = !1;

    function kA(a) {
        for (var b = 0; b < a.length; ++b)
            if (jA) try {
                a[b]()
            } catch (c) {
                S(77)
            } else a[b]()
    }

    function lA(a, b, c) {
        var d = this,
            e;
        return e
    }
    lA.F = "internal.addDataLayerEventListener";

    function mA(a, b, c) {}
    mA.R = "addDocumentEventListener";

    function nA(a, b, c, d) {}
    nA.R = "addElementEventListener";

    function oA(a) {
        return a.D.j
    };

    function pA(a) {}
    pA.R = "addEventCallback";

    function FA(a) {}
    FA.F = "internal.addFormAbandonmentListener";

    function GA(a, b, c, d) {}
    GA.F = "internal.addFormData";
    var HA = {},
        IA = [],
        JA = {},
        KA = 0,
        LA = 0;

    function SA(a, b) {}
    SA.F = "internal.addFormInteractionListener";

    function ZA(a, b) {}
    ZA.F = "internal.addFormSubmitListener";

    function dB(a) {}
    dB.F = "internal.addGaSendListener";

    function eB(a) {
        if (!a) return {};
        var b = a.Ul;
        return gx(b.type, b.index, b.name)
    }

    function fB(a) {
        return a ? {
            originatingEntity: eB(a)
        } : {}
    };

    function nB(a) {
        var b = Gi.zones;
        return b ? b.getIsAllowedFn(dk(), a) : function() {
            return !0
        }
    }

    function oB() {
        Lw(kk(), function(a) {
            var b = a.originalEventData["gtm.uniqueEventId"],
                c = Gi.zones;
            return c ? c.isActive(dk(), b) : !0
        });
        Jw(kk(), function(a) {
            var b, c;
            b = a.entityId;
            c = a.securityGroups;
            return nB(Number(a.originalEventData["gtm.uniqueEventId"]))(b, c)
        })
    };
    var pB = function(a, b) {
        this.tagId = a;
        this.Je = b
    };

    function qB(a, b) {
        var c = this,
            d;
        return d
    }
    qB.F = "internal.loadGoogleTag";

    function rB(a) {
        return new Xc("", function(b) {
            var c = this.evaluate(b);
            if (c instanceof Xc) return new Xc("", function() {
                var d = xa.apply(0, arguments),
                    e = this,
                    f = Sc(oA(this), null);
                f.eventId = a.eventId;
                f.priorityId = a.priorityId;
                f.originalEventData = a.originalEventData;
                var g = d.map(function(m) {
                        return e.evaluate(m)
                    }),
                    k = Ga(this.D);
                k.j = f;
                return c.nb.apply(c, [k].concat(na(g)))
            })
        })
    };

    function sB(a, b, c) {
        var d = this;
    }
    sB.F = "internal.addGoogleTagRestriction";
    var tB = {},
        uB = [];

    function BB(a, b) {}
    BB.F = "internal.addHistoryChangeListener";

    function CB(a, b, c) {}
    CB.R = "addWindowEventListener";

    function DB(a, b) {
        return !0
    }
    DB.R = "aliasInWindow";

    function EB(a, b, c) {}
    EB.F = "internal.appendRemoteConfigParameter";

    function FB(a) {
        var b;
        return b
    }
    FB.R = "callInWindow";

    function GB(a) {}
    GB.R = "callLater";

    function HB(a) {}
    HB.F = "callOnDomReady";

    function IB(a) {}
    IB.F = "callOnWindowLoad";

    function JB(a, b) {
        var c;
        return c
    }
    JB.F = "internal.computeGtmParameter";

    function KB(a, b) {
        var c = this;
    }
    KB.F = "internal.consentScheduleFirstTry";

    function LB(a, b) {
        var c = this;
    }
    LB.F = "internal.consentScheduleRetry";

    function MB(a) {
        var b;
        return b
    }
    MB.F = "internal.copyFromCrossContainerData";

    function NB(a, b) {
        var c;
        var d = ed(c, this.D, ub(oA(this).kb(), "__cvt_") ? 2 : 1);
        d === void 0 && c !== void 0 && S(45);
        return d
    }
    NB.R = "copyFromDataLayer";

    function OB(a) {
        var b = void 0;
        return b
    }
    OB.F = "internal.copyFromDataLayerCache";

    function PB(a) {
        var b;
        return b
    }
    PB.R = "copyFromWindow";

    function QB(a) {
        var b = void 0;
        return ed(b, this.D, 1)
    }
    QB.F = "internal.copyKeyFromWindow";
    var RB = function(a, b, c) {
        this.eventName = b;
        this.m = c;
        this.j = {};
        this.isAborted = !1;
        this.target = a;
        this.metadata = Sc(c.eventMetadata || {}, {})
    };
    RB.prototype.copyToHitData = function(a, b, c) {
        var d = U(this.m, a);
        d === void 0 && (d = b);
        if (d !== void 0 && c !== void 0 && z(d) && Q(70)) try {
            d = c(d)
        } catch (e) {}
        d !== void 0 && (this.j[a] = d)
    };
    var Jt = function(a, b, c) {
        var d = Ls(a.target.destinationId);
        return d && d[b] !== void 0 ? d[b] : c
    };

    function SB(a, b) {
        var c;
        K(this.getName(), ["preHit:!PixieMap", "dustOptions:?PixieMap"], arguments);
        var d = H(b) || {},
            e = H(a, this.D, 1).Ub(),
            f = e.m;
        d.omitEventContext && (f = zm(new om(e.m.eventId, e.m.priorityId)));
        var g = new RB(e.target, e.eventName, f);
        d.omitHitData || Sc(e.j, g.j);
        d.omitMetadata ? g.metadata = {} : Sc(e.metadata, g.metadata);
        g.isAborted = e.isAborted;
        c = ed(Bs(g), this.D, 1);
        return c
    }
    SB.F = "internal.copyPreHit";

    function TB(a, b) {
        var c = null;
        return ed(c, this.D, 2)
    }
    TB.R = "createArgumentsQueue";

    function UB(a) {
        return ed(function(c) {
            var d = px();
            if (typeof c === "function") d(function() {
                c(function(f, g, k) {
                    var m = px(),
                        n = m && m.getByName &&
                        m.getByName(f);
                    return en(C.gaplugins.Linker, n).decorate(g, k)
                })
            });
            else if (Array.isArray(c)) {
                var e = String(c[0]).split(".");
                b[e.length === 1 ? e[0] : e[1]] && d.apply(null, c)
            } else if (c === "isLoaded") return !!d.loaded
        }, this.D, 1)
    }
    UB.F = "internal.createGaCommandQueue";

    function VB(a) {
        return ed(function() {
            if (!ab(e.push)) throw Error("Object at " + a + " in window is not an array.");
            e.push.apply(e, Array.prototype.slice.call(arguments, 0))
        }, this.D, ub(oA(this).kb(),
            "__cvt_") ? 2 : 1)
    }
    VB.R = "createQueue";

    function WB(a, b) {
        var c = null;
        K(this.getName(), ["pattern:!string", "flags:?string"], arguments);
        try {
            var d = (b || "").split("").filter(function(e) {
                return "ig".indexOf(e) >= 0
            }).join("");
            c = new bd(new RegExp(a, d))
        } catch (e) {}
        return c
    }
    WB.F = "internal.createRegex";

    function XB() {
        var a = {};
        return a
    };

    function YB(a) {}
    YB.F = "internal.declareConsentState";

    function ZB(a) {
        var b = "";
        return b
    }
    ZB.F = "internal.decodeUrlHtmlEntities";

    function $B(a, b, c) {
        var d;
        return d
    }
    $B.F = "internal.decorateUrlWithGaCookies";

    function aC() {}
    aC.F = "internal.deferCustomEvents";

    function bC(a) {
        var b;
        L(this, "detect_user_provided_data", "auto");
        var c = H(a) || {},
            d = kt({
                Hd: !!c.includeSelector,
                Id: !!c.includeVisibility,
                Me: c.excludeElementSelectors,
                Bb: c.fieldFilters,
                pg: !!c.selectMultipleElements
            });
        b = new Ka;
        var e = new Vc;
        b.set("elements", e);
        for (var f = d.elements, g = 0; g < f.length; g++) e.push(cC(f[g]));
        d.hi !== void 0 && b.set("preferredEmailElement", cC(d.hi));
        b.set("status", d.status);
        return b
    }
    var cC = function(a) {
        var b = new Ka;
        b.set("userData", a.Z);
        b.set("tagName", a.tagName);
        a.querySelector !== void 0 && b.set("querySelector", a.querySelector);
        a.isVisible !== void 0 && b.set("isVisible", a.isVisible);
        if (Q(28)) {} else switch (a.type) {
            case it.vc:
                b.set("type", "email")
        }
        return b
    };
    bC.F = "internal.detectUserProvidedData";

    function fC(a, b) {
        return b
    }
    fC.F = "internal.enableAutoEventOnClick";

    function nC(a, b) {
        return b
    }
    nC.F = "internal.enableAutoEventOnElementVisibility";

    function oC() {}
    oC.F = "internal.enableAutoEventOnError";
    var pC = {},
        qC = [],
        rC = {},
        sC = 0,
        tC = 0;

    function zC(a, b) {
        var c = this;
        return b
    }
    zC.F = "internal.enableAutoEventOnFormInteraction";

    function EC(a, b) {
        var c = this;
        return b
    }
    EC.F = "internal.enableAutoEventOnFormSubmit";

    function JC() {
        var a = this;
    }
    JC.F = "internal.enableAutoEventOnGaSend";
    var KC = {},
        LC = [];

    function SC(a, b) {
        var c = this;
        return b
    }
    SC.F = "internal.enableAutoEventOnHistoryChange";
    var TC = ["http://", "https://", "javascript:", "file://"];

    function XC(a, b) {
        var c = this;
        return b
    }
    XC.F = "internal.enableAutoEventOnLinkClick";
    var YC, ZC;

    function jD(a, b) {
        var c = this;
        return b
    }
    jD.F = "internal.enableAutoEventOnScroll";

    function kD(a) {
        return function() {
            if (a.limit && a.ai >= a.limit) a.lg && C.clearInterval(a.lg);
            else {
                a.ai++;
                var b = pb();
                ez({
                    event: a.eventName,
                    "gtm.timerId": a.lg,
                    "gtm.timerEventNumber": a.ai,
                    "gtm.timerInterval": a.interval,
                    "gtm.timerLimit": a.limit,
                    "gtm.timerStartTime": a.vk,
                    "gtm.timerCurrentTime": b,
                    "gtm.timerElapsedTime": b - a.vk,
                    "gtm.triggers": a.tn
                })
            }
        }
    }

    function lD(a, b) {
        return b
    }
    lD.F = "internal.enableAutoEventOnTimer";
    var Yb = ka(["data-gtm-yt-inspected-"]),
        nD = ["www.youtube.com", "www.youtube-nocookie.com"],
        oD, pD = !1;

    function zD(a, b) {
        var c = this;
        return b
    }
    zD.F = "internal.enableAutoEventOnYouTubeActivity";

    function AD(a, b) {
        K(this.getName(), ["booleanExpression:!string", "context:?PixieMap"], arguments);
        var c = b ? H(b) : {},
            d = a,
            e = !1;
        var f = JSON.parse(d);
        if (!f) throw Error("Invalid boolean expression string was given.");
        e = Rg(f, c);
        return e
    }
    AD.F = "internal.evaluateBooleanExpression";
    var BD;

    function CD(a) {
        var b = !1;
        return b
    }
    CD.F = "internal.evaluateMatchingRules";

    function jE() {
        return ro(7) && ro(9) && ro(10)
    };

    function eF(a, b, c, d) {}
    eF.F = "internal.executeEventProcessor";

    function fF(a) {
        var b;
        return ed(b, this.D, 1)
    }
    fF.F = "internal.executeJavascriptString";

    function gF(a) {
        var b;
        return b
    };

    function hF(a) {
        var b = {};
        return ed(b)
    }
    hF.F = "internal.getAdsCookieWritingOptions";

    function iF(a) {
        var b = !1;
        return b
    }
    iF.F = "internal.getAllowAdPersonalization";

    function jF(a, b) {
        b = b === void 0 ? !0 : b;
        var c;
        return c
    }
    jF.F = "internal.getAuid";
    var kF = null;

    function lF() {
        var a = new Ka;
        L(this, "read_container_data"), Q(43) && kF ? a = kF : (a.set("containerId", 'G-TR5E2D5Y8N'), a.set("version", '1'), a.set("environmentName", ''), a.set("debugMode", Sf), a.set("previewMode", Tf.yk), a.set("environmentMode", Tf.Ql), a.set("firstPartyServing", aj() || Oi), a.set("containerUrl", ic), a.Ga(), Q(43) && (kF = a));
        return a
    }
    lF.R = "getContainerVersion";

    function mF(a, b) {
        b = b === void 0 ? !0 : b;
        var c;
        return c
    }
    mF.R = "getCookieValues";

    function nF() {
        return kl()
    }
    nF.F = "internal.getCountryCode";

    function oF() {
        var a = [];
        a = gk();
        return ed(a)
    }
    oF.F = "internal.getDestinationIds";

    function pF(a) {
        var b = new Ka;
        return b
    }
    pF.F = "internal.getDeveloperIds";

    function qF(a, b) {
        var c = null;
        return c
    }
    qF.F = "internal.getElementAttribute";

    function rF(a) {
        var b = null;
        return b
    }
    rF.F = "internal.getElementById";

    function sF(a) {
        var b = "";
        return b
    }
    sF.F = "internal.getElementInnerText";

    function tF(a, b) {
        var c = null;
        return c
    }
    tF.F = "internal.getElementProperty";

    function uF(a) {
        var b;
        return b
    }
    uF.F = "internal.getElementValue";

    function vF(a) {
        var b = 0;
        return b
    }
    vF.F = "internal.getElementVisibilityRatio";

    function wF(a) {
        var b = null;
        return b
    }
    wF.F = "internal.getElementsByCssSelector";

    function xF(a) {
        var b;
        K(this.getName(), ["keyPath:!string"], arguments);
        L(this, "read_event_data", a);
        var c;
        a: {
            var d = a,
                e = oA(this).originalEventData;
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
        b = ed(c, this.D, 1);
        return b
    }
    xF.F = "internal.getEventData";
    var yF = {};
    yF.enableAWFledge = Q(29);
    yF.enableAdsConversionValidation = Q(15);
    yF.enableAutoPhoneAndAddressDetection = Q(27);
    yF.enableAutoPiiOnPhoneAndAddress = Q(28);
    yF.enableCachedEcommerceData = Q(35);
    yF.enableCloudRecommentationsErrorLogging = Q(36);
    yF.enableCloudRecommentationsSchemaIngestion = Q(37);
    yF.enableCloudRetailInjectPurchaseMetadata = Q(39);
    yF.enableCloudRetailLogging = Q(38);
    yF.enableCloudRetailPageCategories = Q(40);
    yF.enableConsentDisclosureActivity = Q(42);
    yF.enableDCFledge = Q(47);
    yF.enableDecodeUri = Q(70);
    yF.enableDeferAllEnhancedMeasurement = Q(48);
    yF.enableDmaBlockDisclosure = Q(50);
    yF.enableFormSkipValidation = Q(66);
    yF.enableGtmEcModeFix = Q(76);
    yF.enableMerchantRenameForBasketData = Q(87);
    yF.enableUrlDecodeEventUsage = Q(110);
    yF.enableZoneConfigInChildContainers = Q(113);
    yF.useEnableAutoEventOnFormApis = Q(124);
    yF.autoPiiEligible = pl();

    function zF() {
        return ed(yF)
    }
    zF.F = "internal.getFlags";

    function AF() {
        return new bd(Mz)
    }
    AF.F = "internal.getHtmlId";

    function BF(a) {
        var b;
        return b
    }
    BF.F = "internal.getIframingState";

    function CF(a, b) {
        var c = {};
        return ed(c)
    }
    CF.F = "internal.getLinkerValueFromLocation";

    function DF() {
        var a = new Ka;
        return a
    }
    DF.F = "internal.getPrivacyStrings";

    function EF(a, b) {
        var c;
        K(this.getName(), ["targetId:!string", "name:!string"], arguments);
        var d = Ls(a) || {};
        c = ed(d[b], this.D);
        return c
    }
    EF.F = "internal.getProductSettingsParameter";

    function FF(a, b) {
        var c;
        return c
    }
    FF.R = "getQueryParameters";

    function GF(a, b) {
        var c;
        return c
    }
    GF.R = "getReferrerQueryParameters";

    function HF(a) {
        var b = "";
        return b
    }
    HF.R = "getReferrerUrl";

    function IF() {
        return ll()
    }
    IF.F = "internal.getRegionCode";

    function JF(a, b) {
        var c;
        return c
    }
    JF.F = "internal.getRemoteConfigParameter";

    function KF() {
        var a = new Ka;
        a.set("width", 0);
        a.set("height", 0);
        return a
    }
    KF.F = "internal.getScreenDimensions";

    function LF() {
        var a = "";
        return a
    }
    LF.F = "internal.getTopSameDomainUrl";

    function MF() {
        var a = "";
        return a
    }
    MF.F = "internal.getTopWindowUrl";

    function NF(a) {
        var b = "";
        return b
    }
    NF.R = "getUrl";

    function OF() {
        L(this, "get_user_agent");
        return fc.userAgent
    }
    OF.F = "internal.getUserAgent";

    function PF() {
        var a;
        return ed(a)
    }
    PF.F = "internal.getUserAgentClientHints";
    var RF = function(a) {
            var b = a.eventName === O.g.ac && Zk() && Mt(a),
                c = a.metadata.is_sgtm_service_worker,
                d = a.metadata.batch_on_navigation,
                e = a.metadata.is_conversion,
                f = a.metadata.is_session_start,
                g = a.metadata.create_dc_join,
                k = a.metadata.create_google_join,
                m = a.metadata.euid_mode_enabled && !!Lt(a);
            return !(!Dc() && fc.sendBeacon === void 0 || e || m || f || g || k || b || c || !d && QF)
        },
        QF = !1;
    var SF = function(a) {
            var b = 0,
                c = 0;
            return {
                start: function() {
                    b = pb()
                },
                stop: function() {
                    c = this.get()
                },
                get: function() {
                    var d = 0;
                    a.Th() && (d = pb() - b);
                    return d + c
                }
            }
        },
        TF = function() {
            this.j = void 0;
            this.C = 0;
            this.isActive = this.isVisible = this.H = !1;
            this.P = this.K = void 0
        };
    h = TF.prototype;
    h.kl = function(a) {
        var b = this;
        if (!this.j) {
            this.H = E.hasFocus();
            this.isVisible = !E.hidden;
            this.isActive = !0;
            var c = function(d, e, f) {
                tc(d, e, function(g) {
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
                d.persisted && S(56);
                b.P && b.P()
            });
            c(C, "pagehide", function() {
                b.isActive = !1;
                b.K && b.K()
            });
            c(E, "visibilitychange", function() {
                b.isVisible = !E.hidden
            });
            Mt(a) && !kc("Firefox") && !kc("FxiOS") && c(C, "beforeunload", function() {
                QF = !0
            });
            this.mi();
            this.C = 0
        }
    };
    h.mi = function() {
        this.C += this.ig();
        this.j = SF(this);
        this.Th() && this.j.start()
    };
    h.sn = function(a) {
        var b = this.ig();
        b > 0 && (a.j[O.g.de] = b)
    };
    h.km = function(a) {
        a.j[O.g.de] = void 0;
        this.mi();
        this.C = 0
    };
    h.Th = function() {
        return this.H &&
            this.isVisible && this.isActive
    };
    h.am = function() {
        return this.C + this.ig()
    };
    h.ig = function() {
        return this.j && this.j.get() || 0
    };
    h.Xm = function(a) {
        this.K = a
    };
    h.qk = function(a) {
        this.P = a
    };
    var VF = function(a) {
            var b = a.metadata.event_usage;
            if (Array.isArray(b))
                for (var c = 0; c < b.length; c++) UF(b[c]);
            var d = Va("GA4_EVENT");
            d && (a.j._eu = d)
        },
        WF = function() {
            delete Ta.GA4_EVENT
        },
        UF = function(a) {
            Ua("GA4_EVENT", a)
        };

    function XF() {
        return C.gaGlobal = C.gaGlobal || {}
    }

    function YF() {
        var a = XF();
        a.hid = a.hid || eb();
        return a.hid
    }

    function ZF(a, b) {
        var c = XF();
        if (c.vid === void 0 || b && !c.from_cookie) c.vid = a, c.from_cookie = b
    };
    var $F = function(a, b, c) {
            var d = a.metadata.client_id_source;
            if (d === void 0 || c <= d) a.j[O.g.tb] = b, a.metadata.client_id_source = c
        },
        bG = function(a, b) {
            var c = a.j[O.g.tb];
            if (U(a.m, O.g.Ob) && U(a.m, O.g.jc) || b && c === b) return c;
            if (c) {
                c = "" + c;
                if (!aG(c, a)) return S(31), a.isAborted = !0, "";
                ZF(c, V(O.g.U));
                return c
            }
            S(32);
            a.isAborted = !0;
            return ""
        },
        cG = ["GA1"],
        dG = function(a) {
            var b = a.metadata.cookie_options,
                c = b.prefix + "_ga",
                d = fp(c, b.domain, b.path, cG, O.g.U);
            if (!d) {
                var e = String(U(a.m, O.g.Ac, ""));
                e && e !== c && (d = fp(e, b.domain, b.path, cG,
                    O.g.U))
            }
            return d
        },
        aG = function(a, b) {
            var c;
            var d = b.metadata.cookie_options,
                e = d.prefix + "_ga",
                f = hp(d, void 0, void 0, O.g.U);
            if (U(b.m, O.g.hc) === !1 && dG(b) === a) c = !0;
            else {
                var g = gp(a, cG[0], d.domain, d.path);
                c = Yo(e, g, f) !== 1
            }
            return c
        };
    var gG = function(a, b, c) {
            if (!b) return a;
            if (!a) return b;
            var d = eG(a);
            if (!d) return b;
            var e, f = kb((e = U(c.m, O.g.sd)) != null ? e : 30);
            if (!(Math.floor(c.metadata.event_start_timestamp_ms / 1E3) > d.cf + f * 60)) return a;
            var g = eG(b);
            if (!g) return a;
            g.Qc = d.Qc + 1;
            var k;
            return (k = fG(g.sessionId, g.Qc, g.Nd, g.cf, g.Xh, g.Mc, g.Dd)) != null ? k : b
        },
        jG = function(a, b) {
            var c = b.metadata.cookie_options,
                d = hG(b, c),
                e = gp(a, iG[0], c.domain, c.path),
                f = {
                    Hb: O.g.U,
                    domain: c.domain,
                    path: c.path,
                    expires: c.Fb ? new Date(pb() + Number(c.Fb) * 1E3) : void 0,
                    flags: c.flags
                };
            Yo(d, void 0, f);
            return Yo(d, e, f) !== 1
        },
        kG = function(a) {
            var b = a.metadata.cookie_options,
                c = hG(a, b),
                d = fp(c, b.domain, b.path, iG, O.g.U);
            if (!d) return d;
            var e = No(c, void 0, void 0, O.g.U);
            if (d && e.length > 1) {
                S(114);
                for (var f = void 0, g = void 0, k = 0; k < e.length; k++) {
                    var m = e[k].split(".");
                    if (!(m.length < 7)) {
                        var n = Number(m[5]);
                        n && (!g || n > g) && (g = n, f = e[k])
                    }
                }
                f && !vb(f, d) && (S(115), d = f.split(".").slice(2).join("."))
            }
            return d
        },
        lG = function(a) {
            return fG(a.j[O.g.zb], a.j[O.g.te], a.j[O.g.se], Math.floor(a.metadata.event_start_timestamp_ms /
                1E3), a.metadata.join_timer_sec || 0, !!a.metadata[O.g.Hf], a.j[O.g.ee])
        },
        fG = function(a, b, c, d, e, f, g) {
            if (a && b) {
                var k = [a, b, kb(c), d, e];
                k.push(f ? "1" : "0");
                k.push(g || "0");
                return k.join(".")
            }
        },
        hG = function(a, b) {
            return b.prefix + "_ga_" + a.target.ids[Vl[0]]
        },
        iG = ["GS1"],
        eG = function(a) {
            if (a) {
                var b = a.split(".");
                if (!(b.length < 5 || b.length > 7)) {
                    b.length < 7 && S(67);
                    var c = Number(b[1]),
                        d = Number(b[3]),
                        e = Number(b[4] || 0);
                    c || S(118);
                    d || S(119);
                    isNaN(e) && S(120);
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
    var mG = function(a) {
            var b = U(a.m, O.g.sa),
                c = a.m.C[O.g.sa];
            if (c === b) return c;
            var d = Sc(b, null);
            c && c[O.g.X] && (d[O.g.X] = (d[O.g.X] || []).concat(c[O.g.X]));
            return d
        },
        nG = function(a, b) {
            var c = Ap(!0);
            return c._up !== "1" ? {} : {
                clientId: c[a],
                Wa: c[b]
            }
        },
        oG = function(a, b, c) {
            var d = Ap(!0),
                e = d[b];
            e && ($F(a, e, 2), aG(e, a));
            var f = d[c];
            f && jG(f, a);
            return {
                clientId: e,
                Wa: f
            }
        },
        pG = function() {
            var a = vj(C.location, "host"),
                b = vj(zj(E.referrer), "host");
            return a && b ? a === b || a.indexOf("." + b) >= 0 || b.indexOf("." + a) >= 0 ? !0 : !1 : !1
        },
        qG = function(a) {
            if (!U(a.m,
                    O.g.cb)) return {};
            var b = a.metadata.cookie_options,
                c = b.prefix + "_ga",
                d = hG(a, b);
            Ip(function() {
                var e;
                if (V("analytics_storage")) e = {};
                else {
                    var f = {};
                    e = (f._up = "1", f[c] = a.j[O.g.tb], f[d] = lG(a), f)
                }
                return e
            }, 1);
            return !V("analytics_storage") && pG() ? nG(c, d) : {}
        },
        sG = function(a) {
            var b = mG(a) || {},
                c = a.metadata.cookie_options,
                d = c.prefix + "_ga",
                e = hG(a, c),
                f = {};
            Kp(b[O.g.Hc], !!b[O.g.X]) && (f = oG(a, d, e), f.clientId && f.Wa && (rG = !0));
            b[O.g.X] && Hp(function() {
                var g = {},
                    k = dG(a);
                k && (g[d] = k);
                var m = kG(a);
                m && (g[e] = m);
                var n = No("FPLC", void 0,
                    void 0, O.g.U);
                n.length && (g._fplc = n[0]);
                return g
            }, b[O.g.X], b[O.g.Pb], !!b[O.g.yb]);
            return f
        },
        rG = !1;
    var tG = function(a) {
        if (!a.metadata.is_merchant_center && Gj(a.m)) {
            var b = mG(a) || {},
                c = (Kp(b[O.g.Hc], !!b[O.g.X]) ? Ap(!0)._fplc : void 0) || (No("FPLC", void 0, void 0, O.g.U).length > 0 ? void 0 : "0");
            a.j._fplc = c
        }
    };

    function uG(a) {
        if (Mt(a) || aj()) a.j[O.g.rj] = ll() || kl();
        !Mt(a) && aj() && (a.j[O.g.Aj] = "::")
    }

    function vG(a) {
        if (Q(67) && aj()) {
            is(a);
            js(a, "cpf", U(a.m, O.g.Ma));
            var b = U(a.m, O.g.hc);
            js(a, "cu", b === !0 ? 1 : b === !1 ? 0 : void 0);
            js(a, "cf", U(a.m, O.g.ab));
            js(a, "cd", cp(U(a.m, O.g.Ra), U(a.m, O.g.vb)))
        }
    };
    var xG = function(a, b) {
            var c = Gi.grl;
            c || (c = wG(), Gi.grl = c);
            c(b) || (S(35), a.isAborted = !0)
        },
        wG = function() {
            var a = pb(),
                b = a + 864E5,
                c = 20,
                d = 5E3;
            return function(e) {
                var f = pb();
                f >= b && (b = f + 864E5, d = 5E3);
                c = Math.min(c + (f - a) / 1E3 * 5, 20);
                a = f;
                var g = !1;
                d < 1 || c < 1 || (g = !0, d--, c--);
                e && (e.Nl = d, e.Fl = c);
                return g
            }
        };
    var yG = function(a) {
        if (U(a.m, O.g.ld) !== void 0) a.copyToHitData(O.g.ld);
        else {
            var b = U(a.m, O.g.Nf),
                c, d;
            a: {
                if (rG) {
                    var e = mG(a) || {};
                    if (e && e[O.g.X])
                        for (var f = tj(zj(a.j[O.g.Ea]), "host", !0), g = e[O.g.X], k = 0; k < g.length; k++)
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
                    for (var n = b.include_conditions || [], p = tj(zj(a.j[O.g.Ea]), "host", !0), q = 0; q < n.length; q++)
                        if (n[q].test(p)) {
                            m = !0;
                            break a
                        } m = !1
                }
                c = m
            }
            c && (a.j[O.g.ld] = "1", UF(4))
        }
    };
    var zG = function(a, b) {
            xo() && (a.gcs = yo(), b.metadata.is_consent_update && (a.gcu = "1"));
            a.gcd = Co(b.m);
            wo(b.m) ? a.npa = "0" : a.npa = "1";
            Ho() && (a._ng = "1")
        },
        CG = function(a) {
            if (a.metadata.is_merchant_center) return {
                url: Hj("https://www.merchant-center-analytics.goog") + "/mc/collect",
                endpoint: 20
            };
            var b = Dj(Gj(a.m), "/g/collect");
            if (b) return {
                url: b,
                endpoint: 16
            };
            if (aj()) return {
                url: "" + $i() + "/g/collect",
                endpoint: 16
            };
            var c = Nt(a),
                d = U(a.m, O.g.sb);
            return c && !ml() && d !== !1 && jE() && V(O.g.O) && V(O.g.U) ? {
                url: AG(),
                endpoint: 17
            } : {
                url: BG(),
                endpoint: 16
            }
        },
        AG = function() {
            var a;
            DG && ol() !== "" && (a = ol());
            return "https://" + (a ? a + "." : "") + "analytics.google.com/g/collect"
        },
        BG = function() {
            var a = "www";
            DG && ol() && (a = ol());
            return "https://" + a + ".google-analytics.com/g/collect"
        },
        DG = !1;
    DG = !0;
    var EG = {};
    EG[O.g.tb] = "cid";
    EG[O.g.Cg] = "gcut";
    EG[O.g.fc] = "are";
    EG[O.g.Df] = "pscdl";
    EG[O.g.If] = "_fid";
    EG[O.g.Ug] = "_geo";
    EG[O.g.hb] = "gdid";
    EG[O.g.Fc] =
        "_ng";
    EG[O.g.Nb] = "frm";
    EG[O.g.ld] = "ir";
    EG[O.g.Ta] = "ul";
    EG[O.g.hh] = "pae";
    EG[O.g.qe] = "_rdi";
    EG[O.g.Rb] = "sr";
    EG[O.g.pj] = "tid";
    EG[O.g.Sf] = "tt";
    EG[O.g.vd] = "ec_mode";
    EG[O.g.Bj] = "gtm_up";
    EG[O.g.Tf] = "uaa";
    EG[O.g.Uf] = "uab";
    EG[O.g.Vf] = "uafvl";
    EG[O.g.Wf] = "uamb";
    EG[O.g.Xf] = "uam";
    EG[O.g.Yf] = "uap";
    EG[O.g.Zf] = "uapv";
    EG[O.g.cg] = "uaw";
    EG[O.g.rj] = "ur";
    EG[O.g.Aj] = "_uip";
    EG[O.g.md] = "lps";
    EG[O.g.wf] = "gclgs", EG[O.g.yf] = "gclst", EG[O.g.xf] = "gcllp";
    var FG = {};
    FG[O.g.Vc] = "cc";
    FG[O.g.Wc] = "ci";
    FG[O.g.Xc] = "cm";
    FG[O.g.Yc] = "cn";
    FG[O.g.bd] = "cs";
    FG[O.g.dd] = "ck";
    FG[O.g.Aa] = "cu";
    FG[O.g.wa] = "dl";
    FG[O.g.Ea] = "dr";
    FG[O.g.ib] = "dt";
    FG[O.g.se] = "seg";
    FG[O.g.zb] = "sid";
    FG[O.g.te] = "sct";
    FG[O.g.Ca] = "uid";
    Q(115) &&
        (FG[O.g.od] = "dp");
    var GG = {};
    GG[O.g.de] = "_et";
    GG[O.g.fb] = "edid";
    var HG = {};
    HG[O.g.Vc] = "cc";
    HG[O.g.Wc] = "ci";
    HG[O.g.Xc] = "cm";
    HG[O.g.Yc] = "cn";
    HG[O.g.bd] = "cs";
    HG[O.g.dd] = "ck";
    var IG = {},
        JG = (IG[O.g.Fa] = 1, IG),
        KG = function(a,
            b, c) {
            var d = {},
                e = {},
                f = {};
            d.v = "2";
            d.tid = a.target.destinationId;
            d.gtm = Ko({
                ya: a.metadata.source_canonical_id
            });
            d._p = Q(126) ? Ti : YF();
            if (c && (c.Ld > 0 || c.jg) && (Q(94) || (d.em = c.Gb), c.xa)) {
                var g = c.xa.Cd;
                g && !Q(12) && (g = g.replace(/./g, "*"));
                g && (d.eme = g);
                d._es = c.xa.status;
                c.xa.time !== void 0 && (d._est = c.xa.time)
            }
            a.metadata.create_google_join && (d._gaz = 1);
            zG(d, a);
            Fo() && (d.dma_cps = Do());
            d.dma = Eo();
            Tn(jo()) && (d.tcfd = Go());
            Zi.j && (d.tag_exp = Zi.j);
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
                var m = a.j[O.g.da] || U(a.m, O.g.da);
                if (Array.isArray(m))
                    for (var n = 0; n < m.length && n < 200; n++) e["pr" + (n + 1)] = Yf(m[n])
            }
            var p = a.j[O.g.fb];
            p && (e.edid = p);
            var q = function(v, t) {
                if (typeof t !== "object" || !JG[v]) {
                    var w = "ep." + v,
                        x = "epn." + v;
                    v = bb(t) ? x : w;
                    var y = bb(t) ? w : x;
                    e.hasOwnProperty(y) && delete e[y];
                    e[v] = String(t)
                }
            };
            ib(a.j, function(v, t) {
                if (t !== void 0 && !lh.hasOwnProperty(v)) {
                    t === null && (t = "");
                    var w;
                    var x = t;
                    v !== O.g.ee ? w = !1 : a.metadata.euid_mode_enabled || Mt(a) ? (d.ecid = x, w = !0) : w = void 0;
                    if (!w && v !== O.g.Hf) {
                        var y = t;
                        t === !0 && (y = "1");
                        t === !1 && (y = "0");
                        y = String(y);
                        var A;
                        if (EG[v]) A = EG[v], d[A] = y;
                        else if (FG[v]) A = FG[v], f[A] = y;
                        else if (GG[v]) A = GG[v], e[A] = y;
                        else if (v.charAt(0) === "_") d[v] = y;
                        else {
                            var B;
                            HG[v] ? B = !0 : v !== O.g.Zc ? B = !1 : (typeof t !== "object" && q(v, t), B = !0);
                            B ||
                                q(v, t)
                        }
                    }
                }
            });
            (function(v) {
                Mt(a) && typeof v === "object" && ib(v || {}, function(t, w) {
                    typeof w !== "object" && (d["sst." + t] = String(w))
                })
            })(a.j[O.g.De]);
            Pl(d, a.j[O.g.xd]);
            var r = a.j[O.g.jb] || {};
            Q(80) && U(a.m, O.g.sb, void 0, 4) === !1 && (d.ngs = "1");
            ib(r, function(v, t) {
                t !== void 0 && ((t === null && (t = ""), v !== O.g.Ca || f.uid) ? b[v] !== t && (e[(bb(t) ? "upn." : "up.") + String(v)] = String(t), b[v] = t) : f.uid = String(t))
            });
            var u = CG(a);
            fg.call(this, {
                ja: d,
                Rc: f,
                Jh: e
            }, u.url, u.endpoint, Mt(a), void 0)
        };
    wa(KG, fg);
    var LG = function(a) {
            this.H = a;
            this.j = ""
        },
        MG = function(a, b) {
            a.C = b;
            return a
        },
        NG = function(a, b) {
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
                    } catch (F) {}
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
                            for (var v = Rc(q) ? q : {}, t = l(u), w = t.next(); !w.done; w = t.next()) r(w.value,
                                v)
                    }
                    var x = n.create_iframe,
                        y = n.options,
                        A = m.C;
                    if (x && A) {
                        var B = x || [];
                        if (Array.isArray(B))
                            for (var D = Rc(y) ? y : {}, I = l(B), J = I.next(); !J.done; J = I.next()) A(J.value, D)
                    }
                }
                b = b.substring(c + 2);
                c = b.indexOf("\n\n")
            }
            a.j = b
        };

    function OG(a) {
        var b = a.search;
        return a.protocol + "//" + a.hostname + a.pathname + (b ? b + "&richsstsse" : "?richsstsse")
    };
    var PG = function(a, b) {
            return a.replace(/\$\{([^\}]+)\}/g, function(c, d) {
                return b[d] || c
            })
        },
        QG = function(a) {
            var b = {},
                c = "",
                d = a.pathname.indexOf("/g/collect");
            d >= 0 && (c = a.pathname.substring(0, d));
            b.transport_url = a.protocol + "//" + a.hostname + c;
            return b
        },
        RG = function(a, b, c) {
            var d = 0,
                e = new C.XMLHttpRequest;
            e.withCredentials = !0;
            e.onprogress = function(f) {
                if (e.status === 200) {
                    var g = e.responseText.substring(d);
                    d = f.loaded;
                    NG(c, g)
                }
            };
            e.open(b ? "POST" : "GET", a);
            e.setAttributionReporting && e.setAttributionReporting({
                eventSourceEligible: !1,
                triggerEligible: !0
            });
            e.send(b)
        },
        TG = function(a, b, c) {
            var d = Object.assign({}, SG);
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
                                NG(c, q);
                                p ? k() : m()
                            }).catch(function() {
                                k()
                            })
                        }
                        m()
                    })
                }
            }).catch(function() {
                Q(99) && (a += "&_z=retryFetch", b ? Ac(a, b) : zc(a))
            })
        },
        UG = function(a, b) {
            return MG(new LG(function(c, d) {
                var e = PG(c, a);
                b && (e = e.replace("_is_sw=0",
                    b));
                var f = {};
                d.attribution_reporting && (f.attributionsrc = "");
                rc(e, void 0, void 0, f)
            }), function(c, d) {
                var e = PG(c, a),
                    f = d.dedupe_key;
                f && Au(e, f)
            })
        },
        VG = function(a, b, c, d) {
            var e = UG(c, d);
            Q(98) && Dc() ? TG(a, b, e) : RG(a, b, e)
        },
        WG = function(a, b) {
            var c = zj(a),
                d = QG(c),
                e = OG(c);
            Q(103) ? iu(e, b, d, function(f) {
                VG(e, b, d, f)
            }) : VG(e, b, d)
        },
        SG = Object.freeze({
            cache: "no-store",
            credentials: "include",
            method: "GET",
            keepalive: !0,
            redirect: "follow"
        });
    var XG = function(a, b) {
            return a ? [a, b].join("&") : b
        },
        YG = function(a, b, c) {
            var d = a + "?" + b;
            c ? Ac(d, c) : zc(d)
        },
        $G = function(a, b, c, d) {
            var e = b,
                f = Fc();
            f !== void 0 && (e += "&tfd=" + Math.round(f));
            b = e;
            var g = a + "?" + b;
            ZG && (d = !ub(g, BG()) && !ub(g, AG()));
            if (d && !QF) WG(g, c);
            else {
                var k = b;
                Dc() ? Cc(a + "?" + k, c, {
                    noFallback: !0
                }) || YG(a, XG(k, "_z=failedfetch"), c) : YG(a, XG(k, "_z=nofetch"), c)
            }
        },
        aH = function(a, b) {
            function c(v) {
                n.push(v + "=" + encodeURIComponent("" + a.ja[v]))
            }
            var d = b.jn,
                e = b.kn,
                f = b.dm,
                g = b.ym,
                k = b.xm,
                m = b.Wm;
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
                d && (Zi.j && n.push("tag_exp=" + Zi.j), YG("https://stats.g.doubleclick.net/g/collect", "v=2&" + n.join("&")), n.join("&"));
                if (e) {
                    var q = function() {
                        var v = Cu() + "/td/ga/rul?";
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
                        Zi.j && n.push("tag_exp=" + Zi.j);
                        n.push("z=" + eb());
                        var t = v + n.join("&");
                        Au(t, a.ja.tid)
                    };
                    Zi.j && n.push("tag_exp=" + Zi.j);
                    n.push("z=" + eb());
                    if (!g) {
                        var r = f && ub(f, "google.") && f !== "google.com" ? "https://www.%/ads/ga-audiences?v=1&t=sr&slf_rd=1&_r=4&".replace("%", f) : void 0;
                        if (r) {
                            var u = r + n.join("&");
                            rc(u)
                        }
                    }
                    Q(80) && m && !QF && q()
                }
            }
        },
        ZG = !1;
    var bH = function() {
        this.K = 1;
        this.P = {};
        this.H = -1;
        this.C = new Zf
    };
    bH.prototype.j = function(a, b) {
        var c = this,
            d = new KG(a, this.P, b),
            e = RF(a);
        e && this.C.P(d) || this.flush();
        if (e && this.C.add(d)) {
            if (this.H < 0) {
                var f = C.setTimeout,
                    g;
                Mt(a) ? cH ? (cH = !1, g = dH) : g = eH : g = 5E3;
                this.H = f.call(C, function() {
                    c.flush()
                }, g)
            }
        } else {
            var k = bg(d, this.K++);
            $G(d.baseUrl, k.params, k.body, d.H);
            var m = a.metadata.create_dc_join,
                n = a.metadata.create_google_join,
                p = U(a.m, O.g.Da) !== !1,
                q = wo(a.m),
                r = {
                    eventId: a.m.eventId,
                    priorityId: a.m.priorityId
                },
                u = a.j[O.g.hh],
                v = {
                    jn: m,
                    kn: n,
                    dm: ql(),
                    Sn: p,
                    Rn: q,
                    ym: ml(),
                    xm: a.metadata.euid_mode_enabled,
                    Wn: r,
                    Wm: u,
                    m: a.m
                };
            aH(d, v)
        }
        iw(a.m.eventId, a.eventName)
    };
    bH.prototype.add = function(a) {
        !a.metadata.euid_mode_enabled || QF || Q(94) ? this.j(a) : this.aa(a)
    };
    bH.prototype.flush = function() {
        if (this.C.events.length) {
            var a = dg(this.C, this.K++);
            $G(this.C.baseUrl, a.params, a.body, this.C.C);
            this.C = new Zf;
            this.H >= 0 && (C.clearTimeout(this.H), this.H = -1)
        }
    };
    bH.prototype.aa = function(a) {
        var b = this,
            c = Lt(a);
        if (Q(97))
            if (xi(c)) {
                var d = ki(c, Q(71));
                d ? d.then(function(k) {
                    b.j(a,
                        k)
                }, function() {
                    b.j(a)
                }) : this.j(a)
            } else {
                var e = wi(c);
                if (Q(71)) {
                    var f = ii(e);
                    f ? f.then(function(k) {
                        b.j(a, k)
                    }, function() {
                        b.j(a, e)
                    }) : this.j(a, e)
                } else this.j(a, e)
            }
        else {
            var g = Q(72) && !(c != null && Object.keys(c).length > 0);
            !c || g ? this.j(a) : ji(c, function(k) {
                b.j(a, k)
            })
        }
    };
    var dH = Wh('', 500),
        eH = Wh('', 5E3),
        cH = !0;
    var fH = function(a, b, c) {
            c === void 0 && (c = {});
            if (b == null) return c;
            if (typeof b === "object")
                for (var d = l(Object.keys(b)), e = d.next(); !e.done; e = d.next()) {
                    var f = e.value;
                    fH(a + "." + f, b[f], c)
                } else c[a] = b;
            return c
        },
        gH = function(a) {
            for (var b = {}, c = l(a), d = c.next(); !d.done; d = c.next()) {
                var e = d.value;
                b[e] = !!V(e)
            }
            return b
        },
        iH = function(a, b) {
            var c = hH.filter(function(e) {
                return !V(e)
            });
            if (c.length) {
                var d = gH(c);
                zl(c, function() {
                    for (var e = gH(c), f = [], g = l(c), k = g.next(); !k.done; k = g.next()) {
                        var m = k.value;
                        !d[m] && e[m] && f.push(m);
                        e[m] &&
                            (d[m] = !0)
                    }
                    if (f.length) {
                        b.metadata.is_consent_update = !0;
                        var n = f.map(function(p) {
                            return vh[p]
                        }).join(".");
                        n && It(b, "gcut", n);
                        a(b)
                    }
                })
            }
        },
        jH = function(a) {
            if (Q(120) && Mt(a)) {
                var b = U(a.m, O.g.Qb),
                    c;
                b === !0 && (c = "1");
                b === !1 && (c = "0");
                c && It(a, "rdp", c)
            }
        },
        kH = function(a) {
            Q(118) && Mt(a) && U(a.m, O.g.Ud, !0) === !1 && (a.j[O.g.Ud] = 0)
        },
        lH = function(a, b) {
            if (Mt(b)) {
                var c = b.metadata.is_conversion;
                (b.eventName === "page_view" || c) && iH(a, b)
            }
        },
        mH = function(a) {
            if (Mt(a) && a.eventName === O.g.Uc && a.metadata.is_consent_update) {
                var b = a.j[O.g.Cg];
                b && (It(a, "gcut", b), It(a, "syn", 1))
            }
        },
        nH = function(a) {
            Q(119) && Mt(a) && U(a.m, O.g.Da) !== !1 && yu("join-ad-interest-group") && ab(fc.joinAdInterestGroup) && It(a, "flg", 1)
        },
        oH = function(a) {
            Mt(a) && (a.metadata.speculative = !1)
        },
        pH = function(a) {
            Mt(a) && (a.metadata.speculative && It(a, "sp", 1), a.metadata.is_syn && It(a, "syn", 1), a.metadata.em_event && (It(a, "em_event", 1), It(a, "sp", 1)))
        },
        qH = function(a) {
            if (Mt(a)) {
                var b = Ti;
                b && It(a, "tft", Number(b))
            }
        },
        rH = function(a) {
            function b(e) {
                var f = fH(O.g.Fa, e);
                ib(f, function(g, k) {
                    a.j[g] = k
                })
            }
            if (Mt(a)) {
                var c =
                    Jt(a, "ccd_add_1p_data", !1) ? 1 : 0;
                It(a, "ude", c);
                var d = U(a.m, O.g.Fa);
                d !== void 0 ? (b(d), a.j[O.g.vd] = "c") : b(a.metadata.user_data);
                a.metadata.user_data = void 0
            }
        },
        sH = function(a) {
            if (Mt(a)) {
                var b = Vr();
                b && It(a, "us_privacy", b);
                var c = qo();
                c && It(a, "gdpr", c);
                var d = po();
                d && It(a, "gdpr_consent", d)
            }
        },
        tH = function(a) {
            Mt(a) && Zk() && U(a.m, O.g.ia) && It(a, "adr", 1)
        },
        uH = function(a) {
            if (Mt(a)) {
                var b = DG ? ol() : "";
                b && It(a, "gcsub", b)
            }
        },
        vH = function(a) {
            if (Mt(a)) {
                U(a.m, O.g.sb, void 0, 4) === !1 && It(a, "ngs", 1);
                ml() && It(a, "ga_rd", 1);
                jE() || It(a,
                    "ngst", 1);
                var b = ql();
                b && It(a, "etld", b)
            }
        },
        wH = function(a) {},
        xH = function(a) {
            Mt(a) && Zk() && It(a, "rnd", Br())
        },
        hH = [O.g.O, O.g.N];
    var yH = function(a, b) {
            var c;
            a: {
                var d = lG(a);
                if (d) {
                    if (jG(d, a)) {
                        c = d;
                        break a
                    }
                    S(25);
                    a.isAborted = !0
                }
                c = void 0
            }
            var e = c;
            return {
                clientId: bG(a, b),
                Wa: e
            }
        },
        zH = function(a, b, c, d, e) {
            var f = U(a.m, O.g.tb);
            if (U(a.m, O.g.Ob) && U(a.m, O.g.jc)) f ? $F(a, f, 1) : (S(127), a.isAborted = !0);
            else {
                var g = f ? 1 : 8;
                a.metadata.is_new_to_site = !1;
                f || (f = dG(a), g = 3);
                f || (f = b, g = 5);
                if (!f) {
                    var k = V(O.g.U),
                        m = XF();
                    f = !m.from_cookie || k ? m.vid : void 0;
                    g = 6
                }
                f ? f = "" + f : (f = ep(), g = 7, a.metadata.is_first_visit = a.metadata.is_new_to_site = !0);
                $F(a, f, g)
            }
            var n = Math.floor(a.metadata.event_start_timestamp_ms /
                    1E3),
                p = void 0;
            a.metadata.is_new_to_site || (p = kG(a) || c);
            var q = kb(U(a.m, O.g.sd, 30));
            q = Math.min(475, q);
            q = Math.max(5, q);
            var r = kb(U(a.m, O.g.Pf, 1E4)),
                u = eG(p);
            a.metadata.is_first_visit = !1;
            a.metadata.is_session_start = !1;
            a.metadata.join_timer_sec = 0;
            u && u.Xh && (a.metadata.join_timer_sec = Math.max(0, u.Xh - Math.max(0, n - u.cf)));
            var v = !1;
            u || (v = a.metadata.is_first_visit = !0, u = {
                sessionId: String(n),
                Qc: 1,
                Nd: !1,
                cf: n,
                Mc: !1,
                Dd: void 0
            });
            n > u.cf + q * 60 && (v = !0, u.sessionId = String(n), u.Qc++, u.Nd = !1, u.Dd = void 0);
            if (v) a.metadata.is_session_start = !0, d.km(a);
            else if (d.am() > r || a.eventName === O.g.ac) u.Nd = !0;
            a.metadata.euid_mode_enabled ? U(a.m, O.g.Ca) ? u.Mc = !0 : (u.Mc && !Q(13) && (u.Dd = void 0), u.Mc = !1) : u.Mc = !1;
            var t = u.Dd;
            if (a.metadata.euid_mode_enabled || Mt(a)) {
                var w = U(a.m, O.g.ee),
                    x = w ? 1 : 8;
                w || (w = t, x = 4);
                w || (w = dp(), x = 7);
                var y = w.toString(),
                    A = x,
                    B = a.metadata.enhanced_client_id_source;
                if (B === void 0 || A <= B) a.j[O.g.ee] = y, a.metadata.enhanced_client_id_source = A
            }
            e ? (a.copyToHitData(O.g.zb, u.sessionId), a.copyToHitData(O.g.te, u.Qc), a.copyToHitData(O.g.se, u.Nd ? 1 : 0)) : (a.j[O.g.zb] =
                u.sessionId, a.j[O.g.te] = u.Qc, a.j[O.g.se] = u.Nd ? 1 : 0);
            a.metadata[O.g.Hf] = u.Mc ? 1 : 0
        };
    var AH = window,
        BH = document,
        CH = function(a) {
            var b = AH._gaUserPrefs;
            if (b && b.ioo && b.ioo() || BH.documentElement.hasAttribute("data-google-analytics-opt-out") || a && AH["ga-disable-" + a] === !0) return !0;
            try {
                var c = AH.external;
                if (c && c._gaUserPrefs && c._gaUserPrefs == "oo") return !0
            } catch (p) {}
            for (var d = [], e = String(BH.cookie).split(";"), f = 0; f < e.length; f++) {
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
            return BH.getElementById("__gaOptOutExtension") ? !0 : !1
        };
    var EH = function(a) {
            return !a || DH.test(a) || nh.hasOwnProperty(a)
        },
        FH = function(a) {
            var b = O.g.Rb,
                c;
            c || (c = function() {});
            a.j[b] !== void 0 && (a.j[b] = c(a.j[b]))
        },
        GH = function(a) {
            var b = a.indexOf("?"),
                c = b === -1 ? a : a.substring(0, b);
            try {
                c = decodeURIComponent(c)
            } catch (d) {}
            return b === -1 ? c : "" + c + a.substring(b)
        },
        HH = function(a) {
            U(a.m, O.g.cb) && (V(O.g.U) || U(a.m, O.g.tb) || (a.j[O.g.Bj] = !0));
            var b;
            var c;
            c = c === void 0 ? 3 : c;
            var d = C.location.href;
            if (d) {
                var e = zj(d).search.replace("?", ""),
                    f = sj(e, "_gl", !1, !0) || "";
                b = f ? Bp(f, c) !== void 0 : !1
            } else b = !1;
            b && Mt(a) && It(a, "glv", 1);
            if (a.eventName !== O.g.ba) return {};
            U(a.m, O.g.cb) && dr(["aw", "dc"]);
            fr(["aw", "dc"]);
            var g = sG(a),
                k = qG(a);
            return Object.keys(g).length ? g : k
        },
        IH = function(a) {
            var b = zb(mm(a.m, O.g.fa, 1), ".");
            b && (a.j[O.g.hb] = b);
            var c = zb(mm(a.m, O.g.fa, 2), ".");
            c && (a.j[O.g.fb] = c)
        },
        uu = {
            Sl: "",
            un: Number("")
        },
        JH = {},
        KH = (JH[O.g.Vc] = 1, JH[O.g.Wc] = 1, JH[O.g.Xc] = 1, JH[O.g.Yc] = 1, JH[O.g.bd] = 1, JH[O.g.dd] = 1, JH),
        DH = /^(_|ga_|google_|gtag\.|firebase_).*$/,
        LH = [Zr,
            IH, Ds
        ],
        MH = function(a) {
            this.H = a;
            this.j = this.Wa = this.clientId = void 0;
            this.Ua = this.P = !1;
            this.Ic = 0;
            this.K = !1;
            this.aa = new bH;
            this.C = new TF
        };
    h = MH.prototype;
    h.Um = function(a, b, c) {
        var d = this,
            e = Sl(this.H);
        if (e)
            if (c.eventMetadata.is_external_event && a.charAt(0) === "_") c.onFailure();
            else {
                a !== O.g.ba && a !== O.g.Ya && EH(a) && S(58);
                NH(c.j);
                var f = new RB(e, a, c);
                f.metadata.event_start_timestamp_ms = b;
                var g = [O.g.U];
                if (Jt(f, O.g.Gc, U(f.m, O.g.Gc)) || Mt(f)) g.push(O.g.O), g.push(O.g.N);
                vu(function() {
                    Bl(function() {
                        d.Vm(f)
                    }, g)
                });
                this.Sm(a,
                    c, f)
            }
        else c.onFailure()
    };
    h.Sm = function(a, b, c) {
        var d = Sl(this.H);
        if (Q(68) && a === O.g.ba && Jt(c, "ga4_ads_linked", !1)) {
            var e = function() {
                    for (var k = l(LH), m = k.next(); !m.done; m = k.next()) {
                        var n = m.value;
                        n(f);
                        if (f.isAborted) break
                    }
                    f.metadata.speculative || f.isAborted || wv(f)
                },
                f = new RB(d, a, b);
            f.metadata.hit_type = "page_view";
            f.metadata.speculative = !0;
            f.metadata.is_server_side_destination = Mt(c);
            var g = [O.g.O, O.g.N];
            Bl(function() {
                e();
                V(g) || Al(function(k) {
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
    h.Vm = function(a) {
        var b = this;
        this.j = a;
        try {
            OH(a);
            PH(a);
            QH(a);
            RH(a);
            Q(108) && (a.isAborted = !0);
            es(a);
            var c = {};
            xG(a, c);
            if (a.isAborted) {
                a.m.onFailure();
                WF();
                return
            }
            var d = c.Fl;
            c.Nl === 0 && UF(25);
            d === 0 && UF(26);
            SH(a);
            TH(a);
            this.ml(a);
            this.C.sn(a);
            UH(a);
            VH(a);
            WH(a);
            this.pk(HH(a));
            var e = a.eventName === O.g.ba;
            e && (this.K = !0);
            XH(a);
            e && !a.isAborted && this.Ic++ > 0 && UF(17);
            YH(a);
            zH(a, this.clientId, this.Wa, this.C, !this.Ua);
            ZH(a);
            $H(a);
            aI(a);
            bI(a);
            cI(a);
            dI(a);
            eI(a);
            tG(a);
            yG(a);
            xH(a);
            wH(a);
            vH(a);
            uH(a);
            tH(a);
            sH(a);
            qH(a);
            pH(a);
            nH(a);
            mH(a);
            kH(a);
            jH(a);
            uG(a);
            vG(a);
            fI(a);
            gI(a);
            hI(a);
            gs(a);
            fs(a);
            iI(a);
            jI(a);
            Ds(a);
            kI(a);
            rH(a);
            oH(a);
            lI(a);
            !this.K && a.metadata.em_event && UF(18);
            VF(a);
            if (a.metadata.speculative || a.isAborted) {
                a.m.onFailure();
                WF();
                return
            }
            this.pk(yH(a, this.clientId));
            this.Ua = !0;
            this.on(a);
            mI(a);
            lH(function(f) {
                b.Uj(f)
            }, a);
            this.C.mi();
            nI(a);
            if (a.isAborted) {
                a.m.onFailure();
                WF();
                return
            }
            this.Uj(a);
            a.m.onSuccess()
        } catch (f) {
            a.m.onFailure()
        }
        WF()
    };
    h.Uj = function(a) {
        this.aa.add(a)
    };
    h.pk = function(a) {
        var b = a.clientId,
            c = a.Wa;
        b && c && (this.clientId = b, this.Wa = c)
    };
    h.flush = function() {
        this.aa.flush()
    };
    h.on = function(a) {
        var b = this;
        if (!this.P) {
            var c = V(O.g.N),
                d = V(O.g.U);
            zl([O.g.N, O.g.U], function() {
                var e = V(O.g.N),
                    f = V(O.g.U),
                    g = !1,
                    k = {},
                    m = {};
                if (d !== f && b.j && b.Wa && b.clientId) {
                    var n = b.clientId,
                        p;
                    var q = eG(b.Wa);
                    p = q ? q.Dd : void 0;
                    if (f) {
                        var r = dG(b.j);
                        if (r) {
                            b.clientId = r;
                            var u = kG(b.j);
                            u && (b.Wa = gG(u, b.Wa, b.j))
                        } else aG(b.clientId, b.j), ZF(b.clientId, !0);
                        jG(b.Wa, b.j);
                        g = !0;
                        k[O.g.Tg] = n;
                        Q(62) && p && (k[O.g.Yk] = p)
                    } else b.Wa = void 0, b.clientId = void 0, C.gaGlobal = {}
                }
                e && !c && (g = !0, m.is_consent_update = !0, k[O.g.Cg] = vh[O.g.N]);
                if (g) {
                    var v = ky(b.H, O.g.Uc, k);
                    my(v, a.m.eventId, {
                        eventMetadata: m
                    })
                }
                d = f;
                c = e
            });
            this.P = !0
        }
    };
    h.ml = function(a) {
        a.eventName !== O.g.Ya && this.C.kl(a)
    };
    var QH = function(a) {
            var b = E.location.protocol;
            b !== "http:" && b !== "https:" && (S(29), a.isAborted = !0)
        },
        RH = function(a) {
            fc && fc.loadPurpose === "preview" && (S(30), a.isAborted = !0)
        },
        SH = function(a) {
            var b = {
                prefix: String(U(a.m, O.g.Ma, "")),
                path: String(U(a.m, O.g.vb, "/")),
                flags: String(U(a.m, O.g.ab, "")),
                domain: String(U(a.m, O.g.Ra, "auto")),
                Fb: Number(U(a.m, O.g.Sa, 63072E3))
            };
            a.metadata.cookie_options = b
        },
        UH = function(a) {
            if (a.metadata.is_merchant_center) a.metadata.euid_mode_enabled = !1;
            else if (Jt(a, "ccd_add_1p_data", !1) || Jt(a, "ccd_add_ec_stitching", !1)) a.metadata.euid_mode_enabled = !0
        },
        VH = function(a) {
            if (a.metadata.euid_mode_enabled && Jt(a, "ccd_add_1p_data", !1)) {
                var b = a.m.C[O.g.ue];
                if (pj(b)) {
                    var c = U(a.m, O.g.Fa);
                    c === null ? a.metadata.user_data_from_code =
                        null : (b.enable_code && Rc(c) && (a.metadata.user_data_from_code = c), Rc(b.selectors) && !a.metadata.user_data_from_manual && (a.metadata.user_data_from_manual = nj(b.selectors)))
                }
            }
        },
        WH = function(a) {
            if (Q(69) && !Q(68) && Jt(a, "ga4_ads_linked", !1) && a.eventName === O.g.ba) {
                var b = U(a.m, O.g.ra) !== !1;
                if (b) {
                    var c = Wr(a);
                    c.Fb && (c.Fb = Math.min(c.Fb, 7776E3));
                    Xr({
                        Bd: b,
                        Kd: U(a.m, O.g.sa) || {},
                        Pd: U(a.m, O.g.cb),
                        rc: c
                    })
                }
            }
        },
        fI = function(a) {
            if (!ru(C)) S(87);
            else if (wu !== void 0) {
                S(85);
                var b = pu();
                b ? U(a.m, O.g.qe) && !Mt(a) || tu(b, a) : S(86)
            }
        },
        XH = function(a) {
            a.eventName ===
                O.g.ba && (U(a.m, O.g.Na, !0) ? (a.m.j[O.g.fa] && (a.m.H[O.g.fa] = a.m.j[O.g.fa], a.m.j[O.g.fa] = void 0, a.j[O.g.fa] = void 0), a.eventName = O.g.ac) : a.isAborted = !0)
        },
        TH = function(a) {
            function b(c, d) {
                lh[c] || d === void 0 || (a.j[c] = d)
            }
            ib(a.m.H, b);
            ib(a.m.j, b)
        },
        ZH = function(a) {
            var b = nm(a.m),
                c = function(d, e) {
                    KH[d] && (a.j[d] = e)
                };
            Rc(b[O.g.Zc]) ? ib(b[O.g.Zc], function(d, e) {
                c((O.g.Zc + "_" + d).toLowerCase(), e)
            }) : ib(b, c)
        },
        YH = IH,
        mI = function(a) {
            if (Q(103) && V(O.g.U)) {
                Mt(a) && (a.metadata.is_sgtm_service_worker = !0, Mt(a) && It(a, "sw_exp", 1));
                a: {}
            }
        },
        iI = function(a) {
            if (a.eventName === O.g.Ya) {
                var b = U(a.m, O.g.xb);
                U(a.m, O.g.Mb)(a.j[b] || U(a.m, b));
                a.isAborted = !0
            }
        },
        $H = function(a) {
            if (!U(a.m, O.g.jc) || !U(a.m, O.g.Ob)) {
                var b = a.copyToHitData,
                    c = O.g.wa,
                    d = "",
                    e = E.location;
                if (e) {
                    var f = e.pathname || "";
                    f.charAt(0) !== "/" && (f = "/" + f);
                    var g = e.search || "";
                    if (g && g[0] ===
                        "?")
                        for (var k = g.substring(1).split("&"), m = 0; m < k.length; ++m) {
                            var n = k[m].split("=");
                            n && n.length === 2 && n[0] === "wbraid" && (g = g.replace(/([?&])wbraid=[^&]+/, "$1wbraid=" + Bb(n[1])))
                        }
                    d = e.protocol + "//" + e.hostname + f + g
                }
                b.call(a, c, d, GH);
                var p = a.copyToHitData,
                    q = O.g.Ea,
                    r;
                a: {
                    var u = No("_opt_expid", void 0, void 0, O.g.U)[0];
                    if (u) {
                        var v = decodeURIComponent(u).split("$");
                        if (v.length === 3) {
                            r = v[2];
                            break a
                        }
                    }
                    if (Gi.ga4_referrer_override !== void 0) r = Gi.ga4_referrer_override;
                    else {
                        var t = gj("gtm.gtagReferrer." + a.target.destinationId),
                            w = E.referrer;
                        r = t ? "" + t : w
                    }
                }
                p.call(a, q, r || void 0, GH);
                a.copyToHitData(O.g.ib, E.title);
                a.copyToHitData(O.g.Ta, (fc.language || "").toLowerCase());
                var x = Ms();
                a.copyToHitData(O.g.Rb, x.width + "x" + x.height);
                Q(115) && a.copyToHitData(O.g.od, void 0, GH);
                Q(75) && Er() && a.copyToHitData(O.g.md, "1")
            }
        },
        bI = function(a) {
            a.metadata.create_dc_join = !1;
            a.metadata.create_google_join = !1;
            if (!(aj() || Q(6) && Mt(a) || a.metadata.is_merchant_center || U(a.m, O.g.sb) === !1) && jE() && V(O.g.O)) {
                var b = Nt(a);
                (a.metadata.is_session_start || U(a.m, O.g.Tg)) &&
                (a.metadata.create_dc_join = !!b);
                var c = a.metadata.join_timer_sec;
                b && (c || 0) === 0 && (a.metadata.join_timer_sec = 60, a.metadata.create_google_join = !0)
            }
        },
        eI = function(a) {
            a.copyToHitData(O.g.Sf);
            for (var b = U(a.m, O.g.Jf) || [], c = 0; c < b.length; c++) {
                var d = b[c];
                if (d.rule_result) {
                    a.copyToHitData(O.g.Sf, d.traffic_type);
                    UF(3);
                    break
                }
            }
        },
        nI = function(a) {
            a.copyToHitData(O.g.Ug);
            U(a.m, O.g.qe) && (a.j[O.g.qe] = !0, Mt(a) || FH(a))
        },
        jI = function(a) {
            a.copyToHitData(O.g.Ca);
            a.copyToHitData(O.g.jb)
        },
        aI = function(a) {
            Jt(a, "google_ng") && !ml() ?
                a.copyToHitData(O.g.Fc, 1) : hs(a)
        },
        hI = function(a) {
            if (U(a.m, O.g.Da) !== !1 && wo(a.m)) {
                var b = Nt(a),
                    c = U(a.m, O.g.sb);
                b && c !== !1 && jE() && V(O.g.O) && Vk(O.g.N) && Xk(["ads"]).ads && zu() && (a.j[O.g.hh] = !0)
            }
        },
        lI = function(a) {
            var b = U(a.m, O.g.Ob);
            b && UF(12);
            a.metadata.em_event && UF(14);
            var c = mk(nk());
            (b || yk(c) || c && c.parent && c.context && c.context.source === 5) && UF(19)
        },
        OH = function(a) {
            if (CH(a.target.destinationId)) S(28), a.isAborted = !0;
            else if (Q(114)) {
                var b = lk();
                if (b && Array.isArray(b.destinations))
                    for (var c = 0; c < b.destinations.length; c++)
                        if (CH(b.destinations[c])) {
                            S(125);
                            a.isAborted = !0;
                            break
                        }
            }
        },
        gI = function(a) {
            yu("attribution-reporting") && (a.j[O.g.fc] = "1")
        },
        PH = function(a) {
            if (uu.Sl.replace(/\s+/g, "").split(",").indexOf(a.eventName) >= 0) a.isAborted = !0;
            else {
                var b = Kt(a);
                b && b.blacklisted && (a.isAborted = !0)
            }
        },
        cI = function(a) {
            var b = function(c) {
                return !!c && c.conversion
            };
            a.metadata.is_conversion = b(Kt(a));
            a.metadata.is_first_visit && (a.metadata.is_first_visit_conversion = b(Kt(a, "first_visit")));
            a.metadata.is_session_start && (a.metadata.is_session_start_conversion = b(Kt(a, "session_start")))
        },
        dI = function(a) {
            ph.hasOwnProperty(a.eventName) && (a.metadata.is_ecommerce = !0, a.copyToHitData(O.g.da), a.copyToHitData(O.g.Aa))
        },
        kI = function(a) {
            if (Q(74) && a.metadata.is_conversion && V(O.g.O) && Jt(a, "ga4_ads_linked", !1)) {
                var b = Wr(a),
                    c = Bq(b.prefix),
                    d = Or(c);
                a.j[O.g.wf] = d.Mh;
                a.j[O.g.yf] = d.Oh;
                a.j[O.g.xf] = d.Nh
            }
        };

    function NH(a) {
        ib(a, function(c) {
            c.charAt(0) === "_" && delete a[c]
        });
        var b = a[O.g.jb] || {};
        ib(b, function(c) {
            c.charAt(0) === "_" && delete b[c]
        })
    }
    var pI = function(a) {
            if (!oI(a)) {
                var b = !1,
                    c = function() {
                        !b && oI(a) && (b = !0, uc(E, "visibilitychange", c), Q(4) && uc(E, "prerenderingchange", c), S(55))
                    };
                tc(E, "visibilitychange", c);
                Q(4) && tc(E, "prerenderingchange", c);
                S(54)
            }
        },
        oI = function(a) {
            if (Q(4) && "prerendering" in E ? E.prerendering : E.visibilityState === "prerender") return !1;
            a();
            return !0
        };

    function qI(a, b) {
        pI(function() {
            var c = Sl(a);
            if (c) {
                var d = rI(c, b);
                Tm(a, d)
            }
        });
    }

    function rI(a, b) {
        var c = function() {};
        var d = new MH(a.id),
            e = a.prefix === "MC";
        c = function(f, g, k, m) {
            e && (m.eventMetadata.is_merchant_center = !0);
            d.Um(g, k, m)
        };
        ck || sI(a, d, b);
        return c
    }

    function sI(a, b, c) {
        var d = b.C,
            e = {},
            f = {
                eventId: c,
                eventMetadata: (e.batch_on_navigation = !0, e)
            };
        Q(48) && (f.deferrable = !0);
        d.Xm(function() {
            QF = !0;
            Um.flush();
            d.ig() >= 1E3 && fc.sendBeacon !== void 0 && Vm(O.g.Uc, {}, a.id, f);
            b.flush();
            d.qk(function() {
                QF = !1;
                d.qk()
            })
        });
    };
    var tI = rI;

    function vI(a, b, c) {
        var d = this;
    }
    vI.F = "internal.gtagConfig";

    function wI() {
        var a = {};
        return a
    };

    function yI(a, b) {}
    yI.R = "gtagSet";

    function zI() {
        var a = {};
        return a
    };

    function AI(a, b) {}
    AI.R = "injectHiddenIframe";
    var BI = $z();

    function CI(a, b, c, d, e) {
        var f = this;
    }
    CI.F = "internal.injectHtml";
    var GI = {};

    function II(a, b, c, d) {}
    var JI = {
            dl: 1,
            id: 1
        },
        KI = {};

    function LI(a, b, c, d) {}
    II.R = "injectScript";
    LI.F = "internal.injectScript";

    function MI(a) {
        var b = !0;
        return b
    }
    MI.R = "isConsentGranted";

    function NI(a) {
        var b = !1;
        return b
    }
    NI.F = "internal.isDebugMode";

    function OI() {
        return nl()
    }
    OI.F = "internal.isDmaRegion";

    function PI(a) {
        var b = !1;
        return b
    }
    PI.F = "internal.isEntityInfrastructure";

    function QI() {
        var a = Xg(function(b) {
            oA(this).log("error", b)
        });
        a.R = "JSON";
        return a
    };

    function RI(a) {
        var b = void 0;
        return ed(b)
    }
    RI.F = "internal.legacyParseUrl";

    function SI() {
        return !1
    }
    var TI = {
        getItem: function(a) {
            var b = null;
            return b
        },
        setItem: function(a, b) {
            return !1
        },
        removeItem: function(a) {}
    };

    function UI() {}
    UI.R = "logToConsole";

    function VI(a, b) {}
    VI.F = "internal.mergeRemoteConfig";

    function WI(a, b, c) {
        c = c === void 0 ? !0 : c;
        var d = [];
        return ed(d)
    }
    WI.F = "internal.parseCookieValuesFromString";

    function XI(a) {
        var b = void 0;
        if (typeof a !== "string") return;
        a && ub(a, "//") && (a = E.location.protocol + a);
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
                c = ed({
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
            n = zj(a)
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
        b = ed(n);
        return b
    }
    XI.R = "parseUrl";

    function YI(a) {}
    YI.F = "internal.processAsNewEvent";

    function ZI(a, b, c) {
        var d;
        return d
    }
    ZI.F = "internal.pushToDataLayer";

    function $I(a) {
        var b = !1;
        K(this.getName(), ["permission:!string"], [a]);
        for (var c = Array.prototype.slice.call(arguments, 0), d = 0; d < c.length; ++d) c[d] = H(c[d], this.D, 1);
        c.unshift(this);
        try {
            L.apply(null, c), b = !0
        } catch (e) {
            return !1
        }
        return b
    }
    $I.R = "queryPermission";

    function aJ() {
        var a = "";
        return a
    }
    aJ.R = "readCharacterSet";

    function bJ() {
        return Fi.ob
    }
    bJ.F = "internal.readDataLayerName";

    function cJ() {
        var a = "";
        return a
    }
    cJ.R = "readTitle";

    function dJ(a, b) {
        var c = this;
        K(this.getName(), ["destinationId:!string", "callback:!Fn"], arguments), Es(a, function(d) {
            b.invoke(c.D, ed(d, c.D, 1))
        });
    }
    dJ.F = "internal.registerCcdCallback";

    function eJ(a) {
        return !0
    }
    eJ.F = "internal.registerDestination";
    var fJ = ["config", "event", "get", "set"];

    function gJ(a, b, c) {}
    gJ.F = "internal.registerGtagCommandListener";

    function hJ(a, b) {
        var c = !1;
        return c
    }
    hJ.F = "internal.removeDataLayerEventListener";

    function iJ(a, b) {}
    iJ.F = "internal.removeFormData";

    function jJ() {}
    jJ.R = "resetDataLayer";

    function kJ(a, b, c) {
        var d = void 0;
        return d
    }
    kJ.F = "internal.scrubUrlParams";

    function lJ(a) {}
    lJ.F = "internal.sendAdsHit";

    function mJ(a, b, c, d) {}
    mJ.F = "internal.sendGtagEvent";

    function nJ(a, b, c) {}
    nJ.R = "sendPixel";

    function oJ(a, b) {}
    oJ.F = "internal.setAnchorHref";

    function pJ(a) {}
    pJ.F = "internal.setContainerConsentDefaults";

    function qJ(a, b, c, d) {
        var e = this;
        d = d === void 0 ? !0 : d;
        var f = !1;
        return f
    }
    qJ.R = "setCookie";

    function rJ(a) {}
    rJ.F = "internal.setCorePlatformServices";

    function sJ(a, b) {}
    sJ.F = "internal.setDataLayerValue";

    function tJ(a) {}
    tJ.R = "setDefaultConsentState";

    function uJ(a, b) {}
    uJ.F = "internal.setDelegatedConsentType";

    function vJ(a, b) {}
    vJ.F = "internal.setFormAction";

    function wJ(a, b, c) {}
    wJ.F = "internal.setInCrossContainerData";

    function xJ(a, b, c) {
        return !1
    }
    xJ.R = "setInWindow";

    function yJ(a, b, c) {}
    yJ.F = "internal.setProductSettingsParameter";

    function zJ(a, b, c) {
        K(this.getName(), ["targetId:!string", "name:!string", "value:!*"], arguments);
        for (var d = b.split("."), e = Xm(a), f = 0; f < d.length - 1; f++) {
            if (e[d[f]] === void 0) e[d[f]] = {};
            else if (!Rc(e[d[f]])) throw Error("setRemoteConfigParameter failed, path contains a non-object type: " + d[f]);
            e = e[d[f]]
        }
        e[d[f]] = H(c, this.D, 1);
    }
    zJ.F = "internal.setRemoteConfigParameter";

    function AJ(a, b, c, d) {
        var e = this;
    }
    AJ.R = "sha256";

    function BJ(a, b, c) {}
    BJ.F = "internal.sortRemoteConfigParameters";

    function CJ(a, b) {
        var c = void 0;
        return c
    }
    CJ.F = "internal.subscribeToCrossContainerData";
    var DJ = {},
        EJ = {};
    DJ.getItem = function(a) {
        var b = null;
        return b
    };
    DJ.setItem = function(a, b) {};
    DJ.removeItem = function(a) {};
    DJ.clear = function() {};
    DJ.R = "templateStorage";

    function FJ(a, b) {
        var c = !1;
        return c
    }
    FJ.F = "internal.testRegex";

    function GJ(a) {
        var b;
        return b
    };

    function HJ(a) {
        var b;
        return b
    }
    HJ.F = "internal.unsiloId";

    function IJ(a, b) {
        var c;
        return c
    }
    IJ.F = "internal.unsubscribeFromCrossContainerData";

    function JJ(a) {}
    JJ.R = "updateConsentState";
    var KJ;

    function LJ(a, b, c) {
        KJ = KJ || new hh;
        KJ.add(a, b, c)
    }

    function MJ(a, b) {
        var c = KJ = KJ || new hh;
        if (c.j.hasOwnProperty(a)) throw Error("Attempting to add a private function which already exists: " + a + ".");
        if (c.contains(a)) throw Error("Attempting to add a private function with an existing API name: " + a + ".");
        c.j[a] = ab(b) ? Eg(a, b) : Fg(a, b)
    }

    function NJ() {
        return function(a) {
            var b;
            var c = KJ;
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

    function OJ() {
        var a = function(c) {
                return void MJ(c.F, c)
            },
            b = function(c) {
                return void LJ(c.R, c)
            };
        b(iA);
        b(pA);
        b(DB);
        b(FB);
        b(GB);
        b(NB);
        b(PB);
        b(TB);
        b(QI());
        b(VB);
        b(lF);
        b(mF);
        b(FF);
        b(GF);
        b(HF);
        b(NF);
        b(yI);
        b(AI);
        b(II);
        b(MI);
        b(UI);
        b(XI);
        b($I);
        b(aJ);
        b(cJ);
        b(nJ);
        b(qJ);
        b(tJ);
        b(xJ);
        b(AJ);
        b(DJ);
        b(JJ);
        LJ("Math", Jg());
        LJ("Object", fh);
        LJ("TestHelper", jh());
        LJ("assertApi", Gg);
        LJ("assertThat", Hg);
        LJ("decodeUri", Lg);
        LJ("decodeUriComponent", Mg);
        LJ("encodeUri", Ng);
        LJ("encodeUriComponent", Og);
        LJ("fail", Tg);
        LJ("generateRandom",
            Ug);
        LJ("getTimestamp", Vg);
        LJ("getTimestampMillis", Vg);
        LJ("getType", Wg);
        LJ("makeInteger", Yg);
        LJ("makeNumber", Zg);
        LJ("makeString", $g);
        LJ("makeTableMap", ah);
        LJ("mock", dh);
        LJ("fromBase64", gF, !("atob" in C));
        LJ("localStorage", TI, !SI());
        LJ("toBase64", GJ, !("btoa" in C));
        a(hA);
        a(lA);
        a(GA);
        a(SA);
        a(ZA);
        a(dB);
        a(sB);
        a(BB);
        a(EB);
        a(HB);
        a(IB);
        a(JB);
        a(KB);
        a(LB);
        a(MB);
        a(OB);
        a(QB);
        a(SB);
        a(UB);
        a(WB);
        a(YB);
        a(ZB);
        a($B);
        a(aC);
        a(bC);
        a(fC);
        a(nC);
        a(oC);
        a(zC);
        a(EC);
        a(JC);
        a(SC);
        a(XC);
        a(jD);
        a(lD);
        a(zD);
        a(AD);
        a(CD);
        a(eF);
        a(fF);
        a(hF);
        a(iF);
        a(jF);
        a(nF);
        a(oF);
        a(pF);
        a(qF);
        a(rF);
        a(sF);
        a(tF);
        a(uF);
        a(vF);
        a(wF);
        a(xF);
        a(zF);
        a(AF);
        a(BF);
        a(CF);
        a(DF);
        a(EF);
        a(IF);
        a(JF);
        a(KF);
        a(LF);
        a(MF);
        a(PF);
        a(vI);
        a(CI);
        a(LI);
        a(NI);
        a(OI);
        a(PI);
        a(RI);
        a(qB);
        a(VI);
        a(WI);
        a(YI);
        a(ZI);
        a(bJ);
        a(dJ);
        a(eJ);
        a(gJ);
        a(hJ);
        a(iJ);
        a(kJ);
        a(lJ);
        a(mJ);
        a(oJ);
        a(pJ);
        a(rJ);
        a(sJ);
        a(uJ);
        a(vJ);
        a(wJ);
        a(yJ);
        a(zJ);
        a(BJ);
        a(CJ);
        a(FJ);
        a(HJ);
        a(IJ);
        MJ("internal.CrossContainerSchema", XB());
        MJ("internal.GtagSchema", wI());
        MJ("internal.IframingStateSchema", zI());
        LJ("mockObject", eh);
        return NJ()
    };
    var fA;

    function PJ() {
        fA.j.j.H = function(a, b, c) {
            Gi.SANDBOXED_JS_SEMAPHORE = Gi.SANDBOXED_JS_SEMAPHORE || 0;
            Gi.SANDBOXED_JS_SEMAPHORE++;
            try {
                return a.apply(b, c)
            } finally {
                Gi.SANDBOXED_JS_SEMAPHORE--
            }
        }
    }

    function QJ(a) {
        a && ib(a, function(b, c) {
            for (var d = 0; d < c.length; d++) {
                var e = c[d].replace(/^_*/, "");
                Wi[e] = Wi[e] || [];
                Wi[e].push(b)
            }
        })
    };
    var RJ = Array.isArray;

    function SJ(a, b) {
        return Sc(a, b || null)
    }

    function X(a) {
        return window.encodeURIComponent(a)
    }

    function TJ(a, b, c) {
        rc(a, b, c)
    }

    function UJ(a, b) {
        if (!a) return !1;
        var c = tj(zj(a), "host");
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

    function VJ(a, b, c) {
        for (var d = {}, e = !1, f = 0; a && f < a.length; f++) a[f] && a[f].hasOwnProperty(b) && a[f].hasOwnProperty(c) && (d[a[f][b]] = a[f][c], e = !0);
        return e ? d : null
    }
    var dK = C.clearTimeout,
        eK = C.setTimeout;

    function fK(a, b, c) {
        if (Io()) {
            b && G(b)
        } else return oc(a, b, c)
    }

    function gK() {
        return C.location.href
    }

    function hK(a, b) {
        return gj(a, b || 2)
    }

    function iK(a, b) {
        C[a] = b
    }

    function jK(a, b, c) {
        b && (C[a] === void 0 || c && !C[a]) && (C[a] = b);
        return C[a]
    }

    function kK(a, b) {
        if (Io()) {
            b && G(b)
        } else qc(a, b)
    }
    var lK = {};
    var Y = {
        securityGroups: {}
    };

    Y.securityGroups.v = ["google"], Y.__v = function(a) {
        var b = a.vtp_name;
        if (!b || !b.replace) return !1;
        var c = hK(b.replace(/\\\./g, "."), a.vtp_dataLayerVersion || 1);
        return c !== void 0 ? c : a.vtp_defaultValue
    }, Y.__v.o = "v", Y.__v.isVendorTemplate = !0, Y.__v.priorityOverride = 0, Y.__v.isInfrastructure = !0, Y.__v.runInSiloedMode = !1;

    Y.securityGroups.read_event_data = ["google"],
        function() {
            function a(b, c) {
                return {
                    key: c
                }
            }(function(b) {
                Y.__read_event_data = b;
                Y.__read_event_data.o = "read_event_data";
                Y.__read_event_data.isVendorTemplate = !0;
                Y.__read_event_data.priorityOverride = 0;
                Y.__read_event_data.isInfrastructure = !1;
                Y.__read_event_data.runInSiloedMode = !1
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
                                if (c === "specific" && g != null && ig(g, d)) return
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




    Y.securityGroups.read_container_data = ["google"], Y.__read_container_data = function() {
        return {
            assert: function() {},
            M: function() {
                return {}
            }
        }
    }, Y.__read_container_data.o = "read_container_data", Y.__read_container_data.isVendorTemplate = !0, Y.__read_container_data.priorityOverride = 0, Y.__read_container_data.isInfrastructure = !1, Y.__read_container_data.runInSiloedMode = !1;

    Y.securityGroups.detect_user_provided_data = ["google"],
        function() {
            function a(b, c) {
                return {
                    dataSource: c
                }
            }(function(b) {
                Y.__detect_user_provided_data = b;
                Y.__detect_user_provided_data.o = "detect_user_provided_data";
                Y.__detect_user_provided_data.isVendorTemplate = !0;
                Y.__detect_user_provided_data.priorityOverride = 0;
                Y.__detect_user_provided_data.isInfrastructure = !1;
                Y.__detect_user_provided_data.runInSiloedMode = !1
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




    Y.securityGroups.gct = ["google"],
        function() {
            function a(b) {
                for (var c = [], d = 0; d < b.length; d++) try {
                    c.push(new RegExp(b[d]))
                } catch (e) {}
                return c
            }(function(b) {
                Y.__gct = b;
                Y.__gct.o = "gct";
                Y.__gct.isVendorTemplate = !0;
                Y.__gct.priorityOverride = 0;
                Y.__gct.isInfrastructure = !1;
                Y.__gct.runInSiloedMode = !0
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
                var m = ok(b.vtp_trackingId);
                Zm(m, c);
                qI(m, b.vtp_gtmEventId);
                G(b.vtp_gtmOnSuccess)
            })
        }();



    Y.securityGroups.get = ["google"], Y.__get = function(a) {
        var b = a.vtp_settings,
            c = b.eventParameters || {},
            d = String(a.vtp_eventName),
            e = {};
        e.eventId = a.vtp_gtmEventId;
        e.priorityId = a.vtp_gtmPriorityId;
        a.vtp_deferrable && (e.deferrable = !0);
        var f = ky(String(b.streamId), d, c);
        my(f, e.eventId, e);
        a.vtp_gtmOnSuccess()
    }, Y.__get.o = "get", Y.__get.isVendorTemplate = !0, Y.__get.priorityOverride = 0, Y.__get.isInfrastructure = !1, Y.__get.runInSiloedMode = !1;




    var mK = {
        dataLayer: hj,
        callback: function(a) {
            Vi.hasOwnProperty(a) && ab(Vi[a]) && Vi[a]();
            delete Vi[a]
        },
        bootstrap: 0,
        _spx: !1
    };

    function nK() {
        Gi[ik()] = Gi[ik()] || mK;
        sk();
        wk() || ib(xk(), function(d, e) {
            Zw(d, e.transportUrl, e.context);
            S(92)
        });
        sb(Wi, Y.securityGroups);
        var a = mk(nk()),
            b, c = a == null ? void 0 : (b = a.context) == null ? void 0 : b.source;
        c !== 2 && c !== 4 && c !== 3 || S(142);
        qf = Hf
    }
    var oK = !1;
    (function(a) {
        function b() {
            n = E.documentElement.getAttribute("data-tag-assistant-present");
            oz(n) && (m = k.vj)
        }

        function c() {
            m && ic ? g(m) : a()
        }
        if (!C["__TAGGY_INSTALLED"]) {
            var d = !1;
            if (E.referrer) {
                var e = zj(E.referrer);
                d = vj(e, "host") === "cct.google"
            }
            if (!d) {
                var f = No("googTaggyReferrer");
                d = !(!f.length || !f[0].length)
            }
            d && (C["__TAGGY_INSTALLED"] = !0, oc("https://cct.google/taggy/agent.js"))
        }
        var g = function(v) {
                var t = "GTM",
                    w = "GTM";
                Mi && (t = "OGT", w = "GTAG");
                var x = C["google.tagmanager.debugui2.queue"];
                x || (x = [], C["google.tagmanager.debugui2.queue"] = x, oc("https://" + Fi.vf + "/debug/bootstrap?id=" + Nf.ctid + "&src=" + w + "&cond=" + v + "&gtm=" + Ko()));
                var y = {
                    messageType: "CONTAINER_STARTING",
                    data: {
                        scriptSource: ic,
                        containerProduct: t,
                        debug: !1,
                        id: Nf.ctid,
                        targetRef: {
                            ctid: Nf.ctid,
                            isDestination: bk.ze
                        },
                        aliases: ek(),
                        destinations: hk()
                    }
                };
                y.data.resume = function() {
                    a()
                };
                Fi.Ik && (y.data.initialPublish = !0);
                x.push(y)
            },
            k = {
                fl: 1,
                xj: 2,
                Lj: 3,
                Ei: 4,
                vj: 5
            };
        k[k.fl] = "GTM_DEBUG_LEGACY_PARAM";
        k[k.xj] = "GTM_DEBUG_PARAM";
        k[k.Lj] = "REFERRER";
        k[k.Ei] = "COOKIE";
        k[k.vj] = "EXTENSION_PARAM";
        var m = void 0,
            n = void 0,
            p = tj(C.location, "query", !1, void 0, "gtm_debug");
        oz(p) && (m = k.xj);
        if (!m && E.referrer) {
            var q = zj(E.referrer);
            vj(q, "host") === "tagassistant.google.com" && (m = k.Lj)
        }
        if (!m) {
            var r = No("__TAG_ASSISTANT");
            r.length && r[0].length && (m = k.Ei)
        }
        m || b();
        if (!m && pz(n)) {
            var u = !1;
            tc(E, "TADebugSignal", function() {
                u || (u = !0, b(), c())
            }, !1);
            C.setTimeout(function() {
                u || (u = !0, b(), c())
            }, 200)
        } else c()
    })(function() {
        try {
            var a;
            if (!(a = oK)) {
                var b;
                a: {
                    for (var c = Yj(), d = l(dk()), e = d.next(); !e.done; e = d.next())
                        if (c.injectedFirstPartyContainers[e.value]) {
                            b = !0;
                            break a
                        } b = !1
                }
                a = !b
            }
            if (a) {
                qk();
                if (Q(79)) {}
                Xa[9] = !0;
                if (!El) {
                    El = !0;
                    for (var f = Fl.length - 1; f >= 0; f--) Fl[f]();
                    Fl = []
                }
                ko();
                Ol();
                var g = kk();
                if (Yj().canonical[g]) {
                    var k = Gi.zones;
                    k && k.unregisterChild(dk());
                    Kw().removeExternalRestrictions(kk());
                } else {
                    xu();
                    Zi.j = "101533421~101823848~101878899~101878944~101925629";
                    Zi.K = "";
                    Zi.Ua = "ad_storage|analytics_storage|ad_user_data|ad_personalization";
                    Zi.aa = "ad_storage|analytics_storage|ad_user_data";
                    Zi.P = "4a90";
                    Zi.P = "4al0";
                    Vw();
                    for (var m = data.resource || {}, n = m.macros || [], p = 0; p < n.length; p++) ff.push(n[p]);
                    for (var q = m.tags || [], r = 0; r < q.length; r++) jf.push(q[r]);
                    for (var u = m.predicates || [], v = 0; v < u.length; v++) hf.push(u[v]);
                    for (var t =
                            m.rules || [], w = 0; w < t.length; w++) {
                        for (var x = t[w], y = {}, A = 0; A < x.length; A++) {
                            var B = x[A][0];
                            y[B] = Array.prototype.slice.call(x[A], 1);
                            B !== "if" && B !== "unless" || pf(y[B])
                        }
                        gf.push(y)
                    }
                    lf = Y;
                    mf = Uz;
                    Jf = new Qf;
                    var D = data.sandboxed_scripts,
                        I = data.security_groups;
                    a: {
                        var J = data.runtime || [],
                            F = data.runtime_lines;fA = new Ae;PJ();ef = eA();
                        var Z = fA,
                            N = OJ(),
                            W = new Xc("require", N);W.Ga();Z.j.j.set("require", W);
                        for (var da = [], T = 0; T < J.length; T++) {
                            var R = J[T];
                            if (!Array.isArray(R) || R.length < 3) {
                                if (R.length === 0) continue;
                                break a
                            }
                            F && F[T] &&
                                F[T].length && Af(R, F[T]);
                            try {
                                fA.execute(R), Q(90) && Oj && R[0] === 50 && da.push(R[1])
                            } catch (ao) {}
                        }
                        Q(90) && (rf = da)
                    }
                    if (D && D.length)
                        for (var M = ["sandboxedScripts"], ia = 0; ia < D.length; ia++) {
                            var la = D[ia].replace(/^_*/, "");
                            Wi[la] = M
                        }
                    QJ(I);
                    nK();
                    if (!Qi)
                        for (var ea = nl() ? bj(Zi.aa) : bj(Zi.Ua), ua = 0; ua < rl.length; ua++) {
                            var Ma = rl[ua],
                                Da = Ma,
                                Sa = ea[Ma] ? "granted" : "denied";
                            Nk().implicit(Da, Sa)
                        }
                    nz();
                    $w = !1;
                    ax = 0;
                    if (E.readyState === "interactive" && !E.createEventObject || E.readyState === "complete") cx();
                    else {
                        tc(E, "DOMContentLoaded", cx);
                        tc(E,
                            "readystatechange", cx);
                        if (E.createEventObject && E.documentElement.doScroll) {
                            var fb = !0;
                            try {
                                fb = !C.frameElement
                            } catch (ao) {}
                            fb && dx()
                        }
                        tc(C, "load", cx)
                    }
                    Ty = !1;
                    E.readyState === "complete" ? Vy() : tc(C, "load", Vy);
                    Oj && (Cm(Pm), C.setInterval(Om, 864E5), Cm(Xz), Cm(Dx), Cm(zv), Cm(Sm), Cm(bA), Cm(Ox), Q(90) && (Cm(Ix), Cm(Jx), Cm(Kx)));
                    if (Pj) {
                        Mk();
                        im();
                        var de, Uf = zj(C.location.href);
                        (de = Uf.hostname + Uf.pathname) && Ek("dl", encodeURIComponent(de));
                        var bo;
                        var ty = Nf.ctid;
                        if (ty) {
                            var pK = bk.ze ? 1 : 0,
                                wh, uy = mk(nk());
                            wh = uy && uy.context;
                            bo = ty + ";" + Nf.canonicalContainerId + ";" + (wh && wh.fromContainerExecution ? 1 : 0) + ";" + (wh && wh.source || 0) + ";" + pK
                        } else bo = void 0;
                        var vy = bo;
                        vy && Ek("tdp", vy);
                        var wy = Jn(!0);
                        wy !== void 0 && Ek("frm", String(wy));
                        var co;
                        var xh = mk(nk());
                        if (xh) {
                            for (; xh.parent;) {
                                var xy = mk(xh.parent);
                                if (!xy) break;
                                xh = xy
                            }
                            co = xh
                        } else co = void 0;
                        var Oe = co;
                        if (!Oe) S(144);
                        else if (Oe.canonicalContainerId) {
                            var eo;
                            a: {
                                if (Oe.scriptSource) {
                                    var Rj;
                                    try {
                                        var yy;
                                        Rj = (yy = Hc()) == null ? void 0 : yy.getEntriesByType("resource")
                                    } catch (ao) {}
                                    if (Rj) {
                                        for (var fo = {}, Sj = 0; Sj < Rj.length; ++Sj) {
                                            var zy = Rj[Sj],
                                                go = zy.initiatorType;
                                            if (go === "script" && zy.name === Oe.scriptSource) {
                                                eo = {
                                                    bn: Sj,
                                                    dn: fo
                                                };
                                                break a
                                            }
                                            fo[go] = 1 + (fo[go] || 0)
                                        }
                                        S(146)
                                    } else S(145)
                                }
                                eo = void 0
                            }
                            var ho = eo;
                            ho && (Ek("rtg", String(Oe.canonicalContainerId)), Ek("rlo", String(ho.bn)), Ek("slo", String(ho.dn.script || "0")), Ek("hlo", Oe.htmlLoadOrder || "-1"), Ek("lst", String(Oe.loadScriptType || "0")))
                        }
                        var io;
                        var Tj = lk();
                        if (Tj) {
                            var Ay;
                            io = Tj.canonicalContainerId || "_" + (Tj.scriptContainerId || ((Ay = Tj.destinations) == null ? void 0 : Ay[0]))
                        } else io = void 0;
                        var By = io;
                        By && Ek("pcid", By);
                        Q(34) && (Ek("bt", String(Zi.H ? 2 : Oi ? 1 : 0)), Ek("ct", String(Zi.H ? 0 : Oi ? 1 : Io() ? 2 : 3)))
                    }
                    Kz();
                    il(1);
                    oB();
                    Ui = pb();
                    mK.bootstrap = Ui;
                    if (Q(79)) {}
                }
            }
        } catch (ao) {
            if (il(4), Oj) {
                var qK = Jm(!0, !0);
                rc(qK)
            }
        }
    });

})()
