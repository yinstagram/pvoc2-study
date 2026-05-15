export const TOPICS = {
  "A1": "A1 · Handling characteristics and limitations of small craft",
  "A2": "A2 · Anchoring",
  "A3": "A3 · Start up and close down safety checks",
  "A4": "A4 · Chart work, position fixing, ETA",
  "A5": "A5 · Tides",
  "A6": "A6 · Navigation in restricted visibility",
  "A7": "A7 · Local knowledge (HK waters)",
  "A8": "A8 · COLREGS（國際海上避碰規則）",
  "A9": "A9 · Safety equipment",
  "A10": "A10 · Use of VHF",
  "A11": "A11 · Marine Department services",
  "A12": "A12 · Storm signals and weather",
  "A13": "A13 · Handling of emergency situations",
  "A14": "A14 · Accident reports",
  "B15": "B15 · Engines — Construction, pre-start, starting & stopping",
  "B16": "B16 · Duties while underway",
  "B17": "B17 · Batteries and electrical equipment",
  "B18": "B18 · Trouble shooting and remedies at sea",
  "B19": "B19 · Maintenance",
  "B20": "B20 · Safe operation of deck equipment",
  "B21": "B21 · Fire fighting and fire prevention"
};
export const QUESTIONS = [
  {
    "id": "A1",
    "part": "A",
    "q_no": 1,
    "topics": [
      "A8"
    ],
    "stem_tc": "你駕駛一艘機動船在海上，看見這些燈號在左舷30度的方向，羅經方位沒有顯著變更和距離漸近。正確的行動是:",
    "stem_en": "You are on board a power driven vessel and see these lights 30° on your port bow, compass bearing does not appreciably change and range decreasing. The correct action to take is:",
    "options": {
      "A": {
        "text_tc": "保持航速及航向及響五短聲號引起對方注意。",
        "text_en": "To stand-on and sound five short blasts to attract her attention."
      },
      "B": {
        "text_tc": "響一長聲號以警告該船。",
        "text_en": "To sound one prolonged blast to warn her."
      },
      "C": {
        "text_tc": "響兩短聲號，轉航向左。",
        "text_en": "To sound two short blasts, alter course to port."
      },
      "D": {
        "text_tc": "立即將船速減慢。",
        "text_en": "To reduce ship's speed immediately."
      }
    },
    "answer": "D",
    "explanation_tc": "見到燈號喺 port bow 30°、方位不變、距離縮短 = collision risk。COLREGS Rule 8(e) 容許用 reduce speed 作為避碰行動；最穩陣係立即減速。其他選項：A 五短聲係 doubt signal 唔係主動避碰；B 一長聲非避碰意圖信號；C 向左轉會切向對方更危險。",
    "image_required": false,
    "image_status": "not_required",
    "image_asset_path": null,
    "image_webp_asset_path": null,
    "image_alt_tc": null,
    "production_score_inclusion": true,
    "source_pdf_url_tc": "https://www.mardep.gov.hk/filemanager/tc/share/pub-services/pdf/PVOC_exam_A_c.pdf",
    "source_pdf_url_en": "https://www.mardep.gov.hk/filemanager/en/share/pub-services/pdf/PVOC_exam_A.pdf"
  },
  {
    "id": "A2",
    "part": "A",
    "q_no": 2,
    "topics": [
      "A8",
      "A11",
      "A13"
    ],
    "stem_tc": "你的船沿著西航道向南航行，你看見有一艘在西面2號錨地的船隻懸掛這些燈號。你會採取甚麽行動？",
    "stem_en": "Your ship is heading in southerly course along the Western Fairway, you see a vessel is displaying these lights in Western Anchorage No. 2. What action would you take?",
    "options": {
      "A": {
        "text_tc": "一艘錨泊船隻，要求入境事務處清關。我不會採取任何行動。",
        "text_en": "A vessel at anchor and requires immigration clearance. I will not take any action."
      },
      "B": {
        "text_tc": "一艘正從事拖曳工作的船隻。我會遠離它並將航速減慢。",
        "text_en": "A vessel engaged in towing operation. I will keep well clear of her and reduce speed."
      },
      "C": {
        "text_tc": "一艘正從事水下作業的船隻。我會遠離它並將航速減慢。",
        "text_en": "A vessel engaged in underwater operation. I will keep well clear of her and reduce speed."
      },
      "D": {
        "text_tc": "一艘錨泊船隻，要求立即援助。我會報告海事處。",
        "text_en": "A vessel at anchor and requires immediate assistance. I will report the finding to Marine Department."
      }
    },
    "answer": "D",
    "explanation_tc": "錨泊船 + 遇險信號 = 需要援助。Good Samaritan 義務：立即通知 VTC（透過所屬 sector VHF channel 或致電 2233 7801/7808）。",
    "image_required": false,
    "image_status": "not_required",
    "image_asset_path": null,
    "image_webp_asset_path": null,
    "image_alt_tc": null,
    "production_score_inclusion": true,
    "source_pdf_url_tc": "https://www.mardep.gov.hk/filemanager/tc/share/pub-services/pdf/PVOC_exam_A_c.pdf",
    "source_pdf_url_en": "https://www.mardep.gov.hk/filemanager/en/share/pub-services/pdf/PVOC_exam_A.pdf"
  },
  {
    "id": "A3",
    "part": "A",
    "q_no": 3,
    "topics": [
      "A8"
    ],
    "stem_tc": "當駕駛一艘機動船在海上，你看見這些燈號在你船的右舷兩點位的方向而且方位不變，你會:",
    "stem_en": "You are on board a power driven vessel and see these lights 2 points on your starboard bow and bearing is steady. You will:",
    "options": {
      "A": {
        "text_tc": "保持航速及航向，響五短聲號以上引起對方注意。",
        "text_en": "Stand-on, sound 5 short blasts to attract her attention."
      },
      "B": {
        "text_tc": "響一短聲號，轉航向右。",
        "text_en": "Sound one short blast, alter course to starboard."
      },
      "C": {
        "text_tc": "響兩長聲號以警告該船。",
        "text_en": "Sound two prolonged blasts to warn her."
      },
      "D": {
        "text_tc": "響一長聲號以警告該船。",
        "text_en": "Sound one prolonged blast to warn her."
      }
    },
    "answer": "B",
    "explanation_tc": "對方喺 starboard bow + 方位不變 = crossing situation 你係 give-way（COLREGS Rule 15）。標準做法：一短聲（'我向右轉'）+ 從對方船尾通過。記憶法：『見右讓右』。",
    "image_required": false,
    "image_status": "not_required",
    "image_asset_path": null,
    "image_webp_asset_path": null,
    "image_alt_tc": null,
    "production_score_inclusion": true,
    "source_pdf_url_tc": "https://www.mardep.gov.hk/filemanager/tc/share/pub-services/pdf/PVOC_exam_A_c.pdf",
    "source_pdf_url_en": "https://www.mardep.gov.hk/filemanager/en/share/pub-services/pdf/PVOC_exam_A.pdf"
  },
  {
    "id": "A4",
    "part": "A",
    "q_no": 4,
    "topics": [
      "A8"
    ],
    "stem_tc": "在一艘在海上以全速前進的機動船上，你看見這號燈在你船頭左舷三點位，羅經方位不變。正確的行動應是:",
    "stem_en": "You are on board a power driven vessel and proceeding at full speed, you see these lights 3 points on your port bow with a steady compass bearing.",
    "options": {
      "A": {
        "text_tc": "發出五短聲號引起其注意。",
        "text_en": "Sound 5 short blasts to attract her attention."
      },
      "B": {
        "text_tc": "響一短聲號，轉航向右遠離該船。",
        "text_en": "Sound one short blast, alter course to starboard and keep well clear of the vessel."
      },
      "C": {
        "text_tc": "加速經過他船的船頭。",
        "text_en": "Increasing speed to pass ahead of the other vessel."
      },
      "D": {
        "text_tc": "保持航速及航向。",
        "text_en": "Stand-on, maintain course and speed."
      }
    },
    "answer": "B",
    "explanation_tc": "雖然對方喺 port bow，但燈號顯示對方有優先權（如帆船、操縱受限船）。安全做法 = 一短聲 + 向 starboard 轉並遠離。Rule 8 強調 'early and substantial action'。",
    "image_required": false,
    "image_status": "not_required",
    "image_asset_path": null,
    "image_webp_asset_path": null,
    "image_alt_tc": null,
    "production_score_inclusion": true,
    "source_pdf_url_tc": "https://www.mardep.gov.hk/filemanager/tc/share/pub-services/pdf/PVOC_exam_A_c.pdf",
    "source_pdf_url_en": "https://www.mardep.gov.hk/filemanager/en/share/pub-services/pdf/PVOC_exam_A.pdf"
  },
  {
    "id": "A5",
    "part": "A",
    "q_no": 5,
    "topics": [
      "A8"
    ],
    "stem_tc": "你在一艘在航中的機動船上，看見這些燈號在你船頭右舷五點位，距離約1海里。你應:",
    "stem_en": "You are on board a power driven vessel which is under way and see these lights on 5 points of your starboard bow, at a distance of about 1 mile from your vessel. You should:",
    "options": {
      "A": {
        "text_tc": "發出一短聲號和轉航向右。",
        "text_en": "sound one short blast and alter course to starboard."
      },
      "B": {
        "text_tc": "發出兩短聲號和轉航向左。",
        "text_en": "sound two short blasts and alter course to port."
      },
      "C": {
        "text_tc": "保持航向和航速，小心觀察該船直至遠離。",
        "text_en": "maintain course and speed, watch carefully on the vessel until she is finally past and clear."
      },
      "D": {
        "text_tc": "停船並以相反航向行駛。",
        "text_en": "stop the vessel and steer on a reciprocal course."
      }
    },
    "answer": "C",
    "explanation_tc": "5 points = 約 56°，已超過 starboard bow 區。對方燈號顯示佢正駛向你嘅 starboard 方向、會從你前方安全通過。冇 collision risk = 維持航向航速、保持瞭望。",
    "image_required": false,
    "image_status": "not_required",
    "image_asset_path": null,
    "image_webp_asset_path": null,
    "image_alt_tc": null,
    "production_score_inclusion": true,
    "source_pdf_url_tc": "https://www.mardep.gov.hk/filemanager/tc/share/pub-services/pdf/PVOC_exam_A_c.pdf",
    "source_pdf_url_en": "https://www.mardep.gov.hk/filemanager/en/share/pub-services/pdf/PVOC_exam_A.pdf"
  },
  {
    "id": "A6",
    "part": "A",
    "q_no": 6,
    "topics": [
      "A8"
    ],
    "stem_tc": "當你與顯示這些號燈的船隻對遇時，你會採取什麽行動?",
    "stem_en": "What action would you take when you meet head on with a vessel showing these lights?",
    "options": {
      "A": {
        "text_tc": "它是一艘在航中並要求立即援助的船隻。我會報告海事處。",
        "text_en": "She is a vessel underway and requires immediate assistance. I will report the finding to Marine Department."
      },
      "B": {
        "text_tc": "它是一艘在航中從事領港任務的船隻。我會響1短號，向右改變航向。",
        "text_en": "She is a vessel engaged on pilotage duty and underway. I will sound 1 short blast and alter course to starboard."
      },
      "C": {
        "text_tc": "它是一艘在航中的機動船隻。我會響1短號，向右改變航向。",
        "text_en": "She is a power driven vessel underway. I will sound 1 short blast and alter course to starboard."
      },
      "D": {
        "text_tc": "它是一艘在航中從事拖曳任務的船隻。我會響1短號，向右改變航向。",
        "text_en": "She is a vessel engaged in towing operations and underway. I will sound 1 short blast and alter course to starboard."
      }
    },
    "answer": "C",
    "explanation_tc": "Head-on situation 兩艘 power-driven vessels（COLREGS Rule 14）：兩船都向右轉，從對方左舷擦身而過 = red-to-red passing。一短聲信號 = 'I am altering my course to starboard'。",
    "image_required": false,
    "image_status": "not_required",
    "image_asset_path": null,
    "image_webp_asset_path": null,
    "image_alt_tc": null,
    "production_score_inclusion": true,
    "source_pdf_url_tc": "https://www.mardep.gov.hk/filemanager/tc/share/pub-services/pdf/PVOC_exam_A_c.pdf",
    "source_pdf_url_en": "https://www.mardep.gov.hk/filemanager/en/share/pub-services/pdf/PVOC_exam_A.pdf"
  },
  {
    "id": "A7",
    "part": "A",
    "q_no": 7,
    "topics": [
      "A8"
    ],
    "stem_tc": "當你駕駛一艘機動船在海上，看見這艘船在你左舷三點位的方向，羅經方位不變而且距離漸近。你會:",
    "stem_en": "You are on board a power driven vessel, you see this vessel is about 3 points on your port bow and compass bearing is steady, range decreasing. What is your best action?",
    "options": {
      "A": {
        "text_tc": "保持航向及航速並響五短號引起該船注意。",
        "text_en": "Stand-on and sound five short blasts to attract her attention."
      },
      "B": {
        "text_tc": "響一短聲號，並將航向轉右。",
        "text_en": "Sound one short blasts and alter course to starboard."
      },
      "C": {
        "text_tc": "響兩短聲號，並將航向轉左。",
        "text_en": "Sound two short blast and alter course to port."
      },
      "D": {
        "text_tc": "響三短聲號，倒車把船緊急煞停。",
        "text_en": "Emergency stopping including sound three short"
      }
    },
    "answer": "A",
    "explanation_tc": "對方喺 port bow + 方位不變 + 距離縮短 = 你係 stand-on vessel（佢應避你）。但對方未行動，你發 5 短聲 doubt signal 警告。Rule 17 規定 stand-on 一旦發現 give-way 未讓可採取行動避碰。",
    "image_required": false,
    "image_status": "not_required",
    "image_asset_path": null,
    "image_webp_asset_path": null,
    "image_alt_tc": null,
    "production_score_inclusion": true,
    "source_pdf_url_tc": "https://www.mardep.gov.hk/filemanager/tc/share/pub-services/pdf/PVOC_exam_A_c.pdf",
    "source_pdf_url_en": "https://www.mardep.gov.hk/filemanager/en/share/pub-services/pdf/PVOC_exam_A.pdf"
  },
  {
    "id": "A8",
    "part": "A",
    "q_no": 8,
    "topics": [
      "A8"
    ],
    "stem_tc": "你駕駛一艘機動船在海上，看見這艘船在船頭左舷一點位，方位不變，距離逐漸接近，你會:",
    "stem_en": "You are on board a power driven vessel, you see this vessel one point on your port bow, bearing steady and range is decreasing. What will be your best action?",
    "options": {
      "A": {
        "text_tc": "響五短聲號引起該船注意。",
        "text_en": "Sound five short blasts to attract her attention."
      },
      "B": {
        "text_tc": "響兩短聲號，並轉航向左。",
        "text_en": "Sound two short blasts and alter course to port."
      },
      "C": {
        "text_tc": "保持航向及航速。",
        "text_en": "Stand-on, maintain course and speed."
      },
      "D": {
        "text_tc": "響一長聲號警告該船。",
        "text_en": "sound one prolonged blast to warn the vessel."
      }
    },
    "answer": "B",
    "explanation_tc": "對方喺 port bow 1 point（接近正前方），燈號暗示需要你避讓（如對方 starboard side 顯示綠燈方向直駛而來）。兩短聲 + 向左轉。注意此題答案 B 同 head-on 標準避碰邏輯有別，反映 PVOC2 考試會出 nuanced scenarios。",
    "image_required": false,
    "image_status": "not_required",
    "image_asset_path": null,
    "image_webp_asset_path": null,
    "image_alt_tc": null,
    "production_score_inclusion": true,
    "source_pdf_url_tc": "https://www.mardep.gov.hk/filemanager/tc/share/pub-services/pdf/PVOC_exam_A_c.pdf",
    "source_pdf_url_en": "https://www.mardep.gov.hk/filemanager/en/share/pub-services/pdf/PVOC_exam_A.pdf"
  },
  {
    "id": "A9",
    "part": "A",
    "q_no": 9,
    "topics": [
      "A7",
      "A11"
    ],
    "stem_tc": "當你聽到一艘海事處船隻發出一短一長及兩短的聲音訊號時，這表示:",
    "stem_en": "When you hear the whistle signals which consist of one short one prolonged and two short blasts made by a Marine Department vessel. It indicates:",
    "options": {
      "A": {
        "text_tc": "你應立即停船。",
        "text_en": "You should stop your vessel instantly."
      },
      "B": {
        "text_tc": "該海事船處船企圖在你左舷追越。",
        "text_en": "The Marine Department vessel intends to overtake on your port side."
      },
      "C": {
        "text_tc": "你應與該船通訊。",
        "text_en": "You should communicate with her."
      },
      "D": {
        "text_tc": "該海事處船要求立即援助。",
        "text_en": "The Marine Department vessel requires immediate assistance."
      }
    },
    "answer": "A",
    "explanation_tc": "一短一長兩短 = 海事處船發出嘅命令信號，要求你立即停船。香港特定 patrol/enforcement signal。",
    "image_required": false,
    "image_status": "not_required",
    "image_asset_path": null,
    "image_webp_asset_path": null,
    "image_alt_tc": null,
    "production_score_inclusion": true,
    "source_pdf_url_tc": "https://www.mardep.gov.hk/filemanager/tc/share/pub-services/pdf/PVOC_exam_A_c.pdf",
    "source_pdf_url_en": "https://www.mardep.gov.hk/filemanager/en/share/pub-services/pdf/PVOC_exam_A.pdf"
  },
  {
    "id": "A10",
    "part": "A",
    "q_no": 10,
    "topics": [
      "A8"
    ],
    "stem_tc": "甚麼長度的船隻可以無須顯示失控船隻或操縱能力受限制船隻的號燈和號型(從事潛水作業者除外)?",
    "stem_en": "What is the length of vessels that are not required to display the lights and shapes of vessels not under command or vessel restricted in ability to manoeuvre (except those engaged in diving operations)?",
    "options": {
      "A": {
        "text_tc": "50米以下。",
        "text_en": "less than 50 metres."
      },
      "B": {
        "text_tc": "20米以下。",
        "text_en": "less than 20 metres."
      },
      "C": {
        "text_tc": "12米以下。",
        "text_en": "less than 12 metres."
      },
      "D": {
        "text_tc": "30米以下。",
        "text_en": "less than 30 metres."
      }
    },
    "answer": "C",
    "explanation_tc": "COLREGS Rule 27(g)：12 米以下船隻除咗 diving operations 之外，唔需要顯示 NUC 或 RAM 嘅燈號或號標。",
    "image_required": false,
    "image_status": "not_required",
    "image_asset_path": null,
    "image_webp_asset_path": null,
    "image_alt_tc": null,
    "production_score_inclusion": true,
    "source_pdf_url_tc": "https://www.mardep.gov.hk/filemanager/tc/share/pub-services/pdf/PVOC_exam_A_c.pdf",
    "source_pdf_url_en": "https://www.mardep.gov.hk/filemanager/en/share/pub-services/pdf/PVOC_exam_A.pdf"
  },
  {
    "id": "A11",
    "part": "A",
    "q_no": 11,
    "topics": [
      "A6",
      "A8"
    ],
    "stem_tc": "在能見度低的情況下，一艘航行中的帆船應發出的霧號是每隔不超過兩分鐘:",
    "stem_en": "In restricted visibility, a sailing vessel underway shall sound the whistle at intervals of not more than 2 minutes:",
    "options": {
      "A": {
        "text_tc": "一長聲號",
        "text_en": "one prolonged blast."
      },
      "B": {
        "text_tc": "兩長聲號。",
        "text_en": "two prolonged blasts."
      },
      "C": {
        "text_tc": "兩短及一長聲號。",
        "text_en": "two short followed by one prolonged blasts."
      },
      "D": {
        "text_tc": "一長及兩短聲號。",
        "text_en": "one prolonged followed by two short blasts."
      }
    },
    "answer": "D",
    "explanation_tc": "COLREGS Rule 35(c)：限制能見度中，sailing vessel/NUC/RAM/CBD/漁船/拖船 = 一長兩短，每 ≤2 分鐘一次。記憶法：'I am special, give me space'。",
    "image_required": false,
    "image_status": "not_required",
    "image_asset_path": null,
    "image_webp_asset_path": null,
    "image_alt_tc": null,
    "production_score_inclusion": true,
    "source_pdf_url_tc": "https://www.mardep.gov.hk/filemanager/tc/share/pub-services/pdf/PVOC_exam_A_c.pdf",
    "source_pdf_url_en": "https://www.mardep.gov.hk/filemanager/en/share/pub-services/pdf/PVOC_exam_A.pdf"
  },
  {
    "id": "A12",
    "part": "A",
    "q_no": 12,
    "topics": [
      "A6",
      "A8"
    ],
    "stem_tc": "航行中的拖船，在停止及不再前進時，應發出的霧號是:",
    "stem_en": "In restricted visibility, a vessel engaged in towing, but stopped and making no way through the water. The fog signals should be:",
    "options": {
      "A": {
        "text_tc": "每隔不超過兩分鐘，響兩長聲號。",
        "text_en": "two prolonged blasts at an intervals of not more than two minutes."
      },
      "B": {
        "text_tc": "每隔不超過兩分鐘一長聲號及兩短聲號。",
        "text_en": "one prolonged followed by two short blasts at an intervals of not more than two minutes."
      },
      "C": {
        "text_tc": "每隔不超過兩分鐘一短一長及一短聲號。",
        "text_en": "one short, one prolonged and one short blasts at intervals of not more than two minutes."
      },
      "D": {
        "text_tc": "每分鐘響兩短一長聲號。",
        "text_en": "two short and one prolonged blasts every minute."
      }
    },
    "answer": "B",
    "explanation_tc": "Towing vessel 即使停下無對水移動仍視為 underway。霧號仍係一長兩短，每 ≤2 分鐘一次。注意：power-driven 停下無對水移動 = 兩長聲；但拖船特殊。",
    "image_required": false,
    "image_status": "not_required",
    "image_asset_path": null,
    "image_webp_asset_path": null,
    "image_alt_tc": null,
    "production_score_inclusion": true,
    "source_pdf_url_tc": "https://www.mardep.gov.hk/filemanager/tc/share/pub-services/pdf/PVOC_exam_A_c.pdf",
    "source_pdf_url_en": "https://www.mardep.gov.hk/filemanager/en/share/pub-services/pdf/PVOC_exam_A.pdf"
  },
  {
    "id": "A13",
    "part": "A",
    "q_no": 13,
    "topics": [
      "A6",
      "A8"
    ],
    "stem_tc": "在能見度受到限制時，船舶的安全速度決定於下列那個因素:",
    "stem_en": "In restricted visibility, one of the factor to determine the safe speed of a vessel which is:",
    "options": {
      "A": {
        "text_tc": "交通密度。",
        "text_en": "the traffic density."
      },
      "B": {
        "text_tc": "視乎你船機器的馬力。",
        "text_en": "depending on the power of your engines."
      },
      "C": {
        "text_tc": "船隻的大小。",
        "text_en": "the size of vessel."
      },
      "D": {
        "text_tc": "視乎船長的經驗。",
        "text_en": "depending on the ship captain's experience."
      }
    },
    "answer": "A",
    "explanation_tc": "COLREGS Rule 6：safe speed 因素包括能見度、交通密度、操縱性、夜間燈光背景、風浪流、吃水。Traffic density 係其中一項。",
    "image_required": false,
    "image_status": "not_required",
    "image_asset_path": null,
    "image_webp_asset_path": null,
    "image_alt_tc": null,
    "production_score_inclusion": true,
    "source_pdf_url_tc": "https://www.mardep.gov.hk/filemanager/tc/share/pub-services/pdf/PVOC_exam_A_c.pdf",
    "source_pdf_url_en": "https://www.mardep.gov.hk/filemanager/en/share/pub-services/pdf/PVOC_exam_A.pdf"
  },
  {
    "id": "A14",
    "part": "A",
    "q_no": 14,
    "topics": [
      "A6",
      "A8"
    ],
    "stem_tc": "在濃霧中航行時，聽到一長聲的汽笛信號來自船首右舷方向，你應:",
    "stem_en": "While you are navigating in dense fog and a fog signal of one prolonged blast is heard from your starboard bow. Your action is:",
    "options": {
      "A": {
        "text_tc": "立即減低船速。",
        "text_en": "to reduce speed immediately."
      },
      "B": {
        "text_tc": "立即發出兩短聲號並向左轉。",
        "text_en": "sound two short blasts and alter course to port immediately."
      },
      "C": {
        "text_tc": "立即發出一短聲號並向右轉。",
        "text_en": "sound one short blast and alter course to starboard immediately."
      },
      "D": {
        "text_tc": "立即發出三短聲號並倒車。",
        "text_en": "sound three short blasts and reverse the engines immediately."
      }
    },
    "answer": "A",
    "explanation_tc": "COLREGS Rule 19(e)：聽到霧號明顯來自前方時，必須減速至 minimum steerage way，必要時停船。唔可以盲目轉向。",
    "image_required": false,
    "image_status": "not_required",
    "image_asset_path": null,
    "image_webp_asset_path": null,
    "image_alt_tc": null,
    "production_score_inclusion": true,
    "source_pdf_url_tc": "https://www.mardep.gov.hk/filemanager/tc/share/pub-services/pdf/PVOC_exam_A_c.pdf",
    "source_pdf_url_en": "https://www.mardep.gov.hk/filemanager/en/share/pub-services/pdf/PVOC_exam_A.pdf"
  },
  {
    "id": "A15",
    "part": "A",
    "q_no": 15,
    "topics": [
      "A8"
    ],
    "stem_tc": "在海上保持適當瞭望最主要目是:",
    "stem_en": "The main purpose of maintaining proper look-out at sea is:",
    "options": {
      "A": {
        "text_tc": "找出附近水域的能見度。",
        "text_en": "to find out the visibility in the vicinity."
      },
      "B": {
        "text_tc": "找出在附近水域的助航設備如燈標或浮標。",
        "text_en": "to look for navigational aids such as light houses and or buoys in the vicinity."
      },
      "C": {
        "text_tc": "找出在附近水域的任何漂浮物。",
        "text_en": "to look for any floating objects in the vicinity."
      },
      "D": {
        "text_tc": "對局面和碰撞危險作出全面評估。",
        "text_en": "to make a full appraisal of the situation and of the risk of collision."
      }
    },
    "answer": "D",
    "explanation_tc": "COLREGS Rule 5（最重要嘅一條）：'Every vessel shall at all times maintain a proper look-out by sight and hearing... so as to make a full appraisal of the situation and of the risk of collision.'",
    "image_required": false,
    "image_status": "not_required",
    "image_asset_path": null,
    "image_webp_asset_path": null,
    "image_alt_tc": null,
    "production_score_inclusion": true,
    "source_pdf_url_tc": "https://www.mardep.gov.hk/filemanager/tc/share/pub-services/pdf/PVOC_exam_A_c.pdf",
    "source_pdf_url_en": "https://www.mardep.gov.hk/filemanager/en/share/pub-services/pdf/PVOC_exam_A.pdf"
  },
  {
    "id": "A16",
    "part": "A",
    "q_no": 16,
    "topics": [
      "A7",
      "A8"
    ],
    "stem_tc": "船隻使用分道航行制時，正常情況下不應進入分隔帶，下列那一種是屬於例外的情況:",
    "stem_en": "A vessel using traffic separation scheme shall not normally enter a traffic separation zone, except:",
    "options": {
      "A": {
        "text_tc": "划船比賽。",
        "text_en": "regatta."
      },
      "B": {
        "text_tc": "避免緊迫危險的緊急情況。",
        "text_en": "in case of emergency to avoid immediate danger."
      },
      "C": {
        "text_tc": "錨泊。",
        "text_en": "anchoring."
      },
      "D": {
        "text_tc": "當追越其他船隻。",
        "text_en": "when overtaking other vessel."
      }
    },
    "answer": "B",
    "explanation_tc": "COLREGS Rule 10(e)：船隻不應進入 separation zone，除非：(i) 緊急情況避免立即危險；(ii) 漁船捕魚。香港有兩個 TSS：Tathong Channel + East Lamma Channel。",
    "image_required": false,
    "image_status": "not_required",
    "image_asset_path": null,
    "image_webp_asset_path": null,
    "image_alt_tc": null,
    "production_score_inclusion": true,
    "source_pdf_url_tc": "https://www.mardep.gov.hk/filemanager/tc/share/pub-services/pdf/PVOC_exam_A_c.pdf",
    "source_pdf_url_en": "https://www.mardep.gov.hk/filemanager/en/share/pub-services/pdf/PVOC_exam_A.pdf"
  },
  {
    "id": "A17",
    "part": "A",
    "q_no": 17,
    "topics": [
      "A8"
    ],
    "stem_tc": "一艘船在狹窄水道中航行並打算在另一艘船的右邊追越時，她應該發出甚麼聲號?",
    "stem_en": "A vessel is navigating in a narrow channel, what sound signal should be given if she intends to overtake on the starboard side of another vessel?",
    "options": {
      "A": {
        "text_tc": "一短聲號。",
        "text_en": "one short blast."
      },
      "B": {
        "text_tc": "兩短聲號，接著發出一長聲號。",
        "text_en": "two short followed by one prolonged blasts."
      },
      "C": {
        "text_tc": "兩長聲號，接著發出一短聲號。",
        "text_en": "two prolonged followed by one short blasts."
      },
      "D": {
        "text_tc": "兩長聲號，接著發出兩短聲號。",
        "text_en": "two prolonged followed by two short blasts."
      }
    },
    "answer": "C",
    "explanation_tc": "COLREGS Rule 34(c)：狹窄水道追越 — 兩長一短 = 'I intend to overtake on your starboard side'；兩長兩短 = 從 port side 追越。被追越船同意：一長一短一長一短。",
    "image_required": false,
    "image_status": "not_required",
    "image_asset_path": null,
    "image_webp_asset_path": null,
    "image_alt_tc": null,
    "production_score_inclusion": true,
    "source_pdf_url_tc": "https://www.mardep.gov.hk/filemanager/tc/share/pub-services/pdf/PVOC_exam_A_c.pdf",
    "source_pdf_url_en": "https://www.mardep.gov.hk/filemanager/en/share/pub-services/pdf/PVOC_exam_A.pdf"
  },
  {
    "id": "A18",
    "part": "A",
    "q_no": 18,
    "topics": [
      "A8"
    ],
    "stem_tc": "當兩艘機動船交叉相遇而涉及碰撞危險時。你是一艘有直航權的船隻，發現另外一艘船已經給你讓路，你要採取甚麽行動呢?",
    "stem_en": "When two power-driven vessels are crossing so as to involve risk of collision. What action(s) would you take if you are the stand-on vessel and notice that other vessel has kept out of your way?",
    "options": {
      "A": {
        "text_tc": "響一短笛號，轉航向右。",
        "text_en": "sound one short blast on the whistle, alter course to starboard."
      },
      "B": {
        "text_tc": "保持航向和航速。",
        "text_en": "keep course and speed."
      },
      "C": {
        "text_tc": "響五短促笛號表示懷疑。",
        "text_en": "sound 5 short and rapid blasts on the whistle to indicate my doubt."
      },
      "D": {
        "text_tc": "響兩短笛號，轉航向左。",
        "text_en": "sound two short blasts on the whistle, alter course to port."
      }
    },
    "answer": "B",
    "explanation_tc": "COLREGS Rule 17(a)(i)：作為 stand-on vessel，當對方已採取避讓行動，你要保持航向航速，否則會打亂對方計算。只有當對方明顯未行動，先發 5 短聲（17(d)）。",
    "image_required": false,
    "image_status": "not_required",
    "image_asset_path": null,
    "image_webp_asset_path": null,
    "image_alt_tc": null,
    "production_score_inclusion": true,
    "source_pdf_url_tc": "https://www.mardep.gov.hk/filemanager/tc/share/pub-services/pdf/PVOC_exam_A_c.pdf",
    "source_pdf_url_en": "https://www.mardep.gov.hk/filemanager/en/share/pub-services/pdf/PVOC_exam_A.pdf"
  },
  {
    "id": "A19",
    "part": "A",
    "q_no": 19,
    "topics": [
      "A8",
      "A9"
    ],
    "stem_tc": "圖中這訊號具有甚麼意義?",
    "stem_en": "What is the meaning of this signal?",
    "options": {
      "A": {
        "text_tc": "船上有人跌落海。",
        "text_en": "Man overboard."
      },
      "B": {
        "text_tc": "下錨碇泊的船舶，進行水底工程。",
        "text_en": "A vessel at anchor, engaged in underwater operation."
      },
      "C": {
        "text_tc": "船舶遇難求救訊號。",
        "text_en": "A vessel in distress"
      },
      "D": {
        "text_tc": "船隻之操縱能力受到限制。",
        "text_en": "A vessel restricted in her ability to manoeuvre."
      }
    },
    "answer": "C",
    "explanation_tc": "圖示係 COLREG 1972 附件 IV §1(g) 規定嘅遇險信號號型：『方旗 + 上方或下方加一圓球』(square flag with ball above or below)。次可能係 §1(f) N.C. 國際代碼旗組合（N 旗在上、C 旗在下）。干擾項 D（RAM）號型係球-菱-球三件式垂直排列。考試常考此類細節分辨。",
    "image_required": true,
    "image_status": "available",
    "image_asset_path": "assets/img/imgQA19.png",
    "image_webp_asset_path": "assets/img/imgQA19.webp",
    "image_alt_tc": "推斷（非視覺確認）為 COLREG 1972 附件 IV §1(g) 遇險信號：方旗加圓球（兩個垂直疊放實心黑色形狀）。次可能性 §1(f) N over C 國際代碼旗組合。獨立 deep research 無法擷取真實圖像或從任何第三方確認 — 學員務必親身打開官方 PDF 對證。",
    "production_score_inclusion": true,
    "source_pdf_url_tc": "https://www.mardep.gov.hk/filemanager/tc/share/pub-services/pdf/PVOC_exam_A_c.pdf",
    "source_pdf_url_en": "https://www.mardep.gov.hk/filemanager/en/share/pub-services/pdf/PVOC_exam_A.pdf"
  },
  {
    "id": "A20",
    "part": "A",
    "q_no": 20,
    "topics": [
      "A10",
      "A11"
    ],
    "stem_tc": "在圖中塗黑部份的水域航行時，船上有人遭遇意外而引致嚴重受傷。你應立即使用那一個甚高頻電話(VHF)的頻道，將此事情報告船隻航行監察中心。",
    "stem_en": "When you navigate at the blackened area in the diagram and a person on board involved to an accident with serious injury, you should report this incident to Vessel Traffic Centre immediately through the VHF:",
    "options": {
      "A": {
        "text_tc": "頻道16",
        "text_en": "Channel 16"
      },
      "B": {
        "text_tc": "頻道14",
        "text_en": "Channel 14"
      },
      "C": {
        "text_tc": "頻道67",
        "text_en": "Channel 67"
      },
      "D": {
        "text_tc": "頻道68",
        "text_en": "Channel 68"
      }
    },
    "answer": "C",
    "explanation_tc": "Note: 重要：答案 C（CH 67）只適用於圖示嘅 Western Approaches sector。CH 67 係西進口航道區段嘅 VHF 頻道，唔係全港通用 incident reporting channel。香港 VTC 5 個 sector：CH 02 (Harbour East)、CH 12 (Eastern Approaches)、CH 14 (Harbour)、CH 63 (Lantau South)、CH 67 (Western Approaches)。CH 16 係國際遇險頻道。考試睇圖區分。",
    "image_required": true,
    "image_status": "available",
    "image_asset_path": "assets/img/imgQA20.png",
    "image_webp_asset_path": "assets/img/imgQA20.webp",
    "image_alt_tc": "PDF 圖示為香港西邊水域（屯門／大嶼山西／大澳一帶）地圖，黑色區域對應 Western Approaches VTC sector。",
    "production_score_inclusion": true,
    "source_pdf_url_tc": "https://www.mardep.gov.hk/filemanager/tc/share/pub-services/pdf/PVOC_exam_A_c.pdf",
    "source_pdf_url_en": "https://www.mardep.gov.hk/filemanager/en/share/pub-services/pdf/PVOC_exam_A.pdf"
  },
  {
    "id": "A21",
    "part": "A",
    "q_no": 21,
    "topics": [
      "A7",
      "A11"
    ],
    "stem_tc": "你是一艘遊樂船的船長，當你發現另一艘船以航速10節在圖中红色區域行駛時，你會採取甚麽行動？",
    "stem_en": "You are the Captain of a pleasure vessel. What action would you take when you find another vessel was proceeding at a speed of 10 knots in the red area of the above diagram?",
    "options": {
      "A": {
        "text_tc": "用甚高頻無線電話向船隻航行監察中心舉報。",
        "text_en": "Report the finding to Vessel Traffic Centre by VHF radio."
      },
      "B": {
        "text_tc": "響號笛提醒該船。",
        "text_en": "Sound whistle signals to remind the vessel."
      },
      "C": {
        "text_tc": "用手提電話通知海港巡邏組。",
        "text_en": "Report the finding to Harbour Patrol Section by mobile phone."
      },
      "D": {
        "text_tc": "升起訊號旗\"L\"",
        "text_en": "Hoist up the signal flag \"L\"."
      }
    },
    "answer": "C",
    "explanation_tc": "Speed Restricted Zone 超速應通報 Harbour Patrol Section（手機電話），而非 VTC（VTC 處理 navigational safety 而非 enforcement）。",
    "image_required": false,
    "image_status": "not_required",
    "image_asset_path": null,
    "image_webp_asset_path": null,
    "image_alt_tc": null,
    "production_score_inclusion": true,
    "source_pdf_url_tc": "https://www.mardep.gov.hk/filemanager/tc/share/pub-services/pdf/PVOC_exam_A_c.pdf",
    "source_pdf_url_en": "https://www.mardep.gov.hk/filemanager/en/share/pub-services/pdf/PVOC_exam_A.pdf"
  },
  {
    "id": "A22",
    "part": "A",
    "q_no": 22,
    "topics": [
      "A7"
    ],
    "stem_tc": "根據《商船(本地船隻)條例》，一艘本地船隻除非獲處長允許，那些機場進口航道區是不得進入?",
    "stem_en": "Under the Merchant Shipping (Local Vessels) (General) Regulation, a local vessel except with the permission of the Director which Airport Approach areas are prohibited from entry?",
    "options": {
      "A": {
        "text_tc": "第一和二區。",
        "text_en": "Area No. 1 and 2."
      },
      "B": {
        "text_tc": "第七和八區。",
        "text_en": "Area No. 7 and 8."
      },
      "C": {
        "text_tc": "第一，二，三和四區。",
        "text_en": "Area No. 1, 2, 3 and 4."
      },
      "D": {
        "text_tc": "第五，六，七和八區。",
        "text_en": "Area No. 5, 6, 7 and 8."
      }
    },
    "answer": "C",
    "explanation_tc": "Cap. 313A 第 23 條 (6A) 款 + 第 5 附表第 5-8 段：機場進場區 1, 2, 3, 4 為絕對禁區（除非處長批准）。Areas 5-6 限船高 ≤15m；7-8 限船高 ≤30m。Area 3 已於 2022-05-31 依 MDN 105/2022 修訂為 18 點多邊形。違者第 3 級罰款 HK$10,000 + 6 個月監禁。",
    "image_required": true,
    "image_status": "available",
    "image_asset_path": "assets/img/imgQA22.png",
    "image_webp_asset_path": "assets/img/imgQA22.webp",
    "image_alt_tc": "PDF 圖示為赤鱲角機場周邊水域，標示 8 個 Hong Kong International Airport Approach Areas (HKIAAA) 1-8 區。第 1 區 Sha Lo Wan 沙螺灣（機場西南）；第 2 區 Tung Chung 東涌北；第 3 區機場主西側大型多邊形（2022-05-31 修訂為 18 點）；第 4 區 Sham Shui Kok 深水角（機場北矩形）。",
    "production_score_inclusion": true,
    "source_pdf_url_tc": "https://www.mardep.gov.hk/filemanager/tc/share/pub-services/pdf/PVOC_exam_A_c.pdf",
    "source_pdf_url_en": "https://www.mardep.gov.hk/filemanager/en/share/pub-services/pdf/PVOC_exam_A.pdf"
  },
  {
    "id": "A23",
    "part": "A",
    "q_no": 23,
    "topics": [
      "A7"
    ],
    "stem_tc": "那一種情況下的船隻不應使用政府(公眾)碼頭:",
    "stem_en": "Government (public) piers may not be used by:",
    "options": {
      "A": {
        "text_tc": "上落乘客和行李的船隻。",
        "text_en": "vessels for landing passengers and their baggage."
      },
      "B": {
        "text_tc": "上落貨物的船隻。",
        "text_en": "vessels for loading or discharging cargo."
      },
      "C": {
        "text_tc": "一艘長度30公尺的船隻。",
        "text_en": "a vessel of 30 metres in length."
      },
      "D": {
        "text_tc": "以上答案皆是。",
        "text_en": "All of the above"
      }
    },
    "answer": "B",
    "explanation_tc": "公眾碼頭只准上落乘客及其行李，不可用作裝卸貨物。長度限制視個別碼頭規定。",
    "image_required": false,
    "image_status": "not_required",
    "image_asset_path": null,
    "image_webp_asset_path": null,
    "image_alt_tc": null,
    "production_score_inclusion": true,
    "source_pdf_url_tc": "https://www.mardep.gov.hk/filemanager/tc/share/pub-services/pdf/PVOC_exam_A_c.pdf",
    "source_pdf_url_en": "https://www.mardep.gov.hk/filemanager/en/share/pub-services/pdf/PVOC_exam_A.pdf"
  },
  {
    "id": "A24",
    "part": "A",
    "q_no": 24,
    "topics": [
      "A4"
    ],
    "stem_tc": "船的羅經航向為040度，從船上的自差表查得這航向的自差為2度(東)，已知磁差為2度(西)。你會用甚麽真航向繪畫在海圖上？",
    "stem_en": "You are heading 040 degrees compass. Deviation from the table against ship's heading is given as 2 degrees west. Variation is known to be 2 degrees east. What is the true course you have to draw on chart?",
    "options": {
      "A": {
        "text_tc": "038 度。",
        "text_en": "038 degrees"
      },
      "B": {
        "text_tc": "042 度。",
        "text_en": "042 degrees"
      },
      "C": {
        "text_tc": "036 度。",
        "text_en": "036 degrees"
      },
      "D": {
        "text_tc": "040 度。",
        "text_en": "040 degrees"
      }
    },
    "answer": "D",
    "explanation_tc": "Compass→Magnetic→True：原題 Deviation 給 2°W、Variation 2°E。但中文版題幹寫 Deviation 2°(東)、Variation 2°(西) — 兩版有出入。以官方答案 D = 040° 嚟反推：兩個 corrections 抵銷、Compass = True。CADET 規律：Compass ADd East（東加）→ True。",
    "image_required": false,
    "image_status": "not_required",
    "image_asset_path": null,
    "image_webp_asset_path": null,
    "image_alt_tc": null,
    "production_score_inclusion": true,
    "source_pdf_url_tc": "https://www.mardep.gov.hk/filemanager/tc/share/pub-services/pdf/PVOC_exam_A_c.pdf",
    "source_pdf_url_en": "https://www.mardep.gov.hk/filemanager/en/share/pub-services/pdf/PVOC_exam_A.pdf"
  },
  {
    "id": "A25",
    "part": "A",
    "q_no": 25,
    "topics": [
      "A8",
      "A9"
    ],
    "stem_tc": "下列那些訊號可用作海上遇險求救? (1) 白色煙霧訊號。 (2) 在船上發出火焰。 (3) 連續不斷鳴響鳴汽笛。 (4) 垂直懸掛三個黑球。",
    "stem_en": "Which of the following Signals can be used as a distress signal? (1) A white smoke signal. (2) Flames on the vessel. (3) Continuous sounding on the whistle. (4) Hoist 3 black balls in a vertical line.",
    "options": {
      "A": {
        "text_tc": "衹有(1) 和(2)。",
        "text_en": "(1) and (2) only"
      },
      "B": {
        "text_tc": "衹有(2) 和(3)。",
        "text_en": "(2) and (3) only"
      },
      "C": {
        "text_tc": "(1) (2) 和(3)。",
        "text_en": "(1) (2) and (3)"
      },
      "D": {
        "text_tc": "(1) (2) (3) 和(4)。",
        "text_en": "(1) (2) (3) and (4)"
      }
    },
    "answer": "B",
    "explanation_tc": "Distress signals (COLREGS Annex IV)：橙色煙（不是白煙！）、船上火焰、持續鳴笛 ✓。三個黑球垂直排列係 'vessel aground'（擱淺）信號，不是遇險。所以 (2)+(3) 啱。",
    "image_required": false,
    "image_status": "not_required",
    "image_asset_path": null,
    "image_webp_asset_path": null,
    "image_alt_tc": null,
    "production_score_inclusion": true,
    "source_pdf_url_tc": "https://www.mardep.gov.hk/filemanager/tc/share/pub-services/pdf/PVOC_exam_A_c.pdf",
    "source_pdf_url_en": "https://www.mardep.gov.hk/filemanager/en/share/pub-services/pdf/PVOC_exam_A.pdf"
  },
  {
    "id": "A26",
    "part": "A",
    "q_no": 26,
    "topics": [
      "A7"
    ],
    "stem_tc": "你的船離開銅鑼灣後，往鯉魚門方向航行，看見正前方有一個圓錐形的綠色浮標時，你將會在該浮標的那一邊駛過?",
    "stem_en": "Your vessel is proceeding from Causeway Bay towards Lei Yue Mun, a green colour conical buoy is observed at right ahead, which side of the buoy should you pass?",
    "options": {
      "A": {
        "text_tc": "轉航向和以船的左舷通過該浮標。",
        "text_en": "alter course and pass the buoy on ship's port side."
      },
      "B": {
        "text_tc": "轉航向和以船的右舷通過該浮標。",
        "text_en": "alter course and pass the buoy on ship's starboard side."
      },
      "C": {
        "text_tc": "可在浮標的任何一面駛過。",
        "text_en": "pass on either side of the buoy."
      },
      "D": {
        "text_tc": "轉航向和在浮標的北面駛過。",
        "text_en": "alter course and pass on the northern side of the buoy."
      }
    },
    "answer": "A",
    "explanation_tc": "由銅鑼灣去鯉魚門 = 離港東行。IALA Region A：離港時綠標應在 port 側。記憶法：『紅左綠右進港』，離港相反。",
    "image_required": false,
    "image_status": "not_required",
    "image_asset_path": null,
    "image_webp_asset_path": null,
    "image_alt_tc": null,
    "production_score_inclusion": true,
    "source_pdf_url_tc": "https://www.mardep.gov.hk/filemanager/tc/share/pub-services/pdf/PVOC_exam_A_c.pdf",
    "source_pdf_url_en": "https://www.mardep.gov.hk/filemanager/en/share/pub-services/pdf/PVOC_exam_A.pdf"
  },
  {
    "id": "A27",
    "part": "A",
    "q_no": 27,
    "topics": [
      "A7",
      "A4"
    ],
    "stem_tc": "在一艘以真航向010 行駛的船上，你看見這個浮標在船的正前方。你應；",
    "stem_en": "You are on board of a vessel and steering a true course of 010°, a buoy is observed at right ahead. You should:",
    "options": {
      "A": {
        "text_tc": "保持這浮標在船的右舷駛過。",
        "text_en": "pass the buoy on your starboard side."
      },
      "B": {
        "text_tc": "保持這浮標在船的左舷駛過。",
        "text_en": "pass the buoy on your port side."
      },
      "C": {
        "text_tc": "停船和確定你的船位。",
        "text_en": "stop the vessel and check your position."
      },
      "D": {
        "text_tc": "如沒有其他船隻，可在你船的任何一舷駛過。",
        "text_en": "pass the buoy on either side of your vessel if there is no other ship in the vicinity."
      }
    },
    "answer": "B",
    "explanation_tc": "010° 接近正北 = 進港方向。配合圖示浮標類型，IALA Region A 進港 → 紅標 port 側通過。",
    "image_required": true,
    "image_status": "available",
    "image_asset_path": "assets/img/imgQA27.png",
    "image_webp_asset_path": "assets/img/imgQA27.webp",
    "image_alt_tc": "PDF 圖示為某類型浮標（紅色 can-shaped 或紅頂柱形），考生需識別 IALA Region A lateral mark。",
    "production_score_inclusion": true,
    "source_pdf_url_tc": "https://www.mardep.gov.hk/filemanager/tc/share/pub-services/pdf/PVOC_exam_A_c.pdf",
    "source_pdf_url_en": "https://www.mardep.gov.hk/filemanager/en/share/pub-services/pdf/PVOC_exam_A.pdf"
  },
  {
    "id": "A28",
    "part": "A",
    "q_no": 28,
    "topics": [
      "A7"
    ],
    "stem_tc": "在晚上，你的船以羅經航向275 行駛，你看見一個浮標在你正船頭發出連續甚快閃的白色閃光(大约每分鐘閃光100次)。你會採取甚麼行動?",
    "stem_en": "You are on board of a vessel and steering a course of 070°(T), this buoy was observed at right ahead of you. You should: [Note: TC version of this question differs — TC asks about compass course 275° at night with rapidly flashing buoy]",
    "options": {
      "A": {
        "text_tc": "轉航向左而駛過它。",
        "text_en": "pass the buoy on your starboard side."
      },
      "B": {
        "text_tc": "轉航向右，使浮標在船隻的左舷通過。",
        "text_en": "pass the buoy on your port side."
      },
      "C": {
        "text_tc": "停船。向航行監察中心請示。",
        "text_en": "stop the vessel and check your position."
      },
      "D": {
        "text_tc": "如沒有其他船隻，可在你船的任何一舷駛過。",
        "text_en": "pass the buoy on either side of your vessel if no other ship is in the vicinity."
      }
    },
    "answer": "B",
    "explanation_tc": "Note: EN 同 TC 兩版題幹有差異！TC 版考夜晚甚快閃白光（每分鐘約 100 閃，VQ rhythm）= isolated danger 或 cardinal mark。275° 西行，圖示浮標 → 向右轉令浮標在左舷通過。EN 版考 070°(T) 浮標方位識別。考試會出現呢類兩版稍有出入嘅情況；以官方答案 B 為準。",
    "image_required": false,
    "image_status": "not_required",
    "image_asset_path": null,
    "image_webp_asset_path": null,
    "image_alt_tc": null,
    "production_score_inclusion": true,
    "source_pdf_url_tc": "https://www.mardep.gov.hk/filemanager/tc/share/pub-services/pdf/PVOC_exam_A_c.pdf",
    "source_pdf_url_en": "https://www.mardep.gov.hk/filemanager/en/share/pub-services/pdf/PVOC_exam_A.pdf"
  },
  {
    "id": "A29",
    "part": "A",
    "q_no": 29,
    "topics": [
      "A13"
    ],
    "stem_tc": "你船的航向為南東南(SSE)，船上有一乘客墮海，在安全情况下你應該駕駛甚麼航向來搜索該名墮海乘客?",
    "stem_en": "You are steering on a compass course of South-southeast (SSE), and you found a passenger had fallen overboard. Under safe conditions what reciprocal course should you steer for searching the missing person?",
    "options": {
      "A": {
        "text_tc": "東北(NE)",
        "text_en": "Northeast (NE)"
      },
      "B": {
        "text_tc": "北西北(NNW)",
        "text_en": "North-northwest (NNW)"
      },
      "C": {
        "text_tc": "南西南(SSW)",
        "text_en": "South-southwest (SSW)"
      },
      "D": {
        "text_tc": "西南(SW)",
        "text_en": "Southwest (SW)"
      }
    },
    "answer": "B",
    "explanation_tc": "Reciprocal course = 原航向 + 180°。SSE = 157.5°，+180° = 337.5° = NNW。MOB 救援需要折返，所以走相反方向。",
    "image_required": false,
    "image_status": "not_required",
    "image_asset_path": null,
    "image_webp_asset_path": null,
    "image_alt_tc": null,
    "production_score_inclusion": true,
    "source_pdf_url_tc": "https://www.mardep.gov.hk/filemanager/tc/share/pub-services/pdf/PVOC_exam_A_c.pdf",
    "source_pdf_url_en": "https://www.mardep.gov.hk/filemanager/en/share/pub-services/pdf/PVOC_exam_A.pdf"
  },
  {
    "id": "A30",
    "part": "A",
    "q_no": 30,
    "topics": [
      "A4"
    ],
    "stem_tc": "下列那些岸上物體適合用作觀測重疊方位? (1) 一座山與一間煉油廠成一直線。 (2) 一支煙囪與一座雷達塔成一直線。 (3) 一座燈塔與顯眼的山峰成一直線。 (4) 一座橋與一間船廠成一直線。",
    "stem_en": "Which of the following shore objects are favourable for transit bearing taking? (1) A mountain and a petroleum refinery are in line. (2) A chimney and a radar tower are in line. (3) A light house and a conspicuous mountain peak are in line. (4) A bridge and a shipyard are in line.",
    "options": {
      "A": {
        "text_tc": "(1) 和 (3)。",
        "text_en": "(1) and (3)"
      },
      "B": {
        "text_tc": "(2) 和 (3)。",
        "text_en": "(2) and (3)"
      },
      "C": {
        "text_tc": "(2) 和 (4)。",
        "text_en": "(2) and (4)"
      },
      "D": {
        "text_tc": "(1) 和 (4)。",
        "text_en": "(1) and (4)"
      }
    },
    "answer": "B",
    "explanation_tc": "Transit bearing 需要兩個點狀、固定、清晰嘅目標。煙囪+雷達塔（兩個都係尖頂點）、燈塔+山峰（兩個都係明顯點）= 適合。山脈、煉油廠、橋、船廠範圍大或邊界模糊 = 不適合。",
    "image_required": false,
    "image_status": "not_required",
    "image_asset_path": null,
    "image_webp_asset_path": null,
    "image_alt_tc": null,
    "production_score_inclusion": true,
    "source_pdf_url_tc": "https://www.mardep.gov.hk/filemanager/tc/share/pub-services/pdf/PVOC_exam_A_c.pdf",
    "source_pdf_url_en": "https://www.mardep.gov.hk/filemanager/en/share/pub-services/pdf/PVOC_exam_A.pdf"
  },
  {
    "id": "A31",
    "part": "A",
    "q_no": 31,
    "topics": [
      "A1"
    ],
    "stem_tc": "你的船是一艘右轉單螺旋槳的船隻將會在沒有風和水流的情况下靠泊碼頭，你會選擇下列那種方法靠泊才可以利用螺旋槳的橫推力:",
    "stem_en": "Your ship is a single-screw with right-handed propeller and going to moor to a pier in calm water, which of the following methods would you choose in order to make use of the transverse thrust of the propeller:",
    "options": {
      "A": {
        "text_tc": "右舷靠泊碼頭。",
        "text_en": "ship's starboard side moor to the pier."
      },
      "B": {
        "text_tc": "船頭靠泊碼頭。",
        "text_en": "ship's head moor to the pier."
      },
      "C": {
        "text_tc": "船尾靠泊碼頭。",
        "text_en": "ship's stern moor to the pier."
      },
      "D": {
        "text_tc": "左舷靠泊碼頭。",
        "text_en": "ship's portside moor to the pier."
      }
    },
    "answer": "D",
    "explanation_tc": "右旋單槳船倒車時，船尾 transverse thrust 會將船尾推向 port 側，自然將船嘅 port 側貼向碼頭。所以 port side moor 最易。",
    "image_required": false,
    "image_status": "not_required",
    "image_asset_path": null,
    "image_webp_asset_path": null,
    "image_alt_tc": null,
    "production_score_inclusion": true,
    "source_pdf_url_tc": "https://www.mardep.gov.hk/filemanager/tc/share/pub-services/pdf/PVOC_exam_A_c.pdf",
    "source_pdf_url_en": "https://www.mardep.gov.hk/filemanager/en/share/pub-services/pdf/PVOC_exam_A.pdf"
  },
  {
    "id": "A32",
    "part": "A",
    "q_no": 32,
    "topics": [
      "A1"
    ],
    "stem_tc": "船隻靠泊碼頭時總是逆流而泊,因為:",
    "stem_en": "Ships always go against the current when berthing to a pier, because of:",
    "options": {
      "A": {
        "text_tc": "節省燃油。",
        "text_en": "saving fuel."
      },
      "B": {
        "text_tc": "水流令船的主機更容易受到操控。",
        "text_en": "the effect of current makes the vessel's main engines more easy to control."
      },
      "C": {
        "text_tc": "水流會將船隻推向碼頭。",
        "text_en": "the current will push the vessel towards the berth."
      },
      "D": {
        "text_tc": "水流令船隻更易受到控制。",
        "text_en": "the current will improve the maneuverability of the vessel."
      }
    },
    "answer": "D",
    "explanation_tc": "頂流靠泊：水流相對船產生額外舵效，提升操控性，可以更精準控制船速同位置。順流靠泊危險（船速 = 引擎 + 流，難停）。",
    "image_required": false,
    "image_status": "not_required",
    "image_asset_path": null,
    "image_webp_asset_path": null,
    "image_alt_tc": null,
    "production_score_inclusion": true,
    "source_pdf_url_tc": "https://www.mardep.gov.hk/filemanager/tc/share/pub-services/pdf/PVOC_exam_A_c.pdf",
    "source_pdf_url_en": "https://www.mardep.gov.hk/filemanager/en/share/pub-services/pdf/PVOC_exam_A.pdf"
  },
  {
    "id": "A33",
    "part": "A",
    "q_no": 33,
    "topics": [
      "A1",
      "A12"
    ],
    "stem_tc": "在惡劣天氣中，你怎樣操控你的船隻?",
    "stem_en": "How you handle your vessel in bad weather?",
    "options": {
      "A": {
        "text_tc": "以正常船速順著海浪行駛。",
        "text_en": "with the sea abaft the beam and steaming at a normal speed."
      },
      "B": {
        "text_tc": "停車，讓船隻隨着海浪漂流。",
        "text_en": "stop the engines and let the vessel adrift."
      },
      "C": {
        "text_tc": "以持續的高速用正船頭頂著海浪行駛。",
        "text_en": "head to the sea at constant high speed."
      },
      "D": {
        "text_tc": "減慢船速和用船頭側頂著海浪行駛。",
        "text_en": "with the sea on the bow and steaming at a reduced speed."
      }
    },
    "answer": "D",
    "explanation_tc": "惡劣天氣：浪向 bow（迎首約 20°-30°）+ 減速。可避免 broaching、pitch poling、過度 slamming。",
    "image_required": false,
    "image_status": "not_required",
    "image_asset_path": null,
    "image_webp_asset_path": null,
    "image_alt_tc": null,
    "production_score_inclusion": true,
    "source_pdf_url_tc": "https://www.mardep.gov.hk/filemanager/tc/share/pub-services/pdf/PVOC_exam_A_c.pdf",
    "source_pdf_url_en": "https://www.mardep.gov.hk/filemanager/en/share/pub-services/pdf/PVOC_exam_A.pdf"
  },
  {
    "id": "A34",
    "part": "A",
    "q_no": 34,
    "topics": [
      "A12",
      "A13"
    ],
    "stem_tc": "你的船隻是繫泊在擠迫水域內的浮泡上，當颱風快要來臨時，你應採取甚麽預防措施?",
    "stem_en": "Your boat has been moored to a buoy in congested waters. What precaution/precautions would you take prior to the approach of a typhoon?",
    "options": {
      "A": {
        "text_tc": "船旁放置多幾個碰撞墊。",
        "text_en": "Place more fenders on the sides."
      },
      "B": {
        "text_tc": "將甲板上的去水孔封敝。",
        "text_en": "to seal all scuppers on deck."
      },
      "C": {
        "text_tc": "在船尾下錨。",
        "text_en": "Drop the stern anchor."
      },
      "D": {
        "text_tc": "使用較長的纜繩來繫泊。",
        "text_en": "Use a longer mooring rope to secure to the buoy."
      }
    },
    "answer": "A",
    "explanation_tc": "颱風前繫於 buoy 喺擁擠水域：附近船會劇烈搖擺，最大風險係船與船相撞。所以加大 fender 係優先。",
    "image_required": false,
    "image_status": "not_required",
    "image_asset_path": null,
    "image_webp_asset_path": null,
    "image_alt_tc": null,
    "production_score_inclusion": true,
    "source_pdf_url_tc": "https://www.mardep.gov.hk/filemanager/tc/share/pub-services/pdf/PVOC_exam_A_c.pdf",
    "source_pdf_url_en": "https://www.mardep.gov.hk/filemanager/en/share/pub-services/pdf/PVOC_exam_A.pdf"
  },
  {
    "id": "A35",
    "part": "A",
    "q_no": 35,
    "topics": [
      "A9",
      "B21"
    ],
    "stem_tc": "那一類滅火筒適用於電器所導致的火災?",
    "stem_en": "Which type(s) of fire extinguisher is/are the best to deal with an electrical fire?",
    "options": {
      "A": {
        "text_tc": "水。",
        "text_en": "Water"
      },
      "B": {
        "text_tc": "二氧化碳。",
        "text_en": "Carbon dioxide (CO2)."
      },
      "C": {
        "text_tc": "泡沫。",
        "text_en": "Dry powder"
      },
      "D": {
        "text_tc": "以上答案皆是。",
        "text_en": "All of the above"
      }
    },
    "answer": "B",
    "explanation_tc": "電氣火警 (Class C/E)：CO₂ 最佳（不導電、無殘留、唔損壞電子設備）。注意中文版 (C) 係『泡沫』，但答案 B 仍正確。",
    "image_required": false,
    "image_status": "not_required",
    "image_asset_path": null,
    "image_webp_asset_path": null,
    "image_alt_tc": null,
    "production_score_inclusion": true,
    "source_pdf_url_tc": "https://www.mardep.gov.hk/filemanager/tc/share/pub-services/pdf/PVOC_exam_A_c.pdf",
    "source_pdf_url_en": "https://www.mardep.gov.hk/filemanager/en/share/pub-services/pdf/PVOC_exam_A.pdf"
  },
  {
    "id": "A36",
    "part": "A",
    "q_no": 36,
    "topics": [
      "A9"
    ],
    "stem_tc": "在遊樂船上救生設備的擺放位置一定要:",
    "stem_en": "The locations of life-saving appliances on board a pleasure vessel must be:",
    "options": {
      "A": {
        "text_tc": "分佈在船的兩舷。",
        "text_en": "distributed on both sides of vessel."
      },
      "B": {
        "text_tc": "可供即時使用及放在易於取用的位置。",
        "text_en": "ready for immediate use and placed in a position easily accessible."
      },
      "C": {
        "text_tc": "按照船長的要求而定。",
        "text_en": "according to the determinations of ship's master."
      },
      "D": {
        "text_tc": "放在座位下的容器裏。",
        "text_en": "placed inside a container under seats."
      }
    },
    "answer": "B",
    "explanation_tc": "救生設備必須隨時可用、易於取得。封箱底下、船長隨意分配 = 緊急時取唔到 = 失去意義。",
    "image_required": false,
    "image_status": "not_required",
    "image_asset_path": null,
    "image_webp_asset_path": null,
    "image_alt_tc": null,
    "production_score_inclusion": true,
    "source_pdf_url_tc": "https://www.mardep.gov.hk/filemanager/tc/share/pub-services/pdf/PVOC_exam_A_c.pdf",
    "source_pdf_url_en": "https://www.mardep.gov.hk/filemanager/en/share/pub-services/pdf/PVOC_exam_A.pdf"
  },
  {
    "id": "A37",
    "part": "A",
    "q_no": 37,
    "topics": [
      "A13"
    ],
    "stem_tc": "你的船隻在淺水區航行時,因失去船舵而不能控制船隻。(i) 你會首先採取什麼行動? (ii) 陳述採取上述行動的理由。",
    "stem_en": "Your vessel is not under command due to loss of rudder while navigating in an area of shallow water. (i) What is your first action to take? (ii) State a reason for taking the above action.",
    "options": {
      "A": {
        "text_tc": "(i) 立即下錨。(ii) 防止船隻擱淺。",
        "text_en": "(i) drop the anchor immediately. (ii) stop the vessel from running aground."
      },
      "B": {
        "text_tc": "(i) 全速後退。(ii) 遠離淺水區。",
        "text_en": "(i) go full astern. (ii) keep away from the shallow water."
      },
      "C": {
        "text_tc": "(i) 關掉引擎並懸掛失控船信號。(ii) 警告任何接近的船隻。",
        "text_en": "(i) stop the engine and display signals for vessel not under command. (ii) give warning to any approaching vessel."
      },
      "D": {
        "text_tc": "(i) 發出遇險訊號。(ii) 要求附近船隻提供立即援助。",
        "text_en": "(i) send distress signals. (ii) request immediate assistance from vessels nearby."
      }
    },
    "answer": "A",
    "explanation_tc": "失舵 + 淺水 = 立即下錨防擱淺。擱淺對船嘅破壞遠大於僅僅漂流。下錨後再顯示 NUC 信號（兩紅燈或兩黑球）+ 通知附近船同 VTC。",
    "image_required": false,
    "image_status": "not_required",
    "image_asset_path": null,
    "image_webp_asset_path": null,
    "image_alt_tc": null,
    "production_score_inclusion": true,
    "source_pdf_url_tc": "https://www.mardep.gov.hk/filemanager/tc/share/pub-services/pdf/PVOC_exam_A_c.pdf",
    "source_pdf_url_en": "https://www.mardep.gov.hk/filemanager/en/share/pub-services/pdf/PVOC_exam_A.pdf"
  },
  {
    "id": "A38",
    "part": "A",
    "q_no": 38,
    "topics": [
      "A13"
    ],
    "stem_tc": "你收到報告有人從船尾墮海。你會首先採取甚麼行動來標示他/她的位置？",
    "stem_en": "You have been reported that a person falling into water from the ship's stern. What is the first action that you would take as regard to mark his/her location?",
    "options": {
      "A": {
        "text_tc": "拋下救生圈。",
        "text_en": "Throw a lifebuoy."
      },
      "B": {
        "text_tc": "召警協助。",
        "text_en": "Report to Marine Police and ask for assistance."
      },
      "C": {
        "text_tc": "派出一個精於游泳的泳手落水。",
        "text_en": "Send a good swimmer to water."
      },
      "D": {
        "text_tc": "派出一個繫著繩的泳手落水。",
        "text_en": "Send a swimmer with a life line to water."
      }
    },
    "answer": "A",
    "explanation_tc": "MOB 第一動作：拋救生圈（最好帶煙信號）標示位置 + 提供浮力。同時派人專責盯住落水者。次序：Shout, Throw, Point。再喊 'Man Overboard!'，啟動 Williamson Turn。",
    "image_required": false,
    "image_status": "not_required",
    "image_asset_path": null,
    "image_webp_asset_path": null,
    "image_alt_tc": null,
    "production_score_inclusion": true,
    "source_pdf_url_tc": "https://www.mardep.gov.hk/filemanager/tc/share/pub-services/pdf/PVOC_exam_A_c.pdf",
    "source_pdf_url_en": "https://www.mardep.gov.hk/filemanager/en/share/pub-services/pdf/PVOC_exam_A.pdf"
  },
  {
    "id": "A39",
    "part": "A",
    "q_no": 39,
    "topics": [
      "A14"
    ],
    "stem_tc": "下列那些意外一定要向海事處作出書面報告?",
    "stem_en": "Which of the following accidents should be reported to the Marine Department in writing?",
    "options": {
      "A": {
        "text_tc": "船上有船員生病。",
        "text_en": "a crew on board was sick."
      },
      "B": {
        "text_tc": "船上有乘客的錢包被人偷了。",
        "text_en": "the wallet of a passenger on board was stolen."
      },
      "C": {
        "text_tc": "船上有人吵架。",
        "text_en": "there was a quarrel on board."
      },
      "D": {
        "text_tc": "船隻與港口設施碰撞。",
        "text_en": "vessel collided with a port facility."
      }
    },
    "answer": "D",
    "explanation_tc": "Reportable marine accidents（Cap.548）：碰撞、擱淺、火警、人員傷亡、污染、船舶失蹤。其他選項屬一般或刑事事務，不需向海事處書面報告。",
    "image_required": false,
    "image_status": "not_required",
    "image_asset_path": null,
    "image_webp_asset_path": null,
    "image_alt_tc": null,
    "production_score_inclusion": true,
    "source_pdf_url_tc": "https://www.mardep.gov.hk/filemanager/tc/share/pub-services/pdf/PVOC_exam_A_c.pdf",
    "source_pdf_url_en": "https://www.mardep.gov.hk/filemanager/en/share/pub-services/pdf/PVOC_exam_A.pdf"
  },
  {
    "id": "A40",
    "part": "A",
    "q_no": 40,
    "topics": [
      "A12"
    ],
    "stem_tc": "下列那些因素决定波浪的高度？",
    "stem_en": "Which of the following factors determine the wave height?",
    "options": {
      "A": {
        "text_tc": "吹程。",
        "text_en": "fetch."
      },
      "B": {
        "text_tc": "海水温度。",
        "text_en": "sea water temperature"
      },
      "C": {
        "text_tc": "潮汐方向。",
        "text_en": "tidal direction"
      },
      "D": {
        "text_tc": "濕度。",
        "text_en": "humidity"
      }
    },
    "answer": "A",
    "explanation_tc": "Fetch（風吹過嘅水域距離）係決定浪高嘅最關鍵因素，連同 wind speed 同 duration 構成 FSD 三大因素。",
    "image_required": false,
    "image_status": "not_required",
    "image_asset_path": null,
    "image_webp_asset_path": null,
    "image_alt_tc": null,
    "production_score_inclusion": true,
    "source_pdf_url_tc": "https://www.mardep.gov.hk/filemanager/tc/share/pub-services/pdf/PVOC_exam_A_c.pdf",
    "source_pdf_url_en": "https://www.mardep.gov.hk/filemanager/en/share/pub-services/pdf/PVOC_exam_A.pdf"
  },
  {
    "id": "B1",
    "part": "B",
    "q_no": 1,
    "topics": [
      "B15"
    ],
    "stem_tc": "右圖表示，內燃機正在那一個動作行程？",
    "stem_en": "Reference from the picture; which action (stroke) of the engine is being run?",
    "options": {
      "A": {
        "text_tc": "進氣",
        "text_en": "Intake"
      },
      "B": {
        "text_tc": "壓縮",
        "text_en": "Compression"
      },
      "C": {
        "text_tc": "動力",
        "text_en": "Power"
      },
      "D": {
        "text_tc": "排氣",
        "text_en": "Exhaust"
      }
    },
    "answer": "D",
    "explanation_tc": "圖中活塞向上 + 排氣門開 = 排氣衝程。記憶四衝程：Suck、Squeeze、Bang、Blow。",
    "image_required": true,
    "image_status": "available",
    "image_asset_path": "assets/img/imgQB1.png",
    "image_webp_asset_path": "assets/img/imgQB1.webp",
    "image_alt_tc": "4-stroke 內燃機氣缸剖面圖，顯示活塞向上 + 排氣門開啟 = 排氣衝程。",
    "production_score_inclusion": true,
    "source_pdf_url_tc": "https://www.mardep.gov.hk/filemanager/tc/share/pub-services/pdf/PVOC_exam_B_c.pdf",
    "source_pdf_url_en": "https://www.mardep.gov.hk/filemanager/en/share/pub-services/pdf/PVOC_exam_B.pdf"
  },
  {
    "id": "B2",
    "part": "B",
    "q_no": 2,
    "topics": [
      "B15"
    ],
    "stem_tc": "與濕式氣缸套比較，乾式氣缸套：(i) 缸套不與冷卻水直接接觸 (ii) 不需要潤滑油潤滑 (iii) 缸套壁比濕式氣缸較薄 (iv) 由空氣直接冷卻",
    "stem_en": "Compare with wet type cylinder liner, dry type cylinder liner: (i) no contact between liner and cooling water (ii) does not require lubrication (iii) have relatively thin wall (iv) is directly cooled by air",
    "options": {
      "A": {
        "text_tc": "(i) 和(iv)",
        "text_en": "(i) and (iv)"
      },
      "B": {
        "text_tc": "(ii)",
        "text_en": "(ii)"
      },
      "C": {
        "text_tc": "(i) 和(ii)",
        "text_en": "(i) and (ii)"
      },
      "D": {
        "text_tc": "(i) 和(iii)",
        "text_en": "(i) and (iii)"
      }
    },
    "answer": "D",
    "explanation_tc": "Dry liner：(i) 不接觸冷卻水（套外仍有 engine block 壁，水喺外面）✓；(iii) 壁較薄（因為靠 block 支撐）✓。仍需潤滑、仍係水冷。",
    "image_required": false,
    "image_status": "not_required",
    "image_asset_path": null,
    "image_webp_asset_path": null,
    "image_alt_tc": null,
    "production_score_inclusion": true,
    "source_pdf_url_tc": "https://www.mardep.gov.hk/filemanager/tc/share/pub-services/pdf/PVOC_exam_B_c.pdf",
    "source_pdf_url_en": "https://www.mardep.gov.hk/filemanager/en/share/pub-services/pdf/PVOC_exam_B.pdf"
  },
  {
    "id": "B3",
    "part": "B",
    "q_no": 3,
    "topics": [
      "B15"
    ],
    "stem_tc": "一部汽油機在起動時，節氣門的作用是 (i) 使燃油／空氣混合物變成較濃厚 (ii) 令火花塞較易燃點燃油／空氣混合物",
    "stem_en": "When starting a petrol engine, the throttle is used to: (i) give a richer fuel/air mixture (ii) make the plug easier to ignite the fuel/air mixture",
    "options": {
      "A": {
        "text_tc": "(i)",
        "text_en": "(i)"
      },
      "B": {
        "text_tc": "(ii)",
        "text_en": "(ii)"
      },
      "C": {
        "text_tc": "(i) 及 (ii) 全對",
        "text_en": "(i) and (ii) are correct"
      },
      "D": {
        "text_tc": "(i) 及 (ii) 全不對",
        "text_en": "(i) and (ii) are not correct"
      }
    },
    "answer": "D",
    "explanation_tc": "啟動汽油機係用 choke（冷阻），唔係 throttle。Choke 限制空氣 → 油氣混合比變濃。Throttle 同時控制空氣+油、影響速度而非混合比。",
    "image_required": false,
    "image_status": "not_required",
    "image_asset_path": null,
    "image_webp_asset_path": null,
    "image_alt_tc": null,
    "production_score_inclusion": true,
    "source_pdf_url_tc": "https://www.mardep.gov.hk/filemanager/tc/share/pub-services/pdf/PVOC_exam_B_c.pdf",
    "source_pdf_url_en": "https://www.mardep.gov.hk/filemanager/en/share/pub-services/pdf/PVOC_exam_B.pdf"
  },
  {
    "id": "B4",
    "part": "B",
    "q_no": 4,
    "topics": [
      "B15"
    ],
    "stem_tc": "一部四衝程汽油機，分火器的速度為:",
    "stem_en": "For a 4-stroke petrol engine, the distributor runs at:",
    "options": {
      "A": {
        "text_tc": "主機速度一樣",
        "text_en": "same speed as the engine"
      },
      "B": {
        "text_tc": "主機速度一半",
        "text_en": "half of the engine speed"
      },
      "C": {
        "text_tc": "主機速度兩倍",
        "text_en": "twice of the engine speed"
      },
      "D": {
        "text_tc": "主機速度四倍",
        "text_en": "four times of the engine speed"
      }
    },
    "answer": "B",
    "explanation_tc": "4-stroke 完成一個循環需要曲軸轉 2 圈，但每個氣缸只點火一次。Distributor 同步點火頻率，所以以曲軸 1/2 速運轉。",
    "image_required": false,
    "image_status": "not_required",
    "image_asset_path": null,
    "image_webp_asset_path": null,
    "image_alt_tc": null,
    "production_score_inclusion": true,
    "source_pdf_url_tc": "https://www.mardep.gov.hk/filemanager/tc/share/pub-services/pdf/PVOC_exam_B_c.pdf",
    "source_pdf_url_en": "https://www.mardep.gov.hk/filemanager/en/share/pub-services/pdf/PVOC_exam_B.pdf"
  },
  {
    "id": "B5",
    "part": "B",
    "q_no": 5,
    "topics": [
      "B15"
    ],
    "stem_tc": "在柴油機共軌燃油噴射系統中，燃油噴射壓力是由____調節。",
    "stem_en": "In diesel engine common rail fuel injection system, the injection pressure is regulated by:",
    "options": {
      "A": {
        "text_tc": "高壓燃油泵",
        "text_en": "High pressure pump"
      },
      "B": {
        "text_tc": "高壓燃油積累管",
        "text_en": "High pressure accumulator"
      },
      "C": {
        "text_tc": "噴油器",
        "text_en": "Fuel injector"
      },
      "D": {
        "text_tc": "限制閥",
        "text_en": "Limiting valve"
      }
    },
    "answer": "D",
    "explanation_tc": "Common rail：高壓泵打油到 rail（蓄壓器），但壓力上限由 limiting valve 調節，多餘油返回油缸。Injector 只噴射、唔調壓。",
    "image_required": false,
    "image_status": "not_required",
    "image_asset_path": null,
    "image_webp_asset_path": null,
    "image_alt_tc": null,
    "production_score_inclusion": true,
    "source_pdf_url_tc": "https://www.mardep.gov.hk/filemanager/tc/share/pub-services/pdf/PVOC_exam_B_c.pdf",
    "source_pdf_url_en": "https://www.mardep.gov.hk/filemanager/en/share/pub-services/pdf/PVOC_exam_B.pdf"
  },
  {
    "id": "B6",
    "part": "B",
    "q_no": 6,
    "topics": [
      "B16",
      "B18"
    ],
    "stem_tc": "如果吸海濾網不潔，但是發動機溫度正常，最可能是什麼原因？(i)溫度錶失靈 (ii)冷卻海水的壓力和温度太低 (iii)發動機以正常轉速運作 (iv)發動機負載很低",
    "stem_en": "If the sea suction strainer is dirty but the engine temperature is normal, what is the possible cause? (i) temperature gauge fails (ii) coolant sea water pressure and temperature too low (iii) engine operated in normal rpm (iv) engine loading is very low",
    "options": {
      "A": {
        "text_tc": "(i) 和(ii)",
        "text_en": "(i) and (ii)"
      },
      "B": {
        "text_tc": "(ii) 和(iii)",
        "text_en": "(ii) and (iii)"
      },
      "C": {
        "text_tc": "(iii) 和(iv)",
        "text_en": "(iii) and (iv)"
      },
      "D": {
        "text_tc": "(i) 和(iv)",
        "text_en": "(i) and (iv)"
      }
    },
    "answer": "D",
    "explanation_tc": "Strainer 髒但溫度正常 = (i) 溫度錶壞咗、實際過熱但顯示正常；或 (iv) 引擎負荷低、冷卻需求少、流量不足都未到過熱。",
    "image_required": false,
    "image_status": "not_required",
    "image_asset_path": null,
    "image_webp_asset_path": null,
    "image_alt_tc": null,
    "production_score_inclusion": true,
    "source_pdf_url_tc": "https://www.mardep.gov.hk/filemanager/tc/share/pub-services/pdf/PVOC_exam_B_c.pdf",
    "source_pdf_url_en": "https://www.mardep.gov.hk/filemanager/en/share/pub-services/pdf/PVOC_exam_B.pdf"
  },
  {
    "id": "B7",
    "part": "B",
    "q_no": 7,
    "topics": [
      "B18"
    ],
    "stem_tc": "柴油發動機船用變速箱中，在高轉速時發生離合碟打滑。可能的原因是變速箱: (i) 工作溫度太低 (ii) 離合碟磨損 (iii) 工作油壓過低",
    "stem_en": "In a diesel engine marine gearbox, clutch slips was occure at high engine speed. What is the possible cause? (i) Operating temperature too low (ii) Clutch disc wear (iii) Operating oil pressure too low",
    "options": {
      "A": {
        "text_tc": "(i) 和(iii)",
        "text_en": "(i) and (iii)"
      },
      "B": {
        "text_tc": "(ii)",
        "text_en": "(ii)"
      },
      "C": {
        "text_tc": "(i), (ii) 和(iii)",
        "text_en": "(i), (ii) and (iii)"
      },
      "D": {
        "text_tc": "(ii) 和(iii)",
        "text_en": "(ii) and (iii)"
      }
    },
    "answer": "D",
    "explanation_tc": "高速 clutch slipping：(ii) 離合片磨損 = 摩擦力不足；(iii) 操作油壓低 = 夾緊力不足。(i) 溫度低唔係 slip 主因。",
    "image_required": false,
    "image_status": "not_required",
    "image_asset_path": null,
    "image_webp_asset_path": null,
    "image_alt_tc": null,
    "production_score_inclusion": true,
    "source_pdf_url_tc": "https://www.mardep.gov.hk/filemanager/tc/share/pub-services/pdf/PVOC_exam_B_c.pdf",
    "source_pdf_url_en": "https://www.mardep.gov.hk/filemanager/en/share/pub-services/pdf/PVOC_exam_B.pdf"
  },
  {
    "id": "B8",
    "part": "B",
    "q_no": 8,
    "topics": [
      "B15"
    ],
    "stem_tc": "內燃引擎使用水冷式的排氣管及消聲器的船隻，注入消聲器的水源，通常是來自 _______。",
    "stem_en": "A boat, the internal combustion engine is using wet-silencer system, the water source inject into the silencer is commonly come from:",
    "options": {
      "A": {
        "text_tc": "引擎海水冷卻系統",
        "text_en": "engine sea water cooling system"
      },
      "B": {
        "text_tc": "獨立海水泵",
        "text_en": "independent sea water pump"
      },
      "C": {
        "text_tc": "獨立淡水水箱",
        "text_en": "independent fresh water tank"
      },
      "D": {
        "text_tc": "引擎淡水冷卻系統",
        "text_en": "main engine freshwater cooling system"
      }
    },
    "answer": "A",
    "explanation_tc": "Wet silencer：海水從引擎 raw water cooling system 引出，混入排氣冷卻+消音+排出。常見於船內機。",
    "image_required": false,
    "image_status": "not_required",
    "image_asset_path": null,
    "image_webp_asset_path": null,
    "image_alt_tc": null,
    "production_score_inclusion": true,
    "source_pdf_url_tc": "https://www.mardep.gov.hk/filemanager/tc/share/pub-services/pdf/PVOC_exam_B_c.pdf",
    "source_pdf_url_en": "https://www.mardep.gov.hk/filemanager/en/share/pub-services/pdf/PVOC_exam_B.pdf"
  },
  {
    "id": "B9",
    "part": "B",
    "q_no": 9,
    "topics": [
      "B15",
      "B16"
    ],
    "stem_tc": "以下那個陳述對發動機氣缸潤滑的作用是[正確]？(i) 冷卻氣缸套 (ii) 帶走燃燒殘留雜質 (iii) 減少噪音 (iv) 減少氣缸套和活塞磨損",
    "stem_en": "Which of the following statement is [correct] about engine cylinder lubrication? (i) Cool the cylinder liner (ii) Remove impurities during combustion (iii) Reduce noise (iv) Reduce cylinder liner and piston wear",
    "options": {
      "A": {
        "text_tc": "(ii), (iii) 和(iv)",
        "text_en": "(ii), (iii) and (iv)"
      },
      "B": {
        "text_tc": "(i), (ii) 和(iv)",
        "text_en": "(i), (ii) and (iv)"
      },
      "C": {
        "text_tc": "(ii) 和(iv)",
        "text_en": "(ii) and (iv)"
      },
      "D": {
        "text_tc": "(iv)",
        "text_en": "(iv)"
      }
    },
    "answer": "A",
    "explanation_tc": "氣缸潤滑作用：(ii) 帶走燃燒雜質、(iii) 減噪音、(iv) 減磨損。(i) 冷卻 × — 係 cooling system 嘅工作。",
    "image_required": false,
    "image_status": "not_required",
    "image_asset_path": null,
    "image_webp_asset_path": null,
    "image_alt_tc": null,
    "production_score_inclusion": true,
    "source_pdf_url_tc": "https://www.mardep.gov.hk/filemanager/tc/share/pub-services/pdf/PVOC_exam_B_c.pdf",
    "source_pdf_url_en": "https://www.mardep.gov.hk/filemanager/en/share/pub-services/pdf/PVOC_exam_B.pdf"
  },
  {
    "id": "B10",
    "part": "B",
    "q_no": 10,
    "topics": [
      "B18"
    ],
    "stem_tc": "柴油發動機低壓燃油管中有空氣會導致：(i) 發動機振動 (ii) 噴油系統過熱 (iii) 發動機啟動故障",
    "stem_en": "Air in the low pressure fuel line of a diesel engine will cause: (i) engine vibration (ii) overheating of the injection system (iii) engine starting failure",
    "options": {
      "A": {
        "text_tc": "(iii)",
        "text_en": "(iii)"
      },
      "B": {
        "text_tc": "(i) 和(ii)",
        "text_en": "(i) and (ii)"
      },
      "C": {
        "text_tc": "(i)",
        "text_en": "(i)"
      },
      "D": {
        "text_tc": "(i) 和(iii)",
        "text_en": "(i) and (iii)"
      }
    },
    "answer": "D",
    "explanation_tc": "低壓油管入空氣：(i) 噴油不均→震動；(iii) 啟動失敗（油泵打不上壓力）。處理方法 = bleed 油路。",
    "image_required": false,
    "image_status": "not_required",
    "image_asset_path": null,
    "image_webp_asset_path": null,
    "image_alt_tc": null,
    "production_score_inclusion": true,
    "source_pdf_url_tc": "https://www.mardep.gov.hk/filemanager/tc/share/pub-services/pdf/PVOC_exam_B_c.pdf",
    "source_pdf_url_en": "https://www.mardep.gov.hk/filemanager/en/share/pub-services/pdf/PVOC_exam_B.pdf"
  },
  {
    "id": "B11",
    "part": "B",
    "q_no": 11,
    "topics": [
      "B16",
      "B18"
    ],
    "stem_tc": "潤滑油壓力異常低的原因有：(i)海水過度冷卻 (ii)曲軸箱中的油位高 (iii)輕微磨損的活塞環和氣缸套 (iv)潤滑油壓力錶失靈 (v)嚴重磨損的潤滑油泵",
    "stem_en": "Causes of abnormal low lube oil pressure are: (i) excessive cooling by seawater (ii) high oil level in crankcase (iii) slightly worn piston rings and cylinder liners (iv) lube oil pressure gauge malfunction (v) extremely worn lube oil pump",
    "options": {
      "A": {
        "text_tc": "(i) 和(ii)",
        "text_en": "(i) and (ii)"
      },
      "B": {
        "text_tc": "(ii) 和(iii)",
        "text_en": "(ii) and (iii)"
      },
      "C": {
        "text_tc": "(iii) 和(iv)",
        "text_en": "(iii) and (iv)"
      },
      "D": {
        "text_tc": "(iv) 和(v)",
        "text_en": "(iv) and (v)"
      }
    },
    "answer": "D",
    "explanation_tc": "潤滑油壓低：(iv) 油壓錶壞、(v) 油泵嚴重磨損。(i) 過度冷卻會令油黏稠、壓力反而升；(iii) 輕微磨損影響不大。",
    "image_required": false,
    "image_status": "not_required",
    "image_asset_path": null,
    "image_webp_asset_path": null,
    "image_alt_tc": null,
    "production_score_inclusion": true,
    "source_pdf_url_tc": "https://www.mardep.gov.hk/filemanager/tc/share/pub-services/pdf/PVOC_exam_B_c.pdf",
    "source_pdf_url_en": "https://www.mardep.gov.hk/filemanager/en/share/pub-services/pdf/PVOC_exam_B.pdf"
  },
  {
    "id": "B12",
    "part": "B",
    "q_no": 12,
    "topics": [
      "B15",
      "B16"
    ],
    "stem_tc": "主柴油機剛起動後，控制錶板上有何顯示 (i) 冷卻淡水溫度錶指示最高溫度 (ii) 潤滑油壓力錶指示額定壓力 (iii) 轉速錶指示全速轉數",
    "stem_en": "What is the appearance in the control console when the main engine just starts? (i) The fresh water cooling temperature gauge shows the maximum temperature (ii) The lubricating oil pressure gauge shows the designed pressure (iii) The tachometer gauge shows the rated speed",
    "options": {
      "A": {
        "text_tc": "(i)",
        "text_en": "(i)"
      },
      "B": {
        "text_tc": "(ii)",
        "text_en": "(ii)"
      },
      "C": {
        "text_tc": "(iii)",
        "text_en": "(iii)"
      },
      "D": {
        "text_tc": "(i) 和(iii)",
        "text_en": "(i) and (iii)"
      }
    },
    "answer": "B",
    "explanation_tc": "啟動主機後：(ii) 油壓即時上到設計壓力（油泵啟動）；(i) 水溫仍冷；(iii) 啟動後 idle，唔係 rated speed。",
    "image_required": false,
    "image_status": "not_required",
    "image_asset_path": null,
    "image_webp_asset_path": null,
    "image_alt_tc": null,
    "production_score_inclusion": true,
    "source_pdf_url_tc": "https://www.mardep.gov.hk/filemanager/tc/share/pub-services/pdf/PVOC_exam_B_c.pdf",
    "source_pdf_url_en": "https://www.mardep.gov.hk/filemanager/en/share/pub-services/pdf/PVOC_exam_B.pdf"
  },
  {
    "id": "B13",
    "part": "B",
    "q_no": 13,
    "topics": [
      "B18",
      "B20"
    ],
    "stem_tc": "液壓式舵機出現氣鎖的原因 (i) 管路接口有洩漏 (ii) 油量不足",
    "stem_en": "The reason for air lock in a hydraulic steering gear system is: (i) leakage in pipe joint (ii) not enough oil in the system",
    "options": {
      "A": {
        "text_tc": "(i)",
        "text_en": "(i)"
      },
      "B": {
        "text_tc": "(ii)",
        "text_en": "(ii)"
      },
      "C": {
        "text_tc": "(i) 及 (ii) 全對",
        "text_en": "(i) and (ii) are correct"
      },
      "D": {
        "text_tc": "(i) 及 (ii) 全不對",
        "text_en": "(i) and (ii) are not correct"
      }
    },
    "answer": "C",
    "explanation_tc": "液壓舵系氣鎖兩大原因：接頭漏 → 油走、空氣入；油量不足 → 系統吸入空氣。",
    "image_required": false,
    "image_status": "not_required",
    "image_asset_path": null,
    "image_webp_asset_path": null,
    "image_alt_tc": null,
    "production_score_inclusion": true,
    "source_pdf_url_tc": "https://www.mardep.gov.hk/filemanager/tc/share/pub-services/pdf/PVOC_exam_B_c.pdf",
    "source_pdf_url_en": "https://www.mardep.gov.hk/filemanager/en/share/pub-services/pdf/PVOC_exam_B.pdf"
  },
  {
    "id": "B14",
    "part": "B",
    "q_no": 14,
    "topics": [
      "B15"
    ],
    "stem_tc": "起動小型簡單舷外汽油機時，首先兩個重要步驟是：",
    "stem_en": "Before starting a small outboard petrol engine, the important two steps of operations are:",
    "options": {
      "A": {
        "text_tc": "將舷外汽油機的波箱降低到水線以下位置，然後檢查齒輪是否在中立檔位置",
        "text_en": "lower the outboard engine gearbox below waterline then check that it is in neutral gear"
      },
      "B": {
        "text_tc": "按起動機按鈕和開啟節氣門",
        "text_en": "press the starter button and open the throttle valve"
      },
      "C": {
        "text_tc": "將齒輪放在中立檔位置和開啟節氣門",
        "text_en": "press the gear into neutral and open the throttle valve"
      },
      "D": {
        "text_tc": "拉扯起動機繩索和嚙合齒輪",
        "text_en": "pull the starter cord and put into gear"
      }
    },
    "answer": "A",
    "explanation_tc": "啟動小型船外機兩步：(1) lower unit/gearbox 放低至水面下（確保水冷有水）、(2) 確認 neutral 檔（避免一啟動突然衝出）。",
    "image_required": false,
    "image_status": "not_required",
    "image_asset_path": null,
    "image_webp_asset_path": null,
    "image_alt_tc": null,
    "production_score_inclusion": true,
    "source_pdf_url_tc": "https://www.mardep.gov.hk/filemanager/tc/share/pub-services/pdf/PVOC_exam_B_c.pdf",
    "source_pdf_url_en": "https://www.mardep.gov.hk/filemanager/en/share/pub-services/pdf/PVOC_exam_B.pdf"
  },
  {
    "id": "B15",
    "part": "B",
    "q_no": 15,
    "topics": [
      "B15"
    ],
    "stem_tc": "正常情況下，柴油機用那種方法停車:",
    "stem_en": "Diesel engine is normally stopped by:",
    "options": {
      "A": {
        "text_tc": "截停助燃氣流",
        "text_en": "stopping air flow"
      },
      "B": {
        "text_tc": "截停燃油供應",
        "text_en": "cut off fuel supply"
      },
      "C": {
        "text_tc": "關閉電源",
        "text_en": "cut off electric power supply"
      },
      "D": {
        "text_tc": "制動停止",
        "text_en": "braking"
      }
    },
    "answer": "B",
    "explanation_tc": "柴油機冇火花塞、靠壓縮自燃。停機 = 切斷燃油供應。停氣流只用於 emergency；切電源只停輔助系統。",
    "image_required": false,
    "image_status": "not_required",
    "image_asset_path": null,
    "image_webp_asset_path": null,
    "image_alt_tc": null,
    "production_score_inclusion": true,
    "source_pdf_url_tc": "https://www.mardep.gov.hk/filemanager/tc/share/pub-services/pdf/PVOC_exam_B_c.pdf",
    "source_pdf_url_en": "https://www.mardep.gov.hk/filemanager/en/share/pub-services/pdf/PVOC_exam_B.pdf"
  },
  {
    "id": "B16",
    "part": "B",
    "q_no": 16,
    "topics": [
      "B16",
      "A13"
    ],
    "stem_tc": "若船隻觸礁，救援仍沒到現場前，執行下列那些措施最為適當？(i) 停止所有主機 (ii) 檢示機艙、主機、尾軸(濕)等是否有損壞 (iii) 用艙底泵，泵走所有積水 (iv) 加大主機馬力，試圖離開礁石 (v) 拋棄貨物、放走所有燃油、淡水，使船身浮起",
    "stem_en": "If the vessel ran aground, which ones of the following precautions were appropriate before rescue arrive? (i) Stop all main engines (ii) Inspect whether any damage has been caused to the engine room, main engines and tail shafts (iii) Use the bilge pump to pump out all accumulated water (iv) Try to leave the rocks by increasing the main engine power (v) Jettison cargo, discharge the remaining water and fuel oil onboard trying to get the vessel afloat",
    "options": {
      "A": {
        "text_tc": "(i),(ii) 及(iii)",
        "text_en": "(i), (ii) and (iii)"
      },
      "B": {
        "text_tc": "(ii),(iii) 及(iv)",
        "text_en": "(ii), (iii) and (iv)"
      },
      "C": {
        "text_tc": "(i),(iii) 及(iv)",
        "text_en": "(i), (iii) and (iv)"
      },
      "D": {
        "text_tc": "(iii),(iv) 及(v)",
        "text_en": "(iii), (iv) and (v)"
      }
    },
    "answer": "A",
    "explanation_tc": "擱淺後正確做法：停所有主機、檢查機房/主機/尾軸、操作艙底泵抽水。盲目加大馬力會毀壞螺旋槳；拋燃油 = 污染海洋、違法。",
    "image_required": false,
    "image_status": "not_required",
    "image_asset_path": null,
    "image_webp_asset_path": null,
    "image_alt_tc": null,
    "production_score_inclusion": true,
    "source_pdf_url_tc": "https://www.mardep.gov.hk/filemanager/tc/share/pub-services/pdf/PVOC_exam_B_c.pdf",
    "source_pdf_url_en": "https://www.mardep.gov.hk/filemanager/en/share/pub-services/pdf/PVOC_exam_B.pdf"
  },
  {
    "id": "B17",
    "part": "B",
    "q_no": 17,
    "topics": [
      "B15",
      "B16"
    ],
    "stem_tc": "在船身及螺旋槳正確地配合下，推進引擎的理想狀態應在",
    "stem_en": "To be running properly with a correctly matching hull and propeller an engine should be:",
    "options": {
      "A": {
        "text_tc": "全馬力下加速",
        "text_en": "running at full power setting to accelerate"
      },
      "B": {
        "text_tc": "最小馬力下加速",
        "text_en": "running at minimum power setting to accelerate"
      },
      "C": {
        "text_tc": "全馬力下全速運轉",
        "text_en": "running at full rated speed at full power setting"
      },
      "D": {
        "text_tc": "最小馬力下全速運轉",
        "text_en": "running at full rated speed at minimum power setting"
      }
    },
    "answer": "C",
    "explanation_tc": "船體+螺旋槳匹配正確 = full throttle 時引擎達到 rated speed + full power。如果 full throttle 達不到 rated speed = propeller 太重；超過 = propeller 太輕。",
    "image_required": false,
    "image_status": "not_required",
    "image_asset_path": null,
    "image_webp_asset_path": null,
    "image_alt_tc": null,
    "production_score_inclusion": true,
    "source_pdf_url_tc": "https://www.mardep.gov.hk/filemanager/tc/share/pub-services/pdf/PVOC_exam_B_c.pdf",
    "source_pdf_url_en": "https://www.mardep.gov.hk/filemanager/en/share/pub-services/pdf/PVOC_exam_B.pdf"
  },
  {
    "id": "B18",
    "part": "B",
    "q_no": 18,
    "topics": [
      "B15",
      "B18"
    ],
    "stem_tc": "間接冷卻式船用發動機的恒溫器不適用於直接冷卻式的船用發動機，這是因為 (i) 它們的運作原理不同 (ii) 它們的操作/運作温度不同 (iii) 它們在海水中不能操作",
    "stem_en": "The thermostats used in the indirectly cooled marine engine are unsuitable for directly cooled marine engines because: (i) their operation princple is different (ii) their operation temperature is different (iii) they will not operate in sea water",
    "options": {
      "A": {
        "text_tc": "(i)",
        "text_en": "(i)"
      },
      "B": {
        "text_tc": "(i) 和(ii)",
        "text_en": "(i) and (ii)"
      },
      "C": {
        "text_tc": "(iii)",
        "text_en": "(iii)"
      },
      "D": {
        "text_tc": "(i),(ii) 及 (iii) 皆不正確",
        "text_en": "(i), (ii) and (iii) are not correct"
      }
    },
    "answer": "B",
    "explanation_tc": "Indirect cooling vs Direct cooling：(i) 原理不同；(ii) 操作溫度不同（海水若太熱會結垢，所以 direct cooling thermostat 開啟溫度較低）。",
    "image_required": false,
    "image_status": "not_required",
    "image_asset_path": null,
    "image_webp_asset_path": null,
    "image_alt_tc": null,
    "production_score_inclusion": true,
    "source_pdf_url_tc": "https://www.mardep.gov.hk/filemanager/tc/share/pub-services/pdf/PVOC_exam_B_c.pdf",
    "source_pdf_url_en": "https://www.mardep.gov.hk/filemanager/en/share/pub-services/pdf/PVOC_exam_B.pdf"
  },
  {
    "id": "B19",
    "part": "B",
    "q_no": 19,
    "topics": [
      "B16",
      "B18"
    ],
    "stem_tc": "當潤滑油壓力報警鐘嚮起時，你會立刻：",
    "stem_en": "When the lubrication oil pressure alarm activates, you should immediately:",
    "options": {
      "A": {
        "text_tc": "將發動機減速",
        "text_en": "reduce the engine speed"
      },
      "B": {
        "text_tc": "繼續運行，並找尋原因",
        "text_en": "continue running the engine and find the fault"
      },
      "C": {
        "text_tc": "添加潤滑油",
        "text_en": "add oil to sump"
      },
      "D": {
        "text_tc": "立即停機",
        "text_en": "stop the engine immediately"
      }
    },
    "answer": "A",
    "explanation_tc": "油壓低警報：先減速（reduce load）以保護引擎免進一步損壞，再判斷情況決定是否停機。立即停機可能令船失控。",
    "image_required": false,
    "image_status": "not_required",
    "image_asset_path": null,
    "image_webp_asset_path": null,
    "image_alt_tc": null,
    "production_score_inclusion": true,
    "source_pdf_url_tc": "https://www.mardep.gov.hk/filemanager/tc/share/pub-services/pdf/PVOC_exam_B_c.pdf",
    "source_pdf_url_en": "https://www.mardep.gov.hk/filemanager/en/share/pub-services/pdf/PVOC_exam_B.pdf"
  },
  {
    "id": "B20",
    "part": "B",
    "q_no": 20,
    "topics": [
      "B21"
    ],
    "stem_tc": "隔熱物料安裝在排氣管上有何功用？I. 減少排氣管熱力散發。II. 降低機房溫度。III. 防止高溫的排氣管與任何油類接觸引發火警。IV. 防止高溫的排氣管有機會灼傷在輪機艙的工作人員。",
    "stem_en": "What is the function of the heat insulation which sticks on the exhaust piping system? (i) Reduce the heat emission from the exhaust piping. (ii) Reduce the engine room temperature. (iii) Avoid the red hot exhaust pipe contacts with any oil type substances and cause fire. (iv) Avoid the red hot exhaust pipe hazard to the worker in the engine room.",
    "options": {
      "A": {
        "text_tc": "只有(i),(iv)",
        "text_en": "(i),(iv) only"
      },
      "B": {
        "text_tc": "只有 (i),(ii)",
        "text_en": "(i),(ii) only"
      },
      "C": {
        "text_tc": "只有 (ii),(iii)",
        "text_en": "(ii),(iii) only"
      },
      "D": {
        "text_tc": "以上皆是",
        "text_en": "All of above"
      }
    },
    "answer": "D",
    "explanation_tc": "排氣管隔熱四大功能：減熱輻射、降低機房溫度、防油類接觸引致火災、保護工人避免燒傷。",
    "image_required": false,
    "image_status": "not_required",
    "image_asset_path": null,
    "image_webp_asset_path": null,
    "image_alt_tc": null,
    "production_score_inclusion": true,
    "source_pdf_url_tc": "https://www.mardep.gov.hk/filemanager/tc/share/pub-services/pdf/PVOC_exam_B_c.pdf",
    "source_pdf_url_en": "https://www.mardep.gov.hk/filemanager/en/share/pub-services/pdf/PVOC_exam_B.pdf"
  },
  {
    "id": "B21",
    "part": "B",
    "q_no": 21,
    "topics": [
      "B18",
      "B19"
    ],
    "stem_tc": "船尾(舷外)汽油機的入氣和排氣閥間隙不足會造成",
    "stem_en": "Insufficient inlet and exhaust valve clearance in outboard petrol engine could cause:",
    "options": {
      "A": {
        "text_tc": "汽油／空氣混合物過濃",
        "text_en": "too rich of fuel/air mixture"
      },
      "B": {
        "text_tc": "汽油／空氣混合物過稀",
        "text_en": "too weak of fuel/air mixture"
      },
      "C": {
        "text_tc": "挺杆發出噪音",
        "text_en": "noisy tappets"
      },
      "D": {
        "text_tc": "喪失壓縮力",
        "text_en": "loss of compression"
      }
    },
    "answer": "D",
    "explanation_tc": "閥門間隙不足 → 閥門關不緊 → 壓縮氣體洩漏 → 失壓縮 → 馬力下降。間隙過大反而 noisy tappets。",
    "image_required": false,
    "image_status": "not_required",
    "image_asset_path": null,
    "image_webp_asset_path": null,
    "image_alt_tc": null,
    "production_score_inclusion": true,
    "source_pdf_url_tc": "https://www.mardep.gov.hk/filemanager/tc/share/pub-services/pdf/PVOC_exam_B_c.pdf",
    "source_pdf_url_en": "https://www.mardep.gov.hk/filemanager/en/share/pub-services/pdf/PVOC_exam_B.pdf"
  },
  {
    "id": "B22",
    "part": "B",
    "q_no": 22,
    "topics": [
      "B18",
      "B20"
    ],
    "stem_tc": "一個活塞泵，將手柄推入時，那些閥門【關閉】？",
    "stem_en": "A piston pump, when push in the handle lever, which valves will \"close\"?",
    "options": {
      "A": {
        "text_tc": "1, 4",
        "text_en": "1, 4"
      },
      "B": {
        "text_tc": "2, 3",
        "text_en": "2, 3"
      },
      "C": {
        "text_tc": "1, 2",
        "text_en": "1, 2"
      },
      "D": {
        "text_tc": "3, 4",
        "text_en": "3, 4"
      }
    },
    "answer": "B",
    "explanation_tc": "手動活塞泵：推手柄 = 壓縮衝程，2 號（進口閥）+ 3 號（活塞底閥）關閉，1 號/4 號（出口閥）打開排水。具體編號參照官方 PDF 圖示。",
    "image_required": true,
    "image_status": "available",
    "image_asset_path": "assets/img/imgQB22.png",
    "image_webp_asset_path": "assets/img/imgQB22.webp",
    "image_alt_tc": "PDF 圖示為手動活塞泵剖面，標示 4 個閥門編號 1-4。推手柄時 = 壓縮衝程，inlet valves 關閉、outlet valves 打開。",
    "production_score_inclusion": true,
    "source_pdf_url_tc": "https://www.mardep.gov.hk/filemanager/tc/share/pub-services/pdf/PVOC_exam_B_c.pdf",
    "source_pdf_url_en": "https://www.mardep.gov.hk/filemanager/en/share/pub-services/pdf/PVOC_exam_B.pdf"
  },
  {
    "id": "B23",
    "part": "B",
    "q_no": 23,
    "topics": [
      "B17",
      "B21"
    ],
    "stem_tc": "安裝在電池室內的風扇以防止氫氣積聚，所用的電動馬達（摩打）應為下列那一種？",
    "stem_en": "What type of motor should be used for electric ventilation fans installed inside battery spaces to avoid accumulation of hydrogen gases?",
    "options": {
      "A": {
        "text_tc": "防滴水式",
        "text_en": "drip-proof type"
      },
      "B": {
        "text_tc": "水密式",
        "text_en": "watertight type"
      },
      "C": {
        "text_tc": "防風雨式",
        "text_en": "weatherproof type"
      },
      "D": {
        "text_tc": "防爆式",
        "text_en": "Explosion proof type"
      }
    },
    "answer": "D",
    "explanation_tc": "電池充電會產生氫氣（爆炸性）。電池艙內任何電器（包括通風扇）必須係防爆型 (explosion-proof)。",
    "image_required": false,
    "image_status": "not_required",
    "image_asset_path": null,
    "image_webp_asset_path": null,
    "image_alt_tc": null,
    "production_score_inclusion": true,
    "source_pdf_url_tc": "https://www.mardep.gov.hk/filemanager/tc/share/pub-services/pdf/PVOC_exam_B_c.pdf",
    "source_pdf_url_en": "https://www.mardep.gov.hk/filemanager/en/share/pub-services/pdf/PVOC_exam_B.pdf"
  },
  {
    "id": "B24",
    "part": "B",
    "q_no": 24,
    "topics": [
      "B17"
    ],
    "stem_tc": "單元電池的容量依賴於",
    "stem_en": "Single battery capacity is dependent on the:",
    "options": {
      "A": {
        "text_tc": "能維持一定時間的電壓",
        "text_en": "voltage that can be maintained over a period of time"
      },
      "B": {
        "text_tc": "充電的時間",
        "text_en": "time for which it has been charged"
      },
      "C": {
        "text_tc": "浸在電解液裏的電池板表面面積",
        "text_en": "surface area of the plates exposed to the electrolyte"
      },
      "D": {
        "text_tc": "單元電池的數目",
        "text_en": "number of cells"
      }
    },
    "answer": "C",
    "explanation_tc": "單一電池容量（Ah）取決於極板與電解液接觸面積 — 面積越大、化學反應越多、容量越大。電壓由 cell 數決定。",
    "image_required": false,
    "image_status": "not_required",
    "image_asset_path": null,
    "image_webp_asset_path": null,
    "image_alt_tc": null,
    "production_score_inclusion": true,
    "source_pdf_url_tc": "https://www.mardep.gov.hk/filemanager/tc/share/pub-services/pdf/PVOC_exam_B_c.pdf",
    "source_pdf_url_en": "https://www.mardep.gov.hk/filemanager/en/share/pub-services/pdf/PVOC_exam_B.pdf"
  },
  {
    "id": "B25",
    "part": "B",
    "q_no": 25,
    "topics": [
      "B17",
      "B19"
    ],
    "stem_tc": "發電機在操作中的一般注意事項: (i) 應該保持清潔和乾燥 (ii) 軸承要保持潤滑良好 (iii) 調速器要保持在良好的狀況 (iv) 應該保持一定不變負載",
    "stem_en": "What general care should a generator receive while in operation? (i) It should be kept clean and dry. (ii) The bearing should be kept well oiled. (iii) The governor should be kept in good condition. (iv) The load should be kept at a fixed load.",
    "options": {
      "A": {
        "text_tc": "(i),(ii) 及(iii)",
        "text_en": "(i), (ii) and (iii)"
      },
      "B": {
        "text_tc": "(ii),(iii) 及(iv)",
        "text_en": "(ii), (iii) and (iv)"
      },
      "C": {
        "text_tc": "(i),(iii) 及(iv)",
        "text_en": "(i), (iii) and (iv)"
      },
      "D": {
        "text_tc": "(i),(ii) 及(iv)",
        "text_en": "(i), (ii) and (iv)"
      }
    },
    "answer": "A",
    "explanation_tc": "發電機運行照護：保持清潔乾燥、軸承潤滑、調速器良好。負載固定 × — 實際負載會變動。",
    "image_required": false,
    "image_status": "not_required",
    "image_asset_path": null,
    "image_webp_asset_path": null,
    "image_alt_tc": null,
    "production_score_inclusion": true,
    "source_pdf_url_tc": "https://www.mardep.gov.hk/filemanager/tc/share/pub-services/pdf/PVOC_exam_B_c.pdf",
    "source_pdf_url_en": "https://www.mardep.gov.hk/filemanager/en/share/pub-services/pdf/PVOC_exam_B.pdf"
  },
  {
    "id": "B26",
    "part": "B",
    "q_no": 26,
    "topics": [
      "B17"
    ],
    "stem_tc": "一艘遊艇靠泊在浮碼頭。接駁岸電電源線之前，你首先要________。(請選擇最合適答案)",
    "stem_en": "A luxury yacht has just docked beside a jetty. Before plugging in the shore power cord, first step you have to do is: (Please select the most appropriate answer)",
    "options": {
      "A": {
        "text_tc": "關閉碼頭供電箱的主電源供應斷路器及船上配電系統的斷路器",
        "text_en": "Switch off the main circuit breakers on the dockside and on vessel electrical distribution system"
      },
      "B": {
        "text_tc": "拔掉發動機起動電池電線",
        "text_en": "Disconnect engine starting battery cable"
      },
      "C": {
        "text_tc": "固定及收緊所有繫泊纜繩，若有需要，須額外多放幾個護舷。",
        "text_en": "Secure and tighten the mooring ropes, add addition fenders if necessary"
      },
      "D": {
        "text_tc": "穿上救生衣，預備一瓶二氧化碳滅火器",
        "text_en": "Put on life jackets, ready a portable carbon dioxide fire extinguisher"
      }
    },
    "answer": "A",
    "explanation_tc": "接岸電前必須切斷碼頭同船上總開關，避免插拔時產生電弧、短路、觸電。其他選項雖重要但非 first step。",
    "image_required": false,
    "image_status": "not_required",
    "image_asset_path": null,
    "image_webp_asset_path": null,
    "image_alt_tc": null,
    "production_score_inclusion": true,
    "source_pdf_url_tc": "https://www.mardep.gov.hk/filemanager/tc/share/pub-services/pdf/PVOC_exam_B_c.pdf",
    "source_pdf_url_en": "https://www.mardep.gov.hk/filemanager/en/share/pub-services/pdf/PVOC_exam_B.pdf"
  },
  {
    "id": "B27",
    "part": "B",
    "q_no": 27,
    "topics": [
      "B17",
      "A13"
    ],
    "stem_tc": "如果有人在機房內觸電，傷者部份身體仍受電擊，在進行營救之前，你首先必須：",
    "stem_en": "Somebody was got electric shock in engine room, and casualty is not clear of electric current, before rescue, you have to:",
    "options": {
      "A": {
        "text_tc": "將電源關閉。",
        "text_en": "break the contact by switch off the power source."
      },
      "B": {
        "text_tc": "將傷者放在復原位置，及召喚醫護人員。",
        "text_en": "Place casualty in the recover position and call medical aid."
      },
      "C": {
        "text_tc": "開始進行體外心壓法。",
        "text_en": "start external cardiac compression."
      },
      "D": {
        "text_tc": "召喚醫護人員，之後施行人工呼吸及體外心壓法。",
        "text_en": "call medical aid, and then start external cardiac compression and artificial ventilation."
      }
    },
    "answer": "A",
    "explanation_tc": "電擊救援第一步：切斷電源（否則救者會跟住觸電）。確保安全後才施行 CPR。",
    "image_required": false,
    "image_status": "not_required",
    "image_asset_path": null,
    "image_webp_asset_path": null,
    "image_alt_tc": null,
    "production_score_inclusion": true,
    "source_pdf_url_tc": "https://www.mardep.gov.hk/filemanager/tc/share/pub-services/pdf/PVOC_exam_B_c.pdf",
    "source_pdf_url_en": "https://www.mardep.gov.hk/filemanager/en/share/pub-services/pdf/PVOC_exam_B.pdf"
  },
  {
    "id": "B28",
    "part": "B",
    "q_no": 28,
    "topics": [
      "B18"
    ],
    "stem_tc": "關於在柴油機起動困難，以下那一說明是不正確的原因:",
    "stem_en": "Which of the following statements is incorrect with regard to starting difficulty in diesel engine:",
    "options": {
      "A": {
        "text_tc": "起動馬達（摩打）轉動柴油機時速度緩慢",
        "text_en": "the engine is turned at low cranking speed by starter"
      },
      "B": {
        "text_tc": "沒有足夠的潤滑油在曲軸箱內",
        "text_en": "insufficient lubricating oil feeds in engine crankcase"
      },
      "C": {
        "text_tc": "空氣過濾器阻塞",
        "text_en": "the air filter is choked"
      },
      "D": {
        "text_tc": "燃油泵有氣鎖（空氣）現象",
        "text_en": "air locks in fuel pump"
      }
    },
    "answer": "B",
    "explanation_tc": "柴油機啟動困難原因：起動轉速太低 ✓、空氣濾網堵 ✓、燃油泵入空氣 ✓。曲軸箱潤滑不足 × — 唔影響啟動。所以 B 係 incorrect。",
    "image_required": false,
    "image_status": "not_required",
    "image_asset_path": null,
    "image_webp_asset_path": null,
    "image_alt_tc": null,
    "production_score_inclusion": true,
    "source_pdf_url_tc": "https://www.mardep.gov.hk/filemanager/tc/share/pub-services/pdf/PVOC_exam_B_c.pdf",
    "source_pdf_url_en": "https://www.mardep.gov.hk/filemanager/en/share/pub-services/pdf/PVOC_exam_B.pdf"
  },
  {
    "id": "B29",
    "part": "B",
    "q_no": 29,
    "topics": [
      "B18",
      "B19"
    ],
    "stem_tc": "如果船尾(舷外)汽油機不能加速，原因是:",
    "stem_en": "If an outboard petrol engine fails to accelerate, the reason may be:",
    "options": {
      "A": {
        "text_tc": "汽油及潤滑油混合物比例不正常",
        "text_en": "poor in fuel/lubricant mixture."
      },
      "B": {
        "text_tc": "化油器噴咀有污物",
        "text_en": "dirt in carburetor jet."
      },
      "C": {
        "text_tc": "燃油喉沒有充油",
        "text_en": "no priming in fuel pipe."
      },
      "D": {
        "text_tc": "引燃系統有故障",
        "text_en": "fault in ignition system."
      }
    },
    "answer": "B",
    "explanation_tc": "船外機加速失敗：化油器噴口（jet）髒堵 = 油不足 = 加速無力。其他選項：(A) 影響潤滑而非加速；(C) 無 priming = 完全唔啟動；(D) 點火系統故障 = 通常完全唔著火。",
    "image_required": false,
    "image_status": "not_required",
    "image_asset_path": null,
    "image_webp_asset_path": null,
    "image_alt_tc": null,
    "production_score_inclusion": true,
    "source_pdf_url_tc": "https://www.mardep.gov.hk/filemanager/tc/share/pub-services/pdf/PVOC_exam_B_c.pdf",
    "source_pdf_url_en": "https://www.mardep.gov.hk/filemanager/en/share/pub-services/pdf/PVOC_exam_B.pdf"
  },
  {
    "id": "B30",
    "part": "B",
    "q_no": 30,
    "topics": [
      "B18"
    ],
    "stem_tc": "噴油器洩漏會造成 (i) 動力減弱 (ii) 黑煙 (iii) 震動 (iv) 多耗燃油",
    "stem_en": "A leaking fuel injector will cause: (i) loss of power (ii) dirty exhaust (iii) vibration (iv) more fuel burnt",
    "options": {
      "A": {
        "text_tc": "(i),(ii) 及 (iii)",
        "text_en": "(i), (ii) and (iii)"
      },
      "B": {
        "text_tc": "(i),(iii) 及 (iv)",
        "text_en": "(i), (iii) and (iv)"
      },
      "C": {
        "text_tc": "(ii),(iii) 及 (iv)",
        "text_en": "(ii), (iii) and (iv)"
      },
      "D": {
        "text_tc": "(i),(ii),(iii) 及 (iv)",
        "text_en": "(i), (ii), (iii) and (iv)"
      }
    },
    "answer": "D",
    "explanation_tc": "漏油噴射器後果：馬力下降、排氣髒、震動、多耗油。全部都對。",
    "image_required": false,
    "image_status": "not_required",
    "image_asset_path": null,
    "image_webp_asset_path": null,
    "image_alt_tc": null,
    "production_score_inclusion": true,
    "source_pdf_url_tc": "https://www.mardep.gov.hk/filemanager/tc/share/pub-services/pdf/PVOC_exam_B_c.pdf",
    "source_pdf_url_en": "https://www.mardep.gov.hk/filemanager/en/share/pub-services/pdf/PVOC_exam_B.pdf"
  },
  {
    "id": "B31",
    "part": "B",
    "q_no": 31,
    "topics": [
      "B16",
      "B18"
    ],
    "stem_tc": "下列那項是最易引起汽缸磨耗的原因？",
    "stem_en": "Which is the most likely cause of cylinder wear?",
    "options": {
      "A": {
        "text_tc": "引擎在高速度運作",
        "text_en": "Engine runs in high speed."
      },
      "B": {
        "text_tc": "引擎在低速度運作",
        "text_en": "Engine runs in low speed."
      },
      "C": {
        "text_tc": "引擎在冷卻水溫太低運作",
        "text_en": "Engine runs in super-cooled jacket water."
      },
      "D": {
        "text_tc": "引擎在怠速運作時間太長",
        "text_en": "Engine runs too long in idling speed."
      }
    },
    "answer": "C",
    "explanation_tc": "氣缸過冷：jacket 水溫太低 → 燃燒不完全 → 酸性產物凝結喺缸壁 → 腐蝕磨損 (cold corrosion)。",
    "image_required": false,
    "image_status": "not_required",
    "image_asset_path": null,
    "image_webp_asset_path": null,
    "image_alt_tc": null,
    "production_score_inclusion": true,
    "source_pdf_url_tc": "https://www.mardep.gov.hk/filemanager/tc/share/pub-services/pdf/PVOC_exam_B_c.pdf",
    "source_pdf_url_en": "https://www.mardep.gov.hk/filemanager/en/share/pub-services/pdf/PVOC_exam_B.pdf"
  },
  {
    "id": "B32",
    "part": "B",
    "q_no": 32,
    "topics": [
      "B18"
    ],
    "stem_tc": "下列那一項原因可導致內燃機的「壓縮」消失",
    "stem_en": "Loss of compression in an internal combustion engine may be due to:",
    "options": {
      "A": {
        "text_tc": "燃油的等級不對",
        "text_en": "the wrong grade of fuel"
      },
      "B": {
        "text_tc": "排氣槽洩漏",
        "text_en": "a leak in the exhaust manifold"
      },
      "C": {
        "text_tc": "有排氣閥黏著在開啟的位置",
        "text_en": "an exhaust valve stuck open"
      },
      "D": {
        "text_tc": "入氣槽洩漏",
        "text_en": "a leak in the inlet manifold"
      }
    },
    "answer": "C",
    "explanation_tc": "失壓縮原因：排氣閥卡開 = 壓縮衝程時氣體從排氣口漏走。Manifold 漏 = 影響進氣/排氣量但唔直接 lose compression。",
    "image_required": false,
    "image_status": "not_required",
    "image_asset_path": null,
    "image_webp_asset_path": null,
    "image_alt_tc": null,
    "production_score_inclusion": true,
    "source_pdf_url_tc": "https://www.mardep.gov.hk/filemanager/tc/share/pub-services/pdf/PVOC_exam_B_c.pdf",
    "source_pdf_url_en": "https://www.mardep.gov.hk/filemanager/en/share/pub-services/pdf/PVOC_exam_B.pdf"
  },
  {
    "id": "B33",
    "part": "B",
    "q_no": 33,
    "topics": [
      "B15",
      "B18"
    ],
    "stem_tc": "汽油機所產生的廢氣較少黑煙，因為：(i) 所燒的燃油較少 (ii) 容易達到完全燃燒 (iii) 汽油含碳量較少 (iv) 汽油容易燃點",
    "stem_en": "Petrol engine produces less dirty exhaust because: (i) less fuel is burnt (ii) complete combustion can easily be achieved (iii) petrol contains low proportion of carbon content (iv) petrol is easier to be ignited",
    "options": {
      "A": {
        "text_tc": "(i),(ii) 及(iii)",
        "text_en": "(i), (ii) and (iii)"
      },
      "B": {
        "text_tc": "(i),(iii) 及(iv)",
        "text_en": "(i), (iii) and (iv)"
      },
      "C": {
        "text_tc": "(ii),(iii) 及(iv)",
        "text_en": "(ii), (iii) and (iv)"
      },
      "D": {
        "text_tc": "(i),(ii) 及(iv)",
        "text_en": "(i), (ii) and (iv)"
      }
    },
    "answer": "C",
    "explanation_tc": "汽油機排氣較乾淨：易完全燃燒、碳含量較柴油低、易點火。(i) 燒少 × — 汽油機單位功率燒得多。",
    "image_required": false,
    "image_status": "not_required",
    "image_asset_path": null,
    "image_webp_asset_path": null,
    "image_alt_tc": null,
    "production_score_inclusion": true,
    "source_pdf_url_tc": "https://www.mardep.gov.hk/filemanager/tc/share/pub-services/pdf/PVOC_exam_B_c.pdf",
    "source_pdf_url_en": "https://www.mardep.gov.hk/filemanager/en/share/pub-services/pdf/PVOC_exam_B.pdf"
  },
  {
    "id": "B34",
    "part": "B",
    "q_no": 34,
    "topics": [
      "B16",
      "B19"
    ],
    "stem_tc": "柴油機氣缸過量潤滑之影響為何？(i) 較易結碳 (ii) 活塞環膠著 (iii) 汽缸磨耗增加 (iv) 超負荷",
    "stem_en": "What is the effect of over-lubrication in a Diesel engine cylinder? (i) Easy to form carbon deposit. (ii) Sticky piston rings. (iii) Increasing the cylinder wear. (iv) Overloading.",
    "options": {
      "A": {
        "text_tc": "(i) 及(ii)",
        "text_en": "(i) and (ii)"
      },
      "B": {
        "text_tc": "(ii),(iii) 及(iv)",
        "text_en": "(ii), (iii) and (iv)"
      },
      "C": {
        "text_tc": "(i),(ii) 及(iv)",
        "text_en": "(i), (ii) and (iv)"
      },
      "D": {
        "text_tc": "(i),(ii),(iii) 及(iv)",
        "text_en": "(i), (ii), (iii) and (iv)"
      }
    },
    "answer": "A",
    "explanation_tc": "過度潤滑：多餘油喺燃燒室燒成積碳、積碳令活塞環卡死。過度潤滑反而減磨損；唔關過載事。",
    "image_required": false,
    "image_status": "not_required",
    "image_asset_path": null,
    "image_webp_asset_path": null,
    "image_alt_tc": null,
    "production_score_inclusion": true,
    "source_pdf_url_tc": "https://www.mardep.gov.hk/filemanager/tc/share/pub-services/pdf/PVOC_exam_B_c.pdf",
    "source_pdf_url_en": "https://www.mardep.gov.hk/filemanager/en/share/pub-services/pdf/PVOC_exam_B.pdf"
  },
  {
    "id": "B35",
    "part": "B",
    "q_no": 35,
    "topics": [
      "B20"
    ],
    "stem_tc": "當發現油壓式絞盤機儲油櫃內的潤滑油油位太低時，最適當的反應是：",
    "stem_en": "The level of oil in a hydraulic reservoir for a deck winch is found to be very low. The best action would be to:",
    "options": {
      "A": {
        "text_tc": "馬上停止絞盤機的運作，檢查絞盤機附近及所有喉管是否有漏油的現象",
        "text_en": "isolate the winch and perform a check in the areas close to the winch and any leak on the hoses connected to it"
      },
      "B": {
        "text_tc": "馬上將儲油櫃重新注滿",
        "text_en": "refill the reservoir immediately"
      },
      "C": {
        "text_tc": "確定及排放出儲油櫃內的積水及淤渣",
        "text_en": "verify and eliminate the presence of water in the tank"
      },
      "D": {
        "text_tc": "釋放出儲油櫃內因潤滑油膨脤所產生的壓力",
        "text_en": "relieve pressure in the tank due to oil expansion"
      }
    },
    "answer": "A",
    "explanation_tc": "甲板絞車液壓油過低：先隔離絞車 + 檢查油喉漏點。盲目加油會浪費油；油減少 ≠ 入水。",
    "image_required": false,
    "image_status": "not_required",
    "image_asset_path": null,
    "image_webp_asset_path": null,
    "image_alt_tc": null,
    "production_score_inclusion": true,
    "source_pdf_url_tc": "https://www.mardep.gov.hk/filemanager/tc/share/pub-services/pdf/PVOC_exam_B_c.pdf",
    "source_pdf_url_en": "https://www.mardep.gov.hk/filemanager/en/share/pub-services/pdf/PVOC_exam_B.pdf"
  },
  {
    "id": "B36",
    "part": "B",
    "q_no": 36,
    "topics": [
      "B21"
    ],
    "stem_tc": "火警之因素為何? (i) 有燃料 (ii) 有空氣 (iii) 燃料與空氣達到燃燒溫度",
    "stem_en": "What factors would contribute to fire? (i) Availability of fuel. (ii) Availability of air. (iii) The fuel and air reach the proper temperature for ignition.",
    "options": {
      "A": {
        "text_tc": "(i)及(ii)",
        "text_en": "(i) and (ii)"
      },
      "B": {
        "text_tc": "(ii)及(iii)",
        "text_en": "(ii) and (iii)"
      },
      "C": {
        "text_tc": "(i)及(iii)",
        "text_en": "(i) and (iii)"
      },
      "D": {
        "text_tc": "(i),(ii)及(iii)",
        "text_en": "(i), (ii) and (iii)"
      }
    },
    "answer": "D",
    "explanation_tc": "火災三要素（Fire Triangle）：燃料、氧氣、熱源。三者缺一火不成。",
    "image_required": false,
    "image_status": "not_required",
    "image_asset_path": null,
    "image_webp_asset_path": null,
    "image_alt_tc": null,
    "production_score_inclusion": true,
    "source_pdf_url_tc": "https://www.mardep.gov.hk/filemanager/tc/share/pub-services/pdf/PVOC_exam_B_c.pdf",
    "source_pdf_url_en": "https://www.mardep.gov.hk/filemanager/en/share/pub-services/pdf/PVOC_exam_B.pdf"
  },
  {
    "id": "B37",
    "part": "B",
    "q_no": 37,
    "topics": [
      "B21"
    ],
    "stem_tc": "以下那項不適宜救電器失火 (i) 乾粉滅火筒 (ii) 泡沫滅火筒 (iii) 二氧化碳滅火筒",
    "stem_en": "The fire extinguisher that is not suitable for a electric fire is: (i) Dry powder (ii) Foam (iii) Carbon dioxide",
    "options": {
      "A": {
        "text_tc": "(i)",
        "text_en": "(i)"
      },
      "B": {
        "text_tc": "(ii)",
        "text_en": "(ii)"
      },
      "C": {
        "text_tc": "(iii)",
        "text_en": "(iii)"
      },
      "D": {
        "text_tc": "(i),(ii) 及 (iii) 全不適宜",
        "text_en": "(i), (ii) and (iii) are not suitable"
      }
    },
    "answer": "B",
    "explanation_tc": "電氣火警：泡沫含水導電、會觸電。乾粉同 CO₂ 都可用（CO₂ 最佳）。",
    "image_required": false,
    "image_status": "not_required",
    "image_asset_path": null,
    "image_webp_asset_path": null,
    "image_alt_tc": null,
    "production_score_inclusion": true,
    "source_pdf_url_tc": "https://www.mardep.gov.hk/filemanager/tc/share/pub-services/pdf/PVOC_exam_B_c.pdf",
    "source_pdf_url_en": "https://www.mardep.gov.hk/filemanager/en/share/pub-services/pdf/PVOC_exam_B.pdf"
  },
  {
    "id": "B38",
    "part": "B",
    "q_no": 38,
    "topics": [
      "B21"
    ],
    "stem_tc": "機房的防火措施不包括",
    "stem_en": "Engine room fire precautious measures do not include:",
    "options": {
      "A": {
        "text_tc": "定期檢查沙箱及滅火器",
        "text_en": "periodic check of sand box and fire extinguisher"
      },
      "B": {
        "text_tc": "發電機避免有超負荷的情形發生",
        "text_en": "to avoid overload of generator"
      },
      "C": {
        "text_tc": "定期舉行消防演習",
        "text_en": "to organize fire drill at suitable interval"
      },
      "D": {
        "text_tc": "定期操練應急消防水泵系統",
        "text_en": "operate emergency fire pump system periodically"
      }
    },
    "answer": "B",
    "explanation_tc": "機艙防火措施：定期檢查滅火器、定期消防演習、定期測試 emergency fire pump。避免發電機過載 = 操作維護事項而非防火措施。",
    "image_required": false,
    "image_status": "not_required",
    "image_asset_path": null,
    "image_webp_asset_path": null,
    "image_alt_tc": null,
    "production_score_inclusion": true,
    "source_pdf_url_tc": "https://www.mardep.gov.hk/filemanager/tc/share/pub-services/pdf/PVOC_exam_B_c.pdf",
    "source_pdf_url_en": "https://www.mardep.gov.hk/filemanager/en/share/pub-services/pdf/PVOC_exam_B.pdf"
  },
  {
    "id": "B39",
    "part": "B",
    "q_no": 39,
    "topics": [
      "B21"
    ],
    "stem_tc": "有關『石油氣瓶』的說法，下列那項是不正確：",
    "stem_en": "Which statement below about LPG is wrong:",
    "options": {
      "A": {
        "text_tc": "應放於陽光不會直接照射的地方",
        "text_en": "Gas bottle should be installed to avoid direct sunlight"
      },
      "B": {
        "text_tc": "石油氣瓶與爐灶的石油氣喉管以最短為原則",
        "text_en": "Pipe between gas bottle and cooker should be as short as possible"
      },
      "C": {
        "text_tc": "如果石油氣瓶放在櫃內，櫃底必須設有適當的透氣管路",
        "text_en": "Air passage should be provided near the bottom of bottle locker"
      },
      "D": {
        "text_tc": "石油氣瓶應儲存在甲板上",
        "text_en": "Gas bottle should be stored on deck"
      }
    },
    "answer": "B",
    "explanation_tc": "LPG 描述錯誤：(B) 鋼瓶與爐具間管應越短越好 × — 應有適當長度（避免過短拉緊、過長易破損）。LPG 比空氣重，所以通風口應在櫃底。",
    "image_required": false,
    "image_status": "not_required",
    "image_asset_path": null,
    "image_webp_asset_path": null,
    "image_alt_tc": null,
    "production_score_inclusion": true,
    "source_pdf_url_tc": "https://www.mardep.gov.hk/filemanager/tc/share/pub-services/pdf/PVOC_exam_B_c.pdf",
    "source_pdf_url_en": "https://www.mardep.gov.hk/filemanager/en/share/pub-services/pdf/PVOC_exam_B.pdf"
  },
  {
    "id": "B40",
    "part": "B",
    "q_no": 40,
    "topics": [
      "B21"
    ],
    "stem_tc": "為何有些柴油燃料的顏色呈現微紅？",
    "stem_en": "Why are some diesel fuel showing reddish colour?",
    "options": {
      "A": {
        "text_tc": "因應《應課稅品(碳氫油的標記及染色)規例》，而加染色物質進入柴油燃料。",
        "text_en": "In response the «Dutiable Commodities (Marking and Colouring of Hydrocarbon oil) Regulations», colouring substance is added into the diesel fuel."
      },
      "B": {
        "text_tc": "柴油燃料與空氣接觸，產生氧化作用而呈現微紅色。",
        "text_en": "Diesel fuel contacting with air and produce oxide showed reddish colour."
      },
      "C": {
        "text_tc": "柴油燃料與空氣中的水份接觸，產生化學作用而呈現微紅色。",
        "text_en": "Diesel fuel contacting with the moisture in ambient air, produced chemical reaction and shown reddish colour."
      },
      "D": {
        "text_tc": "這是人為加進去的顏色，用作區分燃料油的品質及分級，微紅色標示該油料為 \"超低硫柴油 (ULSD)\"。",
        "text_en": "It is artificial dye the diesel fuel to distinguish the grading and quality of the fuel, reddish colour means \"Ultra Low Sulphur Diesel (ULSD)\"."
      }
    },
    "answer": "A",
    "explanation_tc": "紅色柴油 = 香港《應課稅品（碳氫油類標記及染色）規例》規定免稅工業用柴油（如船用 marine diesel）必須染紅，以區別於應課稅嘅道路車輛用柴油。",
    "image_required": false,
    "image_status": "not_required",
    "image_asset_path": null,
    "image_webp_asset_path": null,
    "image_alt_tc": null,
    "production_score_inclusion": true,
    "source_pdf_url_tc": "https://www.mardep.gov.hk/filemanager/tc/share/pub-services/pdf/PVOC_exam_B_c.pdf",
    "source_pdf_url_en": "https://www.mardep.gov.hk/filemanager/en/share/pub-services/pdf/PVOC_exam_B.pdf"
  }
];
export const SOURCE_MANIFEST = [
  {
    "id": "src_peak_pvoc2_main",
    "url": "https://www.peak.edu.hk/exam/en/md",
    "title": "PEAK PVOC2 主頁",
    "type": "official_authoritative",
    "issuer": "PEAK / VTC",
    "last_checked": "2026-05-10",
    "what": [
      "fee",
      "address",
      "hotline",
      "cutoff_dates"
    ],
    "tier": "official_authoritative"
  },
  {
    "id": "src_peak_node_202",
    "url": "https://www.peak.edu.hk/exam/en/node/202",
    "title": "PEAK 公告：HK$580 fee adjustment 2026-04-01",
    "type": "official_authoritative",
    "issuer": "PEAK",
    "last_checked": "2026-05-10",
    "what": [
      "HK$580 effective 2026-04-01"
    ],
    "tier": "official_authoritative"
  },
  {
    "id": "src_peak_node_183",
    "url": "https://www.peak.edu.hk/exam/en/node/183",
    "title": "PEAK 公告：MD818 medical certificate 2025-06-30",
    "type": "official_authoritative",
    "issuer": "PEAK",
    "last_checked": "2026-05-10",
    "what": [
      "MD818 effective 2025-06-30"
    ],
    "tier": "official_authoritative"
  },
  {
    "id": "src_peak_handbook",
    "url": "https://www.peak.edu.hk/exam/en/doc/md_ExamHandbook.pdf",
    "title": "PEAK Examination Handbook (June 2025)",
    "type": "official_pdf",
    "issuer": "PEAK",
    "last_checked": "2026-05-10",
    "what": [
      "exam format",
      "remarking fee"
    ],
    "caveat": "§3.1 still lists HK$550 — superseded by Node 202",
    "tier": "official_authoritative"
  },
  {
    "id": "src_examrules",
    "url": "https://www.mardep.gov.hk/filemanager/en/share/pub-services/pdf/examrules_ploc.pdf",
    "title": "Examination Rules for PVOC (June 2025)",
    "type": "official_pdf",
    "issuer": "Marine Department",
    "last_checked": "2026-05-10",
    "what": [
      "§8.1 syllabus taxonomy",
      "MD818 §3.1(b)",
      "MD687 §4",
      "HK$220 cert fee"
    ],
    "tier": "official_authoritative"
  },
  {
    "id": "src_pvoc_guide",
    "url": "https://www.mardep.gov.hk/filemanager/en/share/pub-services/pdf/pvoc_guide.pdf",
    "title": "PVOC2 Examination Guidebook (May 2021)",
    "type": "official_pdf",
    "issuer": "Marine Department",
    "last_checked": "2026-05-10",
    "what": [
      "technical content",
      "anchor 4x scope",
      "Williamson turn",
      "VHF CH 20 broadcast"
    ],
    "caveat": "May 2021 edition; fairway count 10 superseded by 16 (2023)",
    "tier": "official_authoritative"
  },
  {
    "id": "src_md687",
    "url": "https://www.mardep.gov.hk/filemanager/en/share/forms/pdf/md687.pdf",
    "title": "MD687 Eyesight Test (Rev 2024/05)",
    "type": "official_form",
    "issuer": "Marine Department",
    "last_checked": "2026-05-10",
    "what": [
      "distant 6/9+6/12",
      "near M0.63/n5@40cm",
      "intermediate M1.25/n10@80cm",
      "Ishihara"
    ],
    "tier": "official_authoritative"
  },
  {
    "id": "src_md818",
    "url": "https://www.mardep.gov.hk/filemanager/en/share/forms/pdf/md818.pdf",
    "title": "MD818 Medical Fitness Certificate",
    "type": "official_form",
    "issuer": "Marine Department",
    "last_checked": "2026-05-10",
    "what": [
      "medical fitness requirement"
    ],
    "tier": "official_authoritative"
  },
  {
    "id": "src_md682",
    "url": "https://www.mardep.gov.hk/en/forms/pdf/md682.pdf",
    "title": "MD682 PVOC Application Form",
    "type": "official_form",
    "issuer": "Marine Department",
    "last_checked": "2026-05-10",
    "what": [
      "certificate application"
    ],
    "tier": "official_authoritative"
  },
  {
    "id": "src_vts_vscp",
    "url": "https://www.mardep.gov.hk/filemanager/en/share/pub-services/pdf/vts_vscp.pdf",
    "title": "Hong Kong VTS VHF Sectors (Sept 2025)",
    "type": "official_pdf",
    "issuer": "Marine Department",
    "last_checked": "2026-05-10",
    "what": [
      "CH 02/12/14/63/67 sectors",
      "CH 74 KCCS"
    ],
    "tier": "official_authoritative"
  },
  {
    "id": "src_visiting_yachts",
    "url": "https://www.mardep.gov.hk/en/public-services/port-services/notes-ymaster/index.html",
    "title": "Information Notes for Masters of Visiting Yachts",
    "type": "official_webpage",
    "issuer": "Marine Department",
    "last_checked": "2026-05-10",
    "what": [
      "VHF emergency protocol",
      "VTC 2233 7801/7808",
      "MRCC 2233 7999"
    ],
    "tier": "official_authoritative"
  },
  {
    "id": "src_mrcc",
    "url": "https://www.mardep.gov.hk/en/public-services/port-services/search-and-rescue/index.html",
    "title": "Hong Kong MRCC",
    "type": "official_webpage",
    "issuer": "Marine Department",
    "last_checked": "2026-05-10",
    "what": [
      "MRCC 2233 7999",
      "MAYDAY format"
    ],
    "tier": "official_authoritative"
  },
  {
    "id": "src_fairways",
    "url": "https://www.mardep.gov.hk/en/public-services/port-services/fairway/index.html",
    "title": "Traffic Separation Schemes / Principal Fairways",
    "type": "official_webpage",
    "issuer": "Marine Department",
    "last_checked": "2026-05-10",
    "what": [
      "16 fairways",
      "2 TSS"
    ],
    "caveat": "Revised 2023-12-18 post MDN 75/2023",
    "tier": "official_authoritative"
  },
  {
    "id": "src_typhoon_shelters",
    "url": "https://www.mardep.gov.hk/en/public-services/port-services/lpf-tshelter/index.html",
    "title": "Typhoon Shelters",
    "type": "official_webpage",
    "issuer": "Marine Department",
    "last_checked": "2026-05-10",
    "what": [
      "14 shelters",
      "5-knot limit"
    ],
    "tier": "official_authoritative"
  },
  {
    "id": "src_speed_limit",
    "url": "https://www.mardep.gov.hk/filemanager/en/share/publications/pdf/materials/hps_speed_limit.pdf",
    "title": "Speed Limits in HK Waters Leaflet",
    "type": "official_pdf",
    "issuer": "Marine Department",
    "last_checked": "2026-05-10",
    "what": [
      "Zone A/B/C",
      "K3 Hebe Haven year-round"
    ],
    "tier": "official_authoritative"
  },
  {
    "id": "src_pvoc_exam_a_en",
    "url": "https://www.mardep.gov.hk/filemanager/en/share/pub-services/pdf/PVOC_exam_A.pdf",
    "title": "PVOC2 Part A Mock Exam (English)",
    "type": "official_pdf",
    "issuer": "Marine Department",
    "last_checked": "2026-05-10",
    "sha256_proxy": "90bcd7cc4132f0ada21c5bfe518a0b1b91148f9f3c9c6792ab7d63e2fbd0dad3",
    "what": [
      "40 official questions Part A EN"
    ],
    "tier": "official_authoritative"
  },
  {
    "id": "src_pvoc_exam_b_en",
    "url": "https://www.mardep.gov.hk/filemanager/en/share/pub-services/pdf/PVOC_exam_B.pdf",
    "title": "PVOC2 Part B Mock Exam (English)",
    "type": "official_pdf",
    "issuer": "Marine Department",
    "last_checked": "2026-05-10",
    "sha256_proxy": "a2b4854b1069dea9884260ab72459030fa9a18ab51f9375c3271e82de1b39745",
    "what": [
      "40 official questions Part B EN"
    ],
    "tier": "official_authoritative"
  },
  {
    "id": "src_pvoc_exam_a_tc",
    "url": "https://www.mardep.gov.hk/filemanager/tc/share/pub-services/pdf/PVOC_exam_A_c.pdf",
    "title": "PVOC2 甲部模擬試題（中文版）",
    "type": "official_pdf",
    "issuer": "海事處",
    "last_checked": "2026-05-10",
    "sha256_proxy": "90bcd7cc4132f0ada21c5bfe518a0b1b91148f9f3c9c6792ab7d63e2fbd0dad3",
    "what": [
      "40 official questions Part A TC",
      "imported in v2.1"
    ],
    "tier": "official_authoritative"
  },
  {
    "id": "src_pvoc_exam_b_tc",
    "url": "https://www.mardep.gov.hk/filemanager/tc/share/pub-services/pdf/PVOC_exam_B_c.pdf",
    "title": "PVOC2 乙部模擬試題（中文版）",
    "type": "official_pdf",
    "issuer": "海事處",
    "last_checked": "2026-05-10",
    "sha256_proxy": "a2b4854b1069dea9884260ab72459030fa9a18ab51f9375c3271e82de1b39745",
    "what": [
      "40 official questions Part B TC",
      "imported in v2.1"
    ],
    "tier": "official_authoritative"
  },
  {
    "id": "src_iaaa_map",
    "url": "https://www.mardep.gov.hk/filemanager/en/share/publications/pdf/materials/iaaa.pdf",
    "title": "Hong Kong International Airport Approach Areas Map",
    "type": "official_pdf",
    "issuer": "Marine Department",
    "last_checked": "2026-05-10",
    "what": [
      "HKIAAA Areas 1-8 map for Q22"
    ],
    "tier": "official_authoritative"
  },
  {
    "id": "src_mdn_105_2022",
    "url": "https://www.mardep.gov.hk/filemanager/tc/share/notices/pdf/mdn22105c.pdf",
    "title": "海事處公告 105/2022（修訂機場進口航道區邊界）",
    "type": "official_pdf",
    "issuer": "海事處",
    "last_checked": "2026-05-10",
    "what": [
      "Area 3 revised 2022-05-31 (18-point polygon)"
    ],
    "tier": "official_authoritative"
  },
  {
    "id": "src_cap_313a_5sch",
    "url": "https://faolex.fao.org/docs/pdf/hk90257.pdf",
    "title": "Cap. 313A Shipping & Port Control Regulations 5th Schedule",
    "type": "secondary_legal_archive",
    "issuer": "FAO LEX (mirroring HK legislation)",
    "last_checked": "2026-05-10",
    "what": [
      "HKIAAA WGS84 boundaries paragraphs 5-12"
    ],
    "caveat": "Mirror of HK e-legislation; for citation, refer to elegislation.gov.hk current version",
    "tier": "official_authoritative"
  },
  {
    "id": "src_billygoout",
    "url": "https://www.youtube.com/watch?v=12GBGP45_Uw",
    "title": "BillyGoOut PVOC2 經驗分享",
    "type": "secondary_candidate_anecdote",
    "issuer": "BillyGoOut (YouTube)",
    "last_checked": "2026-05-10",
    "what": [
      "candidate strategy"
    ],
    "caveat": "2022-03-28; pre-MD818 pre-HK$580",
    "verified_timestamps": [
      "0:37",
      "3:51",
      "4:49",
      "10:00",
      "13:03",
      "16:03"
    ],
    "tier": "secondary_reference"
  },
  {
    "id": "src_lihkg_767364",
    "url": "https://lihkg.com/thread/767364",
    "title": "LIHKG: 考二級遊樂船牌 course 推介",
    "type": "secondary_forum",
    "issuer": "LIHKG users",
    "last_checked": "2026-05-10",
    "caveat": "anti-bot HTTP 402; surface treatment only",
    "tier": "secondary_reference"
  }
];
export const BUILD_META = {
  "build_version": "3.0.0",
  "scored_questions": 80,
  "total_questions": 80,
  "last_audit_date": "2026-05-10"
};
